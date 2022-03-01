public class BeerSearchAuraService {
    @AuraEnabled
    public static List<sObject> searchBeer(String searchParam){
        String likeParam = '%'+searchParam+'%';
        String Query = '';
        if(searchParam != null){
            Query = 'Select Id, Name, Alcohol__c,brewery_id__c, brewery_Name__c, Id__c, Price__c,Remaining_Quantity__c, Tags__c, Total_Quantity__c  From Beer__c Where Name Like : likeParam LIMIT 10';
            
        }else{
            Query = 'Select Id, Name, Alcohol__c,brewery_id__c, brewery_Name__c, Id__c, Price__c,Remaining_Quantity__c, Tags__c, Total_Quantity__c  From Beer__c LIMIT 10';
                
                }
        
        List<sObject> sObjectList = Database.query(Query);
        return sObjectList;
        
    }
    
}