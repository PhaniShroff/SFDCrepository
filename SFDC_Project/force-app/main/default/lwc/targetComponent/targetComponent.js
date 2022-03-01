import { LightningElement,api } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class TargetComponent extends NavigationMixin(LightningElement) {

    @api messagefromparent;
    @api projectcode;
    
    navigateToPayment() {
        let compDefinition = {
            componentDef: "c:paymentHotelComponent",
            attributes: {
                
            }
        };
        // Base64 encode the compDefinition JS object
        let encodedCompDef = btoa(JSON.stringify(compDefinition));
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
                url: "/one/one.app#" + encodedCompDef
            }
        });
    }
   
}