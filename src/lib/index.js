import AerisDataPicker from "./modules/aeris-datepicker/components/aeris-datepicker-register.js";
import AerisLanguage from "./modules/aeris-language/components/aeris-language-register.js";
import AerisNotification from "./modules/aeris-notification/components/aeris-notification-register.js";
import AerisOrcid from "./modules/aeris-orcid/components/aeris-orcid-register.js";
import AerisTheme from "./modules/aeris-theme/components/aeris-theme-register.js";
import AerisDisplayJsonValue from "./modules/aeris-display-json-value/aeris-display-json-value.vue";
import Vue from "vue";
import Vuex from "vuex";
import VueI18n from "vue-i18n";
import VueRouter from "vue-router";
import vueCustomElement from 'vue-custom-element';

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(vueCustomElement);
Vue.use(VueAxios, axios);

Vue.customElement('aeris-display-json-value', AerisDisplayJsonValue, {

});
const components = [AerisDataPicker, AerisLanguage, AerisNotification, AerisOrcid, AerisTheme, AerisDisplayJsonValue];

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
