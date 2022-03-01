trigger OpportunityTrigger on Opportunity (before insert) {
    if(Trigger.isInsert == true && Trigger.isBefore == true){
        OpportunityClass.DivideOpportunity(Trigger.new);
    }

}