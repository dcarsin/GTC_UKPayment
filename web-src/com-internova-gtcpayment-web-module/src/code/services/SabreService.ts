import { ISabreService } from "./ISabreService";
import { AbstractService } from "sabre-ngv-app/app/services/impl/AbstractService";
import { AuthTokenType } from "sabre-ngv-app/app/services/impl/AuthTokenType";
import { ISoapApiService } from "sabre-ngv-communication/interfaces/ISoapApiService";
import { getService } from "../Context";
import { SrwSyncApi } from "sabre-ngv-app/app/services/impl/SrwSyncApi";
import { SrwAsyncApi } from "sabre-ngv-app/app/services/impl/SrwAsyncApi";
import { HttpMethod } from "sabre-ngv-app/app/services/impl/HttpMethod";
import { RestResponse } from "sabre-ngv-communication/interfaces/RestResponse";
import { RestApiService } from "sabre-ngv-communication/services/RestApiService";

export class SabreService extends AbstractService implements ISabreService {
    static SERVICE_NAME: string = "com-internova-gtcpayment-web-module-SabreService";

    callSoapServiceAsync(payload: string, action: string, authTokenType: AuthTokenType, timeout: number): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            // tslint:disable-next-line: no-unsafe-any
            let soapSvc: ISoapApiService = getService(ISoapApiService);
            let rq_ = { action, payload, authTokenType, timeout };

            // tslint:disable-next-line: no-unsafe-any
            console.log("rq_:",rq_);
            soapSvc.callSws(rq_)            
                .then(async (response) => {
                    console.log("async: response", response);
                    // tslint:disable-next-line: no-unsafe-any
                    resolve(response.value);
                })
                .catch(error => {
                    console.log("callSoapServiceAsync error: ",error);                    
                    reject(error);
                })
        });
    }
    
    callSoapServiceSync(svcRQ: string, svcActionCode: string): string {
        let soapSvc = getService(SrwSyncApi);
        // console.log("soapSvc:",soapSvc);
        
        let response = "";
        try {
            response = soapSvc.sws(svcRQ, svcActionCode);
            // console.log("soapSvc-respose: ", response);
            return response;
        }
        catch (ex) {
            // console.log(ex);
        }
    }

    callRestServiceAsync(url: string, httpMethod: HttpMethod, authTokenType: AuthTokenType, payload: string, headers: string): Promise<RestResponse> {
        // tslint:disable-next-line: no-unsafe-any
        return getService(RestApiService).send(
            {
                httpMethod: httpMethod,
                url: url,
                authTokenType: authTokenType,
                payload: payload,
                headers: headers
            }
        )
    }





}