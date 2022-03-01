trigger AmountTrigger on Opportunity (after update,after insert) 
{
Set<id> accid= new Set<id>();
List<Account> ac1= new List<Account>();


for(Opportunity op3:Trigger.new)
{
accid.add(op3.AccountId);
}

List<Account> ac2=[select id,Amount__c,(select id,Amount from Opportunities) from Account where ID =:accid];

for(account opn:ac2)
{
Double TotAmt=0.0;
 for(Opportunity op4:opn.opportunities)
 {
 
TotAmt+=op4.Amount;

}
opn.Amount__c=TotAmt;
ac1.add(opn);

}
Update ac1;


}