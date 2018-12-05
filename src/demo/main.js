import Vue from "vue";
import Vuex from "vuex";
import VueI18n from "vue-i18n";
import VueRouter from "vue-router";

import { VueColorPlugin, VueAerisLanguagePlugin } from "aeris-mixins";

import AerisNotification from "../lib/modules/aeris-notification/components/aeris-notification-register.js";

import app from "./app.vue";
import AerisNotificationTest from "./modules/notification/notification-test.vue";
import AerisLanguageTest from "./modules/language/language-test.vue";
import languageModule from "../lib/modules/aeris-language/store/aeris-language-store.js";

Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(VueRouter);

Vue.use(VueColorPlugin);
Vue.use(VueAerisLanguagePlugin);

const store = new Vuex.Store({
  modules: {
    language: languageModule
  }
});

Vue.use(AerisLanguageTest, {
  store: store
});

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/notification-test",
      component: AerisNotificationTest
    },
    {
      path: "/language-test",
      component: AerisLanguageTest
    }
  ]
});

new Vue({
  el: "#app",
  router,
  store,
  template: "<app/>",
  components: {
    app,
    AerisNotificationTest,
    AerisNotification
  }
}).$mount("#app");
