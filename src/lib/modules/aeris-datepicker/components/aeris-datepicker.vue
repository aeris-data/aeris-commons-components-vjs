<i18n src="../lang/dates.json"></i18n>

<template>
  <span v-show="visible" :style="applyTheme" class="aeris-datepicker-host">
    <div class="dp-container unselectable">
      <header class="dp-header">
        <div :class="firstMonth ? 'disable' : ''" class="dp-header-left dp-header-button" @click="prevMonth">
          <i class="fa fa-chevron-left" />
        </div>
        <div class="dp-header-central">
          <div class="dp-current-date">
            <div class="dp-selectors">
              <div id="monthSelect">
                <select v-model="selectedMonth" @change="refreshMonth">
                  <option v-for="id in allMonthIds" :value="id" :key="id">{{ $t(allMonths[id]) }}</option>
                </select>
              </div>
              <div id="yearSelect">
                <select v-model="selectedYear" @change="refreshYear">
                  <option v-for="year in allYears" :value="year" :key="year">{{ year }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div :class="lastMonth ? 'disable' : ''" class="dp-header-right dp-header-button" @click="nextMonth">
          <i class="fa fa-chevron-right" />
        </div>
      </header>

      <main class="dp-main">
        <div class="dp-title-line">
          <span v-for="day in allDays" :key="day" class="dp-day">{{ $t(day) }}</span>
        </div>
        <div class="dp-main-calendar">
          <div v-for="(offset, index) in offsetBefore" :key="`offset-${index}`" class="dp-day" />
          <div
            v-for="(day, index) in monthDays"
            :class="computeDayClass(day)"
            :key="`day-${index}`"
            class="dp-day"
            @click="clickDay"
          >
            {{ day.date() }}
          </div>
        </div>
        <div v-if="hasHour" class="dp-selectors dp-hours">
          <div id="hourSelect">
            <select v-model="selectedHour" @change="refreshHour">
              <option v-for="hour in allHours" :value="hour" :key="hour">{{ hour }}</option>
            </select>
          </div>
          <sup>h</sup>
          <div id="minSelect">
            <select v-model="selectedMin" @change="refreshHour">
              <option v-for="min in allMins" :value="min" :key="min">{{ min }}</option>
            </select>
          </div>
          <sup>min</sup>
        </div>
      </main>

      <footer class="dp-footer">
        <button v-if="hasToday" class="today-button" @click="setToToday">{{ $t("today") }}</button>
        <button id="validate-btn" @click="validate">{{ $t("validate") }}</button>
      </footer>
    </div>
  </span>
</template>

<script>
import moment from "moment";
import { extendMoment } from "moment-range";
import dates from "../lang/dates.json";

window.momentCst = extendMoment(moment);
const DAYS = Object.keys(dates.en).slice(-7);
const MONTHS = Object.keys(dates.en).slice(0, 12);

export default {
  props: {
    language: {
      type: String,
      default: ""
    },
    theme: {
      type: Object,
      default: () => {
        return {};
      }
    },
    format: {
      type: String,
      default: "DD/MM/YYYY"
    },
    for: {
      type: String,
      default: ""
    },
    daymin: {
      type: String,
      default: "1970-01-01"
    },
    daymax: {
      type: String,
      default: null
    }
  },

  data() {
    return {
      currentDate: moment(),
      selected: null,
      allDays: DAYS,
      allMonths: MONTHS,
      allHours: ["00", "01"],
      allMins: ["00"],
      selectedDay: moment().day(),
      selectedYear: moment().year(),
      selectedMonth: moment().month(),
      selectedHour: "00",
      selectedMin: "00",
      targetElement: null,
      visible: false,
      clickListener: null,
      closeListener: null,
      targetChecker: null,
      lastMonth: false,
      firstMonth: false,
      isActualMonth: true
    };
  },

  computed: {
    getLanguage() {
      return this.language || this.$store.getters.getLanguage;
    },

    getTheme() {
      return this.theme.emphasis || this.$store.getters.getPrimaryColor;
    },

    applyTheme() {
      return {
        "--emphasis": this.theme.emphasis
      };
    },

    dateMin() {
      return moment(this.daymin, "YYYY-MM-DD");
    },

    dateMax() {
      let date;
      if (!this.daymax) {
        date = moment(moment().year() + 10 + "-12-31", "YYYY-MM-DD");
      } else if (this.daymax.toLowerCase() == "now") {
        date = moment();
      } else {
        date = moment(this.daymax, "YYYY-MM-DD");
      }
      return date;
    },

    hasHour() {
      if (this.format.toLowerCase().indexOf("h") >= 0) {
        return true;
      } else {
        return false;
      }
    },

    hasToday() {
      let nowmoins = moment().subtract(1, "days");
      let nowplus = moment().add(1, "days");
      if (nowmoins.isBefore(this.dateMax) && nowplus.isAfter(this.dateMin)) {
        return true;
      } else {
        return false;
      }
    },

    allMonthIds() {
      let ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      if (this.dateMax.year() == this.currentSelectedYear) {
        let endMonth = this.dateMax.month();
        return ids.slice(0, endMonth + 1);
      }
      if (this.dateMin.year() == this.currentSelectedYear) {
        let firstMonth = this.dateMin.month();
        return ids.slice(firstMonth, 12);
      }
      return ids;
    },

    allYears() {
      let maxYear = this.dateMax.year();
      let minYear = this.dateMin.year();
      let result = [];
      for (let i = maxYear; i >= minYear; i--) {
        result.push(i);
      }
      return result;
    },

    start() {
      return this.currentDate.date(1);
    },

    end() {
      return this.currentDate.clone().endOf("month");
    },

    monthDays() {
      let range = window.momentCst.range(this.start, this.end);
      let result = [];
      for (let day of range.by("days")) {
        result.push(day);
      }
      return result;
    },

    offsetBefore() {
      let weekDay = this.start.day() - 1;
      if (weekDay === -1) weekDay = 6;
      let result = [];
      for (let i = 0; i < weekDay; i++) {
        result.push("blank");
      }
      return result;
    }
  },

  watch: {
    getLanguage(value) {
      this.$i18n.locale = value;
    },
    getTheme(value) {
      this.theme.emphasis = value;
    }
  },

  created() {
    this.$i18n.locale = this.getLanguage;
    this.theme.emphasis = this.getTheme;

    this.clickListener = this.closeOnClick.bind(this);
    document.addEventListener("mousedown", this.clickListener);
    this.closeListener = this.close.bind(this);
    document.addEventListener("keypress", this.closeListener);

    this.allHours = this.timeRange(0, 24);
    this.allMins = this.timeRange(0, 60);
  },

  mounted() {
    this.$el.addEventListener("mousedown", function(e) {
      e.stopPropagation();
    });
    this.targetChecker = setInterval(this.lookForTarget.bind(this), 1000);
  },

  destroyed() {
    document.removeEventListener("mousedown", this.clickListener);
    this.clickListener = null;
    document.removeEventListener("keypress", this.closeListener);
    this.closeListener = null;
  },

  methods: {
    lookForTarget() {
      if (this.for === "") return;
      let el = document.querySelector(this.for);
      if (el) {
        this.targetElement = el;
        clearInterval(this.targetChecker);
      }
    },

    timeRange(start, stop, step = 1) {
      return Array.from({ length: (stop - start) / step }, (_, i) => start + i * step).map(n =>
        n < 10 ? "0" + n : "" + n
      );
    },

    isDescendant(parent, child) {
      let node = child.parentNode;
      while (node != null) {
        if (node == parent) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    },

    close(e) {
      if (e.target == this.targetElement) {
        this.visible = false;
      }
    },

    closeOnClick(e) {
      if (e.target == this.targetElement) {
        this.show();
        return;
      }
      if (!this.isDescendant(this.$el, e.target)) {
        this.visible = false;
      }
    },

    show() {
      this.visible = !this.visible;
      if (this.visible) {
        let date = moment(this.targetElement.value, this.format);
        this.setDefaultDate(date);
      }
    },

    setDefaultDate(date) {
      if (!date.isValid()) {
        date = moment();
      }
      if (date.isBefore(this.dateMin)) {
        this.setCurrentDate(this.dateMin);
      } else if (date.isAfter(this.dateMax)) {
        this.setCurrentDate(this.dateMax);
      } else {
        this.setCurrentDate(date);
      }
      this.selected = moment(this.currentDate);
    },

    refreshYear() {
      let date = this.currentDate.clone();
      date.month(this.selectedMonth);
      date.year(this.selectedYear);
      if (date.isBefore(this.dateMin)) {
        date.month(this.dateMin.month());
      }
      if (date.isAfter(this.dateMax)) {
        date.month(this.dateMax.month());
      }
      this.slideTo(date);
    },

    refreshMonth() {
      let date = this.currentDate.clone();
      date.month(this.selectedMonth);
      date.year(this.selectedYear);
      this.refreshHour(date);
      this.slideTo(date);
    },

    refreshHour() {
      let date = moment({
        year: this.currentDate.year(),
        month: this.currentDate.month(),
        day: this.selectedDay,
        hour: this.currentDate.hour(),
        minutes: this.currentDate.minutes()
      });

      if (this.hasHour) {
        date.hour(this.selectedHour);
        date.minutes(this.selectedMin);
      }
      this.setCurrentDate(date);
      this.setDate(date);
    },

    computeDayClass(day) {
      let classes = day.isBefore(this.dateMin) || day.isAfter(this.dateMax) ? "disabled" : "clickable";

      if (this.isActualMonth) {
        classes += moment().isSame(day, "days") ? " is-today" : "";
      }
      classes += day.isSame(this.selected, "days") ? " day-selected" : "";
      return classes;
    },

    setCurrentDate(date) {
      if (date && date.isValid()) {
        this.currentDate = moment(date);
      } else {
        this.currentDate = moment();
      }

      this.isActualMonth = moment().isSame(this.currentDate, "month");
      this.selectedDay = this.currentDate.format("DD");
      this.selectedMonth = this.currentDate.month();
      this.selectedYear = this.currentDate.year();
      if (this.hasHour) {
        this.selectedHour = this.currentDate.format("HH");
        this.selectedMin = this.currentDate.format("mm");
      }
    },

    setToToday() {
      this.selected = moment();
      this.setCurrentDate(this.selected);
      this.setTarget();
    },

    setDate(date) {
      this.selected = moment(date);
      this.setCurrentDate(date);
      this.setTarget();
    },

    setTarget() {
      this.targetElement.value = this.selected.format(this.format);
      let event = new InputEvent("input");
      this.targetElement.dispatchEvent(event);
    },

    clickDay(e) {
      let isClickable = e.target.classList.contains("clickable") ? true : false;
      if (isClickable) {
        let elt = e.currentTarget || e.srcElement;
        this.selectedDay = parseInt(elt.innerText);
        let date = moment({
          year: this.currentDate.year(),
          month: this.currentDate.month(),
          day: this.selectedDay,
          hour: this.currentDate.hour(),
          minutes: this.currentDate.minutes()
        });

        this.setDate(date);
      }
    },

    validate() {
      this.setTarget();
      this.visible = false;
    },

    slideTo(date) {
      if (date.isBefore(this.currentDate)) {
        this.slideLeftTo(date);
      } else {
        this.slideRightTo(date);
      }
    },

    slideLeftTo(date) {
      let titleEl = this.$el.querySelector(".dp-current-date");
      let calendarEl = this.$el.querySelector(".dp-main-calendar");

      titleEl.classList.add("slideOutRight");
      calendarEl.classList.add("slideOutTop");

      window.setTimeout(() => {
        titleEl.classList.remove("slideOutRight");
        calendarEl.classList.remove("slideOutTop");
        this.setCurrentDate(date);
        titleEl.classList.add("slideInLeft");
        calendarEl.classList.add("slideInBottom");
      }, 200);

      window.setTimeout(() => {
        titleEl.classList.remove("slideInLeft");
        calendarEl.classList.remove("slideInBottom");
      }, 600);
    },

    slideRightTo(date) {
      let titleEl = this.$el.querySelector(".dp-current-date");
      let calendarEl = this.$el.querySelector(".dp-main-calendar");

      titleEl.classList.add("slideOutLeft");
      calendarEl.classList.add("slideOutBottom");

      window.setTimeout(() => {
        titleEl.classList.remove("slideOutLeft");
        calendarEl.classList.remove("slideOutBottom");
        this.setCurrentDate(date);
        titleEl.classList.add("slideInRight");
        calendarEl.classList.add("slideInTop");
      }, 200);

      window.setTimeout(() => {
        titleEl.classList.remove("slideInRight");
        calendarEl.classList.remove("slideInTop");
      }, 600);
    },

    prevMonth() {
      let date = moment(this.currentDate).subtract(1, "months");
      this.slideTo(date);
    },

    nextMonth() {
      let date = moment(this.currentDate).add(1, "months");
      this.slideTo(date);
    }
  }
};
</script>

<style scoped>
.aeris-datepicker-host {
  position: fixed;
  z-index: 1;
  display: block;
  font-family: "Open Sans", sans-serif;
  transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: scale(1);
  opacity: 1;
  transform-origin: top left;
}

.aeris-datepicker-host div {
  box-sizing: border-box;
}

.aeris-datepicker-host.hidden {
  transform: scale(0);
  opacity: 0;
}

.unselectable {
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.dp-container {
  display: flex;
  flex-flow: column nowrap;
  min-width: 17em;
  border: var(--emphasis);
  box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.1);
}

.dp-header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: var(--emphasis);
  color: #fff;
}

.dp-header .dp-header-button {
  display: flex;
  align-items: center;
  cursor: pointer;
  pointer-events: auto;
}

.dp-header .dp-header-button.disable {
  cursor: none;
  opacity: 0;
  pointer-events: none;
}

.dp-header .dp-header-button:hover {
  opacity: 0.6;
}

.dp-header .dp-current-date {
  width: 100%;
  margin: 5px 0;
  padding: 10px;
  transition: 0.3s;
  font-weight: normal;
  color: #fff;
  font-size: 24px;
  opacity: 1;
}

.dp-main {
  padding: 10px;
  background-color: #fff;
}

.dp-main .dp-title-line,
.dp-main .dp-main-calendar {
  display: flex;
  justify-content: flex-start;
  flex-flow: row nowrap;
  width: 210px;
  margin: 0 auto;
}

.dp-main .dp-title-line {
  font-size: 12px;
}

.dp-main .dp-main-calendar {
  flex-wrap: wrap;
  align-items: flex-start;
  font-size: 14px;
}

.dp-main .dp-day {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
}

.dp-main .disabled {
  color: #bbb;
}

.dp-main .clickable {
  position: relative;
}

.dp-main .clickable:hover {
  cursor: pointer;
}

.dp-main .clickable:hover:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--emphasis);
  border-radius: 50%;
  opacity: 0.1;
}

.dp-main .is-today {
  color: var(--emphasis);
  font-weight: 700;
}

.dp-main .day-selected {
  border: 2px solid var(--emphasis);
  border-radius: 50%;
}

.dp-selectors {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.dp-main .dp-hours.dp-selectors {
  line-height: 24px;
  color: var(--emphasis);
  margin-top: 5px;
}

.dp-selectors select {
  cursor: pointer;
  margin-right: 1px;
  border: none;
  font-size: 20px;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  /* hide outline on mozilla */
  color: #000;
  color: rgba(0, 0, 0, 0);
  text-shadow: 0 0 0 #fff;
}

.dp-hours.dp-selectors select {
  /* replace color because of the outline for firefox */
  text-shadow: 0 0 0 var(--emphasis);
  padding: 2px;
  text-align: center;
  text-align-last: center;
}

.dp-selectors [id="yearSelect"] select {
  text-align: right;
}

.dp-selectors [id="monthSelect"] select {
  text-align: left;
  text-align-last: left;
}

.dp-selectors [id="yearSelect"],
.dp-selectors [id="monthSelect"],
.dp-selectors [id="hourSelect"],
.dp-selectors [id="minSelect"] {
  display: flex;
  position: relative;
  overflow: hidden;
}

.dp-selectors [id="yearSelect"]::after,
.dp-selectors [id="monthSelect"]::after,
.dp-selectors [id="hourSelect"]::after,
.dp-selectors [id="minSelect"]::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translate(5px);
  height: 1px;
  width: 20px;
  border-bottom: 1px dashed #fff;
}

.dp-selectors [id="hourSelect"]::after,
.dp-selectors [id="minSelect"]::after {
  border-bottom: 1px dashed var(--emphasis);
  opacity: 1;
  left: 3px;
  width: 12px;
}

select::-ms-expand {
  display: none;
}

.dp-footer {
  padding: 10px;
  background-color: #fff;
}

.dp-footer .today-button,
.dp-footer [id="validate-btn"] {
  padding: 5px 10px;
  width: 100%;
  border: 1px solid var(--emphasis);
  text-align: center;
  color: var(--emphasis);
  background-color: transparent;
}

.dp-footer .today-button:focus,
.dp-footer [id="validate-btn"]:focus {
  transform: translate(2px, 2px);
}

.dp-footer .today-button:hover,
.dp-footer [id="validate-btn"]:hover {
  cursor: pointer;
}

.dp-footer [id="validate-btn"] {
  margin-top: 10px;
  border: none;
  background-color: var(--emphasis);
  color: #fff;
}

.slideInRight {
  animation-name: slideInRight;
  animation-duration: 0.3s;
}

@keyframes slideInRight {
  from {
    transform: translate(50px);
    opacity: 0;
  }

  to {
    transform: translate(0);
    opacity: 1;
  }
}

.slideOutRight {
  animation-name: slideOutRight;
  animation-duration: 0.3s;
}

@keyframes slideOutRight {
  from {
    transform: translate(0);
    opacity: 1;
  }

  to {
    transform: translate(50px);
    opacity: 0;
  }
}

.slideInLeft {
  animation-name: slideInLeft;
  animation-duration: 0.3s;
}

@keyframes slideInLeft {
  from {
    transform: translate(-50px);
    opacity: 0;
  }

  to {
    transform: translate(0);
    opacity: 1;
  }
}

.slideOutLeft {
  animation-name: slideOutLeft;
  animation-duration: 0.3s;
}

@keyframes slideOutLeft {
  from {
    transform: translate(0);
    opacity: 1;
  }

  to {
    transform: translate(-50px);
    opacity: 0;
  }
}

.slideInBottom {
  animation-name: slideInBottom;
  animation-duration: 0.6s;
}

@keyframes slideInBottom {
  from {
    transform: translateY(10px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.slideOutBottom {
  animation-name: slideOutBottom;
  animation-duration: 0.6s;
}

@keyframes slideOutBottom {
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(10px);
    opacity: 0;
  }
}

.slideInTop {
  animation-name: slideInTop;
  animation-duration: 0.6s;
}

@keyframes slideInTop {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.slideOutTop {
  animation-name: slideOutTop;
  animation-duration: 0.6s;
}

@keyframes slideOutTop {
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(-10px);
    opacity: 0;
  }
}

/* Chrome 29+ */
@media screen and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
  .dp-main .dp-hours.dp-selectors [id="minSelect"] {
    margin-left: 4px;
  }

  .dp-selectors [id="yearSelect"]::after,
  .dp-selectors [id="monthSelect"]::after {
    left: -4px;
  }

  .dp-selectors [id="hourSelect"]::after,
  .dp-selectors [id="minSelect"]::after {
    left: -2px;
  }

  .dp-selectors select option {
    color: #333;
  }
}

/* remove outline from buttons, anchor tags, etc. */
a:focus,
a:active,
button::-moz-focus-inner,
input[type="reset"]::-moz-focus-inner,
input[type="button"]::-moz-focus-inner,
input[type="submit"]::-moz-focus-inner,
select::-moz-focus-inner,
input[type="file"] > input[type="button"]::-moz-focus-inner {
  border: 0;
  outline: 0;
}
</style>
