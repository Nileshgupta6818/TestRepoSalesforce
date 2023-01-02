import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
export default class HomeNavigation extends NavigationMixin(LightningElement) {


    handleNavigateToHome(){

        this[NavigationMixin.Navigate]({
            type :'standard__namedPage',
            attributes:{
                pageName:'home'
            }
        })
    }

    handleNavigateTochatter(){
        this[NavigationMixin.Navigate]({
            type :'standard__namedPage',
            attributes:{
                pageName:'chatter'
            }
        })
    }

    handleNavigateToNewRecord(){
        this[NavigationMixin.Navigate]({
            type :'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            }
        })
    }

    handleNavigateToNewRecordwithDefault(){
       const defaultValue=encodeDefaultFieldValues({
          FirstName:'Heera',
          LastName:'Thakur'
       })
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'

            },
            state:{
                defaultFieldValues:defaultValue
            }

        })

       
    }

    handleNavigateToListView(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'list'

            },
            state:{
                filterName:'Recent'
            }

        })
    }

    handleNavigateToFile(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                actionName:'home'

            },
        })
    }
}