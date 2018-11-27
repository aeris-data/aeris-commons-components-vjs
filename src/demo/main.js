import Vue from "vue";
import Vuex from "vuex";
import VueI18n from "vue-i18n";
import VueRouter from "vue-router";

import { VueColorPlugin, VueAerisLanguagePlugin } from "aeris-mixins";

// import TasksComponents from "../lib/modules/tasks/components/tasks-components.js";

// import taskModule from "../lib/modules/tasks/store/tasks-store.js";

import app from "./app.vue";
// import TaskDisplayComponentTest from "./task-display-component-test.vue";

Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(VueRouter);

Vue.use(VueColorPlugin);
Vue.use(VueAerisLanguagePlugin);

// const store = new Vuex.Store({
//   modules: {
//     example: taskModule
//   }
// });

// Vue.use(TasksComponents, {
//   store: store
// });

const router = new VueRouter({
  mode: "history",
  routes: []
});

new Vue({
  el: "#app",
  router,
  template: "<app/>",
  components: {
    app
    // TaskDisplayComponentTest
  }
}).$mount("#app");
