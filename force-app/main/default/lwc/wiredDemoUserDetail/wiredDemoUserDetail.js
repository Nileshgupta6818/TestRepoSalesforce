import { LightningElement,wire} from 'lwc';

import {getRecord} from 'lightning/uiRecordApi'

import id from '@salesforce/user/Id'

import Name_field from '@salesforce/schema/User.Name'
import Email_field from '@salesforce/schema/User.Email'
const fields=[Name_field,Email_field]
export default class WiredDemoUserDetail extends LightningElement {

   
  
   userId=id;
   userDetail;

   //'0055g000006tfVyAAI'
   // @wire(adapter,adapterconfig)       --config param
   // property or function
     // if right and left hand side key and value are same we can use only key
    // ex fields:Fields we can use as Fields

    // id will fetch asynchro and while (getRecord with wire proprty) 
    // rendring the data it will throw error 
    // to make property reactive use $ before variable 
     // reactive means value change when its available or change


    @wire(getRecord , {recordId:'$userId',fields})
    handleRecord({data,error}){
     console.log(data,error);
       if(data){
         this.userDetail=data.fields
       }
       if(error){
          console.log('error ',error)
       }

    }


    // or we can use wire function
   /* 
     handleRecord(response){
     console.log(response);
     let data=response.data;
     let error=response.error;
     
    } */

    // wire as property
     // hardcoded value : 0055g000006tfVyAAI
    @wire(getRecord , {recordId:'$userId',fields:fields})
    wireAsProperty;
}