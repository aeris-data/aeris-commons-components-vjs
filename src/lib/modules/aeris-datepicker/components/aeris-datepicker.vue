<i18n>
{
  "en" : {
    "from": "from",
    "to": "to",
    "chooseDate": "Choose date"
  },
  "fr": {
    "from": "de",
    "to": "à",
    "chooseDate": "Choisir date"
  }
}
</i18n>

<template>
  <div class="aeris-datepicker">
    <div class="aeris-input-group">
      <form autocomplete="off">
        <label v-if="from" @click="toggle">{{ $t("from") }}</label>
        <label v-if="to" @click="toggle">{{ $t("to") }}</label>
        <input
          id="input__datepicker"
          :placeholder="$t('chooseDate')"
          v-model="date"
          type="text"
          readonly
          @click="toggle"
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
      language="fr"
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
    daymin: {
      type: String,
      default: "1970-01-01"
    },
    daymax: {
      type: String,
      default: null
    },
    from: {
      type: Boolean,
      default: false
    },
    to: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      visible: false,
      date: ""
    };
  },

  watch: {
    getLanguage(lang) {
      this.$i18n.locale = lang;
    }
  },

  computed: {
    getLanguage() {
      return this.$store.getters.getLanguage;
    }
  },

  created() {
    this.$i18n.locale = this.language || this.getLanguage;
  },

  methods: {
    toggle() {
      this.visible = !this.visible;
    },

    setDate(value) {
      this.date = value;
      if (this.from) {
        this.$store.commit("setFromDate", this.date);
      }
      if (this.to) {
        this.$store.commit("setToDate", this.date);
      }
    },

    getInfo(value) {
      if (value === "VALIDATE") {
        this.visible = false;
      }
    }
  }
};
</script>

<style scoped>
.aeris-input-group form {
  width: 100%;
  display: flex;
  justify-content: space-between;
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
  padding: 5px 10px;
}

[id="input__datepicker"] {
  background-color: transparent;
  border: none;
  border-left: 1px solid #fff;
  padding-left: 10px;
}

[id="input__datepicker"]:focus {
  outline: none;
}
</style>
