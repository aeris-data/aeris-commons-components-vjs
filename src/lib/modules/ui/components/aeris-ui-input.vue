<template>
  <div :style="getTheme" aeris-ui-input>
    <input
      :name="name"
      :aria-label="ariaLabel"
      :placeholder="placeholder"
      v-model="value"
      type="text"
      autofocus
      @change.prevent="updateValue($event, false)"
      @keyup.enter="updateValue($event, true)"
      @focus="focus"
      @blur="blur"
    />
    <i v-if="icon" :class="icon" />
  </div>
</template>

<script>
export default {
  name: "aeris-ui-input",

  props: {
    icon: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    ariaLabel: {
      type: String,
      default: ""
    },
    theme: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      value: "",
      defaultColor: "#333"
    };
  },

  computed: {
    getTheme() {
      return this.theme !== null ? { "--primary": this.theme.primaryColor } : { "--primary": this.defaultColor };
    }
  },

  methods: {
    updateValue: _.debounce(function(event, isEnter) {
      this.$emit("input", { value: event.target.value, isEnter: isEnter });
    }, 100),

    resetValue() {
      this.value = "";
    },

    focus() {
      if (this.theme !== null) {
        this.$el.style.border = "1px solid " + this.theme.primaryColor;
      } else {
        this.$el.style.border = "1px solid " + this.defaultColor;
      }
    },

    blur() {
      this.$el.style.border = "none";
    }
  }
};
</script>

<style scoped>
[aeris-ui-input] {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 0 2px 4px #333;
  padding: 0 10px;
}

[aeris-ui-input]:focus-within {
  border: 1px solid var(--primary, #333);
}

[aeris-ui-input] input:focus + i {
  color: var(--primary, #333);
}

[aeris-ui-input] input {
  width: 100%;
  border-style: none;
  border: none;
  outline: none;
  font-size: 1rem;
  background: transparent;
  transition: transform 0.3s ease-in, box-shadow 0.3s ease-in;
}

[aeris-ui-input] i {
  padding: 10px;
  font-size: 1.1rem;
  color: #666;
}
</style>
