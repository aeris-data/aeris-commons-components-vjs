import Vue from "vue";
import Vuex from "vuex";

import AerisNotification from "./components/aeris-notification-register.js";

import AerisNotificationStore from "./store/aeris-notification-store.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    AerisNotification: AerisNotificationStore
  }
});

Vue.use(AerisNotification);
Vue.use(AerisNotification, {
  store: store
});