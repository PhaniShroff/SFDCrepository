public with sharing class HotelProjectClass {
    
    @AuraEnabled
    public static Guest_Master__c submitGuestRecord(string Guest_First_Name,string Guest_Last_Name,string Guest_Phone,string Guest_Email){
        Guest_Master__c guestMasterObj = new Guest_Master__c();
        guestMasterObj.Guest_First_Name__c = Guest_First_Name;
        guestMasterObj.Guest_Last_Name__c = Guest_Last_Name;
        guestMasterObj.Guest_Phone__c = Guest_Phone;
        guestMasterObj.Guest_Email__c = Guest_Email;
        
        insert guestMasterObj;
        return guestMasterObj;
            
    }

}