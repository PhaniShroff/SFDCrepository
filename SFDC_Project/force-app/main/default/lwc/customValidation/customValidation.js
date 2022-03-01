import { LightningElement } from 'lwc';

export default class CustomValidation extends LightningElement {
    
    validateInfo(){
        
    //taking refernce of component in HTML
    let searchCmp = this.template.querySelector(".nameCmp");
    let dateCmp = this.template.querySelector(".dateCmp");

    //fetching values
    let searchValue = searchCmp.value;
    let dtValue = dateCmp.value;

    //check if name is blank
    if(!searchValue){
        searchCmp.setCustomValidity("Name value is required");
    }
    else{
        searchCmp.setCustomValidity(""); // clear previous value
    }
    searchCmp.reportValidity();

    //check if date is blank
    if(!dtValue){
        dateCmp.setCustomValidity("date value is required");
    }
    else{
        searchCmp.setCustomValidity(""); // clear previous value
    }
    dateCmp.reportValidity();
    }



}