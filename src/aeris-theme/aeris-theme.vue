<template>
<span class="aeris-theme-host">
</span>
</template>


<script>
export default {
  props: {
  	primary:  {
      type: String,
      default: null
    },
    emphasis:  {
      type: String,
      default: null
    },
    active: {
    	type: Boolean,
     	 default: false
    },
},
  
   
  watch: {
    primary () {
	      this.refresh();
    },
    emphasis () {
	      this.refresh();
    },
    active () {
	      this.refresh();
    }
  },
  
  created: function () {
  		this.refresh()
  		this.aerisThemeRequestListener = this.handleThemeRequest.bind(this) 
   document.addEventListener('aerisThemeRequest', this.aerisThemeRequestListener);
  },
  
   destroyed: function() {
  	document.removeEventListener('aerisThemeRequest', this.aerisThemeRequestListener);
  	this.aerisThemeRequestListener = null;
  },
  
  computed: {
 
  },
  
  mounted: function() {
   
  },
  
  data () {
    return {
    	aerisThemeRequestListener: null
    }
  },
  
  methods: {
  
  refresh: function() {
  	if (this.active && this.primary && this.emphasis) {
  	    var event = new CustomEvent('aerisTheme', { detail: {primary: this.primary, emphasis: this.emphasis}});
  		document.dispatchEvent(event);
  	}
  },
  
  handleThemeRequest: function() {
  	this.refresh();
  }
  
  }
}
</script>

<style>
    .aeris-metadata-format-host {
        display: block;
        margin: 10px 0;
        transition: 0.6s
    }
    .aeris-metadata-international-field {
        width: 100%
    }
    .metadata-format-container {
        border: 1px solid #bbb;
        overflow: hidden
    }
    .metadata-format-container header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-flow: nowrap row;
        padding: 10px
    }
    .metadata-format-container header h5 {
        display: inline;
        margin: 0;
         color: #475053
    }
    
    .metadata-format-container header span {
        color: #475053
    }
    .metadata-format-container header input {
        width: 100%;
        padding: 2px 0;
        font-size: 0.83em;
        font-weight: bold;
        color: #4765A0;
        outline: none;
        border: none;
        border-bottom: 1px solid #ddd
    }
    .metadata-format-container header i {
        cursor: pointer;
        color: #999
    }
    .metadata-format-container header i:hover {
        opacity: 0.6
    }
    .metadata-format-container article {
        display: none;
        padding: 10px;
        border-top: 1px solid #ddd
    }
    .metadata-format-container article h5 {
        margin: 5px 0;
        color:  #4765A0
    }
    .metadata-format-container article p {
        margin: 0
    }
    .metadata-format-container article a {
        color: #3498db
    }
    .metadata-format-container.showBody article {
        display: block
    }
    .metadata-format-container.showBody .fa-chevron-down {
        transform: rotate(180deg)
    }
    .metadata-format-container .fa-chevron-down {
        transition: 0.3s
    }
    .metadata-icon-btn {
        margin: 0 5px;
        cursor: pointer
    }
    .metadata-icon-btn:hover {
        opacity: 0.6
    }
    
    .metadata-format-container header {
        background-color: #fff
    }
</style>