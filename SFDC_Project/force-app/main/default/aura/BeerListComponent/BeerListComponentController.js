({
    showInfo : function(component, event, helper) {
        var eventSource = event.getSource();
        var beerObj = eventSource.get('v.name');
        console.log(beerObj);
        component.set('v.beerId',beerObj);
        $A.createComponent(
            "c:BeerDetails",
            {
                "beerId" : beerObj
               
            },	
            function(beerDetails, status, errorMessage){
                if (status === "SUCCESS") {
                    component.find('overLayLib').showCustomModal({
                        header: "Beer Details",
                        body: beerDetails, 
                        footer:'Footer ',
                        showCloseButton: true,
                        closeCallback: function() {
                        }
                    });
                }else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                } else if (status === "ERROR") {
                    console.log("Error: " + errorMessage);
                }
            }
        );
	}
})