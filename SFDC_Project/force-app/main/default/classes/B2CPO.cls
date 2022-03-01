public class B2CPO implements PurchaseOrder {
    public Double Discount() {
        return 0.05;
        
    }
    public void Announce() {
        System.debug('This is the B2CPO Class');
        
    }


}