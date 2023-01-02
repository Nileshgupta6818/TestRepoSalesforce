import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super();
        console.log('inside  child the constructor');
    }

    connectedCallback(){
        console.log('inside child the connectedCallback');
        throw new Error('failed to load child component');
    }

    renderedCallback(){
       console.log('inside child renderedCallback');
    }

    disconnectedCallback(){
        alert('child component unmounted !!')
    }

}