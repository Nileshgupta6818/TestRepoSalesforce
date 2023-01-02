import { LightningElement,wire } from 'lwc';

import SampleMC from '@salesforce/messageChannel/SampleMessageChannel__c'

import { MessageContext,publish } from 'lightning/messageService';

export default class LmsComponentA extends LightningElement {
    inputValue;

    @wire(MessageContext)
    context;

    handleValueChange(event){
         this.inputValue=event.target.value;
    }

    

    handlePublish(){
        const message={
            lmsData:{
                value:this.inputValue
            }
        }
       publish(this.context,SampleMC,message);
    }
}