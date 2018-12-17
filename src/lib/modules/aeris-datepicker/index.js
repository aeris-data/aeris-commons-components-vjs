import Vue from "vue";
import Vuex from "vuex";
import AerisDatepicker from "./components/aeris-datepicker-register.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    AerisDatepicker: AerisDatepicker
  }
});

Vue.use(AerisDatepicker, {
  store: store
});
