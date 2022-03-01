public class accountContactClass {
    public static List<Contact> ContactList(String accountId){
        return [Select Id,FirstName,LastName From Contact Where accountId =: accountId];
        
    }

}