<template>
  <div>
    <div id="catalogue" class="catalogue">
      <div id="criteria" class="criteria">
        <div class="aeris-input-group">
          <form autocomplete="off">
            <input id="from" type="text" class="input__datepicker" placeholder="Choose beginning date" />
          </form>
        </div>
        <aeris-datepicker
          :theme="{ emphasis: '#f39c12' }"
          language="fr"
          for="input#from"
          format="DD/MM/YYYY"
        ></aeris-datepicker>
        <div class="aeris-input-group">
          <form autocomplete="off">
            <input id="to" type="text" class="input__datepicker" placeholder="Choose ending date" />
          </form>
        </div>
        <aeris-datepicker for="input#to" format="DD/MM/YYYY HH:mm"></aeris-datepicker>
      </div>
      <div class="cart">Téléchargement</div>
      <div class="summaries">Summaries</div>
      <div class="sheet">Metadata</div>
    </div>
  </div>
</template>

<script>
import AerisDatepicker from "../../../lib/modules/aeris-datepicker/components/aeris-datepicker.vue";

export default {
  components: {
    AerisDatepicker
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.catalogue {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #eee;
  display: grid;
  grid-template-columns: 20% 20% 60%;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "criteria cart      sheet"
    "criteria summaries sheet";
}

.criteria,
.cart,
.summaries {
  padding: 20px;
  position: relative;
}

.criteria {
  grid-area: criteria;
  background-color: #f5f5f5;
}

.cart {
  grid-area: cart;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.summaries {
  grid-area: summaries;
}

.sheet {
  grid-area: sheet;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
