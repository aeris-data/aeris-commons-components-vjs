import AerisDataPicker from "./modules/aeris-datepicker/components/aeris-datepicker-register.js";
import AerisLanguage from "./modules/aeris-language/components/aeris-language-register.js";
import AerisNotification from "./modules/aeris-notification/components/aeris-notification-register.js";
import AerisOrcid from "./modules/aeris-orcid/components/aeris-orcid-register.js";
import AerisTheme from "./modules/aeris-theme/components/aeris-theme-register.js";

const components = [AerisDataPicker, AerisLanguage, AerisNotification, AerisOrcid, AerisTheme];

function registerVueComponents(Vue, components) {
  for (let component in components) {
    if (components[component]) {
      Vue.component(components[component]);
    }
  }
}

export default {
  registerVueComponents
};
