<template>
  <div class="aeris-carousel-slide">
    <transition :name="transition">
      <div v-if="visible">
        <slot><img :src="img" class="aeris-carousel-slide"/></slot>
        <div class="footerslide">
          <p>{{ legende }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "aeris-carousel-slide",

  props: {
    description: {
      type: Object,
      default: ""
    },

    img: {
      type: String,
      default: ""
    },

    language: {
      type: String,
      default: "en"
    }
  },

  computed: {
    transition() {
      return "slide-" + this.$parent.direction;
    },
    visible() {
      return this.index === this.$parent.index;
    }
  },

  data() {
    return {
      index: 0,
      legende: "",
      resizeFull: false
    };
  },

  created() {
    this.updateDescription();
  },

  methods: {
    updateDescription() {
      this.legende = this.language === "fr" ? this.description.fr : this.description.en;
    }
  }
};
</script>

<style>
.aeris-carousel-slide {
  min-width: 900px;
  min-width: 900px;

  max-height: 900px;
  max-width: 900px;
}

.slide-right-enter-active {
  animation: slide-rightIn 1.5s;
}
.slide-right-leave-active {
  animation: slide-rightOut 1.5s;
  display: none;
}

@keyframes slide-rightIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-rightOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.slide-left-enter-active {
  animation: slide-leftIn 1.5s;
}
.slide-left-leave-active {
  animation: slide-leftOut 1.5s;
  display: none;
}

@keyframes slide-leftIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-leftOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.footerslide p {
  color: #dedede;
}
</style>
