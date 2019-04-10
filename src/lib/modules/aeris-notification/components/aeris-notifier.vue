<template>
  <span class="aeris-notifier-host">
    <div class="aeris-notifier-container">
      <ul>
        <li v-for="notification in getNotifications" :key="notification.uuid" class="notification">
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

export default {
  components: {
    AerisNotification
  },
  computed: {
    getNotifications() {
      return this.$store.getters.getNotifications;
    }
  },
  methods: {
    deleteNotification(uuid) {
      this.$store.dispatch("deleteNotification", uuid);
    }
  }
};
</script>

<style scoped>
.aeris-notifier-host {
  display: block;
  position: fixed;
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
