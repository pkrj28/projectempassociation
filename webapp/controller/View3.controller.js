sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/pjnamespace/project4/model/formatter"
], 
function (Controller, formatter, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("com.pjnamespace.project4.controller.View1", {

        f: formatter,
    onInit: function () {
    var projModel = this.getOwnerComponent().getModel("projModel");

    projModel.setData({
        aProjects: []
           
    });
},
        onBack: function() {
        history.go(-1);
        },
    onSave: function () {
    var Empid = this.byId("Empid").getValue();
    var Empname = this.byId("Empname").getValue();
    var City = this.byId("City").getValue();
    var Country = this.byId("Country").getValue();
    var Salary = this.byId("Salary").getValue();
    var Currency = this.byId("Currency").getValue();
    var Status = this.byId("Status").getValue();
    var Begindate = this.byId("Begindate").getValue();
    var Phonenumber = this.byId("Phonenumber").getValue();
    var Mailid = this.byId("Mailid").getValue();

   Begindate = formatter.formatDate3(Begindate);
   if (!Begindate)
   { Begindate = "2026-03-11T00:00:00"}

    if (!Empid || !Empname) {
        sap.m.MessageToast.show("Employee ID and Name are required");
        return;
    }

    var Payload = {
        Empid: Empid,
        Empname: Empname,
        City: City,
        Country: Country,
        Salary: Salary,
        Zcurrency: Currency,
        Status: Status,
        Begindate: Begindate,
        Phonenumber: Phonenumber,
        Mailid: Mailid,
        NavToProject:this.getOwnerComponent().getModel("projModel").getData().aProjects
    };

    var oModel = this.getOwnerComponent().getModel();

    oModel.create("/EmpSet", Payload, {
        success: function (ereq,eres) {
          // MessageBox.success("Employee created successfully-" );
          sap.m.MessageToast.show("Employee created successfully-"+eres.data.Empid);
          oModel.refresh(true);
        },
        error: function () {
           // MessageBox.error("Error creating employee");
           sap.m.MessageBox.error("Error creating employee");
        }
    });
        },Onadd: function() {
         var projModel = this.getOwnerComponent().getModel("projModel").getData().aProjects.push({
                Empid: "",
                Projid: "",
                Projname: "",
                Projdes: "",
                Clientname: ""

         })
         this.getOwnerComponent().getModel("projModel").refresh(true);
            
        },
        onDelete: function(oEvent){
        var indexrow = oEvent.getSource().getParent().getBindingContextPath().split("/")[2];
        this.getOwnerComponent().getModel("projModel").getData().aProjects.splice(indexrow, 1);
        this.getOwnerComponent().getModel("projModel").refresh(true);
        },
      oncvuploadsap: function () {
    var oUploadSet = this.byId("Iduploadcv");
    var empId = this.byId("Empid").getValue();

    // Get incomplete items (files added but not uploaded yet)
    var aFiles = oUploadSet.getIncompleteItems();

    for (var i = 0; i < aFiles.length; i++) {
        var fileName = aFiles[i].getFileName();

        // Step 1: create slug parameter EmpId + filename  and Add header field
        var slug = empId + "-" + fileName;       
        oUploadSet.addHeaderField(new sap.ui.core.Item({
            key: "SLUG",
            text: slug  }));
        // Step2- Construct X CSRF Token 
       this.getOwnerComponent().getModel().refreshSecurityToken();
        oUploadSet.addHeaderField(new sap.ui.core.Item({
            key: "X-CSRF-Token",
            text: this.getOwnerComponent().getModel().getSecurityToken() }));
            oUploadSet.uploadItem(aFiles[i]);
             oUploadSet.removeAllHeaderFields();
    }
},
onUploadCompleted: function(oEvent) {
    var status = oEvent.getParameter("status");
    var filename = oEvent.getParameter("item").getFileName();

    if (status === 201) {
        sap.m.MessageToast.show("File - " + filename + " uploaded successfully");
    } else {
        sap.m.MessageToast.show("File - " + filename + " not uploaded successfully");
    }
}
    });

});