<template>
  <div />
</template>
<script>
export default {
  props: {
    language: {
      type: String,
      default: "en"
    }
  },

  watch: {
    language(language) {
      if (language) {
        this.$store.commit("setLanguage", language);
      }
    }
  },

  created() {
    let browserLanguage = document.documentElement.lang.split("-")[0];
    if (browserLanguage) {
      this.$store.commit("setLanguage", browserLanguage);
    } else {
      this.$store.commit("setLanguage", this.language);
    }
  }
};
</script>
