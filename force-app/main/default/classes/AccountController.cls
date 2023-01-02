public with sharing class AccountController {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountRecords(){
        List<Account> accountList;
       if(Schema.sObjectType.Account.isAccessible()){
          accountList=[select id,name,type,rating from Account limit 2];
       }
       

        return accountList;
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> filterRecords(String type){
     
    List<Account> filterAccountList=[select id,name,type,rating
     from Account where type=:type limit 4];

     return filterAccountList;
        
    }
}
