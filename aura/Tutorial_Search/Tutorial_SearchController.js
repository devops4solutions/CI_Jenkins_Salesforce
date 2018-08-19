({
    doInit: function(component, event, helper) {
        var fieldMap = [];
        fieldMap.push({value:'Date', key:'CreatedDate'});
        component.set('v.fieldMap', fieldMap);
        //fieldMap.set('CreatedDate', '');
    },
    search : function(component, event, helper) {
         var fieldMap = [];
        fieldMap.push({value:'datetime', key:'CreatedDate'});
        component.set('v.fieldMap', fieldMap);
        var searchString = component.get('v.searchString');
        
        var action = component.get('c.searchRecords');
        action.setParams({'searchString': searchString});
        action.setCallback(this, function(response){
            var state = response.getState();
            console.log('state--',state);
            if(state == 'SUCCESS'){
                var result = response.getReturnValue();
                console.log('result--',result);
                component.set('v.accountList', result[0]);
                component.set('v.contactList', result[1]);
            }
            else{
                alert('Error occurred while fecthing the records.')
            }
        });
        $A.enqueueAction(action);
    },
    getSearchLength: function(component, event, helper) {
        //alert('hiii'+ component.get('v.searchString').length);
        if(component.get('v.searchString').length > 2){
            component.find('searchButton').set('v.disabled', false);
        }
        else{
            component.find('searchButton').set('v.disabled', true);
            
        }
    }
    
})