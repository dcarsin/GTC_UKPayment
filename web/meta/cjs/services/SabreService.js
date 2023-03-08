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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SabreService = void 0;
var AbstractService_1 = require("sabre-ngv-app/app/services/impl/AbstractService");
var ISoapApiService_1 = require("sabre-ngv-communication/interfaces/ISoapApiService");
var Context_1 = require("../Context");
var SrwSyncApi_1 = require("sabre-ngv-app/app/services/impl/SrwSyncApi");
var RestApiService_1 = require("sabre-ngv-communication/services/RestApiService");
var SabreService = /** @class */ (function (_super) {
    __extends(SabreService, _super);
    function SabreService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SabreService.prototype.callSoapServiceAsync = function (payload, action, authTokenType, timeout) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line: no-unsafe-any
            var soapSvc = (0, Context_1.getService)(ISoapApiService_1.ISoapApiService);
            var rq_ = { action: action, payload: payload, authTokenType: authTokenType, timeout: timeout };
            // tslint:disable-next-line: no-unsafe-any
            console.log("rq_:", rq_);
            soapSvc.callSws(rq_)
                .then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log("async: response", response);
                    // tslint:disable-next-line: no-unsafe-any
                    resolve(response.value);
                    return [2 /*return*/];
                });
            }); })
                .catch(function (error) {
                console.log("callSoapServiceAsync error: ", error);
                reject(error);
            });
        });
    };
    SabreService.prototype.callSoapServiceSync = function (svcRQ, svcActionCode) {
        var soapSvc = (0, Context_1.getService)(SrwSyncApi_1.SrwSyncApi);
        // console.log("soapSvc:",soapSvc);
        var response = "";
        try {
            response = soapSvc.sws(svcRQ, svcActionCode);
            // console.log("soapSvc-respose: ", response);
            return response;
        }
        catch (ex) {
            // console.log(ex);
        }
    };
    SabreService.prototype.callRestServiceAsync = function (url, httpMethod, authTokenType, payload, headers) {
        // tslint:disable-next-line: no-unsafe-any
        return (0, Context_1.getService)(RestApiService_1.RestApiService).send({
            httpMethod: httpMethod,
            url: url,
            authTokenType: authTokenType,
            payload: payload,
            headers: headers
        });
    };
    SabreService.SERVICE_NAME = "com-internova-gtcpayment-web-module-SabreService";
    return SabreService;
}(AbstractService_1.AbstractService));
exports.SabreService = SabreService;
