import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

import Account_Object from '@salesforce/schema/Account'
import Name_Field from '@salesforce/schema/Account.Name'
import AnnualRevenue_Field from '@salesforce/schema/Account.AnnualRevenue'
import Type_Field from '@salesforce/schema/Account.Type'
import Account_Number_Field from '@salesforce/schema/Account.AccountNumber'

export default class RecordFormDemo extends LightningElement {
  
    fields=[Name_Field,AnnualRevenue_Field,Type_Field,Account_Number_Field];
    objectApiName=Account_Object;

    handleSuccess(event){
        let accountId=event.detail.id;

        let tostEvent=new ShowToastEvent({
            title:'Account record Created',
            message:''+accountId,    
        });
        this.dispatchEvent(tostEvent);
     }

}