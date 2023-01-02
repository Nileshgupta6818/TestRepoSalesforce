import { LightningElement } from 'lwc';

export default class C2pModel extends LightningElement {

    closeModel(){
    // without bubble 
    /*
     let customevent=new CustomEvent('close',{
            bubbles :true,
            detail:{
                   msg:'model successfully closed !!!'
            }
        });
        this.dispatchEvent(customevent);

    */



        let customevent=new CustomEvent('close',{
            bubbles :true,
            detail:{
                   msg:'model successfully closed !!!'
            }
        });
        this.dispatchEvent(customevent);


    }

    childUpper(){
        console.log('chid upper element called on bubble');
    }
}