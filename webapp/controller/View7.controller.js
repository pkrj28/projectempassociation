sap.ui.define([
"sap/ui/core/mvc/Controller",
"com/pjnamespace/project4/model/formatter"
], function(Controller) {
"use strict";

return Controller.extend("com.pjnamespace.project4.controller.View7", {
uploadFile: function(oEvent) {
    
var oFileUploader = this.getView().byId("idfileUploader");
this.csrfToken = this.getView().getModel().getSecurityToken();
oFileUploader.setSendXHR(true);
var headerParma = new sap.ui.unified.FileUploaderParameter();
headerParma.setName('x-csrf-token');
headerParma.setValue(this.csrfToken);
oFileUploader.addHeaderParameter(headerParma);
var headerParma2 = new sap.ui.unified.FileUploaderParameter();
headerParma2.setName('slug');
headerParma2.setValue(oFileUploader.getValue());
oFileUploader.addHeaderParameter(headerParma2);
oFileUploader.checkFileReadable().then(function() {
oFileUploader.upload();
oFileUploader.destroyHeaderParameters();
}, function(error) {
sap.m.MessageToast.show("The file cannot be read. It may have changed.");
}).then(function() {
oFileUploader.clear();
});
},
afterUploadComplete: function(oEvent) {
var response = oEvent.getParameters("response");
this.getView().byId("idfileUploader").clear();
}
});
});