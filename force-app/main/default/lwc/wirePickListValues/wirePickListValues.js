import { LightningElement, wire } from 'lwc';
import { getObjectInfo,getPicklistValues } from 'lightning/uiObjectInfoApi';

import Account_Object from '@salesforce/schema/Account'

import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';


export default class WirePickListValues extends LightningElement {

     // selected value 

     selectValue='';
     options=[];

    @wire(getObjectInfo,{objectApiName:Account_Object})
    objectResult;

    @wire(getPicklistValues, { recordTypeId: '$objectResult.data.defaultRecordTypeId', fieldApiName: INDUSTRY_FIELD })
    handlePickListValue({data,error}){
        console.log('inside handle');
     if(data){
      console.log('picklist -----',data);
    this.options=[...this.createPicklist(data)];

     }
     if(error){
        console.log('error ',error)
     }

    }

    createPicklist(data){
      return data.values.map(item=>
        ({
              label:item.label,
              value:item.value
        })
    )
    }

    handleChange(event) {
        this.selectValue = event.detail.value;
    }








    /*@wire(getObjectInfo,{objectApiName:Account_Object})
    objectResult;
    
    //$objectResult.data.defaultRecordTypeId

    @wire(getPicklistValues,{recordId:'0125g000000l8lFAAQ',fieldApiName:'Account.Industry'})
    handlePickListValue({data,error}){
        console.log('inside handle');
     if(data){
      console.log('picklist -----',data);
     }
     if(error){
        console.log('error ',error)
     }
    }*/

}