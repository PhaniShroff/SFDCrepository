public with sharing class eventDetailsService {
    @AuraEnabled
    public static List<Event__c> upcomingEvents(){
        List<Event__c> eventList = [
            SELECT Id, Name, Name__c, Event_Detail__c, Location__c, Location__r.Name
            FROM Event__c
            WHERE Start_DateTime__c >= Today AND Live__c = true
            WITH SECURITY_ENFORCED 
        ];
        return eventList;
        
    }
    
}