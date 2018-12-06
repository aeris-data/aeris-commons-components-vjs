import HelperRegisterModule from "../../helper-register-module.js";

import AerisTheme from "./aeris-theme.vue";

const components = [AerisTheme];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerStore(options.store, components);
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
