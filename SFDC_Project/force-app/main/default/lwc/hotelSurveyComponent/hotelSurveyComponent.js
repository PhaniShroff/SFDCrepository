import { LightningElement} from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import caseobject from '@salesforce/schema/Case';
import contactname from '@salesforce/schema/Case.ContactId';
import accountname from '@salesforce/schema/Case.AccountId';
import UserPermissionsOfflineUser from '@salesforce/schema/User.UserPermissionsOfflineUser';

export default class HotelSurveyComponent extends LightningElement {

    value = [];
    get options() {
        return [
            { label: 'Excellent', value: 'option1' },
            { label: 'Good', value: 'option2' },
            { label: 'Bad', value: 'option3' },
        ];
    }

   
    
   numberOfPointsOfOne = 0;
   numberOfPointsOfTwo = 0;
   numberOfPointsOfThree = 0;
   numberOfPointsOfFour = 0;
   Percentage = 0;
   
  
   

   handleChangeForOne(event) {
        const changeValue = event.detail.value;
        if (changeValue =='option1' ) {
            this.numberOfPointsOfOne = 10;
           
        }
        else if (changeValue =='option2') {
            this.numberOfPointsOfOne = 5;
        }
        else if (changeValue =='option3') {
            this.numberOfPointsOfOne = 0;
        }
    }

    handleChangeForTwo(event) {
        const changeValue = event.detail.value;
        if (changeValue =='option1' ) {
            this.numberOfPointsOfTwo = 10;
        }
        else if (changeValue =='option2') {
            this.numberOfPointsOfTwo = 5;
        }
        else if (changeValue =='option3') {
            this.numberOfPointsOfTwo = 0;
        }
    }

    handleChangeForThree(event) {
        const changeValue = event.detail.value;
        if (changeValue =='option1' ) {
            this.numberOfPointsOfThree = 10;
        }
        else if (changeValue =='option2') {
            this.numberOfPointsOfThree = 5;
        }
        else if (changeValue =='option3') {
            this.numberOfPointsOfThree = 0;
        }
    }

    handleChangeForFour(event) {
        const changeValue = event.detail.value;
        if (changeValue =='option1' ) {
            this.numberOfPointsOfFour = 10;
        }
        else if (changeValue =='option2') {
            this.numberOfPointsOfFour = 5;
        }
        else if (changeValue =='option3') {
            this.numberOfPointsOfFour = 0;
        }
    }

    reviewPercentage(){
        
        this.Percentage = ("The overall percentage is",+(this.numberOfPointsOfOne+this.numberOfPointsOfTwo+this.numberOfPointsOfThree+this.numberOfPointsOfFour)*2.5);
        if (Percentage < 45) {

            createRecord(recordInput)
    
            
        }
    }
    
    

}