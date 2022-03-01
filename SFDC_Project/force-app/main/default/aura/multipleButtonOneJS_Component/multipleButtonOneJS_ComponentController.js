({
	callJSCode: function(component,event,helper){
        var varButtonID = event.getSource().getLocalId();
        var varButtonName = event.getSource().get("v.name");
        
        alert('the button id='+varButtonID);
        alert('the button name='+varButtonName);

        component.set("v.whichButtonPressed_ID",varButtonID);
        component.set("v.whichButtonPressed_Name",varButtonName);

    }

})