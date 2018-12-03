<template>
  <span class="aeris-notification-host" :class="visibilityclass">
    <div :class="getNotificationStyle">
      <div class="notification-text">
        <span v-if="spinner">
          <i class="fa fa-circle-o-notch fa-spin fa-fw"></i>
        </span>
        <span class="notification-message">{{ message }}</span>
      </div>
      <div class="notification-close-button" v-if="closable">
        <i class="fa fa-times close-icon" @click="close"></i>
      </div>
    </div>
  </span>
</template>

<script>
export default {
  props: {
    spinner: {
      default: false,
      type: Boolean
    },
    closable: {
      default: false,
      type: Boolean
    },
    uuid: {
      default: "",
      type: String
    },
    type: {
      default: "success",
      type: String
    },
    message: {
      default: "",
      type: String
    }
  },

  data() {
    return {
      visibilityclass: ""
    };
  },

  created: function() {
    this.visibilityclass = "show";
  },

  computed: {
    getNotificationStyle: function() {
      return "notify-container aeris-notification-" + this.type;
    }
  },
  methods: {
    close: function() {
      this.$emit("deleteNotification", this.uuid);
    }
  }
};
</script>

<style scoped>
.aeris-notification-host {
  display: inline-block;
  transform-origin: 50% 0;
}

.aeris-notification-host.show {
  animation-name: show;
  animation-duration: 0.3s;
  margin-bottom: 3px;
}

.notify-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  padding: 10px 15px;
  min-width: 300px;
  max-width: 90vw;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.notify-container .fa {
  margin: 0 5px;
}

.notify-container .close-icon {
  cursor: pointer;
  opacity: 0.6;
}

.notify-container .close-icon:hover {
  opacity: 1;
}

.notify-container .notification-close-button {
  align-self: flex-start;
}

.notify-container .notification-text {
  padding-right: 10px;
}

.notify-container .notification-message {
  font-weight: 400;
}

.aeris-notification-notification {
  background-color: #3395b9;
  color: white;
}

.aeris-notification-success {
  background-color: #2eb872;
  color: white;
}

.aeris-notification-error {
  background-color: #b22222;
  color: white;
}

.aeris-notification-wait {
  background-color: #fce38a;
  color: #333;
}

@keyframes show {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  70% {
    transform: scale(1.05);
    opacity: 1;
  }

  100% {
    transform: scale(1);
  }
}
</style>