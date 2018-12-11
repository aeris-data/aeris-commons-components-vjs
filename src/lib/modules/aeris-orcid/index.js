import Vue from "vue";
import Vuex from "vuex";

import AerisOrcid from "./components/aeris-orcid.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    AerisOrcid: AerisOrcid
  }
});

Vue.use(AerisOrcid, {
  store: store
});
