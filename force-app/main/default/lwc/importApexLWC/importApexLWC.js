import { LightningElement, wire } from 'lwc';
import getAccountRecords from '@salesforce/apex/AccountController.getAccountRecords';
import filterRecords from '@salesforce/apex/AccountController.filterRecords';
export default class ImportApexLWC extends LightningElement {
    selectedType='';
    accountList;
    @wire(getAccountRecords)
    accounts


    @wire(getAccountRecords)
    handleAccount({data,error}){
        if(data){
            console.log('try ',data );
         this.accountList=data.map(item=>{
            let newType=item.Type==='Customer - Channel'?'Channel':
            item.Type==='Customer - Direct'?'Direct':'----------'

            return {...item,newType}
         });
        }
        if(error){
            console.log('error apex ',error)
        }
    }

  
    @wire(filterRecords,{type:'$selectedType'})
    filterAccountResult;


    get picklistOptions(){
        return [
            {label:'Customer - Channel', value:'Customer - Channel'},
            {label:'Customer - Direct', value:'Customer - Direct'}
        ]
    }

    handleChange(event){
        this.selectedType=event.target.value
    }
    

}