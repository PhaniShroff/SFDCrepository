public class ContactListController {
    @AuraEnabled
    public static List<Contact> getContactList(String accountId){
        List<Contact> contactList = new List<Contact>([SELECT Id, FirstName, LastName, Email, Phone FROM Contact 
                                                       WHERE Email != NULL AND AccountId =:accountId ]);
            return contactList;
    }
    
    @AuraEnabled
    public static Contact createContact(Contact con, Id AccountId){
        con.AccountId = AccountId;
        insert con;
        return con;
    }

}