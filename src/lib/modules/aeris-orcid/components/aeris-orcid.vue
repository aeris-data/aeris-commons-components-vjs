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
    },
    
    name:  {
        type: String,
        default: null
      }

},
  
   
watch: {
	orcid: function() {
	      this.refresh();
    },
    name: function() {
	      this.refresh();
    }
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
   this.refresh()
  },
  
  data () {
    return {
    	aerisOrcidRequestListener: null
    }
  },
  
  methods: {
  
  handleOrcidRequest: function() {
  	this.refresh()
  },
  
  refresh: function() {
	  if ((this.orcid) && (this.name)) {
		  var event = new CustomEvent('aerisOrcidResponse', { detail: {user: {orcid: this.orcid, name: this.name}}});
		  document.dispatchEvent(event);
	  }
	  else if (this.orcid) {
	  		var event = new CustomEvent('aerisOrcidResponse', { detail: {user: {orcid: this.orcid}}});
	  		document.dispatchEvent(event);
	  	}
	  	else {
	  		var event = new CustomEvent('aerisOrcidResponse', { detail: {}});
	  		document.dispatchEvent(event);
	  	}
	  	
	  }
  }
}
</script>

<style>
   
</style>