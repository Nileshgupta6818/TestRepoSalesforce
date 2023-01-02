public with sharing class Imparative {
    @AuraEnabled
    public static List<Contact> getContactRecords(){
        List<Contact> contactList=[select id ,name from Contact limit 3];

        return contactList;
    }
}
