import Vue from "vue";
import Vuex from "vuex";
import VueI18n from "vue-i18n";
import VueRouter from "vue-router";

import { VueColorPlugin, VueAerisLanguagePlugin } from "aeris-mixins";

import app from "./app.vue";
import AerisNotificationTest from "./modules/notification/notification-test.vue";
import AerisLanguageTest from "./modules/language/language-test.vue";
import AerisThemeTest from "./modules/theme/theme-test.vue";
import AerisDatepickerTest from "./modules/datepicker/datepicker-test.vue";

import languageModule from "../lib/modules/aeris-language/store/aeris-language-store.js";
import themeModule from "../lib/modules/aeris-theme/store/aeris-theme-store.js";
import datepickerModule from "../lib/modules/aeris-datepicker/store/aeris-datepicker-store.js";

Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(VueRouter);

Vue.use(VueColorPlugin);
Vue.use(VueAerisLanguagePlugin);

const store = new Vuex.Store({
  modules: {
    language: languageModule,
    theme: themeModule,
    date: datepickerModule
  }
});

Vue.use(AerisLanguageTest, {
  store
});

Vue.use(AerisThemeTest, {
  store
});

Vue.use(AerisDatepickerTest, {
  store
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
    },
    {
      path: "/theme-test",
      component: AerisThemeTest
    },
    {
      path: "/datepicker-test",
      component: AerisDatepickerTest
    }
  ]
});

new Vue({
  el: "#app",
  router,
  store,
  template: "<app/>",
  components: {
    app
  }
}).$mount("#app");
