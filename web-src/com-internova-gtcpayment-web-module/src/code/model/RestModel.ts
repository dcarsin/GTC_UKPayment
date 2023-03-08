import {AbstractModel} from "sabre-ngv-app/app/AbstractModel";
import {AuthTokenType} from 'sabre-ngv-app/app/services/impl/AuthTokenType';
import {getService} from "../Context";
import {HttpMethod} from 'sabre-ngv-app/app/services/impl/HttpMethod';
import {RestApiService} from "sabre-ngv-communication/services/RestApiService";
import {RestResponse} from "sabre-ngv-communication/interfaces/RestResponse";

export class RestModel extends AbstractModel {

    sendRestRequest(url: string, httpMethod: HttpMethod, authTokenType: AuthTokenType, payload: string, headers: string): Promise<RestResponse> {
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
