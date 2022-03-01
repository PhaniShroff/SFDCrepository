import { LightningElement, wire } from 'lwc';

import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';

export default class Lwc_To_Apex_Mode_One extends LightningElement {

    @wire(getAccountList) accounts;
}