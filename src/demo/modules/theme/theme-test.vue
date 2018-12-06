<template>
  <div>
    <aeris-theme :primary-color="primaryColor" :secondary-color="secondaryColor"></aeris-theme>
    <button @click="changeTheme">Change color</button>
    <div :style="'background-color:' + primaryColor">Primary color</div>

    <div :style="'background-color:' + secondaryColor">Secondary color</div>
  </div>
</template>

<script>
import AerisTheme from "../../../lib/modules/aeris-theme/components/aeris-theme.vue";

export default {
  components: {
    AerisTheme
  },
  data() {
    return {
      primaryColor: "",
      secondaryColor: ""
    };
  },
  methods: {
    changeTheme() {
      this.primaryColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
      this.secondaryColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
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
  computed: {
    getPrimaryColor() {
      return this.$store.getters.getPrimaryColor;
    },
    getSecondaryColor() {
      return this.$store.getters.getSecondaryColor;
    }
  },
  mounted() {
    this.primaryColor = this.getPrimaryColor;
    this.secondaryColor = this.getSecondaryColor;
  }
};
</script>
