<template>
  <div>
    <div class="aeris-gallery">
      <div class="gallery-container">
        <div class="gallery-img-container">
          <article v-for="(item, index) in images" :key="item.url" class="gallery-image">
            <a @click="displayCarousel(index)">
              <img :src="item.url" alt="Quicklook" />
            </a>
          </article>
        </div>
      </div>
    </div>

    <aeris-carousel v-if="showCarousel" :startImage="index" @closecarousel="showCarousel = false">
      <aeris-carousel-slide
        v-for="item in images"
        :language="language"
        :image="item.url"
        :description="item.description"
        :key="item.url"
      ></aeris-carousel-slide>
    </aeris-carousel>
  </div>
</template>

<script>
import AerisCarousel from "./aeris-carousel.vue";
import AerisCarouselSlide from "./aeris-carrousel-slide.vue";

export default {
  name: "aeris-gallery",

  components: { AerisCarousel, AerisCarouselSlide },

  props: {
    language: {
      type: String,
      default: "en"
    },

    images: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      index: 0,
      showCarousel: false
    };
  },

  watch: {
    lang(value) {
      this.$i18n.locale = value;
    }
  },

  created() {
    //exit modal with escape key
    document.addEventListener("keyup", this.escapeKeyListener);
  },

  methods: {
    displayCarousel(index) {
      this.showCarousel = true;
      this.index = index;
    },

    escapeKeyListener(evt) {
      if (evt.keyCode === 27 && this.showCarousel) {
        this.showCarousel = false;
      }
    }
  }
};
</script>

<style scoped>
.aeris-gallery {
  position: relative;
  text-align: center;
  overflow: hidden;
}

.gallery-container {
  overflow: hidden;
}

.gallery-img-container {
  display: flex;
  flex-flow: row wrap;
  padding: 10px 0;
}

.gallery-image {
  margin-left: 10px;
  margin-bottom: 10px;
  height: 100px;
  width: auto;
  vertical-align: middle;
  text-align: center;
  transform: translateZ(0);
  transition: transform 0.3s;
}

.gallery-image a img {
  height: 100%;
  width: auto;
  min-width: inherit;
  max-width: inherit;
  border: none;
  margin: 0;
}

.gallery-image:hover {
  cursor: pointer;
  transform: translateZ(0) scale(1.05);
}
</style>
