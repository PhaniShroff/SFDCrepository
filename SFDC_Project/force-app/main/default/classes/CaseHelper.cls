public with sharing class CaseHelper {
    
    @AuraEnabled(cacheable=true)
    public static Case insertCase(){
        case caseHotel = new case();
            caseHotel.ContactId = userinfo.getProfileId();
            caseHotel.Origin = 'Phone';
        insert caseHotel; 
        return caseHotel;
       
    }

}