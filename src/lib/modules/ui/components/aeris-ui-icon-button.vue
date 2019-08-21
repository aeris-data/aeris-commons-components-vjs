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
    <i v-if="icon" :class="['fa', icon, { iconText: text }]" /> {{ text }}
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
      return this.theme ? { "--primaryColor": this.theme.primaryColor } : "";
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
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: var(--primaryColor, #ddd);
  font-size: 1rem;
  cursor: pointer;
  margin: 0;
  padding: 0;
}

.icon-button {
  border-radius: 50%;
  width: 42px;
  height: 42px;
}

.button {
  border-radius: 0.5rem;
  padding: 16px;
  font-size: 1rem;
}

button::-moz-focus-inner {
  border: 0;
}

button:hover {
  filter: brightness(80%);
}

.iconText {
  margin-right: 10px;
}
</style>
