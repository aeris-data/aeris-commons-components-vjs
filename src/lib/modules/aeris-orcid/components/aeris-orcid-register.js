import HelperRegisterModule from "../../helper-register-module.js";

import AerisOrcid from "./aeris-orcid.vue";

const components = [AerisOrcid];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerStore(options.store, components);
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
