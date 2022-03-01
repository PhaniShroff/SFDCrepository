import { api, LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {

    // to make these properties available for public usage in other components
    @api messagefromparent;
    @api projectcode;
}