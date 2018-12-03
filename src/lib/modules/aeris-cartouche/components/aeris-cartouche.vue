/* dependances: font awesome */

<template>
  <span class="aeris-cartouche-host">
    <span v-if="isvisible" class="aeris-cartouche-container">
      <span v-if="icon"> <i :class="_getIconStyle" /> </span> <slot />
      <span v-if="edit"> <i class="aeris-cartouche-delete fa fa-times" @click.prevent="_handleClick" /> </span>
    </span>
  </span>
</template>

<script>
export default {
  props: {
    itemref: {
      default: "",
      type: String
    },
    edit: {
      type: Boolean,
      default: false
    },
    visible: {
      default: true,
      type: Boolean
    },
    icon: {
      default: "",
      type: String
    }
  },
  data() {
    return {
      isvisible: null
    };
  },

  created: function() {
    this.isvisible = this.visible;
  },

  computed: {
    _getIconStyle: function() {
      if (this.icon) {
        return this.icon.startsWith("fa-") ? "fa " + this.icon.toLowerCase() : "fa fa-" + this.icon.toLowerCase();
      }
    }
  },
  methods: {
    _handleClick: function() {
      console.log("_handleClick " + this.itemref);
      var itemref = this.itemref;
      this.isvisible = false;
      this.$el.dispatchEvent(new CustomEvent("aerisCartoucheItemDeleted", {
          bubbles: true,
          cancelable: true,
          detail: { itemref: itemref }
        }));
    }
  }
};
</script>

<style>
.aeris-cartouche-host {
  display: inline-block;
}

.aeris-cartouche-container {
  display: inline-block;
  padding: 2px 5px;
  margin: 0 3px;
  border: 1px solid #f5f5f5;
  border-radius: 5px !important;
  color: #666;
  background-color: #f5f5f5;
}
.aeris-cartouche-container:hover {
  cursor: default;
}
.aeris-cartouche-container .fa {
  margin-right: 5px;
}
.aeris-cartouche-delete {
  cursor: pointer;
  margin-left: 3px;
  opacity: 0.6;
}
.aeris-cartouche-delete:hover {
  opacity: 1;
}
</style>
