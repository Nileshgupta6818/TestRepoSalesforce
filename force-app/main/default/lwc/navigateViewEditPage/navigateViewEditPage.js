import { LightningElement, wire } from 'lwc';
import {NavigationMixin,CurrentPageReference} from 'lightning/navigation'

// CurrentPageReference : to fetch current page data

export default class NavigateViewEditPage extends NavigationMixin(LightningElement) {

     @wire(CurrentPageReference)
     pageRef;

      // get current fetch reference 

    get pageReference(){
        return this.pageRef?JSON.stringify(this.pageRef,null,4):null
    }



      // navigation

    handleNavigateViewPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0035g000004yg83AAA',
                objectApiName:'contact',
                actionName:'view'
   
            },
        })
    }

    handleNavigateToEditPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0035g000004yg83AAA',
                objectApiName:'contact',
                actionName:'edit'

            },
        }) 
    }

    handleNavigateToTab(){
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName:'Style_Css'
            },
        }) 
    }

    handleNavigateToLWC(){
     // make fake url with the help of btoa 
     // /one/one.app#'+btoa(JSON.stringify(objeectname))

     var defination={
        componentDef:'c:navigatePageLwc',
        attributes:{
            recordId:'454454665'
        }
     }

    this[NavigationMixin.Navigate]({
        type:'standard__webPage',
            attributes:{
            url:'/one/one.app#'+btoa(JSON.stringify(defination))
        },
    }) 
    }

    handleNavigateToAura(){
        
        this[NavigationMixin.Navigate]({
            type:"standard__component",
                attributes:{
                componentName:'c__AuraNavigation'
            },
            state :{
                "c__id":"56555656776"
            }
        }) 
    }

    handleNavigateToVisualforce(){
        this[NavigationMixin.Navigate]({
            type:"standard__webPage",
                attributes:{
                url:'/apex/navigateVf'
            },
        }).then(genrateUrl=>{
          console.log(genrateUrl);
            window.open(genrateUrl);
        }) 
    }



   



}