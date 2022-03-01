trigger LicTrigger on LIC_HFL_Employee__c (before insert,before update) {
    if(Trigger.isBefore && Trigger.isInsert || Trigger.isBefore && Trigger.isUpdate  ){
        LicPromotionClass.PromotionMethod(Trigger.New);
        
    }

}