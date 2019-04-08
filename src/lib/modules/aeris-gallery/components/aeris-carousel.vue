<template>
  <div class="modal-mask">
    <div class="aeris_carousel">
      <i
        class="fa fa-chevron-left carousel_nav carousel_previous "
        @click.prevent="previous_element"
        @keyup.prevent.left="previous_element"
      />
      <div class="slide">
        <div class="headerslide">
          {{ index + 1 }} / {{ slides.length }}
          <div class="tool_bar">
            <i class="fa fa-search button" @click="full_size_image" />
            <i class="fa fa-times button" @click="$emit('closecarousel')" />
          </div>
        </div>
        <div class="carousel-pagination">
          <div
            v-for="index_slide in sildeCount"
            :key="index_slide"
            :class="{ active: index_slide - 1 === index }"
            @click="go_to_image(index_slide - 1)"
          />
        </div>
        <slot />
      </div>
      <i
        class="fa fa-chevron-right carousel_nav carousel_next "
        @click.prevent="next_element"
        @keyup.right="next_element"
      />
    </div>
  </div>
</template>

<script>
import AerisCarrouselSlide from "./aeris-carrousel-slide.vue";

export default {
  name: "aeris-carousel",

  components: { AerisCarrouselSlide },

  props: {
    startImage: {
      type: Number,
      default: 0
    },

    language: {
      type: String,
      default: "en"
    }
  },

  data() {
    return {
      index: 0,
      slides: [],
      direction: "right",
      description: "",
      show: false
    };
  },

  watch: {
    startImage(value) {
      this.index = value;
    }
  },

  computed: {
    sildeCount() {
      return this.slides.length;
    }
  },

  created() {
    // navigation with left and rigth arrows
    document.addEventListener("keyup", this.leftKeyListerner);
    document.addEventListener("keyup", this.rightKeyListerner);
  },

  mounted() {
    
      this.slides = this.$children;
      this.slides.forEach((slide, i) => {
        slide.index = i;
      })
    this.index = this.startImage;
    this.show = true;
  },

  methods: {
    full_size_image() {
      window.open(this.$children[this.index].image, "_blank");
    },

    next_element() {
      this.index++;
      this.direction = "right";
      if (this.index >= this.sildeCount) {
        this.index = 0;
      }
    },

    previous_element() {
      this.index--;
      this.direction = "left";
      if (this.index < 0) {
        this.index = this.sildeCount - 1;
      }
    },

    go_to_image(index) {
      this.direction = index > this.index ? "right" : "left";
      this.index = index;
    },

    leftKeyListerner(event) {
      if (event.keyCode == "37") {
        this.previous_element();
      }
    },

    rightKeyListerner(event) {
      if (event.keyCode == "39") {
        this.next_element();
      }
    }
  }
};
</script>

<style scoped>
.modal-mask {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 0.3s ease;
}

.aeris_carousel {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
}

.carousel_nav {
  font-size: 50px;
  color: #dedede;
}
.carousel_nav:hover {
  transform: translateZ(0) scale(1.5);
}

.carousel_next {
  cursor: pointer;
}

.carousel_previous {
  cursor: pointer;
}

.button {
  font-size: 20px;
  cursor: pointer;
}
.button:hover {
  transform: scale(1.5);
}
.carousel-pagination {
  bottom: 10px;
  text-align: center;
}

.carousel-pagination div {
  display: inline-block;
  border: solid 3px #dedede;
  width: 13px;
  height: 13px;
  opacity: 0.8;
  border-radius: 50%;
  margin-right: 5px;
  text-align: center;
  cursor: pointer;
}
.carousel-pagination div:hover {
  transform: translateZ(0) scale(1.3);
}
.carousel-pagination div.active {
  background-color: #fff;
  border: solid 3px black;
}

.headerslide {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  color: #dedede;
  font-weight: bold;
}

.tool_bar {
  display: flex;
  flex-flow: row;
}

.tool_bar i {
  margin-left: 20px;
}

.slide slot {
  display: flex;
  flex-flow: column;
}

.footerslide {
  display: flex;
  flex-flow: column;
}
</style>
