<template>
  <span class="aeris-theme-host" />
</template>

<script>
export default {
  props: {},

  created: function() {
    this.aerisThemeRequestListener = this.handleThemeRequest.bind(this);
    document.addEventListener("aerisThemeRequest",
      this.aerisThemeRequestListener);
  },

  destroyed: function() {
    document.removeEventListener("aerisThemeRequest",
      this.aerisThemeRequestListener);
    this.aerisThemeRequestListener = null;
  },

  computed: {},

  mounted: function() {
    this.refresh();
  },

  data() {
    return {
      primary: null,
      emphasis: null,
      aerisThemeRequestListener: null
    };
  },

  methods: {
    refresh: function() {
      var aux = document.querySelector("body");
      this.primary = aux.getAttribute("data-color");
      this.emphasis = aux.getAttribute("data-secondary-color");
      console.log("Wordpress theme event");
      var event = new CustomEvent("aerisTheme", {
        detail: { primary: this.primary, emphasis: this.emphasis }
      });
      console.log(event);
      document.dispatchEvent(event);
    },

    handleThemeRequest: function() {
      this.refresh();
    }
  }
};
</script>

<style></style>
