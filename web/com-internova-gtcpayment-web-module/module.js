System.registerDynamic("com-internova-gtcpayment-web-module/_", [], false, function (require, exports, module) {
/* com-internova-gtcpayment-web-module */ 


});
System.registerDynamic("com-internova-gtcpayment-web-module/_.js", ["com-internova-gtcpayment-web-module/_"], false, function (require, exports) {Object.assign(exports, require("com-internova-gtcpayment-web-module/_"))});
System.registerDynamic("com-internova-gtcpayment-web-module/common/IUtilitario", [], false, function (require, exports, module) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


});
System.registerDynamic("com-internova-gtcpayment-web-module/common/IUtilitario.js", ["com-internova-gtcpayment-web-module/common/IUtilitario"], false, function (require, exports) {Object.assign(exports, require("com-internova-gtcpayment-web-module/common/IUtilitario"))});
System.registerDynamic("com-internova-gtcpayment-web-module/common/Utilitario", ["sabre-ngv-app/app/services/impl/AbstractService","com-internova-gtcpayment-web-module/services/ExternalService","com-internova-gtcpayment-web-module/common/XmlPayLoads","com-internova-gtcpayment-web-module/Context"], false, function (require, exports, module) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utilitario = void 0;
var AbstractService_1 = require("sabre-ngv-app/app/services/impl/AbstractService");
var ExternalService_1 = require("../services/ExternalService");
var XmlPayLoads_1 = require("./XmlPayLoads");
var Context_1 = require("../Context");
var Utilitario = /** @class */ (function (_super) {
    __extends(Utilitario, _super);
    function Utilitario() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Utilitario.prototype.GetPayLoad = function (action) {
        return new Promise(function (resolve, reject) {
            var pl = XmlPayLoads_1.XmlPayLoads.items[action];
            // console.log("Payload "+action,":",pl);            
            if (pl && pl.length) {
                resolve(pl);
            }
            else {
                reject("");
            }
        });
    };
    Utilitario.prototype.GetXPathResult = function (response, expression, xpathNsResolver, type) {
        var doc = new DOMParser().parseFromString(response, 'text/xml');
        var result = doc.evaluate(expression, doc, xpathNsResolver, type, null);
        return result;
    };
    Utilitario.prototype.IsMatch = function (PlainText, Pattern) {
        var rg = new RegExp(Pattern);
        return rg.test(PlainText);
    };
    Utilitario.prototype.GetValue = function (PlainText, regex, pos) {
        var returnValue = "";
        var m;
        while ((m = regex.exec(PlainText)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            m.forEach(function (match, groupIndex) {
                if (groupIndex === pos) {
                    returnValue = match;
                }
            });
        }
        return returnValue;
    };
    Utilitario.prototype.GetValues = function (PlainText, regex, pos) {
        var values = [];
        var m;
        while ((m = regex.exec(PlainText)) !== null) {
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            m.forEach(function (match, groupIndex) {
                if (groupIndex === pos) {
                    values.push(match);
                }
            });
        }
        return values;
    };
    Utilitario.prototype.RemoveNameSpace = function (request) {
        request = request.replace(/xmlns=\"(.*?)\"/g, '');
        return request;
    };
    Utilitario.prototype.GetPayLoadInfo = function (action) {
        return new Promise(function (resolve, reject) {
            (0, Context_1.getService)(ExternalService_1.ExternalService).sendRequest('GET', action)
                .then(function (resp) {
                // console.log(resp);
                resolve(resp);
            })
                .catch(function (err) {
                console.error('err.statusText:', err.statusText);
                reject(err);
            });
        });
    };
    Utilitario.prototype.StringToXml = function (strXML) {
        var doc = new DOMParser().parseFromString(strXML, "text/xml");
        return doc;
    };
    Utilitario.prototype.DocumentToString = function (document) {
        var returnValue = new XMLSerializer().serializeToString(document);
        return returnValue;
    };
    Utilitario.SERVICE_NAME = "com-internova-gtcpayment-web-module-Utilitario";
    return Utilitario;
}(AbstractService_1.AbstractService));
exports.Utilitario = Utilitario;


});
System.registerDynamic("com-internova-gtcpayment-web-module/common/Utilitario.js", ["com-internova-gtcpayment-web-module/common/Utilitario"], false, function (require, exports) {Object.assign(exports, require("com-internova-gtcpayment-web-module/common/Utilitario"))});
System.registerDynamic("com-internova-gtcpayment-web-module/common/XmlPayLoads", [], false, function (require, exports, module) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlPayLoads = void 0;
var XmlPayLoads = /** @class */ (function () {
    function XmlPayLoads() {
    }
    XmlPayLoads.items = {
        "AddAccountingLineLLSRQ": "<AddAccountingLineRQ TimeStamp=\"2015-04-09T14:30:00-06:00\" Version=\"2.0.0\">\n  <AirAccountingLines>\n    <InteractiveElectronicTicket>\n      <FOP_One Type=\"CK\"/>\n      <ItinTotalFare>\n        <BaseFare Amount=\"0.00\"/>\n        <Commission Amount=\"0.00\"/>\n        <Taxes>\n          <Tax Amount=\"0.00\"/>\n        </Taxes>\n      </ItinTotalFare>\n      <PersonName NameNumber=\"1.1\">\n        <GivenName></GivenName>\n        <Surname></Surname>\n      </PersonName>\n      <Ticketing eTicketNumber=\"28282828280\" NumDocs=\"1\" Tariff=\"D\"/>\n      <Type Info=\"ONE\"/>\n      <VendorPrefs>\n        <Airline Code=\"DL\"/>\n      </VendorPrefs>\n    </InteractiveElectronicTicket>\n  </AirAccountingLines>\n</AddAccountingLineRQ>",
        "UpdateReservationRQCar": "<UpdateReservationRQ xmlns=\"http://webservices.sabre.com/pnrbuilder/v1_19\"\nxmlns:ns2=\"http://services.sabre.com/res/or/v1_14\" Version=\"1.19.0\">\n<ReservationUpdateList>\n  <ReservationUpdateItem>\n    <ProductUpdate op=\"C\">\n      <Product>\n        <ns2:ProductDetails endDateTime=\"\" startDateTime=\"\" startPoint=\"\" statusCode=\"GK\" vendorCode=\"\">\n          <ns2:ProductName type=\"CAR\"/>\n          <ns2:Vehicle>\n            <ns2:ConfirmationNumber></ns2:ConfirmationNumber>\n            <ns2:VehicleRentalCore>\n              <ns2:DropOffLocationDetails locationCode=\"\"/>\n              <ns2:LocationDetails locationCode=\"\"/>\n            </ns2:VehicleRentalCore>\n            <ns2:VehicleVendorAvail>\n              <ns2:VehicleResCore>\n                <ns2:PricedEquipment equipmentType=\"\" quantity=\"1\"/>\n                <ns2:RentalRate>\n                  <ns2:Billing reference=\"\"/>\n                  <ns2:Client>\n                    <ns2:ID></ns2:ID>\n                  </ns2:Client>\n                  <ns2:ServiceInformation>\n                      <ns2:Text></ns2:Text>\n                  </ns2:ServiceInformation>\n                </ns2:RentalRate>\n                <ns2:Charge dropOffCharge=\"\" typeOfGuarantee=\"\" />\n              </ns2:VehicleResCore>\n            </ns2:VehicleVendorAvail>\n            <ns2:PricingElements>\n            </ns2:PricingElements>\n          </ns2:Vehicle>\n        </ns2:ProductDetails>\n      </Product>\n    </ProductUpdate>\n  </ReservationUpdateItem>\n</ReservationUpdateList>\n</UpdateReservationRQ>",
        "UpdateReservationRQrmk": "<UpdateReservationRQ xmlns=\"http://webservices.sabre.com/pnrbuilder/v1_19\" xmlns:or=\"http://services.sabre.com/res/or/v1_12\" Version=\"1.19.0\" EchoToken=\"RK/ENV/PXGSSDMLT-60703\">\n<RequestType>Stateful</RequestType>\n  <ReservationUpdateList>\n      <ReservationUpdateItem>\n      </ReservationUpdateItem>\n  </ReservationUpdateList>\n</UpdateReservationRQ>",
        "UpdateReservationRQHotel": "<UpdateReservationRQ xmlns=\"http://webservices.sabre.com/pnrbuilder/v1_19\"\nxmlns:ns2=\"http://services.sabre.com/res/or/v1_14\" Version=\"1.19.0\">\n  <ReservationUpdateList>\n    <ReservationUpdateItem>\n      <ProductUpdate op=\"C\">\n        <Product>\n          <ns2:ProductDetails>\n            <ns2:ProductName type=\"HHT\"/>\n            <ns2:Hotel>\n              <ns2:Reservation>\n                <ns2:LineStatus>GK</ns2:LineStatus>\n                <ns2:SpecialPrefs>\n                </ns2:SpecialPrefs>\n                <ns2:RoomType>\n                  <ns2:RoomTypeCode></ns2:RoomTypeCode>\n                  <ns2:NumberOfUnits></ns2:NumberOfUnits>\n                </ns2:RoomType>\n                <ns2:RoomRates>\n                  <ns2:AmountBeforeTax></ns2:AmountBeforeTax>\n                  <ns2:CurrencyCode></ns2:CurrencyCode>\n                </ns2:RoomRates>\n                <ns2:TimeSpanStart></ns2:TimeSpanStart>\n                <ns2:TimeSpanEnd></ns2:TimeSpanEnd>\n                <ns2:Guarantee>\n                </ns2:Guarantee>\n                <ns2:ChainCode></ns2:ChainCode>\n                <ns2:HotelCityCode></ns2:HotelCityCode>\n                <ns2:HotelName></ns2:HotelName>\n              </ns2:Reservation>\n              <ns2:AdditionalInformation>\n                <ns2:ConfirmationNumber></ns2:ConfirmationNumber>\n                <ns2:Address>\n                </ns2:Address>\n                <ns2:ContactNumbers>\n                  <ns2:PhoneNumber></ns2:PhoneNumber>\n                </ns2:ContactNumbers>\n              </ns2:AdditionalInformation>\n            </ns2:Hotel>\n          </ns2:ProductDetails>\n        </Product>\n      </ProductUpdate>\n    </ReservationUpdateItem>\n  </ReservationUpdateList>\n</UpdateReservationRQ>",
        "AddRemarkLLSRQ": "\n<AddRemarkRQ xmlns=\"http://webservices.sabre.com/sabreXML/2011/10\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" ReturnHostCommand=\"true\" Version=\"2.1.1\">\n<RemarkInfo>\n</RemarkInfo>\n</AddRemarkRQ>",
        "EPS_EXT_ProfileReadRQ": "        \n<Sabre_OTA_ProfileReadRQ xmlns=\"http://www.sabre.com/eps/schemas\"\nxmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://www.sabre.com/eps/schemas        \n        ..schemasWSDLSabre_OTA_ProfileReadRQ.xsd\" Version=\"6.55\">\n<Profile>\n  <TPA_Identity UniqueID=\"229281197\" ClientCode=\"TN\" DomainID=\"KA0J\" ClientContextCode=\"MYS\">\n  </TPA_Identity>\n</Profile>\n</Sabre_OTA_ProfileReadRQ>",
        "eTicketCouponLLSRQ": "\n<eTicketCouponRQ xmlns=\"http://webservices.sabre.com/sabreXML/2011/10\" Version=\"2.0.0\" ReturnHostCommand=\"true\">\n<Ticketing eTicketNumber=\"2204898351580\"/>\n</eTicketCouponRQ>",
        "GetReservationRQ_WithSession": "\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"\nxmlns:eb=\"http://www.ebxml.org/namespaces/messageHeader\"\nxmlns:xlink=\"http://www.w3.org/1999/xlink\"\nxmlns:xsd=\"http://www.w3.org/1999/XMLSchema\">\n<SOAP-ENV:Header>\n  <eb:MessageHeader SOAP-ENV:mustUnderstand=\"1\" eb:version=\"1.0\">\n    <eb:From>\n      <eb:PartyId type=\"urn:x12.org:IO5:01\">999999</eb:PartyId>\n    </eb:From>\n    <eb:To>\n      <eb:PartyId type=\"urn:x12.org:IO5:01\">123123</eb:PartyId>\n    </eb:To>\n    <eb:CPAId>U511</eb:CPAId>\n    <eb:ConversationId>webservices.support@sabre.com</eb:ConversationId>\n    <eb:Service eb:type=\"OTA\">Air</eb:Service>\n    <eb:Action>GetReservationRQ</eb:Action>\n    <eb:MessageData>\n      <eb:MessageId>1000</eb:MessageId>\n      <eb:Timestamp>2016-12-30T05:25:32z</eb:Timestamp>\n    </eb:MessageData>\n  </eb:MessageHeader>\n  <wsse:Security xmlns:wsse=\"http://schemas.xmlsoap.org/ws/2002/12/secext\"\n    xmlns:wsu=\"http://schemas.xmlsoap.org/ws/2002/12/utility\">\n    <wsse:BinarySecurityToken></wsse:BinarySecurityToken>\n  </wsse:Security>\n</SOAP-ENV:Header>\n<SOAP-ENV:Body>\n  <GetReservationRQ Version=\"1.19.0\"\n    xmlns=\"http://webservices.sabre.com/pnrbuilder/v1_19\">\n    <Locator></Locator>\n    <RequestType>Stateful</RequestType>\n    <ReturnOptions PriceQuoteServiceVersion=\"3.2.0\">\n      <SubjectAreas>\n        <SubjectArea>FULL</SubjectArea>\n        <SubjectArea>PRICE_QUOTE</SubjectArea>\n      </SubjectAreas>\n    </ReturnOptions>\n  </GetReservationRQ>\n</SOAP-ENV:Body>\n</SOAP-ENV:Envelope>",
        "GetReservationRQ": "\n<GetReservationRQ Version=\"1.19.0\"\nxmlns=\"http://webservices.sabre.com/pnrbuilder/v1_19\">\n<Locator>OSUICI</Locator>\n<RequestType>Stateful</RequestType>\n<ReturnOptions>\n  <ViewName>VaDefaultWithPq</ViewName>\n  <ResponseFormat>STL</ResponseFormat>\n</ReturnOptions>\n</GetReservationRQ>",
        "IgnoreTransactionLLSRQ_WithSession": "\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"\nxmlns:eb=\"http://www.ebxml.org/namespaces/messageHeader\"\nxmlns:xlink=\"http://www.w3.org/1999/xlink\"\nxmlns:xsd=\"http://www.w3.org/1999/XMLSchema\">\n<SOAP-ENV:Header>\n  <eb:MessageHeader SOAP-ENV:mustUnderstand=\"1\" eb:version=\"1.0\">\n    <eb:From>\n      <eb:PartyId type=\"urn:x12.org:IO5:01\">999999</eb:PartyId>\n    </eb:From>\n    <eb:To>\n      <eb:PartyId type=\"urn:x12.org:IO5:01\">123123</eb:PartyId>\n    </eb:To>\n    <eb:CPAId>KA0J</eb:CPAId>\n    <eb:ConversationId>webservices.support@sabre.com</eb:ConversationId>\n    <eb:Service eb:type=\"OTA\">IgnoreTransactionLLSRQ</eb:Service>\n    <eb:Action>IgnoreTransactionLLSRQ</eb:Action>\n    <eb:MessageData>\n      <eb:MessageId>1000</eb:MessageId>\n      <eb:Timestamp>2016-12-30T05:25:32z</eb:Timestamp>\n    </eb:MessageData>\n  </eb:MessageHeader>\n  <wsse:Security xmlns:wsse=\"http://schemas.xmlsoap.org/ws/2002/12/secext\"\n    xmlns:wsu=\"http://schemas.xmlsoap.org/ws/2002/12/utility\">\n    <wsse:BinarySecurityToken></wsse:BinarySecurityToken>\n  </wsse:Security>\n</SOAP-ENV:Header>\n<SOAP-ENV:Body>\n  <IgnoreTransactionRQ ReturnHostCommand=\"true\" Version=\"2.0.0\"\n    xmlns=\"http://webservices.sabre.com/sabreXML/2011/10\"/>\n</SOAP-ENV:Body>\n</SOAP-ENV:Envelope>",
        "PassengerDetailsRQ_WithSession": "\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"\nxmlns:eb=\"http://www.ebxml.org/namespaces/messageHeader\"\nxmlns:xlink=\"http://www.w3.org/1999/xlink\"\nxmlns:xsd=\"http://www.w3.org/1999/XMLSchema\">\n<SOAP-ENV:Header>\n  <eb:MessageHeader SOAP-ENV:mustUnderstand=\"1\" eb:version=\"1.0\">\n    <eb:From>\n      <eb:PartyId type=\"urn:x12.org:IO5:01\">999999</eb:PartyId>\n    </eb:From>\n    <eb:To>\n      <eb:PartyId type=\"urn:x12.org:IO5:01\">123123</eb:PartyId>\n    </eb:To>\n    <eb:CPAId>KA0J</eb:CPAId>\n    <eb:ConversationId>webservices.support@sabre.com</eb:ConversationId>\n    <eb:Service eb:type=\"OTA\">PassengerDetailsRQ</eb:Service>\n    <eb:Action>PassengerDetailsRQ</eb:Action>\n    <eb:MessageData>\n      <eb:MessageId>1000</eb:MessageId>\n      <eb:Timestamp>2016-12-30T05:25:32z</eb:Timestamp>\n    </eb:MessageData>\n  </eb:MessageHeader>\n  <wsse:Security xmlns:wsse=\"http://schemas.xmlsoap.org/ws/2002/12/secext\"\n    xmlns:wsu=\"http://schemas.xmlsoap.org/ws/2002/12/utility\">\n    <wsse:BinarySecurityToken></wsse:BinarySecurityToken>\n  </wsse:Security>\n</SOAP-ENV:Header>\n<SOAP-ENV:Body>\n  <PassengerDetailsRQ xmlns=\"http://services.sabre.com/sp/pd/v3_4\" version=\"3.4.0\" ignoreOnError=\"false\" haltOnError=\"false\">\n    <MiscSegmentSellRQ>\n      <MiscSegment DepartureDateTime=\"12-21\" InsertAfter=\"0\" NumberInParty=\"1\" Status=\"GK\" Type=\"OTH\">\n        <OriginLocation LocationCode=\"FSG\"/>\n        <Text>TEST</Text>\n        <VendorPrefs>\n          <Airline Code=\"XX\"/>\n        </VendorPrefs>\n      </MiscSegment>\n    </MiscSegmentSellRQ>\n    <PostProcessing haltOnInvalidMCT=\"false\" ignoreAfter=\"true\" unmaskCreditCard=\"false\">\n      <RedisplayReservation waitInterval=\"100\" returnExtendedPriceQuote=\"false\"/>\n      <EndTransactionRQ shouldCheckRefId=\"true\">\n        <EndTransaction Ind=\"true\"/>\n        <Source ReceivedFrom=\"SWS VISTAJET\"/>\n      </EndTransactionRQ>\n      <QueuePlaceRQ NumResponses=\"5\">\n        <QueueInfo>\n          <QueueIdentifier Number=\"400\" PrefatoryInstructionCode=\"10\" PseudoCityCode=\"KA0J\"/>\n          <UniqueID ID=\"UDFJGZ\"/>\n        </QueueInfo>\n      </QueuePlaceRQ>\n    </PostProcessing>\n    <ProfileRQ>\n      <UniqueID id=\"CRHTL\"/>\n    </ProfileRQ>\n    <SpecialReqDetails>\n      <AddRemarkRQ>\n        <RemarkInfo>\n          <Remark Code=\"H\" Type=\"Alpha-Coded\">\n            <Text></Text>\n          </Remark>\n        </RemarkInfo>\n      </AddRemarkRQ>\n    </SpecialReqDetails>\n  </PassengerDetailsRQ>\n</SOAP-ENV:Body>\n</SOAP-ENV:Envelope>",
        "PassengerDetailsRQ": "\n<PassengerDetailsRQ xmlns=\"http://services.sabre.com/sp/pd/v3_4\" version=\"3.4.0\" ignoreOnError=\"false\" haltOnError=\"false\">\n<MiscSegmentSellRQ>\n  <MiscSegment DepartureDateTime=\"12-21\" InsertAfter=\"0\" NumberInParty=\"1\" Status=\"GK\" Type=\"OTH\">\n    <OriginLocation LocationCode=\"FSG\"/>\n    <Text>TEST</Text>\n    <VendorPrefs>\n      <Airline Code=\"XX\"/>\n    </VendorPrefs>\n  </MiscSegment>\n</MiscSegmentSellRQ>\n<PostProcessing haltOnInvalidMCT=\"false\" ignoreAfter=\"true\" unmaskCreditCard=\"false\">\n  <RedisplayReservation waitInterval=\"100\" returnExtendedPriceQuote=\"false\"/>\n  <EndTransactionRQ shouldCheckRefId=\"true\">\n    <EndTransaction Ind=\"true\"/>\n    <Source ReceivedFrom=\"SWS VISTAJET\"/>\n  </EndTransactionRQ>\n  <QueuePlaceRQ NumResponses=\"5\">\n    <QueueInfo>\n      <QueueIdentifier Number=\"400\" PrefatoryInstructionCode=\"10\" PseudoCityCode=\"KA0J\"/>\n      <UniqueID ID=\"UDFJGZ\"/>\n    </QueueInfo>\n  </QueuePlaceRQ>\n</PostProcessing>\n<ProfileRQ>\n  <UniqueID id=\"CRHTL\"/>\n</ProfileRQ>\n<SpecialReqDetails>\n  <AddRemarkRQ>\n    <RemarkInfo>\n      <Remark Code=\"H\" SegmentNumber=\"1\" Type=\"General\">\n        <Text>TEST REMARK 2</Text>\n      </Remark>\n    </RemarkInfo>\n  </AddRemarkRQ>\n</SpecialReqDetails>\n</PassengerDetailsRQ>",
        "QueuePlaceRQ": "<QueuePlaceRQ xmlns=\"http://webservices.sabre.com/sabreXML/2011/10\"\nxmlns:xs=\"http://www.w3.org/2001/XMLSchema\"\nxmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" Version=\"2.0.4\">\n<QueueInfo>\n<QueueIdentifier Number=\"\" PrefatoryInstructionCode=\"11\" PseudoCityCode=\"\"/>\n</QueueInfo>\n</QueuePlaceRQ>",
        "Sabre_OTA_ProfileReadRQ": "\n<Sabre_OTA_ProfileReadRQ xmlns=\"http://www.sabre.com/eps/schemas\"\nxmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://www.sabre.com/eps/schemas\n..schemasWSDLSabre_OTA_ProfileReadRQ.xsd\" Version=\"6.55\">\n<Profile>\n<TPA_Identity UniqueID=\"*\" ClientCode=\"\" DomainID=\"\" ProfileTypeCode=\"\" ClientContextCode=\"\" />\n</Profile>\n</Sabre_OTA_ProfileReadRQ>",
        "Sabre_OTA_ProfileSearchRQ": "\n<Sabre_OTA_ProfileSearchRQ Version=\"6.26\"\nxmlns=\"http://www.sabre.com/eps/schemas\"\nxmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://www.sabre.com/eps/schemas ..schemaswsdlSabre_OTA_ProfileSearchRQ.xsd\">\n<ProfileSearchCriteria ProfileNameOnly=\"Y\">\n<TPA_Identity ClientCode=\"\" ClientContextCode=\"\" DomainID=\"\" ProfileName=\"\" ProfileTypeCode=\"\"/>\n</ProfileSearchCriteria>\n</Sabre_OTA_ProfileSearchRQ>",
        "Sabre_OTA_ProfileToPNRRQ_WithSession": "\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"\nxmlns:eb=\"http://www.ebxml.org/namespaces/messageHeader\"\nxmlns:xlink=\"http://www.w3.org/1999/xlink\"\nxmlns:xsd=\"http://www.w3.org/1999/XMLSchema\">\n<SOAP-ENV:Header>\n<eb:MessageHeader SOAP-ENV:mustUnderstand=\"1\" eb:version=\"1.0\">\n  <eb:From>\n    <eb:PartyId type=\"urn:x12.org:IO5:01\">999999</eb:PartyId>\n  </eb:From>\n  <eb:To>\n    <eb:PartyId type=\"urn:x12.org:IO5:01\">123123</eb:PartyId>\n  </eb:To>\n  <eb:CPAId>KA0J</eb:CPAId>\n  <eb:ConversationId>webservices.support@sabre.com</eb:ConversationId>\n  <eb:Service eb:type=\"OTA\">EPS</eb:Service>\n  <eb:Action>EPS_EXT_ProfileToPNRRQ</eb:Action>\n  <eb:MessageData>\n    <eb:MessageId>1000</eb:MessageId>\n    <eb:Timestamp>2016-12-30T05:25:32z</eb:Timestamp>\n  </eb:MessageData>\n</eb:MessageHeader>\n<wsse:Security xmlns:wsse=\"http://schemas.xmlsoap.org/ws/2002/12/secext\"\n  xmlns:wsu=\"http://schemas.xmlsoap.org/ws/2002/12/utility\">\n  <wsse:BinarySecurityToken></wsse:BinarySecurityToken>\n</wsse:Security>\n</SOAP-ENV:Header>\n<SOAP-ENV:Body>\n<Sabre_OTA_ProfileToPNRRQ Target=\"Production\" TimeStamp=\"2013-04-30T08:24:42.967Z\" Version=\"6.55\" xsi:schemaLocation=\"http://www.sabre.com/eps/schemas schemasSabre_OTA_ProfileCreateRQ.xsd\"\n  xmlns=\"http://www.sabre.com/eps/schemas\"\n  xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <FilterPath>\n    <Profile ClientCode=\"\" ClientContextCode=\"\" DomainID=\"\" ProfileTypeCode=\"\" UniqueID=\"\" ProfileName=\"\" PNRMoveOrderSeqNo=\"1\">\n      <Filter FilterID=\"\" DomainID=\"\" ClientCode=\"\" ClientContextCode=\"\" FilterName=\"\"/>\n    </Profile>\n  </FilterPath>\n</Sabre_OTA_ProfileToPNRRQ>\n</SOAP-ENV:Body>\n</SOAP-ENV:Envelope>",
        "Sabre_OTA_ProfileToPNRRQ": "\n<Sabre_OTA_ProfileToPNRRQ Target=\"Production\" TimeStamp=\"2013-04-30T08:24:42.967Z\" Version=\"6.55\" xsi:schemaLocation=\"http://www.sabre.com/eps/schemas schemasSabre_OTA_ProfileCreateRQ.xsd\"\nxmlns=\"http://www.sabre.com/eps/schemas\"\nxmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n<FilterPath>\n<Profile ClientCode=\"\" ClientContextCode=\"\" DomainID=\"\" ProfileTypeCode=\"\" UniqueID=\"\" ProfileName=\"\" PNRMoveOrderSeqNo=\"1\">\n  <Filter FilterID=\"\" DomainID=\"\" ClientCode=\"\" ClientContextCode=\"\" FilterName=\"\"/>\n</Profile>\n</FilterPath>\n</Sabre_OTA_ProfileToPNRRQ>",
        "SabreCommandLLSRQ_WithSession": "<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"\nxmlns:eb=\"http://www.ebxml.org/namespaces/messageHeader\"\nxmlns:xlink=\"http://www.w3.org/1999/xlink\"\nxmlns:xsd=\"http://www.w3.org/1999/XMLSchema\">\n<SOAP-ENV:Header>\n<eb:MessageHeader SOAP-ENV:mustUnderstand=\"1\" eb:version=\"1.0\">\n<eb:From>\n  <eb:PartyId type=\"urn:x12.org:IO5:01\">999999</eb:PartyId>\n</eb:From>\n<eb:To>\n  <eb:PartyId type=\"urn:x12.org:IO5:01\">123123</eb:PartyId>\n</eb:To>\n<eb:CPAId>KA0J</eb:CPAId>\n<eb:ConversationId>webservices.support@sabre.com</eb:ConversationId>\n<eb:Service eb:type=\"OTA\">SabreCommandLLSRQ</eb:Service>\n<eb:Action>SabreCommandLLSRQ</eb:Action>\n<eb:MessageData>\n  <eb:MessageId>1000</eb:MessageId>\n  <eb:Timestamp>2016-12-30T05:25:32z</eb:Timestamp>\n</eb:MessageData>\n</eb:MessageHeader>\n<wsse:Security xmlns:wsse=\"http://schemas.xmlsoap.org/ws/2002/12/secext\"\nxmlns:wsu=\"http://schemas.xmlsoap.org/ws/2002/12/utility\">\n<wsse:BinarySecurityToken></wsse:BinarySecurityToken>\n</wsse:Security>\n</SOAP-ENV:Header>\n<SOAP-ENV:Body>\n<SabreCommandLLSRQ xmlns=\"http://webservices.sabre.com/sabreXML/2003/07\"\nxmlns:xs=\"http://www.w3.org/2001/XMLSchema\"\nxmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" TimeStamp=\"2014-03-04T14:00:00\" Version=\"1.8.1\">\n<Request Output=\"SCREEN\" CDATA=\"true\">\n  <HostCommand></HostCommand>\n</Request>\n</SabreCommandLLSRQ>\n</SOAP-ENV:Body>\n</SOAP-ENV:Envelope>",
        "SabreCommandLLSRQ": "\n<SabreCommandLLSRQ xmlns=\"http://webservices.sabre.com/sabreXML/2003/07\"\nxmlns:xs=\"http://www.w3.org/2001/XMLSchema\"\nxmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" TimeStamp=\"2014-03-04T14:00:00\" Version=\"1.8.1\">\n<Request Output=\"SCREEN\" CDATA=\"true\">\n<HostCommand></HostCommand>\n</Request>\n</SabreCommandLLSRQ>",
        "SessionCreateRQ": "\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\">\n<SOAP-ENV:Header>\n<MessageHeader xmlns=\"http://www.ebxml.org/namespaces/messageHeader\">\n<From>\n  <PartyId>Agency</PartyId>\n</From>\n<To>\n  <PartyId>Sabre_API</PartyId>\n</To>\n<ConversationId>2021.01.DevStudio</ConversationId>\n<Action>SessionCreateRQ</Action>\n</MessageHeader>\n<Security xmlns=\"http://schemas.xmlsoap.org/ws/2002/12/secext\">\n<UsernameToken>\n  <Username></Username>\n  <Password></Password>\n  <Organization></Organization>\n  <Domain>DEFAULT</Domain>\n</UsernameToken>\n</Security>\n</SOAP-ENV:Header>\n<SOAP-ENV:Body>\n<SessionCreateRQ returnContextID=\"true\" Version=\"1.0.0\"\nxmlns=\"http://www.opentravel.org/OTA/2002/11\"/>\n</SOAP-ENV:Body>\n</SOAP-ENV:Envelope>"
    };
    return XmlPayLoads;
}());
exports.XmlPayLoads = XmlPayLoads;


});
System.registerDynamic("com-internova-gtcpayment-web-module/common/XmlPayLoads.js", ["com-internova-gtcpayment-web-module/common/XmlPayLoads"], false, function (require, exports) {Object.assign(exports, require("com-internova-gtcpayment-web-module/common/XmlPayLoads"))});
System.registerDynamic("com-internova-gtcpayment-web-module/Context", ["sabre-ngv-core/modules/ModuleContext","sabre-ngv-app/app/services/impl/I18nService"], false, function (require, exports, module) {
"use strict";
/*************************************/
/* Auto-generated file.              */
/* Do not modify it.                 */
/* You may remove it.                */
/* You may commit it.                */
/* You may push it.                  */
/* Remove it if module name changed. */
/* eslint:disable                    */
/*************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.t = exports.getService = exports.registerService = exports.cf = exports.context = void 0;
var ModuleContext_1 = require("sabre-ngv-core/modules/ModuleContext");
var I18nService_1 = require("sabre-ngv-app/app/services/impl/I18nService");
/** @internal **/
exports.context = new ModuleContext_1.ModuleContext("com-internova-gtcpayment-web-module");
/** @internal **/
exports.cf = exports.context.cf.bind(exports.context);
/** @internal **/
exports.registerService = exports.context.registerService.bind(exports.context);
/** @internal **/
exports.getService = exports.context.getService.bind(exports.context);
/** @internal **/
exports.t = (0, exports.getService)(I18nService_1.I18nService).getScopedTranslator('com-internova-gtcpayment-web-module/translations');


});
System.registerDynamic("com-internova-gtcpayment-web-module/Context.js", ["com-internova-gtcpayment-web-module/Context"], false, function (require, exports) {Object.assign(exports, require("com-internova-gtcpayment-web-module/Context"))});
System.registerDynamic("com-internova-gtcpayment-web-module/controllers/ISabreController", [], false, function (require, exports, module) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


});
System.registerDynamic("com-internova-gtcpayment-web-module/controllers/ISabreController.js", ["com-internova-gtcpayment-web-module/controllers/ISabreController"], false, function (require, exports) {Object.assign(exports, require("com-internova-gtcpayment-web-module/controllers/ISabreController"))});
System.registerDynamic("com-internova-gtcpayment-web-module/controllers/SabreController", ["sabre-ngv-app/app/services/impl/AbstractService","com-internova-gtcpayment-web-module/Context","com-internova-gtcpayment-web-module/services/SabreService","sabre-ngv-commsg/services/ICommandMessageService","com-internova-gtcpayment-web-module/common/Utilitario"], false, function (require, exports, module) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SabreController = void 0;
var AbstractService_1 = require("sabre-ngv-app/app/services/impl/AbstractService");
var Context_1 = require("../Context");
var SabreService_1 = require("../services/SabreService");
var ICommandMessageService_1 = require("sabre-ngv-commsg/services/ICommandMessageService");
var Utilitario_1 = require("../common/Utilitario");
var SabreController = /** @class */ (function (_super) {
    __extends(SabreController, _super);
    function SabreController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SabreController.prototype.buildRequestGetReservation = function (pnr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var request = _this.buildGetReservationRQ(pnr, "GetReservationRQ");
            request
                .then(function (resp) {
                (0, Context_1.getService)(SabreService_1.SabreService).callSoapServiceAsync(resp, "GetReservationRQ", 'SESSION', 10000)
                    .then(function (resolver) {
                    console.log("resolver GetReservationRQ", resolver);
                    resolve(true);
                })
                    .catch(function (error) {
                    reject(error);
                });
            })
                .catch(function (error) {
            });
        });
    };
    SabreController.prototype.buildRequestAddRemark = function (listRemarks) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log("listRemarks on buildRequestAddRemark", listRemarks);
            var requestRmk = _this.buildAddRemarkRQ(listRemarks, "AddRemarkLLSRQ");
            requestRmk
                .then(function (resp) {
                (0, Context_1.getService)(SabreService_1.SabreService).callSoapServiceAsync(resp, "AddRemarkLLSRQ", 'SESSION', 10000)
                    .then(function (resolver) {
                    console.log("resolver AddRemarkLLSRQ", resolver);
                    resolve(true);
                })
                    .catch(function (error) {
                    reject(error);
                });
            })
                .catch(function (error) {
            });
        });
    };
    SabreController.prototype.RemarkUpdate = function (listRemarks) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestRmk = _this.buildRemarkUpdateRQ(listRemarks, "UpdateReservationRQrmk");
            requestRmk
                .then(function (resp) {
                (0, Context_1.getService)(SabreService_1.SabreService).callSoapServiceAsync(resp, "UpdateReservationRQ", 'SESSION', 10000)
                    .then(function (resolver) {
                    console.log("resolver UpdateReservationRQ", resolver);
                    resolve(true);
                })
                    .catch(function (error) {
                    reject(error);
                });
            })
                .catch(function (error) {
            });
        });
    };
    SabreController.prototype.SendCommandAsync = function (format) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // console.log("Async entry:", format);
            var requestSabreCommand = _this.buildRequestSabreCommand(format, "SabreCommandLLSRQ");
            requestSabreCommand
                .then(function (resp) {
                (0, Context_1.getService)(SabreService_1.SabreService).callSoapServiceAsync(resp, "SabreCommandLLSRQ", 'SESSION', 10000)
                    .then(function (resolver) {
                    // console.log(resolver);
                    resolve(true);
                })
                    .catch(function (error) {
                    reject(error);
                });
            })
                .catch(function (error) {
                // console.log(error);
            });
        });
    };
    SabreController.prototype.SendCommandAsyncRs = function (format) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // console.log("Async entry:", format);
            var requestSabreCommand = _this.buildRequestSabreCommand(format, "SabreCommandLLSRQ");
            requestSabreCommand
                .then(function (resp) {
                console.log("resp:", resp);
                (0, Context_1.getService)(SabreService_1.SabreService).callSoapServiceAsync(resp, "SabreCommandLLSRQ", 'SESSION', 10000)
                    .then(function (resolver) {
                    // console.log("resolver:", resolver);
                    var utilitario_ = (0, Context_1.getService)(Utilitario_1.Utilitario);
                    // console.log("utilitario_:", utilitario_);
                    var document = utilitario_.StringToXml(resolver);
                    // console.log("document in xml:", document);
                    var commandRs = document.getElementsByTagName("Response");
                    resolve(commandRs[0].childNodes[0].nodeValue);
                })
                    .catch(function (error) {
                    reject(error);
                });
            })
                .catch(function (error) {
                // console.log(error);
            });
        });
    };
    SabreController.prototype.SendCommandSync = function (format) {
        // console.log('entry', format)
        var responseMessage = null;
        var requestSabreCommandString = this.buildRequestSendCommand(format); //llamamos al metodo con el this                                                              
        // console.log('rq', requestSabreCommandString)
        if (requestSabreCommandString != null) {
            responseMessage = (0, Context_1.getService)(SabreService_1.SabreService).callSoapServiceSync(requestSabreCommandString, "SabreCommandLLSRQ");
            // console.log('rs', responseMessage)
            if (responseMessage != null) {
                var rspCommand = JSON.parse(responseMessage); //parseamos la respuesta en una variable de tipo JSON            
                responseMessage = "";
                if (rspCommand.response != null && rspCommand.response.success) {
                    responseMessage = rspCommand.response.payload.responseText; //devuelve el SabreCommandRS
                    // console.log("responseMessage:",responseMessage);                    
                }
                return responseMessage;
            }
        }
        return responseMessage;
    };
    SabreController.prototype.SendCommandMessage = function (payload, showRq, showRs) {
        var iCmdMsgService = (0, Context_1.getService)(ICommandMessageService_1.ICommandMessageService);
        return iCmdMsgService.send({
            rq: payload,
            showRq: showRq,
            showRs: showRs
        });
    };
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
    SabreController.prototype.checkNodeValues = function (refNode, refAttr, actualNode) {
        var dato = "";
        if (actualNode.localName == refNode && actualNode.hasAttributes) {
            var attributes = actualNode.attributes;
            for (var index = 0; index < attributes.length; index++) {
                if (attributes[index].name == refAttr) {
                    dato = attributes[index].value;
                    // // console.log("refPoint: " + attributes[index].name + "  :: " + attributes[index].value);                
                }
            }
        }
        return dato;
    };
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
    SabreController.prototype.GetFinalValue = function (nodeFather, refAttr, refPoint, nodeFather2) {
        var arrayAttrs = new Array();
        arrayAttrs.push([refAttr, refPoint]);
        if (nodeFather2 == "*") {
            arrayAttrs.push(["segtype", nodeFather.localName]);
        }
        var childNodes = nodeFather.childNodes;
        for (var j = 0; j < childNodes.length; j++) {
            var element_childNodes = childNodes[j];
            if (element_childNodes.localName) {
                var localName = element_childNodes.localName;
                var value = element_childNodes.textContent;
                arrayAttrs.push([localName, value]);
            }
        }
        // // console.log("GetFinalValue: ");
        // // console.log(arrayAttrs);
        return arrayAttrs;
    };
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
    SabreController.prototype.GetElement = function (pnrLocatorValue, pattern, IsRemoveNS) {
        var returnElement = null;
        if (IsRemoveNS) {
            pnrLocatorValue = (0, Context_1.getService)(Utilitario_1.Utilitario).RemoveNameSpace(pnrLocatorValue);
        }
        var parser = new DOMParser();
        var doc1 = parser.parseFromString(pnrLocatorValue, "text/xml");
        var childNodes = doc1.childNodes;
        var element_childNodes = childNodes[0]; //first line on RS        
        if (element_childNodes.hasAttributes) {
            var attributes = element_childNodes.attributes;
            var found = false;
            for (var index = 0; index < attributes.length; index++) {
                var temp = attributes[index].name.split(":");
                if (temp[0] == 'xmlns' && !found) {
                    var xmlns = attributes[index].value;
                    found = true;
                }
            }
        }
        // console.log("xmlns: " + xmlns);
        function resolverNS() { return xmlns; }
        var result = (0, Context_1.getService)(Utilitario_1.Utilitario).GetXPathResult(pnrLocatorValue, pattern, resolverNS, 0);
        // var result = getService(Utilitario).GetXPathResult(3, pnrLocatorValue, pattern, resolverNS, 0);
        returnElement = result.iterateNext();
        return returnElement;
    };
    SabreController.prototype.AddRemarksAsync = function (remarks) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestRemark = _this.buildRequestAddRemark(remarks);
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
    };
    SabreController.prototype.buildRequestReservation = function (action) {
        return new Promise(function (resolve, reject) {
            var utilitario_payload = (0, Context_1.getService)(Utilitario_1.Utilitario).GetPayLoad(action);
            utilitario_payload.then(function (rsp) {
                resolve(rsp);
            })
                .catch(function (error) {
                // console.log(error);
                reject(error);
            });
        });
    };
    SabreController.prototype.buildAddRemarkRQ = function (listRemarks, action) {
        return new Promise(function (resolve, reject) {
            var returnValue = null;
            console.log("listRemarks on buildAddRemarkRQ", listRemarks);
            var utilitario_ = (0, Context_1.getService)(Utilitario_1.Utilitario);
            utilitario_.GetPayLoad(action)
                .then(function (rsp) {
                var document = utilitario_.StringToXml(rsp);
                console.log("StringToXml", document);
                var element = document.getElementsByTagName("RemarkInfo");
                if (listRemarks != null && listRemarks.length > 0) {
                    for (var _i = 0, listRemarks_1 = listRemarks; _i < listRemarks_1.length; _i++) {
                        var rmk = listRemarks_1[_i];
                        console.log("rmk", rmk);
                        var element_var = element[0].appendChild(document.createElement("Remark"));
                        element_var.setAttribute("Type", rmk.Type);
                        if (rmk.Code) {
                            element_var.setAttribute("Code", rmk.Code);
                        }
                        if (rmk.SegNum) {
                            element_var.setAttribute("SegmentNumber", rmk.SegNum);
                        }
                        var text = element_var.appendChild(document.createElement('Text'));
                        text.textContent = rmk.Text;
                    }
                }
                returnValue = utilitario_.DocumentToString(document);
                returnValue = returnValue.replace(/xmlns=""/g, '');
                resolve(returnValue);
            })
                .catch(function (error) {
                // console.log("error buildCreateReservationRQ:", error);
                reject(error);
            });
        });
    };
    SabreController.prototype.buildRemarkUpdateRQ = function (listRemarks, action) {
        return new Promise(function (resolve, reject) {
            var returnValue = null;
            var utilitario_ = (0, Context_1.getService)(Utilitario_1.Utilitario);
            utilitario_.GetPayLoad(action)
                .then(function (rsp) {
                var document = utilitario_.StringToXml(rsp);
                var element = document.getElementsByTagName("ReservationUpdateItem");
                if (listRemarks != null && listRemarks.length > 0) {
                    for (var _i = 0, listRemarks_2 = listRemarks; _i < listRemarks_2.length; _i++) {
                        var rmk = listRemarks_2[_i];
                        var element_var = element[0].appendChild(document.createElement("RemarkUpdate"));
                        element_var.setAttribute("id", rmk.Id);
                        element_var.setAttribute("type", "INVOICE");
                        element_var.setAttribute("op", "U");
                        var text = element_var.appendChild(document.createElement('RemarkText'));
                        text.textContent = rmk.Text;
                    }
                }
                returnValue = utilitario_.DocumentToString(document);
                returnValue = returnValue.replace(/xmlns=""/g, '');
                resolve(returnValue);
            })
                .catch(function (error) {
                // console.log("error buildCreateReservationRQ:", error);
                reject(error);
            });
        });
    };
    SabreController.prototype.buildRequestSabreCommand = function (format, action) {
        return new Promise(function (resolve, reject) {
            var returnValue = null;
            var utilitario_ = (0, Context_1.getService)(Utilitario_1.Utilitario);
            utilitario_.GetPayLoad(action)
                .then(function (rsp) {
                if (format != null) {
                    var document = utilitario_.StringToXml(rsp);
                    var element = document.getElementsByTagName("HostCommand");
                    element[0].textContent = format;
                    console.log("resolver despues convertir", document.documentElement.innerHTML);
                    returnValue = utilitario_.DocumentToString(document);
                    resolve(returnValue);
                }
                else {
                    reject();
                }
            })
                .catch(function (error) {
                // console.log(error);
                reject(error);
            });
        });
    };
    SabreController.prototype.buildRequestSendCommand = function (format) {
        var request = '<SabreCommandLLSRQ xmlns="http://webservices.sabre.com/sabreXML/2003/07" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" TimeStamp="2014-03-04T14:00:00" Version="1.8.1">' +
            '<Request Output="SCREEN" CDATA="false"><HostCommand>' + format + '</HostCommand></Request>' +
            '</SabreCommandLLSRQ>';
        return request;
    };
    SabreController.prototype.buildGetReservationRQ = function (pnr, action) {
        return new Promise(function (resolve, reject) {
            var returnValue = null;
            var utilitario_ = (0, Context_1.getService)(Utilitario_1.Utilitario);
            utilitario_.GetPayLoad(action)
                .then(function (rsp) {
                var document = utilitario_.StringToXml(rsp);
                var element = document.getElementsByTagName("Locator");
                element[0].textContent = pnr;
                returnValue = utilitario_.DocumentToString(document);
                returnValue = returnValue.replace(/xmlns=""/g, '');
                console.log("returnValue", returnValue);
                resolve(returnValue);
            })
                .catch(function (error) {
                // console.log("error buildCreateReservationRQ:", error);
                reject(error);
            });
        });
    };
    //to validate every input and error if needed
    SabreController.prototype.InputValidator = function (id) {
        // console.log("id que va a valorar si esta empty: ",id);
        var value = document.getElementById(id).value;
        // console.log("value: ", value);        
        if (!value) {
            document.getElementById(id + "Div").classList.add("has-error");
            document.getElementById(id + "Error").innerText = "Field cannot be empty or blank";
        }
        else {
            document.getElementById(id + "Div").classList.remove("has-error");
            document.getElementById(id + "Error").innerText = "";
        }
    };
    SabreController.SERVICE_NAME = "com-internova-gtcpayment-web-module-SabreController";
    return SabreController;
}(AbstractService_1.AbstractService));
exports.SabreController = SabreController;


});
System.registerDynamic("com-internova-gtcpayment-web-module/controllers/SabreController.js", ["com-internova-gtcpayment-web-module/controllers/SabreController"], false, function (require, exports) {Object.assign(exports, require("com-internova-gtcpayment-web-module/controllers/SabreController"))});
System.registerDynamic("com-internova-gtcpayment-web-module/index", ["com-internova-gtcpayment-web-module/Main","com-internova-gtcpayment-web-module/Context"], false, function (require, exports, module) {
"use strict";
/*************************************/
/* Auto-generated file.              */
/* Do not modify it.                 */
/* You may remove it.                */
/* You may commit it.                */
/* You may push it.                  */
/* Remove it if module name changed. */
/* eslint:disable                    */
/*************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Main_1 = require("./Main");
var Context_1 = require("./Context");
/**
 *  Autogenerated class representing module in runtime.
 **/
var Module_com_internova_gtcpayment_web_module = /** @class */ (function (_super) {
    __extends(Module_com_internova_gtcpayment_web_module, _super);
    function Module_com_internova_gtcpayment_web_module(manifest) {
        var _this = _super.call(this, manifest) || this;
        Context_1.context.setModule(_this);
        return _this;
    }
    return Module_com_internova_gtcpayment_web_module;
}(Main_1.Main));
exports.default = Module_com_internova_gtcpayment_web_module;


});
System.registerDynamic("com-internova-gtcpayment-web-module/index.js", ["com-internova-gtcpayment-web-module/index"], false, function (require, exports) {Object.assign(exports, require("com-internova-gtcpayment-web-module/index"))});
System.registerDynamic("com-internova-gtcpayment-web-module/Main", ["sabre-ngv-core/modules/Module","sabre-ngv-xp/configs/RedAppSidePanelConfig","sabre-ngv-xp/services/ExtensionPointService","com-internova-gtcpayment-web-module/Context","sabre-ngv-redAppSidePanel/models/RedAppSidePanelButton","sabre-ngv-reservation/services/IReservationService","sabre-ngv-core/services/LayerService","com-internova-gtcpayment-web-module/model/RestModel","com-internova-gtcpayment-web-module/views/Gtc_Payment","com-internova-gtcpayment-web-module/controllers/SabreController","com-internova-gtcpayment-web-module/common/Utilitario","com-internova-gtcpayment-web-module/services/ExternalService","com-internova-gtcpayment-web-module/services/SabreService"], false, function (require, exports, module) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var Module_1 = require("sabre-ngv-core/modules/Module");
var RedAppSidePanelConfig_1 = require("sabre-ngv-xp/configs/RedAppSidePanelConfig");
var ExtensionPointService_1 = require("sabre-ngv-xp/services/ExtensionPointService");
var Context_1 = require("./Context");
var RedAppSidePanelButton_1 = require("sabre-ngv-redAppSidePanel/models/RedAppSidePanelButton");
var IReservationService_1 = require("sabre-ngv-reservation/services/IReservationService");
var LayerService_1 = require("sabre-ngv-core/services/LayerService");
var RestModel_1 = require("./model/RestModel");
var Gtc_Payment_1 = require("./views/Gtc_Payment");
var SabreController_1 = require("./controllers/SabreController");
var Utilitario_1 = require("./common/Utilitario");
var ExternalService_1 = require("./services/ExternalService");
var SabreService_1 = require("./services/SabreService");
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.init = function () {
        var _this = this;
        _super.prototype.init.call(this);
        (0, Context_1.registerService)(SabreController_1.SabreController);
        (0, Context_1.registerService)(Utilitario_1.Utilitario);
        (0, Context_1.registerService)(ExternalService_1.ExternalService);
        (0, Context_1.registerService)(SabreService_1.SabreService);
        var xp = (0, Context_1.getService)(ExtensionPointService_1.ExtensionPointService);
        var sidepanelConfig = new RedAppSidePanelConfig_1.RedAppSidePanelConfig([
            new RedAppSidePanelButton_1.RedAppSidePanelButton('GTC UK Payment Process', 'btn btn-secondary side-panel-button redapp-web-rest redapp-web-rest-internal', function () { return _this.openModalWithRest(); }),
        ]);
        xp.addConfig('redAppSidePanel', sidepanelConfig);
    };
    Main.prototype.openModalWithRest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var reservation, restModalOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, Context_1.getService)(IReservationService_1.IReservationService).getReservation()];
                    case 1:
                        reservation = _a.sent();
                        restModalOptions = {
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
                        (0, Context_1.getService)(LayerService_1.LayerService).showInModal(new Gtc_Payment_1.Gtc_Payment({ model: new RestModel_1.RestModel() }, reservation), restModalOptions, { display: 'areaView' });
                        return [2 /*return*/];
                }
            });
        });
    };
    return Main;
}(Module_1.Module));
exports.Main = Main;


});
System.registerDynamic("com-internova-gtcpayment-web-module/Main.js", ["com-internova-gtcpayment-web-module/Main"], false, function (require, exports) {Object.assign(exports, require("com-internova-gtcpayment-web-module/Main"))});
System.registerDynamic("com-internova-gtcpayment-web-module/model/AddRemarks", ["sabre-ngv-app/app/AbstractModel","com-internova-gtcpayment-web-module/Context","sabre-ngv-communication/services/RestApiService"], false, function (require, exports, module) {
"use strict";var __extends=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(t,o)};return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function __(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(__.prototype=o.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.RestModel=void 0;var AbstractModel_1=require("sabre-ngv-app/app/AbstractModel"),Context_1=require("../Context"),RestApiService_1=require("sabre-ngv-communication/services/RestApiService"),RestModel=function(e){function RestModel(){return null!==e&&e.apply(this,arguments)||this}return __extends(RestModel,e),RestModel.prototype.sendRestRequest=function(e,t,o,r,n){return(0,Context_1.getService)(RestApiService_1.RestApiService).send({httpMethod:t,url:e,authTokenType:o,payload:r,headers:n})},RestModel}(AbstractModel_1.AbstractModel);exports.RestModel=RestModel;


});
System.registerDynamic("com-internova-gtcpayment-web-module/model/AddRemarks.js", ["com-internova-gtcpayment-web-module/model/AddRemarks"], false, function (require, exports) {Object.assign(exports, require("com-internova-gtcpayment-web-module/model/AddRemarks"))});
System.registerDynamic("com-internova-gtcpayment-web-module/model/ccData", [], false, function (require, exports, module) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ccData = void 0;
var ccData = /** @class */ (function () {
    function ccData() {
    }
    return ccData;
}());
exports.ccData = ccData;


});
System.registerDynamic("com-internova-gtcpayment-web-module/model/ccData.js", ["com-internova-gtcpayment-web-module/model/ccData"], false, function (require, exports) {Object.assign(exports, require("com-internova-gtcpayment-web-module/model/ccData"))});
System.registerDynamic("com-internova-gtcpayment-web-module/model/pqFare", [], false, function (require, exports, module) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pqFare = void 0;
var pqFare = /** @class */ (function () {
    function pqFare() {
    }
    return pqFare;
}());
exports.pqFare = pqFare;


});
System.registerDynamic("com-internova-gtcpayment-web-module/model/pqFare.js", ["com-internova-gtcpayment-web-module/model/pqFare"], false, function (require, exports) {Object.assign(exports, require("com-internova-gtcpayment-web-module/model/pqFare"))});
System.registerDynamic("com-internova-gtcpayment-web-module/model/remark", [], false, function (require, exports, module) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remark = void 0;
var remark = /** @class */ (function () {
    function remark() {
    }
    return remark;
}());
exports.remark = remark;


});
System.registerDynamic("com-internova-gtcpayment-web-module/model/remark.js", ["com-internova-gtcpayment-web-module/model/remark"], false, function (require, exports) {Object.assign(exports, require("com-internova-gtcpayment-web-module/model/remark"))});
System.registerDynamic("com-internova-gtcpayment-web-module/model/RestModel", ["sabre-ngv-app/app/AbstractModel","com-internova-gtcpayment-web-module/Context","sabre-ngv-communication/services/RestApiService"], false, function (require, exports, module) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestModel = void 0;
var AbstractModel_1 = require("sabre-ngv-app/app/AbstractModel");
var Context_1 = require("../Context");
var RestApiService_1 = require("sabre-ngv-communication/services/RestApiService");
var RestModel = /** @class */ (function (_super) {
    __extends(RestModel, _super);
    function RestModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RestModel.prototype.sendRestRequest = function (url, httpMethod, authTokenType, payload, headers) {
        return (0, Context_1.getService)(RestApiService_1.RestApiService).send({
            httpMethod: httpMethod,
            url: url,
            authTokenType: authTokenType,
            payload: payload,
            headers: headers
        });
    };
    return RestModel;
}(AbstractModel_1.AbstractModel));
exports.RestModel = RestModel;


});
System.registerDynamic("com-internova-gtcpayment-web-module/model/RestModel.js", ["com-internova-gtcpayment-web-module/model/RestModel"], false, function (require, exports) {Object.assign(exports, require("com-internova-gtcpayment-web-module/model/RestModel"))});
System.registerDynamic("com-internova-gtcpayment-web-module/services/ExternalService", ["sabre-ngv-app/app/services/impl/AbstractService"], false, function (require, exports, module) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalService = void 0;
var AbstractService_1 = require("sabre-ngv-app/app/services/impl/AbstractService");
var ExternalService = /** @class */ (function (_super) {
    __extends(ExternalService, _super);
    function ExternalService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExternalService.prototype.sendRequest = function (method, url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(xhr.response);
                }
                else {
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
    };
    ExternalService.SERVICE_NAME = "com-internova-gtcpayment-web-module-ExternalService";
    return ExternalService;
}(AbstractService_1.AbstractService));
exports.ExternalService = ExternalService;


});
System.registerDynamic("com-internova-gtcpayment-web-module/services/ExternalService.js", ["com-internova-gtcpayment-web-module/services/ExternalService"], false, function (require, exports) {Object.assign(exports, require("com-internova-gtcpayment-web-module/services/ExternalService"))});
System.registerDynamic("com-internova-gtcpayment-web-module/services/IExternalService", [], false, function (require, exports, module) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


});
System.registerDynamic("com-internova-gtcpayment-web-module/services/IExternalService.js", ["com-internova-gtcpayment-web-module/services/IExternalService"], false, function (require, exports) {Object.assign(exports, require("com-internova-gtcpayment-web-module/services/IExternalService"))});
System.registerDynamic("com-internova-gtcpayment-web-module/services/ISabreService", [], false, function (require, exports, module) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


});
System.registerDynamic("com-internova-gtcpayment-web-module/services/ISabreService.js", ["com-internova-gtcpayment-web-module/services/ISabreService"], false, function (require, exports) {Object.assign(exports, require("com-internova-gtcpayment-web-module/services/ISabreService"))});
System.registerDynamic("com-internova-gtcpayment-web-module/services/SabreService", ["sabre-ngv-app/app/services/impl/AbstractService","sabre-ngv-communication/interfaces/ISoapApiService","com-internova-gtcpayment-web-module/Context","sabre-ngv-app/app/services/impl/SrwSyncApi","sabre-ngv-communication/services/RestApiService"], false, function (require, exports, module) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SabreService = void 0;
var AbstractService_1 = require("sabre-ngv-app/app/services/impl/AbstractService");
var ISoapApiService_1 = require("sabre-ngv-communication/interfaces/ISoapApiService");
var Context_1 = require("../Context");
var SrwSyncApi_1 = require("sabre-ngv-app/app/services/impl/SrwSyncApi");
var RestApiService_1 = require("sabre-ngv-communication/services/RestApiService");
var SabreService = /** @class */ (function (_super) {
    __extends(SabreService, _super);
    function SabreService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SabreService.prototype.callSoapServiceAsync = function (payload, action, authTokenType, timeout) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // tslint:disable-next-line: no-unsafe-any
            var soapSvc = (0, Context_1.getService)(ISoapApiService_1.ISoapApiService);
            var rq_ = { action: action, payload: payload, authTokenType: authTokenType, timeout: timeout };
            // tslint:disable-next-line: no-unsafe-any
            console.log("rq_:", rq_);
            soapSvc.callSws(rq_)
                .then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log("async: response", response);
                    // tslint:disable-next-line: no-unsafe-any
                    resolve(response.value);
                    return [2 /*return*/];
                });
            }); })
                .catch(function (error) {
                console.log("callSoapServiceAsync error: ", error);
                reject(error);
            });
        });
    };
    SabreService.prototype.callSoapServiceSync = function (svcRQ, svcActionCode) {
        var soapSvc = (0, Context_1.getService)(SrwSyncApi_1.SrwSyncApi);
        // console.log("soapSvc:",soapSvc);
        var response = "";
        try {
            response = soapSvc.sws(svcRQ, svcActionCode);
            // console.log("soapSvc-respose: ", response);
            return response;
        }
        catch (ex) {
            // console.log(ex);
        }
    };
    SabreService.prototype.callRestServiceAsync = function (url, httpMethod, authTokenType, payload, headers) {
        // tslint:disable-next-line: no-unsafe-any
        return (0, Context_1.getService)(RestApiService_1.RestApiService).send({
            httpMethod: httpMethod,
            url: url,
            authTokenType: authTokenType,
            payload: payload,
            headers: headers
        });
    };
    SabreService.SERVICE_NAME = "com-internova-gtcpayment-web-module-SabreService";
    return SabreService;
}(AbstractService_1.AbstractService));
exports.SabreService = SabreService;


});
System.registerDynamic("com-internova-gtcpayment-web-module/services/SabreService.js", ["com-internova-gtcpayment-web-module/services/SabreService"], false, function (require, exports) {Object.assign(exports, require("com-internova-gtcpayment-web-module/services/SabreService"))});
System.registerDynamic("com-internova-gtcpayment-web-module/views/CheckTotal", ["sabre-ngv-app/app/AbstractView","sabre-ngv-core/services/LayerService","sabre-ngv-core/decorators/classes/view/Template","sabre-ngv-app/app/services/impl/IAreaService","com-internova-gtcpayment-web-module/controllers/SabreController","sabre-ngv-communication/interfaces/ISoapApiService","com-internova-gtcpayment-web-module/Context","xml2js","com-internova-gtcpayment-web-module/model/remark"], false, function (require, exports, module) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckTotal = void 0;
var AbstractView_1 = require("sabre-ngv-app/app/AbstractView");
var LayerService_1 = require("sabre-ngv-core/services/LayerService");
var Template_1 = require("sabre-ngv-core/decorators/classes/view/Template");
var IAreaService_1 = require("sabre-ngv-app/app/services/impl/IAreaService");
var SabreController_1 = require("../controllers/SabreController");
var ISoapApiService_1 = require("sabre-ngv-communication/interfaces/ISoapApiService");
var Context_1 = require("../Context");
var XML2JS = require("xml2js");
var remark_1 = require("../model/remark");
var CheckTotal = /** @class */ (function (_super) {
    __extends(CheckTotal, _super);
    function CheckTotal(options, pack) {
        var _this = _super.call(this, options) || this;
        _this.rmks = [];
        _this.createRmks = [];
        _this.processData(pack);
        console.log("rmks", _this.rmks);
        console.log("createRmks", _this.createRmks);
        _this.getModel().set('total', pack['total']);
        _this.render();
        return _this;
    }
    CheckTotal.prototype.initialize = function (options) {
        _super.prototype.initialize.call(this, options);
    };
    CheckTotal.prototype.processData = function (pack) {
        this.rmks = pack['UpdateRmk'];
        var opt = pack['option'];
        var rmkCm = this.rmks.filter(function (x) { return x.Code == "CM"; })[0].Text = "CM-" + pack['ccCode'] + pack['card4'] + "/" + pack['expMonth'] + pack['expYear'] + "/*";
        var rmkPay = this.rmks.filter(function (x) { return x.Code == "PAY"; })[0].Text = "PAYMENT/123456/" + pack['refId'] + "/" + pack['total'];
        // 5H-PAYMENT/A-123456/OSUICI230227/1672.80/VI1111
        // 5H-M1100.00/S160.00/T362.80/A50.00/TT1672.80
        this.generateRmk("PAYMENT/" + opt + "123456/" + pack['refId'] + "/" + pack['total'] + "/" + pack['ccCode'] + pack['card4']);
        var text = "";
        if (pack['markUpFee']) {
            text = "M" + pack['markUpFee'];
        }
        if (pack['fee']) {
            text = text + "/S" + pack['fee'];
        }
        if (pack['pqAmt']) {
            text = text + "/T" + pack['pqAmt'];
        }
        if (pack['additional']) {
            text = text + "/A" + pack['additional'];
        }
        if (pack['total']) {
            text = text + "/TT" + pack['total'];
        }
        this.generateRmk(text);
    };
    CheckTotal.prototype.selfNextAction = function () {
        return __awaiter(this, void 0, void 0, function () {
            var areaService, getreservationpromise, action, authTokenType, timeout, payload, soapApi;
            var _this = this;
            return __generator(this, function (_a) {
                areaService = (0, Context_1.getService)(IAreaService_1.IAreaService);
                getreservationpromise = (0, Context_1.getService)(SabreController_1.SabreController);
                console.log("getreservationpromise", getreservationpromise);
                getreservationpromise.RemarkUpdate(this.rmks)
                    .then(function (rsp) {
                    console.log("Rmks to update", _this.rmks);
                    getreservationpromise.SendCommandMessage("*.", true, true)
                        .then(function (rsp) {
                        console.log("remarks been displayed");
                        getreservationpromise.buildRequestAddRemark(_this.createRmks)
                            .then(function (rsp) {
                            areaService.showBanner('Success', "Remarks were added");
                            getreservationpromise.SendCommandMessage("*P5H", true, true)
                                .then(function (rsp) {
                                console.log("remarks been displayed");
                            });
                        });
                    });
                    areaService.showBanner('Success', "Remarks were updated");
                });
                (0, Context_1.getService)(LayerService_1.LayerService).clearLayer();
                action = this.$('.action-field').find('.action').val();
                authTokenType = this.$('.authTokenType-field').find('.authTokenType').val();
                timeout = this.$('.timeout-field').find('.timeout').val();
                payload = this.$('.payload-field').find('.payload').val();
                this.$('.response').val("");
                soapApi = (0, Context_1.getService)(ISoapApiService_1.ISoapApiService);
                soapApi.callSws({
                    action: action,
                    payload: payload,
                    authTokenType: authTokenType,
                    timeout: timeout
                }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                    var responseValue, _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                if (!response.errorCode) return [3 /*break*/, 1];
                                _a = response;
                                return [3 /*break*/, 3];
                            case 1: return [4 /*yield*/, this.parseXml2Js(response.value)];
                            case 2:
                                _a = _b.sent();
                                _b.label = 3;
                            case 3:
                                responseValue = _a;
                                this.$('.response').val(JSON.stringify(responseValue, null, 2));
                                return [2 /*return*/];
                        }
                    });
                }); }).catch(function (error) {
                    _this.$('.response').val(error);
                });
                // let getreservationpromise = getService(SabreController);
                // getreservationpromise.buildRequestAddRemark(this.rmks)
                //     .then(rsp => {
                //         console.log("rsp:",rsp);
                //     })
                areaService.showBanner('Success', 'Remarks were added!: ' + this.adflexRef);
                (0, Context_1.getService)(LayerService_1.LayerService).clearLayer();
                return [2 /*return*/];
            });
        });
    };
    CheckTotal.prototype.parseXml2Js = function (responseValue) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        XML2JS.parseString(responseValue, function (err, result) {
                            if (err)
                                reject(err);
                            else
                                resolve(result);
                        });
                    })];
            });
        });
    };
    CheckTotal.prototype.generateRmk = function (text) {
        var rmk = new remark_1.remark;
        rmk.Type = "Historical";
        rmk.Text = text;
        this.createRmks.push(rmk);
    };
    CheckTotal = __decorate([
        (0, Template_1.Template)('com-internova-gtcpayment-web-module:CheckTotal'),
        __metadata("design:paramtypes", [Object, Object])
    ], CheckTotal);
    return CheckTotal;
}(AbstractView_1.AbstractView));
exports.CheckTotal = CheckTotal;


});
System.registerDynamic("com-internova-gtcpayment-web-module/views/CheckTotal.js", ["com-internova-gtcpayment-web-module/views/CheckTotal"], false, function (require, exports) {Object.assign(exports, require("com-internova-gtcpayment-web-module/views/CheckTotal"))});
System.registerDynamic("com-internova-gtcpayment-web-module/views/Gtc_Payment", ["sabre-ngv-app/app/AbstractView","sabre-ngv-core/services/LayerService","sabre-ngv-core/decorators/classes/view/Template","com-internova-gtcpayment-web-module/model/pqFare","com-internova-gtcpayment-web-module/model/ccData","sabre-ngv-app/app/services/impl/IAreaService","com-internova-gtcpayment-web-module/model/RestModel","com-internova-gtcpayment-web-module/Context","com-internova-gtcpayment-web-module/views/CheckTotal","com-internova-gtcpayment-web-module/model/remark","com-internova-gtcpayment-web-module/controllers/SabreController"], false, function (require, exports, module) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gtc_Payment = void 0;
var AbstractView_1 = require("sabre-ngv-app/app/AbstractView");
var LayerService_1 = require("sabre-ngv-core/services/LayerService");
var Template_1 = require("sabre-ngv-core/decorators/classes/view/Template");
var pqFare_1 = require("../model/pqFare");
var ccData_1 = require("../model/ccData");
var IAreaService_1 = require("sabre-ngv-app/app/services/impl/IAreaService");
var RestModel_1 = require("../model/RestModel");
var Context_1 = require("../Context");
var CheckTotal_1 = require("./CheckTotal");
var remark_1 = require("../model/remark");
var SabreController_1 = require("../controllers/SabreController");
var Gtc_Payment = /** @class */ (function (_super) {
    __extends(Gtc_Payment, _super);
    function Gtc_Payment(options, reservation) {
        var _this = _super.call(this, options) || this;
        _this.status = [];
        _this.vendors = [{ code: "AX" }, { code: "VI" }, { code: "CA" }];
        _this.totalPax = 0;
        _this.updateRmks = [];
        _this.pqFareList = [];
        _this.creditCardList = [];
        _this.getReservation(reservation);
        return _this;
    }
    Gtc_Payment.prototype.initialize = function (options) {
        _super.prototype.addDomEvents.call(this, {
            'change #selectPq': 'loadAmount',
            'change #creditCards': 'loadExpiration',
            'change #markUpFee': 'updateTotal',
            'change #amt': 'updateTotal',
            'change #additional': 'updateTotal',
            'change #tktFee': 'updateTotal'
        });
        _super.prototype.initialize.call(this, options);
    };
    Gtc_Payment.prototype.getReservation = function (fullPNR) {
        var _this = this;
        var _a, _b, _c, _d;
        // console.log("ccNum", this.ccNum);
        var getreservationpromise = (0, Context_1.getService)(SabreController_1.SabreController);
        if (!fullPNR) {
            var areaService = (0, Context_1.getService)(IAreaService_1.IAreaService);
            areaService.showBanner('Error', 'There is no active PNR...');
            (0, Context_1.getService)(LayerService_1.LayerService).clearLayer();
        }
        else {
            var pnrData = fullPNR.Data;
            var pnrRecloc = (_a = fullPNR === null || fullPNR === void 0 ? void 0 : fullPNR.Data) === null || _a === void 0 ? void 0 : _a.RecordLocators[0]['Id'];
            var totalPax = pnrData.Passengers.Passenger.length;
            this.totalPax = totalPax;
            // console.log("pnrRecloc",pnrRecloc);            
            var today = new Date();
            var year = today.getFullYear().toString();
            var month = today.getMonth() + 1;
            var day = today.getDate();
            var day2 = (day < 10) ? "0" + day.toString() : day.toString();
            var month2 = (month < 10) ? "0" + month.toString() : month.toString();
            var adflexRef = pnrRecloc + year[2] + year[3] + month2 + day2;
            var mkup_1, tktFee_1, fee_1 = "";
            var mkupTotal_1 = 0;
            var feeTotal = 0;
            var paxName = pnrData.Passengers.Passenger[0].GivenName + " " + pnrData.Passengers.Passenger[0].Surname;
            if ((_b = pnrData.PriceQuotes) === null || _b === void 0 ? void 0 : _b.PriceQuote) {
                var arrayFares = pnrData.PriceQuotes.PriceQuote;
                // console.log("arrayFares",arrayFares);                
                if (arrayFares.length) {
                    arrayFares.forEach(function (element) {
                        // console.log("element",element.Taxes.TotalTax['Currency']);                        
                        if (element.Taxes.TotalTax['Currency'] == "GBP") {
                            var onePQ = new pqFare_1.pqFare;
                            // onePQ.curr = element.BaseFare.Amount.Currency;
                            var item = element['Id'].toString();
                            onePQ.item = item[item.length - 1];
                            onePQ.total = element.Total.Amount['Amount'];
                            onePQ.taxes = element.Taxes.TotalTax['Amount'];
                            // priceString = element.totals.subtotal;
                            // onePQ.subtotal = parseFloat(priceString);
                            // console.log("onePQ",onePQ);                            
                            _this.pqFareList.push(onePQ);
                        }
                    });
                }
            }
            if ((_c = pnrData.FormOfPayments) === null || _c === void 0 ? void 0 : _c.FormOfPayment) {
                var arrayFares = pnrData.FormOfPayments.FormOfPayment;
                if (arrayFares.length) {
                    arrayFares.forEach(function (element) {
                        var oneCC = new ccData_1.ccData;
                        oneCC.code = element.CreditCard['CreditCardCode'];
                        oneCC.cardMasked = oneCC.code + element.CreditCard['CreditCardNumber'];
                        if (oneCC.cardMasked) {
                            var last4digits = "";
                            for (var i = oneCC.cardMasked.length - 4; i < oneCC.cardMasked.length; i++) {
                                last4digits = last4digits + oneCC.cardMasked[i].toString();
                            }
                            oneCC.last4 = last4digits;
                        }
                        oneCC.year = element.CreditCard['ExpirationYear'][2] + element.CreditCard['ExpirationYear'][3];
                        oneCC.month = element.CreditCard['ExpirationMonth'];
                        // console.log("oneCC ", oneCC);                        
                        _this.creditCardList.push(oneCC);
                    });
                }
            }
            if ((_d = pnrData.Remarks) === null || _d === void 0 ? void 0 : _d.Remark) {
                var invoiceRmks = pnrData.Remarks.Remark;
                if (invoiceRmks.length) {
                    invoiceRmks.forEach(function (element) {
                        if (element['Type'] == "Invoice") {
                            var partMkup = element['Text'].split("MKUP/");
                            if (partMkup[1]) {
                                var slash = partMkup[1].split("/");
                                mkup_1 = slash[1];
                                mkupTotal_1 = mkupTotal_1 + parseFloat(mkup_1);
                            }
                            var partTkt = element['Text'].split("TKTFEE/");
                            if (partTkt[1]) {
                                tktFee_1 = partTkt[1];
                            }
                            else {
                                partTkt = element['Text'].split("FEE/");
                                if (partTkt[1]) {
                                    fee_1 = partTkt[1];
                                }
                            }
                            var cmRmk = element['Text'].split("CM-");
                            if (cmRmk[1]) {
                                var rmk = new remark_1.remark;
                                rmk.Type = "Itinerary";
                                rmk.Id = element.Source['Id'].toString();
                                rmk.Text = element['Text'];
                                rmk.Code = "CM";
                                _this.updateRmks.push(rmk);
                            }
                            var payment = element['Text'].split("PAYMENT/");
                            if (payment[1]) {
                                var rmk = new remark_1.remark;
                                rmk.Type = "Itinerary";
                                rmk.Id = element.Source['Id'].toString();
                                rmk.Text = element['Text'];
                                rmk.Code = "PAY";
                                _this.updateRmks.push(rmk);
                            }
                        }
                    });
                }
            }
            // console.log("this.updateRmks",this.updateRmks);            
            if (tktFee_1) {
                feeTotal = totalPax * parseFloat(tktFee_1);
            }
            if (fee_1) {
                feeTotal = parseFloat(fee_1);
            }
            var totalAmt = mkupTotal_1 + feeTotal;
            this.getModel().set('markUpFee', mkupTotal_1.toFixed(2));
            this.getModel().set('tktFee', feeTotal.toFixed(2));
            this.getModel().set('selectPq', this.pqFareList);
            this.getModel().set('creditCards', this.creditCardList);
            this.getModel().set('name', paxName);
            this.getModel().set('refId', adflexRef);
            this.getModel().set('total', totalAmt.toFixed(2) + " GBP");
            this.getModel().set('vendors', this.vendors);
            this.render();
            // this.updateTotal();
        }
    };
    Gtc_Payment.prototype.loadAmount = function (selector) {
        var _this = this;
        var item = this.$('#selectPq').children("option:selected").val();
        if (selector.target) {
            this.pqFareList.forEach(function (element) {
                if (element['item'] == item) {
                    document.getElementById("amt").value = element['total'].toString();
                    _this.updateTotal();
                }
            });
            $('#selectPq').val(item);
        }
    };
    Gtc_Payment.prototype.loadExpiration = function (selector) {
        var card = this.$('#creditCards').children("option:selected").val();
        if (selector.target) {
            this.creditCardList.forEach(function (element) {
                if (element['cardMasked'] == card) {
                    document.getElementById("cardInUse").value = card;
                    var exp = element['month'] + "/" + element['year'];
                    document.getElementById("expiration").value = exp;
                }
            });
            $('#creditCards').val(card);
        }
        var writeCC = document.getElementById("cardInUse");
        if (card == "addCC") {
            document.getElementById("cardInUse").value = "";
            document.getElementById("expiration").value = "";
            document.getElementById("vendor").removeAttribute("disabled");
            writeCC.removeAttribute("disabled");
        }
        else {
            writeCC.setAttribute("disabled", "");
        }
    };
    Gtc_Payment.prototype.updateTotal = function (selector) {
        var markUpFee = 0;
        var amt = 0;
        var additional = 0;
        var tktFee = 0;
        if (document.getElementById("markUpFee").value) {
            markUpFee = parseFloat(document.getElementById("markUpFee").value);
            document.getElementById("markUpFee").value = markUpFee.toFixed(2);
        }
        if (document.getElementById("amt").value) {
            amt = parseFloat(document.getElementById("amt").value);
            document.getElementById("amt").value = amt.toFixed(2);
        }
        if (document.getElementById("additional").value) {
            additional = parseFloat(document.getElementById("additional").value);
            document.getElementById("additional").value = additional.toFixed(2);
        }
        if (document.getElementById("tktFee").value) {
            tktFee = parseFloat(document.getElementById("tktFee").value);
            document.getElementById("tktFee").value = tktFee.toFixed(2);
        }
        var total = markUpFee + amt + additional + tktFee;
        document.getElementById("total").value = total.toFixed(2) + " GBP";
    };
    Gtc_Payment.prototype.selfNextAction = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.InputValidator()) {
                    this.execute();
                }
                return [2 /*return*/];
            });
        });
    };
    Gtc_Payment.prototype.execute = function () {
        var markUpFee = document.getElementById('markUpFee').value;
        var ccName = document.getElementById('name').value;
        var fee = document.getElementById('tktFee').value;
        var pqAmt = document.getElementById('amt').value;
        var additional = document.getElementById('additional').value;
        var total = document.getElementById('total').value;
        var fullCard = this.$('#creditCards').children("option:selected").val();
        var option = this.$('#test').children("option:selected").val();
        var last4 = "";
        var code;
        if (fullCard == "addCC") {
            code = this.$('#vendor').children("option:selected").val();
            fullCard = document.getElementById("cardInUse").value;
            for (var i = fullCard.length - 4; i < fullCard.length; i++) {
                last4 = last4 + fullCard[i].toString();
            }
            // console.log("addCC selected", fullCard);
        }
        else {
            var cardSelected = this.creditCardList.filter(function (x) { return x['cardMasked'] == fullCard; });
            last4 = cardSelected[0]['last4'];
            code = cardSelected[0]['code'];
            // console.log("cardMasked selected", cardSelected);
        }
        var refId = document.getElementById('refId').value;
        var exp = document.getElementById('expiration').value;
        var expMonth = exp.split("/")[0];
        var expYear = exp.split("/")[1];
        // let xxxxxxxxxx  = (<HTMLInputElement>document.getElementById('xxxxxxxxxxxx')).value;
        // let xxxxxxxxxx  = (<HTMLInputElement>document.getElementById('xxxxxxxxxxxx')).value;
        var pack = {
            "markUpFee": markUpFee,
            "fee": fee,
            "name": ccName,
            "pqAmt": pqAmt,
            "additional": additional,
            "total": total,
            "fullCard": fullCard,
            "expMonth": expMonth,
            "expYear": expYear,
            "card4": last4,
            "option": option,
            "ccCode": code,
            "refId": refId,
            "UpdateRmk": this.updateRmks
        };
        console.log("pack", pack);
        var restModalOptions = {
            title: 'Confirmation',
            actions: [
                {
                    className: 'app.common.views.Button',
                    caption: 'Cancel',
                    actionName: 'cancel',
                    type: 'secondary'
                },
                {
                    className: 'app.common.views.Button',
                    caption: 'Back',
                    actionName: 'back',
                    type: 'secondary'
                },
                {
                    className: 'app.common.views.Button',
                    caption: "Add Remarks",
                    actionName: 'next',
                    type: 'success'
                }
            ]
        };
        (0, Context_1.getService)(LayerService_1.LayerService).showInModal(new CheckTotal_1.CheckTotal({ model: new RestModel_1.RestModel() }, pack), restModalOptions, { display: 'areaView' });
    };
    Gtc_Payment.prototype.InputValidator = function () {
        var allOk = true;
        var total = document.getElementById("total").value;
        if (parseFloat(total.split("GBP")[0]) > 0) {
            this.fieldOk("total");
            var required = document.querySelectorAll('[required]');
            for (var i = 0; i < required.length; i++) {
                var id = required[i].id;
                // console.log("InputValidator:" + id);
                var valueRead = document.getElementById(id).value;
                if (id == "creditCards" && valueRead == "ccNoSelected") {
                    this.errorOnField(id, "Field cannot be empty or blank");
                    allOk = false;
                    break;
                }
                else if (id == "creditCards" && valueRead == "addCC") {
                    if (this.status["creditCards"] == true) {
                        this.fieldOk("creditCards");
                    }
                    if (document.getElementById("vendor").value == "noVendor") {
                        this.status['vendor'] = true;
                        this.errorOnField("vendor", "Select one");
                        allOk = false;
                        break;
                    }
                    else {
                        this.fieldOk("vendor");
                    }
                    var typedCard = document.getElementById("cardInUse").value;
                    if (typedCard.length == 16 && this.status['cardInUse'] == true) {
                        this.fieldOk('cardInUse');
                    }
                    else if (typedCard.length > 16) {
                        this.errorOnField("cardInUse", "Maximum 16 numbers");
                        allOk = false;
                        break;
                    }
                    else if (typedCard.length <= 15) {
                        this.status['cardInUse'] = true;
                        this.errorOnField("cardInUse", "Minimum 16 numbers");
                        allOk = false;
                        break;
                    }
                }
                else if (id == "name") {
                    var name_1 = document.getElementById("name").value;
                    if (!name_1) {
                        // console.log("entro!");
                        this.errorOnField("name", "Name is mandatory");
                        allOk = false;
                        break;
                    }
                    else if (name_1 && this.status["name"] == true) {
                        this.fieldOk("creditCards");
                    }
                }
                else if (id == "name") {
                    var name_2 = document.getElementById("name").value;
                    if (!name_2) {
                        this.errorOnField("name", "Name is mandatory");
                        allOk = false;
                        break;
                    }
                    else if (name_2 && this.status["name"] == true) {
                        this.fieldOk("creditCards");
                    }
                }
                else if (id == "expiration") {
                    var expiration = document.getElementById("expiration").value;
                    if (!expiration) {
                        this.errorOnField("expiration", "Expiration is mandatory");
                        allOk = false;
                        break;
                    }
                    else {
                        // if (this.status["expiration"] == true) {
                        //     this.fieldOk("expiration");
                        // }                        
                        var date = new Date();
                        var year4 = date.getFullYear().toString();
                        var thisMonth = date.getMonth() + 1;
                        var year2 = parseFloat(year4[2] + year4[3]);
                        var exp = document.getElementById("expiration").value;
                        var expMonth = parseFloat(exp.split("/")[0]);
                        var expYear = parseFloat(exp.split("/")[1]);
                        // console.log("expMonth", expMonth);
                        // console.log("thisMonth", thisMonth);
                        if (isNaN(expMonth) || isNaN(expYear) || expMonth > 12 || expMonth < 1 || expYear < year2 || (expYear == year2 && expMonth < thisMonth)) {
                            this.errorOnField("expiration", "MM/YY like: 05/27");
                            allOk = false;
                            break;
                        }
                        else {
                            this.fieldOk("expiration");
                        }
                    }
                }
            }
        }
        else {
            this.errorOnField("total", "Must be greater than 0");
            allOk = false;
        }
        // if (this.status["addCC"] == true) {
        //     (<HTMLDivElement>document.getElementById("creditCardsDiv")).classList.remove("has-error"); 
        //     (<HTMLDivElement>document.getElementById("creditCardsError")).innerText = "";
        //     this.status["addCC"] = false;
        //     id = "cardInUse";
        //     if (!(<HTMLSelectElement>document.getElementById(id)).value) {
        //         this.errorOnField(id, "Type credit card number");
        //         allOk = false;
        //         break;
        //     }
        // } else {
        //     this.errorOnField(id, "Field cannot be empty or blank");
        //     allOk = false;
        //     break;
        // }
        // else {
        //     this.fieldOk(id);
        // }
        return allOk;
    };
    Gtc_Payment.prototype.errorOnField = function (id, message) {
        document.getElementById(id + "Error").innerText = message;
        document.getElementById(id + "Div").classList.add("has-error");
        document.getElementById(id).focus();
        this.status[id] = true;
    };
    Gtc_Payment.prototype.fieldOk = function (id) {
        if (this.status[id] == true) {
            document.getElementById(id + "Div").classList.remove("has-error");
            document.getElementById(id + "Error").innerText = "";
            this.status[id] = false;
        }
    };
    Gtc_Payment = __decorate([
        (0, Template_1.Template)('com-internova-gtcpayment-web-module:Gtc_Payment'),
        __metadata("design:paramtypes", [Object, Object])
    ], Gtc_Payment);
    return Gtc_Payment;
}(AbstractView_1.AbstractView));
exports.Gtc_Payment = Gtc_Payment;


});
System.registerDynamic("com-internova-gtcpayment-web-module/views/Gtc_Payment.js", ["com-internova-gtcpayment-web-module/views/Gtc_Payment"], false, function (require, exports) {Object.assign(exports, require("com-internova-gtcpayment-web-module/views/Gtc_Payment"))});
System.registerDynamic("com-internova-gtcpayment-web-module", ["com-internova-gtcpayment-web-module/index"], false, function (require, exports) {Object.assign(exports, require("com-internova-gtcpayment-web-module/index"))});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb2RlL18udHMiLCJzcmMvY29kZS9jb21tb24vSVV0aWxpdGFyaW8udHMiLCJzcmMvY29kZS9jb21tb24vVXRpbGl0YXJpby50cyIsInNyYy9jb2RlL2NvbW1vbi9YbWxQYXlMb2Fkcy50cyIsInNyYy9jb2RlL0NvbnRleHQudHMiLCJzcmMvY29kZS9jb250cm9sbGVycy9JU2FicmVDb250cm9sbGVyLnRzIiwic3JjL2NvZGUvY29udHJvbGxlcnMvU2FicmVDb250cm9sbGVyLnRzIiwic3JjL2NvZGUvaW5kZXgudHMiLCJzcmMvY29kZS9NYWluLnRzIiwiQzovVXNlcnMvZGNhcnNpbi9lY2xpcHNlLXdvcmtzcGFjZS9HVENfVUtQYXltZW50L3dlYi1zcmMvY29tLWludGVybm92YS1ndGNwYXltZW50LXdlYi1tb2R1bGUvYnVpbGQvcHJvZC9tZXRhL2Nqcy9tb2RlbC9BZGRSZW1hcmtzLmpzIiwic3JjL2NvZGUvbW9kZWwvY2NEYXRhLnRzIiwic3JjL2NvZGUvbW9kZWwvcHFGYXJlLnRzIiwic3JjL2NvZGUvbW9kZWwvcmVtYXJrLnRzIiwic3JjL2NvZGUvbW9kZWwvUmVzdE1vZGVsLnRzIiwic3JjL2NvZGUvc2VydmljZXMvRXh0ZXJuYWxTZXJ2aWNlLnRzIiwic3JjL2NvZGUvc2VydmljZXMvSUV4dGVybmFsU2VydmljZS50cyIsInNyYy9jb2RlL3NlcnZpY2VzL0lTYWJyZVNlcnZpY2UudHMiLCJzcmMvY29kZS9zZXJ2aWNlcy9TYWJyZVNlcnZpY2UudHMiLCJzcmMvY29kZS92aWV3cy9DaGVja1RvdGFsLnRzIiwic3JjL2NvZGUvdmlld3MvR3RjX1BheW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlDQUF5Qzs7Ozs7O0FDQXpDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkEsbUZBQWtGO0FBQ2xGLCtEQUE4RDtBQUM5RCw2Q0FBNEM7QUFDNUMsc0NBQXFEO0FBRXJEO0lBQWdDLDhCQUFlO0lB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QSthdkI7SUFBRCxrQkFBQztDQS9hRCxBQSthQyxDQS9hZ0MsMkJBQVksR0ErYTVDO0FBL2FZLGtDQUFXIiwiZmlsZSI6Im1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNvbS1pbnRlcm5vdmEtZ3RjcGF5bWVudC13ZWItbW9kdWxlICovIiwiZXhwb3J0IGludGVyZmFjZSBJVXRpbGl0YXJpbyB7XHJcbiAgICBHZXRWYWx1ZShQbGFpblRleHQgOiBzdHJpbmcsIHJlZ2V4IDogUmVnRXhwLCBwb3M6IG51bWJlcikgOiBzdHJpbmc7XHJcbiAgICBHZXRWYWx1ZXMoUGxhaW5UZXh0IDogc3RyaW5nLCByZWdleCA6IFJlZ0V4cCwgcG9zOiBudW1iZXIpOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgSXNNYXRjaChQbGFpblRleHQgOiBzdHJpbmcsIFBhdHRlcm4gOiBzdHJpbmcpIDogYm9vbGVhbjtcclxuICAgIEdldFhQYXRoUmVzdWx0KHJlc3BvbnNlOnN0cmluZywgZXhwcmVzc2lvbjpzdHJpbmcsIHhwYXRoTnNSZXNvbHZlcjphbnksIHR5cGU6bnVtYmVyKTogWFBhdGhSZXN1bHQ7XHJcbiAgICBSZW1vdmVOYW1lU3BhY2UocmVxdWVzdDpzdHJpbmcpIDogc3RyaW5nO1xyXG4gICAgR2V0UGF5TG9hZChhY3Rpb24gOiBzdHJpbmcpIDogUHJvbWlzZTxzdHJpbmc+O1xyXG4gICAgU3RyaW5nVG9YbWwoc3RyWE1MIDogc3RyaW5nKTogRG9jdW1lbnQ7XHJcbiAgICBEb2N1bWVudFRvU3RyaW5nKGRvY3VtZW50OkRvY3VtZW50KTogc3RyaW5nO1xyXG59IiwiaW1wb3J0IHsgSVV0aWxpdGFyaW8gfSBmcm9tIFwiLi9JVXRpbGl0YXJpb1wiO1xyXG5pbXBvcnQgeyBBYnN0cmFjdFNlcnZpY2UgfSBmcm9tIFwic2FicmUtbmd2LWFwcC9hcHAvc2VydmljZXMvaW1wbC9BYnN0cmFjdFNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRXh0ZXJuYWxTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL0V4dGVybmFsU2VydmljZVwiO1xyXG5pbXBvcnQgeyBYbWxQYXlMb2FkcyB9IGZyb20gXCIuL1htbFBheUxvYWRzXCI7XHJcbmltcG9ydCB7IGdldFNlcnZpY2UsIGNmLCBjb250ZXh0IH0gZnJvbSBcIi4uL0NvbnRleHRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVdGlsaXRhcmlvIGV4dGVuZHMgQWJzdHJhY3RTZXJ2aWNlIGltcGxlbWVudHMgSVV0aWxpdGFyaW8ge1xyXG4gICAgc3RhdGljIFNFUlZJQ0VfTkFNRTogc3RyaW5nID0gXCJjb20taW50ZXJub3ZhLWd0Y3BheW1lbnQtd2ViLW1vZHVsZS1VdGlsaXRhcmlvXCI7XHJcblxyXG4gICAgR2V0UGF5TG9hZChhY3Rpb246IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwbDogc3RyaW5nID0gWG1sUGF5TG9hZHMuaXRlbXNbYWN0aW9uXTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJQYXlsb2FkIFwiK2FjdGlvbixcIjpcIixwbCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChwbCAmJiBwbC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocGwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBHZXRYUGF0aFJlc3VsdChyZXNwb25zZTogc3RyaW5nLCBleHByZXNzaW9uOiBzdHJpbmcsIHhwYXRoTnNSZXNvbHZlcjogYW55LCB0eXBlOiBudW1iZXIpOiBYUGF0aFJlc3VsdCB7XHJcbiAgICAgICAgdmFyIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcocmVzcG9uc2UsICd0ZXh0L3htbCcpO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBkb2MuZXZhbHVhdGUoZXhwcmVzc2lvbiwgZG9jLCB4cGF0aE5zUmVzb2x2ZXIsIHR5cGUsIG51bGwpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgSXNNYXRjaChQbGFpblRleHQ6IHN0cmluZywgUGF0dGVybjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHJnID0gbmV3IFJlZ0V4cChQYXR0ZXJuKTtcclxuICAgICAgICByZXR1cm4gcmcudGVzdChQbGFpblRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldFZhbHVlKFBsYWluVGV4dDogc3RyaW5nLCByZWdleDogUmVnRXhwLCBwb3M6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJldHVyblZhbHVlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIGxldCBtO1xyXG5cclxuICAgICAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKFBsYWluVGV4dCkpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChtLmluZGV4ID09PSByZWdleC5sYXN0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG0uZm9yRWFjaCgobWF0Y2gsIGdyb3VwSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChncm91cEluZGV4ID09PSBwb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IG1hdGNoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIEdldFZhbHVlcyhQbGFpblRleHQ6IHN0cmluZywgcmVnZXg6IFJlZ0V4cCwgcG9zOiBudW1iZXIpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgICAgICBsZXQgdmFsdWVzID0gW107XHJcbiAgICAgICAgbGV0IG07XHJcblxyXG4gICAgICAgIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWMoUGxhaW5UZXh0KSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKG0uaW5kZXggPT09IHJlZ2V4Lmxhc3RJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgcmVnZXgubGFzdEluZGV4Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbS5mb3JFYWNoKChtYXRjaCwgZ3JvdXBJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdyb3VwSW5kZXggPT09IHBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKG1hdGNoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgUmVtb3ZlTmFtZVNwYWNlKHJlcXVlc3Q6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmVxdWVzdCA9IHJlcXVlc3QucmVwbGFjZSgveG1sbnM9XFxcIiguKj8pXFxcIi9nLCAnJyk7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0UGF5TG9hZEluZm8oYWN0aW9uOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZ2V0U2VydmljZShFeHRlcm5hbFNlcnZpY2UpLnNlbmRSZXF1ZXN0KCdHRVQnLCBhY3Rpb24pXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdlcnIuc3RhdHVzVGV4dDonLCBlcnIuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIFN0cmluZ1RvWG1sKHN0clhNTDogc3RyaW5nKTogRG9jdW1lbnQge1xyXG4gICAgICAgIHZhciBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHN0clhNTCwgXCJ0ZXh0L3htbFwiKTtcclxuICAgICAgICByZXR1cm4gZG9jO1xyXG4gICAgfVxyXG5cclxuICAgIERvY3VtZW50VG9TdHJpbmcoZG9jdW1lbnQ6IERvY3VtZW50KTogc3RyaW5nIHtcclxuICAgICAgICB2YXIgcmV0dXJuVmFsdWUgPSBuZXcgWE1MU2VyaWFsaXplcigpLnNlcmlhbGl6ZVRvU3RyaW5nKGRvY3VtZW50KVxyXG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgY2xhc3MgWG1sUGF5TG9hZHMge1xyXG4gIHB1YmxpYyBzdGF0aWMgaXRlbXMgPSB7XHJcbiAgICBcIkFkZEFjY291bnRpbmdMaW5lTExTUlFcIjogYDxBZGRBY2NvdW50aW5nTGluZVJRIFRpbWVTdGFtcD1cIjIwMTUtMDQtMDlUMTQ6MzA6MDAtMDY6MDBcIiBWZXJzaW9uPVwiMi4wLjBcIj5cclxuICA8QWlyQWNjb3VudGluZ0xpbmVzPlxyXG4gICAgPEludGVyYWN0aXZlRWxlY3Ryb25pY1RpY2tldD5cclxuICAgICAgPEZPUF9PbmUgVHlwZT1cIkNLXCIvPlxyXG4gICAgICA8SXRpblRvdGFsRmFyZT5cclxuICAgICAgICA8QmFzZUZhcmUgQW1vdW50PVwiMC4wMFwiLz5cclxuICAgICAgICA8Q29tbWlzc2lvbiBBbW91bnQ9XCIwLjAwXCIvPlxyXG4gICAgICAgIDxUYXhlcz5cclxuICAgICAgICAgIDxUYXggQW1vdW50PVwiMC4wMFwiLz5cclxuICAgICAgICA8L1RheGVzPlxyXG4gICAgICA8L0l0aW5Ub3RhbEZhcmU+XHJcbiAgICAgIDxQZXJzb25OYW1lIE5hbWVOdW1iZXI9XCIxLjFcIj5cclxuICAgICAgICA8R2l2ZW5OYW1lPjwvR2l2ZW5OYW1lPlxyXG4gICAgICAgIDxTdXJuYW1lPjwvU3VybmFtZT5cclxuICAgICAgPC9QZXJzb25OYW1lPlxyXG4gICAgICA8VGlja2V0aW5nIGVUaWNrZXROdW1iZXI9XCIyODI4MjgyODI4MFwiIE51bURvY3M9XCIxXCIgVGFyaWZmPVwiRFwiLz5cclxuICAgICAgPFR5cGUgSW5mbz1cIk9ORVwiLz5cclxuICAgICAgPFZlbmRvclByZWZzPlxyXG4gICAgICAgIDxBaXJsaW5lIENvZGU9XCJETFwiLz5cclxuICAgICAgPC9WZW5kb3JQcmVmcz5cclxuICAgIDwvSW50ZXJhY3RpdmVFbGVjdHJvbmljVGlja2V0PlxyXG4gIDwvQWlyQWNjb3VudGluZ0xpbmVzPlxyXG48L0FkZEFjY291bnRpbmdMaW5lUlE+YCxcclxuXHJcbiAgICBcIlVwZGF0ZVJlc2VydmF0aW9uUlFDYXJcIjogYDxVcGRhdGVSZXNlcnZhdGlvblJRIHhtbG5zPVwiaHR0cDovL3dlYnNlcnZpY2VzLnNhYnJlLmNvbS9wbnJidWlsZGVyL3YxXzE5XCJcclxueG1sbnM6bnMyPVwiaHR0cDovL3NlcnZpY2VzLnNhYnJlLmNvbS9yZXMvb3IvdjFfMTRcIiBWZXJzaW9uPVwiMS4xOS4wXCI+XHJcbjxSZXNlcnZhdGlvblVwZGF0ZUxpc3Q+XHJcbiAgPFJlc2VydmF0aW9uVXBkYXRlSXRlbT5cclxuICAgIDxQcm9kdWN0VXBkYXRlIG9wPVwiQ1wiPlxyXG4gICAgICA8UHJvZHVjdD5cclxuICAgICAgICA8bnMyOlByb2R1Y3REZXRhaWxzIGVuZERhdGVUaW1lPVwiXCIgc3RhcnREYXRlVGltZT1cIlwiIHN0YXJ0UG9pbnQ9XCJcIiBzdGF0dXNDb2RlPVwiR0tcIiB2ZW5kb3JDb2RlPVwiXCI+XHJcbiAgICAgICAgICA8bnMyOlByb2R1Y3ROYW1lIHR5cGU9XCJDQVJcIi8+XHJcbiAgICAgICAgICA8bnMyOlZlaGljbGU+XHJcbiAgICAgICAgICAgIDxuczI6Q29uZmlybWF0aW9uTnVtYmVyPjwvbnMyOkNvbmZpcm1hdGlvbk51bWJlcj5cclxuICAgICAgICAgICAgPG5zMjpWZWhpY2xlUmVudGFsQ29yZT5cclxuICAgICAgICAgICAgICA8bnMyOkRyb3BPZmZMb2NhdGlvbkRldGFpbHMgbG9jYXRpb25Db2RlPVwiXCIvPlxyXG4gICAgICAgICAgICAgIDxuczI6TG9jYXRpb25EZXRhaWxzIGxvY2F0aW9uQ29kZT1cIlwiLz5cclxuICAgICAgICAgICAgPC9uczI6VmVoaWNsZVJlbnRhbENvcmU+XHJcbiAgICAgICAgICAgIDxuczI6VmVoaWNsZVZlbmRvckF2YWlsPlxyXG4gICAgICAgICAgICAgIDxuczI6VmVoaWNsZVJlc0NvcmU+XHJcbiAgICAgICAgICAgICAgICA8bnMyOlByaWNlZEVxdWlwbWVudCBlcXVpcG1lbnRUeXBlPVwiXCIgcXVhbnRpdHk9XCIxXCIvPlxyXG4gICAgICAgICAgICAgICAgPG5zMjpSZW50YWxSYXRlPlxyXG4gICAgICAgICAgICAgICAgICA8bnMyOkJpbGxpbmcgcmVmZXJlbmNlPVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8bnMyOkNsaWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8bnMyOklEPjwvbnMyOklEPlxyXG4gICAgICAgICAgICAgICAgICA8L25zMjpDbGllbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxuczI6U2VydmljZUluZm9ybWF0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG5zMjpUZXh0PjwvbnMyOlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvbnMyOlNlcnZpY2VJbmZvcm1hdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbnMyOlJlbnRhbFJhdGU+XHJcbiAgICAgICAgICAgICAgICA8bnMyOkNoYXJnZSBkcm9wT2ZmQ2hhcmdlPVwiXCIgdHlwZU9mR3VhcmFudGVlPVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L25zMjpWZWhpY2xlUmVzQ29yZT5cclxuICAgICAgICAgICAgPC9uczI6VmVoaWNsZVZlbmRvckF2YWlsPlxyXG4gICAgICAgICAgICA8bnMyOlByaWNpbmdFbGVtZW50cz5cclxuICAgICAgICAgICAgPC9uczI6UHJpY2luZ0VsZW1lbnRzPlxyXG4gICAgICAgICAgPC9uczI6VmVoaWNsZT5cclxuICAgICAgICA8L25zMjpQcm9kdWN0RGV0YWlscz5cclxuICAgICAgPC9Qcm9kdWN0PlxyXG4gICAgPC9Qcm9kdWN0VXBkYXRlPlxyXG4gIDwvUmVzZXJ2YXRpb25VcGRhdGVJdGVtPlxyXG48L1Jlc2VydmF0aW9uVXBkYXRlTGlzdD5cclxuPC9VcGRhdGVSZXNlcnZhdGlvblJRPmAsXHJcblxyXG5cIlVwZGF0ZVJlc2VydmF0aW9uUlFybWtcIjogYDxVcGRhdGVSZXNlcnZhdGlvblJRIHhtbG5zPVwiaHR0cDovL3dlYnNlcnZpY2VzLnNhYnJlLmNvbS9wbnJidWlsZGVyL3YxXzE5XCIgeG1sbnM6b3I9XCJodHRwOi8vc2VydmljZXMuc2FicmUuY29tL3Jlcy9vci92MV8xMlwiIFZlcnNpb249XCIxLjE5LjBcIiBFY2hvVG9rZW49XCJSSy9FTlYvUFhHU1NETUxULTYwNzAzXCI+XHJcbjxSZXF1ZXN0VHlwZT5TdGF0ZWZ1bDwvUmVxdWVzdFR5cGU+XHJcbiAgPFJlc2VydmF0aW9uVXBkYXRlTGlzdD5cclxuICAgICAgPFJlc2VydmF0aW9uVXBkYXRlSXRlbT5cclxuICAgICAgPC9SZXNlcnZhdGlvblVwZGF0ZUl0ZW0+XHJcbiAgPC9SZXNlcnZhdGlvblVwZGF0ZUxpc3Q+XHJcbjwvVXBkYXRlUmVzZXJ2YXRpb25SUT5gLFxyXG5cclxuICAgIFwiVXBkYXRlUmVzZXJ2YXRpb25SUUhvdGVsXCI6IGA8VXBkYXRlUmVzZXJ2YXRpb25SUSB4bWxucz1cImh0dHA6Ly93ZWJzZXJ2aWNlcy5zYWJyZS5jb20vcG5yYnVpbGRlci92MV8xOVwiXHJcbnhtbG5zOm5zMj1cImh0dHA6Ly9zZXJ2aWNlcy5zYWJyZS5jb20vcmVzL29yL3YxXzE0XCIgVmVyc2lvbj1cIjEuMTkuMFwiPlxyXG4gIDxSZXNlcnZhdGlvblVwZGF0ZUxpc3Q+XHJcbiAgICA8UmVzZXJ2YXRpb25VcGRhdGVJdGVtPlxyXG4gICAgICA8UHJvZHVjdFVwZGF0ZSBvcD1cIkNcIj5cclxuICAgICAgICA8UHJvZHVjdD5cclxuICAgICAgICAgIDxuczI6UHJvZHVjdERldGFpbHM+XHJcbiAgICAgICAgICAgIDxuczI6UHJvZHVjdE5hbWUgdHlwZT1cIkhIVFwiLz5cclxuICAgICAgICAgICAgPG5zMjpIb3RlbD5cclxuICAgICAgICAgICAgICA8bnMyOlJlc2VydmF0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG5zMjpMaW5lU3RhdHVzPkdLPC9uczI6TGluZVN0YXR1cz5cclxuICAgICAgICAgICAgICAgIDxuczI6U3BlY2lhbFByZWZzPlxyXG4gICAgICAgICAgICAgICAgPC9uczI6U3BlY2lhbFByZWZzPlxyXG4gICAgICAgICAgICAgICAgPG5zMjpSb29tVHlwZT5cclxuICAgICAgICAgICAgICAgICAgPG5zMjpSb29tVHlwZUNvZGU+PC9uczI6Um9vbVR5cGVDb2RlPlxyXG4gICAgICAgICAgICAgICAgICA8bnMyOk51bWJlck9mVW5pdHM+PC9uczI6TnVtYmVyT2ZVbml0cz5cclxuICAgICAgICAgICAgICAgIDwvbnMyOlJvb21UeXBlPlxyXG4gICAgICAgICAgICAgICAgPG5zMjpSb29tUmF0ZXM+XHJcbiAgICAgICAgICAgICAgICAgIDxuczI6QW1vdW50QmVmb3JlVGF4PjwvbnMyOkFtb3VudEJlZm9yZVRheD5cclxuICAgICAgICAgICAgICAgICAgPG5zMjpDdXJyZW5jeUNvZGU+PC9uczI6Q3VycmVuY3lDb2RlPlxyXG4gICAgICAgICAgICAgICAgPC9uczI6Um9vbVJhdGVzPlxyXG4gICAgICAgICAgICAgICAgPG5zMjpUaW1lU3BhblN0YXJ0PjwvbnMyOlRpbWVTcGFuU3RhcnQ+XHJcbiAgICAgICAgICAgICAgICA8bnMyOlRpbWVTcGFuRW5kPjwvbnMyOlRpbWVTcGFuRW5kPlxyXG4gICAgICAgICAgICAgICAgPG5zMjpHdWFyYW50ZWU+XHJcbiAgICAgICAgICAgICAgICA8L25zMjpHdWFyYW50ZWU+XHJcbiAgICAgICAgICAgICAgICA8bnMyOkNoYWluQ29kZT48L25zMjpDaGFpbkNvZGU+XHJcbiAgICAgICAgICAgICAgICA8bnMyOkhvdGVsQ2l0eUNvZGU+PC9uczI6SG90ZWxDaXR5Q29kZT5cclxuICAgICAgICAgICAgICAgIDxuczI6SG90ZWxOYW1lPjwvbnMyOkhvdGVsTmFtZT5cclxuICAgICAgICAgICAgICA8L25zMjpSZXNlcnZhdGlvbj5cclxuICAgICAgICAgICAgICA8bnMyOkFkZGl0aW9uYWxJbmZvcm1hdGlvbj5cclxuICAgICAgICAgICAgICAgIDxuczI6Q29uZmlybWF0aW9uTnVtYmVyPjwvbnMyOkNvbmZpcm1hdGlvbk51bWJlcj5cclxuICAgICAgICAgICAgICAgIDxuczI6QWRkcmVzcz5cclxuICAgICAgICAgICAgICAgIDwvbnMyOkFkZHJlc3M+XHJcbiAgICAgICAgICAgICAgICA8bnMyOkNvbnRhY3ROdW1iZXJzPlxyXG4gICAgICAgICAgICAgICAgICA8bnMyOlBob25lTnVtYmVyPjwvbnMyOlBob25lTnVtYmVyPlxyXG4gICAgICAgICAgICAgICAgPC9uczI6Q29udGFjdE51bWJlcnM+XHJcbiAgICAgICAgICAgICAgPC9uczI6QWRkaXRpb25hbEluZm9ybWF0aW9uPlxyXG4gICAgICAgICAgICA8L25zMjpIb3RlbD5cclxuICAgICAgICAgIDwvbnMyOlByb2R1Y3REZXRhaWxzPlxyXG4gICAgICAgIDwvUHJvZHVjdD5cclxuICAgICAgPC9Qcm9kdWN0VXBkYXRlPlxyXG4gICAgPC9SZXNlcnZhdGlvblVwZGF0ZUl0ZW0+XHJcbiAgPC9SZXNlcnZhdGlvblVwZGF0ZUxpc3Q+XHJcbjwvVXBkYXRlUmVzZXJ2YXRpb25SUT5gLFxyXG5cclxuICAgIFwiQWRkUmVtYXJrTExTUlFcIjogYFxyXG48QWRkUmVtYXJrUlEgeG1sbnM9XCJodHRwOi8vd2Vic2VydmljZXMuc2FicmUuY29tL3NhYnJlWE1MLzIwMTEvMTBcIiB4bWxuczp4cz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hXCIgeG1sbnM6eHNpPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcIiBSZXR1cm5Ib3N0Q29tbWFuZD1cInRydWVcIiBWZXJzaW9uPVwiMi4xLjFcIj5cclxuPFJlbWFya0luZm8+XHJcbjwvUmVtYXJrSW5mbz5cclxuPC9BZGRSZW1hcmtSUT5gLFxyXG5cclxuICAgIFwiRVBTX0VYVF9Qcm9maWxlUmVhZFJRXCI6IGAgICAgICAgIFxyXG48U2FicmVfT1RBX1Byb2ZpbGVSZWFkUlEgeG1sbnM9XCJodHRwOi8vd3d3LnNhYnJlLmNvbS9lcHMvc2NoZW1hc1wiXHJcbnhtbG5zOnhzaT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXCIgeHNpOnNjaGVtYUxvY2F0aW9uPVwiaHR0cDovL3d3dy5zYWJyZS5jb20vZXBzL3NjaGVtYXMgICAgICAgIFxyXG4gICAgICAgIC4uXFxzY2hlbWFzV1NETFxcU2FicmVfT1RBX1Byb2ZpbGVSZWFkUlEueHNkXCIgVmVyc2lvbj1cIjYuNTVcIj5cclxuPFByb2ZpbGU+XHJcbiAgPFRQQV9JZGVudGl0eSBVbmlxdWVJRD1cIjIyOTI4MTE5N1wiIENsaWVudENvZGU9XCJUTlwiIERvbWFpbklEPVwiS0EwSlwiIENsaWVudENvbnRleHRDb2RlPVwiTVlTXCI+XHJcbiAgPC9UUEFfSWRlbnRpdHk+XHJcbjwvUHJvZmlsZT5cclxuPC9TYWJyZV9PVEFfUHJvZmlsZVJlYWRSUT5gLFxyXG5cclxuICAgIFwiZVRpY2tldENvdXBvbkxMU1JRXCI6IGBcclxuPGVUaWNrZXRDb3Vwb25SUSB4bWxucz1cImh0dHA6Ly93ZWJzZXJ2aWNlcy5zYWJyZS5jb20vc2FicmVYTUwvMjAxMS8xMFwiIFZlcnNpb249XCIyLjAuMFwiIFJldHVybkhvc3RDb21tYW5kPVwidHJ1ZVwiPlxyXG48VGlja2V0aW5nIGVUaWNrZXROdW1iZXI9XCIyMjA0ODk4MzUxNTgwXCIvPlxyXG48L2VUaWNrZXRDb3Vwb25SUT5gLFxyXG5cclxuICAgIFwiR2V0UmVzZXJ2YXRpb25SUV9XaXRoU2Vzc2lvblwiOiBgXHJcbjxTT0FQLUVOVjpFbnZlbG9wZSB4bWxuczpTT0FQLUVOVj1cImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3NvYXAvZW52ZWxvcGUvXCJcclxueG1sbnM6ZWI9XCJodHRwOi8vd3d3LmVieG1sLm9yZy9uYW1lc3BhY2VzL21lc3NhZ2VIZWFkZXJcIlxyXG54bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxyXG54bWxuczp4c2Q9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L1hNTFNjaGVtYVwiPlxyXG48U09BUC1FTlY6SGVhZGVyPlxyXG4gIDxlYjpNZXNzYWdlSGVhZGVyIFNPQVAtRU5WOm11c3RVbmRlcnN0YW5kPVwiMVwiIGViOnZlcnNpb249XCIxLjBcIj5cclxuICAgIDxlYjpGcm9tPlxyXG4gICAgICA8ZWI6UGFydHlJZCB0eXBlPVwidXJuOngxMi5vcmc6SU81OjAxXCI+OTk5OTk5PC9lYjpQYXJ0eUlkPlxyXG4gICAgPC9lYjpGcm9tPlxyXG4gICAgPGViOlRvPlxyXG4gICAgICA8ZWI6UGFydHlJZCB0eXBlPVwidXJuOngxMi5vcmc6SU81OjAxXCI+MTIzMTIzPC9lYjpQYXJ0eUlkPlxyXG4gICAgPC9lYjpUbz5cclxuICAgIDxlYjpDUEFJZD5VNTExPC9lYjpDUEFJZD5cclxuICAgIDxlYjpDb252ZXJzYXRpb25JZD53ZWJzZXJ2aWNlcy5zdXBwb3J0QHNhYnJlLmNvbTwvZWI6Q29udmVyc2F0aW9uSWQ+XHJcbiAgICA8ZWI6U2VydmljZSBlYjp0eXBlPVwiT1RBXCI+QWlyPC9lYjpTZXJ2aWNlPlxyXG4gICAgPGViOkFjdGlvbj5HZXRSZXNlcnZhdGlvblJRPC9lYjpBY3Rpb24+XHJcbiAgICA8ZWI6TWVzc2FnZURhdGE+XHJcbiAgICAgIDxlYjpNZXNzYWdlSWQ+MTAwMDwvZWI6TWVzc2FnZUlkPlxyXG4gICAgICA8ZWI6VGltZXN0YW1wPjIwMTYtMTItMzBUMDU6MjU6MzJ6PC9lYjpUaW1lc3RhbXA+XHJcbiAgICA8L2ViOk1lc3NhZ2VEYXRhPlxyXG4gIDwvZWI6TWVzc2FnZUhlYWRlcj5cclxuICA8d3NzZTpTZWN1cml0eSB4bWxuczp3c3NlPVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwMi8xMi9zZWNleHRcIlxyXG4gICAgeG1sbnM6d3N1PVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwMi8xMi91dGlsaXR5XCI+XHJcbiAgICA8d3NzZTpCaW5hcnlTZWN1cml0eVRva2VuPjwvd3NzZTpCaW5hcnlTZWN1cml0eVRva2VuPlxyXG4gIDwvd3NzZTpTZWN1cml0eT5cclxuPC9TT0FQLUVOVjpIZWFkZXI+XHJcbjxTT0FQLUVOVjpCb2R5PlxyXG4gIDxHZXRSZXNlcnZhdGlvblJRIFZlcnNpb249XCIxLjE5LjBcIlxyXG4gICAgeG1sbnM9XCJodHRwOi8vd2Vic2VydmljZXMuc2FicmUuY29tL3BucmJ1aWxkZXIvdjFfMTlcIj5cclxuICAgIDxMb2NhdG9yPjwvTG9jYXRvcj5cclxuICAgIDxSZXF1ZXN0VHlwZT5TdGF0ZWZ1bDwvUmVxdWVzdFR5cGU+XHJcbiAgICA8UmV0dXJuT3B0aW9ucyBQcmljZVF1b3RlU2VydmljZVZlcnNpb249XCIzLjIuMFwiPlxyXG4gICAgICA8U3ViamVjdEFyZWFzPlxyXG4gICAgICAgIDxTdWJqZWN0QXJlYT5GVUxMPC9TdWJqZWN0QXJlYT5cclxuICAgICAgICA8U3ViamVjdEFyZWE+UFJJQ0VfUVVPVEU8L1N1YmplY3RBcmVhPlxyXG4gICAgICA8L1N1YmplY3RBcmVhcz5cclxuICAgIDwvUmV0dXJuT3B0aW9ucz5cclxuICA8L0dldFJlc2VydmF0aW9uUlE+XHJcbjwvU09BUC1FTlY6Qm9keT5cclxuPC9TT0FQLUVOVjpFbnZlbG9wZT5gLFxyXG5cclxuICAgIFwiR2V0UmVzZXJ2YXRpb25SUVwiOiBgXHJcbjxHZXRSZXNlcnZhdGlvblJRIFZlcnNpb249XCIxLjE5LjBcIlxyXG54bWxucz1cImh0dHA6Ly93ZWJzZXJ2aWNlcy5zYWJyZS5jb20vcG5yYnVpbGRlci92MV8xOVwiPlxyXG48TG9jYXRvcj5PU1VJQ0k8L0xvY2F0b3I+XHJcbjxSZXF1ZXN0VHlwZT5TdGF0ZWZ1bDwvUmVxdWVzdFR5cGU+XHJcbjxSZXR1cm5PcHRpb25zPlxyXG4gIDxWaWV3TmFtZT5WYURlZmF1bHRXaXRoUHE8L1ZpZXdOYW1lPlxyXG4gIDxSZXNwb25zZUZvcm1hdD5TVEw8L1Jlc3BvbnNlRm9ybWF0PlxyXG48L1JldHVybk9wdGlvbnM+XHJcbjwvR2V0UmVzZXJ2YXRpb25SUT5gLFxyXG5cclxuICAgIFwiSWdub3JlVHJhbnNhY3Rpb25MTFNSUV9XaXRoU2Vzc2lvblwiOiBgXHJcbjxTT0FQLUVOVjpFbnZlbG9wZSB4bWxuczpTT0FQLUVOVj1cImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3NvYXAvZW52ZWxvcGUvXCJcclxueG1sbnM6ZWI9XCJodHRwOi8vd3d3LmVieG1sLm9yZy9uYW1lc3BhY2VzL21lc3NhZ2VIZWFkZXJcIlxyXG54bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxyXG54bWxuczp4c2Q9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L1hNTFNjaGVtYVwiPlxyXG48U09BUC1FTlY6SGVhZGVyPlxyXG4gIDxlYjpNZXNzYWdlSGVhZGVyIFNPQVAtRU5WOm11c3RVbmRlcnN0YW5kPVwiMVwiIGViOnZlcnNpb249XCIxLjBcIj5cclxuICAgIDxlYjpGcm9tPlxyXG4gICAgICA8ZWI6UGFydHlJZCB0eXBlPVwidXJuOngxMi5vcmc6SU81OjAxXCI+OTk5OTk5PC9lYjpQYXJ0eUlkPlxyXG4gICAgPC9lYjpGcm9tPlxyXG4gICAgPGViOlRvPlxyXG4gICAgICA8ZWI6UGFydHlJZCB0eXBlPVwidXJuOngxMi5vcmc6SU81OjAxXCI+MTIzMTIzPC9lYjpQYXJ0eUlkPlxyXG4gICAgPC9lYjpUbz5cclxuICAgIDxlYjpDUEFJZD5LQTBKPC9lYjpDUEFJZD5cclxuICAgIDxlYjpDb252ZXJzYXRpb25JZD53ZWJzZXJ2aWNlcy5zdXBwb3J0QHNhYnJlLmNvbTwvZWI6Q29udmVyc2F0aW9uSWQ+XHJcbiAgICA8ZWI6U2VydmljZSBlYjp0eXBlPVwiT1RBXCI+SWdub3JlVHJhbnNhY3Rpb25MTFNSUTwvZWI6U2VydmljZT5cclxuICAgIDxlYjpBY3Rpb24+SWdub3JlVHJhbnNhY3Rpb25MTFNSUTwvZWI6QWN0aW9uPlxyXG4gICAgPGViOk1lc3NhZ2VEYXRhPlxyXG4gICAgICA8ZWI6TWVzc2FnZUlkPjEwMDA8L2ViOk1lc3NhZ2VJZD5cclxuICAgICAgPGViOlRpbWVzdGFtcD4yMDE2LTEyLTMwVDA1OjI1OjMyejwvZWI6VGltZXN0YW1wPlxyXG4gICAgPC9lYjpNZXNzYWdlRGF0YT5cclxuICA8L2ViOk1lc3NhZ2VIZWFkZXI+XHJcbiAgPHdzc2U6U2VjdXJpdHkgeG1sbnM6d3NzZT1cImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDIvMTIvc2VjZXh0XCJcclxuICAgIHhtbG5zOndzdT1cImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDIvMTIvdXRpbGl0eVwiPlxyXG4gICAgPHdzc2U6QmluYXJ5U2VjdXJpdHlUb2tlbj48L3dzc2U6QmluYXJ5U2VjdXJpdHlUb2tlbj5cclxuICA8L3dzc2U6U2VjdXJpdHk+XHJcbjwvU09BUC1FTlY6SGVhZGVyPlxyXG48U09BUC1FTlY6Qm9keT5cclxuICA8SWdub3JlVHJhbnNhY3Rpb25SUSBSZXR1cm5Ib3N0Q29tbWFuZD1cInRydWVcIiBWZXJzaW9uPVwiMi4wLjBcIlxyXG4gICAgeG1sbnM9XCJodHRwOi8vd2Vic2VydmljZXMuc2FicmUuY29tL3NhYnJlWE1MLzIwMTEvMTBcIi8+XHJcbjwvU09BUC1FTlY6Qm9keT5cclxuPC9TT0FQLUVOVjpFbnZlbG9wZT5gLFxyXG5cclxuICAgIFwiUGFzc2VuZ2VyRGV0YWlsc1JRX1dpdGhTZXNzaW9uXCI6IGBcclxuPFNPQVAtRU5WOkVudmVsb3BlIHhtbG5zOlNPQVAtRU5WPVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvc29hcC9lbnZlbG9wZS9cIlxyXG54bWxuczplYj1cImh0dHA6Ly93d3cuZWJ4bWwub3JnL25hbWVzcGFjZXMvbWVzc2FnZUhlYWRlclwiXHJcbnhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXHJcbnhtbG5zOnhzZD1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkvWE1MU2NoZW1hXCI+XHJcbjxTT0FQLUVOVjpIZWFkZXI+XHJcbiAgPGViOk1lc3NhZ2VIZWFkZXIgU09BUC1FTlY6bXVzdFVuZGVyc3RhbmQ9XCIxXCIgZWI6dmVyc2lvbj1cIjEuMFwiPlxyXG4gICAgPGViOkZyb20+XHJcbiAgICAgIDxlYjpQYXJ0eUlkIHR5cGU9XCJ1cm46eDEyLm9yZzpJTzU6MDFcIj45OTk5OTk8L2ViOlBhcnR5SWQ+XHJcbiAgICA8L2ViOkZyb20+XHJcbiAgICA8ZWI6VG8+XHJcbiAgICAgIDxlYjpQYXJ0eUlkIHR5cGU9XCJ1cm46eDEyLm9yZzpJTzU6MDFcIj4xMjMxMjM8L2ViOlBhcnR5SWQ+XHJcbiAgICA8L2ViOlRvPlxyXG4gICAgPGViOkNQQUlkPktBMEo8L2ViOkNQQUlkPlxyXG4gICAgPGViOkNvbnZlcnNhdGlvbklkPndlYnNlcnZpY2VzLnN1cHBvcnRAc2FicmUuY29tPC9lYjpDb252ZXJzYXRpb25JZD5cclxuICAgIDxlYjpTZXJ2aWNlIGViOnR5cGU9XCJPVEFcIj5QYXNzZW5nZXJEZXRhaWxzUlE8L2ViOlNlcnZpY2U+XHJcbiAgICA8ZWI6QWN0aW9uPlBhc3NlbmdlckRldGFpbHNSUTwvZWI6QWN0aW9uPlxyXG4gICAgPGViOk1lc3NhZ2VEYXRhPlxyXG4gICAgICA8ZWI6TWVzc2FnZUlkPjEwMDA8L2ViOk1lc3NhZ2VJZD5cclxuICAgICAgPGViOlRpbWVzdGFtcD4yMDE2LTEyLTMwVDA1OjI1OjMyejwvZWI6VGltZXN0YW1wPlxyXG4gICAgPC9lYjpNZXNzYWdlRGF0YT5cclxuICA8L2ViOk1lc3NhZ2VIZWFkZXI+XHJcbiAgPHdzc2U6U2VjdXJpdHkgeG1sbnM6d3NzZT1cImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDIvMTIvc2VjZXh0XCJcclxuICAgIHhtbG5zOndzdT1cImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDIvMTIvdXRpbGl0eVwiPlxyXG4gICAgPHdzc2U6QmluYXJ5U2VjdXJpdHlUb2tlbj48L3dzc2U6QmluYXJ5U2VjdXJpdHlUb2tlbj5cclxuICA8L3dzc2U6U2VjdXJpdHk+XHJcbjwvU09BUC1FTlY6SGVhZGVyPlxyXG48U09BUC1FTlY6Qm9keT5cclxuICA8UGFzc2VuZ2VyRGV0YWlsc1JRIHhtbG5zPVwiaHR0cDovL3NlcnZpY2VzLnNhYnJlLmNvbS9zcC9wZC92M180XCIgdmVyc2lvbj1cIjMuNC4wXCIgaWdub3JlT25FcnJvcj1cImZhbHNlXCIgaGFsdE9uRXJyb3I9XCJmYWxzZVwiPlxyXG4gICAgPE1pc2NTZWdtZW50U2VsbFJRPlxyXG4gICAgICA8TWlzY1NlZ21lbnQgRGVwYXJ0dXJlRGF0ZVRpbWU9XCIxMi0yMVwiIEluc2VydEFmdGVyPVwiMFwiIE51bWJlckluUGFydHk9XCIxXCIgU3RhdHVzPVwiR0tcIiBUeXBlPVwiT1RIXCI+XHJcbiAgICAgICAgPE9yaWdpbkxvY2F0aW9uIExvY2F0aW9uQ29kZT1cIkZTR1wiLz5cclxuICAgICAgICA8VGV4dD5URVNUPC9UZXh0PlxyXG4gICAgICAgIDxWZW5kb3JQcmVmcz5cclxuICAgICAgICAgIDxBaXJsaW5lIENvZGU9XCJYWFwiLz5cclxuICAgICAgICA8L1ZlbmRvclByZWZzPlxyXG4gICAgICA8L01pc2NTZWdtZW50PlxyXG4gICAgPC9NaXNjU2VnbWVudFNlbGxSUT5cclxuICAgIDxQb3N0UHJvY2Vzc2luZyBoYWx0T25JbnZhbGlkTUNUPVwiZmFsc2VcIiBpZ25vcmVBZnRlcj1cInRydWVcIiB1bm1hc2tDcmVkaXRDYXJkPVwiZmFsc2VcIj5cclxuICAgICAgPFJlZGlzcGxheVJlc2VydmF0aW9uIHdhaXRJbnRlcnZhbD1cIjEwMFwiIHJldHVybkV4dGVuZGVkUHJpY2VRdW90ZT1cImZhbHNlXCIvPlxyXG4gICAgICA8RW5kVHJhbnNhY3Rpb25SUSBzaG91bGRDaGVja1JlZklkPVwidHJ1ZVwiPlxyXG4gICAgICAgIDxFbmRUcmFuc2FjdGlvbiBJbmQ9XCJ0cnVlXCIvPlxyXG4gICAgICAgIDxTb3VyY2UgUmVjZWl2ZWRGcm9tPVwiU1dTIFZJU1RBSkVUXCIvPlxyXG4gICAgICA8L0VuZFRyYW5zYWN0aW9uUlE+XHJcbiAgICAgIDxRdWV1ZVBsYWNlUlEgTnVtUmVzcG9uc2VzPVwiNVwiPlxyXG4gICAgICAgIDxRdWV1ZUluZm8+XHJcbiAgICAgICAgICA8UXVldWVJZGVudGlmaWVyIE51bWJlcj1cIjQwMFwiIFByZWZhdG9yeUluc3RydWN0aW9uQ29kZT1cIjEwXCIgUHNldWRvQ2l0eUNvZGU9XCJLQTBKXCIvPlxyXG4gICAgICAgICAgPFVuaXF1ZUlEIElEPVwiVURGSkdaXCIvPlxyXG4gICAgICAgIDwvUXVldWVJbmZvPlxyXG4gICAgICA8L1F1ZXVlUGxhY2VSUT5cclxuICAgIDwvUG9zdFByb2Nlc3Npbmc+XHJcbiAgICA8UHJvZmlsZVJRPlxyXG4gICAgICA8VW5pcXVlSUQgaWQ9XCJDUkhUTFwiLz5cclxuICAgIDwvUHJvZmlsZVJRPlxyXG4gICAgPFNwZWNpYWxSZXFEZXRhaWxzPlxyXG4gICAgICA8QWRkUmVtYXJrUlE+XHJcbiAgICAgICAgPFJlbWFya0luZm8+XHJcbiAgICAgICAgICA8UmVtYXJrIENvZGU9XCJIXCIgVHlwZT1cIkFscGhhLUNvZGVkXCI+XHJcbiAgICAgICAgICAgIDxUZXh0PjwvVGV4dD5cclxuICAgICAgICAgIDwvUmVtYXJrPlxyXG4gICAgICAgIDwvUmVtYXJrSW5mbz5cclxuICAgICAgPC9BZGRSZW1hcmtSUT5cclxuICAgIDwvU3BlY2lhbFJlcURldGFpbHM+XHJcbiAgPC9QYXNzZW5nZXJEZXRhaWxzUlE+XHJcbjwvU09BUC1FTlY6Qm9keT5cclxuPC9TT0FQLUVOVjpFbnZlbG9wZT5gLFxyXG5cclxuICAgIFwiUGFzc2VuZ2VyRGV0YWlsc1JRXCI6IGBcclxuPFBhc3NlbmdlckRldGFpbHNSUSB4bWxucz1cImh0dHA6Ly9zZXJ2aWNlcy5zYWJyZS5jb20vc3AvcGQvdjNfNFwiIHZlcnNpb249XCIzLjQuMFwiIGlnbm9yZU9uRXJyb3I9XCJmYWxzZVwiIGhhbHRPbkVycm9yPVwiZmFsc2VcIj5cclxuPE1pc2NTZWdtZW50U2VsbFJRPlxyXG4gIDxNaXNjU2VnbWVudCBEZXBhcnR1cmVEYXRlVGltZT1cIjEyLTIxXCIgSW5zZXJ0QWZ0ZXI9XCIwXCIgTnVtYmVySW5QYXJ0eT1cIjFcIiBTdGF0dXM9XCJHS1wiIFR5cGU9XCJPVEhcIj5cclxuICAgIDxPcmlnaW5Mb2NhdGlvbiBMb2NhdGlvbkNvZGU9XCJGU0dcIi8+XHJcbiAgICA8VGV4dD5URVNUPC9UZXh0PlxyXG4gICAgPFZlbmRvclByZWZzPlxyXG4gICAgICA8QWlybGluZSBDb2RlPVwiWFhcIi8+XHJcbiAgICA8L1ZlbmRvclByZWZzPlxyXG4gIDwvTWlzY1NlZ21lbnQ+XHJcbjwvTWlzY1NlZ21lbnRTZWxsUlE+XHJcbjxQb3N0UHJvY2Vzc2luZyBoYWx0T25JbnZhbGlkTUNUPVwiZmFsc2VcIiBpZ25vcmVBZnRlcj1cInRydWVcIiB1bm1hc2tDcmVkaXRDYXJkPVwiZmFsc2VcIj5cclxuICA8UmVkaXNwbGF5UmVzZXJ2YXRpb24gd2FpdEludGVydmFsPVwiMTAwXCIgcmV0dXJuRXh0ZW5kZWRQcmljZVF1b3RlPVwiZmFsc2VcIi8+XHJcbiAgPEVuZFRyYW5zYWN0aW9uUlEgc2hvdWxkQ2hlY2tSZWZJZD1cInRydWVcIj5cclxuICAgIDxFbmRUcmFuc2FjdGlvbiBJbmQ9XCJ0cnVlXCIvPlxyXG4gICAgPFNvdXJjZSBSZWNlaXZlZEZyb209XCJTV1MgVklTVEFKRVRcIi8+XHJcbiAgPC9FbmRUcmFuc2FjdGlvblJRPlxyXG4gIDxRdWV1ZVBsYWNlUlEgTnVtUmVzcG9uc2VzPVwiNVwiPlxyXG4gICAgPFF1ZXVlSW5mbz5cclxuICAgICAgPFF1ZXVlSWRlbnRpZmllciBOdW1iZXI9XCI0MDBcIiBQcmVmYXRvcnlJbnN0cnVjdGlvbkNvZGU9XCIxMFwiIFBzZXVkb0NpdHlDb2RlPVwiS0EwSlwiLz5cclxuICAgICAgPFVuaXF1ZUlEIElEPVwiVURGSkdaXCIvPlxyXG4gICAgPC9RdWV1ZUluZm8+XHJcbiAgPC9RdWV1ZVBsYWNlUlE+XHJcbjwvUG9zdFByb2Nlc3Npbmc+XHJcbjxQcm9maWxlUlE+XHJcbiAgPFVuaXF1ZUlEIGlkPVwiQ1JIVExcIi8+XHJcbjwvUHJvZmlsZVJRPlxyXG48U3BlY2lhbFJlcURldGFpbHM+XHJcbiAgPEFkZFJlbWFya1JRPlxyXG4gICAgPFJlbWFya0luZm8+XHJcbiAgICAgIDxSZW1hcmsgQ29kZT1cIkhcIiBTZWdtZW50TnVtYmVyPVwiMVwiIFR5cGU9XCJHZW5lcmFsXCI+XHJcbiAgICAgICAgPFRleHQ+VEVTVCBSRU1BUksgMjwvVGV4dD5cclxuICAgICAgPC9SZW1hcms+XHJcbiAgICA8L1JlbWFya0luZm8+XHJcbiAgPC9BZGRSZW1hcmtSUT5cclxuPC9TcGVjaWFsUmVxRGV0YWlscz5cclxuPC9QYXNzZW5nZXJEZXRhaWxzUlE+YCxcclxuXHJcbiAgICBcIlF1ZXVlUGxhY2VSUVwiOiBgPFF1ZXVlUGxhY2VSUSB4bWxucz1cImh0dHA6Ly93ZWJzZXJ2aWNlcy5zYWJyZS5jb20vc2FicmVYTUwvMjAxMS8xMFwiXHJcbnhtbG5zOnhzPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWFcIlxyXG54bWxuczp4c2k9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVwiIFZlcnNpb249XCIyLjAuNFwiPlxyXG48UXVldWVJbmZvPlxyXG48UXVldWVJZGVudGlmaWVyIE51bWJlcj1cIlwiIFByZWZhdG9yeUluc3RydWN0aW9uQ29kZT1cIjExXCIgUHNldWRvQ2l0eUNvZGU9XCJcIi8+XHJcbjwvUXVldWVJbmZvPlxyXG48L1F1ZXVlUGxhY2VSUT5gLFxyXG5cclxuICAgIFwiU2FicmVfT1RBX1Byb2ZpbGVSZWFkUlFcIjogYFxyXG48U2FicmVfT1RBX1Byb2ZpbGVSZWFkUlEgeG1sbnM9XCJodHRwOi8vd3d3LnNhYnJlLmNvbS9lcHMvc2NoZW1hc1wiXHJcbnhtbG5zOnhzaT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXCIgeHNpOnNjaGVtYUxvY2F0aW9uPVwiaHR0cDovL3d3dy5zYWJyZS5jb20vZXBzL3NjaGVtYXNcclxuLi5cXHNjaGVtYXNXU0RMXFxTYWJyZV9PVEFfUHJvZmlsZVJlYWRSUS54c2RcIiBWZXJzaW9uPVwiNi41NVwiPlxyXG48UHJvZmlsZT5cclxuPFRQQV9JZGVudGl0eSBVbmlxdWVJRD1cIipcIiBDbGllbnRDb2RlPVwiXCIgRG9tYWluSUQ9XCJcIiBQcm9maWxlVHlwZUNvZGU9XCJcIiBDbGllbnRDb250ZXh0Q29kZT1cIlwiIC8+XHJcbjwvUHJvZmlsZT5cclxuPC9TYWJyZV9PVEFfUHJvZmlsZVJlYWRSUT5gLFxyXG5cclxuICAgIFwiU2FicmVfT1RBX1Byb2ZpbGVTZWFyY2hSUVwiOiBgXHJcbjxTYWJyZV9PVEFfUHJvZmlsZVNlYXJjaFJRIFZlcnNpb249XCI2LjI2XCJcclxueG1sbnM9XCJodHRwOi8vd3d3LnNhYnJlLmNvbS9lcHMvc2NoZW1hc1wiXHJcbnhtbG5zOnhzaT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXCIgeHNpOnNjaGVtYUxvY2F0aW9uPVwiaHR0cDovL3d3dy5zYWJyZS5jb20vZXBzL3NjaGVtYXMgLi5cXHNjaGVtYXN3c2RsXFxTYWJyZV9PVEFfUHJvZmlsZVNlYXJjaFJRLnhzZFwiPlxyXG48UHJvZmlsZVNlYXJjaENyaXRlcmlhIFByb2ZpbGVOYW1lT25seT1cIllcIj5cclxuPFRQQV9JZGVudGl0eSBDbGllbnRDb2RlPVwiXCIgQ2xpZW50Q29udGV4dENvZGU9XCJcIiBEb21haW5JRD1cIlwiIFByb2ZpbGVOYW1lPVwiXCIgUHJvZmlsZVR5cGVDb2RlPVwiXCIvPlxyXG48L1Byb2ZpbGVTZWFyY2hDcml0ZXJpYT5cclxuPC9TYWJyZV9PVEFfUHJvZmlsZVNlYXJjaFJRPmAsXHJcblxyXG4gICAgXCJTYWJyZV9PVEFfUHJvZmlsZVRvUE5SUlFfV2l0aFNlc3Npb25cIjogYFxyXG48U09BUC1FTlY6RW52ZWxvcGUgeG1sbnM6U09BUC1FTlY9XCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy9zb2FwL2VudmVsb3BlL1wiXHJcbnhtbG5zOmViPVwiaHR0cDovL3d3dy5lYnhtbC5vcmcvbmFtZXNwYWNlcy9tZXNzYWdlSGVhZGVyXCJcclxueG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcclxueG1sbnM6eHNkPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS9YTUxTY2hlbWFcIj5cclxuPFNPQVAtRU5WOkhlYWRlcj5cclxuPGViOk1lc3NhZ2VIZWFkZXIgU09BUC1FTlY6bXVzdFVuZGVyc3RhbmQ9XCIxXCIgZWI6dmVyc2lvbj1cIjEuMFwiPlxyXG4gIDxlYjpGcm9tPlxyXG4gICAgPGViOlBhcnR5SWQgdHlwZT1cInVybjp4MTIub3JnOklPNTowMVwiPjk5OTk5OTwvZWI6UGFydHlJZD5cclxuICA8L2ViOkZyb20+XHJcbiAgPGViOlRvPlxyXG4gICAgPGViOlBhcnR5SWQgdHlwZT1cInVybjp4MTIub3JnOklPNTowMVwiPjEyMzEyMzwvZWI6UGFydHlJZD5cclxuICA8L2ViOlRvPlxyXG4gIDxlYjpDUEFJZD5LQTBKPC9lYjpDUEFJZD5cclxuICA8ZWI6Q29udmVyc2F0aW9uSWQ+d2Vic2VydmljZXMuc3VwcG9ydEBzYWJyZS5jb208L2ViOkNvbnZlcnNhdGlvbklkPlxyXG4gIDxlYjpTZXJ2aWNlIGViOnR5cGU9XCJPVEFcIj5FUFM8L2ViOlNlcnZpY2U+XHJcbiAgPGViOkFjdGlvbj5FUFNfRVhUX1Byb2ZpbGVUb1BOUlJRPC9lYjpBY3Rpb24+XHJcbiAgPGViOk1lc3NhZ2VEYXRhPlxyXG4gICAgPGViOk1lc3NhZ2VJZD4xMDAwPC9lYjpNZXNzYWdlSWQ+XHJcbiAgICA8ZWI6VGltZXN0YW1wPjIwMTYtMTItMzBUMDU6MjU6MzJ6PC9lYjpUaW1lc3RhbXA+XHJcbiAgPC9lYjpNZXNzYWdlRGF0YT5cclxuPC9lYjpNZXNzYWdlSGVhZGVyPlxyXG48d3NzZTpTZWN1cml0eSB4bWxuczp3c3NlPVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwMi8xMi9zZWNleHRcIlxyXG4gIHhtbG5zOndzdT1cImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDIvMTIvdXRpbGl0eVwiPlxyXG4gIDx3c3NlOkJpbmFyeVNlY3VyaXR5VG9rZW4+PC93c3NlOkJpbmFyeVNlY3VyaXR5VG9rZW4+XHJcbjwvd3NzZTpTZWN1cml0eT5cclxuPC9TT0FQLUVOVjpIZWFkZXI+XHJcbjxTT0FQLUVOVjpCb2R5PlxyXG48U2FicmVfT1RBX1Byb2ZpbGVUb1BOUlJRIFRhcmdldD1cIlByb2R1Y3Rpb25cIiBUaW1lU3RhbXA9XCIyMDEzLTA0LTMwVDA4OjI0OjQyLjk2N1pcIiBWZXJzaW9uPVwiNi41NVwiIHhzaTpzY2hlbWFMb2NhdGlvbj1cImh0dHA6Ly93d3cuc2FicmUuY29tL2Vwcy9zY2hlbWFzIFxcc2NoZW1hc1xcU2FicmVfT1RBX1Byb2ZpbGVDcmVhdGVSUS54c2RcIlxyXG4gIHhtbG5zPVwiaHR0cDovL3d3dy5zYWJyZS5jb20vZXBzL3NjaGVtYXNcIlxyXG4gIHhtbG5zOnhzaT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXCI+XHJcbiAgPEZpbHRlclBhdGg+XHJcbiAgICA8UHJvZmlsZSBDbGllbnRDb2RlPVwiXCIgQ2xpZW50Q29udGV4dENvZGU9XCJcIiBEb21haW5JRD1cIlwiIFByb2ZpbGVUeXBlQ29kZT1cIlwiIFVuaXF1ZUlEPVwiXCIgUHJvZmlsZU5hbWU9XCJcIiBQTlJNb3ZlT3JkZXJTZXFObz1cIjFcIj5cclxuICAgICAgPEZpbHRlciBGaWx0ZXJJRD1cIlwiIERvbWFpbklEPVwiXCIgQ2xpZW50Q29kZT1cIlwiIENsaWVudENvbnRleHRDb2RlPVwiXCIgRmlsdGVyTmFtZT1cIlwiLz5cclxuICAgIDwvUHJvZmlsZT5cclxuICA8L0ZpbHRlclBhdGg+XHJcbjwvU2FicmVfT1RBX1Byb2ZpbGVUb1BOUlJRPlxyXG48L1NPQVAtRU5WOkJvZHk+XHJcbjwvU09BUC1FTlY6RW52ZWxvcGU+YCxcclxuXHJcbiAgICBcIlNhYnJlX09UQV9Qcm9maWxlVG9QTlJSUVwiOiBgXHJcbjxTYWJyZV9PVEFfUHJvZmlsZVRvUE5SUlEgVGFyZ2V0PVwiUHJvZHVjdGlvblwiIFRpbWVTdGFtcD1cIjIwMTMtMDQtMzBUMDg6MjQ6NDIuOTY3WlwiIFZlcnNpb249XCI2LjU1XCIgeHNpOnNjaGVtYUxvY2F0aW9uPVwiaHR0cDovL3d3dy5zYWJyZS5jb20vZXBzL3NjaGVtYXMgXFxzY2hlbWFzXFxTYWJyZV9PVEFfUHJvZmlsZUNyZWF0ZVJRLnhzZFwiXHJcbnhtbG5zPVwiaHR0cDovL3d3dy5zYWJyZS5jb20vZXBzL3NjaGVtYXNcIlxyXG54bWxuczp4c2k9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVwiPlxyXG48RmlsdGVyUGF0aD5cclxuPFByb2ZpbGUgQ2xpZW50Q29kZT1cIlwiIENsaWVudENvbnRleHRDb2RlPVwiXCIgRG9tYWluSUQ9XCJcIiBQcm9maWxlVHlwZUNvZGU9XCJcIiBVbmlxdWVJRD1cIlwiIFByb2ZpbGVOYW1lPVwiXCIgUE5STW92ZU9yZGVyU2VxTm89XCIxXCI+XHJcbiAgPEZpbHRlciBGaWx0ZXJJRD1cIlwiIERvbWFpbklEPVwiXCIgQ2xpZW50Q29kZT1cIlwiIENsaWVudENvbnRleHRDb2RlPVwiXCIgRmlsdGVyTmFtZT1cIlwiLz5cclxuPC9Qcm9maWxlPlxyXG48L0ZpbHRlclBhdGg+XHJcbjwvU2FicmVfT1RBX1Byb2ZpbGVUb1BOUlJRPmAsXHJcblxyXG4gICAgXCJTYWJyZUNvbW1hbmRMTFNSUV9XaXRoU2Vzc2lvblwiOiBgPFNPQVAtRU5WOkVudmVsb3BlIHhtbG5zOlNPQVAtRU5WPVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvc29hcC9lbnZlbG9wZS9cIlxyXG54bWxuczplYj1cImh0dHA6Ly93d3cuZWJ4bWwub3JnL25hbWVzcGFjZXMvbWVzc2FnZUhlYWRlclwiXHJcbnhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXHJcbnhtbG5zOnhzZD1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkvWE1MU2NoZW1hXCI+XHJcbjxTT0FQLUVOVjpIZWFkZXI+XHJcbjxlYjpNZXNzYWdlSGVhZGVyIFNPQVAtRU5WOm11c3RVbmRlcnN0YW5kPVwiMVwiIGViOnZlcnNpb249XCIxLjBcIj5cclxuPGViOkZyb20+XHJcbiAgPGViOlBhcnR5SWQgdHlwZT1cInVybjp4MTIub3JnOklPNTowMVwiPjk5OTk5OTwvZWI6UGFydHlJZD5cclxuPC9lYjpGcm9tPlxyXG48ZWI6VG8+XHJcbiAgPGViOlBhcnR5SWQgdHlwZT1cInVybjp4MTIub3JnOklPNTowMVwiPjEyMzEyMzwvZWI6UGFydHlJZD5cclxuPC9lYjpUbz5cclxuPGViOkNQQUlkPktBMEo8L2ViOkNQQUlkPlxyXG48ZWI6Q29udmVyc2F0aW9uSWQ+d2Vic2VydmljZXMuc3VwcG9ydEBzYWJyZS5jb208L2ViOkNvbnZlcnNhdGlvbklkPlxyXG48ZWI6U2VydmljZSBlYjp0eXBlPVwiT1RBXCI+U2FicmVDb21tYW5kTExTUlE8L2ViOlNlcnZpY2U+XHJcbjxlYjpBY3Rpb24+U2FicmVDb21tYW5kTExTUlE8L2ViOkFjdGlvbj5cclxuPGViOk1lc3NhZ2VEYXRhPlxyXG4gIDxlYjpNZXNzYWdlSWQ+MTAwMDwvZWI6TWVzc2FnZUlkPlxyXG4gIDxlYjpUaW1lc3RhbXA+MjAxNi0xMi0zMFQwNToyNTozMno8L2ViOlRpbWVzdGFtcD5cclxuPC9lYjpNZXNzYWdlRGF0YT5cclxuPC9lYjpNZXNzYWdlSGVhZGVyPlxyXG48d3NzZTpTZWN1cml0eSB4bWxuczp3c3NlPVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwMi8xMi9zZWNleHRcIlxyXG54bWxuczp3c3U9XCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDAyLzEyL3V0aWxpdHlcIj5cclxuPHdzc2U6QmluYXJ5U2VjdXJpdHlUb2tlbj48L3dzc2U6QmluYXJ5U2VjdXJpdHlUb2tlbj5cclxuPC93c3NlOlNlY3VyaXR5PlxyXG48L1NPQVAtRU5WOkhlYWRlcj5cclxuPFNPQVAtRU5WOkJvZHk+XHJcbjxTYWJyZUNvbW1hbmRMTFNSUSB4bWxucz1cImh0dHA6Ly93ZWJzZXJ2aWNlcy5zYWJyZS5jb20vc2FicmVYTUwvMjAwMy8wN1wiXHJcbnhtbG5zOnhzPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWFcIlxyXG54bWxuczp4c2k9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVwiIFRpbWVTdGFtcD1cIjIwMTQtMDMtMDRUMTQ6MDA6MDBcIiBWZXJzaW9uPVwiMS44LjFcIj5cclxuPFJlcXVlc3QgT3V0cHV0PVwiU0NSRUVOXCIgQ0RBVEE9XCJ0cnVlXCI+XHJcbiAgPEhvc3RDb21tYW5kPjwvSG9zdENvbW1hbmQ+XHJcbjwvUmVxdWVzdD5cclxuPC9TYWJyZUNvbW1hbmRMTFNSUT5cclxuPC9TT0FQLUVOVjpCb2R5PlxyXG48L1NPQVAtRU5WOkVudmVsb3BlPmAsXHJcblxyXG4gICAgXCJTYWJyZUNvbW1hbmRMTFNSUVwiOiBgXHJcbjxTYWJyZUNvbW1hbmRMTFNSUSB4bWxucz1cImh0dHA6Ly93ZWJzZXJ2aWNlcy5zYWJyZS5jb20vc2FicmVYTUwvMjAwMy8wN1wiXHJcbnhtbG5zOnhzPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWFcIlxyXG54bWxuczp4c2k9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVwiIFRpbWVTdGFtcD1cIjIwMTQtMDMtMDRUMTQ6MDA6MDBcIiBWZXJzaW9uPVwiMS44LjFcIj5cclxuPFJlcXVlc3QgT3V0cHV0PVwiU0NSRUVOXCIgQ0RBVEE9XCJ0cnVlXCI+XHJcbjxIb3N0Q29tbWFuZD48L0hvc3RDb21tYW5kPlxyXG48L1JlcXVlc3Q+XHJcbjwvU2FicmVDb21tYW5kTExTUlE+YCxcclxuXHJcbiAgICBcIlNlc3Npb25DcmVhdGVSUVwiOiBgXHJcbjxTT0FQLUVOVjpFbnZlbG9wZSB4bWxuczpTT0FQLUVOVj1cImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3NvYXAvZW52ZWxvcGUvXCI+XHJcbjxTT0FQLUVOVjpIZWFkZXI+XHJcbjxNZXNzYWdlSGVhZGVyIHhtbG5zPVwiaHR0cDovL3d3dy5lYnhtbC5vcmcvbmFtZXNwYWNlcy9tZXNzYWdlSGVhZGVyXCI+XHJcbjxGcm9tPlxyXG4gIDxQYXJ0eUlkPkFnZW5jeTwvUGFydHlJZD5cclxuPC9Gcm9tPlxyXG48VG8+XHJcbiAgPFBhcnR5SWQ+U2FicmVfQVBJPC9QYXJ0eUlkPlxyXG48L1RvPlxyXG48Q29udmVyc2F0aW9uSWQ+MjAyMS4wMS5EZXZTdHVkaW88L0NvbnZlcnNhdGlvbklkPlxyXG48QWN0aW9uPlNlc3Npb25DcmVhdGVSUTwvQWN0aW9uPlxyXG48L01lc3NhZ2VIZWFkZXI+XHJcbjxTZWN1cml0eSB4bWxucz1cImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDIvMTIvc2VjZXh0XCI+XHJcbjxVc2VybmFtZVRva2VuPlxyXG4gIDxVc2VybmFtZT48L1VzZXJuYW1lPlxyXG4gIDxQYXNzd29yZD48L1Bhc3N3b3JkPlxyXG4gIDxPcmdhbml6YXRpb24+PC9Pcmdhbml6YXRpb24+XHJcbiAgPERvbWFpbj5ERUZBVUxUPC9Eb21haW4+XHJcbjwvVXNlcm5hbWVUb2tlbj5cclxuPC9TZWN1cml0eT5cclxuPC9TT0FQLUVOVjpIZWFkZXI+XHJcbjxTT0FQLUVOVjpCb2R5PlxyXG48U2Vzc2lvbkNyZWF0ZVJRIHJldHVybkNvbnRleHRJRD1cInRydWVcIiBWZXJzaW9uPVwiMS4wLjBcIlxyXG54bWxucz1cImh0dHA6Ly93d3cub3BlbnRyYXZlbC5vcmcvT1RBLzIwMDIvMTFcIi8+XHJcbjwvU09BUC1FTlY6Qm9keT5cclxuPC9TT0FQLUVOVjpFbnZlbG9wZT5gXHJcbiAgfVxyXG59IiwiXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIEF1dG8tZ2VuZXJhdGVkIGZpbGUuICAgICAgICAgICAgICAqL1xuLyogRG8gbm90IG1vZGlmeSBpdC4gICAgICAgICAgICAgICAgICovXG4vKiBZb3UgbWF5IHJlbW92ZSBpdC4gICAgICAgICAgICAgICAgKi9cbi8qIFlvdSBtYXkgY29tbWl0IGl0LiAgICAgICAgICAgICAgICAqL1xuLyogWW91IG1heSBwdXNoIGl0LiAgICAgICAgICAgICAgICAgICovXG4vKiBSZW1vdmUgaXQgaWYgbW9kdWxlIG5hbWUgY2hhbmdlZC4gKi9cbi8qIGVzbGludDpkaXNhYmxlICAgICAgICAgICAgICAgICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmltcG9ydCB7SU1vZHVsZUNvbnRleHR9IGZyb20gXCJzYWJyZS1uZ3YtY29yZS9tb2R1bGVzL0lNb2R1bGVDb250ZXh0XCI7XG5pbXBvcnQge01vZHVsZUNvbnRleHR9IGZyb20gXCJzYWJyZS1uZ3YtY29yZS9tb2R1bGVzL01vZHVsZUNvbnRleHRcIjtcbmltcG9ydCB7STE4blNlcnZpY2UsIFNjb3BlZFRyYW5zbGF0b3J9IGZyb20gXCJzYWJyZS1uZ3YtYXBwL2FwcC9zZXJ2aWNlcy9pbXBsL0kxOG5TZXJ2aWNlXCI7XG5cbi8qKiBAaW50ZXJuYWwgKiovXG5leHBvcnQgY29uc3QgY29udGV4dDogSU1vZHVsZUNvbnRleHQgPSBuZXcgTW9kdWxlQ29udGV4dChcImNvbS1pbnRlcm5vdmEtZ3RjcGF5bWVudC13ZWItbW9kdWxlXCIpO1xuLyoqIEBpbnRlcm5hbCAqKi9cbmV4cG9ydCBjb25zdCBjZjogSU1vZHVsZUNvbnRleHRbJ2NmJ10gPSBjb250ZXh0LmNmLmJpbmQoY29udGV4dCk7XG4vKiogQGludGVybmFsICoqL1xuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyU2VydmljZTogSU1vZHVsZUNvbnRleHRbJ3JlZ2lzdGVyU2VydmljZSddID0gY29udGV4dC5yZWdpc3RlclNlcnZpY2UuYmluZChjb250ZXh0KTtcbi8qKiBAaW50ZXJuYWwgKiovXG5leHBvcnQgY29uc3QgZ2V0U2VydmljZTogSU1vZHVsZUNvbnRleHRbJ2dldFNlcnZpY2UnXSA9IGNvbnRleHQuZ2V0U2VydmljZS5iaW5kKGNvbnRleHQpO1xuLyoqIEBpbnRlcm5hbCAqKi9cbmV4cG9ydCBjb25zdCB0OiBTY29wZWRUcmFuc2xhdG9yID0gZ2V0U2VydmljZShJMThuU2VydmljZSkuZ2V0U2NvcGVkVHJhbnNsYXRvcignY29tLWludGVybm92YS1ndGNwYXltZW50LXdlYi1tb2R1bGUvdHJhbnNsYXRpb25zJyk7XG4iLCJpbXBvcnQgeyBDb21tYW5kTWVzc2FnZUJhc2ljUnMsQ29tbWFuZE1lc3NhZ2VScSB9IGZyb20gXCJzYWJyZS1uZ3YtcG9zLWNkbS9jb21tc2dcIjtcclxuaW1wb3J0IHsgcmVtYXJrIH0gZnJvbSBcIi4uL21vZGVsL3JlbWFya1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU2FicmVDb250cm9sbGVyIHtcclxuICAgIFJlbWFya1VwZGF0ZShsaXN0UmVtYXJrczogQXJyYXk8cmVtYXJrPik6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBTZW5kQ29tbWFuZEFzeW5jKGZvcm1hdCA6IHN0cmluZykgOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgU2VuZENvbW1hbmRBc3luY1JzKGZvcm1hdDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IDtcclxuICAgIGJ1aWxkUmVxdWVzdEdldFJlc2VydmF0aW9uKHBucjogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIGJ1aWxkUmVxdWVzdEFkZFJlbWFyayhsaXN0UmVtYXJrczogQXJyYXk8cmVtYXJrPik6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBTZW5kQ29tbWFuZE1lc3NhZ2UocGF5bG9hZDogc3RyaW5nLCBzaG93UnE6Ym9vbGVhbiwgc2hvd1JzOmJvb2xlYW4pOiBQcm9taXNlPENvbW1hbmRNZXNzYWdlQmFzaWNScz47XHJcbiAgICBBZGRSZW1hcmtzQXN5bmMocmVtYXJrczpBcnJheTxyZW1hcms+KTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIFNlbmRDb21tYW5kU3luYyhmb3JtYXQgOiBzdHJpbmcpIDogc3RyaW5nO1xyXG4gICAgSW5wdXRWYWxpZGF0b3IoaWQ6IHN0cmluZyk6IHZvaWQ7ICAgICBcclxufSIsImltcG9ydCB7IElTYWJyZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9JU2FicmVDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IEFic3RyYWN0U2VydmljZSB9IGZyb20gXCJzYWJyZS1uZ3YtYXBwL2FwcC9zZXJ2aWNlcy9pbXBsL0Fic3RyYWN0U2VydmljZVwiO1xyXG5pbXBvcnQgeyBnZXRTZXJ2aWNlLCBjZiwgY29udGV4dCB9IGZyb20gXCIuLi9Db250ZXh0XCI7XHJcbmltcG9ydCB7IFNhYnJlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9TYWJyZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSVJlc2VydmF0aW9uU2VydmljZSB9IGZyb20gXCJzYWJyZS1uZ3YtcmVzZXJ2YXRpb24vc2VydmljZXMvSVJlc2VydmF0aW9uU2VydmljZVwiO1xyXG5pbXBvcnQgeyBDb21tYW5kTWVzc2FnZVJlc2VydmF0aW9uUnMgfSBmcm9tIFwic2FicmUtbmd2LXBvcy1jZG0vcmVzZXJ2YXRpb25cIjtcclxuaW1wb3J0IHsgUG5yUHVibGljU2VydmljZSB9IGZyb20gXCJzYWJyZS1uZ3YtYXBwL2FwcC9zZXJ2aWNlcy9pbXBsL1BuclB1YmxpY1NlcnZpY2VcIjtcclxuaW1wb3J0IHsgQWdlbnRQcm9maWxlU2VydmljZSB9IGZyb20gXCJzYWJyZS1uZ3YtYXBwL2FwcC9zZXJ2aWNlcy9pbXBsL0FnZW50UHJvZmlsZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ29tbWFuZE1lc3NhZ2VCYXNpY1JzLCBDb21tYW5kTWVzc2FnZVJxIH0gZnJvbSBcInNhYnJlLW5ndi1wb3MtY2RtL2NvbW1zZ1wiO1xyXG5pbXBvcnQgeyBJQ29tbWFuZE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSBcInNhYnJlLW5ndi1jb21tc2cvc2VydmljZXMvSUNvbW1hbmRNZXNzYWdlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBVdGlsaXRhcmlvIH0gZnJvbSBcIi4uL2NvbW1vbi9VdGlsaXRhcmlvXCI7XHJcbmltcG9ydCB7IHJlbWFyayB9IGZyb20gXCIuLi9tb2RlbC9yZW1hcmtcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTYWJyZUNvbnRyb2xsZXIgZXh0ZW5kcyBBYnN0cmFjdFNlcnZpY2UgaW1wbGVtZW50cyBJU2FicmVDb250cm9sbGVyIHtcclxuICAgIHN0YXRpYyBTRVJWSUNFX05BTUU6IHN0cmluZyA9IFwiY29tLWludGVybm92YS1ndGNwYXltZW50LXdlYi1tb2R1bGUtU2FicmVDb250cm9sbGVyXCI7XHJcblxyXG4gICAgYnVpbGRSZXF1ZXN0R2V0UmVzZXJ2YXRpb24ocG5yOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IHRoaXMuYnVpbGRHZXRSZXNlcnZhdGlvblJRKHBuciwgXCJHZXRSZXNlcnZhdGlvblJRXCIpO1xyXG4gICAgICAgICAgICByZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBnZXRTZXJ2aWNlKFNhYnJlU2VydmljZSkuY2FsbFNvYXBTZXJ2aWNlQXN5bmMocmVzcCwgXCJHZXRSZXNlcnZhdGlvblJRXCIsICdTRVNTSU9OJywgMTAwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNvbHZlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNvbHZlciBHZXRSZXNlcnZhdGlvblJRXCIsIHJlc29sdmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZFJlcXVlc3RBZGRSZW1hcmsobGlzdFJlbWFya3M6IEFycmF5PHJlbWFyaz4pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxpc3RSZW1hcmtzIG9uIGJ1aWxkUmVxdWVzdEFkZFJlbWFya1wiLCBsaXN0UmVtYXJrcyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVxdWVzdFJtayA9IHRoaXMuYnVpbGRBZGRSZW1hcmtSUShsaXN0UmVtYXJrcywgXCJBZGRSZW1hcmtMTFNSUVwiKTtcclxuICAgICAgICAgICAgcmVxdWVzdFJta1xyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0U2VydmljZShTYWJyZVNlcnZpY2UpLmNhbGxTb2FwU2VydmljZUFzeW5jKHJlc3AsIFwiQWRkUmVtYXJrTExTUlFcIiwgJ1NFU1NJT04nLCAxMDAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc29sdmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc29sdmVyIEFkZFJlbWFya0xMU1JRXCIsIHJlc29sdmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBSZW1hcmtVcGRhdGUobGlzdFJlbWFya3M6IEFycmF5PHJlbWFyaz4pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVxdWVzdFJtayA9IHRoaXMuYnVpbGRSZW1hcmtVcGRhdGVSUShsaXN0UmVtYXJrcywgXCJVcGRhdGVSZXNlcnZhdGlvblJRcm1rXCIpO1xyXG4gICAgICAgICAgICByZXF1ZXN0Um1rXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBnZXRTZXJ2aWNlKFNhYnJlU2VydmljZSkuY2FsbFNvYXBTZXJ2aWNlQXN5bmMocmVzcCwgXCJVcGRhdGVSZXNlcnZhdGlvblJRXCIsICdTRVNTSU9OJywgMTAwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNvbHZlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNvbHZlciBVcGRhdGVSZXNlcnZhdGlvblJRXCIsIHJlc29sdmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBTZW5kQ29tbWFuZEFzeW5jKGZvcm1hdDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJBc3luYyBlbnRyeTpcIiwgZm9ybWF0KTtcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3RTYWJyZUNvbW1hbmQgPSB0aGlzLmJ1aWxkUmVxdWVzdFNhYnJlQ29tbWFuZChmb3JtYXQsIFwiU2FicmVDb21tYW5kTExTUlFcIik7XHJcbiAgICAgICAgICAgIHJlcXVlc3RTYWJyZUNvbW1hbmRcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldFNlcnZpY2UoU2FicmVTZXJ2aWNlKS5jYWxsU29hcFNlcnZpY2VBc3luYyhyZXNwLCBcIlNhYnJlQ29tbWFuZExMU1JRXCIsICdTRVNTSU9OJywgMTAwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNvbHZlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzb2x2ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBTZW5kQ29tbWFuZEFzeW5jUnMoZm9ybWF0OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJBc3luYyBlbnRyeTpcIiwgZm9ybWF0KTtcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3RTYWJyZUNvbW1hbmQgPSB0aGlzLmJ1aWxkUmVxdWVzdFNhYnJlQ29tbWFuZChmb3JtYXQsIFwiU2FicmVDb21tYW5kTExTUlFcIik7XHJcbiAgICAgICAgICAgIHJlcXVlc3RTYWJyZUNvbW1hbmRcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzcDpcIiwgcmVzcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGdldFNlcnZpY2UoU2FicmVTZXJ2aWNlKS5jYWxsU29hcFNlcnZpY2VBc3luYyhyZXNwLCBcIlNhYnJlQ29tbWFuZExMU1JRXCIsICdTRVNTSU9OJywgMTAwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNvbHZlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXNvbHZlcjpcIiwgcmVzb2x2ZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1dGlsaXRhcmlvXyA9IGdldFNlcnZpY2UoVXRpbGl0YXJpbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInV0aWxpdGFyaW9fOlwiLCB1dGlsaXRhcmlvXyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRvY3VtZW50ID0gdXRpbGl0YXJpb18uU3RyaW5nVG9YbWwocmVzb2x2ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkb2N1bWVudCBpbiB4bWw6XCIsIGRvY3VtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29tbWFuZFJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJSZXNwb25zZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29tbWFuZFJzWzBdLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBTZW5kQ29tbWFuZFN5bmMoZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NpIG5vIGVzdMOhIDM2MCBubyBsbyBkZXRlY3RhICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbnRyeScsIGZvcm1hdClcclxuICAgICAgICBsZXQgcmVzcG9uc2VNZXNzYWdlOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgICAgIGxldCByZXF1ZXN0U2FicmVDb21tYW5kU3RyaW5nID0gdGhpcy5idWlsZFJlcXVlc3RTZW5kQ29tbWFuZChmb3JtYXQpOyAgICAgICAgICAgICAgICAgICAvL2xsYW1hbW9zIGFsIG1ldG9kbyBjb24gZWwgdGhpcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JxJywgcmVxdWVzdFNhYnJlQ29tbWFuZFN0cmluZylcclxuICAgICAgICBpZiAocmVxdWVzdFNhYnJlQ29tbWFuZFN0cmluZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlTWVzc2FnZSA9IGdldFNlcnZpY2UoU2FicmVTZXJ2aWNlKS5jYWxsU29hcFNlcnZpY2VTeW5jKHJlcXVlc3RTYWJyZUNvbW1hbmRTdHJpbmcsIFwiU2FicmVDb21tYW5kTExTUlFcIilcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JzJywgcmVzcG9uc2VNZXNzYWdlKVxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2VNZXNzYWdlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCByc3BDb21tYW5kID0gSlNPTi5wYXJzZShyZXNwb25zZU1lc3NhZ2UpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wYXJzZWFtb3MgbGEgcmVzcHVlc3RhIGVuIHVuYSB2YXJpYWJsZSBkZSB0aXBvIEpTT04gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlTWVzc2FnZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAocnNwQ29tbWFuZC5yZXNwb25zZSAhPSBudWxsICYmIHJzcENvbW1hbmQucmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlTWVzc2FnZSA9IHJzcENvbW1hbmQucmVzcG9uc2UucGF5bG9hZC5yZXNwb25zZVRleHQ7ICAgICAgICAgICAgICAgICAvL2RldnVlbHZlIGVsIFNhYnJlQ29tbWFuZFJTXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXNwb25zZU1lc3NhZ2U6XCIscmVzcG9uc2VNZXNzYWdlKTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlTWVzc2FnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VNZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIFNlbmRDb21tYW5kTWVzc2FnZShwYXlsb2FkOiBzdHJpbmcsIHNob3dScTogYm9vbGVhbiwgc2hvd1JzOiBib29sZWFuKTogUHJvbWlzZTxDb21tYW5kTWVzc2FnZUJhc2ljUnM+IHtcclxuICAgICAgICBsZXQgaUNtZE1zZ1NlcnZpY2UgPSBnZXRTZXJ2aWNlKElDb21tYW5kTWVzc2FnZVNlcnZpY2UpO1xyXG4gICAgICAgIHJldHVybiBpQ21kTXNnU2VydmljZS5zZW5kKHtcclxuICAgICAgICAgICAgcnE6IHBheWxvYWQsXHJcbiAgICAgICAgICAgIHNob3dScTogc2hvd1JxLFxyXG4gICAgICAgICAgICBzaG93UnM6IHNob3dSc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gKlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVmTm9kZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVmQXR0clxyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGFjdHVhbE5vZGVcclxuICogQHJldHVybiB7Kn0gIHtzdHJpbmd9XHJcbiAqIEBtZW1iZXJvZiBTYWJyZUNvbnRyb2xsZXJcclxuICovXHJcbiAgICBwcml2YXRlIGNoZWNrTm9kZVZhbHVlcyhyZWZOb2RlOiBzdHJpbmcsIHJlZkF0dHI6IHN0cmluZywgYWN0dWFsTm9kZTogRWxlbWVudCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGRhdG8gPSBcIlwiO1xyXG4gICAgICAgIGlmIChhY3R1YWxOb2RlLmxvY2FsTmFtZSA9PSByZWZOb2RlICYmIGFjdHVhbE5vZGUuaGFzQXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICBsZXQgYXR0cmlidXRlcyA9IGFjdHVhbE5vZGUuYXR0cmlidXRlcztcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGF0dHJpYnV0ZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlc1tpbmRleF0ubmFtZSA9PSByZWZBdHRyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0byA9IGF0dHJpYnV0ZXNbaW5kZXhdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKFwicmVmUG9pbnQ6IFwiICsgYXR0cmlidXRlc1tpbmRleF0ubmFtZSArIFwiICA6OiBcIiArIGF0dHJpYnV0ZXNbaW5kZXhdLnZhbHVlKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdG87XHJcbiAgICB9XHJcbiAgICAvKipcclxuKlxyXG4qXHJcbiogQHByaXZhdGVcclxuKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVGYXRoZXJcclxuKiBAcGFyYW0ge3N0cmluZ30gcmVmQXR0clxyXG4qIEBwYXJhbSB7c3RyaW5nfSByZWZQb2ludFxyXG4qIEBwYXJhbSB7c3RyaW5nfSBub2RlRmF0aGVyMlxyXG4qIEByZXR1cm4geyp9ICB7c3RyaW5nW11bXX1cclxuKiBAbWVtYmVyb2YgU2FicmVDb250cm9sbGVyXHJcbiovXHJcbiAgICBwcml2YXRlIEdldEZpbmFsVmFsdWUobm9kZUZhdGhlcjogRWxlbWVudCwgcmVmQXR0cjogc3RyaW5nLCByZWZQb2ludDogc3RyaW5nLCBub2RlRmF0aGVyMjogc3RyaW5nKTogc3RyaW5nW11bXSB7XHJcbiAgICAgICAgbGV0IGFycmF5QXR0cnM6IHN0cmluZ1tdW10gPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBhcnJheUF0dHJzLnB1c2goW3JlZkF0dHIsIHJlZlBvaW50XSk7XHJcbiAgICAgICAgaWYgKG5vZGVGYXRoZXIyID09IFwiKlwiKSB7XHJcbiAgICAgICAgICAgIGFycmF5QXR0cnMucHVzaChbXCJzZWd0eXBlXCIsIG5vZGVGYXRoZXIubG9jYWxOYW1lXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjaGlsZE5vZGVzID0gbm9kZUZhdGhlci5jaGlsZE5vZGVzO1xyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICBsZXQgZWxlbWVudF9jaGlsZE5vZGVzID0gPEVsZW1lbnQ+Y2hpbGROb2Rlc1tqXTtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRfY2hpbGROb2Rlcy5sb2NhbE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsb2NhbE5hbWUgPSBlbGVtZW50X2NoaWxkTm9kZXMubG9jYWxOYW1lO1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gZWxlbWVudF9jaGlsZE5vZGVzLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgYXJyYXlBdHRycy5wdXNoKFtsb2NhbE5hbWUsIHZhbHVlXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2coXCJHZXRGaW5hbFZhbHVlOiBcIik7XHJcbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2coYXJyYXlBdHRycyk7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5QXR0cnM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKlxyXG4gICAgKiBAcHJpdmF0ZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcG5yTG9jYXRvclZhbHVlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuXHJcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gSXNSZW1vdmVOU1xyXG4gICAgKiBAcmV0dXJuIHsqfSAge05vZGV9XHJcbiAgICAqIEBtZW1iZXJvZiBTYWJyZUNvbnRyb2xsZXJcclxuICAgICovXHJcbiAgICBwcml2YXRlIEdldEVsZW1lbnQocG5yTG9jYXRvclZhbHVlOiBzdHJpbmcsIHBhdHRlcm46IHN0cmluZywgSXNSZW1vdmVOUzogYm9vbGVhbik6IE5vZGUge1xyXG4gICAgICAgIGxldCByZXR1cm5FbGVtZW50OiBOb2RlID0gbnVsbDtcclxuICAgICAgICBpZiAoSXNSZW1vdmVOUykgeyBwbnJMb2NhdG9yVmFsdWUgPSBnZXRTZXJ2aWNlKFV0aWxpdGFyaW8pLlJlbW92ZU5hbWVTcGFjZShwbnJMb2NhdG9yVmFsdWUpOyB9XHJcbiAgICAgICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICAgICAgICB2YXIgZG9jMSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcocG5yTG9jYXRvclZhbHVlLCBcInRleHQveG1sXCIpO1xyXG4gICAgICAgIHZhciBjaGlsZE5vZGVzID0gZG9jMS5jaGlsZE5vZGVzO1xyXG4gICAgICAgIGxldCBlbGVtZW50X2NoaWxkTm9kZXMgPSA8RWxlbWVudD5jaGlsZE5vZGVzWzBdOyAgICAvL2ZpcnN0IGxpbmUgb24gUlMgICAgICAgIFxyXG4gICAgICAgIGlmIChlbGVtZW50X2NoaWxkTm9kZXMuaGFzQXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICBsZXQgYXR0cmlidXRlcyA9IGVsZW1lbnRfY2hpbGROb2Rlcy5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGF0dHJpYnV0ZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IGF0dHJpYnV0ZXNbaW5kZXhdLm5hbWUuc3BsaXQoXCI6XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRlbXBbMF0gPT0gJ3htbG5zJyAmJiAhZm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgeG1sbnMgPSBhdHRyaWJ1dGVzW2luZGV4XS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ4bWxuczogXCIgKyB4bWxucyk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmVyTlMoKTogc3RyaW5nIHsgcmV0dXJuIHhtbG5zOyB9XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGdldFNlcnZpY2UoVXRpbGl0YXJpbykuR2V0WFBhdGhSZXN1bHQocG5yTG9jYXRvclZhbHVlLCBwYXR0ZXJuLCByZXNvbHZlck5TLCAwKTtcclxuICAgICAgICAvLyB2YXIgcmVzdWx0ID0gZ2V0U2VydmljZShVdGlsaXRhcmlvKS5HZXRYUGF0aFJlc3VsdCgzLCBwbnJMb2NhdG9yVmFsdWUsIHBhdHRlcm4sIHJlc29sdmVyTlMsIDApO1xyXG4gICAgICAgIHJldHVybkVsZW1lbnQgPSByZXN1bHQuaXRlcmF0ZU5leHQoKTtcclxuICAgICAgICByZXR1cm4gcmV0dXJuRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBBZGRSZW1hcmtzQXN5bmMocmVtYXJrczogQXJyYXk8cmVtYXJrPik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXF1ZXN0UmVtYXJrID0gdGhpcy5idWlsZFJlcXVlc3RBZGRSZW1hcmsocmVtYXJrcyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVxdWVzdFJlbWFyazogXCIsIHJlcXVlc3RSZW1hcmspO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVxdWVzdFJlbWFya1xyXG4gICAgICAgICAgICAvLyAgICAgLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZ2V0U2VydmljZShTYWJyZVNlcnZpY2UpLmNhbGxTb2FwU2VydmljZUFzeW5jKHJlc3AsIFwiQWRkUmVtYXJrTExTUlFcIiwgJ1NFU1NJT04nLCAxMDAwMClcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgLnRoZW4oKHJlc29sdmVyKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNvbHZlcik7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgICAvLyAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkUmVxdWVzdFJlc2VydmF0aW9uKGFjdGlvbjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB1dGlsaXRhcmlvX3BheWxvYWQgPSBnZXRTZXJ2aWNlKFV0aWxpdGFyaW8pLkdldFBheUxvYWQoYWN0aW9uKTtcclxuICAgICAgICAgICAgdXRpbGl0YXJpb19wYXlsb2FkLnRoZW4ocnNwID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocnNwKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZEFkZFJlbWFya1JRKGxpc3RSZW1hcmtzOiBBcnJheTxyZW1hcms+LCBhY3Rpb246IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmV0dXJuVmFsdWU6IHN0cmluZyA9IG51bGw7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGlzdFJlbWFya3Mgb24gYnVpbGRBZGRSZW1hcmtSUVwiLCBsaXN0UmVtYXJrcyk7XHJcbiAgICAgICAgICAgIGxldCB1dGlsaXRhcmlvXyA9IGdldFNlcnZpY2UoVXRpbGl0YXJpbyk7XHJcbiAgICAgICAgICAgIHV0aWxpdGFyaW9fLkdldFBheUxvYWQoYWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocnNwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZG9jdW1lbnQgPSB1dGlsaXRhcmlvXy5TdHJpbmdUb1htbChyc3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3RyaW5nVG9YbWxcIiwgZG9jdW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiUmVtYXJrSW5mb1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdFJlbWFya3MgIT0gbnVsbCAmJiBsaXN0UmVtYXJrcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHJtayBvZiBsaXN0UmVtYXJrcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJybWtcIiwgcm1rKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudF92YXIgPSBlbGVtZW50WzBdLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJSZW1hcmtcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF92YXIuc2V0QXR0cmlidXRlKFwiVHlwZVwiLCBybWsuVHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocm1rLkNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3Zhci5zZXRBdHRyaWJ1dGUoXCJDb2RlXCIsIHJtay5Db2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChybWsuU2VnTnVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF92YXIuc2V0QXR0cmlidXRlKFwiU2VnbWVudE51bWJlclwiLCBybWsuU2VnTnVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gZWxlbWVudF92YXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVGV4dCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBybWsuVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHV0aWxpdGFyaW9fLkRvY3VtZW50VG9TdHJpbmcoZG9jdW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gcmV0dXJuVmFsdWUucmVwbGFjZSgveG1sbnM9XCJcIi9nLCAnJylcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXJyb3IgYnVpbGRDcmVhdGVSZXNlcnZhdGlvblJROlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZFJlbWFya1VwZGF0ZVJRKGxpc3RSZW1hcmtzOiBBcnJheTxyZW1hcms+LCBhY3Rpb246IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJldHVyblZhbHVlOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgICAgICAgICBsZXQgdXRpbGl0YXJpb18gPSBnZXRTZXJ2aWNlKFV0aWxpdGFyaW8pO1xyXG4gICAgICAgICAgICB1dGlsaXRhcmlvXy5HZXRQYXlMb2FkKGFjdGlvbilcclxuICAgICAgICAgICAgICAgIC50aGVuKHJzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRvY3VtZW50ID0gdXRpbGl0YXJpb18uU3RyaW5nVG9YbWwocnNwKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiUmVzZXJ2YXRpb25VcGRhdGVJdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXN0UmVtYXJrcyAhPSBudWxsICYmIGxpc3RSZW1hcmtzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcm1rIG9mIGxpc3RSZW1hcmtzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudF92YXIgPSBlbGVtZW50WzBdLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJSZW1hcmtVcGRhdGVcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF92YXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgcm1rLklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdmFyLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJJTlZPSUNFXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF92YXIuc2V0QXR0cmlidXRlKFwib3BcIiwgXCJVXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSBlbGVtZW50X3Zhci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdSZW1hcmtUZXh0JykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IHJtay5UZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gdXRpbGl0YXJpb18uRG9jdW1lbnRUb1N0cmluZyhkb2N1bWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSByZXR1cm5WYWx1ZS5yZXBsYWNlKC94bWxucz1cIlwiL2csICcnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJvciBidWlsZENyZWF0ZVJlc2VydmF0aW9uUlE6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkUmVxdWVzdFNhYnJlQ29tbWFuZChmb3JtYXQ6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJldHVyblZhbHVlOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgICAgICAgICBsZXQgdXRpbGl0YXJpb18gPSBnZXRTZXJ2aWNlKFV0aWxpdGFyaW8pO1xyXG4gICAgICAgICAgICB1dGlsaXRhcmlvXy5HZXRQYXlMb2FkKGFjdGlvbilcclxuICAgICAgICAgICAgICAgIC50aGVuKHJzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1hdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkb2N1bWVudCA9IHV0aWxpdGFyaW9fLlN0cmluZ1RvWG1sKHJzcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJIb3N0Q29tbWFuZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFswXS50ZXh0Q29udGVudCA9IGZvcm1hdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNvbHZlciBkZXNwdWVzIGNvbnZlcnRpclwiLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuaW5uZXJIVE1MKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB1dGlsaXRhcmlvXy5Eb2N1bWVudFRvU3RyaW5nKGRvY3VtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkUmVxdWVzdFNlbmRDb21tYW5kKGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWV0b2RvICAgIC8vZXN0cnVjdHVyYSBkZSByZXF1ZXN0IGRlbCBzYWJyZSBjb21tYW5kICBcclxuICAgICAgICBsZXQgcmVxdWVzdDogc3RyaW5nID0gJzxTYWJyZUNvbW1hbmRMTFNSUSB4bWxucz1cImh0dHA6Ly93ZWJzZXJ2aWNlcy5zYWJyZS5jb20vc2FicmVYTUwvMjAwMy8wN1wiIHhtbG5zOnhzPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWFcIiB4bWxuczp4c2k9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVwiIFRpbWVTdGFtcD1cIjIwMTQtMDMtMDRUMTQ6MDA6MDBcIiBWZXJzaW9uPVwiMS44LjFcIj4nICtcclxuICAgICAgICAgICAgJzxSZXF1ZXN0IE91dHB1dD1cIlNDUkVFTlwiIENEQVRBPVwiZmFsc2VcIj48SG9zdENvbW1hbmQ+JyArIGZvcm1hdCArICc8L0hvc3RDb21tYW5kPjwvUmVxdWVzdD4nICtcclxuICAgICAgICAgICAgJzwvU2FicmVDb21tYW5kTExTUlE+JztcclxuICAgICAgICByZXR1cm4gcmVxdWVzdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkR2V0UmVzZXJ2YXRpb25SUShwbnI6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJldHVyblZhbHVlOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgICAgICAgICBsZXQgdXRpbGl0YXJpb18gPSBnZXRTZXJ2aWNlKFV0aWxpdGFyaW8pO1xyXG4gICAgICAgICAgICB1dGlsaXRhcmlvXy5HZXRQYXlMb2FkKGFjdGlvbilcclxuICAgICAgICAgICAgICAgIC50aGVuKHJzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRvY3VtZW50ID0gdXRpbGl0YXJpb18uU3RyaW5nVG9YbWwocnNwKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiTG9jYXRvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50WzBdLnRleHRDb250ZW50ID0gcG5yO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gdXRpbGl0YXJpb18uRG9jdW1lbnRUb1N0cmluZyhkb2N1bWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSByZXR1cm5WYWx1ZS5yZXBsYWNlKC94bWxucz1cIlwiL2csICcnKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuVmFsdWVcIixyZXR1cm5WYWx1ZSk7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXJyb3IgYnVpbGRDcmVhdGVSZXNlcnZhdGlvblJROlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy90byB2YWxpZGF0ZSBldmVyeSBpbnB1dCBhbmQgZXJyb3IgaWYgbmVlZGVkXHJcbiAgICBJbnB1dFZhbGlkYXRvcihpZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpZCBxdWUgdmEgYSB2YWxvcmFyIHNpIGVzdGEgZW1wdHk6IFwiLGlkKTtcclxuXHJcbiAgICAgICAgbGV0IHZhbHVlID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkudmFsdWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ2YWx1ZTogXCIsIHZhbHVlKTsgICAgICAgIFxyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkICsgXCJEaXZcIikpLmNsYXNzTGlzdC5hZGQoXCJoYXMtZXJyb3JcIik7XHJcbiAgICAgICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCArIFwiRXJyb3JcIikpLmlubmVyVGV4dCA9IFwiRmllbGQgY2Fubm90IGJlIGVtcHR5IG9yIGJsYW5rXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQgKyBcIkRpdlwiKSkuY2xhc3NMaXN0LnJlbW92ZShcImhhcy1lcnJvclwiKTtcclxuICAgICAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkICsgXCJFcnJvclwiKSkuaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIEF1dG8tZ2VuZXJhdGVkIGZpbGUuICAgICAgICAgICAgICAqL1xuLyogRG8gbm90IG1vZGlmeSBpdC4gICAgICAgICAgICAgICAgICovXG4vKiBZb3UgbWF5IHJlbW92ZSBpdC4gICAgICAgICAgICAgICAgKi9cbi8qIFlvdSBtYXkgY29tbWl0IGl0LiAgICAgICAgICAgICAgICAqL1xuLyogWW91IG1heSBwdXNoIGl0LiAgICAgICAgICAgICAgICAgICovXG4vKiBSZW1vdmUgaXQgaWYgbW9kdWxlIG5hbWUgY2hhbmdlZC4gKi9cbi8qIGVzbGludDpkaXNhYmxlICAgICAgICAgICAgICAgICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmltcG9ydCB7TWFpbn0gZnJvbSAnLi9NYWluJztcbmltcG9ydCB7SU1vZHVsZU1hbmlmZXN0fSBmcm9tICdzYWJyZS1uZ3YtY29yZS9tb2R1bGVzL0lNb2R1bGVNYW5pZmVzdCc7XG5pbXBvcnQge2NvbnRleHR9IGZyb20gJy4vQ29udGV4dCc7XG5cbi8qKlxuICogIEF1dG9nZW5lcmF0ZWQgY2xhc3MgcmVwcmVzZW50aW5nIG1vZHVsZSBpbiBydW50aW1lLlxuICoqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kdWxlX2NvbV9pbnRlcm5vdmFfZ3RjcGF5bWVudF93ZWJfbW9kdWxlIGV4dGVuZHMgTWFpbiB7XG4gICAgY29uc3RydWN0b3IobWFuaWZlc3Q6IElNb2R1bGVNYW5pZmVzdCkge1xuICAgICAgICBzdXBlcihtYW5pZmVzdCk7XG4gICAgICAgIGNvbnRleHQuc2V0TW9kdWxlKHRoaXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ3NhYnJlLW5ndi1jb3JlL21vZHVsZXMvTW9kdWxlJztcbmltcG9ydCB7IFJlZEFwcFNpZGVQYW5lbENvbmZpZyB9IGZyb20gJ3NhYnJlLW5ndi14cC9jb25maWdzL1JlZEFwcFNpZGVQYW5lbENvbmZpZyc7XG5pbXBvcnQgeyBFeHRlbnNpb25Qb2ludFNlcnZpY2UgfSBmcm9tICdzYWJyZS1uZ3YteHAvc2VydmljZXMvRXh0ZW5zaW9uUG9pbnRTZXJ2aWNlJztcbmltcG9ydCB7IGdldFNlcnZpY2UsIHJlZ2lzdGVyU2VydmljZSB9IGZyb20gXCIuL0NvbnRleHRcIjtcbmltcG9ydCB7IFJlZEFwcFNpZGVQYW5lbEJ1dHRvbiB9IGZyb20gJ3NhYnJlLW5ndi1yZWRBcHBTaWRlUGFuZWwvbW9kZWxzL1JlZEFwcFNpZGVQYW5lbEJ1dHRvbic7XG5pbXBvcnQgeyBDb21tYW5kTWVzc2FnZVJlc2VydmF0aW9uUnMgfSBmcm9tICdzYWJyZS1uZ3YtcG9zLWNkbS9yZXNlcnZhdGlvbic7XG5pbXBvcnQgeyBJUmVzZXJ2YXRpb25TZXJ2aWNlIH0gZnJvbSAnc2FicmUtbmd2LXJlc2VydmF0aW9uL3NlcnZpY2VzL0lSZXNlcnZhdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgTGF5ZXJTZXJ2aWNlIH0gZnJvbSBcInNhYnJlLW5ndi1jb3JlL3NlcnZpY2VzL0xheWVyU2VydmljZVwiO1xuaW1wb3J0IHsgUmVzdE1vZGVsIH0gZnJvbSAnLi9tb2RlbC9SZXN0TW9kZWwnO1xuaW1wb3J0IHsgR3RjX1BheW1lbnQgfSBmcm9tICcuL3ZpZXdzL0d0Y19QYXltZW50JztcbmltcG9ydCB7IFNhYnJlQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcnMvU2FicmVDb250cm9sbGVyJztcbmltcG9ydCB7IFV0aWxpdGFyaW8gfSBmcm9tICcuL2NvbW1vbi9VdGlsaXRhcmlvJztcbmltcG9ydCB7IEV4dGVybmFsU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvRXh0ZXJuYWxTZXJ2aWNlJztcbmltcG9ydCB7IFNhYnJlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvU2FicmVTZXJ2aWNlJztcblxuXG5leHBvcnQgY2xhc3MgTWFpbiBleHRlbmRzIE1vZHVsZSB7XG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuaW5pdCgpOyAgICBcbiAgICAgICAgcmVnaXN0ZXJTZXJ2aWNlKFNhYnJlQ29udHJvbGxlcik7XG4gICAgICAgIHJlZ2lzdGVyU2VydmljZShVdGlsaXRhcmlvKTtcbiAgICAgICAgcmVnaXN0ZXJTZXJ2aWNlKEV4dGVybmFsU2VydmljZSk7XG4gICAgICAgIHJlZ2lzdGVyU2VydmljZShTYWJyZVNlcnZpY2UpO1xuICAgICAgICBjb25zdCB4cCA9IGdldFNlcnZpY2UoRXh0ZW5zaW9uUG9pbnRTZXJ2aWNlKTtcblxuICAgICAgICBjb25zdCBzaWRlcGFuZWxDb25maWcgPSBuZXcgUmVkQXBwU2lkZVBhbmVsQ29uZmlnKFtcbiAgICAgICAgICAgIG5ldyBSZWRBcHBTaWRlUGFuZWxCdXR0b24oJ0dUQyBVSyBQYXltZW50IFByb2Nlc3MnLCAnYnRuIGJ0bi1zZWNvbmRhcnkgc2lkZS1wYW5lbC1idXR0b24gcmVkYXBwLXdlYi1yZXN0IHJlZGFwcC13ZWItcmVzdC1pbnRlcm5hbCcsICgpID0+IHRoaXMub3Blbk1vZGFsV2l0aFJlc3QoKSksXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHhwLmFkZENvbmZpZygncmVkQXBwU2lkZVBhbmVsJywgc2lkZXBhbmVsQ29uZmlnKTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBhc3luYyBvcGVuTW9kYWxXaXRoUmVzdCgpIHtcbiAgICAgICAgY29uc3QgcmVzZXJ2YXRpb246IENvbW1hbmRNZXNzYWdlUmVzZXJ2YXRpb25ScyA9IGF3YWl0IGdldFNlcnZpY2UoSVJlc2VydmF0aW9uU2VydmljZSkuZ2V0UmVzZXJ2YXRpb24oKTtcblxuICAgICAgICBjb25zdCByZXN0TW9kYWxPcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdHVEMgVUsgUGF5bWVudCBQcm9jZXNzJyxcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2FwcC5jb21tb24udmlld3MuQnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2FwdGlvbjogJ0NhbmNlbCcsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbk5hbWU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdhcHAuY29tbW9uLnZpZXdzLkJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGNhcHRpb246IFwiQ29udGludWVcIixcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uTmFtZTogJ25leHQnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG5cbiAgICAgICAgZ2V0U2VydmljZShMYXllclNlcnZpY2UpLnNob3dJbk1vZGFsKFxuICAgICAgICAgICAgbmV3IEd0Y19QYXltZW50KHsgbW9kZWw6IG5ldyBSZXN0TW9kZWwoKSB9LCByZXNlcnZhdGlvbiksXG4gICAgICAgICAgICByZXN0TW9kYWxPcHRpb25zLFxuICAgICAgICAgICAgeyBkaXNwbGF5OiAnYXJlYVZpZXcnIH0pO1xuICAgIH1cblxufVxuIixudWxsLCJleHBvcnQgY2xhc3MgY2NEYXRhIHtcclxuICAgIGNhcmROdW1iZXI6c3RyaW5nO1xyXG4gICAgY2FyZE1hc2tlZDpzdHJpbmc7XHJcbiAgICBsYXN0NDpzdHJpbmc7XHJcbiAgICBjb2RlOnN0cmluZztcclxuICAgIHllYXI6IHN0cmluZztcclxuICAgIG1vbnRoOiBzdHJpbmc7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIHBxRmFyZSB7XHJcbiAgICBpdGVtOnN0cmluZztcclxuICAgIGN1cnI6c3RyaW5nO1xyXG4gICAgdG90YWw6bnVtYmVyO1xyXG4gICAgc3VidG90YWw6bnVtYmVyO1xyXG4gICAgdGF4ZXM6bnVtYmVyO1xyXG59IiwiZXhwb3J0IGNsYXNzIHJlbWFyayB7XHJcbiAgICBUeXBlOnN0cmluZztcclxuICAgIFRleHQ6c3RyaW5nO1xyXG4gICAgQ29kZTpzdHJpbmc7XHJcbiAgICBJZDpzdHJpbmc7XHJcbiAgICBTZWdOdW06c3RyaW5nO1xyXG59IiwiaW1wb3J0IHtBYnN0cmFjdE1vZGVsfSBmcm9tIFwic2FicmUtbmd2LWFwcC9hcHAvQWJzdHJhY3RNb2RlbFwiO1xuaW1wb3J0IHtBdXRoVG9rZW5UeXBlfSBmcm9tICdzYWJyZS1uZ3YtYXBwL2FwcC9zZXJ2aWNlcy9pbXBsL0F1dGhUb2tlblR5cGUnO1xuaW1wb3J0IHtnZXRTZXJ2aWNlfSBmcm9tIFwiLi4vQ29udGV4dFwiO1xuaW1wb3J0IHtIdHRwTWV0aG9kfSBmcm9tICdzYWJyZS1uZ3YtYXBwL2FwcC9zZXJ2aWNlcy9pbXBsL0h0dHBNZXRob2QnO1xuaW1wb3J0IHtSZXN0QXBpU2VydmljZX0gZnJvbSBcInNhYnJlLW5ndi1jb21tdW5pY2F0aW9uL3NlcnZpY2VzL1Jlc3RBcGlTZXJ2aWNlXCI7XG5pbXBvcnQge1Jlc3RSZXNwb25zZX0gZnJvbSBcInNhYnJlLW5ndi1jb21tdW5pY2F0aW9uL2ludGVyZmFjZXMvUmVzdFJlc3BvbnNlXCI7XG5cbmV4cG9ydCBjbGFzcyBSZXN0TW9kZWwgZXh0ZW5kcyBBYnN0cmFjdE1vZGVsIHtcblxuICAgIHNlbmRSZXN0UmVxdWVzdCh1cmw6IHN0cmluZywgaHR0cE1ldGhvZDogSHR0cE1ldGhvZCwgYXV0aFRva2VuVHlwZTogQXV0aFRva2VuVHlwZSwgcGF5bG9hZDogc3RyaW5nLCBoZWFkZXJzOiBzdHJpbmcpOiBQcm9taXNlPFJlc3RSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gZ2V0U2VydmljZShSZXN0QXBpU2VydmljZSkuc2VuZChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBodHRwTWV0aG9kOiBodHRwTWV0aG9kLFxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgIGF1dGhUb2tlblR5cGU6IGF1dGhUb2tlblR5cGUsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJRXh0ZXJuYWxTZXJ2aWNlIH0gZnJvbSBcIi4vSUV4dGVybmFsU2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgQWJzdHJhY3RTZXJ2aWNlIH0gZnJvbSBcInNhYnJlLW5ndi1hcHAvYXBwL3NlcnZpY2VzL2ltcGwvQWJzdHJhY3RTZXJ2aWNlXCI7XHJcbmV4cG9ydCBjbGFzcyBFeHRlcm5hbFNlcnZpY2UgZXh0ZW5kcyBBYnN0cmFjdFNlcnZpY2UgaW1wbGVtZW50cyBJRXh0ZXJuYWxTZXJ2aWNlIHtcclxuICAgIHN0YXRpYyBTRVJWSUNFX05BTUUgOiBzdHJpbmcgPSBcImNvbS1pbnRlcm5vdmEtZ3RjcGF5bWVudC13ZWItbW9kdWxlLUV4dGVybmFsU2VydmljZVwiO1xyXG4gICAgc2VuZFJlcXVlc3QobWV0aG9kLCB1cmwpOiBQcm9taXNlPHN0cmluZz4gIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICB4aHIub3BlbihtZXRob2QsIHVybCk7XHJcbiAgICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSh4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJlamVjdCh7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHRcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZWplY3Qoe1xyXG4gICAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG59IiwiZXhwb3J0IGludGVyZmFjZSBJRXh0ZXJuYWxTZXJ2aWNlIHtcclxuICAgIHNlbmRSZXF1ZXN0KG1ldGhvZCwgdXJsKTogUHJvbWlzZTxzdHJpbmc+O1xyXG59IiwiaW1wb3J0IHsgQXV0aFRva2VuVHlwZSB9IGZyb20gXCJzYWJyZS1uZ3YtYXBwL2FwcC9zZXJ2aWNlcy9pbXBsL0F1dGhUb2tlblR5cGVcIjtcclxuaW1wb3J0IHsgUmVzdFJlc3BvbnNlIH0gZnJvbSBcInNhYnJlLW5ndi1jb21tdW5pY2F0aW9uL2ludGVyZmFjZXMvUmVzdFJlc3BvbnNlXCI7XHJcbmltcG9ydCB7IEh0dHBNZXRob2QgfSBmcm9tIFwic2FicmUtbmd2LWFwcC9hcHAvc2VydmljZXMvaW1wbC9IdHRwTWV0aG9kXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTYWJyZVNlcnZpY2Uge1xyXG4gICAgY2FsbFNvYXBTZXJ2aWNlQXN5bmMocmVxdWVzdDpzdHJpbmcsIGFjdGlvbkNvZGU6c3RyaW5nLCBhdXRoVG9rZW5UeXBlOiBBdXRoVG9rZW5UeXBlLCB0aW1lb3V0Om51bWJlcikgOiBQcm9taXNlPHN0cmluZz47XHJcblxyXG4gICAgY2FsbFJlc3RTZXJ2aWNlQXN5bmModXJsOnN0cmluZywgaHR0cE1ldGhvZDpIdHRwTWV0aG9kLCBhdXRoVG9rZW5UeXBlOkF1dGhUb2tlblR5cGUsIHBheWxvYWQ6c3RyaW5nLCBoZWFkZXJzOnN0cmluZyApOiBQcm9taXNlPFJlc3RSZXNwb25zZT47XHJcbn0iLCJpbXBvcnQgeyBJU2FicmVTZXJ2aWNlIH0gZnJvbSBcIi4vSVNhYnJlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBBYnN0cmFjdFNlcnZpY2UgfSBmcm9tIFwic2FicmUtbmd2LWFwcC9hcHAvc2VydmljZXMvaW1wbC9BYnN0cmFjdFNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQXV0aFRva2VuVHlwZSB9IGZyb20gXCJzYWJyZS1uZ3YtYXBwL2FwcC9zZXJ2aWNlcy9pbXBsL0F1dGhUb2tlblR5cGVcIjtcclxuaW1wb3J0IHsgSVNvYXBBcGlTZXJ2aWNlIH0gZnJvbSBcInNhYnJlLW5ndi1jb21tdW5pY2F0aW9uL2ludGVyZmFjZXMvSVNvYXBBcGlTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vQ29udGV4dFwiO1xyXG5pbXBvcnTCoHvCoFNyd1N5bmNBcGnCoH3CoGZyb23CoFwic2FicmUtbmd2LWFwcC9hcHAvc2VydmljZXMvaW1wbC9TcndTeW5jQXBpXCI7XHJcbmltcG9ydMKge8KgU3J3QXN5bmNBcGnCoH3CoGZyb23CoFwic2FicmUtbmd2LWFwcC9hcHAvc2VydmljZXMvaW1wbC9TcndBc3luY0FwaVwiO1xyXG5pbXBvcnQgeyBIdHRwTWV0aG9kIH0gZnJvbSBcInNhYnJlLW5ndi1hcHAvYXBwL3NlcnZpY2VzL2ltcGwvSHR0cE1ldGhvZFwiO1xyXG5pbXBvcnQgeyBSZXN0UmVzcG9uc2UgfSBmcm9tIFwic2FicmUtbmd2LWNvbW11bmljYXRpb24vaW50ZXJmYWNlcy9SZXN0UmVzcG9uc2VcIjtcclxuaW1wb3J0IHsgUmVzdEFwaVNlcnZpY2UgfSBmcm9tIFwic2FicmUtbmd2LWNvbW11bmljYXRpb24vc2VydmljZXMvUmVzdEFwaVNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTYWJyZVNlcnZpY2UgZXh0ZW5kcyBBYnN0cmFjdFNlcnZpY2UgaW1wbGVtZW50cyBJU2FicmVTZXJ2aWNlIHtcclxuICAgIHN0YXRpYyBTRVJWSUNFX05BTUU6IHN0cmluZyA9IFwiY29tLWludGVybm92YS1ndGNwYXltZW50LXdlYi1tb2R1bGUtU2FicmVTZXJ2aWNlXCI7XHJcblxyXG4gICAgY2FsbFNvYXBTZXJ2aWNlQXN5bmMocGF5bG9hZDogc3RyaW5nLCBhY3Rpb246IHN0cmluZywgYXV0aFRva2VuVHlwZTogQXV0aFRva2VuVHlwZSwgdGltZW91dDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW5zYWZlLWFueVxyXG4gICAgICAgICAgICBsZXQgc29hcFN2YzogSVNvYXBBcGlTZXJ2aWNlID0gZ2V0U2VydmljZShJU29hcEFwaVNlcnZpY2UpO1xyXG4gICAgICAgICAgICBsZXQgcnFfID0geyBhY3Rpb24sIHBheWxvYWQsIGF1dGhUb2tlblR5cGUsIHRpbWVvdXQgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW5zYWZlLWFueVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJxXzpcIixycV8pO1xyXG4gICAgICAgICAgICBzb2FwU3ZjLmNhbGxTd3MocnFfKSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhc3luYzogcmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW5zYWZlLWFueVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYWxsU29hcFNlcnZpY2VBc3luYyBlcnJvcjogXCIsZXJyb3IpOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNhbGxTb2FwU2VydmljZVN5bmMoc3ZjUlE6IHN0cmluZywgc3ZjQWN0aW9uQ29kZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgc29hcFN2YyA9IGdldFNlcnZpY2UoU3J3U3luY0FwaSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzb2FwU3ZjOlwiLHNvYXBTdmMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCI7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBzb2FwU3ZjLnN3cyhzdmNSUSwgc3ZjQWN0aW9uQ29kZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic29hcFN2Yy1yZXNwb3NlOiBcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbGxSZXN0U2VydmljZUFzeW5jKHVybDogc3RyaW5nLCBodHRwTWV0aG9kOiBIdHRwTWV0aG9kLCBhdXRoVG9rZW5UeXBlOiBBdXRoVG9rZW5UeXBlLCBwYXlsb2FkOiBzdHJpbmcsIGhlYWRlcnM6IHN0cmluZyk6IFByb21pc2U8UmVzdFJlc3BvbnNlPiB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bnNhZmUtYW55XHJcbiAgICAgICAgcmV0dXJuIGdldFNlcnZpY2UoUmVzdEFwaVNlcnZpY2UpLnNlbmQoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGh0dHBNZXRob2Q6IGh0dHBNZXRob2QsXHJcbiAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICAgIGF1dGhUb2tlblR5cGU6IGF1dGhUb2tlblR5cGUsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBBYnN0cmFjdFZpZXcgfSBmcm9tIFwic2FicmUtbmd2LWFwcC9hcHAvQWJzdHJhY3RWaWV3XCI7XHJcbmltcG9ydCB7IExheWVyU2VydmljZSB9IGZyb20gXCJzYWJyZS1uZ3YtY29yZS9zZXJ2aWNlcy9MYXllclNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tIFwic2FicmUtbmd2LWNvcmUvZGVjb3JhdG9ycy9jbGFzc2VzL3ZpZXcvVGVtcGxhdGVcIjtcclxuaW1wb3J0IHsgU2FicmVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL1NhYnJlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBwcUZhcmUgfSBmcm9tIFwiLi4vbW9kZWwvcHFGYXJlXCI7XHJcbmltcG9ydCB7IGNjRGF0YSB9IGZyb20gXCIuLi9tb2RlbC9jY0RhdGFcIjtcclxuaW1wb3J0IHsgSUFyZWFTZXJ2aWNlIH0gZnJvbSAnc2FicmUtbmd2LWFwcC9hcHAvc2VydmljZXMvaW1wbC9JQXJlYVNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVdGlsaXRhcmlvIH0gZnJvbSBcIi4uL2NvbW1vbi9VdGlsaXRhcmlvXCI7XHJcbmltcG9ydCB7IEFic3RyYWN0QWN0aW9uT3B0aW9ucyB9IGZyb20gXCJzYWJyZS1uZ3YtYXBwL2FwcC9jb21tb24vdmlld3MvQWJzdHJhY3RBY3Rpb25PcHRpb25zXCI7XHJcbmltcG9ydCB7IFNhYnJlQ29udHJvbGxlciB9IGZyb20gXCIuLi9jb250cm9sbGVycy9TYWJyZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgQWJzdHJhY3RWaWV3T3B0aW9ucyB9IGZyb20gJ3NhYnJlLW5ndi1hcHAvYXBwL0Fic3RyYWN0Vmlld09wdGlvbnMnO1xyXG5pbXBvcnQgeyBDb21tYW5kTWVzc2FnZVJlc2VydmF0aW9uUnMgfSBmcm9tICdzYWJyZS1uZ3YtcG9zLWNkbS9yZXNlcnZhdGlvbic7XHJcbmltcG9ydCB7IFJlc3RBcGlTZXJ2aWNlIH0gZnJvbSBcInNhYnJlLW5ndi1jb21tdW5pY2F0aW9uL3NlcnZpY2VzL1Jlc3RBcGlTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEF1dGhUb2tlblR5cGUgfSBmcm9tIFwic2FicmUtbmd2LWFwcC9hcHAvc2VydmljZXMvaW1wbC9BdXRoVG9rZW5UeXBlXCI7XHJcbmltcG9ydCB7IElTb2FwQXBpU2VydmljZSB9IGZyb20gXCJzYWJyZS1uZ3YtY29tbXVuaWNhdGlvbi9pbnRlcmZhY2VzL0lTb2FwQXBpU2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwTWV0aG9kIH0gZnJvbSBcInNhYnJlLW5ndi1hcHAvYXBwL3NlcnZpY2VzL2ltcGwvSHR0cE1ldGhvZFwiO1xyXG5pbXBvcnQgeyBSZXN0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvUmVzdE1vZGVsXCI7XHJcbmltcG9ydCB7IGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vQ29udGV4dFwiO1xyXG5pbXBvcnQgKiBhcyBYTUwySlMgZnJvbSBcInhtbDJqc1wiO1xyXG5pbXBvcnQgeyByZW1hcmsgfSBmcm9tIFwiLi4vbW9kZWwvcmVtYXJrXCI7XHJcblxyXG5AVGVtcGxhdGUoJ2NvbS1pbnRlcm5vdmEtZ3RjcGF5bWVudC13ZWItbW9kdWxlOkNoZWNrVG90YWwnKVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tUb3RhbCBleHRlbmRzIEFic3RyYWN0VmlldzxSZXN0TW9kZWw+IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBBYnN0cmFjdFZpZXdPcHRpb25zLCBwYWNrPzoge30pIHtcclxuICAgICAgICBzdXBlcihvcHRpb25zKTtcclxuICAgICAgICB0aGlzLnByb2Nlc3NEYXRhKHBhY2spO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInJta3NcIiwgdGhpcy5ybWtzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZVJta3NcIiwgdGhpcy5jcmVhdGVSbWtzKTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRNb2RlbCgpLnNldCgndG90YWwnLCBwYWNrWyd0b3RhbCddKTtcclxuICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJta3M6IHJlbWFya1tdID0gW107XHJcbiAgICBwdWJsaWMgY3JlYXRlUm1rczogcmVtYXJrW10gPSBbXTtcclxuXHJcbiAgICBpbml0aWFsaXplKG9wdGlvbnM6IEFic3RyYWN0QWN0aW9uT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2Vzc0RhdGEocGFjaz86IHt9KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ybWtzID0gcGFja1snVXBkYXRlUm1rJ107XHJcbiAgICAgICAgbGV0IG9wdCA9IHBhY2tbJ29wdGlvbiddO1xyXG4gICAgICAgIGxldCBybWtDbSA9IHRoaXMucm1rcy5maWx0ZXIoeCA9PiB4LkNvZGUgPT0gXCJDTVwiKVswXS5UZXh0ID0gXCJDTS1cIiArIHBhY2tbJ2NjQ29kZSddICsgcGFja1snY2FyZDQnXSArIFwiL1wiICsgcGFja1snZXhwTW9udGgnXSArIHBhY2tbJ2V4cFllYXInXSArIFwiLypcIjtcclxuICAgICAgICBsZXQgcm1rUGF5ID0gdGhpcy5ybWtzLmZpbHRlcih4ID0+IHguQ29kZSA9PSBcIlBBWVwiKVswXS5UZXh0ID0gXCJQQVlNRU5ULzEyMzQ1Ni9cIiArIHBhY2tbJ3JlZklkJ10gKyBcIi9cIiArIHBhY2tbJ3RvdGFsJ107XHJcbiAgICAgICAgLy8gNUgtUEFZTUVOVC9BLTEyMzQ1Ni9PU1VJQ0kyMzAyMjcvMTY3Mi44MC9WSTExMTFcclxuICAgICAgICAvLyA1SC1NMTEwMC4wMC9TMTYwLjAwL1QzNjIuODAvQTUwLjAwL1RUMTY3Mi44MFxyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVSbWsoXCJQQVlNRU5UL1wiKyBvcHQgKyBcIjEyMzQ1Ni9cIiArIHBhY2tbJ3JlZklkJ10gKyBcIi9cIiArIHBhY2tbJ3RvdGFsJ10gKyBcIi9cIiArIHBhY2tbJ2NjQ29kZSddICsgcGFja1snY2FyZDQnXSk7XHJcbiAgICAgICAgbGV0IHRleHQgPSBcIlwiO1xyXG4gICAgICAgIGlmIChwYWNrWydtYXJrVXBGZWUnXSkge1xyXG4gICAgICAgICAgICB0ZXh0ID0gXCJNXCIgKyBwYWNrWydtYXJrVXBGZWUnXVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFja1snZmVlJ10pIHtcclxuICAgICAgICAgICAgdGV4dCA9IHRleHQgKyBcIi9TXCIgKyBwYWNrWydmZWUnXVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFja1sncHFBbXQnXSkge1xyXG4gICAgICAgICAgICB0ZXh0ID0gdGV4dCArIFwiL1RcIiArIHBhY2tbJ3BxQW10J11cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhY2tbJ2FkZGl0aW9uYWwnXSkge1xyXG4gICAgICAgICAgICB0ZXh0ID0gdGV4dCArIFwiL0FcIiArIHBhY2tbJ2FkZGl0aW9uYWwnXVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFja1sndG90YWwnXSkge1xyXG4gICAgICAgICAgICB0ZXh0ID0gdGV4dCArIFwiL1RUXCIgKyBwYWNrWyd0b3RhbCddXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVSbWsodGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2VsZk5leHRBY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFyZWFTZXJ2aWNlOiBJQXJlYVNlcnZpY2UgPSBnZXRTZXJ2aWNlKElBcmVhU2VydmljZSk7XHJcbiAgICAgICAgbGV0IGdldHJlc2VydmF0aW9ucHJvbWlzZSA9IGdldFNlcnZpY2UoU2FicmVDb250cm9sbGVyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdldHJlc2VydmF0aW9ucHJvbWlzZVwiLCBnZXRyZXNlcnZhdGlvbnByb21pc2UpO1xyXG5cclxuICAgICAgICBnZXRyZXNlcnZhdGlvbnByb21pc2UuUmVtYXJrVXBkYXRlKHRoaXMucm1rcylcclxuICAgICAgICAgICAgLnRoZW4ocnNwID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUm1rcyB0byB1cGRhdGVcIiwgdGhpcy5ybWtzKTtcclxuICAgICAgICAgICAgICAgIGdldHJlc2VydmF0aW9ucHJvbWlzZS5TZW5kQ29tbWFuZE1lc3NhZ2UoXCIqLlwiLCB0cnVlLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVtYXJrcyBiZWVuIGRpc3BsYXllZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0cmVzZXJ2YXRpb25wcm9taXNlLmJ1aWxkUmVxdWVzdEFkZFJlbWFyayh0aGlzLmNyZWF0ZVJta3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZWFTZXJ2aWNlLnNob3dCYW5uZXIoJ1N1Y2Nlc3MnLCBcIlJlbWFya3Mgd2VyZSBhZGRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRyZXNlcnZhdGlvbnByb21pc2UuU2VuZENvbW1hbmRNZXNzYWdlKFwiKlA1SFwiLCB0cnVlLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZW1hcmtzIGJlZW4gZGlzcGxheWVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYXJlYVNlcnZpY2Uuc2hvd0Jhbm5lcignU3VjY2VzcycsIFwiUmVtYXJrcyB3ZXJlIHVwZGF0ZWRcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgZ2V0U2VydmljZShMYXllclNlcnZpY2UpLmNsZWFyTGF5ZXIoKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGlvbjogc3RyaW5nID0gdGhpcy4kKCcuYWN0aW9uLWZpZWxkJykuZmluZCgnLmFjdGlvbicpLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IGF1dGhUb2tlblR5cGU6IEF1dGhUb2tlblR5cGUgPSB0aGlzLiQoJy5hdXRoVG9rZW5UeXBlLWZpZWxkJykuZmluZCgnLmF1dGhUb2tlblR5cGUnKS52YWwoKTtcclxuICAgICAgICBjb25zdCB0aW1lb3V0OiBudW1iZXIgPSB0aGlzLiQoJy50aW1lb3V0LWZpZWxkJykuZmluZCgnLnRpbWVvdXQnKS52YWwoKTtcclxuICAgICAgICBjb25zdCBwYXlsb2FkOiBzdHJpbmcgPSB0aGlzLiQoJy5wYXlsb2FkLWZpZWxkJykuZmluZCgnLnBheWxvYWQnKS52YWwoKTtcclxuXHJcbiAgICAgICAgdGhpcy4kKCcucmVzcG9uc2UnKS52YWwoXCJcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHNvYXBBcGk6IElTb2FwQXBpU2VydmljZSA9IGdldFNlcnZpY2UoSVNvYXBBcGlTZXJ2aWNlKTtcclxuXHJcbiAgICAgICAgc29hcEFwaS5jYWxsU3dzKHtcclxuICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICBwYXlsb2FkLFxyXG4gICAgICAgICAgICBhdXRoVG9rZW5UeXBlLFxyXG4gICAgICAgICAgICB0aW1lb3V0XHJcbiAgICAgICAgfSkudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VWYWx1ZSA9IHJlc3BvbnNlLmVycm9yQ29kZSA/IHJlc3BvbnNlIDogYXdhaXQgdGhpcy5wYXJzZVhtbDJKcyhyZXNwb25zZS52YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuJCgnLnJlc3BvbnNlJykudmFsKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlVmFsdWUsIG51bGwsIDIpKTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kKCcucmVzcG9uc2UnKS52YWwoZXJyb3IpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gbGV0IGdldHJlc2VydmF0aW9ucHJvbWlzZSA9IGdldFNlcnZpY2UoU2FicmVDb250cm9sbGVyKTtcclxuICAgICAgICAvLyBnZXRyZXNlcnZhdGlvbnByb21pc2UuYnVpbGRSZXF1ZXN0QWRkUmVtYXJrKHRoaXMucm1rcylcclxuICAgICAgICAvLyAgICAgLnRoZW4ocnNwID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwicnNwOlwiLHJzcCk7XHJcblxyXG4gICAgICAgIC8vICAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgICAgIGFyZWFTZXJ2aWNlLnNob3dCYW5uZXIoJ1N1Y2Nlc3MnLCAnUmVtYXJrcyB3ZXJlIGFkZGVkITogJyArIHRoaXMuYWRmbGV4UmVmKTtcclxuICAgICAgICBnZXRTZXJ2aWNlKExheWVyU2VydmljZSkuY2xlYXJMYXllcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHBhcnNlWG1sMkpzKHJlc3BvbnNlVmFsdWU6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIFhNTDJKUy5wYXJzZVN0cmluZyhyZXNwb25zZVZhbHVlLCAoZXJyLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVJtayh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgcm1rID0gbmV3IHJlbWFyaztcclxuICAgICAgICBybWsuVHlwZSA9IFwiSGlzdG9yaWNhbFwiO1xyXG4gICAgICAgIHJtay5UZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLmNyZWF0ZVJta3MucHVzaChybWspO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBBYnN0cmFjdFZpZXcgfSBmcm9tIFwic2FicmUtbmd2LWFwcC9hcHAvQWJzdHJhY3RWaWV3XCI7XG5pbXBvcnQgeyBMYXllclNlcnZpY2UgfSBmcm9tIFwic2FicmUtbmd2LWNvcmUvc2VydmljZXMvTGF5ZXJTZXJ2aWNlXCI7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gXCJzYWJyZS1uZ3YtY29yZS9kZWNvcmF0b3JzL2NsYXNzZXMvdmlldy9UZW1wbGF0ZVwiO1xuaW1wb3J0IHsgcHFGYXJlIH0gZnJvbSBcIi4uL21vZGVsL3BxRmFyZVwiO1xuaW1wb3J0IHsgY2NEYXRhIH0gZnJvbSBcIi4uL21vZGVsL2NjRGF0YVwiO1xuaW1wb3J0IHsgSUFyZWFTZXJ2aWNlIH0gZnJvbSAnc2FicmUtbmd2LWFwcC9hcHAvc2VydmljZXMvaW1wbC9JQXJlYVNlcnZpY2UnO1xuaW1wb3J0IHsgQWJzdHJhY3RBY3Rpb25PcHRpb25zIH0gZnJvbSBcInNhYnJlLW5ndi1hcHAvYXBwL2NvbW1vbi92aWV3cy9BYnN0cmFjdEFjdGlvbk9wdGlvbnNcIjtcbmltcG9ydCB7IEFic3RyYWN0Vmlld09wdGlvbnMgfSBmcm9tICdzYWJyZS1uZ3YtYXBwL2FwcC9BYnN0cmFjdFZpZXdPcHRpb25zJztcbmltcG9ydCB7IENvbW1hbmRNZXNzYWdlUmVzZXJ2YXRpb25ScyB9IGZyb20gJ3NhYnJlLW5ndi1wb3MtY2RtL3Jlc2VydmF0aW9uJztcbmltcG9ydCB7IFJlc3RBcGlTZXJ2aWNlIH0gZnJvbSBcInNhYnJlLW5ndi1jb21tdW5pY2F0aW9uL3NlcnZpY2VzL1Jlc3RBcGlTZXJ2aWNlXCI7XG5pbXBvcnQgeyBBdXRoVG9rZW5UeXBlIH0gZnJvbSBcInNhYnJlLW5ndi1hcHAvYXBwL3NlcnZpY2VzL2ltcGwvQXV0aFRva2VuVHlwZVwiO1xuaW1wb3J0IHsgSHR0cE1ldGhvZCB9IGZyb20gXCJzYWJyZS1uZ3YtYXBwL2FwcC9zZXJ2aWNlcy9pbXBsL0h0dHBNZXRob2RcIjtcbmltcG9ydCB7IFJlc3RNb2RlbCB9IGZyb20gXCIuLi9tb2RlbC9SZXN0TW9kZWxcIjtcbmltcG9ydCB7IGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vQ29udGV4dFwiO1xuaW1wb3J0IHsgQ2hlY2tUb3RhbCB9IGZyb20gXCIuL0NoZWNrVG90YWxcIjtcbmltcG9ydCB7IHJlbWFyayB9IGZyb20gXCIuLi9tb2RlbC9yZW1hcmtcIjtcbmltcG9ydCB7IFNhYnJlQ29udHJvbGxlciB9IGZyb20gXCIuLi9jb250cm9sbGVycy9TYWJyZUNvbnRyb2xsZXJcIjtcblxuQFRlbXBsYXRlKCdjb20taW50ZXJub3ZhLWd0Y3BheW1lbnQtd2ViLW1vZHVsZTpHdGNfUGF5bWVudCcpXG5leHBvcnQgY2xhc3MgR3RjX1BheW1lbnQgZXh0ZW5kcyBBYnN0cmFjdFZpZXc8UmVzdE1vZGVsPiB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zPzogQWJzdHJhY3RWaWV3T3B0aW9ucywgcmVzZXJ2YXRpb24/OiBDb21tYW5kTWVzc2FnZVJlc2VydmF0aW9uUnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZ2V0UmVzZXJ2YXRpb24ocmVzZXJ2YXRpb24pO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdHVzID0gW107XG5cbiAgICBwdWJsaWMgdmVuZG9ycyA9IFt7IGNvZGU6IFwiQVhcIiB9LCB7IGNvZGU6IFwiVklcIiB9LCB7IGNvZGU6IFwiQ0FcIiB9XVxuICAgIHB1YmxpYyB0b3RhbFBheDogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgdXBkYXRlUm1rczogcmVtYXJrW10gPSBbXTtcbiAgICBwdWJsaWMgcHFGYXJlTGlzdDogcHFGYXJlW10gPSBbXTtcbiAgICBwdWJsaWMgY3JlZGl0Q2FyZExpc3Q6IGNjRGF0YVtdID0gW107XG4gICAgaW5pdGlhbGl6ZShvcHRpb25zOiBBYnN0cmFjdEFjdGlvbk9wdGlvbnMpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuYWRkRG9tRXZlbnRzKHtcbiAgICAgICAgICAgICdjaGFuZ2UgI3NlbGVjdFBxJzogJ2xvYWRBbW91bnQnLFxuICAgICAgICAgICAgJ2NoYW5nZSAjY3JlZGl0Q2FyZHMnOiAnbG9hZEV4cGlyYXRpb24nLFxuICAgICAgICAgICAgJ2NoYW5nZSAjbWFya1VwRmVlJzogJ3VwZGF0ZVRvdGFsJyxcbiAgICAgICAgICAgICdjaGFuZ2UgI2FtdCc6ICd1cGRhdGVUb3RhbCcsXG4gICAgICAgICAgICAnY2hhbmdlICNhZGRpdGlvbmFsJzogJ3VwZGF0ZVRvdGFsJyxcbiAgICAgICAgICAgICdjaGFuZ2UgI3RrdEZlZSc6ICd1cGRhdGVUb3RhbCdcbiAgICAgICAgfSk7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZ2V0UmVzZXJ2YXRpb24oZnVsbFBOUj86IENvbW1hbmRNZXNzYWdlUmVzZXJ2YXRpb25Scyk6IHZvaWQge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNjTnVtXCIsIHRoaXMuY2NOdW0pO1xuICAgICAgICBsZXQgZ2V0cmVzZXJ2YXRpb25wcm9taXNlID0gZ2V0U2VydmljZShTYWJyZUNvbnRyb2xsZXIpO1xuICAgICAgICBpZiAoIWZ1bGxQTlIpIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZWFTZXJ2aWNlOiBJQXJlYVNlcnZpY2UgPSBnZXRTZXJ2aWNlKElBcmVhU2VydmljZSk7XG4gICAgICAgICAgICBhcmVhU2VydmljZS5zaG93QmFubmVyKCdFcnJvcicsICdUaGVyZSBpcyBubyBhY3RpdmUgUE5SLi4uJyk7XG4gICAgICAgICAgICBnZXRTZXJ2aWNlKExheWVyU2VydmljZSkuY2xlYXJMYXllcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHBuckRhdGEgPSBmdWxsUE5SLkRhdGE7XG4gICAgICAgICAgICBsZXQgcG5yUmVjbG9jID0gZnVsbFBOUj8uRGF0YT8uUmVjb3JkTG9jYXRvcnNbMF1bJ0lkJ107XG4gICAgICAgICAgICBsZXQgdG90YWxQYXggPSBwbnJEYXRhLlBhc3NlbmdlcnMuUGFzc2VuZ2VyLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMudG90YWxQYXggPSB0b3RhbFBheDtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicG5yUmVjbG9jXCIscG5yUmVjbG9jKTsgICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBsZXQgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGxldCBtb250aCA9IHRvZGF5LmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgbGV0IGRheSA9IHRvZGF5LmdldERhdGUoKTtcbiAgICAgICAgICAgIGxldCBkYXkyID0gKGRheSA8IDEwKSA/IFwiMFwiICsgZGF5LnRvU3RyaW5nKCkgOiBkYXkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGxldCBtb250aDIgPSAobW9udGggPCAxMCkgPyBcIjBcIiArIG1vbnRoLnRvU3RyaW5nKCkgOiBtb250aC50b1N0cmluZygpO1xuICAgICAgICAgICAgbGV0IGFkZmxleFJlZiA9IHBuclJlY2xvYyArIHllYXJbMl0gKyB5ZWFyWzNdICsgbW9udGgyICsgZGF5MjtcbiAgICAgICAgICAgIGxldCBta3VwLCB0a3RGZWUsIGZlZSA9IFwiXCI7XG4gICAgICAgICAgICBsZXQgbWt1cFRvdGFsID0gMDtcbiAgICAgICAgICAgIGxldCBmZWVUb3RhbCA9IDA7XG4gICAgICAgICAgICBsZXQgcGF4TmFtZSA9IHBuckRhdGEuUGFzc2VuZ2Vycy5QYXNzZW5nZXJbMF0uR2l2ZW5OYW1lICsgXCIgXCIgKyBwbnJEYXRhLlBhc3NlbmdlcnMuUGFzc2VuZ2VyWzBdLlN1cm5hbWU7XG4gICAgICAgICAgICBpZiAocG5yRGF0YS5QcmljZVF1b3Rlcz8uUHJpY2VRdW90ZSkge1xuICAgICAgICAgICAgICAgIGxldCBhcnJheUZhcmVzID0gcG5yRGF0YS5QcmljZVF1b3Rlcy5QcmljZVF1b3RlO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYXJyYXlGYXJlc1wiLGFycmF5RmFyZXMpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlGYXJlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlGYXJlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbGVtZW50XCIsZWxlbWVudC5UYXhlcy5Ub3RhbFRheFsnQ3VycmVuY3knXSk7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5UYXhlcy5Ub3RhbFRheFsnQ3VycmVuY3knXSA9PSBcIkdCUFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9uZVBRID0gbmV3IHBxRmFyZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbmVQUS5jdXJyID0gZWxlbWVudC5CYXNlRmFyZS5BbW91bnQuQ3VycmVuY3k7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBlbGVtZW50WydJZCddLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25lUFEuaXRlbSA9IGl0ZW1baXRlbS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmVQUS50b3RhbCA9IGVsZW1lbnQuVG90YWwuQW1vdW50WydBbW91bnQnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmVQUS50YXhlcyA9IGVsZW1lbnQuVGF4ZXMuVG90YWxUYXhbJ0Ftb3VudCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByaWNlU3RyaW5nID0gZWxlbWVudC50b3RhbHMuc3VidG90YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25lUFEuc3VidG90YWwgPSBwYXJzZUZsb2F0KHByaWNlU3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9uZVBRXCIsb25lUFEpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBxRmFyZUxpc3QucHVzaChvbmVQUSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBuckRhdGEuRm9ybU9mUGF5bWVudHM/LkZvcm1PZlBheW1lbnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXJyYXlGYXJlcyA9IHBuckRhdGEuRm9ybU9mUGF5bWVudHMuRm9ybU9mUGF5bWVudDtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlGYXJlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlGYXJlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9uZUNDID0gbmV3IGNjRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uZUNDLmNvZGUgPSBlbGVtZW50LkNyZWRpdENhcmRbJ0NyZWRpdENhcmRDb2RlJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBvbmVDQy5jYXJkTWFza2VkID0gb25lQ0MuY29kZSArIGVsZW1lbnQuQ3JlZGl0Q2FyZFsnQ3JlZGl0Q2FyZE51bWJlciddO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9uZUNDLmNhcmRNYXNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdDRkaWdpdHMgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBvbmVDQy5jYXJkTWFza2VkLmxlbmd0aCAtIDQ7IGkgPCBvbmVDQy5jYXJkTWFza2VkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3Q0ZGlnaXRzID0gbGFzdDRkaWdpdHMgKyBvbmVDQy5jYXJkTWFza2VkW2ldLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uZUNDLmxhc3Q0ID0gbGFzdDRkaWdpdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbmVDQy55ZWFyID0gZWxlbWVudC5DcmVkaXRDYXJkWydFeHBpcmF0aW9uWWVhciddWzJdICsgZWxlbWVudC5DcmVkaXRDYXJkWydFeHBpcmF0aW9uWWVhciddWzNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgb25lQ0MubW9udGggPSBlbGVtZW50LkNyZWRpdENhcmRbJ0V4cGlyYXRpb25Nb250aCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJvbmVDQyBcIiwgb25lQ0MpOyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVkaXRDYXJkTGlzdC5wdXNoKG9uZUNDKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocG5yRGF0YS5SZW1hcmtzPy5SZW1hcmspIHtcbiAgICAgICAgICAgICAgICBsZXQgaW52b2ljZVJta3MgPSBwbnJEYXRhLlJlbWFya3MuUmVtYXJrO1xuICAgICAgICAgICAgICAgIGlmIChpbnZvaWNlUm1rcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaW52b2ljZVJta3MuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50WydUeXBlJ10gPT0gXCJJbnZvaWNlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFydE1rdXAgPSBlbGVtZW50WydUZXh0J10uc3BsaXQoXCJNS1VQL1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFydE1rdXBbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNsYXNoID0gcGFydE1rdXBbMV0uc3BsaXQoXCIvXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBta3VwID0gc2xhc2hbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1rdXBUb3RhbCA9IG1rdXBUb3RhbCArIHBhcnNlRmxvYXQobWt1cCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJ0VGt0ID0gZWxlbWVudFsnVGV4dCddLnNwbGl0KFwiVEtURkVFL1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFydFRrdFsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0a3RGZWUgPSBwYXJ0VGt0WzFdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydFRrdCA9IGVsZW1lbnRbJ1RleHQnXS5zcGxpdChcIkZFRS9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0VGt0WzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWUgPSBwYXJ0VGt0WzFdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNtUm1rID0gZWxlbWVudFsnVGV4dCddLnNwbGl0KFwiQ00tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjbVJta1sxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm1rID0gbmV3IHJlbWFyaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm1rLlR5cGUgPSBcIkl0aW5lcmFyeVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBybWsuSWQgPSBlbGVtZW50LlNvdXJjZVsnSWQnXS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBybWsuVGV4dCA9IGVsZW1lbnRbJ1RleHQnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm1rLkNvZGUgPSBcIkNNXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSbWtzLnB1c2gocm1rKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBheW1lbnQgPSBlbGVtZW50WydUZXh0J10uc3BsaXQoXCJQQVlNRU5UL1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGF5bWVudFsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm1rID0gbmV3IHJlbWFyaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm1rLlR5cGUgPSBcIkl0aW5lcmFyeVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBybWsuSWQgPSBlbGVtZW50LlNvdXJjZVsnSWQnXS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBybWsuVGV4dCA9IGVsZW1lbnRbJ1RleHQnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm1rLkNvZGUgPSBcIlBBWVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUm1rcy5wdXNoKHJtayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMudXBkYXRlUm1rc1wiLHRoaXMudXBkYXRlUm1rcyk7ICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGt0RmVlKSB7XG4gICAgICAgICAgICAgICAgZmVlVG90YWwgPSB0b3RhbFBheCAqIHBhcnNlRmxvYXQodGt0RmVlKTtcbiAgICAgICAgICAgIH0gaWYgKGZlZSkge1xuICAgICAgICAgICAgICAgIGZlZVRvdGFsID0gcGFyc2VGbG9hdChmZWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHRvdGFsQW10ID0gbWt1cFRvdGFsICsgZmVlVG90YWw7XG4gICAgICAgICAgICB0aGlzLmdldE1vZGVsKCkuc2V0KCdtYXJrVXBGZWUnLCBta3VwVG90YWwudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICB0aGlzLmdldE1vZGVsKCkuc2V0KCd0a3RGZWUnLCBmZWVUb3RhbC50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9kZWwoKS5zZXQoJ3NlbGVjdFBxJywgdGhpcy5wcUZhcmVMaXN0KTtcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9kZWwoKS5zZXQoJ2NyZWRpdENhcmRzJywgdGhpcy5jcmVkaXRDYXJkTGlzdCk7XG4gICAgICAgICAgICB0aGlzLmdldE1vZGVsKCkuc2V0KCduYW1lJywgcGF4TmFtZSk7XG4gICAgICAgICAgICB0aGlzLmdldE1vZGVsKCkuc2V0KCdyZWZJZCcsIGFkZmxleFJlZik7XG4gICAgICAgICAgICB0aGlzLmdldE1vZGVsKCkuc2V0KCd0b3RhbCcsIHRvdGFsQW10LnRvRml4ZWQoMikgKyBcIiBHQlBcIik7XG4gICAgICAgICAgICB0aGlzLmdldE1vZGVsKCkuc2V0KCd2ZW5kb3JzJywgdGhpcy52ZW5kb3JzKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZVRvdGFsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRBbW91bnQoc2VsZWN0b3I6IEpRdWVyeUV2ZW50T2JqZWN0KTogdm9pZCB7XG4gICAgICAgIGxldCBpdGVtID0gdGhpcy4kKCcjc2VsZWN0UHEnKS5jaGlsZHJlbihcIm9wdGlvbjpzZWxlY3RlZFwiKS52YWwoKTtcbiAgICAgICAgaWYgKHNlbGVjdG9yLnRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5wcUZhcmVMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRbJ2l0ZW0nXSA9PSBpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFtdFwiKSkudmFsdWUgPSBlbGVtZW50Wyd0b3RhbCddLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG90YWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoJyNzZWxlY3RQcScpLnZhbChpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZEV4cGlyYXRpb24oc2VsZWN0b3I6IEpRdWVyeUV2ZW50T2JqZWN0KTogdm9pZCB7XG4gICAgICAgIGxldCBjYXJkID0gdGhpcy4kKCcjY3JlZGl0Q2FyZHMnKS5jaGlsZHJlbihcIm9wdGlvbjpzZWxlY3RlZFwiKS52YWwoKTtcbiAgICAgICAgaWYgKHNlbGVjdG9yLnRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5jcmVkaXRDYXJkTGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50WydjYXJkTWFza2VkJ10gPT0gY2FyZCkge1xuICAgICAgICAgICAgICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkSW5Vc2VcIikpLnZhbHVlID0gY2FyZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV4cCA9IGVsZW1lbnRbJ21vbnRoJ10gKyBcIi9cIiArIGVsZW1lbnRbJ3llYXInXTtcbiAgICAgICAgICAgICAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwaXJhdGlvblwiKSkudmFsdWUgPSBleHA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKCcjY3JlZGl0Q2FyZHMnKS52YWwoY2FyZCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHdyaXRlQ0MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRJblVzZVwiKTtcbiAgICAgICAgaWYgKGNhcmQgPT0gXCJhZGRDQ1wiKSB7XG4gICAgICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkSW5Vc2VcIikpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGlyYXRpb25cIikpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVuZG9yXCIpLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgd3JpdGVDQy5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHdyaXRlQ0Muc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVRvdGFsKHNlbGVjdG9yPzogSlF1ZXJ5RXZlbnRPYmplY3QpOiB2b2lkIHtcbiAgICAgICAgbGV0IG1hcmtVcEZlZSA9IDA7XG4gICAgICAgIGxldCBhbXQgPSAwO1xuICAgICAgICBsZXQgYWRkaXRpb25hbCA9IDA7XG4gICAgICAgIGxldCB0a3RGZWUgPSAwO1xuICAgICAgICBpZiAoKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFya1VwRmVlXCIpKS52YWx1ZSkge1xuICAgICAgICAgICAgbWFya1VwRmVlID0gcGFyc2VGbG9hdCgoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJrVXBGZWVcIikpLnZhbHVlKTtcbiAgICAgICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmtVcEZlZVwiKSkudmFsdWUgPSBtYXJrVXBGZWUudG9GaXhlZCgyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW10XCIpKS52YWx1ZSkge1xuICAgICAgICAgICAgYW10ID0gcGFyc2VGbG9hdCgoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbXRcIikpLnZhbHVlKTtcbiAgICAgICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFtdFwiKSkudmFsdWUgPSBhbXQudG9GaXhlZCgyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkaXRpb25hbFwiKSkudmFsdWUpIHtcbiAgICAgICAgICAgIGFkZGl0aW9uYWwgPSBwYXJzZUZsb2F0KCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZGl0aW9uYWxcIikpLnZhbHVlKTtcbiAgICAgICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZGl0aW9uYWxcIikpLnZhbHVlID0gYWRkaXRpb25hbC50b0ZpeGVkKDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0a3RGZWVcIikpLnZhbHVlKSB7XG4gICAgICAgICAgICB0a3RGZWUgPSBwYXJzZUZsb2F0KCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRrdEZlZVwiKSkudmFsdWUpO1xuICAgICAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGt0RmVlXCIpKS52YWx1ZSA9IHRrdEZlZS50b0ZpeGVkKDIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0b3RhbCA9IG1hcmtVcEZlZSArIGFtdCArIGFkZGl0aW9uYWwgKyB0a3RGZWU7XG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsXCIpKS52YWx1ZSA9IHRvdGFsLnRvRml4ZWQoMikgKyBcIiBHQlBcIjtcbiAgICB9XG5cbiAgICBhc3luYyBzZWxmTmV4dEFjdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuSW5wdXRWYWxpZGF0b3IoKSkge1xuICAgICAgICAgICAgdGhpcy5leGVjdXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGV4ZWN1dGUoKSB7XG4gICAgICAgIGxldCBtYXJrVXBGZWUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtVcEZlZScpKS52YWx1ZTtcbiAgICAgICAgbGV0IGNjTmFtZSA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpKS52YWx1ZTtcbiAgICAgICAgbGV0IGZlZSA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGt0RmVlJykpLnZhbHVlO1xuICAgICAgICBsZXQgcHFBbXQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FtdCcpKS52YWx1ZTtcbiAgICAgICAgbGV0IGFkZGl0aW9uYWwgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGl0aW9uYWwnKSkudmFsdWU7XG4gICAgICAgIGxldCB0b3RhbCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWwnKSkudmFsdWU7XG4gICAgICAgIGxldCBmdWxsQ2FyZCA9IHRoaXMuJCgnI2NyZWRpdENhcmRzJykuY2hpbGRyZW4oXCJvcHRpb246c2VsZWN0ZWRcIikudmFsKCk7XG4gICAgICAgIGxldCBvcHRpb24gPSB0aGlzLiQoJyN0ZXN0JykuY2hpbGRyZW4oXCJvcHRpb246c2VsZWN0ZWRcIikudmFsKCk7XG4gICAgICAgIGxldCBsYXN0NCA9IFwiXCI7XG4gICAgICAgIGxldCBjb2RlO1xuICAgICAgICBpZiAoZnVsbENhcmQgPT0gXCJhZGRDQ1wiKSB7XG4gICAgICAgICAgICBjb2RlID0gdGhpcy4kKCcjdmVuZG9yJykuY2hpbGRyZW4oXCJvcHRpb246c2VsZWN0ZWRcIikudmFsKCk7XG4gICAgICAgICAgICBmdWxsQ2FyZCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRJblVzZVwiKSkudmFsdWU7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gZnVsbENhcmQubGVuZ3RoIC0gNDsgaSA8IGZ1bGxDYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGFzdDQgPSBsYXN0NCArIGZ1bGxDYXJkW2ldLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFkZENDIHNlbGVjdGVkXCIsIGZ1bGxDYXJkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjYXJkU2VsZWN0ZWQgPSB0aGlzLmNyZWRpdENhcmRMaXN0LmZpbHRlcih4ID0+IHhbJ2NhcmRNYXNrZWQnXSA9PSBmdWxsQ2FyZCk7XG4gICAgICAgICAgICBsYXN0NCA9IGNhcmRTZWxlY3RlZFswXVsnbGFzdDQnXTtcbiAgICAgICAgICAgIGNvZGUgPSBjYXJkU2VsZWN0ZWRbMF1bJ2NvZGUnXTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2FyZE1hc2tlZCBzZWxlY3RlZFwiLCBjYXJkU2VsZWN0ZWQpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZWZJZCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVmSWQnKSkudmFsdWU7XG4gICAgICAgIGxldCBleHAgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cGlyYXRpb24nKSkudmFsdWU7XG4gICAgICAgIGxldCBleHBNb250aCA9IGV4cC5zcGxpdChcIi9cIilbMF07XG4gICAgICAgIGxldCBleHBZZWFyID0gZXhwLnNwbGl0KFwiL1wiKVsxXTtcbiAgICAgICAgLy8gbGV0IHh4eHh4eHh4eHggID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd4eHh4eHh4eHh4eHgnKSkudmFsdWU7XG4gICAgICAgIC8vIGxldCB4eHh4eHh4eHh4ICA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneHh4eHh4eHh4eHh4JykpLnZhbHVlO1xuXG4gICAgICAgIGxldCBwYWNrOiB7fSA9IHtcbiAgICAgICAgICAgIFwibWFya1VwRmVlXCI6IG1hcmtVcEZlZSxcbiAgICAgICAgICAgIFwiZmVlXCI6IGZlZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiBjY05hbWUsXG4gICAgICAgICAgICBcInBxQW10XCI6IHBxQW10LFxuICAgICAgICAgICAgXCJhZGRpdGlvbmFsXCI6IGFkZGl0aW9uYWwsXG4gICAgICAgICAgICBcInRvdGFsXCI6IHRvdGFsLFxuICAgICAgICAgICAgXCJmdWxsQ2FyZFwiOiBmdWxsQ2FyZCxcbiAgICAgICAgICAgIFwiZXhwTW9udGhcIjogZXhwTW9udGgsXG4gICAgICAgICAgICBcImV4cFllYXJcIjogZXhwWWVhcixcbiAgICAgICAgICAgIFwiY2FyZDRcIjogbGFzdDQsXG4gICAgICAgICAgICBcIm9wdGlvblwiOiBvcHRpb24sXG4gICAgICAgICAgICBcImNjQ29kZVwiOiBjb2RlLFxuICAgICAgICAgICAgXCJyZWZJZFwiOiByZWZJZCxcbiAgICAgICAgICAgIFwiVXBkYXRlUm1rXCI6IHRoaXMudXBkYXRlUm1rc1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFja1wiLCBwYWNrKTtcbiAgICAgICAgY29uc3QgcmVzdE1vZGFsT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ29uZmlybWF0aW9uJyxcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2FwcC5jb21tb24udmlld3MuQnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2FwdGlvbjogJ0NhbmNlbCcsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbk5hbWU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdhcHAuY29tbW9uLnZpZXdzLkJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGNhcHRpb246ICdCYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uTmFtZTogJ2JhY2snLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdhcHAuY29tbW9uLnZpZXdzLkJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGNhcHRpb246IFwiQWRkIFJlbWFya3NcIixcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uTmFtZTogJ25leHQnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG5cbiAgICAgICAgZ2V0U2VydmljZShMYXllclNlcnZpY2UpLnNob3dJbk1vZGFsKFxuICAgICAgICAgICAgbmV3IENoZWNrVG90YWwoeyBtb2RlbDogbmV3IFJlc3RNb2RlbCgpIH0sIHBhY2spLFxuICAgICAgICAgICAgcmVzdE1vZGFsT3B0aW9ucyxcbiAgICAgICAgICAgIHsgZGlzcGxheTogJ2FyZWFWaWV3JyB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIElucHV0VmFsaWRhdG9yKCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgYWxsT2sgPSB0cnVlO1xuICAgICAgICBsZXQgdG90YWwgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b3RhbFwiKSkudmFsdWU7XG4gICAgICAgIGlmIChwYXJzZUZsb2F0KHRvdGFsLnNwbGl0KFwiR0JQXCIpWzBdKSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGRPayhcInRvdGFsXCIpO1xuICAgICAgICAgICAgbGV0IHJlcXVpcmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3JlcXVpcmVkXScpXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcXVpcmVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gcmVxdWlyZWRbaV0uaWQ7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJJbnB1dFZhbGlkYXRvcjpcIiArIGlkKTtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVSZWFkID0gKDxIVE1MU2VsZWN0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChpZCA9PSBcImNyZWRpdENhcmRzXCIgJiYgdmFsdWVSZWFkID09IFwiY2NOb1NlbGVjdGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck9uRmllbGQoaWQsIFwiRmllbGQgY2Fubm90IGJlIGVtcHR5IG9yIGJsYW5rXCIpO1xuICAgICAgICAgICAgICAgICAgICBhbGxPayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlkID09IFwiY3JlZGl0Q2FyZHNcIiAmJiB2YWx1ZVJlYWQgPT0gXCJhZGRDQ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1c1tcImNyZWRpdENhcmRzXCJdID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRPayhcImNyZWRpdENhcmRzXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgoPEhUTUxTZWxlY3RFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVuZG9yXCIpKS52YWx1ZSA9PSBcIm5vVmVuZG9yXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzWyd2ZW5kb3InXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yT25GaWVsZChcInZlbmRvclwiLCBcIlNlbGVjdCBvbmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxPayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkT2soXCJ2ZW5kb3JcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGVkQ2FyZCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRJblVzZVwiKSkudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlZENhcmQubGVuZ3RoID09IDE2ICYmIHRoaXMuc3RhdHVzWydjYXJkSW5Vc2UnXSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkT2soJ2NhcmRJblVzZScpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVkQ2FyZC5sZW5ndGggPiAxNikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck9uRmllbGQoXCJjYXJkSW5Vc2VcIiwgXCJNYXhpbXVtIDE2IG51bWJlcnNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxPayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZWRDYXJkLmxlbmd0aCA8PSAxNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNbJ2NhcmRJblVzZSddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JPbkZpZWxkKFwiY2FyZEluVXNlXCIsIFwiTWluaW11bSAxNiBudW1iZXJzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsT2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpZCA9PSBcIm5hbWVcIikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIikpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW50cm8hXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yT25GaWVsZChcIm5hbWVcIiwgXCJOYW1lIGlzIG1hbmRhdG9yeVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbE9rID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuYW1lICYmIHRoaXMuc3RhdHVzW1wibmFtZVwiXSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkT2soXCJjcmVkaXRDYXJkc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaWQgPT0gXCJuYW1lXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yT25GaWVsZChcIm5hbWVcIiwgXCJOYW1lIGlzIG1hbmRhdG9yeVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbE9rID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuYW1lICYmIHRoaXMuc3RhdHVzW1wibmFtZVwiXSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkT2soXCJjcmVkaXRDYXJkc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaWQgPT0gXCJleHBpcmF0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV4cGlyYXRpb24gPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBpcmF0aW9uXCIpKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleHBpcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yT25GaWVsZChcImV4cGlyYXRpb25cIiwgXCJFeHBpcmF0aW9uIGlzIG1hbmRhdG9yeVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbE9rID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLnN0YXR1c1tcImV4cGlyYXRpb25cIl0gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZmllbGRPayhcImV4cGlyYXRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeWVhcjQgPSBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aGlzTW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHllYXIyID0gcGFyc2VGbG9hdCh5ZWFyNFsyXSArIHllYXI0WzNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBleHAgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBpcmF0aW9uXCIpKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBleHBNb250aCA9IHBhcnNlRmxvYXQoZXhwLnNwbGl0KFwiL1wiKVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXhwWWVhciA9IHBhcnNlRmxvYXQoZXhwLnNwbGl0KFwiL1wiKVsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImV4cE1vbnRoXCIsIGV4cE1vbnRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpc01vbnRoXCIsIHRoaXNNb250aCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihleHBNb250aCkgfHwgaXNOYU4oZXhwWWVhcikgfHwgZXhwTW9udGggPiAxMiB8fCBleHBNb250aCA8IDEgfHwgZXhwWWVhciA8IHllYXIyIHx8IChleHBZZWFyID09IHllYXIyICYmIGV4cE1vbnRoIDwgdGhpc01vbnRoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JPbkZpZWxkKFwiZXhwaXJhdGlvblwiLCBcIk1NL1lZIGxpa2U6IDA1LzI3XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsT2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZE9rKFwiZXhwaXJhdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JPbkZpZWxkKFwidG90YWxcIiwgXCJNdXN0IGJlIGdyZWF0ZXIgdGhhbiAwXCIpXG4gICAgICAgICAgICBhbGxPayA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgKHRoaXMuc3RhdHVzW1wiYWRkQ0NcIl0gPT0gdHJ1ZSkge1xuICAgICAgICAvLyAgICAgKDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWRpdENhcmRzRGl2XCIpKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGFzLWVycm9yXCIpOyBcbiAgICAgICAgLy8gICAgICg8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVkaXRDYXJkc0Vycm9yXCIpKS5pbm5lclRleHQgPSBcIlwiO1xuICAgICAgICAvLyAgICAgdGhpcy5zdGF0dXNbXCJhZGRDQ1wiXSA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgaWQgPSBcImNhcmRJblVzZVwiO1xuICAgICAgICAvLyAgICAgaWYgKCEoPEhUTUxTZWxlY3RFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkudmFsdWUpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmVycm9yT25GaWVsZChpZCwgXCJUeXBlIGNyZWRpdCBjYXJkIG51bWJlclwiKTtcbiAgICAgICAgLy8gICAgICAgICBhbGxPayA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgdGhpcy5lcnJvck9uRmllbGQoaWQsIFwiRmllbGQgY2Fubm90IGJlIGVtcHR5IG9yIGJsYW5rXCIpO1xuICAgICAgICAvLyAgICAgYWxsT2sgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgICB0aGlzLmZpZWxkT2soaWQpO1xuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiBhbGxPaztcbiAgICB9XG5cbiAgICBwcml2YXRlIGVycm9yT25GaWVsZChpZDogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgKDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCArIFwiRXJyb3JcIikpLmlubmVyVGV4dCA9IG1lc3NhZ2U7XG4gICAgICAgICg8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQgKyBcIkRpdlwiKSkuY2xhc3NMaXN0LmFkZChcImhhcy1lcnJvclwiKTtcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkuZm9jdXMoKTtcbiAgICAgICAgdGhpcy5zdGF0dXNbaWRdID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpZWxkT2soaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zdGF0dXNbaWRdID09IHRydWUpIHtcbiAgICAgICAgICAgICg8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQgKyBcIkRpdlwiKSkuY2xhc3NMaXN0LnJlbW92ZShcImhhcy1lcnJvclwiKTtcbiAgICAgICAgICAgICg8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQgKyBcIkVycm9yXCIpKS5pbm5lclRleHQgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXNbaWRdID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= 