sap.ui.define([
    "cinema_display/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
], function (BaseController, JSONModel) {
    "use strict";

    return BaseController.extend("cinema_display.controller.Main", {
        onInit: function () {
            //For local development. Start your NodeJS server.
            // this.host = "http://localhost:3000";
            //For cloud router. So... router will see prefix /api and will forward request to NodeJS in cloud
            this.host = "/api";

            this.getView().setModel(this.getOwnerComponent().getModel());
        },
        onSave: function(){
            var oData = this.oDataModel.getData();

            this.getApp().setBusy(true);
            jQuery.ajax({
                type: "POST",
                url: this.host + "/Cinema",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(oData),
                success: function(data){
                    sap.m.MessageBox.success("Cinema Created");
                    this.oDataModel.setData(data);
                    this.getApp().setBusy(false);
                }.bind(this),
                error: function(oError){
                    this.getApp().setBusy(false);
                    jQuery.sap.log.error(oError);
                    sap.m.MessageBox.error("Creating failed");
                }.bind(this)
            });
        },
        onCancel: function(){
            this.oDataModel.setData();
        }
    });
});
