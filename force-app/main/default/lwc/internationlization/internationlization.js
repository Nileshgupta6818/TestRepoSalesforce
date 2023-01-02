import { LightningElement } from 'lwc';

import Locale from '@salesforce/i18n/locale';

import currency from '@salesforce/i18n/currency';

export default class Internationlization extends LightningElement {
  
    number =9654.87;
    
    // ar-EG for arabic pass instead of locale
    formattedNumber=new Intl.NumberFormat(Locale,{
      style:'currency',
      currency:currency,
      currenyDisplay:'symbol'       
    }).format(this.number);




}