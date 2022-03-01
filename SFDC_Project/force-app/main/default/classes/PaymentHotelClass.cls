public with sharing class PaymentHotelClass {
    
    @AuraEnabled
    public static Payment_master__c submitPaymentRecord(integer card_number,integer Expiry_month,integer Expiry_year,integer CVV){
        Payment_master__c paymentMasterObj = new Payment_master__c();
        paymentMasterObj.card_number__c = card_number;
        paymentMasterObj.Expiry_month__c = Expiry_month;
        paymentMasterObj.Expiry_year__c = Expiry_year;
        paymentMasterObj.CVV__c = CVV;
        
        insert paymentMasterObj;
        return paymentMasterObj;
            
    }

}