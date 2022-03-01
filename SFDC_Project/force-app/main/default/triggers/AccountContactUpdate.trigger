trigger AccountContactUpdate on contact(after update){

// set to capture acc ids
set<ID> VarSetAccId = new set<ID>();

//only fous on those records whre account is mapped
for(contact VarC:trigger.new){
if(VarC.Phone != Trigger.OldMap.get(VarC.AccountId).Phone && VarC.Type__c == 'Platinum'){
VarSetAccId.add(VarC.accountId);
}
}
if(VarSetAccId.size()>0){

list<Account> VarListofAccounttoupdate = new list<account>();
for(account varA: [select id,Contact_Status__c from account where id in :VarSetAccId]){
varA.Contact_Status__c = 'contact modified';
 
VarListofAccounttoupdate.add(varA);
}
}
}