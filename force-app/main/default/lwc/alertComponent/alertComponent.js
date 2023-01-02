import { LightningElement, api } from 'lwc';

export default class AlertComponent extends LightningElement {
 
    @api name;
    @api message;
    @api isVisible
    


}