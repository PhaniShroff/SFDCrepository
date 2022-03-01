import { LightningElement } from 'lwc';

export default class PatientDetailsComponent extends LightningElement {
    booleanflagvalue = false;
    
    showFormHandler(){
        this.booleanflagvalue = true;
    }

    hideFormHandler(){
        this.booleanflagvalue = false;
    }
}