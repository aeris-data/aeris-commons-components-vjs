<i18n>
  {
  "en": {
  "keywords": "Full text search",
  "titleHelp" : "To perform a search you can use the following operators:\\n '-' to exclude a term from the search\\n '+' to obtain results that must contain the terms\\nIf no operator is used, then the 'or' operator will be used\\nExample query: iagos+mistral -Menorca is equal to +iagos +mistral -Menorca"

  },
  "fr": {
  "keywords": "Recherche texte libre",
  "titleHelp" :"Pour effectuer une recherche vous pouvez utiliser les opérateurs suivant:\\n '-' pour exclure un terme de la recherche\\n '+' pour avoir des résultats qui contiennent obligatoirement les termes\\nSi aucun opérateur n'est utilisé, alors l'opérateur 'ou' sera utilisé\\nExemple de requête : iagos+mistral -Menorca est équivalent a +iagos +mistral -Menorca"
  }
  }
</i18n>

<template>
  <section>
    <aeris-ui-input
      :title="$t('titleHelp')"
      :placeholder="$t('keywords')"
      icon="fa fa-pencil"
      name="keywords"
      @input="inputKeyword"
    ></aeris-ui-input>
    <aeris-notifier></aeris-notifier>
  </section>
</template>

<script>
import { AerisUiInput } from "../../../lib/modules/aeris-commons-components";
import { AerisNotifier } from "../../../lib/modules/aeris-commons-components";
export default {
  name: "aeris-ui-input-test",
  components: { AerisUiInput, AerisNotifier },
  data() {
    return {
      theme: {
        emphasis: "#f39c12",
        color: "#fff"
      },
      notification: null
    };
  },
  created() {
    this.$i18n.locale = "en";
  },
  methods: {
    inputKeyword(text) {
      let notification = {
        message: text.value + "isEnter: " + text.isEnter,
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
[aeris-ui-icon-button] {
  height: 50px;
  min-width: 80px;
}
</style>
