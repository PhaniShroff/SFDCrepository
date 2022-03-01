public class LicPromotionClass {
    public static void PromotionMethod(List<LIC_HFL_Employee__c> employeeList){
        Set<Id> employeeIds = new Set<Id>();
        for(LIC_HFL_Employee__c VarX : employeeList ){
            if(VarX.Position__c == 'ACM' && VarX.Experience__c >= 5 && VarX.Disciplinary_action__c == 'No'){
                VarX.Promotion_Status__c = 'Can be Promoted as CM';
            }
            else{
                VarX.Promotion_Status__c = 'Cannot be promoted';
                
            }
            if(VarX.Position__c == 'Manager' && VarX.Experience__c >= 5 && VarX.Disciplinary_action__c == 'No'){
                VarX.Promotion_Status__c = 'Can be Promoted as ACM';
            }
            if(VarX.Position__c == 'DM' && VarX.Experience__c >= 5 && VarX.MBA__c == True && VarX.Disciplinary_action__c == 'No' ){
                VarX.Promotion_Status__c = 'Can be Promoted as Manager';
            }
            else if(VarX.Position__c == 'DM' && VarX.Experience__c >= 5 && VarX.MBA__c == False ){
                VarX.Promotion_Status__c = 'Should have MBA';
                
            }
            
            
        }
    }

}