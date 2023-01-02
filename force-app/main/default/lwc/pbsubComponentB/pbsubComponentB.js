import { LightningElement } from 'lwc';
import pubSub from 'c/publishSub'
export default class PbsubComponentB extends LightningElement {
    message;

    connectedCallback(){
        this.handleSubscribe();
    }
   
    handleSubscribe(){
        console.debug('handleSubscribe');
        pubSub.subscribe('componentA', (message)=>{
            this.message=message;
        });
    }
}