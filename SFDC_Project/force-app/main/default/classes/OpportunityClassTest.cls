@isTest
public class OpportunityClassTest {
    
    @isTest
    static void TestFunctionForOpportunity(){
        
        // create record for testing
        Opportunity VarP = new Opportunity();
        VarP.Name = 'Hotel Suraj';
        VarP.Amount = 60000;
        VarP.CloseDate = System.today();
        VarP.StageName =  'Propecting';
        
        //inserting records
        insert VarP;
        
        //create a new box to store the new value
        Opportunity VarP1 = new Opportunity();
        VarP1 = [SELECT Amount FROM Opportunity WHERE Id =: VarP.Id];
        
        // compare values
        system.assertEquals(30000, VarP1.Amount);
        
    }

}