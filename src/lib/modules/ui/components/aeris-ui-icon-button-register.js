import HelperRegisterModule from "../../helper-register-module.js";

import AerisUiIconButton from "./aeris-ui-icon-button";

const components = [AerisUiIconButton];

export default {
  install: Vue => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
