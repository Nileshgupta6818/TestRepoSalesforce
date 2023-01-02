import { LightningElement,api } from 'lwc';

export default class RecordObjectId extends LightningElement {

    @api recordId;
    @api objectApiName;
}