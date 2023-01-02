import { LightningElement,api } from 'lwc';

export default class LwcAuraComponent extends LightningElement {

    @api title;

    handleEvent(){
        var event=new CustomEvent('passMessage',{
            detail:{
                "msg":'messaage from Lwc component'
            }
        });
        this.dispatchEvent(event);
    }
}