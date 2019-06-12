<template>
  <div style="margin:0 200px">
    <p id="toto">
      <span> Family name : </span>
      <aeris-display-json-value
        url="https://pub.orcid.org/v2.0/0000-0002-2059-9116"
        json="person.name.family-name.value"
        force-header="application/json"
      ></aeris-display-json-value>
    </p>
    <p id="titi">
      <span> Given-names : </span>
      <aeris-display-json-value
        url="https://pub.orcid.org/v2.0/0000-0002-2059-9116"
        json="person.name.given-names.value"
        force-header="application/json"
      ></aeris-display-json-value>
    </p>
    <p id="tata">
      <span> Keyword path : </span>
      <aeris-display-json-value
        url="https://pub.orcid.org/v2.0/0000-0002-2059-9116"
        json="person.keywords.path"
        force-header="application/json"
      ></aeris-display-json-value>
    </p>
    <p id="tete">
      <span> Email path : </span>
      <aeris-display-json-value
        url="https://pub.orcid.org/v2.0/0000-0002-2059-9116"
        json="person.emails.path"
        force-header="application/json"
      ></aeris-display-json-value>
    </p>
  </div>
</template>

<script>
import AerisDisplayJsonValue from "../../../lib/modules/aeris-display-json-value/aeris-display-json-value";
export default {
  name: "aeris-display-json-value-test",
  components: {
    AerisDisplayJsonValue
  }
};
</script>
<style>
#toto span {
  color: blue;
}
#titi span {
  color: red;
}
#tete span {
  color: yellow;
}
#tata span {
  color: green;
}
</style>
