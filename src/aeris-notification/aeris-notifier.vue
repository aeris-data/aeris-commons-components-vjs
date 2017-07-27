<template>
<span class="aeris-notifier-host">
<div class="aeris-notifier-container">
<li v-for="notification in notifications" class="notification">
<aeris-notification :id="notification.id" :type="notification.type" :message="notification.message" :closable="notification.closable" :auto-hide="notification.autoHide"></aeris-notification>
</li>
</div>
</span>
</template>
<script>
export default {
props: {
  },
  data () {
    return {
    	notifications: [],
    	aerisNotificatioDestroyedEventListener: null,
    	aerisNotificationMessageEventListener: null
    	
    }
  },
  
  mounted: function() {
  },
  
  created: function () {
	  this.aerisNotificationMessageEventListener = this.handleNotificationMessageEvent.bind(this)
	  document.addEventListener('aerisNotificationMessageEvent', this.aerisNotificationMessageEventListener);
	  
	  this.aerisNotificatioDestroyedEventListener = this.handleNotificationDestroyed.bind(this)
	  document.addEventListener('aerisNotificationDestroyed', this.aerisNotificatioDestroyedEventListener);
  },
  
  destroyed: function() {
	  	document.removeEventListener('aerisNotificationMessageEvent', this.aerisNotificationMessageEventListener);
	  	this.aerisNotificationMessageEventListener = null;
	  	
	  	document.removeEventListener('aerisNotificationDestroyed', this.aerisNotificatioDestroyedEventListener);
	  	this.aerisNotificatioDestroyedEventListener = null;
  },
  
  computed: {
  },
  methods: {
	  
	  guid: function() {
	      function s4() {
	        return Math.floor((1 + Math.random()) * 0x10000)
	          .toString(16)
	          .substring(1);
	      }

	      return s4() + s4();
	    },
	    
      handleNotificationMessageEvent: function(e) {
    	  console.log("handleNotificationMessageEvent")
    	  var notification = {
    	          id:this.guid(),
    	          message: e.detail.message,
    	          type: 'notification',
    	          autoHide: true,
    	          autoHideDelay: '3000',
    	          closable: true,
    	          spinner: false
    	  };
    	  this.notifications.push(notification)
      },
      
      handleNotificationDestroyed: function (e) {
    	  console.log("Demande Destruction notif "+e.detail.id)
    	  
    	  var index = this.notifications.findIndex(i => i.id === e.detail.id);
    	  if (index > -1) {
   		   this.notifications.splice(index, 1);
   		   console.log("Destruction notif "+e.detail.id)
    	  }
   		   console.log(this.notifications.length)
      }
      
  }
}
</script>
<style>
.aeris-notifier-host {
	display: block;
	position: absolute;
	z-index: 9999;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
}

.aeris-notifier-host .notification {
	list-style-type: none;
}

.aeris-notifier-host aeris-notification {
}

.aeris-notifier-host .aeris-notifier-container {
	display: flex;
	flex-direction: column;
}
</style>