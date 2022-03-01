public class caseClass {
    public static void caseMethod(List<Case> VarCaseList){
        for(Case varP:VarCaseList){
        if(varP.origin == 'email'){
            varP.status = 'new';
            varP.priority = 'medium';
        }
    }
        
    }
    

}