trigger caseTrigger on Case (before insert) {
    if(Trigger.isInsert == true && Trigger.isBefore == true){
        caseClass.caseMethod(Trigger.New);
        
    }
    

}