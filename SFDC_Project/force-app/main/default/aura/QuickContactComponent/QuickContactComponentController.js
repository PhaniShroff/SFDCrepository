({
	doSave : function(component, event, helper) {
        var action = component.get('c.createContact');
        action.setParams({
            con : component.get('v.CreateContact'),
            AccountId : component.get('v.accountId')
            
            
        });
        action.setCallback(this,function(response){
            var state = response.getState();
            alert(state);
            if(state === 'SUCCESS' || state === 'DRAFT'){
                var responsevalue = response.getReturnValue();
                var componentEvent = component.getEvent('quickContact');
                componentEvent.setParams({
                    ContactRecord : responsevalue
                    
                });
                componentEvent.fire();
            }else if(state === 'INCOMPLETE'){
                
            }else if(state === 'ERROR'){
                
            }
        },'ALL');
        $A.enqueueAction(action);
		
	}
})