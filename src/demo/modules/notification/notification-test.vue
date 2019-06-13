<template>
  <div>
    <aeris-notifier></aeris-notifier>
    <button id="error" @click="sendNotifError">error</button>
    <button id="success" @click="sendNotifSuccess">success</button>
    <button id="notif" @click="sendNotif">Notification</button>
    <button id="wait" @click="sendNotifWait">Wait</button>
    <button id="create" @click="sendLongNotif">Create</button>
    <button id="destroy" @click="destroyLongNotif">Destroy</button>
  </div>
</template>

<script>
import { AerisNotifier } from "../../../lib/modules/aeris-commons-components";
import { computeUuid } from "../../../lib/modules/aeris-notification/utils/utils.js";
export default {
  name: "notification-test",
  data() {
    return {
      longNotifUUIDs: []
    };
  },
  methods: {
    sendNotifError() {
      let notification = {
        message: "Je suis un error",
        type: "error"
      };
      this.addNewNotification(notification);
    },

    sendNotifSuccess() {
      let notification = {
        message: "<script>alert('lol')<//script>",
        type: "success"
      };
      this.addNewNotification(notification);
    },

    sendNotif() {
      let notification = {
        message: "Je suis une Notif ",
        type: "notification"
      };
      this.addNewNotification(notification);
    },

    sendNotifWait() {
      let notification = {
        message: "Je suis un Wait",
        type: "wait",
        duration: 5
      };
      this.addNewNotification(notification);
    },
    sendLongNotif() {
      this.longNotifUUIDs.push(computeUuid());
      let notification = {
        message: "Je suis une longue notif uuid : " + this.longNotifUUIDs[this.longNotifUUIDs.length - 1],
        type: "wait",
        uuid: this.longNotifUUIDs[this.longNotifUUIDs.length - 1]
      };
      this.addNewNotification(notification);
    },
    destroyLongNotif() {
      let uuid = this.longNotifUUIDs.shift();
      this.$store.dispatch("deleteNotification", uuid);
    },
    addNewNotification(notification) {
      this.$store.dispatch("addNewNotification", notification);
    }
  },
  components: {
    AerisNotifier
  }
};
</script>
