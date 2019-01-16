<template>
  <div/>
</template>

<script>
export default {
  props: {
    orcid: {
      type: String,
      default: null
    }
  },

  watch: {
    orcid(orcid) {
      if (orcid) {
        this.$store.commit("setOrcid", orcid);
      }
    }
  }
};
</script>

