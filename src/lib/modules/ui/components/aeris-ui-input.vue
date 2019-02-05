<template>
  <div aeris-ui-input>
    <i v-if="icon" :class="icon" />
    <input
      :name="name"
      :aria-label="ariaLabel"
      :placeholder="placeholder"
      type="text"
      autofocus
      @change.prevent="updateValue"
      @keyup.enter="updateValue"
    />
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
    }
  },

  methods: {
    updateValue: _.debounce(function(event) {
      this.$emit("input", event.target.value);
    }, 100)
  }
};
</script>

<style scoped>
[aeris-ui-input] {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid;
}

[aeris-ui-input] input {
  width: 100%;
  border-style: none;
  border: none;
  outline: none;
  padding: 12px;
  font-size: 1rem;
  background: transparent;
}

[aeris-ui-input] input:focus {
  outline: none;
}

[aeris-ui-input] i {
  padding: 10px;
  font-size: 1.1rem;
}
</style>
