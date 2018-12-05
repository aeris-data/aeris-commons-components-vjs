import Vue from "vue";
import Vuex from "vuex";

import AerisLanguage from "./components/aeris-language-register.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    AerisLanguage: AerisLanguage
  }
});

Vue.use(AerisLanguage, {
  store: store
});
