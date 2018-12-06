<template>
  <div />
</template>

<script>
export default {
  props: {
    primaryColor: {
      type: String,
      default: null
    },
    secondaryColor: {
      type: String,
      default: null
    }
  },

  watch: {
    primaryColor(primaryColor) {
      if (primaryColor) {
        this.$store.commit("setPrimaryColor", primaryColor);
      }
    },
    secondaryColor(secondaryColor) {
      if (secondaryColor) {
        this.$store.commit("setSecondaryColor", secondaryColor);
      }
    }
  },

  created() {
    let primary = document.body.getAttribute("data-color");
    let secondary = document.body.getAttribute("data-secondary-color");

    if (primary) {
      this.$store.commit("setPrimaryColor", primary);
    }

    if (secondary) {
      this.$store.commit("setSecondaryColor", secondary);
    }
  }
};
</script>
