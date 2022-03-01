public class OpportunityClass {
    public static void DivideOpportunity(list<Opportunity> VarOpportunityList){
        
        for(Opportunity VarOpp:VarOpportunityList){
            if(VarOpp.Amount >= 50000){
                VarOpp.Amount = VarOpp.Amount/2;
                Opportunity Oppor = new Opportunity();
                Oppor.CloseDate = System.today();
                Oppor.Name = VarOpp.Name;
                Oppor.StageName = 'Prospecting';
                Oppor.Amount = VarOpp.Amount;
                Oppor.AccountId = VarOpp.AccountId;
                insert Oppor;
                
            }
        }
    }

}