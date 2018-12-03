<template>
  <span class="aeris-notifier-host">
    <div class="aeris-notifier-container">
      <ul>
        <li v-for="notification in notifications" class="notification" :key="notification.uuid">
          <aeris-notification
            :type="notification.type"
            :message="notification.message"
            :spinner="notification.spinner"
            :closable="notification.closable"
            :uuid="notification.uuid"
            @deleteNotification="deleteNotification"
          ></aeris-notification>
        </li>
      </ul>
    </div>
  </span>
</template>

<script>
import AerisNotification from "./aeris-notification.vue";
import { computeUuid } from "../utils/utils.js";

export default {
  components: {
    AerisNotification
  },

  props: {
    newNotification: {
      type: Object,
      default: {}
    },
    deleteNotifUuid: {
      type: String,
      default: null
    }
  },

  data() {
    return {
      notifications: []
    };
  },
  watch: {
    newNotification(notification) {
      if (notification) {
        this.notificationManager(notification);
      }
    },
    deleteNotifUuid(uuid) {
      if (uuid) {
        this.deleteNotification(uuid);
      }
    }
  },

  methods: {
    notificationManager(notification) {
      let uuid = notification.uuid || computeUuid();
      switch (notification.type) {
        case "notification":
          this.addNewNotification(notification, uuid, true, false, notification.duration);
          break;
        case "wait":
          this.addNewNotification(
            notification,
            uuid,
            true,
            true,
            notification.duration
          );
          break;
        case "error":
          this.addNewNotification(
            notification,
            uuid,
            true,
            false,
            notification.duration
          );
          break;
        case "success":
          this.addNewNotification(
            notification,
            uuid,
            true,
            false,
            notification.duration
          );
          break;
        default:
          notification = null;
      }
    },

    addNewNotification(notification, uuid, closable, spinner, duration) {
      notification.uuid = uuid;
      notification.closable = closable;
      notification.spinner = spinner;
      this.notifications.push(notification);

      if (duration) {
        this.notificationTimer(notification, duration);
      }
    },

    deleteNotification(uuid) {
      this.notifications = this.notifications.filter(
        notification => notification.uuid !== uuid
      );
    },

    notificationTimer(notification, duration) {
      let _this = this;
      window.setTimeout(function() {
        _this.notifications.splice(
          _this.notifications.indexOf(notification),
          1
        );
      }, duration * 1000);
    }
  }
};
</script>
<style scoped>
.aeris-notifier-host {
  display: block;
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.aeris-notifier-host .notification {
  list-style-type: none;
}

.aeris-notifier-host .aeris-notifier-container {
  display: flex;
  flex-direction: column;
}
</style>