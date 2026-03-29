sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/pjnamespace/project4/model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], 
function (Controller, formatter, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("com.pjnamespace.project4.controller.View1", {

        f: formatter,

        onInit: function () {

           this.getOwnerComponent().getRouter().getRoute("RouteView2").attachPatternMatched(this.onPatternMatched, this);

        },
        onPatternMatched: function(oEvent) {

        var Empid = oEvent.getParameter("arguments").key;
         this.getView().bindElement("/EmpSet('"+ Empid +"')");
        //    this.byId("SF").bindElement("/EmpSet('"+Empid+"')");
        //      this.byId("objhead").bindElement("/EmpSet('"+Empid+"')");
    
      

        },
        Ondownloadcv : function(oEvent){
        var empid = this.getView().getBindingContext().getProperty("Empid");

        var filename = oEvent.getSource().getParent().getBindingContext().getProperty("Filename")
        // oEvent.getSource() = button getParent() = that row , getProperty mean coulmn 
        var url = "/sap/opu/odata/sap/ZEMPDATA_SRV/resumeSet(Empid='"+empid+"',Filename='"+filename+"')/$value";
        sap.m.URLHelper.redirect(url,false);
            
        }
 

    });
});