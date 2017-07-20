import Vue from 'vue'

import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement);

import VueResource from 'vue-resource';
Vue.use(VueResource);

import AerisTheme from './aeris-theme/aeris-theme.vue'
import AerisCartouche from './aeris-cartouche/aeris-cartouche.vue'
import AerisSpinner from './aeris-spinner/aeris-spinner.vue'
import AerisBrowserAlert from './aeris-browser-alert/aeris-browser-alert.vue'


Vue.customElement('aeris-theme', AerisTheme);
Vue.customElement('aeris-cartouche', AerisCartouche);
Vue.customElement('aeris-spinner', AerisSpinner);
Vue.customElement('aeris-browser-alert', AerisBrowserAlert);