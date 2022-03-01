global class ContactBatch implements Database.Batchable<sObject>, Database.Stateful{
    global Integer total_size = 0;
    global Integer fail_size = 0;
    global Integer success_size = 0;
    
    global Database.QueryLocator start(Database.BatchableContext bc){
        string query = 'Select id,Name,Fax,Email,MobilePhone,Description,Account.Name,Account.Rating,Account.Phone,Account.Fax,Account.Industry from Contact';
        return Database.getQueryLocator(query);
    }
    global void execute(Database.BatchableContext bc,List<Contact> contactList){
        Integer size = contactList.size();
        total_size = total_size + size;
        
        for(Integer i=0;i<size;i++){
            Contact con = contactList.get(i);
            if(con.Fax == null || con.Fax ==''){
                con.Fax = con.Account.Fax;
            }
            if(con.MobilePhone == null || con.MobilePhone == ''){
                con.MobilePhone = con.Account.Phone;
            }
            con.Email = 'spchandra95@gmail.com';
            con.Description = con.Account.Name+' '+con.Account.Rating+' '+con.Account.Industry+' '+con.Email;
            
        }
        update contactList;
        Database.SaveResult[] result = Database.update(contactList,false);
        Integer size_result = result.size();
        for(Integer i=0; i<size_result; i++){
            Database.SaveResult sr = result.get(i);
            if(sr.isSuccess()){
                success_size += 1;
            }else{
                fail_size += 1;
            }
     }
    }
    
    global void finish(Database.BatchableContext bc){
        Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
        email.setSubject('Status of batch class:contactBatch');
        email.setSenderDisplayName('SFDC panther demo');
        email.setHtmlBody('Dear user,<br/> batch processed'+
                         '<br/> Total records : '+total_size+
                         '<br/> success count : '+success_size+
                         '<br/> fail count : '+fail_size);
        email.setBccAddresses(new List<String> {'spchandra95@gmail.com'});
        
        Messaging.SingleEmailMessage[] emailList = new List<Messaging.SingleEmailMessage>();
        emailList.add(email);
        Messaging.sendEmail(emailList, false);
    }

}