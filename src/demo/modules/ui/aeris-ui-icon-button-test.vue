<template>
  <section>
    <aeris-ui-icon-button
      :theme="theme"
      title="test"
      text="Test"
      type="icon-button"
      @click="clickHandle('test')"
    ></aeris-ui-icon-button>
    <aeris-ui-icon-button
      :theme="theme"
      icon="fa-expand"
      type="icon-button"
      @click="clickHandle('expand')"
    ></aeris-ui-icon-button>
    <aeris-ui-icon-button :theme="theme" icon="fa-compress" type="icon-button"></aeris-ui-icon-button>
    <aeris-ui-icon-button :theme="theme2" icon="fa-times" type="icon-button"></aeris-ui-icon-button>
    <aeris-ui-icon-button :theme="theme1" icon="fa-code" type="icon-button"></aeris-ui-icon-button>
    <aeris-ui-icon-button
      :theme="theme"
      :icon-theme="iconTheme"
      icon="fa-pencil-square-o"
      type="icon-button"
      @click="clickHandle('edit')"
    ></aeris-ui-icon-button>
    <aeris-ui-icon-button
      id="btnAdd"
      :theme="theme3"
      :icon-theme="iconTheme"
      text="Add to your downloads"
      icon="fa fa-cart-arrow-down"
      type="button"
      @click="clickHandle('download')"
    ></aeris-ui-icon-button>
    <aeris-notifier></aeris-notifier>
  </section>
</template>

<script>
import { AerisUiIconButton } from "../../../lib/modules/aeris-commons-components";
import { AerisNotifier } from "../../../lib/modules/aeris-commons-components";
export default {
  name: "aeris-ui-icon-button-test",
  components: { AerisUiIconButton, AerisNotifier },
  data() {
    return {
      theme: {
        primaryColor: "purple"
      },
      theme1: {},
      theme2: {
        primaryColor: "green"
      },
      theme3: {
        primaryColor: "red"
      },
      iconTheme: {
        primaryColor: "blue"
      }
    };
  },
  methods: {
    clickHandle(text) {
      let notification = {
        message: text,
        type: "notification"
      };
      this.$store.dispatch("addNewNotification", notification);
    }
  }
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
