sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/type/Currency",
    "sap/m/library", 
    "sapips/training/jsonbinding1/model/formatter"
], function (Controller, JSONModel, Currency, mobileLibrary, formatter) {
    "use strict";

    return Controller.extend("sapips.training.jsonbinding1.controller.JSONBinding", {
        formatter: formatter,

        onInit: function () {
            var oProductsModel = this.getView().getModel("ProductsModel");

            this.getView().byId("panel2").bindElement({
                path: "/Products/0",
                model: "ProductsModel"
            });

            var oData = {
                Eid: "john.angelo.lumor",
                Enabled: true,
                Address: {
                    Street: "Solitaire Street",
                    City: "Cavite",
                    Zip: "4107",
                    Country: "PH"
                },
                SalesAmount: 999999,
                CurrencyCode: "Php"
            };

            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel); 
        },

        onProductIdChange: function(oEvent) {
            var sPath = oEvent.getSource().getBindingContext("ProductsModel").getPath();
            this.getView().byId("panel3").bindElement({
                path: sPath,
                model: "ProductsModel"
            });
        }
        
    });
});
