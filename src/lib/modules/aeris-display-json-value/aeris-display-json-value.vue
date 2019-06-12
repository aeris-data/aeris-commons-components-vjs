<template>
    <span>{{jsonValue}}</span>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ""
    },
    json: {
      type: String,
      default: ""
    },
    forceHeader: {
      type: String,
      default: " application/json"
    }
  },
  data() {
    return {
      jsonValue: ""
    };
  },
  created() {
    this.axios
      .get(this.url, { headers: { Accept: this.forceHeader } })
      .then(response => {
        this.jsonValue = this.getvalue(response.data, this.json);
      })
      .catch(error => {
        this.jsonValue = {};
      });
  },
  methods: {
    getvalue(json, expression) {
      console.log(`${json.expression}`);
      let exp = expression.split(".");
      for (let i = 0; i < exp.length; i++) {
        if (exp[i] in json) json = json[exp[i]];
      }
      return json;
    }
  }
};
</script>

<style >
</style>
