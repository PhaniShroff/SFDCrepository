import { LightningElement,api } from 'lwc';

const columns = [
    { label: 'Field Name', fieldName: 'name' },
    { label: 'Decription', fieldName: 'Decription', type: 'text' },
    { label: 'Datatype', fieldName: 'Datatype', type: 'text' },
    { label: 'Delete', fieldName: 'Delete', type: 'currency' },
    
];

export default class ObjectDetails extends LightningElement {
    @api recordId;
    columnsList = columns;
}