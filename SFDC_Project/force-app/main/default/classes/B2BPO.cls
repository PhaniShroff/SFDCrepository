public class B2BPO implements PurchaseOrder {
    public Double Discount() {
        return 0.1;
        
    }
    public void Announce() {
        System.debug('This is the B2BPO Class');
        
    }


}