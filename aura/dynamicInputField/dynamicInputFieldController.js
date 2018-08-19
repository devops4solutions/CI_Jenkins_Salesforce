({
	doInit : function(component, event, helper) {
		var record = component.get('v.record');
        var fieldDetails = component.get('v.fieldDetails');
        var columnField = fieldDetails.key;
        var type = fieldDetails.value;
        var recordColumnValue = record[columnField];
        console.log('record--'+JSON.stringify(record));
        console.log('type--'+type+'--columnField--'+columnField+'--recordColumnValue--'+recordColumnValue);
        console.log('fieldDetails--', JSON.stringify(fieldDetails));
        $A.createComponent(
            "lightning:input",
            {
                "type": type,
                "value": recordColumnValue
            },
            function(newInputField, status, errorMessage){
                //Add the new button to the body array
                if (status === "SUCCESS") {
                    var body = component.get("v.body");
                    body.push(newInputField);
                    component.set("v.body", body);
                }
                else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                    // Show offline error
                }
                else if (status === "ERROR") {
                    console.log("Error: " + errorMessage);
                    // Show error message
                }
            }
        );
	}
})