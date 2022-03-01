trigger OpportunityStageTrigger on Opportunity (before update) {
    for(Opportunity opp : trigger.new) {
        if(opp.StageName == 'Closed Lost' && trigger.oldMap.get(opp.Id).StageName == 'Closed Won') 
            opp.Description = '99999';
    }

}