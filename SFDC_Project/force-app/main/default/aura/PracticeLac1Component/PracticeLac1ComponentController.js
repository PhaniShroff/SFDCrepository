({
	callMe : function(component) {
     /* var fName = component.find("EnteredFirstName").get("v.value");
        var lName = component.find("EnteredLastName").get("v.value");
        var fullName = fName+lName;
        alert("The full name is="+fullName);*/
        
      /*var FullName = component.find("EnteredName").get("v.value");
        var outputName = component.find("NameToDisplay");
        outputName.set("v.value",FullName); */
        
      /*  var firstName = component.find("EnteredFN").get("v.value");
        var lastName = component.find("EnteredLN").get("v.value");
        var fullName = component.find("OutlookName");
        fullName.set("v.value",lastName+firstName);  */
        
        var firstName = component.find("EnteredFN").get("v.value");
        var lastName = component.find("EnteredLN").get("v.value");
        var varAge = component.find("EnteredAge").get("v.value");
        var varMessage = component.find("message");
        if(Age >= 18)
            varMessage.set("You can vote");
        
		
	}
})