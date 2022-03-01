public with sharing class AccountHelper {
    // comment added to repository
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        List<Account> VarAccList = new List<Account>();
        VarAccList = [SELECT Id,Name,Type,Rating,Phone 
                      FROM Account];
        return VarAccList;
    }

}