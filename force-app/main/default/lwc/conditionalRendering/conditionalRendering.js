import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isVisible=false;
    inputValue;
    handleClick(){
       this.isVisible=! this.isVisible
    }

    changeInputValue(event){
      this.inputValue=event.target.value;
    }


    get checkResult(){
         return this.inputValue=='Hello'?true:false;
    }

    // falsy value
    // x=0 ,false,undefined,null, "" are treated as false


}