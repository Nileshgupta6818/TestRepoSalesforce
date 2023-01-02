import { LightningElement } from 'lwc';

export default class TemplateLooping extends LightningElement {

    carList=['suzuki','BMW','Hyndai','TaTa','Tesla','Ferrari'];

    ceoList=[
        { id:1,
         company:'Google',
         name:'Sundar Pichai'
    },
    {
        id:2,
        company:'Apple Inc.',
        name:'Tim Cook'
    },
    {
        id:3,
        company:'facebook',
        name:'mark zukurberg'
    },
    { id:4,
      company :'Amazon',
      name:'Jeff bezos'
    }
  ];
}