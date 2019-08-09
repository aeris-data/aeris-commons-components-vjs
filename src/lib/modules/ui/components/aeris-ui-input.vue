<template>
  <div aeris-ui-input>
    <i v-if="icon" :class="icon" />
    <input
      :name="name"
      :aria-label="ariaLabel"
      :placeholder="placeholder"
      :value="value"
      type="text"
      autofocus
      @input="handleChange"
    />
  </div>
</template>

<script>
export default {
  name: "aeris-ui-input",

  props: {
    value: {
      type: String,
      required: true
    },
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
    handleChange(event) {
      this.$emit("input", event.target.value);
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
