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
            var oView = this.getView();
            var oProductsModel = oView.getModel("ProductsModel");
        
            var sPath = "/Products/0";
        
            oView.byId("panel3").bindElement({
                path: sPath,
                model: "ProductsModel"
            });

            // Bind both panels to the same product path
            oView.byId("panel2").bindElement({
                path: sPath,
                model: "ProductsModel"
            });
        
        
            // The rest of your non-product-related data
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
            oView.setModel(oModel);
        }        

    });
});
