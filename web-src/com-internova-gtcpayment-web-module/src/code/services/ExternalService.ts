import { IExternalService } from "./IExternalService";

import { AbstractService } from "sabre-ngv-app/app/services/impl/AbstractService";
export class ExternalService extends AbstractService implements IExternalService {
    static SERVICE_NAME : string = "com-internova-gtcpayment-web-module-ExternalService";
    sendRequest(method, url): Promise<string>  {
        return new Promise<string>(function (resolve, reject) {
          var xhr = new XMLHttpRequest();
          xhr.open(method, url);
          xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
              resolve(xhr.response);
            } else {
              reject({
                status: this.status,
                statusText: xhr.statusText
              });
            }
          };
          xhr.onerror = function () {
            reject({
              status: this.status,
              statusText: xhr.statusText
            });
          };
          xhr.send();
        });
      }
}