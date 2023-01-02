import { LightningElement } from 'lwc';

export default class HelloQuerySelector extends LightningElement {

   names=['smith','lee','raju'];
   

   clickDemo(){
      var ele= this.template.querySelector('h1');
      console.log(ele.innerHTML);

      var allele=this.template.querySelectorAll('.forloop');
      Array.from(allele).forEach(element=>{
          console.log(element.innerHTML);
          element.setAttribute("title",element.innerHTML);
      });
     
      // add child element 
      // lwc:dom='manual'  ----  its optional to add in element as attribute 
      // but use to improve the performance 

      let a=this.template.querySelector('.child');
         a.innerHTML="<p>this is child element</p>";



   }

}