import { LightningElement, wire } from 'lwc';

import {getObjectInfo,getObjectInfos} from 'lightning/uiObjectInfoApi'

import Account_object from '@salesforce/schema/Account'

import Opportunity_object from '@salesforce/schema/Opportunity'


export default class GetObjectRecordDemo extends LightningElement {

    defaultRecordId;
    objectInfos

    @wire(getObjectInfo,{objectApiName:Account_object})
    handleObject({data,error}){
        if(data){
          console.log('data ',data);
          console.log('defaultRecordTypeId  ',data.defaultRecordTypeId);
          console.log('apiName  ',data.apiName);
          this.defaultRecordId=data.defaultRecordTypeId;
        }
        if(error){
             console.log(error)
        }
    }

    ObjectApiNames=[Account_object,Opportunity_object];

    @wire(getObjectInfos,{objectApiNames:'$ObjectApiNames'})
    handleMultipleObject({data,error}){
        if(data){
            console.log('object infos ',data)
            
            this.objectInfos=data
            console.log('assign ',this.objectInfos.results[0].result.apiName)
        }
        else{
            console.log(error)
        }
    }
    

}