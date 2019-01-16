import HelperRegisterModule from "../../helper-register-module.js";

import AerisDatepicker from "./aeris-datepicker.vue";
import AerisDatepickerModal from "./aeris-datepicker-modal.vue";

const components = [AerisDatepicker, AerisDatepickerModal];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerStore(options.store, components);
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
