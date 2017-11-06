require("exports-loader?!./l.min.js")

import Vue from 'vue'

import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement);

import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

import VueColor from './vue-color.js'
Vue.use(VueColor)

import AerisTheme from './aeris-theme/aeris-theme.vue'
import AerisLanguage from './aeris-language/aeris-language.vue'
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
	
	
	function registerElement(name, component) {
		if (!window.registredAerisElements) {
			window.registredAerisElements = [];
		}
		if (window.registredAerisElements.indexOf(name) < 0) {
			Vue.customElement(name, component);
			window.registredAerisElements.push(name)
		}
	}
	
	window.moment = moment
	window['moment-range'].extendMoment(moment);
	
	console.info("Début registration des custom elements commons")
	console.info("Registred elements at this time: "+window.registredAerisElements)
	
	registerElement('aeris-theme', AerisTheme);
	registerElement('aeris-language', AerisLanguage);
	registerElement('aeris-notification', AerisNotification);
	registerElement('aeris-notifier', AerisNotifier);
	registerElement('aeris-cartouche', AerisCartouche);
	registerElement('aeris-spinner', AerisSpinner);
	registerElement('aeris-browser-alert', AerisBrowserAlert);
	registerElement('aeris-orcid', AerisOrcid);
	registerElement('aeris-datepicker', AerisDatepicker);

	window.registredAerisElements.push('aeris-commons-components-vjs')
})

