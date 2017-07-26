<template>
<span class="aeris-orcid-host">
</span>
</template>


<script>
export default {
  props: {
  	orcid:  {
      type: String,
      default: null
    }
},
  
   
  watch: {
   },
  
  created: function () {
   this.aerisOrcidRequestListener = this.handleOrcidRequest.bind(this) 
   document.addEventListener('aerisOrcidRequest', this.aerisOrcidRequestListener);
  },
  
   destroyed: function() {
   document.removeEventListener('aerisOrcidRequest', this.aerisOrcidRequestListener);
  	this.aerisOrcidRequestListener = null;
  },
  
  computed: {
 
  },
  
  mounted: function() {
   
  },
  
  data () {
    return {
    	aerisOrcidRequestListener: null
    }
  },
  
  methods: {
  
  handleOrcidRequest: function() {
  	console.log("Orcid ?: "+this.orcid);
  }
  
  }
}
</script>

<style>
   
</style>