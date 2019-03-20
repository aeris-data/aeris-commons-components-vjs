import { computeUuid } from "../utils/utils.js";

export default {
  state: {
    notifications: []
  },
  getters: {
    getNotifications: state => state.notifications
  },
  actions: {
    addNewNotification({ dispatch }, notification) {
      let uuid = notification.uuid || computeUuid();
      notification["uuid"] = uuid;
      notification["closable"] = true;
      notification["spinner"] = false;
      switch (notification.type) {
        case "notification":
          dispatch("addNotification", notification);
          break;
        case "wait":
          notification["spinner"] = true;
          dispatch("addNotification", notification);
          break;
        case "error":
          dispatch("addNotification", notification);
          break;
        case "success":
          dispatch("addNotification", notification);
          break;
        default:
          notification = null;
      }
    },
    addNotification({ state, dispatch }, notification) {
      state.notifications.push(notification);
      if (notification.duration) {
        dispatch("notificationTimer", notification);
      }
    },
    deleteNotification({ state }, uuid) {
      state.notifications = state.notifications.filter(notification => notification.uuid !== uuid);
    },
    notificationTimer({ state }, notification) {
      setTimeout(() => {
        state.notifications.splice(state.notifications.indexOf(notification), 1);
      }, notification.duration * 1000);
    }
  }
};
