import { LightningElement } from 'lwc';
import getContactRecords from '@salesforce/apex/Imparative.getContactRecords'
export default class ApexImparativeDemo extends LightningElement {

    handleContactRecords(){
        getContactRecords().then(result=>{
              console.log('result ',result);
        }).catch(error=>{
             console.log('error ' ,error);
        })
    }


}