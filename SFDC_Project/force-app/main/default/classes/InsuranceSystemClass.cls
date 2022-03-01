public with sharing class InsuranceSystemClass {
    public string Name{set;get;}
    public Date DOB{set;get;}
    public string Gender{set;get;}
    public string Phone{set;get;}
    public string Email{set;get;}
    public Date Registration_date{set;get;}
    public string Address{set;get;}
    
    public void SaveHandler(){
        Agent__c Rec1 = new Agent__c();
        Rec1.Name__c = Name;
        Rec1.DOB__c = DOB;
        Rec1.Gender__c = Gender;
        Rec1.Phone__c = Phone;
        Rec1.Email__c = Email;
        Rec1.Registration_date__c = Registration_date;
        Rec1.Address__c = Address;
        
        insert Rec1;
      }
    public PageReference SaveAndNew(){
   SaveHandler();
   String str = ApexPages.currentPage().getUrl().subStringAfter('/').substringBefore('?');
   return new PageReference('/apex/' + str).setRedirect(true);
}         
   
    

}