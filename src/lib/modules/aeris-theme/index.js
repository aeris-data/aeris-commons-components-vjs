import Vue from "vue";
import Vuex from "vuex";

import AerisTheme from "./components/aeris-theme-register.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    AerisTheme: AerisTheme
  }
});

Vue.use(AerisTheme, {
  store: store
});
