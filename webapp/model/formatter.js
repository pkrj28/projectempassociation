sap.ui.define([
], 
function () {
    "use strict";
    return {
        FormatStatus: function(Status){
        if(Status==="P"){
            return "Pass(P)";
        }
        else if(Status==="N"){
            return "No(N)";
        }
         else { return Status }
        },
       FormatDes: function(Description){
        if(Description==="Vacation"){
            return "Error";
        }
        },

        formatDate: function (BeginDate) {
            if (!BeginDate) {
                return "";
            }
            var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                pattern: "dd-MM-yyyy"
            }, sap.ui.getCore().getConfiguration().getLocale());

            return oDateFormat.format(BeginDate);
},
        formatDate1: function (EndDate) {
            if (!EndDate) {
                return "";
            }
            var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                pattern: "dd-MM-yyyy"
            }, sap.ui.getCore().getConfiguration().getLocale());

            return oDateFormat.format(EndDate);
}
    
    };
});