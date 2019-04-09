<template>
  <button
    :style="getTheme"
    :class="[type, 'tooltip']"
    :title="title"
    type="button"
    aria-hidden="true"
    @click.prevent="handleClick"
  >
    <i v-if="icon" :class="['fa', icon]" />{{ iconAndSpace }}
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
        return {
          "--bg-color": this.theme.primaryColor,
          "--text-color": this.theme.secondaryColor
        };
      }
      return "";
    },

    iconAndSpace() {
      return this.text && this.icon ? ` ${this.text}` : this.text;
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
.icon-button,
.button {
  white-space: pre;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background-color: var(--bg-color, #e2e2e2);
  color: var(--text-color, #333);
  transition: all 0.2s;
  font-size: 1rem;
  cursor: pointer;
  padding: 10px;
  border-radius: 2rem;
}

.icon-button {
  width: 42px;
  height: 42px;
}

.icon-button i,
.button i {
  color: var(--text-color, #333);
}

button:hover {
  background-color: var(--text-color, #333);
  color: var(--bg-color, #e2e2e2);
  border: 1px solid var(--bg-color, #e2e2e2);
}

button:hover i {
  color: var(--bg-color, #e2e2e2);
}

button:active {
  position: relative;
  top: 1px;
  left: 1px;
}

button::-moz-focus-inner {
  border: 0;
}
</style>
