import { LightningElement } from 'lwc';
import CustomOne from '@salesforce/label/c.CustomOne';

import CustomTwo from '@salesforce/label/c.CustomTwo';

import {ShowToastEvent} from 'lightning/platformShowToastEvent'


export default class CustomLabelDemo extends LightningElement {

     customLabels={CustomOne,CustomTwo}



     handleSucess(){
        this.showToast('Success','{0} Account Created {1}','Success');
     }

     handleWarning(){
        this.showToast('Warning!!','check governer limit','Warning');
     }
  
     handleError(){
        this.showToast('Error!!','exceed CPU Time limit','Error');
     }
     
     handleInfo(){
        this.showToast('Info','click the button','Info');
     }


     showToast(title,message,variant){
        const event= new ShowToastEvent({
            title,
            message,
            variant,
            messageData:[
              'salesforce',{
                url:'http://www.salesforce.com',
                label:'click Here'
              } 
            ]
        });
        this.dispatchEvent(event);
     }
}