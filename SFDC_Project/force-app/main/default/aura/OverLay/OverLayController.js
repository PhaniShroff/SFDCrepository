({
    createModal : function(component, event, helper) {
        component.find('overLayLib').showCustomModal({
            header: "Application Confirmation",
            body: 'This is test',
            footer:'Footer',
            showCloseButton: true,
            closeCallback: function() {
                alert('You closed the alert!');
            }
        });
        
    },
    navigateURL:function(component, event, helper) {
        var pageReference = component.find("navigation");
        var pageReferenceNav = {
            "type": "standard__component",
            "attributes": {
                "componentName": "c__BeerExplorer"    
            },    
            "state": {
                "c__myAttr": "attrValue"    
            }
        };
        pageReference.navigate(pageReferenceNav);
    }
})