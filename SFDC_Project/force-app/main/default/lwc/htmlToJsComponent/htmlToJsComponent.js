import { LightningElement } from 'lwc';

export default class HtmlToJsComponent extends LightningElement {
    letterHandler(Event){
        var VarValueWeGotFromHTML = Event.target.value;
        alert('You have entered a letter='+ VarValueWeGotFromHTML);

    } 
}