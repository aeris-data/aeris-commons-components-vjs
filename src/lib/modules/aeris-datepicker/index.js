import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import AerisDatepicker from "./components/aeris-datepicker-register.js";

const store = new Vuex.Store({
  modules: {
    AerisDatepicker
  }
});

Vue.use(AerisDatepicker, {
  store
});
