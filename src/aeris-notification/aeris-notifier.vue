<template>
<span class="aeris-notifier-host">
<div class="aeris-notifier-container">
<li v-for="notification in notifications" class="notification" :key="notification.uuid">
<aeris-notification  :type="notification.type" :message="notification.message" :spinner="notification.spinner" :closable="notification.closable" :auto-hide="notification.autoHide" :auto-hide-delay="notification.autoHideDelay"></aeris-notification>
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
    	aerisNotificationDestroyedEventListener: null,
    	aerisNotificationMessageEventListener: null,
    	errorErrorNotificationMessageEventListener: null,
    	aerisLongActionStartEventListener: null,
    	aerisLongActionStopEventListener: null
    }
  },
  
  mounted: function() {
  },
  
  created: function () {
	  
	  this.errorNotificationMessageEventListener = this.handleErrorNotificationMessageEvent.bind(this)
	  document.addEventListener('aerisErrorNotificationMessageEvent', this.errorNotificationMessageEventListener);
	  
	  this.aerisNotificationMessageEventListener = this.handleNotificationMessageEvent.bind(this)
	  document.addEventListener('aerisNotificationMessageEvent', this.aerisNotificationMessageEventListener);
	  
	  this.aerisNotificationDestroyedEventListener = this.handleNotificationDestroyed.bind(this)
	  document.addEventListener('aerisNotificationDestroyed', this.aerisNotificationDestroyedEventListener);
	  
	  this.aerisLongActionStartEventListener = this.handleLongActionStartEvent.bind(this)
	  document.addEventListener('aerisLongActionStartEvent', this.aerisLongActionStartEventListener);
	  
	  this.aerisLongActionStopEventListener = this.handleLongActionStopEvent.bind(this)
	  document.addEventListener('aerisLongActionStopEvent', this.aerisLongActionStopEventListener);
  },
  
  destroyed: function() {
	  	document.removeEventListener('aerisNotificationMessageEvent', this.aerisNotificationMessageEventListener);
	  	this.aerisNotificationMessageEventListener = null;
	  	
	  	document.removeEventListener('aerisErrorNotificationMessageEvent', this.aerisErrorNotificationMessageEventListener);
	  	this.aerisErrorNotificationMessageEventListener = null;
	  	
	  	document.removeEventListener('aerisNotificationDestroyed', this.aerisNotificationDestroyedEventListener);
	  	this.aerisNotificationDestroyedEventListener = null;
	  	
	  	document.removeEventListener('aerisLongActionStartEvent', this.aerisLongActionStartEventListener);
	  	this.aerisLongActionStartEventListener = null;

	  	document.removeEventListener('aerisLongActionStopEvent', this.aerisLongActionStopEventListener);
	  	this.aerisLongActionStopEventListener = null;
		 
  },
  
  computed: {
  },
  methods: {

	    
      handleNotificationMessageEvent: function(e) {
    	  console.log("handleNotificationMessageEvent")
    	  var notification = {
    	          message: e.detail.message,
    	          type: 'notification',
    	          autoHide: true,
    	          autoHideDelay: '3000',
    	          closable: true,
    	          spinner: false
    	  };
    	  this.notifications.push(notification)
      },
      
      handleLongActionStartEvent: function(e) {
          var notification = {
            message: e.detail.message,
            type: 'wait',
            autoHide: false,
            spinner: true,
            closable: true
          };

          this.notifications.push(notification)
        },
      
      handleErrorNotificationMessageEvent: function(e) {
    	  console.log("handleErrorNotificationMessageEvent")
    	  var notification = {
              message: e.detail.message,
              type: 'error',
              autoHide: false,
              autoHideDelay: 5000,
              closable	: true,
              spinner: false
            };
    	  this.notifications.push(notification)
    	  
      },
      
      handleNotificationDestroyed: function (e) {
    	  console.log("Demande Destruction notif "+e.detail.message)
    	  
    	  var index = this.notifications.findIndex(i => i.message === e.detail.message);
    	  if (index > -1) {
   		   this.notifications.splice(index, 1);
   		   console.log("Destruction notif "+e.detail.message)
    	  }
   		   console.log(this.notifications.length)
      },
      
      handleLongActionStopEvent: function(e) {
    	  var message= e.detail.message
    	  console.log("Demande Destruction notif "+e.detail.message)
    	  
    	  var index = this.notifications.findIndex(i => i.message === e.detail.message);
    	  if (index > -1) {
   		   this.notifications.splice(index, 1);
   		   console.log("Destruction notif "+e.detail.message)
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