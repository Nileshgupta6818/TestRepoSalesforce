import { LightningElement, wire } from 'lwc';

import SampleMC from '@salesforce/messageChannel/SampleMessageChannel__c'

import { APPLICATION_SCOPE, MessageContext,subscribe,unsubscribe } from 'lightning/messageService';

export default class LmsComponentX extends LightningElement {

    receivedMessage;
    unsubscribeLMS

    @wire(MessageContext)
    context;

    connectedCallback(){
        this.handleSubscribe();
    }


    handleSubscribe(){
    // pass four param 
    // context, channnel import name, message and scope

    this.unsubscribeLMS = subscribe(this.context,SampleMC,(message)=>{this.handleMessage(message)},{scope:APPLICATION_SCOPE});
    }
 
    handleMessage(message){
       this.receivedMessage=message.lmsData.value?message.lmsData.value:'No LMS Data Passed';
    }

    get setTextCss(){
        return this.receivedMessage==='No LMS Data Passed'?'slds-text-color_error':'slds-text-color_success';
    }


    // unsubscribe LMS 
    
    handleUnsubscribe(){
        unsubscribe(this.unsubscribeLMS);
        this.unsubscribeLMS=null;
    }
}