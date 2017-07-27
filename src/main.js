require("exports-loader?!./l.min.js")

import Vue from 'vue'

import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement);

import AerisTheme from './aeris-theme/aeris-theme.vue'
import AerisNotification from './aeris-notification/aeris-notification.vue'
import AerisNotifier from './aeris-notification/aeris-notifier.vue'
import AerisCartouche from './aeris-cartouche/aeris-cartouche.vue'
import AerisSpinner from './aeris-spinner/aeris-spinner.vue'
import AerisBrowserAlert from './aeris-browser-alert/aeris-browser-alert.vue'
import AerisOrcid from './aeris-orcid/aeris-orcid.vue'



ljs.addAliases({
	dep: ['https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', 'https://cdnjs.cloudflare.com/ajax/libs/document-register-element/1.4.1/document-register-element.js', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment-with-locales.min.js']
})
ljs.load('dep', function() {
	Vue.customElement('aeris-theme', AerisTheme);
	Vue.customElement('aeris-notification', AerisNotification);
	Vue.customElement('aeris-notifier', AerisNotifier);
	Vue.customElement('aeris-cartouche', AerisCartouche);
	Vue.customElement('aeris-spinner', AerisSpinner);
	Vue.customElement('aeris-browser-alert', AerisBrowserAlert);
	Vue.customElement('aeris-orcid', AerisOrcid);
})

