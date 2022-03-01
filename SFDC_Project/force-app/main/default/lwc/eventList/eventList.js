import { LightningElement,track  } from 'lwc';
import upcomingEvents from '@salesforce/apex/eventDetailsService.upcomingEvents';
const columns = [
    {
        label:"View",
        fieldName:"URL",
        type:"url",
        wraptext:"true",
        typeAttributes:{
            label:{
                fieldName:"Name__c"

            },
            target:"_self"
        }
    },


    {
        label:"Name",
        fieldsName:"Name__c",
        cellAttributes:{
            iconName:"standard:event ",
            iconPosition:"left"
        }
    },
    {
        label:"Name",
        fieldsName:"EVNT_ORG",
        cellAttributes:{
            iconName:"standard:user",
            iconPosition:"left"
        }
    },
    {label:"Location",
    fieldName:"Location__c",
    cellAttributes:{
        iconName:"utility:user",
        iconPosition:"left"
    }},
    {label:"Details",fieldName:"Event_Detail__c",type:"text",wrapText:true}
];

export default class EventList extends LightningElement {
    columnsList = columns;
    error;
    @track result;

    connectedCallback(){
        this.upcomingEventsFromApex();

    }

    upcomingEventsFromApex(){
        upcomingEvents()
        .then((data) => {
            window.console.log("event list",data);
            data.forEach(event => {
                event.URL = "https://"+location.host+'/'+event.Id;
                event.EVNT_ORG = event.Event_Organizer__r.Name;
                if(event.Location__c){
                    event.Location = event.Location__r.Name;
  
                }else{
                    event.Location = "This is a virtual event";
                }
                
            });
          this.result = data;
          this.recordsToDisplay  = data;
          this.error = undefined;
            
        }).catch((err) => {
            window.console.log(err);
            this.error = JSON.stringify(error);
            this.result = undefined;
            
        });
    }
    
}