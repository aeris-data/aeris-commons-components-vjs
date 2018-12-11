<template>
  <div>
    <aeris-orcid ></aeris-orcid>
    <button @click="changeOrcid">Orcid Change</button>
    <p>Current orcid in store : {{getOrcid}} and currentOrcid : {{getOrcid}}</p>
    <p v-if="getOrcid == '0000-0003-3607-3108'">Orcid logged 0000-0003-3607-3108</p>
  </div>
</template>

<script>
import AerisOrcid from "../../../lib/modules/aeris-orcid/components/aeris-orcid.vue";

export default {
  components: {
    AerisOrcid
  },
  data() {
    return {
      orcid: "",
    //   orcidShow: false,
      currentOrcid: "",
      listOrcid: [
        "0000-0002-3845-4580",
        "0000-0002-7377-1565",
        "0000-0003-3607-3108",
        "0000-0002-3444-1694",
        "0000-0003-3740-4570"
      ],
      indexOrcid: 0
    };
  },
  methods: {
    changeOrcid() {
      console.log("changeOrcid : ", this.listOrcid[this.indexOrcid]);
      this.$store.commit("setOrcid", this.listOrcid[this.indexOrcid]);
      if (this.indexOrcid < this.listOrcid.length - 1) {
        this.indexOrcid++;
      } else {
        this.indexOrcid = 0;
      }
    }
  },
 computed: {
    getOrcid() {
     return this.$store.getters.getOrcid;
   }
 },
 
};
</script>
