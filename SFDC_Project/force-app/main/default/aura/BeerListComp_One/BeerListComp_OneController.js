({
	handleClick : function(component, event, helper) {
        var eventSource = event.getSource();
        // var beerObj = eventSource.get('v.name');
        alert(eventSource.get('v.name'));		
	}
})