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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
exports.Gtc_Payment = void 0;
var AbstractView_1 = require("sabre-ngv-app/app/AbstractView");
var LayerService_1 = require("sabre-ngv-core/services/LayerService");
var Template_1 = require("sabre-ngv-core/decorators/classes/view/Template");
var pqFare_1 = require("../model/pqFare");
var ccData_1 = require("../model/ccData");
var IAreaService_1 = require("sabre-ngv-app/app/services/impl/IAreaService");
var RestModel_1 = require("../model/RestModel");
var Context_1 = require("../Context");
var CheckTotal_1 = require("./CheckTotal");
var remark_1 = require("../model/remark");
var SabreController_1 = require("../controllers/SabreController");
var Gtc_Payment = /** @class */ (function (_super) {
    __extends(Gtc_Payment, _super);
    function Gtc_Payment(options, reservation) {
        var _this = _super.call(this, options) || this;
        _this.status = [];
        _this.vendors = [{ code: "AX" }, { code: "VI" }, { code: "CA" }];
        _this.totalPax = 0;
        _this.updateRmks = [];
        _this.pqFareList = [];
        _this.creditCardList = [];
        _this.getReservation(reservation);
        return _this;
    }
    Gtc_Payment.prototype.initialize = function (options) {
        _super.prototype.addDomEvents.call(this, {
            'change #selectPq': 'loadAmount',
            'change #creditCards': 'loadExpiration',
            'change #markUpFee': 'updateTotal',
            'change #amt': 'updateTotal',
            'change #additional': 'updateTotal',
            'change #tktFee': 'updateTotal'
        });
        _super.prototype.initialize.call(this, options);
    };
    Gtc_Payment.prototype.getReservation = function (fullPNR) {
        var _this = this;
        var _a, _b, _c, _d;
        // console.log("ccNum", this.ccNum);
        var getreservationpromise = (0, Context_1.getService)(SabreController_1.SabreController);
        if (!fullPNR) {
            var areaService = (0, Context_1.getService)(IAreaService_1.IAreaService);
            areaService.showBanner('Error', 'There is no active PNR...');
            (0, Context_1.getService)(LayerService_1.LayerService).clearLayer();
        }
        else {
            var pnrData = fullPNR.Data;
            var pnrRecloc = (_a = fullPNR === null || fullPNR === void 0 ? void 0 : fullPNR.Data) === null || _a === void 0 ? void 0 : _a.RecordLocators[0]['Id'];
            var totalPax = pnrData.Passengers.Passenger.length;
            this.totalPax = totalPax;
            // console.log("pnrRecloc",pnrRecloc);            
            var today = new Date();
            var year = today.getFullYear().toString();
            var month = today.getMonth() + 1;
            var day = today.getDate();
            var day2 = (day < 10) ? "0" + day.toString() : day.toString();
            var month2 = (month < 10) ? "0" + month.toString() : month.toString();
            var adflexRef = pnrRecloc + year[2] + year[3] + month2 + day2;
            var mkup_1, tktFee_1, fee_1 = "";
            var mkupTotal_1 = 0;
            var feeTotal = 0;
            var paxName = pnrData.Passengers.Passenger[0].GivenName + " " + pnrData.Passengers.Passenger[0].Surname;
            if ((_b = pnrData.PriceQuotes) === null || _b === void 0 ? void 0 : _b.PriceQuote) {
                var arrayFares = pnrData.PriceQuotes.PriceQuote;
                // console.log("arrayFares",arrayFares);                
                if (arrayFares.length) {
                    arrayFares.forEach(function (element) {
                        // console.log("element",element.Taxes.TotalTax['Currency']);                        
                        if (element.Taxes.TotalTax['Currency'] == "GBP") {
                            var onePQ = new pqFare_1.pqFare;
                            // onePQ.curr = element.BaseFare.Amount.Currency;
                            var item = element['Id'].toString();
                            onePQ.item = item[item.length - 1];
                            onePQ.total = element.Total.Amount['Amount'];
                            onePQ.taxes = element.Taxes.TotalTax['Amount'];
                            // priceString = element.totals.subtotal;
                            // onePQ.subtotal = parseFloat(priceString);
                            // console.log("onePQ",onePQ);                            
                            _this.pqFareList.push(onePQ);
                        }
                    });
                }
            }
            if ((_c = pnrData.FormOfPayments) === null || _c === void 0 ? void 0 : _c.FormOfPayment) {
                var arrayFares = pnrData.FormOfPayments.FormOfPayment;
                if (arrayFares.length) {
                    arrayFares.forEach(function (element) {
                        var oneCC = new ccData_1.ccData;
                        oneCC.code = element.CreditCard['CreditCardCode'];
                        oneCC.cardMasked = oneCC.code + element.CreditCard['CreditCardNumber'];
                        if (oneCC.cardMasked) {
                            var last4digits = "";
                            for (var i = oneCC.cardMasked.length - 4; i < oneCC.cardMasked.length; i++) {
                                last4digits = last4digits + oneCC.cardMasked[i].toString();
                            }
                            oneCC.last4 = last4digits;
                        }
                        oneCC.year = element.CreditCard['ExpirationYear'][2] + element.CreditCard['ExpirationYear'][3];
                        oneCC.month = element.CreditCard['ExpirationMonth'];
                        // console.log("oneCC ", oneCC);                        
                        _this.creditCardList.push(oneCC);
                    });
                }
            }
            if ((_d = pnrData.Remarks) === null || _d === void 0 ? void 0 : _d.Remark) {
                var invoiceRmks = pnrData.Remarks.Remark;
                if (invoiceRmks.length) {
                    invoiceRmks.forEach(function (element) {
                        if (element['Type'] == "Invoice") {
                            var partMkup = element['Text'].split("MKUP/");
                            if (partMkup[1]) {
                                var slash = partMkup[1].split("/");
                                mkup_1 = slash[1];
                                mkupTotal_1 = mkupTotal_1 + parseFloat(mkup_1);
                            }
                            var partTkt = element['Text'].split("TKTFEE/");
                            if (partTkt[1]) {
                                tktFee_1 = partTkt[1];
                            }
                            else {
                                partTkt = element['Text'].split("FEE/");
                                if (partTkt[1]) {
                                    fee_1 = partTkt[1];
                                }
                            }
                            var cmRmk = element['Text'].split("CM-");
                            if (cmRmk[1]) {
                                var rmk = new remark_1.remark;
                                rmk.Type = "Itinerary";
                                rmk.Id = element.Source['Id'].toString();
                                rmk.Text = element['Text'];
                                rmk.Code = "CM";
                                _this.updateRmks.push(rmk);
                            }
                            var payment = element['Text'].split("PAYMENT/");
                            if (payment[1]) {
                                var rmk = new remark_1.remark;
                                rmk.Type = "Itinerary";
                                rmk.Id = element.Source['Id'].toString();
                                rmk.Text = element['Text'];
                                rmk.Code = "PAY";
                                _this.updateRmks.push(rmk);
                            }
                        }
                    });
                }
            }
            // console.log("this.updateRmks",this.updateRmks);            
            if (tktFee_1) {
                feeTotal = totalPax * parseFloat(tktFee_1);
            }
            if (fee_1) {
                feeTotal = parseFloat(fee_1);
            }
            var totalAmt = mkupTotal_1 + feeTotal;
            this.getModel().set('markUpFee', mkupTotal_1.toFixed(2));
            this.getModel().set('tktFee', feeTotal.toFixed(2));
            this.getModel().set('selectPq', this.pqFareList);
            this.getModel().set('creditCards', this.creditCardList);
            this.getModel().set('name', paxName);
            this.getModel().set('refId', adflexRef);
            this.getModel().set('total', totalAmt.toFixed(2) + " GBP");
            this.getModel().set('vendors', this.vendors);
            this.render();
            // this.updateTotal();
        }
    };
    Gtc_Payment.prototype.loadAmount = function (selector) {
        var _this = this;
        var item = this.$('#selectPq').children("option:selected").val();
        if (selector.target) {
            this.pqFareList.forEach(function (element) {
                if (element['item'] == item) {
                    document.getElementById("amt").value = element['total'].toString();
                    _this.updateTotal();
                }
            });
            $('#selectPq').val(item);
        }
    };
    Gtc_Payment.prototype.loadExpiration = function (selector) {
        var card = this.$('#creditCards').children("option:selected").val();
        if (selector.target) {
            this.creditCardList.forEach(function (element) {
                if (element['cardMasked'] == card) {
                    document.getElementById("cardInUse").value = card;
                    var exp = element['month'] + "/" + element['year'];
                    document.getElementById("expiration").value = exp;
                }
            });
            $('#creditCards').val(card);
        }
        var writeCC = document.getElementById("cardInUse");
        if (card == "addCC") {
            document.getElementById("cardInUse").value = "";
            document.getElementById("expiration").value = "";
            document.getElementById("vendor").removeAttribute("disabled");
            writeCC.removeAttribute("disabled");
        }
        else {
            writeCC.setAttribute("disabled", "");
        }
    };
    Gtc_Payment.prototype.updateTotal = function (selector) {
        var markUpFee = 0;
        var amt = 0;
        var additional = 0;
        var tktFee = 0;
        if (document.getElementById("markUpFee").value) {
            markUpFee = parseFloat(document.getElementById("markUpFee").value);
            document.getElementById("markUpFee").value = markUpFee.toFixed(2);
        }
        if (document.getElementById("amt").value) {
            amt = parseFloat(document.getElementById("amt").value);
            document.getElementById("amt").value = amt.toFixed(2);
        }
        if (document.getElementById("additional").value) {
            additional = parseFloat(document.getElementById("additional").value);
            document.getElementById("additional").value = additional.toFixed(2);
        }
        if (document.getElementById("tktFee").value) {
            tktFee = parseFloat(document.getElementById("tktFee").value);
            document.getElementById("tktFee").value = tktFee.toFixed(2);
        }
        var total = markUpFee + amt + additional + tktFee;
        document.getElementById("total").value = total.toFixed(2) + " GBP";
    };
    Gtc_Payment.prototype.selfNextAction = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.InputValidator()) {
                    this.execute();
                }
                return [2 /*return*/];
            });
        });
    };
    Gtc_Payment.prototype.execute = function () {
        var markUpFee = document.getElementById('markUpFee').value;
        var ccName = document.getElementById('name').value;
        var fee = document.getElementById('tktFee').value;
        var pqAmt = document.getElementById('amt').value;
        var additional = document.getElementById('additional').value;
        var total = document.getElementById('total').value;
        var fullCard = this.$('#creditCards').children("option:selected").val();
        var option = this.$('#test').children("option:selected").val();
        var last4 = "";
        var code;
        if (fullCard == "addCC") {
            code = this.$('#vendor').children("option:selected").val();
            fullCard = document.getElementById("cardInUse").value;
            for (var i = fullCard.length - 4; i < fullCard.length; i++) {
                last4 = last4 + fullCard[i].toString();
            }
            // console.log("addCC selected", fullCard);
        }
        else {
            var cardSelected = this.creditCardList.filter(function (x) { return x['cardMasked'] == fullCard; });
            last4 = cardSelected[0]['last4'];
            code = cardSelected[0]['code'];
            // console.log("cardMasked selected", cardSelected);
        }
        var refId = document.getElementById('refId').value;
        var exp = document.getElementById('expiration').value;
        var expMonth = exp.split("/")[0];
        var expYear = exp.split("/")[1];
        // let xxxxxxxxxx  = (<HTMLInputElement>document.getElementById('xxxxxxxxxxxx')).value;
        // let xxxxxxxxxx  = (<HTMLInputElement>document.getElementById('xxxxxxxxxxxx')).value;
        var pack = {
            "markUpFee": markUpFee,
            "fee": fee,
            "name": ccName,
            "pqAmt": pqAmt,
            "additional": additional,
            "total": total,
            "fullCard": fullCard,
            "expMonth": expMonth,
            "expYear": expYear,
            "card4": last4,
            "option": option,
            "ccCode": code,
            "refId": refId,
            "UpdateRmk": this.updateRmks
        };
        console.log("pack", pack);
        var restModalOptions = {
            title: 'Confirmation',
            actions: [
                {
                    className: 'app.common.views.Button',
                    caption: 'Cancel',
                    actionName: 'cancel',
                    type: 'secondary'
                },
                {
                    className: 'app.common.views.Button',
                    caption: 'Back',
                    actionName: 'back',
                    type: 'secondary'
                },
                {
                    className: 'app.common.views.Button',
                    caption: "Add Remarks",
                    actionName: 'next',
                    type: 'success'
                }
            ]
        };
        (0, Context_1.getService)(LayerService_1.LayerService).showInModal(new CheckTotal_1.CheckTotal({ model: new RestModel_1.RestModel() }, pack), restModalOptions, { display: 'areaView' });
    };
    Gtc_Payment.prototype.InputValidator = function () {
        var allOk = true;
        var total = document.getElementById("total").value;
        if (parseFloat(total.split("GBP")[0]) > 0) {
            this.fieldOk("total");
            var required = document.querySelectorAll('[required]');
            for (var i = 0; i < required.length; i++) {
                var id = required[i].id;
                // console.log("InputValidator:" + id);
                var valueRead = document.getElementById(id).value;
                if (id == "creditCards" && valueRead == "ccNoSelected") {
                    this.errorOnField(id, "Field cannot be empty or blank");
                    allOk = false;
                    break;
                }
                else if (id == "creditCards" && valueRead == "addCC") {
                    if (this.status["creditCards"] == true) {
                        this.fieldOk("creditCards");
                    }
                    if (document.getElementById("vendor").value == "noVendor") {
                        this.status['vendor'] = true;
                        this.errorOnField("vendor", "Select one");
                        allOk = false;
                        break;
                    }
                    else {
                        this.fieldOk("vendor");
                    }
                    var typedCard = document.getElementById("cardInUse").value;
                    if (typedCard.length == 16 && this.status['cardInUse'] == true) {
                        this.fieldOk('cardInUse');
                    }
                    else if (typedCard.length > 16) {
                        this.errorOnField("cardInUse", "Maximum 16 numbers");
                        allOk = false;
                        break;
                    }
                    else if (typedCard.length <= 15) {
                        this.status['cardInUse'] = true;
                        this.errorOnField("cardInUse", "Minimum 16 numbers");
                        allOk = false;
                        break;
                    }
                }
                else if (id == "name") {
                    var name_1 = document.getElementById("name").value;
                    if (!name_1) {
                        // console.log("entro!");
                        this.errorOnField("name", "Name is mandatory");
                        allOk = false;
                        break;
                    }
                    else if (name_1 && this.status["name"] == true) {
                        this.fieldOk("creditCards");
                    }
                }
                else if (id == "name") {
                    var name_2 = document.getElementById("name").value;
                    if (!name_2) {
                        this.errorOnField("name", "Name is mandatory");
                        allOk = false;
                        break;
                    }
                    else if (name_2 && this.status["name"] == true) {
                        this.fieldOk("creditCards");
                    }
                }
                else if (id == "expiration") {
                    var expiration = document.getElementById("expiration").value;
                    if (!expiration) {
                        this.errorOnField("expiration", "Expiration is mandatory");
                        allOk = false;
                        break;
                    }
                    else {
                        // if (this.status["expiration"] == true) {
                        //     this.fieldOk("expiration");
                        // }                        
                        var date = new Date();
                        var year4 = date.getFullYear().toString();
                        var thisMonth = date.getMonth() + 1;
                        var year2 = parseFloat(year4[2] + year4[3]);
                        var exp = document.getElementById("expiration").value;
                        var expMonth = parseFloat(exp.split("/")[0]);
                        var expYear = parseFloat(exp.split("/")[1]);
                        // console.log("expMonth", expMonth);
                        // console.log("thisMonth", thisMonth);
                        if (isNaN(expMonth) || isNaN(expYear) || expMonth > 12 || expMonth < 1 || expYear < year2 || (expYear == year2 && expMonth < thisMonth)) {
                            this.errorOnField("expiration", "MM/YY like: 05/27");
                            allOk = false;
                            break;
                        }
                        else {
                            this.fieldOk("expiration");
                        }
                    }
                }
            }
        }
        else {
            this.errorOnField("total", "Must be greater than 0");
            allOk = false;
        }
        // if (this.status["addCC"] == true) {
        //     (<HTMLDivElement>document.getElementById("creditCardsDiv")).classList.remove("has-error"); 
        //     (<HTMLDivElement>document.getElementById("creditCardsError")).innerText = "";
        //     this.status["addCC"] = false;
        //     id = "cardInUse";
        //     if (!(<HTMLSelectElement>document.getElementById(id)).value) {
        //         this.errorOnField(id, "Type credit card number");
        //         allOk = false;
        //         break;
        //     }
        // } else {
        //     this.errorOnField(id, "Field cannot be empty or blank");
        //     allOk = false;
        //     break;
        // }
        // else {
        //     this.fieldOk(id);
        // }
        return allOk;
    };
    Gtc_Payment.prototype.errorOnField = function (id, message) {
        document.getElementById(id + "Error").innerText = message;
        document.getElementById(id + "Div").classList.add("has-error");
        document.getElementById(id).focus();
        this.status[id] = true;
    };
    Gtc_Payment.prototype.fieldOk = function (id) {
        if (this.status[id] == true) {
            document.getElementById(id + "Div").classList.remove("has-error");
            document.getElementById(id + "Error").innerText = "";
            this.status[id] = false;
        }
    };
    Gtc_Payment = __decorate([
        (0, Template_1.Template)('com-internova-gtcpayment-web-module:Gtc_Payment'),
        __metadata("design:paramtypes", [Object, Object])
    ], Gtc_Payment);
    return Gtc_Payment;
}(AbstractView_1.AbstractView));
exports.Gtc_Payment = Gtc_Payment;
