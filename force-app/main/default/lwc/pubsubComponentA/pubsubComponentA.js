import { LightningElement } from 'lwc';
import publishSub from 'c/publishSub';
export default class PubsubComponentA extends LightningElement {
    message;

    storeInputValue(event){
        this.message=event.target.value;
    }
   
    handlePublish(){
        console.debug('handle publish ',this.message);
       publishSub.publish('componentA',this.message);
    }
     
}