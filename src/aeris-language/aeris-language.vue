<template>
<span class="aeris-language-host">
</span>
</template>


<script>
export default {
  props: {
  	lang:  {
      type: String,
      default: null
    },
    active: {
    	type: Boolean,
     	 default: false
    },
},
  
   
  watch: {
    lang () {
	      this.refresh();
    },
    active () {
	      this.refresh();
    }
  },
  
  created: function () {
  		this.refresh()
  		this.aerisLanguageRequestListener = this.handleLanguageRequest.bind(this) 
   document.addEventListener('aerisLanguageRequest', this.aerisLanguageRequestListener);
  },
  
   destroyed: function() {
  	document.removeEventListener('aerisLanguageRequest', this.aerisLanguageRequestListener);
  	this.aerisLanguageRequestListener = null;
  },
  
  computed: {
 
  },
  
  mounted: function() {
   
  },
  
  data () {
    return {
    	aerisLanguageRequestListener: null
    }
  },
  
  methods: {
  
  refresh: function() {
  	if (this.active && this.lang) {
  	    var event = new CustomEvent('aerisLanguageResponse', { detail: {lang: this.lang}});
  		document.dispatchEvent(event);
  	}
  },
  
  handleLanguageRequest: function() {
  	this.refresh();
  }
  
  }
}
</script>

<style>
  
</style>