import { LightningElement,track,wire} from 'lwc';
import submitGuestRecord from '@salesforce/apex/HotelProjectClass.submitGuestRecord'; 
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {NavigationMixin} from 'lightning/navigation';
import getAccountList from '@salesforce/apex/HotelAppClass.getAccountList';

const columns = [{
    label: 'Hotel Code',
    fieldName: 'Name'
}];

export default class InternshipHotelComponent extends NavigationMixin(LightningElement) {
    @track guestObjFirstName;
    @track guestObjLastName;
    @track guestObjPhone;
    @track guestObjEmail;
    @track guestRecordId;
    @track hotelId;
    @track records;
    @track errorMsg;
    @track errorMessage;

    @track hotelCity = '';
    @track HotelMasters;
    @track columns = columns;
    //  invoke apex method with wire property and fetch picklist options.
    // pass 'object information' and 'picklist field API name' method params which we need to fetch from apex
    @wire(getAccountList) hotelCityNames;
    onValueSelection(event) {
        // eslint-disable-next-line no-alert
        const selectedCity = event.target.value;
        this.hotelCity = event.target.value;
        if (selectedCity != null) {
            getContacts({
                hotelCity: selectedCity
                })
                .then(result => {
                    this.HotelMasters = result;
                    // eslint-disable-next-line no-console
                    console.log('result' + JSON.stringify(result) + selectedCity);
                })
                .catch(error => {
                    this.error = error;
                });
        }
    }
   
    
    guestHandleChange(event){
        if(event.target.name == 'guestFirstName'){
            this.guestObjFirstName = event.target.value;
        }
        if(event.target.name == 'guestLastName'){
            this.guestObjLastName = event.target.value;
        }
        if(event.target.name == 'guestPhone'){
            this.guestObjPhone = event.target.value;
        }
        if(event.target.name == 'guestEmail'){
            this.guestObjEmail = event.target.value;
        }
    }

    submitAction(){
        submitGuestRecord({Guest_First_Name:this.guestObjFirstName,Guest_Last_Name:this.guestObjLastName,Guest_Phone:this.guestObjPhone,Guest_Email:this.guestObjEmail})
        .then(Result=>{
            this.guestRecordId = Result.Id;
            window.console.log('scoreRecoreId##Vijay2 ' + this.guestRecordId); 
            const toastEvent = new ShowToastEvent({
                title:'Success!',
                message:'Record created successfully',
                variant:'success'
              });
              this.dispatchEvent(toastEvent);

             
        })
        .catch(error =>{
            this.errorMsg=error.message;
            window.console.log(this.error);
        });
    }

    navigateToLWCUsingAura() {
        let compDefinition = {
            componentDef: "c:targetComponent",
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

/*
import { ,wire,track } from 'lwc';
 
import getAccountList from '@salesforce/apex/AccountLWCController.getAccountList';
import getContacts from '@salesforce/apex/AccountLWCController.getContacts';
 
const columns = [{
        label: 'First Name',
        fieldName: 'FirstName'
    },
    {
        label: 'Last Name',
        fieldName: 'LastName'
    },
    {
        label: 'Email',
        fieldName: 'Email',
        type: 'email'
    },
    {
        label: 'Phone',
        fieldName: 'phone',
        type: 'phone'
    }
 
];
export default class AccountList extends  {
    @track accountId = '';
    @track contacts;
    @track columns = columns;
    //  invoke apex method with wire property and fetch picklist options.
    // pass 'object information' and 'picklist field API name' method params which we need to fetch from apex
    @wire(getAccountList) accounts;
    onValueSelection(event) {
        // eslint-disable-next-line no-alert
        const selectedAccount = event.target.value;
        this.accountId = event.target.value;
        if (selectedAccount != null) {
            getContacts({
                    accountId: selectedAccount
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
*/