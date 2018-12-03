import HelperRegisterModule from "../../helper-register-module.js";

import AerisNotification from "./aeris-notification.vue";
import AerisNotifier from "./aeris-notifier.vue";

const components = [
  AerisNotification,
  AerisNotifier
];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerStore(options.store, components);
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};