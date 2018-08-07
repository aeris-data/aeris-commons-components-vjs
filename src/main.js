require("exports-loader?!./l.min.js")

var pjson = require('../package.json');
console.log(pjson.version);

import Vue from 'vue'

import moment from 'moment';
import { extendMoment } from 'moment-range';
window.momentCst = extendMoment(moment);

import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement);

import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

import VueColor from './vue-color.js'
Vue.use(VueColor)

import {VueColorPlugin, VueAerisLanguagePlugin} from 'aeris-mixins'
Vue.use(VueColorPlugin)
Vue.use(VueAerisLanguagePlugin)

import AerisTheme from './aeris-theme/aeris-theme.vue'
import AerisWordpressTheme from './aeris-theme/aeris-wordpress-theme.vue'
import AerisLanguage from './aeris-language/aeris-language.vue'
import AerisNotification from './aeris-notification/aeris-notification.vue'
import AerisNotifier from './aeris-notification/aeris-notifier.vue'
import AerisCartouche from './aeris-cartouche/aeris-cartouche.vue'
import AerisSpinner from './aeris-spinner/aeris-spinner.vue'
import AerisOrcid from './aeris-orcid/aeris-orcid.vue'
import AerisDatepicker  from './aeris-datepicker/aeris-datepicker.vue'



ljs.addAliases({
	dep: ['https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', 'https://rawgit.com/aeris-data/aeris-commons-fonts/develop/font/aeriscommmonsfonts.css','https://cdnjs.cloudflare.com/ajax/libs/document-register-element/1.4.1/document-register-element.js']
})
ljs.load('dep', function() {
	
	
	var bundleName = "aeris-commons-components-vjs"

		function registerElement(name, component) {
			if (!window.registredAerisElements) {
				window.registredAerisElements = [];
			}
			if (window.registredAerisElements.indexOf(name) < 0) {
				let registrable = true
				if (window.aerisexclusions) {
					var aux = window.aerisexclusions[bundleName]
					if (aux) {
						if (aux.indexOf(name)>= 0) {
							console.log("Aeris - Exclusion of "+name)
							registrable = false;
						}
					}
				}
				if (registrable) {
					console.log("Aeris - Registration of "+name)
					Vue.customElement(name, component);
					window.registredAerisElements.push(name)
				}
			}
		}
	
	console.info("Début registration des custom elements commons")
	console.info("Registred elements at this time: "+window.registredAerisElements)
	
	registerElement('aeris-theme', AerisTheme);
	registerElement('aeris-wordpress-theme', AerisWordpressTheme);
	registerElement('aeris-language', AerisLanguage);
	registerElement('aeris-notification', AerisNotification);
	registerElement('aeris-notifier', AerisNotifier);
	registerElement('aeris-cartouche', AerisCartouche);
	registerElement('aeris-spinner', AerisSpinner);
	registerElement('aeris-orcid', AerisOrcid);
	registerElement('aeris-datepicker', AerisDatepicker);

	window.registredAerisElements.push('aeris-commons-components-vjs')
})

