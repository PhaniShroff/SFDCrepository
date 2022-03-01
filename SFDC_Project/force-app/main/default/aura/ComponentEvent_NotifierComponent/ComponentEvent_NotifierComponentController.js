({
	fireComponentEvent : function(component, event) {
        var varCmpEvent = component.getEvent("cmpEventName");
        varCmpEvent.setParams({
            "message":"This message is passed by componet event"  
        });
        varCmpEvent.fire();
		
	}
})