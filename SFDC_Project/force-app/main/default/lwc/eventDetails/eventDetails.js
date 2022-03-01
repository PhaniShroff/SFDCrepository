import { LightningElement,api, track } from 'lwc';
import getSpeakers from '@salesforce/apex/eventDetailsController.getSpeakers';
import getLocationDetails from '@salesforce/apex/eventDetailsController.getLocationDetails';
const columns = [
    { label: 'Name', 
    fieldName: 'Name',
    cellAttributes: {
        iconName: { fieldName: 'standard:user' },
        iconPosition: 'left'
      }
    },
    { label: 'Email', fieldName: 'Email', type: 'email' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Company Name', fieldName: 'CompanyName' },
   
];

export default class EventDetails extends LightningElement {
    @api recordId;
    @track SpeakerList;
    @track eventRec;
    errors;
    columnsList = columns;

    handleSpeakers(){
        getSpeakers({
            eventId : this.recordId
        })
        
        .then((result) => {
            result.forEach(speaker => {
                speaker.Name = speaker.Speaker__r.Name,
                speaker.Email = speaker.Speaker__r.Email__c,
                speaker.Phone = speaker.Speaker__r.Phone__c,
                speaker.CompanyName = speaker.Speaker__r.Company__c
                
            });

            window.console.log('result',result);
            this.SpeakerList = result;
            this.errors = undefined;

            
        }).catch((err) => {
            this.errors = err;
            this.SpeakerList = undefined;
            
        });

        
    }

    handleLocatioDetails() {
        getLocationDetails({
          eventId: this.recordId
        })
          .then((result) => {
            if (result.Location__c) {
              this.eventRec = result;
            } else {
              this.eventRec = undefined;
            }
            this.errors = undefined;
          })
          .catch((err) => {
            this.errors = err;
            this.speakerList = undefined;
          });
      }
}