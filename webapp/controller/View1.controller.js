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
        },

        onSubmit: function () {
            var select = this.getView().byId("select").getSelectedKey();
            var combo = this.getView().byId("combo").getSelectedKeys();
            var radio = this.getView().byId("radio").getSelectedIndex();
        },

        onGo: function () {
            var aFilter = [];
            var empid = this.byId("empid").getValue();
            if (empid !== "") {
                aFilter.push(new Filter("Empid", "EQ", empid));
            }
            this.byId("table").getBinding("items").filter(aFilter)            
        },
        onReset: function () {
            this.byId("empid").setValue("");
            this.byId("empname").setValue("");
        },
        onpressrow: function(oEvent) {
        var empid = oEvent.getSource().getBindingContext().getProperty("Empid");
       // this.byId("SF").bindElement("/EmpSet('"+empid+"')");
      this.getOwnerComponent().getRouter().navTo("RouteView2",{key:empid});
     
        },
        onCreate: function() {
     this.getOwnerComponent().getRouter().navTo("RouteView3");

        },
         onUpdate: function() {
          var empid = this.byId("table").getSelectedItem().getBindingContext().getProperty("Empid");

         this.getOwnerComponent().getRouter().navTo("RouteView4", {key: empid} );

        },
         onDelete: function() {
        var empid = this.byId("table").getSelectedItem().getBindingContext().getProperty("Empid");
        var oModel = this.getOwnerComponent().getModel();

    oModel.remove("/EmpSet('"+empid+"')",{
        success: function () {
           sap.m.MessageToast.show("Employee deleted successfully-");
        },
        error: function () {
       sap.m.MessageBox.error("Error delete employee") }
    });

        }

    });
});