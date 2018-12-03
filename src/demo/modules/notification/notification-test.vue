<template>
  <div>
    <aeris-notifier :delete-notif-uuid="uuid" :new-notification="notification"></aeris-notifier>
    <button @click="sendNotifError">error</button> <button @click="sendNotifSuccess">success</button>
    <button @click="sendNotif">Notification</button> <button @click="sendNotifWait">Wait</button>
    <button @click="sendLongNotif">Create</button> <button @click="destroyLongNotif">Destroy</button>
  </div>
</template>

<script>
import AerisNotifier from "../../../lib/modules/aeris-notification/components/aeris-notifier.vue";
import { computeUuid } from "../../../lib/modules/aeris-notification/utils/utils.js";
export default {
  data() {
    return {
      notification: null,
      uuid: null,
      longNotifUUID: []
    };
  },
  methods: {
    sendNotifError() {
      this.notification = {
        message: "Je suis un error",
        type: "error"
      };
    },

    sendNotifSuccess() {
      this.notification = {
        message: "<script>alert('lol')<\/script>",
        type: "success"
      };
    },

    sendNotif() {
      this.notification = {
        message: "Je suis une Notif ",
        type: "notification"
      };
    },

    sendNotifWait() {
      this.notification = {
        message: "Je suis un Wait",
        type: "wait"
      };
    },
    sendLongNotif() {
      this.longNotifUUID.push(computeUuid());
      this.notification = {
        message: "Je suis une longue notif uuid : " + this.longNotifUUID[this.longNotifUUID.length - 1],
        type: "wait",
        uuid: this.longNotifUUID[this.longNotifUUID.length - 1]
      };
    },
    destroyLongNotif() {
      this.uuid = this.longNotifUUID.shift();
    }
  },
  components: {
    AerisNotifier
  }
};
</script>
