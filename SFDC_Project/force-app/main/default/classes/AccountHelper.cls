public with sharing class AccountHelper {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        List<Account> VarAccList = new List<Account>();
        VarAccList = [SELECT Id,Name,Type,Rating,Phone 
                      FROM Account];
        return VarAccList;
    }

}