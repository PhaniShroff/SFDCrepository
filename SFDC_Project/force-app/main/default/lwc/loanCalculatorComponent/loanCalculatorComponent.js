import { LightningElement } from 'lwc';

export default class LoanCalculatorComponent extends LightningElement {
    principal;
    time;
    ROI;
    LoanResult;

    PrincipalAmountHandler(event){
        this.principal = parseInt(event.target.value);
    }
    TimeHandler(event){
        this.time = parseInt(event.target.value);
    }
    ROIHandler(event){
        this.ROI = parseInt(event.target.value);
    }
    InterestHandler(){
        this.LoanResult = ("The interest amount is"+(this.principal*this.time*this.ROI)/100);
    }
}