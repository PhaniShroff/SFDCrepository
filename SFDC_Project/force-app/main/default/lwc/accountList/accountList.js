import { LightningElement,wire,track } from 'lwc';
 
import getAccountList from '@salesforce/apex/HotelAppClass.getAccountList';
import getContacts from '@salesforce/apex/HotelAppClass.getContacts';
 
const columns = [{
    label: 'Hotel Name',
    fieldName: 'Hotel_Name__c'
},
{
    label: 'Per day cost',
    fieldName: 'Per_day__c'
}
];
export default class AccountList extends LightningElement {
    @track hotelCity= '';
    @track contacts;
    @track columns = columns;
    //  invoke apex method with wire property and fetch picklist options.
    // pass 'object information' and 'picklist field API name' method params which we need to fetch from apex
    @wire(getAccountList) hotelCityNames;
    onValueSelection(event) {
        // eslint-disable-next-line no-alert
        const selectedAccount = event.target.value;
        this.hotelCity = event.target.value;
        if (selectedAccount != null) {
            getContacts({
                Hotel_City__c: selectedAccount
                })
                .then(result => {
                    this.contacts = result;
                    // eslint-disable-next-line no-console
                    console.log('result' + JSON.stringify(result) + selectedAccount);
                })
                .catch(error => {
                    this.error = error;
                });
        }
    }
}