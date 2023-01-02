import { LightningElement } from 'lwc';

export default class C2pParent extends LightningElement {

  
    isVisible=false;
    msg;
    handleChild(){
        this.isVisible=true;
    }
    handleChildEvent(event){
        this.msg=event.detail.msg
        this.isVisible=false;
    }
}