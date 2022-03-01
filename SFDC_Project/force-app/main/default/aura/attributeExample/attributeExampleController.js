({
	doClick : function(component, event, helper) {
        alert(component.isValid());
        alert(component.getName());
        alert(component.get('v.whom'));
        var compAge = component.find("textInput");
        alert(compAge.get('v.value'));
        compAge.set('v.value',67);
		
	}
})