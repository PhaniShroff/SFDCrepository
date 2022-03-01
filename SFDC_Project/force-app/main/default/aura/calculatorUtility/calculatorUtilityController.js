({
	handleAdd : function(component, event, helper) {
        var number1 = component.get('v.firstNumber');
        var number2 = component.get('v.secondNumber');
        component.set('v.output',parseInt(number1)+parseInt(number2));
		
	}
})