<template>
  <span class="aeris-theme-host" />
</template>

<script>
export default {
  props: {
    primary: {
      type: String,
      default: null
    },
    emphasis: {
      type: String,
      default: null
    },
    active: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    primary() {
      this.refresh();
    },
    emphasis() {
      this.refresh();
    },
    active() {
      this.refresh();
    }
  },

  created: function() {
    this.refresh();
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

  mounted: function() {},

  data() {
    return {
      aerisThemeRequestListener: null
    };
  },

  methods: {
    refresh: function() {
      if (this.active && this.primary && this.emphasis) {
        var event = new CustomEvent("aerisTheme", {
          detail: { primary: this.primary, emphasis: this.emphasis }
        });
        document.dispatchEvent(event);
      }
    },

    handleThemeRequest: function() {
      this.refresh();
    }
  }
};
</script>

<style></style>
