<i18n>
{
  "en" : {
    "chooseDate": "Choose date"
  },
  "fr": {
    "chooseDate": "Choisir date"
  }
}
</i18n>

<template>
  <div class="aeris-datepicker">
    <div class="aeris-input-group">
      <form autocomplete="off">
        <label v-if="label" for="input__datepicker" @click.prevent="toggle">{{ $t(label.key) }}</label>
        <input
          id="input__datepicker"
          :placeholder="$t('chooseDate')"
          v-model="date"
          type="text"
          readonly
          @click.stop="toggle"
        />
      </form>
    </div>
    <aeris-datepicker-modal
      v-if="visible"
      :date-from-input="date"
      :theme="theme"
      :format="format"
      :daymin="daymin"
      :daymax="daymax"
      :language="language"
      @dateChange="setDate"
      @close="getInfo"
    ></aeris-datepicker-modal>
  </div>
</template>

<script>
import AerisDatepickerModal from "./aeris-datepicker-modal";

export default {
  name: "aeris-datepicker",

  components: { AerisDatepickerModal },

  props: {
    language: {
      type: String,
      default: "en"
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
    daymin: {
      type: String,
      default: "1970-01-01"
    },
    daymax: {
      type: String,
      default: null
    },
    label: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      visible: false,
      date: ""
    };
  },

  watch: {
    language(language) {
      this.$i18n.locale = language;
    }
  },

  computed: {
    getLanguage() {
      return this.language || this.$store.getters.getLanguage;
    }
  },

  created() {
    this.$i18n.locale = this.getLanguage;
    if (this.label) {
      // add translation for label to i18n messages
      this.$i18n.mergeLocaleMessage(this.$i18n.locale, this.label.lang[this.$i18n.locale]);
    }
  },

  methods: {
    toggle() {
      this.visible = !this.visible;
    },

    setDate(value) {
      this.date = value;
      this.$emit("date", this.date);
    },

    getInfo(value) {
      if (value === "VALIDATE") {
        this.visible = false;
      }
    },

    resetDate() {
      this.date = "";
    }
  }
};
</script>

<style scoped>
.aeris-input-group form {
  max-width: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  margin: 5px;
  line-height: 25px;
  background-color: rgba(172, 220, 238, 0.3);
  border-radius: 5px;
}

.aeris-input-group form label {
  text-align: center;
  color: #525556;
  font-size: 0.9rem;
  margin: 5px 0;
  padding: 0 10px;
  line-height: 20px;
  border-right: 1px solid #fff;
  min-width: 60px;
  text-align: center;
}

[id="input__datepicker"] {
  width: 150px;
  background-color: transparent;
  border: none;
  padding-left: 10px;
}

[id="input__datepicker"]:focus {
  outline: none;
}
</style>
