<i18n>
{
    "en": {
        "toto": "I am English"
    },
    "fr": {
        "toto": "Je suis français"
    }
}
</i18n>

<template>
  <div>
    <aeris-language></aeris-language>
    <button @click="changeLang">{{ languageToChangeTo }}</button>
    <p>{{ $t("toto") }}</p>
  </div>
</template>

<script>
import { AerisLanguage } from "../../../lib/modules/aeris-commons-components";

export default {
  components: {
    AerisLanguage
  },
  data() {
    return {
      language: ""
    };
  },
  methods: {
    changeLang() {
      this.language = this.language === "en" ? "fr" : "en";
      this.$store.commit("setLanguage", this.language);
    }
  },
  watch: {
    getLanguage(lang) {
      this.$i18n.locale = lang;
    }
  },
  computed: {
    getLanguage() {
      return this.$store.getters.getLanguage;
    },
    languageToChangeTo() {
      return this.language === "fr" ? "en" : "fr";
    }
  },
  created() {
    this.$i18n.locale = this.getLanguage;
    this.language = this.getLanguage;
    console.log(this.language);
  }
};
</script>
