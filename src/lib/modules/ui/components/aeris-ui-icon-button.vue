<template>
  <button
    :style="getTheme"
    :class="[type, 'tooltip']"
    :title="title"
    aeris-ui-icon-button
    type="button"
    aria-hidden="true"
    @click.prevent="handleClick"
  >
    <i v-if="icon" :style="getIconTheme" :class="['fa', icon]" /> {{ text }}
  </button>
</template>

<script>
export default {
  name: "aeris-ui-icon-button",

  props: {
    title: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    theme: {
      type: Object,
      default: null
    },
    iconTheme: {
      type: Object,
      default: null
    },
    type: {
      type: String,
      default: "button"
    },
    text: {
      type: String,
      default: ""
    }
  },

  computed: {
    getTheme() {
      if (this.theme) {
        let color = this.theme.color;
        let emphasis = this.theme.emphasis;
        return {
          color: color,
          background: emphasis
        };
      } else {
        return "";
      }
    },
    getIconTheme() {
      if (this.iconTheme) {
        let color = this.iconTheme.color;
        let emphasis = this.iconTheme.emphasis;
        return {
          color: color,
          background: emphasis
        };
      } else {
        return "";
      }
    }
  },

  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>

<style scoped>
.icon-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  background: #e2e2e2;
  color: #333;
  font-size: 1rem;
  cursor: pointer;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  padding: 16px;
  background: #ddd;
  color: #444;
  font-size: 1rem;
  cursor: pointer;
}

.button i {
  margin-right: 10px;
}

button::-moz-focus-inner {
  border: 0;
}

button:hover {
  filter: brightness(80%);
}
</style>
