import { AbstractView } from "sabre-ngv-app/app/AbstractView";
import { LayerService } from "sabre-ngv-core/services/LayerService";
import { Template } from "sabre-ngv-core/decorators/classes/view/Template";
import { pqFare } from "../model/pqFare";
import { ccData } from "../model/ccData";
import { IAreaService } from 'sabre-ngv-app/app/services/impl/IAreaService';
import { AbstractActionOptions } from "sabre-ngv-app/app/common/views/AbstractActionOptions";
import { AbstractViewOptions } from 'sabre-ngv-app/app/AbstractViewOptions';
import { CommandMessageReservationRs } from 'sabre-ngv-pos-cdm/reservation';
import { RestApiService } from "sabre-ngv-communication/services/RestApiService";
import { AuthTokenType } from "sabre-ngv-app/app/services/impl/AuthTokenType";
import { HttpMethod } from "sabre-ngv-app/app/services/impl/HttpMethod";
import { RestModel } from "../model/RestModel";
import { getService } from "../Context";
import { CheckTotal } from "./CheckTotal";
import { remark } from "../model/remark";
import { SabreController } from "../controllers/SabreController";

@Template('com-internova-gtcpayment-web-module:Gtc_Payment')
export class Gtc_Payment extends AbstractView<RestModel> {

    constructor(options?: AbstractViewOptions, reservation?: CommandMessageReservationRs) {
        super(options);
        this.getReservation(reservation);
    }
    public status = [];

    public vendors = [{ code: "AX" }, { code: "VI" }, { code: "CA" }, { code: "MC" }, { code: "DC" }, { code: "DS" }]
    public totalMkUp: number = 0;
    public updateRmks: remark[] = [];
    public pqFareList: pqFare[] = [];
    public creditCardList: ccData[] = [];
    initialize(options: AbstractActionOptions): void {
        super.addDomEvents({
            'change #selectPq': 'loadAmount',
            'change #creditCards': 'loadExpiration',
            'change #markUpFee': 'updateTotal',
            'change #pqAmt': 'updateTotal',
            'change #additional': 'updateTotal',
            'change #tktFee': 'updateTotal'
        });
        super.initialize(options);
    }

    getReservation(fullPNR?: CommandMessageReservationRs): void {
        // console.log("ccNum", this.ccNum);
        let getreservationpromise = getService(SabreController);
        let pnrData = fullPNR.Data;
        let pnrRecloc = fullPNR?.Data?.RecordLocators[0]['Id'];
        // let totalMkUp = pnrData.Passengers.Passenger.length;
        // this.totalMkUp = totalMkUp;
        // console.log("pnrRecloc",pnrRecloc);            
        var today = new Date();
        let year = today.getFullYear().toString();
        let month = today.getMonth() + 1;
        let day = today.getDate();
        let day2 = (day < 10) ? "0" + day.toString() : day.toString();
        let month2 = (month < 10) ? "0" + month.toString() : month.toString();
        let adflexRef = pnrRecloc + year[2] + year[3] + month2 + day2;
        let mkup, tktFee, fee = "";
        let mkupTotal = 0;
        let feeTotal = 0;
        let paxName = pnrData.Passengers.Passenger[0].GivenName + " " + pnrData.Passengers.Passenger[0].Surname;
        if (pnrData.PriceQuotes?.PriceQuote) {
            let arrayFares = pnrData.PriceQuotes.PriceQuote;
            // console.log("arrayFares",arrayFares);                
            if (arrayFares.length) {
                arrayFares.forEach(element => {
                    // console.log("element",element.Taxes.TotalTax['Currency']);                        
                    if (element.Taxes.TotalTax['Currency'] == "GBP") {
                        let onePQ = new pqFare;
                        // onePQ.curr = element.BaseFare.Amount.Currency;
                        let item = element['Id'].toString();
                        onePQ.item = item[item.length - 1];
                        onePQ.total = element.Total.Amount['Amount'];
                        onePQ.taxes = element.Taxes.TotalTax['Amount'];
                        // priceString = element.totals.subtotal;
                        // onePQ.subtotal = parseFloat(priceString);
                        // console.log("onePQ",onePQ);                            
                        this.pqFareList.push(onePQ);
                    }
                });
            }
        }

        if (pnrData.FormOfPayments?.FormOfPayment) {
            let arrayFares = pnrData.FormOfPayments.FormOfPayment;
            if (arrayFares.length) {
                arrayFares.forEach(element => {
                    let oneCC = new ccData;
                    oneCC.code = element.CreditCard['CreditCardCode'];
                    oneCC.cardMasked = oneCC.code + element.CreditCard['CreditCardNumber'];
                    if (oneCC.cardMasked) {
                        let last4digits = "";
                        for (let i = oneCC.cardMasked.length - 4; i < oneCC.cardMasked.length; i++) {
                            last4digits = last4digits + oneCC.cardMasked[i].toString();
                        }
                        oneCC.last4 = last4digits;
                    }
                    oneCC.year = element.CreditCard['ExpirationYear'][2] + element.CreditCard['ExpirationYear'][3];
                    oneCC.month = element.CreditCard['ExpirationMonth'];
                    // console.log("oneCC ", oneCC);                        
                    this.creditCardList.push(oneCC);
                });
            }
        }

        if (pnrData.Remarks?.Remark) {
            let invoiceRmks = pnrData.Remarks.Remark;
            if (invoiceRmks.length) {
                invoiceRmks.forEach(element => {
                    if (element['Type'] == "Invoice") {
                        let partMkup = element['Text'].split("MKUP/");
                        if (partMkup[1]) {
                            let slash = partMkup[1].split("/");
                            mkup = slash[1];
                            this.totalMkUp = this.totalMkUp + 1;
                            mkupTotal = mkupTotal + parseFloat(mkup);
                        }
                        let partTkt = element['Text'].split("TKTFEE/");
                        if (partTkt[1]) {
                            tktFee = partTkt[1]
                        } else {
                            partTkt = element['Text'].split("FEE/");
                            if (partTkt[1]) {
                                fee = partTkt[1]
                            }
                        }
                        let cmRmk = element['Text'].split("CM-");
                        if (cmRmk[1]) {
                            let rmk = new remark;
                            rmk.Type = "Itinerary";
                            rmk.Id = element.Source['Id'].toString();
                            rmk.Text = element['Text'];
                            rmk.Code = "CM"
                            this.updateRmks.push(rmk);
                        }
                        let payment = element['Text'].split("PAYMENT/");
                        if (payment[1]) {
                            let rmk = new remark;
                            rmk.Type = "Itinerary";
                            rmk.Id = element.Source['Id'].toString();
                            rmk.Text = element['Text'];
                            rmk.Code = "PAY"
                            this.updateRmks.push(rmk);
                        }
                    }
                });
            }
        }
        // console.log("this.updateRmks",this.updateRmks);            
        if (tktFee) {
            feeTotal = this.totalMkUp * parseFloat(tktFee);
        } if (fee) {
            feeTotal = parseFloat(fee);
        }
        let totalAmt = mkupTotal + feeTotal;
        this.getModel().set('markUpFee', mkupTotal.toFixed(2));
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

    private loadAmount(selector: JQueryEventObject): void {
        let item = (<HTMLSelectElement>document.getElementById("selectPq")).value;
        if (selector.target) {
            this.pqFareList.forEach(element => {
                if (element['item'] == item) {
                    (<HTMLInputElement>document.getElementById("pqAmt")).value = element['total'].toString();
                    (<HTMLInputElement>document.getElementById("amt")).value = (element['total'] * this.totalMkUp).toString();
                    this.updateTotal();
                }
            });
            $('#selectPq').val(item);
        }
    }

    private loadExpiration(selector: JQueryEventObject): void {
        let card = (<HTMLSelectElement>document.getElementById("creditCards")).value;
        if (selector.target) {
            this.creditCardList.forEach(element => {
                if (element['cardMasked'] == card) {
                    (<HTMLInputElement>document.getElementById("cardInUse")).value = card;
                    let exp = element['month'] + "/" + element['year'];
                    (<HTMLInputElement>document.getElementById("expiration")).value = exp;
                }
            });
            $('#creditCards').val(card);
        }
        let writeCC = document.getElementById("cardInUse");
        if (card == "addCC") {
            (<HTMLInputElement>document.getElementById("cardInUse")).value = "";
            (<HTMLInputElement>document.getElementById("expiration")).value = "";
            document.getElementById("vendor").removeAttribute("disabled");
            writeCC.removeAttribute("disabled");
        }
        else {
            writeCC.setAttribute("disabled", "");
        }
    }

    private updateTotal(selector?: JQueryEventObject): void {
        let markUpFee = 0;
        let amt = 0;
        let additional = 0;
        let tktFee = 0;
        if ((<HTMLInputElement>document.getElementById("markUpFee")).value) {
            markUpFee = parseFloat((<HTMLInputElement>document.getElementById("markUpFee")).value);
            (<HTMLInputElement>document.getElementById("markUpFee")).value = markUpFee.toFixed(2);
        }
        if ((<HTMLInputElement>document.getElementById("amt")).value) {
            amt = parseFloat((<HTMLInputElement>document.getElementById("amt")).value);
            (<HTMLInputElement>document.getElementById("amt")).value = amt.toFixed(2);
        }
        if ((<HTMLInputElement>document.getElementById("additional")).value) {
            additional = parseFloat((<HTMLInputElement>document.getElementById("additional")).value);
            (<HTMLInputElement>document.getElementById("additional")).value = additional.toFixed(2);
        }
        if ((<HTMLInputElement>document.getElementById("tktFee")).value) {
            tktFee = parseFloat((<HTMLInputElement>document.getElementById("tktFee")).value);
            (<HTMLInputElement>document.getElementById("tktFee")).value = tktFee.toFixed(2);
        }
        let total = markUpFee + amt + additional + tktFee;
        (<HTMLLabelElement>document.getElementById("totalVal")).innerHTML = total.toFixed(2) + " GBP";
    }

    async selfNextAction() {
        if (this.InputValidator()) {
            this.execute();
        }
    }

    private execute() {
        let markUpFee = (<HTMLInputElement>document.getElementById('markUpFee')).value;
        let ccName = (<HTMLInputElement>document.getElementById('name')).value;
        let fee = (<HTMLInputElement>document.getElementById('tktFee')).value;
        let pqAmt = (<HTMLInputElement>document.getElementById('pqAmt')).value;
        let additional = (<HTMLInputElement>document.getElementById('additional')).value;
        let total = (<HTMLLabelElement>document.getElementById("totalVal")).textContent;
        let fullCard = (<HTMLSelectElement>document.getElementById("creditCards")).value;
        let option = (<HTMLSelectElement>document.getElementById("test")).value;
        let last4 = "";
        let code;
        if (fullCard == "addCC") {
            code = (<HTMLSelectElement>document.getElementById("vendor")).value;
            fullCard = (<HTMLInputElement>document.getElementById("cardInUse")).value;
            for (let i = fullCard.length - 4; i < fullCard.length; i++) {
                last4 = last4 + fullCard[i].toString();
            }
            // console.log("addCC selected", fullCard);
        } else {
            let cardSelected = this.creditCardList.filter(x => x['cardMasked'] == fullCard);
            last4 = cardSelected[0]['last4'];
            code = cardSelected[0]['code'];
            // console.log("cardMasked selected", cardSelected);
        }
        let refId = (<HTMLInputElement>document.getElementById('refId')).value;
        let exp = (<HTMLInputElement>document.getElementById('expiration')).value;
        let expMonth = exp.split("/")[0];
        let expYear = exp.split("/")[1];
        // let xxxxxxxxxx  = (<HTMLInputElement>document.getElementById('xxxxxxxxxxxx')).value;
        // let xxxxxxxxxx  = (<HTMLInputElement>document.getElementById('xxxxxxxxxxxx')).value;

        let pack: {} = {
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
        }
        console.log("pack", pack);
        const restModalOptions = {
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

        getService(LayerService).showInModal(
            new CheckTotal({ model: new RestModel() }, pack),
            restModalOptions,
            { display: 'areaView' });
    }

    private InputValidator(): boolean {
        let allOk = true;
        let total = (<HTMLLabelElement>document.getElementById("totalVal")).textContent;
        let max: number = 16;
        let ccVendor = (<HTMLSelectElement>document.getElementById("vendor")).value;
        if (ccVendor == "AX") {
            max = 15
        }
        console.log("ccVendor", ccVendor);

        console.log("total", total);

        if (parseFloat(total.split("GBP")[0]) > 0) {
            this.fieldOk("total");
            let required = document.querySelectorAll('[required]')
            for (let i = 0; i < required.length; i++) {
                let id = required[i].id;
                // console.log("InputValidator:" + id);
                let valueRead = (<HTMLSelectElement>document.getElementById(id)).value;
                if (id == "creditCards" && valueRead == "ccNoSelected") {
                    this.errorOnField(id, "Field cannot be empty or blank");
                    allOk = false;
                    break;
                } else if (id == "creditCards" && valueRead == "addCC") {
                    if (this.status["creditCards"] == true) {
                        this.fieldOk("creditCards");
                    }
                    if ((<HTMLSelectElement>document.getElementById("vendor")).value == "noVendor") {
                        this.status['vendor'] = true;
                        this.errorOnField("vendor", "Select one");
                        allOk = false;
                        break;
                    } else {
                        this.fieldOk("vendor");
                    }
                    let typedCard = (<HTMLInputElement>document.getElementById("cardInUse")).value;
                    if (typedCard.length == max && this.status['cardInUse'] == true) {
                        this.fieldOk('cardInUse');
                    } else if (typedCard.length != max) {
                        this.errorOnField("cardInUse", "For " + ccVendor + " is " + max + " numbers");
                        allOk = false;
                        break;
                    }
                } else if (id == "name") {
                    let name = (<HTMLInputElement>document.getElementById("name")).value;
                    if (!name) {
                        // console.log("entro!");

                        this.errorOnField("name", "Name is mandatory");
                        allOk = false;
                        break;
                    } else if (name && this.status["name"] == true) {
                        this.fieldOk("creditCards");
                    }
                } else if (id == "name") {
                    let name = (<HTMLInputElement>document.getElementById("name")).value;
                    if (!name) {
                        this.errorOnField("name", "Name is mandatory");
                        allOk = false;
                        break;
                    } else if (name && this.status["name"] == true) {
                        this.fieldOk("creditCards");
                    }
                } else if (id == "expiration") {
                    let expiration = (<HTMLInputElement>document.getElementById("expiration")).value;
                    if (!expiration) {
                        this.errorOnField("expiration", "Expiration is mandatory");
                        allOk = false;
                        break;
                    } else {
                        // if (this.status["expiration"] == true) {
                        //     this.fieldOk("expiration");
                        // }                        
                        let date = new Date();
                        let year4 = date.getFullYear().toString();
                        let thisMonth = date.getMonth() + 1;
                        let year2 = parseFloat(year4[2] + year4[3]);
                        let exp = (<HTMLInputElement>document.getElementById("expiration")).value;
                        let expMonth = parseFloat(exp.split("/")[0]);
                        let expYear = parseFloat(exp.split("/")[1]);
                        // console.log("expMonth", expMonth);
                        // console.log("thisMonth", thisMonth);

                        if (isNaN(expMonth) || isNaN(expYear) || expMonth > 12 || expMonth < 1 || expYear < year2 || (expYear == year2 && expMonth < thisMonth)) {
                            this.errorOnField("expiration", "MM/YY like: 05/27")
                            allOk = false;
                            break;
                        } else {
                            this.fieldOk("expiration");
                        }
                    }
                }
            }
        } else {
            this.errorOnField("total", "Must be greater than 0")
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
    }

    private errorOnField(id: string, message: string): void {
        (<HTMLDivElement>document.getElementById(id + "Error")).innerText = message;
        (<HTMLDivElement>document.getElementById(id + "Div")).classList.add("has-error");
        (<HTMLInputElement>document.getElementById(id)).focus();
        this.status[id] = true;
    }

    private fieldOk(id: string): void {
        if (this.status[id] == true) {
            (<HTMLDivElement>document.getElementById(id + "Div")).classList.remove("has-error");
            (<HTMLDivElement>document.getElementById(id + "Error")).innerText = "";
            this.status[id] = false;
        }
    }
}
