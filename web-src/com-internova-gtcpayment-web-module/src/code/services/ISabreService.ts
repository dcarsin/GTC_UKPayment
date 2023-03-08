import { AuthTokenType } from "sabre-ngv-app/app/services/impl/AuthTokenType";
import { RestResponse } from "sabre-ngv-communication/interfaces/RestResponse";
import { HttpMethod } from "sabre-ngv-app/app/services/impl/HttpMethod";

export interface ISabreService {
    callSoapServiceAsync(request:string, actionCode:string, authTokenType: AuthTokenType, timeout:number) : Promise<string>;

    callRestServiceAsync(url:string, httpMethod:HttpMethod, authTokenType:AuthTokenType, payload:string, headers:string ): Promise<RestResponse>;
}