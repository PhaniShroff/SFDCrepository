import { LightningElement, wire, track } from 'lwc';

import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';

export default class Lwc_To_Apex_Mode_Two extends LightningElement {
    @track accounts;
    @track error;

    @wire(getAccountList)
    wiredAccounts({error,data}){

        if(data){
            this.accounts = data;
        }

        else if(error){
            console.log(error);
            this.error = error;
        }
    }
}