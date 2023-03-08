import { ISabreController } from "./ISabreController";
import { AbstractService } from "sabre-ngv-app/app/services/impl/AbstractService";
import { getService, cf, context } from "../Context";
import { SabreService } from "../services/SabreService";
import { IReservationService } from "sabre-ngv-reservation/services/IReservationService";
import { CommandMessageReservationRs } from "sabre-ngv-pos-cdm/reservation";
import { PnrPublicService } from "sabre-ngv-app/app/services/impl/PnrPublicService";
import { AgentProfileService } from "sabre-ngv-app/app/services/impl/AgentProfileService";
import { CommandMessageBasicRs, CommandMessageRq } from "sabre-ngv-pos-cdm/commsg";
import { ICommandMessageService } from "sabre-ngv-commsg/services/ICommandMessageService";
import { Utilitario } from "../common/Utilitario";
import { remark } from "../model/remark";

export class SabreController extends AbstractService implements ISabreController {
    static SERVICE_NAME: string = "com-internova-gtcpayment-web-module-SabreController";

    buildRequestGetReservation(pnr: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let request = this.buildGetReservationRQ(pnr, "GetReservationRQ");
            request
                .then(resp => {
                    getService(SabreService).callSoapServiceAsync(resp, "GetReservationRQ", 'SESSION', 10000)
                        .then((resolver) => {
                            console.log("resolver GetReservationRQ", resolver);
                            resolve(true);
                        })
                        .catch(error => {
                            reject(error);
                        });
                })
                .catch(error => {
                })
        });
    }

    buildRequestAddRemark(listRemarks: Array<remark>): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            console.log("listRemarks on buildRequestAddRemark", listRemarks);

            let requestRmk = this.buildAddRemarkRQ(listRemarks, "AddRemarkLLSRQ");
            requestRmk
                .then(resp => {
                    getService(SabreService).callSoapServiceAsync(resp, "AddRemarkLLSRQ", 'SESSION', 10000)
                        .then((resolver) => {
                            console.log("resolver AddRemarkLLSRQ", resolver);
                            resolve(true);
                        })
                        .catch(error => {
                            reject(error);
                        });
                })
                .catch(error => {
                })
        });
    }

    RemarkUpdate(listRemarks: Array<remark>): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let requestRmk = this.buildRemarkUpdateRQ(listRemarks, "UpdateReservationRQrmk");
            requestRmk
                .then(resp => {
                    getService(SabreService).callSoapServiceAsync(resp, "UpdateReservationRQ", 'SESSION', 10000)
                        .then((resolver) => {
                            console.log("resolver UpdateReservationRQ", resolver);
                            resolve(true);
                        })
                        .catch(error => {
                            reject(error);
                        });
                })
                .catch(error => {
                })
        });
    }

    SendCommandAsync(format: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            // console.log("Async entry:", format);
            let requestSabreCommand = this.buildRequestSabreCommand(format, "SabreCommandLLSRQ");
            requestSabreCommand
                .then(resp => {
                    getService(SabreService).callSoapServiceAsync(resp, "SabreCommandLLSRQ", 'SESSION', 10000)
                        .then((resolver) => {
                            // console.log(resolver);
                            resolve(true);
                        })
                        .catch(error => {
                            reject(error);
                        });
                })
                .catch(error => {
                    // console.log(error);
                })
        });
    }

    SendCommandAsyncRs(format: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            // console.log("Async entry:", format);
            let requestSabreCommand = this.buildRequestSabreCommand(format, "SabreCommandLLSRQ");
            requestSabreCommand
                .then(resp => {
                    console.log("resp:", resp);

                    getService(SabreService).callSoapServiceAsync(resp, "SabreCommandLLSRQ", 'SESSION', 10000)
                        .then((resolver) => {
                            // console.log("resolver:", resolver);

                            let utilitario_ = getService(Utilitario);
                            // console.log("utilitario_:", utilitario_);

                            var document = utilitario_.StringToXml(resolver);
                            // console.log("document in xml:", document);

                            var commandRs = document.getElementsByTagName("Response");
                            resolve(commandRs[0].childNodes[0].nodeValue);
                        })
                        .catch(error => {
                            reject(error);
                        });
                })
                .catch(error => {
                    // console.log(error);
                })
        });
    }

    SendCommandSync(format: string): string {                                              //si no está 360 no lo detecta    
        // console.log('entry', format)
        let responseMessage: string = null;
        let requestSabreCommandString = this.buildRequestSendCommand(format);                   //llamamos al metodo con el this                                                              
        // console.log('rq', requestSabreCommandString)
        if (requestSabreCommandString != null) {
            responseMessage = getService(SabreService).callSoapServiceSync(requestSabreCommandString, "SabreCommandLLSRQ")
            // console.log('rs', responseMessage)
            if (responseMessage != null) {
                let rspCommand = JSON.parse(responseMessage);                                   //parseamos la respuesta en una variable de tipo JSON            
                responseMessage = "";
                if (rspCommand.response != null && rspCommand.response.success) {
                    responseMessage = rspCommand.response.payload.responseText;                 //devuelve el SabreCommandRS
                    // console.log("responseMessage:",responseMessage);                    
                }
                return responseMessage;
            }
        }
        return responseMessage;
    }

    SendCommandMessage(payload: string, showRq: boolean, showRs: boolean): Promise<CommandMessageBasicRs> {
        let iCmdMsgService = getService(ICommandMessageService);
        return iCmdMsgService.send({
            rq: payload,
            showRq: showRq,
            showRs: showRs
        });
    }

    /**
 *
 *
 * @private
 * @param {string} refNode
 * @param {string} refAttr
 * @param {Element} actualNode
 * @return {*}  {string}
 * @memberof SabreController
 */
    private checkNodeValues(refNode: string, refAttr: string, actualNode: Element): string {
        let dato = "";
        if (actualNode.localName == refNode && actualNode.hasAttributes) {
            let attributes = actualNode.attributes;
            for (let index = 0; index < attributes.length; index++) {
                if (attributes[index].name == refAttr) {
                    dato = attributes[index].value;
                    // // console.log("refPoint: " + attributes[index].name + "  :: " + attributes[index].value);                
                }
            }
        }
        return dato;
    }
    /**
*
*
* @private
* @param {Element} nodeFather
* @param {string} refAttr
* @param {string} refPoint
* @param {string} nodeFather2
* @return {*}  {string[][]}
* @memberof SabreController
*/
    private GetFinalValue(nodeFather: Element, refAttr: string, refPoint: string, nodeFather2: string): string[][] {
        let arrayAttrs: string[][] = new Array();
        arrayAttrs.push([refAttr, refPoint]);
        if (nodeFather2 == "*") {
            arrayAttrs.push(["segtype", nodeFather.localName]);
        }
        var childNodes = nodeFather.childNodes;
        for (var j = 0; j < childNodes.length; j++) {
            let element_childNodes = <Element>childNodes[j];
            if (element_childNodes.localName) {
                let localName = element_childNodes.localName;
                let value = element_childNodes.textContent;
                arrayAttrs.push([localName, value]);
            }
        }
        // // console.log("GetFinalValue: ");
        // // console.log(arrayAttrs);
        return arrayAttrs;
    }
    /**
     *
     *
    * @private
    * @param {string} pnrLocatorValue
    * @param {string} pattern
    * @param {boolean} IsRemoveNS
    * @return {*}  {Node}
    * @memberof SabreController
    */
    private GetElement(pnrLocatorValue: string, pattern: string, IsRemoveNS: boolean): Node {
        let returnElement: Node = null;
        if (IsRemoveNS) { pnrLocatorValue = getService(Utilitario).RemoveNameSpace(pnrLocatorValue); }
        var parser = new DOMParser();
        var doc1 = parser.parseFromString(pnrLocatorValue, "text/xml");
        var childNodes = doc1.childNodes;
        let element_childNodes = <Element>childNodes[0];    //first line on RS        
        if (element_childNodes.hasAttributes) {
            let attributes = element_childNodes.attributes;
            let found = false;
            for (let index = 0; index < attributes.length; index++) {
                var temp = attributes[index].name.split(":");
                if (temp[0] == 'xmlns' && !found) {
                    var xmlns = attributes[index].value;
                    found = true;
                }
            }
        }
        // console.log("xmlns: " + xmlns);

        function resolverNS(): string { return xmlns; }
        var result = getService(Utilitario).GetXPathResult(pnrLocatorValue, pattern, resolverNS, 0);
        // var result = getService(Utilitario).GetXPathResult(3, pnrLocatorValue, pattern, resolverNS, 0);
        returnElement = result.iterateNext();
        return returnElement;
    }

    AddRemarksAsync(remarks: Array<remark>): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let requestRemark = this.buildRequestAddRemark(remarks);
            // console.log("requestRemark: ", requestRemark);

            // requestRemark
            //     .then(resp => {
            //         getService(SabreService).callSoapServiceAsync(resp, "AddRemarkLLSRQ", 'SESSION', 10000)
            //             .then((resolver) => {
            //                 // console.log(resolver);
            //                 resolve(true);
            //             })
            //             .catch(error => {
            //                 reject(error);
            //             });
            //     })
            //     .catch(error => {
            //         // console.log(error);
            //     });
        });
    }

    private buildRequestReservation(action: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            let utilitario_payload = getService(Utilitario).GetPayLoad(action);
            utilitario_payload.then(rsp => {
                resolve(rsp);
            })
                .catch(error => {
                    // console.log(error);
                    reject(error);
                })
        })
    }

    private buildAddRemarkRQ(listRemarks: Array<remark>, action: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            let returnValue: string = null;
            console.log("listRemarks on buildAddRemarkRQ", listRemarks);
            let utilitario_ = getService(Utilitario);
            utilitario_.GetPayLoad(action)
                .then(rsp => {
                    var document = utilitario_.StringToXml(rsp);
                    console.log("StringToXml", document);

                    var element = document.getElementsByTagName("RemarkInfo");
                    if (listRemarks != null && listRemarks.length > 0) {
                        for (let rmk of listRemarks) {
                            console.log("rmk", rmk);

                            let element_var = element[0].appendChild(document.createElement("Remark"));
                            element_var.setAttribute("Type", rmk.Type);
                            if (rmk.Code) {
                                element_var.setAttribute("Code", rmk.Code);
                            }
                            if (rmk.SegNum) {
                                element_var.setAttribute("SegmentNumber", rmk.SegNum);
                            }
                            let text = element_var.appendChild(document.createElement('Text'));
                            text.textContent = rmk.Text;
                        }
                    }
                    returnValue = utilitario_.DocumentToString(document);
                    returnValue = returnValue.replace(/xmlns=""/g, '')
                    resolve(returnValue);
                })
                .catch(error => {
                    // console.log("error buildCreateReservationRQ:", error);
                    reject(error);
                });
        })
    }

    private buildRemarkUpdateRQ(listRemarks: Array<remark>, action: string): Promise<string> {

        return new Promise<string>((resolve, reject) => {
            let returnValue: string = null;
            let utilitario_ = getService(Utilitario);
            utilitario_.GetPayLoad(action)
                .then(rsp => {
                    var document = utilitario_.StringToXml(rsp);
                    var element = document.getElementsByTagName("ReservationUpdateItem");
                    if (listRemarks != null && listRemarks.length > 0) {
                        for (let rmk of listRemarks) {
                            let element_var = element[0].appendChild(document.createElement("RemarkUpdate"));
                            element_var.setAttribute("id", rmk.Id);
                            element_var.setAttribute("type", "INVOICE");
                            element_var.setAttribute("op", "U");
                            let text = element_var.appendChild(document.createElement('RemarkText'));
                            text.textContent = rmk.Text;
                        }
                    }
                    returnValue = utilitario_.DocumentToString(document);
                    returnValue = returnValue.replace(/xmlns=""/g, '')
                    resolve(returnValue);
                })
                .catch(error => {
                    // console.log("error buildCreateReservationRQ:", error);
                    reject(error);
                });
        })
    }

    private buildRequestSabreCommand(format: string, action: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            let returnValue: string = null;
            let utilitario_ = getService(Utilitario);
            utilitario_.GetPayLoad(action)
                .then(rsp => {
                    if (format != null) {
                        var document = utilitario_.StringToXml(rsp);
                        var element = document.getElementsByTagName("HostCommand");
                        element[0].textContent = format;
                        console.log("resolver despues convertir", document.documentElement.innerHTML);
                        returnValue = utilitario_.DocumentToString(document);
                        resolve(returnValue);
                    }
                    else {
                        reject()
                    }
                })
                .catch(error => {
                    // console.log(error);
                    reject(error);
                })
        });
    }

    private buildRequestSendCommand(format: string): string {                                  // Metodo    //estructura de request del sabre command  
        let request: string = '<SabreCommandLLSRQ xmlns="http://webservices.sabre.com/sabreXML/2003/07" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" TimeStamp="2014-03-04T14:00:00" Version="1.8.1">' +
            '<Request Output="SCREEN" CDATA="false"><HostCommand>' + format + '</HostCommand></Request>' +
            '</SabreCommandLLSRQ>';
        return request;
    }

    private buildGetReservationRQ(pnr: string, action: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            let returnValue: string = null;
            let utilitario_ = getService(Utilitario);
            utilitario_.GetPayLoad(action)
                .then(rsp => {
                    var document = utilitario_.StringToXml(rsp);
                    var element = document.getElementsByTagName("Locator");
                    element[0].textContent = pnr;
                    returnValue = utilitario_.DocumentToString(document);
                    returnValue = returnValue.replace(/xmlns=""/g, '')
                    console.log("returnValue",returnValue);                    
                    resolve(returnValue);
                })
                .catch(error => {
                    // console.log("error buildCreateReservationRQ:", error);
                    reject(error);
                });
        })
    }

    //to validate every input and error if needed
    InputValidator(id: string): void {
        // console.log("id que va a valorar si esta empty: ",id);

        let value = (<HTMLInputElement>document.getElementById(id)).value;
        // console.log("value: ", value);        
        if (!value) {
            (<HTMLInputElement>document.getElementById(id + "Div")).classList.add("has-error");
            (<HTMLInputElement>document.getElementById(id + "Error")).innerText = "Field cannot be empty or blank";
        }
        else {
            (<HTMLInputElement>document.getElementById(id + "Div")).classList.remove("has-error");
            (<HTMLInputElement>document.getElementById(id + "Error")).innerText = "";
        }
    }
}
