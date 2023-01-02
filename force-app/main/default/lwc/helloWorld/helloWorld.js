import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName='Nilesh Gupta'
    title='lwc'
    alph=['a','b'];

    changeProperty(event){
      this.title=event.target.value
    }

    address={
        city:'Bangalore',
        Pincode:'560057',
        country:'India'
    }
   @track
   person={
       name:'Ram',
       age:'22'
   }

    changeCity(event){
    //  this.address.city=event.target.city;
    // it will not change the value 
    // use @track decorator to change the value 
    // or create a cpy of object and then assign 
    // for creating a cpy use destructure property 

    this.address={...this.address,city:event.target.value}
    }

    changeAge(event){
      this.person.age=event.target.value;
    }

    /* getter methods */
    Name=['john','lee','AB'];
    num1=20;
    num2=30;
    // firstName=this.name[0]; we can do this but every time we need to 
    // update the property firstName
    
    // getter automatically update when there is change in value 

    get firstName(){
        return this.Name[0];
    }

   get sum(){
      return this.num1+this.num2;
   }

}