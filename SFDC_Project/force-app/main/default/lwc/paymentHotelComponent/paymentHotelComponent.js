import { LightningElement,track } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import submitPaymentRecord from '@salesforce/apex/PaymentHotelClass.submitPaymentRecord'; 

export default class PaymentHotelComponent extends LightningElement {

    @track paymentObjCn;
    @track paymentObjEm;
    @track paymentObjEy;
    @track paymentObjCvv;
    @track paymentRecordId;
    @track errorMssg;

    paymentObjHandler(event){
        if(event.target.name == 'paymentCn'){
            this.paymentObjCn = event.target.value;
        }
        if(event.target.name == 'paymentEm'){
            this.paymentObjEm = event.target.value;
        }
        if(event.target.name == 'paymentEy'){
            this.paymentObjEy = event.target.value;
        }
        if(event.target.name == 'paymentCvv'){
            this.paymentObjCvv = event.target.value;
        }
    }


    handlePayment(){
        submitPaymentRecord({card_number:this.paymentObjCn,Expiry_month:this.paymentObjEm,Expiry_year:this.paymentObjEy,CVV:this.paymentObjCvv})
        .then(Result=>{
            this.paymentRecordId = Result.Id; 
            window.console.log('scoreRecoreId##Vijay2 ' + this.paymentRecordId);
            const toastEvent = new ShowToastEvent({
                title:'Success!',
                message:'Record created successfully',
                variant:'success'
              });
              this.dispatchEvent(toastEvent);

             
        })
        .catch(error =>{
            this.errorMssg=error.message;
            window.console.log(this.error);
        });
    }
}