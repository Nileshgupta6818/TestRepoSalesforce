import { LightningElement, wire } from 'lwc';

import { getObjectInfo,getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';

import Account_Object from '@salesforce/schema/Account';

export default class GetPickListValueByRecordType extends LightningElement {

   ratingValue='';
   ratingOptions=[];

   typeValue='';
   typeOptions=[];

   @wire(getObjectInfo,{objectApiName:Account_Object})
   objectInfo;

    
   @wire(getPicklistValuesByRecordType,{objectApiName:Account_Object ,recordTypeId:'$objectInfo.data.defaultRecordTypeId'})
   getPickListValues({data,error}){
      if(data){
        console.log('pick values  ',data)
        // first destructure then assign it to variable 

        this.ratingOptions=[...this.setPicklistValues(data.picklistFieldValues.Rating)];
        this.typeOptions=[...this.setPicklistValues(data.picklistFieldValues.Type)];
      }
      if(error){
         console.log(error);
      }
    }

    setPicklistValues(data){
       
        return data.values.map(item=>({
           label:item.label,
           value:item.value
       })
    )
    }


    handleChange(event){
      console.log(event.target.name,'==>',event.target.value)
      const {name,value}=event.target;
      console.log(name,'==>',value)
      if(name==="rating"){
        this.ratingValue=value;
        console.log('inside rating')
      }
      if(name==="type"){
        this.typeValue=value;
        console.log('insdie type')
      }

    }
}