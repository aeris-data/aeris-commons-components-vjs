<template>
  <div>
    <div id="catalogue" class="catalogue">
      <input type="button" value="Reset" @click="resetDate" />
      <div id="criteria" class="criteria">
        <aeris-datepicker
          ref="datePicker1"
          :theme="{ emphasis: '#f39c12' }"
          :label="{
            key: 'from',
            lang: {
              en: { from: 'From' },
              fr: { from: 'De' }
            }
          }"
          format="DD/MM/YYYY HH:mm"
          language="en"
          @date="setFromDate"
        ></aeris-datepicker>
        <aeris-datepicker
          ref="datePicker2"
          :theme="{ emphasis: '#6fbfb2' }"
          :label="{
            key: 'to',
            lang: {
              en: { to: 'To' },
              fr: { to: 'À' }
            }
          }"
          format="DD/MM/YYYY"
          language="fr"
          @date="setToDate"
        ></aeris-datepicker>
        <p>Date from : {{ fromDate }}</p>
        <p>Date to : {{ toDate }}</p>
      </div>
      <div class="cart">Téléchargement</div>
      <div class="summaries">Summaries</div>
      <div class="sheet">Metadata</div>
    </div>
  </div>
</template>

<script>
import { AerisDatepicker } from "../../../lib/modules/aeris-commons-components";

export default {
  components: {
    AerisDatepicker
  },
  data() {
    return {
      fromDate: "",
      toDate: ""
    };
  },
  methods: {
    setFromDate(value) {
      this.fromDate = value;
    },
    setToDate(value) {
      this.toDate = value;
    },

    resetDate() {
      this.$refs.datePicker1.resetDate();
      this.$refs.datePicker2.resetDate();
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.catalogue {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #eee;
  display: grid;
  grid-template-columns: 20% 20% 60%;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "criteria cart      sheet"
    "criteria summaries sheet";
}

.criteria,
.cart,
.summaries {
  padding: 20px;
  position: relative;
}

.criteria {
  grid-area: criteria;
  background-color: #f5f5f5;
}

.cart {
  grid-area: cart;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.summaries {
  grid-area: summaries;
}

.sheet {
  grid-area: sheet;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
