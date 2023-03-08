import { IUtilitario } from "./IUtilitario";
import { AbstractService } from "sabre-ngv-app/app/services/impl/AbstractService";
import { ExternalService } from "../services/ExternalService";
import { XmlPayLoads } from "./XmlPayLoads";
import { getService, cf, context } from "../Context";

export class Utilitario extends AbstractService implements IUtilitario {
    static SERVICE_NAME: string = "com-internova-gtcpayment-web-module-Utilitario";

    GetPayLoad(action: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const pl: string = XmlPayLoads.items[action];
            // console.log("Payload "+action,":",pl);            
            if (pl && pl.length) {
                resolve(pl);
            } else {
                reject("");
            }
        })
    }

    GetXPathResult(response: string, expression: string, xpathNsResolver: any, type: number): XPathResult {
        var doc = new DOMParser().parseFromString(response, 'text/xml');
        var result = doc.evaluate(expression, doc, xpathNsResolver, type, null);
        return result;
    }

    IsMatch(PlainText: string, Pattern: string): boolean {
        let rg = new RegExp(Pattern);
        return rg.test(PlainText);
    }

    GetValue(PlainText: string, regex: RegExp, pos: number): string {
        let returnValue: string = "";
        let m;

        while ((m = regex.exec(PlainText)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            m.forEach((match, groupIndex) => {
                if (groupIndex === pos) {
                    returnValue = match;
                }
            });
        }

        return returnValue
    }

    GetValues(PlainText: string, regex: RegExp, pos: number): Array<string> {
        let values = [];
        let m;

        while ((m = regex.exec(PlainText)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            m.forEach((match, groupIndex) => {
                if (groupIndex === pos) {
                    values.push(match);
                }
            });
        }
        return values;
    }

    RemoveNameSpace(request: string): string {
        request = request.replace(/xmlns=\"(.*?)\"/g, '');
        return request;
    }

    GetPayLoadInfo(action: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            getService(ExternalService).sendRequest('GET', action)
                .then(function (resp) {
                    // console.log(resp);
                    resolve(resp);
                })
                .catch(function (err) {
                    console.error('err.statusText:', err.statusText);
                    reject(err);
                });
        })
    }

    StringToXml(strXML: string): Document {
        var doc = new DOMParser().parseFromString(strXML, "text/xml");
        return doc;
    }

    DocumentToString(document: Document): string {
        var returnValue = new XMLSerializer().serializeToString(document)
        return returnValue;
    }

}