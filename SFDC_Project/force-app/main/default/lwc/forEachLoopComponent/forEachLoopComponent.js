import { LightningElement } from 'lwc';

export default class ForEachLoopComponent extends LightningElement {

    CEOList;

    showListHandler(){
        this.CEOList = [
            {
                id:1,
                name:'MarkBenioff',
                title:'CEO of salesforce',
            },
            {
                id:2,
                name:"Sundar Pichai",
                title:"CEO of Google",
            }
        ];
    }
}