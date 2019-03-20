import HelperRegisterModule from "../../helper-register-module.js";

import AerisUiIconButton from "./aeris-ui-icon-button";
import AerisUiInput from "./aeris-ui-input";

const components = [AerisUiIconButton, AerisUiInput];

export default {
  install: Vue => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
