"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestModel = void 0;
var AbstractModel_1 = require("sabre-ngv-app/app/AbstractModel");
var Context_1 = require("../Context");
var RestApiService_1 = require("sabre-ngv-communication/services/RestApiService");
var RestModel = /** @class */ (function (_super) {
    __extends(RestModel, _super);
    function RestModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RestModel.prototype.sendRestRequest = function (url, httpMethod, authTokenType, payload, headers) {
        return (0, Context_1.getService)(RestApiService_1.RestApiService).send({
            httpMethod: httpMethod,
            url: url,
            authTokenType: authTokenType,
            payload: payload,
            headers: headers
        });
    };
    return RestModel;
}(AbstractModel_1.AbstractModel));
exports.RestModel = RestModel;
