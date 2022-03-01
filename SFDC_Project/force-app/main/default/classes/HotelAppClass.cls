public class HotelAppClass {
     @AuraEnabled(cacheable=true)
    public static List<Hotel_City_Name__c> getAccountList() {
        return [SELECT Id, Name FROM Hotel_City_Name__c];
    }
    @AuraEnabled
    public static List<Hotel_Master__c> getContacts(String hotelCity){
        
        return [Select Id,Hotel_Name__c from Hotel_Master__c where Hotel_City__c =: hotelCity];
         
    }  
}