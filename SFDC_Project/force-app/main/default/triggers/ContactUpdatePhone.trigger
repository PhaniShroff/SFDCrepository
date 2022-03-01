trigger ContactUpdatePhone on Account(after update){

// map to hold only account records where some changes happened in phone
Map<id,Account> mapAccount = new Map<id,Account>();

//contacts list of selective account
List<contact> listContact = new List<contact>();

for(Account acc : trigger.new){
if(acc.phone != trigger.oldMap.get(acc.id).Phone){
mapAccount.put(acc.id,acc);
}
}

if(mapAccount.size()>0){

// fetching all the contacts related to the current account

listContact = [select phone ,accountid from contact where accountid IN : mapAccount.keySet()];

if(listContact.size() > 0){
for(Contact con : listContact){

//updating contacts phone from respective account

con.phone = mapAccount.get(con.AccountId).phone;
}
update listContact;
}
}
}