import { Module } from 'sabre-ngv-core/modules/Module';
import { RedAppSidePanelConfig } from 'sabre-ngv-xp/configs/RedAppSidePanelConfig';
import { IAreaService } from 'sabre-ngv-app/app/services/impl/IAreaService';
import { ExtensionPointService } from 'sabre-ngv-xp/services/ExtensionPointService';
import { getService, registerService } from "./Context";
import { RedAppSidePanelButton } from 'sabre-ngv-redAppSidePanel/models/RedAppSidePanelButton';
import { CommandMessageReservationRs } from 'sabre-ngv-pos-cdm/reservation';
import { IReservationService } from 'sabre-ngv-reservation/services/IReservationService';
import { LayerService } from "sabre-ngv-core/services/LayerService";
import { RestModel } from './model/RestModel';
import { Gtc_Payment } from './views/Gtc_Payment';
import { SabreController } from './controllers/SabreController';
import { Utilitario } from './common/Utilitario';
import { ExternalService } from './services/ExternalService';
import { SabreService } from './services/SabreService';


export class Main extends Module {
    init(): void {
        super.init();
        registerService(SabreController);
        registerService(Utilitario);
        registerService(ExternalService);
        registerService(SabreService);
        const xp = getService(ExtensionPointService);

        const sidepanelConfig = new RedAppSidePanelConfig([
            new RedAppSidePanelButton('GTC UK Payment Process', 'btn btn-secondary side-panel-button redapp-web-rest redapp-web-rest-internal', () => this.openModalWithRest()),
        ]);

        xp.addConfig('redAppSidePanel', sidepanelConfig);
    }

    private async openModalWithRest() {
        const reservation: CommandMessageReservationRs = await getService(IReservationService).getReservation();
        const restModalOptions = {
            title: 'GTC UK Payment Process',
            actions: [
                {
                    className: 'app.common.views.Button',
                    caption: 'Cancel',
                    actionName: 'cancel',
                    type: 'secondary'
                },
                {
                    className: 'app.common.views.Button',
                    caption: "Continue",
                    actionName: 'next',
                    type: 'success'
                }
            ]
        };

        if (!reservation?.Data?.RecordLocators[0]['Id']) {
            const areaService: IAreaService = getService(IAreaService);
            areaService.showBanner('Error', 'There is no active PNR...');
            getService(LayerService).clearLayer();
        } else {
            getService(LayerService).showInModal(
                new Gtc_Payment({ model: new RestModel() }, reservation),
                restModalOptions,
                { display: 'areaView' });
        }
    }

}
