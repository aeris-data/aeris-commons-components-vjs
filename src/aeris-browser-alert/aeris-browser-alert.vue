/*
 dependances: 
 font awesome
*/


<template>
<span class="aeris-browser-alert-host" v-if="visible">
 <div class="browser-alert">
        <div class="browser-alert-content">
          <i class="fa fa-exclamation fa-2x"></i>
		  <span v-html="message"></span>	          
        </div>
        <i class="fa fa-times" v-on:click.stop="hide"></i>
        <button class="browser-alert-button" type="button" v-on:click.stop="doNotShow">Ne plus afficher</button>
      </div>
 </span>
</template>

<script>
export default {
  props: {
  	lang:  {
      type: String,
      default: 'en'
    }
  },
  
  data () {
    return {
      message:'',
      visible: false
    }
  },
  
  mounted() {
        var cooki = this.getCookie('browser-alert');
        var isCompatible = true;
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        var isSafari = false;
        var ua = navigator.userAgent.toLowerCase(); 
		if (ua.indexOf('safari') != -1) { 
  			if (ua.indexOf('chrome') > -1) {
			} else {
    		isSafari = true;
  			}
		}
        console.log("Firefox: "+isFirefox);
        if (isFirefox) {
        	isCompatible = false;
        	if (this.lang == 'fr') {
        		this.message = "<p>Vous utilisez <b>Firefox</b>. Ce navigateur ne prend pas en charge l'int&eacute;gralit&eacute; des technologies utilis&eacute;es sur cette page.</p><p> De fait, son contenu peut mettre plusieurs secondes &agrave; s'afficher enti&egrave;rement. Nous travaillons &agrave; corriger rapidement ce probl&egrave;me.</p><p>En attendant nous conseillons d'utiliser <b>Chrome</b> ou <b>Opera</b>.</p>" 
        	}
        	else {
        		this.message ="<p> You use <b>Firefox</b>. This browser does not support all of the technologies used on this page. </p> <p> Thus, its content may take several seconds to display fully.We are working to correct this problem quickly.</p> <p> Meanwhile we recommend using <b> Chrome </ b> or <b> Opera </ b>. </ p>"; 
        	}
        }
        if (isSafari) {
        	isCompatible = false;
        	if (this.lang == 'fr') {
        		this.message = "<p>Vous utilisez <b>Safari</b>. Ce navigateur ne prend pas en charge l'int&eacute;gralit&eacute; des technologies utilis&eacute;es sur cette page.</p><p> De fait, son contenu peut mettre plusieurs secondes &agrave; s'afficher enti&egrave;rement. Nous travaillons &agrave; corriger rapidement ce probl&egrave;me.</p><p>En attendant nous conseillons d'utiliser <b>Chrome</b> ou <b>Opera</b>.</p>" 
        	}
        	else {
        		this.message ="<p> You use <b>Safari</b>. This browser does not support all of the technologies used on this page. </p> <p> Thus, its content may take several seconds to display fully.We are working to correct this problem quickly.</p> <p> Meanwhile we recommend using <b> Chrome </ b> or <b> Opera </ b>. </ p>"; 
        	}
        }
        if (isIE) {
        	isCompatible = false;
        	if (this.lang == 'fr') {
        		this.message = "<p>Vous utilisez <b>Internet Explorer</b>. Ce navigateur ne prend pas en charge l'int&eacute;gralit&eacute; des technologies utilis&eacute;es sur cette page.</p><p> De fait, son contenu peut mettre plusieurs secondes &agrave; s'afficher enti&egrave;rement. Nous travaillons &agrave; corriger rapidement ce probl&egrave;me.</p><p>En attendant nous conseillons d'utiliser <b>Chrome</b> ou <b>Opera</b>.</p>" 
        	}
        	else {
        		this.message ="<p> You use <b>Internet Explorer</b>. This browser does not support all of the technologies used on this page. </p> <p> Thus, its content may take several seconds to display fully.We are working to correct this problem quickly.</p> <p> Meanwhile we recommend using <b> Chrome </ b> or <b> Opera </ b>. </ p>"; 
        	}
        }
        //if(isIE && !cooki) {
        if(!cooki && !isCompatible) {
          window.setTimeout(function() {
            this.show();
          }.bind(this), 500);
        }
      },
  
  computed: {
  },
  
  methods: {
     show: function() {
        this.visible = true	;
      },
      
      hide: function() {
        this.visible = false;
      },
      
      doNotShow: function() {
        this.hide();
        setCookie('browser-alert', 1, 365);
      },
      
      setCookie: function(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = 'expires=' + d.toUTCString();
      document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    },

    getCookie: function(cname) {
      var name = cname + '=';
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }

        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }

      }

      return '';
    }
  }
}
</script>

<style>
	   .aeris-browser-alert-host {
        display: block;
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 50%;
        transform: translate3d(-50%, -100%, 0);
        opacity: 0;
        transition: transform 0.3s
    }
    .aeris-browser-alert-host.visible {
        transform: translate3d(-50%, 0, 0);
        opacity: 1
    }
    .browser-alert {
        position: relative;
        display: flex;
        flex-flow: column nowrap;
        padding: 10px 10px 10px 20px;
        color: #333;
        background-color: #F5B041
    }
    .browser-alert .fa-times {
        position: absolute;
        top: 10px;
        right: 10px
    }
    .browser-alert .fa-times:hover {
        align-self: flex-start;
        cursor: pointer;
        opacity: 0.6
    }
    .browser-alert-content {
        display: flex;
        align-items: center;
        flex-flow: row nowrap;
        margin-right: 10px
    }
    .browser-alert-content .fa {
        margin-right: 5px
    }
    .browser-alert-content p {
        margin: 0 10px
    }
    .browser-alert-content a {
        color: inherit
    }
    .browser-alert-button {
        align-self: flex-end;
        margin: 10px 30px 0 0;
        color: #333;
        background-color: transparent;
        outline: none;
        border: 1px solid
    }
    .browser-alert-button:hover {
        opacity: 0.6;
        cursor: pointer
    }
</style>