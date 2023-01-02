import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {

    constructor(){
        super();
        console.log('inside  parent the constructor');
    }

    connectedCallback(){
        console.log('inside parent the connectedCallback');
    }

    renderedCallback(){
       console.log('inside parent renderedCallback');
    }

    /*  value change of rendered callback check
    name;
    changeValue(event){
       this.name=event.target.value;
    }
    */

    isVisible=false;
    UnmountChild(){
        this.isVisible=!this.isVisible;
    }

    get buttonValue(){
        return this.isVisible==true?'remove child':'show child';
    }

    // when descendant component throws the error 
    errorCallback(error, stack){
       console.log(error.message);
       console.log(stack);
    }
}