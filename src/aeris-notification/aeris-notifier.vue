<template>
<span class="aeris-notifier-host">
<div class="aeris-notifier-container">
<ul>
<li v-for="notification in notifications" class="notification" :key="notification.uuid">
<aeris-notification  :type="notification.type" :message="notification.message" :spinner="notification.spinner" :closable="notification.closable" :uuide="notification.uuid"></aeris-notification>
</li>
</ul>
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
    	  var uuid = this.computeUuid()
    	  var notification = {
    	          message: e.detail.message,
    	          type: 'notification',
    	          uuid: uuid,
    	          closable: true,
    	          spinner: false
    	  };
    	  console.log("depot notif "+uuid)
    	  this.notifications.push(notification)
   		  window.setTimeout(function(){document.dispatchEvent(new CustomEvent('aerisNotificationDestroyed', { 'detail': {uuid: uuid}}))}, 2000);

      },
      
      computeUuid:  function(){
    	  var aux = Math.floor((1 + Math.random()) * 0x100000).toString(16).substring(1);
    	  return aux;
      },
      
      handleLongActionStartEvent: function(e) {
    	  var uuid = this.computeUuid()
          var notification = {
            message: e.detail.message,
            type: 'wait',
            spinner: true,
            uuid: uuid,
            closable: true
          };

          this.notifications.push(notification)
        },
      
      handleErrorNotificationMessageEvent: function(e) {
    	  console.log("handleErrorNotificationMessageEvent")
    	  var notification = {
              message: e.detail.message,
              type: 'error',
              closable	: true,
              spinner: false
            };
    	  this.notifications.push(notification)
    	  
      },
      
      handleNotificationDestroyed: function (e) {
    	  console.log("Demande Destruction notif "+e.detail.uuid)
    	  
    	  var index = this.notifications.findIndex(i => i.uuid === e.detail.uuid);
    	  if (index > -1) {
   		   this.notifications.splice(index, 1);
   		   console.log("Destruction notif "+e.detail.uuid)
    	  }
   		   console.log(this.notifications.length)
      },
      
      handleLongActionStopEvent: function(e) {
    	  var message= e.detail.message
    	  console.log("Demande Destruction notif "+e.detail.message)
    	  
    	  var index = this.notifications.findIndex(i => ((i.message === e.detail.message) && (i.type==='wait')));
    	  if (index > -1) {
   		   this.notifications.splice(index, 1);
   		   console.log("Destruction notif "+e.detail.uuid)
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