import { LightningElement } from 'lwc';

export default class DynamicCss extends LightningElement {
    percentage=4;
    changeHandler(event){
      this.percentage=event.target.value; 
      console.log(this.percentage); 
    }

    get changeParcentage(){
        return `width:${this.percentage}%`;
    }
}