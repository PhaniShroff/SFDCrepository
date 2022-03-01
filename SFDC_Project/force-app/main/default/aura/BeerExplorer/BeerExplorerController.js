({
	handleCompEvent : function(component, event, helper) {
        var varsearchParam = event.getParam('searchText');
        var action = component.get('c.searchBeer');
        action.setParams({
            searchParam : varsearchParam
            
        });
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state === 'SUCCESS'){
                var responsevalue = response.getReturnValue();
                console.log('responseValue',responsevalue);
                component.set('v.beerList',responsevalue);
            }else{
                console.log(response.getError());
            }
            
        });
        
        $A.enqueueAction(action);
                            
                           
                           
        
		
	}
})