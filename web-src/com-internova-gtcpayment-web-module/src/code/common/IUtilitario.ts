export interface IUtilitario {
    GetValue(PlainText : string, regex : RegExp, pos: number) : string;
    GetValues(PlainText : string, regex : RegExp, pos: number): Array<string>;
    IsMatch(PlainText : string, Pattern : string) : boolean;
    GetXPathResult(response:string, expression:string, xpathNsResolver:any, type:number): XPathResult;
    RemoveNameSpace(request:string) : string;
    GetPayLoad(action : string) : Promise<string>;
    StringToXml(strXML : string): Document;
    DocumentToString(document:Document): string;
}