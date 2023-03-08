export interface IExternalService {
    sendRequest(method, url): Promise<string>;
}