import HelperRegisterModule from "../../helper-register-module.js";

import AerisGallery from "./aeris-gallery.vue";
import AerisCarrousel from "./aeris-carousel.vue";
import AerisCarrouselSlide from "./aeris-carrousel-slide.vue";

const components = [AerisGallery, AerisCarrousel, AerisCarrouselSlide];

export default {
  install: Vue => {
    let timer = setInterval(() => {
      HelperRegisterModule.registerVueComponents(Vue, components);
      clearInterval(timer);
    }, 2000);
  }
};
