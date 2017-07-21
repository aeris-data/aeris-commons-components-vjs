require("exports-loader?!./l.min.js")

import Vue from 'vue'

import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement);

import VueResource from 'vue-resource';
Vue.use(VueResource);

import AerisTheme from './aeris-theme/aeris-theme.vue'
import AerisCartouche from './aeris-cartouche/aeris-cartouche.vue'
import AerisSpinner from './aeris-spinner/aeris-spinner.vue'
import AerisBrowserAlert from './aeris-browser-alert/aeris-browser-alert.vue'




ljs.addAliases({
	dep: ['https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', 'https://cdnjs.cloudflare.com/ajax/libs/document-register-element/1.4.1/document-register-element.js', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment-with-locales.min.js']
})
ljs.load('dep', function() {
	Vue.customElement('aeris-theme', AerisTheme);
	Vue.customElement('aeris-cartouche', AerisCartouche);
	Vue.customElement('aeris-spinner', AerisSpinner);
	Vue.customElement('aeris-browser-alert', AerisBrowserAlert);
})

