import HelperRegisterModule from "../../helper-register-module.js";

import AerisGallery from "./aeris-gallery.vue"
import AerisCarrousel from "./aeris-carousel.vue";
import AerisCarrouselSlide from "./aeris-carrousel-slide.vue";


const components = [AerisGallery, AerisCarrousel,AerisCarrouselSlide];

export default {
  install: (Vue, options) => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerStore(options.store, components);
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};