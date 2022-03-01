({
	handleSearch : function(component, event, helper) {
        var compEvent = component.getEvent("BeerEvent");
        var searchParam = component.find("SearchInput").get('v.value');
       compEvent.setParams({
            searchText : searchParam
        });
            compEvent.fire();
            
		
	}
})