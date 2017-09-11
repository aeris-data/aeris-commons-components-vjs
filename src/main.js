require("exports-loader?!./l.min.js")

import Vue from 'vue'

import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement);

import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

import VueColor from './vue-color.js'
Vue.use(VueColor)

import AerisTheme from './aeris-theme/aeris-theme.vue'
import AerisNotification from './aeris-notification/aeris-notification.vue'
import AerisNotifier from './aeris-notification/aeris-notifier.vue'
import AerisCartouche from './aeris-cartouche/aeris-cartouche.vue'
import AerisSpinner from './aeris-spinner/aeris-spinner.vue'
import AerisBrowserAlert from './aeris-browser-alert/aeris-browser-alert.vue'
import AerisOrcid from './aeris-orcid/aeris-orcid.vue'
import AerisDatepicker  from './aeris-datepicker/aeris-datepicker.vue'



ljs.addAliases({
	dep: ['https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', 'https://rawgit.com/aeris-data/aeris-commons-fonts/develop/font/aeriscommmonsfonts.css', 'https://cdnjs.cloudflare.com/ajax/libs/document-register-element/1.4.1/document-register-element.js', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment-with-locales.min.js','https://cdnjs.cloudflare.com/ajax/libs/moment-range/3.0.3/moment-range.min.js']
})
ljs.load('dep', function() {
	
	window.moment = moment
	window['moment-range'].extendMoment(moment);
	
	if (!window.registredAerisElements) {
		window.registredAerisElements = [];
	}
	console.info("Début registration des custom elements commons")
	console.info("Registred elements at this time: "+window.registredAerisElements)
	Vue.customElement('aeris-theme', AerisTheme);
	window.registredAerisElements.push('aeris-theme')
	Vue.customElement('aeris-notification', AerisNotification);
	window.registredAerisElements.push('aeris-notification')
	Vue.customElement('aeris-notifier', AerisNotifier);
	window.registredAerisElements.push('aeris-notifier')
	Vue.customElement('aeris-cartouche', AerisCartouche);
	window.registredAerisElements.push('aeris-cartouche')
	Vue.customElement('aeris-spinner', AerisSpinner);
	window.registredAerisElements.push('aeris-spinner')
	Vue.customElement('aeris-browser-alert', AerisBrowserAlert);
	window.registredAerisElements.push('aeris-browser-alert')
	Vue.customElement('aeris-orcid', AerisOrcid);
	window.registredAerisElements.push('aeris-orcid')
	Vue.customElement('aeris-datepicker', AerisDatepicker);
	window.registredAerisElements.push('aeris-datepicker')
	window.registredAerisElements.push('aeris-commons-components-vjs')
})

