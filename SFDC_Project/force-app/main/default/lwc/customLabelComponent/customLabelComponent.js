import { LightningElement } from 'lwc';

import WelcomeLabel from '@salesforce/label/c.WelcomeLabel';
import HomePageLabel from '@salesforce/label/c.HomePageLabel';
import NewClientLabel from '@salesforce/label/c.NewClientLabel';


export default class CustomLabelComponent extends LightningElement {

    labelList = {WelcomeLabel,HomePageLabel,NewClientLabel};

    newClientHandler(){

        alert('entry done!');
    }
}