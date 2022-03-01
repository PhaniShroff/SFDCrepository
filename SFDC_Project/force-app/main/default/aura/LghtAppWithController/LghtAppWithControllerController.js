({
	getInfo : function(component) {
        var fullName = component.find("EnteredName").get("v.value");
        var outputName = component.find("NameToDisplay");
        outputName.set("v.value",fullName);
		
	}
})