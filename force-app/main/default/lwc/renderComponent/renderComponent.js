import { LightningElement } from 'lwc';
import signInTemplate from './signinTemplate.html';
import signUpTemplate from './signupTemplate.html';
import renderComponent from './renderComponent.html';

export default class RenderComponent extends LightningElement {
    
     selectedTemplate='';
    // render is abtract method present in lightning element 
    render(){
        console.log('inside render');
        return this.selectedTemplate==='Sign-In'?signInTemplate:
        this.selectedTemplate==='Sign-Up'?signUpTemplate:
        renderComponent;

    }


    buttonClick(event){
        this.selectedTemplate=event.target.label;
    }

    backHome(){
       this.selectedTemplate='';
    }

    submitData(event){
        alert(`${event.target.label} successfully`)
    }
}