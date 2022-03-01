({
	handleEvent : function(component, event, helper) {
        var varSearch = event.getParam('searchText');
        var action = component.get('c.searchBeer');
        action.setParams({
            searchParam : varSearch
        });
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state === 'SUCCESS'){
                component.set('v.beerList',response.getReturnValue());
            }else{
                console.log(response.getError());
            }
            
        });
        $A.enqueueAction(action);
		
	}
})