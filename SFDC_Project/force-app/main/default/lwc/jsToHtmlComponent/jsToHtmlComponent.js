import { LightningElement } from 'lwc';

export default class JsToHtmlComponent extends LightningElement {

    fullname = 'Phani Chandra';

    changeNameHandler(event)
    {
        this.fullname = 'Harry Potter';
    }
}