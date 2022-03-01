public with sharing class eventDetailsController {
   

        @AuraEnabled
        public static List<EventSpeakers__c> getSpeakers(String eventId) {
            List<EventSpeakers__c> speakerList = [
              SELECT
                Id,
                Name,
                Speaker__c,
                Speaker__r.Name,
                Speaker__r.Phone__c,
                Speaker__r.Email__c,
                Speaker__r.Company__c
                FROM EventSpeakers__c
              WHERE Event__c = :eventId
              WITH SECURITY_ENFORCED
            ];
            return speakerList;
          }

          @AuraEnabled
  public static Event__c getLocationDetails(String eventId) {
    Event__c eventRecord = [
      SELECT
        Id,
        Name__c,
        Location__c,
        Location__r.Name,
        Location__r.City__c,
        Location__r.Country__c,
        Location__r.Land_Mark__c,
        Location__r.Postal_Code__c,
        Location__r.State__c,
        Location__r.Street__c
      FROM Event__c
      WHERE Id = :eventId
      WITH SECURITY_ENFORCED
    ];
    return eventRecord;

    }
}