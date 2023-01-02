import { LightningElement } from 'lwc';
import hasViewAllData from '@salesforce/userPermission/ViewAllData'

import UserId from '@salesforce/user/Id';
import is_Guest from '@salesforce/user/isGuest';

export default class CheckPermission extends LightningElement {

    UserID=UserId;
    isGuestUser=is_Guest

      get viewAllDataPermisson(){
         return hasViewAllData;
      }
}