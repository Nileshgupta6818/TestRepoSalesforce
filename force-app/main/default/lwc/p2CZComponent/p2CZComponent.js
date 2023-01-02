import { LightningElement } from 'lwc';

export default class P2CZComponent extends LightningElement {

    carousels=[
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header : "First Card.",
            description : "1 card description."   
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "Second Card.",
            description : "2 card description ."   
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header : "Third Card.",
            description : "3 card description."   
        }
    ];

    progressNumber=10;

    changeValue(event){
       this.progressNumber=event.target.value;
    }

    handleClick(){
        this.template.querySelector('c-c2p-slider').resetSlider();
        
    }
}