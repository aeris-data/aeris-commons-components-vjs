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
import AerisOrcidTest from "./modules/orcid/orcid-test.vue";
import AerisGalleryTest from "./modules/gallery/gallery-test.vue";
import AerisUiInputTest from "./modules/ui/aeris-ui-input-test";
import AerisUiIconButtonTest from "./modules/ui/aeris-ui-icon-button-test";

import languageModule from "../lib/modules/aeris-language/store/aeris-language-store.js";
import themeModule from "../lib/modules/aeris-theme/store/aeris-theme-store.js";
import orcidModule from "../lib/modules/aeris-orcid/store/aeris-orcid-store.js";
import notificationModule from "../lib/modules/aeris-notification/store/aeris-notification-store";

Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(VueRouter);

Vue.use(VueColorPlugin);
Vue.use(VueAerisLanguagePlugin);

const store = new Vuex.Store({
  modules: {
    language: languageModule,
    theme: themeModule,
    orcid: orcidModule,
    notification: notificationModule
  }
});

Vue.use(AerisLanguageTest, {
  store
});

Vue.use(AerisThemeTest, {
  store
});

Vue.use(AerisOrcidTest, {
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
    },
    {
      path: "/theme-test",
      component: AerisThemeTest
    },
    {
      path: "/datepicker-test",
      component: AerisDatepickerTest
    },
    {
      path: "/orcid-test",
      component: AerisOrcidTest
    },
    {
      path: "/gallery-test",
      component: AerisGalleryTest
    },
    {
      path: "/icon-button-test",
      component: AerisUiIconButtonTest
    },
    {
      path: "/input-test",
      component: AerisUiInputTest
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
