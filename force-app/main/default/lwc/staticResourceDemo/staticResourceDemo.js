import { LightningElement } from 'lwc';
import logo from '@salesforce/resourceUrl/User_Image'

import MOMENT from '@salesforce/resourceUrl/Moment'

import ANIMATE from '@salesforce/resourceUrl/Animate'

import {loadScript, loadStyle} from 'lightning/platformResourceLoader'

export default class StaticResourceDemo extends LightningElement {
 
    UserProfile=logo;
    isLoaded=false;
    currentData;

    connectedCallback(){
        console.log('connected')
        if(this.isLoaded)
        return;
        else{
            Promise.all([
                loadScript(this,MOMENT+'/moment/moment.min.js')
                //loadStyle(this,ANIMATE+'/animate/animate.min.css')
            ])
            .then(()=>{
                  console.log('then')
                 this.displayData();
            })
            .catch(error=>{
                console.log('error ',error);

            })
            this.isLoaded=true;
        }
        
    }

    displayData(){
        this.currentData=moment().format('LLLL');
    }
}