import { CommandMessageBasicRs,CommandMessageRq } from "sabre-ngv-pos-cdm/commsg";
import { remark } from "../model/remark";

export interface ISabreController {
    RemarkUpdate(listRemarks: Array<remark>): Promise<boolean>;
    SendCommandAsync(format : string) : Promise<boolean>;
    SendCommandAsyncRs(format: string): Promise<string> ;
    buildRequestGetReservation(pnr: string): Promise<boolean>;
    buildRequestAddRemark(listRemarks: Array<remark>): Promise<boolean>;
    SendCommandMessage(payload: string, showRq:boolean, showRs:boolean): Promise<CommandMessageBasicRs>;
    AddRemarksAsync(remarks:Array<remark>): Promise<boolean>;
    SendCommandSync(format : string) : string;
    InputValidator(id: string): void;     
}