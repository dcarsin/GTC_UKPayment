import { AbstractView } from "sabre-ngv-app/app/AbstractView";
import { LayerService } from "sabre-ngv-core/services/LayerService";
import { Template } from "sabre-ngv-core/decorators/classes/view/Template";
import { SabreService } from "../services/SabreService";
import { pqFare } from "../model/pqFare";
import { ccData } from "../model/ccData";
import { IAreaService } from 'sabre-ngv-app/app/services/impl/IAreaService';
import { Utilitario } from "../common/Utilitario";
import { AbstractActionOptions } from "sabre-ngv-app/app/common/views/AbstractActionOptions";
import { SabreController } from "../controllers/SabreController";
import { AbstractViewOptions } from 'sabre-ngv-app/app/AbstractViewOptions';
import { CommandMessageReservationRs } from 'sabre-ngv-pos-cdm/reservation';
import { RestApiService } from "sabre-ngv-communication/services/RestApiService";
import { AuthTokenType } from "sabre-ngv-app/app/services/impl/AuthTokenType";
import { ISoapApiService } from "sabre-ngv-communication/interfaces/ISoapApiService";
import { HttpMethod } from "sabre-ngv-app/app/services/impl/HttpMethod";
import { RestModel } from "../model/RestModel";
import { getService } from "../Context";
import * as XML2JS from "xml2js";
import { remark } from "../model/remark";

@Template('com-internova-gtcpayment-web-module:CheckTotal')
export class CheckTotal extends AbstractView<RestModel> {
    constructor(options?: AbstractViewOptions, pack?: {}) {
        super(options);
        this.processData(pack);

        console.log("rmks", this.rmks);
        console.log("createRmks", this.createRmks);

        this.getModel().set('total', pack['total']);
        this.render();
    }
    public rmks: remark[] = [];
    public createRmks: remark[] = [];

    initialize(options: AbstractActionOptions): void {
        super.initialize(options);
    }

    processData(pack?: {}): void {
        this.rmks = pack['UpdateRmk'];
        let opt = pack['option'];
        let rmkCm = this.rmks.filter(x => x.Code == "CM")[0].Text = "CM-" + pack['ccCode'] + pack['card4'] + "/" + pack['expMonth'] + pack['expYear'] + "/*";
        let rmkPay = this.rmks.filter(x => x.Code == "PAY")[0].Text = "PAYMENT/123456/" + pack['refId'] + "/" + pack['total'];
        // 5H-PAYMENT/A-123456/OSUICI230227/1672.80/VI1111
        // 5H-M1100.00/S160.00/T362.80/A50.00/TT1672.80
        this.generateRmk("PAYMENT/"+ opt + "123456/" + pack['refId'] + "/" + pack['total'] + "/" + pack['ccCode'] + pack['card4']);
        let text = "";
        if (pack['markUpFee']) {
            text = "M" + pack['markUpFee']
        }
        if (pack['fee']) {
            text = text + "/S" + pack['fee']
        }
        if (pack['pqAmt']) {
            text = text + "/T" + pack['pqAmt']
        }
        if (pack['additional']) {
            text = text + "/A" + pack['additional']
        }
        if (pack['total']) {
            text = text + "/TT" + pack['total']
        }
        this.generateRmk(text);
    }

    async selfNextAction() {

        const areaService: IAreaService = getService(IAreaService);
        let getreservationpromise = getService(SabreController);
        console.log("getreservationpromise", getreservationpromise);

        getreservationpromise.RemarkUpdate(this.rmks)
            .then(rsp => {
                console.log("Rmks to update", this.rmks);
                getreservationpromise.SendCommandMessage("*.", true, true)
                    .then(rsp => {
                        console.log("remarks been displayed");
                        getreservationpromise.buildRequestAddRemark(this.createRmks)
                            .then(rsp => {
                                areaService.showBanner('Success', "Remarks were added");
                                getreservationpromise.SendCommandMessage("*P5H", true, true)
                                    .then(rsp => {
                                        console.log("remarks been displayed");
                                    })
                            })
                    })
                areaService.showBanner('Success', "Remarks were updated");
            })
        getService(LayerService).clearLayer();





        const action: string = this.$('.action-field').find('.action').val();
        const authTokenType: AuthTokenType = this.$('.authTokenType-field').find('.authTokenType').val();
        const timeout: number = this.$('.timeout-field').find('.timeout').val();
        const payload: string = this.$('.payload-field').find('.payload').val();

        this.$('.response').val("");

        const soapApi: ISoapApiService = getService(ISoapApiService);

        soapApi.callSws({
            action,
            payload,
            authTokenType,
            timeout
        }).then(async (response) => {
            const responseValue = response.errorCode ? response : await this.parseXml2Js(response.value);
            this.$('.response').val(JSON.stringify(responseValue, null, 2));
        }).catch((error) => {
            this.$('.response').val(error);
        })
        // let getreservationpromise = getService(SabreController);
        // getreservationpromise.buildRequestAddRemark(this.rmks)
        //     .then(rsp => {
        //         console.log("rsp:",rsp);

        //     })



        areaService.showBanner('Success', 'Remarks were added!: ' + this.adflexRef);
        getService(LayerService).clearLayer();
    }

    async parseXml2Js(responseValue: string): Promise<unknown> {
        return new Promise((resolve, reject) => {
            XML2JS.parseString(responseValue, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            })
        })
    }

    generateRmk(text: string) {
        let rmk = new remark;
        rmk.Type = "Historical";
        rmk.Text = text;
        this.createRmks.push(rmk);
    }

}
