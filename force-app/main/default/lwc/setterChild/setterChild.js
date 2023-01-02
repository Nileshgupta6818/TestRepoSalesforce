import { LightningElement, api } from 'lwc';

export default class SetterChild extends LightningElement {
    
   userDetails;
 
   
   get detailone(){
    console.log('get ',JSON.stringify(this.userDetails));
    return this.userDetails;
   }

   // while passing the data from parent  if we are using getter and setter 
   // pass setter name on attribute while passing the data +
   @api
   set detailone(data){
     let newAge=data.age*2;
     console.log('inside ',newAge);
     this.userDetails={...data,age:newAge,location:'Indore'}
   }

}