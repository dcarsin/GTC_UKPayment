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
        "ContextChangeLLSRQ": "        \n<ContextChangeRQ Version=\"2.0.3\"\nxmlns=\"http://webservices.sabre.com/sabreXML/2011/10\">\n<ChangeAAA PseudoCityCode=\"KA0J\"/>\n</ContextChangeRQ>",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb2RlL18udHMiLCJzcmMvY29kZS9jb21tb24vSVV0aWxpdGFyaW8udHMiLCJzcmMvY29kZS9jb21tb24vVXRpbGl0YXJpby50cyIsInNyYy9jb2RlL2NvbW1vbi9YbWxQYXlMb2Fkcy50cyIsInNyYy9jb2RlL0NvbnRleHQudHMiLCJzcmMvY29kZS9jb250cm9sbGVycy9JU2FicmVDb250cm9sbGVyLnRzIiwic3JjL2NvZGUvY29udHJvbGxlcnMvU2FicmVDb250cm9sbGVyLnRzIiwic3JjL2NvZGUvaW5kZXgudHMiLCJzcmMvY29kZS9NYWluLnRzIiwiQzovVXNlcnMvZGNhcnNpbi9lY2xpcHNlLXdvcmtzcGFjZS9HVENfVUtQYXltZW50L3dlYi1zcmMvY29tLWludGVybm92YS1ndGNwYXltZW50LXdlYi1tb2R1bGUvYnVpbGQvcHJvZC9tZXRhL2Nqcy9tb2RlbC9BZGRSZW1hcmtzLmpzIiwic3JjL2NvZGUvbW9kZWwvY2NEYXRhLnRzIiwic3JjL2NvZGUvbW9kZWwvcHFGYXJlLnRzIiwic3JjL2NvZGUvbW9kZWwvcmVtYXJrLnRzIiwic3JjL2NvZGUvbW9kZWwvUmVzdE1vZGVsLnRzIiwic3JjL2NvZGUvc2VydmljZXMvRXh0ZXJuYWxTZXJ2aWNlLnRzIiwic3JjL2NvZGUvc2VydmljZXMvSUV4dGVybmFsU2VydmljZS50cyIsInNyYy9jb2RlL3NlcnZpY2VzL0lTYWJyZVNlcnZpY2UudHMiLCJzcmMvY29kZS9zZXJ2aWNlcy9TYWJyZVNlcnZpY2UudHMiLCJzcmMvY29kZS92aWV3cy9DaGVja1RvdGFsLnRzIiwic3JjL2NvZGUvdmlld3MvR3RjX1BheW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlDQUF5Qzs7Ozs7O0FDQXpDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkEsbUZBQWtGO0FBQ2xGLCtEQUE4RDtBQUM5RCw2Q0FBNEM7QUFDNUMsc0NBQXFEO0FBRXJEO0lBQWdDLDhCQUFlO0lB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QUFpRCxDQUFDOztPQUMvQyxXQUFXLENBK2F2QjtJQUFELGtCQUFDO0NBL2FELEFBK2FDLENBL2FnQywyQkFBWSxHQSthNUM7QUEvYVksa0NBQVciLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY29tLWludGVybm92YS1ndGNwYXltZW50LXdlYi1tb2R1bGUgKi8iLCJleHBvcnQgaW50ZXJmYWNlIElVdGlsaXRhcmlvIHtcclxuICAgIEdldFZhbHVlKFBsYWluVGV4dCA6IHN0cmluZywgcmVnZXggOiBSZWdFeHAsIHBvczogbnVtYmVyKSA6IHN0cmluZztcclxuICAgIEdldFZhbHVlcyhQbGFpblRleHQgOiBzdHJpbmcsIHJlZ2V4IDogUmVnRXhwLCBwb3M6IG51bWJlcik6IEFycmF5PHN0cmluZz47XHJcbiAgICBJc01hdGNoKFBsYWluVGV4dCA6IHN0cmluZywgUGF0dGVybiA6IHN0cmluZykgOiBib29sZWFuO1xyXG4gICAgR2V0WFBhdGhSZXN1bHQocmVzcG9uc2U6c3RyaW5nLCBleHByZXNzaW9uOnN0cmluZywgeHBhdGhOc1Jlc29sdmVyOmFueSwgdHlwZTpudW1iZXIpOiBYUGF0aFJlc3VsdDtcclxuICAgIFJlbW92ZU5hbWVTcGFjZShyZXF1ZXN0OnN0cmluZykgOiBzdHJpbmc7XHJcbiAgICBHZXRQYXlMb2FkKGFjdGlvbiA6IHN0cmluZykgOiBQcm9taXNlPHN0cmluZz47XHJcbiAgICBTdHJpbmdUb1htbChzdHJYTUwgOiBzdHJpbmcpOiBEb2N1bWVudDtcclxuICAgIERvY3VtZW50VG9TdHJpbmcoZG9jdW1lbnQ6RG9jdW1lbnQpOiBzdHJpbmc7XHJcbn0iLCJpbXBvcnQgeyBJVXRpbGl0YXJpbyB9IGZyb20gXCIuL0lVdGlsaXRhcmlvXCI7XHJcbmltcG9ydCB7IEFic3RyYWN0U2VydmljZSB9IGZyb20gXCJzYWJyZS1uZ3YtYXBwL2FwcC9zZXJ2aWNlcy9pbXBsL0Fic3RyYWN0U2VydmljZVwiO1xyXG5pbXBvcnQgeyBFeHRlcm5hbFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvRXh0ZXJuYWxTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFhtbFBheUxvYWRzIH0gZnJvbSBcIi4vWG1sUGF5TG9hZHNcIjtcclxuaW1wb3J0IHsgZ2V0U2VydmljZSwgY2YsIGNvbnRleHQgfSBmcm9tIFwiLi4vQ29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFV0aWxpdGFyaW8gZXh0ZW5kcyBBYnN0cmFjdFNlcnZpY2UgaW1wbGVtZW50cyBJVXRpbGl0YXJpbyB7XHJcbiAgICBzdGF0aWMgU0VSVklDRV9OQU1FOiBzdHJpbmcgPSBcImNvbS1pbnRlcm5vdmEtZ3RjcGF5bWVudC13ZWItbW9kdWxlLVV0aWxpdGFyaW9cIjtcclxuXHJcbiAgICBHZXRQYXlMb2FkKGFjdGlvbjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsOiBzdHJpbmcgPSBYbWxQYXlMb2Fkcy5pdGVtc1thY3Rpb25dO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlBheWxvYWQgXCIrYWN0aW9uLFwiOlwiLHBsKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHBsICYmIHBsLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShwbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIEdldFhQYXRoUmVzdWx0KHJlc3BvbnNlOiBzdHJpbmcsIGV4cHJlc3Npb246IHN0cmluZywgeHBhdGhOc1Jlc29sdmVyOiBhbnksIHR5cGU6IG51bWJlcik6IFhQYXRoUmVzdWx0IHtcclxuICAgICAgICB2YXIgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhyZXNwb25zZSwgJ3RleHQveG1sJyk7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGRvYy5ldmFsdWF0ZShleHByZXNzaW9uLCBkb2MsIHhwYXRoTnNSZXNvbHZlciwgdHlwZSwgbnVsbCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBJc01hdGNoKFBsYWluVGV4dDogc3RyaW5nLCBQYXR0ZXJuOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgcmcgPSBuZXcgUmVnRXhwKFBhdHRlcm4pO1xyXG4gICAgICAgIHJldHVybiByZy50ZXN0KFBsYWluVGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0VmFsdWUoUGxhaW5UZXh0OiBzdHJpbmcsIHJlZ2V4OiBSZWdFeHAsIHBvczogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmV0dXJuVmFsdWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgbGV0IG07XHJcblxyXG4gICAgICAgIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWMoUGxhaW5UZXh0KSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKG0uaW5kZXggPT09IHJlZ2V4Lmxhc3RJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgcmVnZXgubGFzdEluZGV4Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbS5mb3JFYWNoKChtYXRjaCwgZ3JvdXBJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdyb3VwSW5kZXggPT09IHBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gbWF0Y2g7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgR2V0VmFsdWVzKFBsYWluVGV4dDogc3RyaW5nLCByZWdleDogUmVnRXhwLCBwb3M6IG51bWJlcik6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIGxldCB2YWx1ZXMgPSBbXTtcclxuICAgICAgICBsZXQgbTtcclxuXHJcbiAgICAgICAgd2hpbGUgKChtID0gcmVnZXguZXhlYyhQbGFpblRleHQpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICByZWdleC5sYXN0SW5kZXgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtLmZvckVhY2goKG1hdGNoLCBncm91cEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JvdXBJbmRleCA9PT0gcG9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnB1c2gobWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcclxuICAgIH1cclxuXHJcbiAgICBSZW1vdmVOYW1lU3BhY2UocmVxdWVzdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXF1ZXN0ID0gcmVxdWVzdC5yZXBsYWNlKC94bWxucz1cXFwiKC4qPylcXFwiL2csICcnKTtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdDtcclxuICAgIH1cclxuXHJcbiAgICBHZXRQYXlMb2FkSW5mbyhhY3Rpb246IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBnZXRTZXJ2aWNlKEV4dGVybmFsU2VydmljZSkuc2VuZFJlcXVlc3QoJ0dFVCcsIGFjdGlvbilcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vyci5zdGF0dXNUZXh0OicsIGVyci5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgU3RyaW5nVG9YbWwoc3RyWE1MOiBzdHJpbmcpOiBEb2N1bWVudCB7XHJcbiAgICAgICAgdmFyIGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoc3RyWE1MLCBcInRleHQveG1sXCIpO1xyXG4gICAgICAgIHJldHVybiBkb2M7XHJcbiAgICB9XHJcblxyXG4gICAgRG9jdW1lbnRUb1N0cmluZyhkb2N1bWVudDogRG9jdW1lbnQpOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciByZXR1cm5WYWx1ZSA9IG5ldyBYTUxTZXJpYWxpemVyKCkuc2VyaWFsaXplVG9TdHJpbmcoZG9jdW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBjbGFzcyBYbWxQYXlMb2FkcyB7XHJcbiAgcHVibGljIHN0YXRpYyBpdGVtcyA9IHtcclxuICAgIFwiQWRkQWNjb3VudGluZ0xpbmVMTFNSUVwiOiBgPEFkZEFjY291bnRpbmdMaW5lUlEgVGltZVN0YW1wPVwiMjAxNS0wNC0wOVQxNDozMDowMC0wNjowMFwiIFZlcnNpb249XCIyLjAuMFwiPlxyXG4gIDxBaXJBY2NvdW50aW5nTGluZXM+XHJcbiAgICA8SW50ZXJhY3RpdmVFbGVjdHJvbmljVGlja2V0PlxyXG4gICAgICA8Rk9QX09uZSBUeXBlPVwiQ0tcIi8+XHJcbiAgICAgIDxJdGluVG90YWxGYXJlPlxyXG4gICAgICAgIDxCYXNlRmFyZSBBbW91bnQ9XCIwLjAwXCIvPlxyXG4gICAgICAgIDxDb21taXNzaW9uIEFtb3VudD1cIjAuMDBcIi8+XHJcbiAgICAgICAgPFRheGVzPlxyXG4gICAgICAgICAgPFRheCBBbW91bnQ9XCIwLjAwXCIvPlxyXG4gICAgICAgIDwvVGF4ZXM+XHJcbiAgICAgIDwvSXRpblRvdGFsRmFyZT5cclxuICAgICAgPFBlcnNvbk5hbWUgTmFtZU51bWJlcj1cIjEuMVwiPlxyXG4gICAgICAgIDxHaXZlbk5hbWU+PC9HaXZlbk5hbWU+XHJcbiAgICAgICAgPFN1cm5hbWU+PC9TdXJuYW1lPlxyXG4gICAgICA8L1BlcnNvbk5hbWU+XHJcbiAgICAgIDxUaWNrZXRpbmcgZVRpY2tldE51bWJlcj1cIjI4MjgyODI4MjgwXCIgTnVtRG9jcz1cIjFcIiBUYXJpZmY9XCJEXCIvPlxyXG4gICAgICA8VHlwZSBJbmZvPVwiT05FXCIvPlxyXG4gICAgICA8VmVuZG9yUHJlZnM+XHJcbiAgICAgICAgPEFpcmxpbmUgQ29kZT1cIkRMXCIvPlxyXG4gICAgICA8L1ZlbmRvclByZWZzPlxyXG4gICAgPC9JbnRlcmFjdGl2ZUVsZWN0cm9uaWNUaWNrZXQ+XHJcbiAgPC9BaXJBY2NvdW50aW5nTGluZXM+XHJcbjwvQWRkQWNjb3VudGluZ0xpbmVSUT5gLFxyXG5cclxuICAgIFwiVXBkYXRlUmVzZXJ2YXRpb25SUUNhclwiOiBgPFVwZGF0ZVJlc2VydmF0aW9uUlEgeG1sbnM9XCJodHRwOi8vd2Vic2VydmljZXMuc2FicmUuY29tL3BucmJ1aWxkZXIvdjFfMTlcIlxyXG54bWxuczpuczI9XCJodHRwOi8vc2VydmljZXMuc2FicmUuY29tL3Jlcy9vci92MV8xNFwiIFZlcnNpb249XCIxLjE5LjBcIj5cclxuPFJlc2VydmF0aW9uVXBkYXRlTGlzdD5cclxuICA8UmVzZXJ2YXRpb25VcGRhdGVJdGVtPlxyXG4gICAgPFByb2R1Y3RVcGRhdGUgb3A9XCJDXCI+XHJcbiAgICAgIDxQcm9kdWN0PlxyXG4gICAgICAgIDxuczI6UHJvZHVjdERldGFpbHMgZW5kRGF0ZVRpbWU9XCJcIiBzdGFydERhdGVUaW1lPVwiXCIgc3RhcnRQb2ludD1cIlwiIHN0YXR1c0NvZGU9XCJHS1wiIHZlbmRvckNvZGU9XCJcIj5cclxuICAgICAgICAgIDxuczI6UHJvZHVjdE5hbWUgdHlwZT1cIkNBUlwiLz5cclxuICAgICAgICAgIDxuczI6VmVoaWNsZT5cclxuICAgICAgICAgICAgPG5zMjpDb25maXJtYXRpb25OdW1iZXI+PC9uczI6Q29uZmlybWF0aW9uTnVtYmVyPlxyXG4gICAgICAgICAgICA8bnMyOlZlaGljbGVSZW50YWxDb3JlPlxyXG4gICAgICAgICAgICAgIDxuczI6RHJvcE9mZkxvY2F0aW9uRGV0YWlscyBsb2NhdGlvbkNvZGU9XCJcIi8+XHJcbiAgICAgICAgICAgICAgPG5zMjpMb2NhdGlvbkRldGFpbHMgbG9jYXRpb25Db2RlPVwiXCIvPlxyXG4gICAgICAgICAgICA8L25zMjpWZWhpY2xlUmVudGFsQ29yZT5cclxuICAgICAgICAgICAgPG5zMjpWZWhpY2xlVmVuZG9yQXZhaWw+XHJcbiAgICAgICAgICAgICAgPG5zMjpWZWhpY2xlUmVzQ29yZT5cclxuICAgICAgICAgICAgICAgIDxuczI6UHJpY2VkRXF1aXBtZW50IGVxdWlwbWVudFR5cGU9XCJcIiBxdWFudGl0eT1cIjFcIi8+XHJcbiAgICAgICAgICAgICAgICA8bnMyOlJlbnRhbFJhdGU+XHJcbiAgICAgICAgICAgICAgICAgIDxuczI6QmlsbGluZyByZWZlcmVuY2U9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxuczI6Q2xpZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxuczI6SUQ+PC9uczI6SUQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvbnMyOkNsaWVudD5cclxuICAgICAgICAgICAgICAgICAgPG5zMjpTZXJ2aWNlSW5mb3JtYXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bnMyOlRleHQ+PC9uczI6VGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9uczI6U2VydmljZUluZm9ybWF0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9uczI6UmVudGFsUmF0ZT5cclxuICAgICAgICAgICAgICAgIDxuczI6Q2hhcmdlIGRyb3BPZmZDaGFyZ2U9XCJcIiB0eXBlT2ZHdWFyYW50ZWU9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvbnMyOlZlaGljbGVSZXNDb3JlPlxyXG4gICAgICAgICAgICA8L25zMjpWZWhpY2xlVmVuZG9yQXZhaWw+XHJcbiAgICAgICAgICAgIDxuczI6UHJpY2luZ0VsZW1lbnRzPlxyXG4gICAgICAgICAgICA8L25zMjpQcmljaW5nRWxlbWVudHM+XHJcbiAgICAgICAgICA8L25zMjpWZWhpY2xlPlxyXG4gICAgICAgIDwvbnMyOlByb2R1Y3REZXRhaWxzPlxyXG4gICAgICA8L1Byb2R1Y3Q+XHJcbiAgICA8L1Byb2R1Y3RVcGRhdGU+XHJcbiAgPC9SZXNlcnZhdGlvblVwZGF0ZUl0ZW0+XHJcbjwvUmVzZXJ2YXRpb25VcGRhdGVMaXN0PlxyXG48L1VwZGF0ZVJlc2VydmF0aW9uUlE+YCxcclxuXHJcblwiVXBkYXRlUmVzZXJ2YXRpb25SUXJta1wiOiBgPFVwZGF0ZVJlc2VydmF0aW9uUlEgeG1sbnM9XCJodHRwOi8vd2Vic2VydmljZXMuc2FicmUuY29tL3BucmJ1aWxkZXIvdjFfMTlcIiB4bWxuczpvcj1cImh0dHA6Ly9zZXJ2aWNlcy5zYWJyZS5jb20vcmVzL29yL3YxXzEyXCIgVmVyc2lvbj1cIjEuMTkuMFwiIEVjaG9Ub2tlbj1cIlJLL0VOVi9QWEdTU0RNTFQtNjA3MDNcIj5cclxuPFJlcXVlc3RUeXBlPlN0YXRlZnVsPC9SZXF1ZXN0VHlwZT5cclxuICA8UmVzZXJ2YXRpb25VcGRhdGVMaXN0PlxyXG4gICAgICA8UmVzZXJ2YXRpb25VcGRhdGVJdGVtPlxyXG4gICAgICA8L1Jlc2VydmF0aW9uVXBkYXRlSXRlbT5cclxuICA8L1Jlc2VydmF0aW9uVXBkYXRlTGlzdD5cclxuPC9VcGRhdGVSZXNlcnZhdGlvblJRPmAsXHJcblxyXG4gICAgXCJVcGRhdGVSZXNlcnZhdGlvblJRSG90ZWxcIjogYDxVcGRhdGVSZXNlcnZhdGlvblJRIHhtbG5zPVwiaHR0cDovL3dlYnNlcnZpY2VzLnNhYnJlLmNvbS9wbnJidWlsZGVyL3YxXzE5XCJcclxueG1sbnM6bnMyPVwiaHR0cDovL3NlcnZpY2VzLnNhYnJlLmNvbS9yZXMvb3IvdjFfMTRcIiBWZXJzaW9uPVwiMS4xOS4wXCI+XHJcbiAgPFJlc2VydmF0aW9uVXBkYXRlTGlzdD5cclxuICAgIDxSZXNlcnZhdGlvblVwZGF0ZUl0ZW0+XHJcbiAgICAgIDxQcm9kdWN0VXBkYXRlIG9wPVwiQ1wiPlxyXG4gICAgICAgIDxQcm9kdWN0PlxyXG4gICAgICAgICAgPG5zMjpQcm9kdWN0RGV0YWlscz5cclxuICAgICAgICAgICAgPG5zMjpQcm9kdWN0TmFtZSB0eXBlPVwiSEhUXCIvPlxyXG4gICAgICAgICAgICA8bnMyOkhvdGVsPlxyXG4gICAgICAgICAgICAgIDxuczI6UmVzZXJ2YXRpb24+XHJcbiAgICAgICAgICAgICAgICA8bnMyOkxpbmVTdGF0dXM+R0s8L25zMjpMaW5lU3RhdHVzPlxyXG4gICAgICAgICAgICAgICAgPG5zMjpTcGVjaWFsUHJlZnM+XHJcbiAgICAgICAgICAgICAgICA8L25zMjpTcGVjaWFsUHJlZnM+XHJcbiAgICAgICAgICAgICAgICA8bnMyOlJvb21UeXBlPlxyXG4gICAgICAgICAgICAgICAgICA8bnMyOlJvb21UeXBlQ29kZT48L25zMjpSb29tVHlwZUNvZGU+XHJcbiAgICAgICAgICAgICAgICAgIDxuczI6TnVtYmVyT2ZVbml0cz48L25zMjpOdW1iZXJPZlVuaXRzPlxyXG4gICAgICAgICAgICAgICAgPC9uczI6Um9vbVR5cGU+XHJcbiAgICAgICAgICAgICAgICA8bnMyOlJvb21SYXRlcz5cclxuICAgICAgICAgICAgICAgICAgPG5zMjpBbW91bnRCZWZvcmVUYXg+PC9uczI6QW1vdW50QmVmb3JlVGF4PlxyXG4gICAgICAgICAgICAgICAgICA8bnMyOkN1cnJlbmN5Q29kZT48L25zMjpDdXJyZW5jeUNvZGU+XHJcbiAgICAgICAgICAgICAgICA8L25zMjpSb29tUmF0ZXM+XHJcbiAgICAgICAgICAgICAgICA8bnMyOlRpbWVTcGFuU3RhcnQ+PC9uczI6VGltZVNwYW5TdGFydD5cclxuICAgICAgICAgICAgICAgIDxuczI6VGltZVNwYW5FbmQ+PC9uczI6VGltZVNwYW5FbmQ+XHJcbiAgICAgICAgICAgICAgICA8bnMyOkd1YXJhbnRlZT5cclxuICAgICAgICAgICAgICAgIDwvbnMyOkd1YXJhbnRlZT5cclxuICAgICAgICAgICAgICAgIDxuczI6Q2hhaW5Db2RlPjwvbnMyOkNoYWluQ29kZT5cclxuICAgICAgICAgICAgICAgIDxuczI6SG90ZWxDaXR5Q29kZT48L25zMjpIb3RlbENpdHlDb2RlPlxyXG4gICAgICAgICAgICAgICAgPG5zMjpIb3RlbE5hbWU+PC9uczI6SG90ZWxOYW1lPlxyXG4gICAgICAgICAgICAgIDwvbnMyOlJlc2VydmF0aW9uPlxyXG4gICAgICAgICAgICAgIDxuczI6QWRkaXRpb25hbEluZm9ybWF0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG5zMjpDb25maXJtYXRpb25OdW1iZXI+PC9uczI6Q29uZmlybWF0aW9uTnVtYmVyPlxyXG4gICAgICAgICAgICAgICAgPG5zMjpBZGRyZXNzPlxyXG4gICAgICAgICAgICAgICAgPC9uczI6QWRkcmVzcz5cclxuICAgICAgICAgICAgICAgIDxuczI6Q29udGFjdE51bWJlcnM+XHJcbiAgICAgICAgICAgICAgICAgIDxuczI6UGhvbmVOdW1iZXI+PC9uczI6UGhvbmVOdW1iZXI+XHJcbiAgICAgICAgICAgICAgICA8L25zMjpDb250YWN0TnVtYmVycz5cclxuICAgICAgICAgICAgICA8L25zMjpBZGRpdGlvbmFsSW5mb3JtYXRpb24+XHJcbiAgICAgICAgICAgIDwvbnMyOkhvdGVsPlxyXG4gICAgICAgICAgPC9uczI6UHJvZHVjdERldGFpbHM+XHJcbiAgICAgICAgPC9Qcm9kdWN0PlxyXG4gICAgICA8L1Byb2R1Y3RVcGRhdGU+XHJcbiAgICA8L1Jlc2VydmF0aW9uVXBkYXRlSXRlbT5cclxuICA8L1Jlc2VydmF0aW9uVXBkYXRlTGlzdD5cclxuPC9VcGRhdGVSZXNlcnZhdGlvblJRPmAsXHJcblxyXG4gICAgXCJBZGRSZW1hcmtMTFNSUVwiOiBgXHJcbjxBZGRSZW1hcmtSUSB4bWxucz1cImh0dHA6Ly93ZWJzZXJ2aWNlcy5zYWJyZS5jb20vc2FicmVYTUwvMjAxMS8xMFwiIHhtbG5zOnhzPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWFcIiB4bWxuczp4c2k9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVwiIFJldHVybkhvc3RDb21tYW5kPVwidHJ1ZVwiIFZlcnNpb249XCIyLjEuMVwiPlxyXG48UmVtYXJrSW5mbz5cclxuPC9SZW1hcmtJbmZvPlxyXG48L0FkZFJlbWFya1JRPmAsXHJcblxyXG4gICAgXCJDb250ZXh0Q2hhbmdlTExTUlFcIjogYCAgICAgICAgXHJcbjxDb250ZXh0Q2hhbmdlUlEgVmVyc2lvbj1cIjIuMC4zXCJcclxueG1sbnM9XCJodHRwOi8vd2Vic2VydmljZXMuc2FicmUuY29tL3NhYnJlWE1MLzIwMTEvMTBcIj5cclxuPENoYW5nZUFBQSBQc2V1ZG9DaXR5Q29kZT1cIktBMEpcIi8+XHJcbjwvQ29udGV4dENoYW5nZVJRPmAsXHJcblxyXG4gICAgXCJFUFNfRVhUX1Byb2ZpbGVSZWFkUlFcIjogYCAgICAgICAgXHJcbjxTYWJyZV9PVEFfUHJvZmlsZVJlYWRSUSB4bWxucz1cImh0dHA6Ly93d3cuc2FicmUuY29tL2Vwcy9zY2hlbWFzXCJcclxueG1sbnM6eHNpPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcIiB4c2k6c2NoZW1hTG9jYXRpb249XCJodHRwOi8vd3d3LnNhYnJlLmNvbS9lcHMvc2NoZW1hcyAgICAgICAgXHJcbiAgICAgICAgLi5cXHNjaGVtYXNXU0RMXFxTYWJyZV9PVEFfUHJvZmlsZVJlYWRSUS54c2RcIiBWZXJzaW9uPVwiNi41NVwiPlxyXG48UHJvZmlsZT5cclxuICA8VFBBX0lkZW50aXR5IFVuaXF1ZUlEPVwiMjI5MjgxMTk3XCIgQ2xpZW50Q29kZT1cIlROXCIgRG9tYWluSUQ9XCJLQTBKXCIgQ2xpZW50Q29udGV4dENvZGU9XCJNWVNcIj5cclxuICA8L1RQQV9JZGVudGl0eT5cclxuPC9Qcm9maWxlPlxyXG48L1NhYnJlX09UQV9Qcm9maWxlUmVhZFJRPmAsXHJcblxyXG4gICAgXCJlVGlja2V0Q291cG9uTExTUlFcIjogYFxyXG48ZVRpY2tldENvdXBvblJRIHhtbG5zPVwiaHR0cDovL3dlYnNlcnZpY2VzLnNhYnJlLmNvbS9zYWJyZVhNTC8yMDExLzEwXCIgVmVyc2lvbj1cIjIuMC4wXCIgUmV0dXJuSG9zdENvbW1hbmQ9XCJ0cnVlXCI+XHJcbjxUaWNrZXRpbmcgZVRpY2tldE51bWJlcj1cIjIyMDQ4OTgzNTE1ODBcIi8+XHJcbjwvZVRpY2tldENvdXBvblJRPmAsXHJcblxyXG4gICAgXCJHZXRSZXNlcnZhdGlvblJRX1dpdGhTZXNzaW9uXCI6IGBcclxuPFNPQVAtRU5WOkVudmVsb3BlIHhtbG5zOlNPQVAtRU5WPVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvc29hcC9lbnZlbG9wZS9cIlxyXG54bWxuczplYj1cImh0dHA6Ly93d3cuZWJ4bWwub3JnL25hbWVzcGFjZXMvbWVzc2FnZUhlYWRlclwiXHJcbnhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXHJcbnhtbG5zOnhzZD1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkvWE1MU2NoZW1hXCI+XHJcbjxTT0FQLUVOVjpIZWFkZXI+XHJcbiAgPGViOk1lc3NhZ2VIZWFkZXIgU09BUC1FTlY6bXVzdFVuZGVyc3RhbmQ9XCIxXCIgZWI6dmVyc2lvbj1cIjEuMFwiPlxyXG4gICAgPGViOkZyb20+XHJcbiAgICAgIDxlYjpQYXJ0eUlkIHR5cGU9XCJ1cm46eDEyLm9yZzpJTzU6MDFcIj45OTk5OTk8L2ViOlBhcnR5SWQ+XHJcbiAgICA8L2ViOkZyb20+XHJcbiAgICA8ZWI6VG8+XHJcbiAgICAgIDxlYjpQYXJ0eUlkIHR5cGU9XCJ1cm46eDEyLm9yZzpJTzU6MDFcIj4xMjMxMjM8L2ViOlBhcnR5SWQ+XHJcbiAgICA8L2ViOlRvPlxyXG4gICAgPGViOkNQQUlkPlU1MTE8L2ViOkNQQUlkPlxyXG4gICAgPGViOkNvbnZlcnNhdGlvbklkPndlYnNlcnZpY2VzLnN1cHBvcnRAc2FicmUuY29tPC9lYjpDb252ZXJzYXRpb25JZD5cclxuICAgIDxlYjpTZXJ2aWNlIGViOnR5cGU9XCJPVEFcIj5BaXI8L2ViOlNlcnZpY2U+XHJcbiAgICA8ZWI6QWN0aW9uPkdldFJlc2VydmF0aW9uUlE8L2ViOkFjdGlvbj5cclxuICAgIDxlYjpNZXNzYWdlRGF0YT5cclxuICAgICAgPGViOk1lc3NhZ2VJZD4xMDAwPC9lYjpNZXNzYWdlSWQ+XHJcbiAgICAgIDxlYjpUaW1lc3RhbXA+MjAxNi0xMi0zMFQwNToyNTozMno8L2ViOlRpbWVzdGFtcD5cclxuICAgIDwvZWI6TWVzc2FnZURhdGE+XHJcbiAgPC9lYjpNZXNzYWdlSGVhZGVyPlxyXG4gIDx3c3NlOlNlY3VyaXR5IHhtbG5zOndzc2U9XCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDAyLzEyL3NlY2V4dFwiXHJcbiAgICB4bWxuczp3c3U9XCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDAyLzEyL3V0aWxpdHlcIj5cclxuICAgIDx3c3NlOkJpbmFyeVNlY3VyaXR5VG9rZW4+PC93c3NlOkJpbmFyeVNlY3VyaXR5VG9rZW4+XHJcbiAgPC93c3NlOlNlY3VyaXR5PlxyXG48L1NPQVAtRU5WOkhlYWRlcj5cclxuPFNPQVAtRU5WOkJvZHk+XHJcbiAgPEdldFJlc2VydmF0aW9uUlEgVmVyc2lvbj1cIjEuMTkuMFwiXHJcbiAgICB4bWxucz1cImh0dHA6Ly93ZWJzZXJ2aWNlcy5zYWJyZS5jb20vcG5yYnVpbGRlci92MV8xOVwiPlxyXG4gICAgPExvY2F0b3I+PC9Mb2NhdG9yPlxyXG4gICAgPFJlcXVlc3RUeXBlPlN0YXRlZnVsPC9SZXF1ZXN0VHlwZT5cclxuICAgIDxSZXR1cm5PcHRpb25zIFByaWNlUXVvdGVTZXJ2aWNlVmVyc2lvbj1cIjMuMi4wXCI+XHJcbiAgICAgIDxTdWJqZWN0QXJlYXM+XHJcbiAgICAgICAgPFN1YmplY3RBcmVhPkZVTEw8L1N1YmplY3RBcmVhPlxyXG4gICAgICAgIDxTdWJqZWN0QXJlYT5QUklDRV9RVU9URTwvU3ViamVjdEFyZWE+XHJcbiAgICAgIDwvU3ViamVjdEFyZWFzPlxyXG4gICAgPC9SZXR1cm5PcHRpb25zPlxyXG4gIDwvR2V0UmVzZXJ2YXRpb25SUT5cclxuPC9TT0FQLUVOVjpCb2R5PlxyXG48L1NPQVAtRU5WOkVudmVsb3BlPmAsXHJcblxyXG4gICAgXCJHZXRSZXNlcnZhdGlvblJRXCI6IGBcclxuPEdldFJlc2VydmF0aW9uUlEgVmVyc2lvbj1cIjEuMTkuMFwiXHJcbnhtbG5zPVwiaHR0cDovL3dlYnNlcnZpY2VzLnNhYnJlLmNvbS9wbnJidWlsZGVyL3YxXzE5XCI+XHJcbjxMb2NhdG9yPk9TVUlDSTwvTG9jYXRvcj5cclxuPFJlcXVlc3RUeXBlPlN0YXRlZnVsPC9SZXF1ZXN0VHlwZT5cclxuPFJldHVybk9wdGlvbnM+XHJcbiAgPFZpZXdOYW1lPlZhRGVmYXVsdFdpdGhQcTwvVmlld05hbWU+XHJcbiAgPFJlc3BvbnNlRm9ybWF0PlNUTDwvUmVzcG9uc2VGb3JtYXQ+XHJcbjwvUmV0dXJuT3B0aW9ucz5cclxuPC9HZXRSZXNlcnZhdGlvblJRPmAsXHJcblxyXG4gICAgXCJJZ25vcmVUcmFuc2FjdGlvbkxMU1JRX1dpdGhTZXNzaW9uXCI6IGBcclxuPFNPQVAtRU5WOkVudmVsb3BlIHhtbG5zOlNPQVAtRU5WPVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvc29hcC9lbnZlbG9wZS9cIlxyXG54bWxuczplYj1cImh0dHA6Ly93d3cuZWJ4bWwub3JnL25hbWVzcGFjZXMvbWVzc2FnZUhlYWRlclwiXHJcbnhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXHJcbnhtbG5zOnhzZD1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkvWE1MU2NoZW1hXCI+XHJcbjxTT0FQLUVOVjpIZWFkZXI+XHJcbiAgPGViOk1lc3NhZ2VIZWFkZXIgU09BUC1FTlY6bXVzdFVuZGVyc3RhbmQ9XCIxXCIgZWI6dmVyc2lvbj1cIjEuMFwiPlxyXG4gICAgPGViOkZyb20+XHJcbiAgICAgIDxlYjpQYXJ0eUlkIHR5cGU9XCJ1cm46eDEyLm9yZzpJTzU6MDFcIj45OTk5OTk8L2ViOlBhcnR5SWQ+XHJcbiAgICA8L2ViOkZyb20+XHJcbiAgICA8ZWI6VG8+XHJcbiAgICAgIDxlYjpQYXJ0eUlkIHR5cGU9XCJ1cm46eDEyLm9yZzpJTzU6MDFcIj4xMjMxMjM8L2ViOlBhcnR5SWQ+XHJcbiAgICA8L2ViOlRvPlxyXG4gICAgPGViOkNQQUlkPktBMEo8L2ViOkNQQUlkPlxyXG4gICAgPGViOkNvbnZlcnNhdGlvbklkPndlYnNlcnZpY2VzLnN1cHBvcnRAc2FicmUuY29tPC9lYjpDb252ZXJzYXRpb25JZD5cclxuICAgIDxlYjpTZXJ2aWNlIGViOnR5cGU9XCJPVEFcIj5JZ25vcmVUcmFuc2FjdGlvbkxMU1JRPC9lYjpTZXJ2aWNlPlxyXG4gICAgPGViOkFjdGlvbj5JZ25vcmVUcmFuc2FjdGlvbkxMU1JRPC9lYjpBY3Rpb24+XHJcbiAgICA8ZWI6TWVzc2FnZURhdGE+XHJcbiAgICAgIDxlYjpNZXNzYWdlSWQ+MTAwMDwvZWI6TWVzc2FnZUlkPlxyXG4gICAgICA8ZWI6VGltZXN0YW1wPjIwMTYtMTItMzBUMDU6MjU6MzJ6PC9lYjpUaW1lc3RhbXA+XHJcbiAgICA8L2ViOk1lc3NhZ2VEYXRhPlxyXG4gIDwvZWI6TWVzc2FnZUhlYWRlcj5cclxuICA8d3NzZTpTZWN1cml0eSB4bWxuczp3c3NlPVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwMi8xMi9zZWNleHRcIlxyXG4gICAgeG1sbnM6d3N1PVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwMi8xMi91dGlsaXR5XCI+XHJcbiAgICA8d3NzZTpCaW5hcnlTZWN1cml0eVRva2VuPjwvd3NzZTpCaW5hcnlTZWN1cml0eVRva2VuPlxyXG4gIDwvd3NzZTpTZWN1cml0eT5cclxuPC9TT0FQLUVOVjpIZWFkZXI+XHJcbjxTT0FQLUVOVjpCb2R5PlxyXG4gIDxJZ25vcmVUcmFuc2FjdGlvblJRIFJldHVybkhvc3RDb21tYW5kPVwidHJ1ZVwiIFZlcnNpb249XCIyLjAuMFwiXHJcbiAgICB4bWxucz1cImh0dHA6Ly93ZWJzZXJ2aWNlcy5zYWJyZS5jb20vc2FicmVYTUwvMjAxMS8xMFwiLz5cclxuPC9TT0FQLUVOVjpCb2R5PlxyXG48L1NPQVAtRU5WOkVudmVsb3BlPmAsXHJcblxyXG4gICAgXCJQYXNzZW5nZXJEZXRhaWxzUlFfV2l0aFNlc3Npb25cIjogYFxyXG48U09BUC1FTlY6RW52ZWxvcGUgeG1sbnM6U09BUC1FTlY9XCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy9zb2FwL2VudmVsb3BlL1wiXHJcbnhtbG5zOmViPVwiaHR0cDovL3d3dy5lYnhtbC5vcmcvbmFtZXNwYWNlcy9tZXNzYWdlSGVhZGVyXCJcclxueG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcclxueG1sbnM6eHNkPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS9YTUxTY2hlbWFcIj5cclxuPFNPQVAtRU5WOkhlYWRlcj5cclxuICA8ZWI6TWVzc2FnZUhlYWRlciBTT0FQLUVOVjptdXN0VW5kZXJzdGFuZD1cIjFcIiBlYjp2ZXJzaW9uPVwiMS4wXCI+XHJcbiAgICA8ZWI6RnJvbT5cclxuICAgICAgPGViOlBhcnR5SWQgdHlwZT1cInVybjp4MTIub3JnOklPNTowMVwiPjk5OTk5OTwvZWI6UGFydHlJZD5cclxuICAgIDwvZWI6RnJvbT5cclxuICAgIDxlYjpUbz5cclxuICAgICAgPGViOlBhcnR5SWQgdHlwZT1cInVybjp4MTIub3JnOklPNTowMVwiPjEyMzEyMzwvZWI6UGFydHlJZD5cclxuICAgIDwvZWI6VG8+XHJcbiAgICA8ZWI6Q1BBSWQ+S0EwSjwvZWI6Q1BBSWQ+XHJcbiAgICA8ZWI6Q29udmVyc2F0aW9uSWQ+d2Vic2VydmljZXMuc3VwcG9ydEBzYWJyZS5jb208L2ViOkNvbnZlcnNhdGlvbklkPlxyXG4gICAgPGViOlNlcnZpY2UgZWI6dHlwZT1cIk9UQVwiPlBhc3NlbmdlckRldGFpbHNSUTwvZWI6U2VydmljZT5cclxuICAgIDxlYjpBY3Rpb24+UGFzc2VuZ2VyRGV0YWlsc1JRPC9lYjpBY3Rpb24+XHJcbiAgICA8ZWI6TWVzc2FnZURhdGE+XHJcbiAgICAgIDxlYjpNZXNzYWdlSWQ+MTAwMDwvZWI6TWVzc2FnZUlkPlxyXG4gICAgICA8ZWI6VGltZXN0YW1wPjIwMTYtMTItMzBUMDU6MjU6MzJ6PC9lYjpUaW1lc3RhbXA+XHJcbiAgICA8L2ViOk1lc3NhZ2VEYXRhPlxyXG4gIDwvZWI6TWVzc2FnZUhlYWRlcj5cclxuICA8d3NzZTpTZWN1cml0eSB4bWxuczp3c3NlPVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwMi8xMi9zZWNleHRcIlxyXG4gICAgeG1sbnM6d3N1PVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwMi8xMi91dGlsaXR5XCI+XHJcbiAgICA8d3NzZTpCaW5hcnlTZWN1cml0eVRva2VuPjwvd3NzZTpCaW5hcnlTZWN1cml0eVRva2VuPlxyXG4gIDwvd3NzZTpTZWN1cml0eT5cclxuPC9TT0FQLUVOVjpIZWFkZXI+XHJcbjxTT0FQLUVOVjpCb2R5PlxyXG4gIDxQYXNzZW5nZXJEZXRhaWxzUlEgeG1sbnM9XCJodHRwOi8vc2VydmljZXMuc2FicmUuY29tL3NwL3BkL3YzXzRcIiB2ZXJzaW9uPVwiMy40LjBcIiBpZ25vcmVPbkVycm9yPVwiZmFsc2VcIiBoYWx0T25FcnJvcj1cImZhbHNlXCI+XHJcbiAgICA8TWlzY1NlZ21lbnRTZWxsUlE+XHJcbiAgICAgIDxNaXNjU2VnbWVudCBEZXBhcnR1cmVEYXRlVGltZT1cIjEyLTIxXCIgSW5zZXJ0QWZ0ZXI9XCIwXCIgTnVtYmVySW5QYXJ0eT1cIjFcIiBTdGF0dXM9XCJHS1wiIFR5cGU9XCJPVEhcIj5cclxuICAgICAgICA8T3JpZ2luTG9jYXRpb24gTG9jYXRpb25Db2RlPVwiRlNHXCIvPlxyXG4gICAgICAgIDxUZXh0PlRFU1Q8L1RleHQ+XHJcbiAgICAgICAgPFZlbmRvclByZWZzPlxyXG4gICAgICAgICAgPEFpcmxpbmUgQ29kZT1cIlhYXCIvPlxyXG4gICAgICAgIDwvVmVuZG9yUHJlZnM+XHJcbiAgICAgIDwvTWlzY1NlZ21lbnQ+XHJcbiAgICA8L01pc2NTZWdtZW50U2VsbFJRPlxyXG4gICAgPFBvc3RQcm9jZXNzaW5nIGhhbHRPbkludmFsaWRNQ1Q9XCJmYWxzZVwiIGlnbm9yZUFmdGVyPVwidHJ1ZVwiIHVubWFza0NyZWRpdENhcmQ9XCJmYWxzZVwiPlxyXG4gICAgICA8UmVkaXNwbGF5UmVzZXJ2YXRpb24gd2FpdEludGVydmFsPVwiMTAwXCIgcmV0dXJuRXh0ZW5kZWRQcmljZVF1b3RlPVwiZmFsc2VcIi8+XHJcbiAgICAgIDxFbmRUcmFuc2FjdGlvblJRIHNob3VsZENoZWNrUmVmSWQ9XCJ0cnVlXCI+XHJcbiAgICAgICAgPEVuZFRyYW5zYWN0aW9uIEluZD1cInRydWVcIi8+XHJcbiAgICAgICAgPFNvdXJjZSBSZWNlaXZlZEZyb209XCJTV1MgVklTVEFKRVRcIi8+XHJcbiAgICAgIDwvRW5kVHJhbnNhY3Rpb25SUT5cclxuICAgICAgPFF1ZXVlUGxhY2VSUSBOdW1SZXNwb25zZXM9XCI1XCI+XHJcbiAgICAgICAgPFF1ZXVlSW5mbz5cclxuICAgICAgICAgIDxRdWV1ZUlkZW50aWZpZXIgTnVtYmVyPVwiNDAwXCIgUHJlZmF0b3J5SW5zdHJ1Y3Rpb25Db2RlPVwiMTBcIiBQc2V1ZG9DaXR5Q29kZT1cIktBMEpcIi8+XHJcbiAgICAgICAgICA8VW5pcXVlSUQgSUQ9XCJVREZKR1pcIi8+XHJcbiAgICAgICAgPC9RdWV1ZUluZm8+XHJcbiAgICAgIDwvUXVldWVQbGFjZVJRPlxyXG4gICAgPC9Qb3N0UHJvY2Vzc2luZz5cclxuICAgIDxQcm9maWxlUlE+XHJcbiAgICAgIDxVbmlxdWVJRCBpZD1cIkNSSFRMXCIvPlxyXG4gICAgPC9Qcm9maWxlUlE+XHJcbiAgICA8U3BlY2lhbFJlcURldGFpbHM+XHJcbiAgICAgIDxBZGRSZW1hcmtSUT5cclxuICAgICAgICA8UmVtYXJrSW5mbz5cclxuICAgICAgICAgIDxSZW1hcmsgQ29kZT1cIkhcIiBUeXBlPVwiQWxwaGEtQ29kZWRcIj5cclxuICAgICAgICAgICAgPFRleHQ+PC9UZXh0PlxyXG4gICAgICAgICAgPC9SZW1hcms+XHJcbiAgICAgICAgPC9SZW1hcmtJbmZvPlxyXG4gICAgICA8L0FkZFJlbWFya1JRPlxyXG4gICAgPC9TcGVjaWFsUmVxRGV0YWlscz5cclxuICA8L1Bhc3NlbmdlckRldGFpbHNSUT5cclxuPC9TT0FQLUVOVjpCb2R5PlxyXG48L1NPQVAtRU5WOkVudmVsb3BlPmAsXHJcblxyXG4gICAgXCJQYXNzZW5nZXJEZXRhaWxzUlFcIjogYFxyXG48UGFzc2VuZ2VyRGV0YWlsc1JRIHhtbG5zPVwiaHR0cDovL3NlcnZpY2VzLnNhYnJlLmNvbS9zcC9wZC92M180XCIgdmVyc2lvbj1cIjMuNC4wXCIgaWdub3JlT25FcnJvcj1cImZhbHNlXCIgaGFsdE9uRXJyb3I9XCJmYWxzZVwiPlxyXG48TWlzY1NlZ21lbnRTZWxsUlE+XHJcbiAgPE1pc2NTZWdtZW50IERlcGFydHVyZURhdGVUaW1lPVwiMTItMjFcIiBJbnNlcnRBZnRlcj1cIjBcIiBOdW1iZXJJblBhcnR5PVwiMVwiIFN0YXR1cz1cIkdLXCIgVHlwZT1cIk9USFwiPlxyXG4gICAgPE9yaWdpbkxvY2F0aW9uIExvY2F0aW9uQ29kZT1cIkZTR1wiLz5cclxuICAgIDxUZXh0PlRFU1Q8L1RleHQ+XHJcbiAgICA8VmVuZG9yUHJlZnM+XHJcbiAgICAgIDxBaXJsaW5lIENvZGU9XCJYWFwiLz5cclxuICAgIDwvVmVuZG9yUHJlZnM+XHJcbiAgPC9NaXNjU2VnbWVudD5cclxuPC9NaXNjU2VnbWVudFNlbGxSUT5cclxuPFBvc3RQcm9jZXNzaW5nIGhhbHRPbkludmFsaWRNQ1Q9XCJmYWxzZVwiIGlnbm9yZUFmdGVyPVwidHJ1ZVwiIHVubWFza0NyZWRpdENhcmQ9XCJmYWxzZVwiPlxyXG4gIDxSZWRpc3BsYXlSZXNlcnZhdGlvbiB3YWl0SW50ZXJ2YWw9XCIxMDBcIiByZXR1cm5FeHRlbmRlZFByaWNlUXVvdGU9XCJmYWxzZVwiLz5cclxuICA8RW5kVHJhbnNhY3Rpb25SUSBzaG91bGRDaGVja1JlZklkPVwidHJ1ZVwiPlxyXG4gICAgPEVuZFRyYW5zYWN0aW9uIEluZD1cInRydWVcIi8+XHJcbiAgICA8U291cmNlIFJlY2VpdmVkRnJvbT1cIlNXUyBWSVNUQUpFVFwiLz5cclxuICA8L0VuZFRyYW5zYWN0aW9uUlE+XHJcbiAgPFF1ZXVlUGxhY2VSUSBOdW1SZXNwb25zZXM9XCI1XCI+XHJcbiAgICA8UXVldWVJbmZvPlxyXG4gICAgICA8UXVldWVJZGVudGlmaWVyIE51bWJlcj1cIjQwMFwiIFByZWZhdG9yeUluc3RydWN0aW9uQ29kZT1cIjEwXCIgUHNldWRvQ2l0eUNvZGU9XCJLQTBKXCIvPlxyXG4gICAgICA8VW5pcXVlSUQgSUQ9XCJVREZKR1pcIi8+XHJcbiAgICA8L1F1ZXVlSW5mbz5cclxuICA8L1F1ZXVlUGxhY2VSUT5cclxuPC9Qb3N0UHJvY2Vzc2luZz5cclxuPFByb2ZpbGVSUT5cclxuICA8VW5pcXVlSUQgaWQ9XCJDUkhUTFwiLz5cclxuPC9Qcm9maWxlUlE+XHJcbjxTcGVjaWFsUmVxRGV0YWlscz5cclxuICA8QWRkUmVtYXJrUlE+XHJcbiAgICA8UmVtYXJrSW5mbz5cclxuICAgICAgPFJlbWFyayBDb2RlPVwiSFwiIFNlZ21lbnROdW1iZXI9XCIxXCIgVHlwZT1cIkdlbmVyYWxcIj5cclxuICAgICAgICA8VGV4dD5URVNUIFJFTUFSSyAyPC9UZXh0PlxyXG4gICAgICA8L1JlbWFyaz5cclxuICAgIDwvUmVtYXJrSW5mbz5cclxuICA8L0FkZFJlbWFya1JRPlxyXG48L1NwZWNpYWxSZXFEZXRhaWxzPlxyXG48L1Bhc3NlbmdlckRldGFpbHNSUT5gLFxyXG5cclxuICAgIFwiUXVldWVQbGFjZVJRXCI6IGA8UXVldWVQbGFjZVJRIHhtbG5zPVwiaHR0cDovL3dlYnNlcnZpY2VzLnNhYnJlLmNvbS9zYWJyZVhNTC8yMDExLzEwXCJcclxueG1sbnM6eHM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYVwiXHJcbnhtbG5zOnhzaT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXCIgVmVyc2lvbj1cIjIuMC40XCI+XHJcbjxRdWV1ZUluZm8+XHJcbjxRdWV1ZUlkZW50aWZpZXIgTnVtYmVyPVwiXCIgUHJlZmF0b3J5SW5zdHJ1Y3Rpb25Db2RlPVwiMTFcIiBQc2V1ZG9DaXR5Q29kZT1cIlwiLz5cclxuPC9RdWV1ZUluZm8+XHJcbjwvUXVldWVQbGFjZVJRPmAsXHJcblxyXG4gICAgXCJTYWJyZV9PVEFfUHJvZmlsZVJlYWRSUVwiOiBgXHJcbjxTYWJyZV9PVEFfUHJvZmlsZVJlYWRSUSB4bWxucz1cImh0dHA6Ly93d3cuc2FicmUuY29tL2Vwcy9zY2hlbWFzXCJcclxueG1sbnM6eHNpPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcIiB4c2k6c2NoZW1hTG9jYXRpb249XCJodHRwOi8vd3d3LnNhYnJlLmNvbS9lcHMvc2NoZW1hc1xyXG4uLlxcc2NoZW1hc1dTRExcXFNhYnJlX09UQV9Qcm9maWxlUmVhZFJRLnhzZFwiIFZlcnNpb249XCI2LjU1XCI+XHJcbjxQcm9maWxlPlxyXG48VFBBX0lkZW50aXR5IFVuaXF1ZUlEPVwiKlwiIENsaWVudENvZGU9XCJcIiBEb21haW5JRD1cIlwiIFByb2ZpbGVUeXBlQ29kZT1cIlwiIENsaWVudENvbnRleHRDb2RlPVwiXCIgLz5cclxuPC9Qcm9maWxlPlxyXG48L1NhYnJlX09UQV9Qcm9maWxlUmVhZFJRPmAsXHJcblxyXG4gICAgXCJTYWJyZV9PVEFfUHJvZmlsZVNlYXJjaFJRXCI6IGBcclxuPFNhYnJlX09UQV9Qcm9maWxlU2VhcmNoUlEgVmVyc2lvbj1cIjYuMjZcIlxyXG54bWxucz1cImh0dHA6Ly93d3cuc2FicmUuY29tL2Vwcy9zY2hlbWFzXCJcclxueG1sbnM6eHNpPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcIiB4c2k6c2NoZW1hTG9jYXRpb249XCJodHRwOi8vd3d3LnNhYnJlLmNvbS9lcHMvc2NoZW1hcyAuLlxcc2NoZW1hc3dzZGxcXFNhYnJlX09UQV9Qcm9maWxlU2VhcmNoUlEueHNkXCI+XHJcbjxQcm9maWxlU2VhcmNoQ3JpdGVyaWEgUHJvZmlsZU5hbWVPbmx5PVwiWVwiPlxyXG48VFBBX0lkZW50aXR5IENsaWVudENvZGU9XCJcIiBDbGllbnRDb250ZXh0Q29kZT1cIlwiIERvbWFpbklEPVwiXCIgUHJvZmlsZU5hbWU9XCJcIiBQcm9maWxlVHlwZUNvZGU9XCJcIi8+XHJcbjwvUHJvZmlsZVNlYXJjaENyaXRlcmlhPlxyXG48L1NhYnJlX09UQV9Qcm9maWxlU2VhcmNoUlE+YCxcclxuXHJcbiAgICBcIlNhYnJlX09UQV9Qcm9maWxlVG9QTlJSUV9XaXRoU2Vzc2lvblwiOiBgXHJcbjxTT0FQLUVOVjpFbnZlbG9wZSB4bWxuczpTT0FQLUVOVj1cImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3NvYXAvZW52ZWxvcGUvXCJcclxueG1sbnM6ZWI9XCJodHRwOi8vd3d3LmVieG1sLm9yZy9uYW1lc3BhY2VzL21lc3NhZ2VIZWFkZXJcIlxyXG54bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxyXG54bWxuczp4c2Q9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L1hNTFNjaGVtYVwiPlxyXG48U09BUC1FTlY6SGVhZGVyPlxyXG48ZWI6TWVzc2FnZUhlYWRlciBTT0FQLUVOVjptdXN0VW5kZXJzdGFuZD1cIjFcIiBlYjp2ZXJzaW9uPVwiMS4wXCI+XHJcbiAgPGViOkZyb20+XHJcbiAgICA8ZWI6UGFydHlJZCB0eXBlPVwidXJuOngxMi5vcmc6SU81OjAxXCI+OTk5OTk5PC9lYjpQYXJ0eUlkPlxyXG4gIDwvZWI6RnJvbT5cclxuICA8ZWI6VG8+XHJcbiAgICA8ZWI6UGFydHlJZCB0eXBlPVwidXJuOngxMi5vcmc6SU81OjAxXCI+MTIzMTIzPC9lYjpQYXJ0eUlkPlxyXG4gIDwvZWI6VG8+XHJcbiAgPGViOkNQQUlkPktBMEo8L2ViOkNQQUlkPlxyXG4gIDxlYjpDb252ZXJzYXRpb25JZD53ZWJzZXJ2aWNlcy5zdXBwb3J0QHNhYnJlLmNvbTwvZWI6Q29udmVyc2F0aW9uSWQ+XHJcbiAgPGViOlNlcnZpY2UgZWI6dHlwZT1cIk9UQVwiPkVQUzwvZWI6U2VydmljZT5cclxuICA8ZWI6QWN0aW9uPkVQU19FWFRfUHJvZmlsZVRvUE5SUlE8L2ViOkFjdGlvbj5cclxuICA8ZWI6TWVzc2FnZURhdGE+XHJcbiAgICA8ZWI6TWVzc2FnZUlkPjEwMDA8L2ViOk1lc3NhZ2VJZD5cclxuICAgIDxlYjpUaW1lc3RhbXA+MjAxNi0xMi0zMFQwNToyNTozMno8L2ViOlRpbWVzdGFtcD5cclxuICA8L2ViOk1lc3NhZ2VEYXRhPlxyXG48L2ViOk1lc3NhZ2VIZWFkZXI+XHJcbjx3c3NlOlNlY3VyaXR5IHhtbG5zOndzc2U9XCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDAyLzEyL3NlY2V4dFwiXHJcbiAgeG1sbnM6d3N1PVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwMi8xMi91dGlsaXR5XCI+XHJcbiAgPHdzc2U6QmluYXJ5U2VjdXJpdHlUb2tlbj48L3dzc2U6QmluYXJ5U2VjdXJpdHlUb2tlbj5cclxuPC93c3NlOlNlY3VyaXR5PlxyXG48L1NPQVAtRU5WOkhlYWRlcj5cclxuPFNPQVAtRU5WOkJvZHk+XHJcbjxTYWJyZV9PVEFfUHJvZmlsZVRvUE5SUlEgVGFyZ2V0PVwiUHJvZHVjdGlvblwiIFRpbWVTdGFtcD1cIjIwMTMtMDQtMzBUMDg6MjQ6NDIuOTY3WlwiIFZlcnNpb249XCI2LjU1XCIgeHNpOnNjaGVtYUxvY2F0aW9uPVwiaHR0cDovL3d3dy5zYWJyZS5jb20vZXBzL3NjaGVtYXMgXFxzY2hlbWFzXFxTYWJyZV9PVEFfUHJvZmlsZUNyZWF0ZVJRLnhzZFwiXHJcbiAgeG1sbnM9XCJodHRwOi8vd3d3LnNhYnJlLmNvbS9lcHMvc2NoZW1hc1wiXHJcbiAgeG1sbnM6eHNpPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcIj5cclxuICA8RmlsdGVyUGF0aD5cclxuICAgIDxQcm9maWxlIENsaWVudENvZGU9XCJcIiBDbGllbnRDb250ZXh0Q29kZT1cIlwiIERvbWFpbklEPVwiXCIgUHJvZmlsZVR5cGVDb2RlPVwiXCIgVW5pcXVlSUQ9XCJcIiBQcm9maWxlTmFtZT1cIlwiIFBOUk1vdmVPcmRlclNlcU5vPVwiMVwiPlxyXG4gICAgICA8RmlsdGVyIEZpbHRlcklEPVwiXCIgRG9tYWluSUQ9XCJcIiBDbGllbnRDb2RlPVwiXCIgQ2xpZW50Q29udGV4dENvZGU9XCJcIiBGaWx0ZXJOYW1lPVwiXCIvPlxyXG4gICAgPC9Qcm9maWxlPlxyXG4gIDwvRmlsdGVyUGF0aD5cclxuPC9TYWJyZV9PVEFfUHJvZmlsZVRvUE5SUlE+XHJcbjwvU09BUC1FTlY6Qm9keT5cclxuPC9TT0FQLUVOVjpFbnZlbG9wZT5gLFxyXG5cclxuICAgIFwiU2FicmVfT1RBX1Byb2ZpbGVUb1BOUlJRXCI6IGBcclxuPFNhYnJlX09UQV9Qcm9maWxlVG9QTlJSUSBUYXJnZXQ9XCJQcm9kdWN0aW9uXCIgVGltZVN0YW1wPVwiMjAxMy0wNC0zMFQwODoyNDo0Mi45NjdaXCIgVmVyc2lvbj1cIjYuNTVcIiB4c2k6c2NoZW1hTG9jYXRpb249XCJodHRwOi8vd3d3LnNhYnJlLmNvbS9lcHMvc2NoZW1hcyBcXHNjaGVtYXNcXFNhYnJlX09UQV9Qcm9maWxlQ3JlYXRlUlEueHNkXCJcclxueG1sbnM9XCJodHRwOi8vd3d3LnNhYnJlLmNvbS9lcHMvc2NoZW1hc1wiXHJcbnhtbG5zOnhzaT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXCI+XHJcbjxGaWx0ZXJQYXRoPlxyXG48UHJvZmlsZSBDbGllbnRDb2RlPVwiXCIgQ2xpZW50Q29udGV4dENvZGU9XCJcIiBEb21haW5JRD1cIlwiIFByb2ZpbGVUeXBlQ29kZT1cIlwiIFVuaXF1ZUlEPVwiXCIgUHJvZmlsZU5hbWU9XCJcIiBQTlJNb3ZlT3JkZXJTZXFObz1cIjFcIj5cclxuICA8RmlsdGVyIEZpbHRlcklEPVwiXCIgRG9tYWluSUQ9XCJcIiBDbGllbnRDb2RlPVwiXCIgQ2xpZW50Q29udGV4dENvZGU9XCJcIiBGaWx0ZXJOYW1lPVwiXCIvPlxyXG48L1Byb2ZpbGU+XHJcbjwvRmlsdGVyUGF0aD5cclxuPC9TYWJyZV9PVEFfUHJvZmlsZVRvUE5SUlE+YCxcclxuXHJcbiAgICBcIlNhYnJlQ29tbWFuZExMU1JRX1dpdGhTZXNzaW9uXCI6IGA8U09BUC1FTlY6RW52ZWxvcGUgeG1sbnM6U09BUC1FTlY9XCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy9zb2FwL2VudmVsb3BlL1wiXHJcbnhtbG5zOmViPVwiaHR0cDovL3d3dy5lYnhtbC5vcmcvbmFtZXNwYWNlcy9tZXNzYWdlSGVhZGVyXCJcclxueG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcclxueG1sbnM6eHNkPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS9YTUxTY2hlbWFcIj5cclxuPFNPQVAtRU5WOkhlYWRlcj5cclxuPGViOk1lc3NhZ2VIZWFkZXIgU09BUC1FTlY6bXVzdFVuZGVyc3RhbmQ9XCIxXCIgZWI6dmVyc2lvbj1cIjEuMFwiPlxyXG48ZWI6RnJvbT5cclxuICA8ZWI6UGFydHlJZCB0eXBlPVwidXJuOngxMi5vcmc6SU81OjAxXCI+OTk5OTk5PC9lYjpQYXJ0eUlkPlxyXG48L2ViOkZyb20+XHJcbjxlYjpUbz5cclxuICA8ZWI6UGFydHlJZCB0eXBlPVwidXJuOngxMi5vcmc6SU81OjAxXCI+MTIzMTIzPC9lYjpQYXJ0eUlkPlxyXG48L2ViOlRvPlxyXG48ZWI6Q1BBSWQ+S0EwSjwvZWI6Q1BBSWQ+XHJcbjxlYjpDb252ZXJzYXRpb25JZD53ZWJzZXJ2aWNlcy5zdXBwb3J0QHNhYnJlLmNvbTwvZWI6Q29udmVyc2F0aW9uSWQ+XHJcbjxlYjpTZXJ2aWNlIGViOnR5cGU9XCJPVEFcIj5TYWJyZUNvbW1hbmRMTFNSUTwvZWI6U2VydmljZT5cclxuPGViOkFjdGlvbj5TYWJyZUNvbW1hbmRMTFNSUTwvZWI6QWN0aW9uPlxyXG48ZWI6TWVzc2FnZURhdGE+XHJcbiAgPGViOk1lc3NhZ2VJZD4xMDAwPC9lYjpNZXNzYWdlSWQ+XHJcbiAgPGViOlRpbWVzdGFtcD4yMDE2LTEyLTMwVDA1OjI1OjMyejwvZWI6VGltZXN0YW1wPlxyXG48L2ViOk1lc3NhZ2VEYXRhPlxyXG48L2ViOk1lc3NhZ2VIZWFkZXI+XHJcbjx3c3NlOlNlY3VyaXR5IHhtbG5zOndzc2U9XCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDAyLzEyL3NlY2V4dFwiXHJcbnhtbG5zOndzdT1cImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDIvMTIvdXRpbGl0eVwiPlxyXG48d3NzZTpCaW5hcnlTZWN1cml0eVRva2VuPjwvd3NzZTpCaW5hcnlTZWN1cml0eVRva2VuPlxyXG48L3dzc2U6U2VjdXJpdHk+XHJcbjwvU09BUC1FTlY6SGVhZGVyPlxyXG48U09BUC1FTlY6Qm9keT5cclxuPFNhYnJlQ29tbWFuZExMU1JRIHhtbG5zPVwiaHR0cDovL3dlYnNlcnZpY2VzLnNhYnJlLmNvbS9zYWJyZVhNTC8yMDAzLzA3XCJcclxueG1sbnM6eHM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYVwiXHJcbnhtbG5zOnhzaT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXCIgVGltZVN0YW1wPVwiMjAxNC0wMy0wNFQxNDowMDowMFwiIFZlcnNpb249XCIxLjguMVwiPlxyXG48UmVxdWVzdCBPdXRwdXQ9XCJTQ1JFRU5cIiBDREFUQT1cInRydWVcIj5cclxuICA8SG9zdENvbW1hbmQ+PC9Ib3N0Q29tbWFuZD5cclxuPC9SZXF1ZXN0PlxyXG48L1NhYnJlQ29tbWFuZExMU1JRPlxyXG48L1NPQVAtRU5WOkJvZHk+XHJcbjwvU09BUC1FTlY6RW52ZWxvcGU+YCxcclxuXHJcbiAgICBcIlNhYnJlQ29tbWFuZExMU1JRXCI6IGBcclxuPFNhYnJlQ29tbWFuZExMU1JRIHhtbG5zPVwiaHR0cDovL3dlYnNlcnZpY2VzLnNhYnJlLmNvbS9zYWJyZVhNTC8yMDAzLzA3XCJcclxueG1sbnM6eHM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYVwiXHJcbnhtbG5zOnhzaT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXCIgVGltZVN0YW1wPVwiMjAxNC0wMy0wNFQxNDowMDowMFwiIFZlcnNpb249XCIxLjguMVwiPlxyXG48UmVxdWVzdCBPdXRwdXQ9XCJTQ1JFRU5cIiBDREFUQT1cInRydWVcIj5cclxuPEhvc3RDb21tYW5kPjwvSG9zdENvbW1hbmQ+XHJcbjwvUmVxdWVzdD5cclxuPC9TYWJyZUNvbW1hbmRMTFNSUT5gLFxyXG5cclxuICAgIFwiU2Vzc2lvbkNyZWF0ZVJRXCI6IGBcclxuPFNPQVAtRU5WOkVudmVsb3BlIHhtbG5zOlNPQVAtRU5WPVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvc29hcC9lbnZlbG9wZS9cIj5cclxuPFNPQVAtRU5WOkhlYWRlcj5cclxuPE1lc3NhZ2VIZWFkZXIgeG1sbnM9XCJodHRwOi8vd3d3LmVieG1sLm9yZy9uYW1lc3BhY2VzL21lc3NhZ2VIZWFkZXJcIj5cclxuPEZyb20+XHJcbiAgPFBhcnR5SWQ+QWdlbmN5PC9QYXJ0eUlkPlxyXG48L0Zyb20+XHJcbjxUbz5cclxuICA8UGFydHlJZD5TYWJyZV9BUEk8L1BhcnR5SWQ+XHJcbjwvVG8+XHJcbjxDb252ZXJzYXRpb25JZD4yMDIxLjAxLkRldlN0dWRpbzwvQ29udmVyc2F0aW9uSWQ+XHJcbjxBY3Rpb24+U2Vzc2lvbkNyZWF0ZVJRPC9BY3Rpb24+XHJcbjwvTWVzc2FnZUhlYWRlcj5cclxuPFNlY3VyaXR5IHhtbG5zPVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwMi8xMi9zZWNleHRcIj5cclxuPFVzZXJuYW1lVG9rZW4+XHJcbiAgPFVzZXJuYW1lPjwvVXNlcm5hbWU+XHJcbiAgPFBhc3N3b3JkPjwvUGFzc3dvcmQ+XHJcbiAgPE9yZ2FuaXphdGlvbj48L09yZ2FuaXphdGlvbj5cclxuICA8RG9tYWluPkRFRkFVTFQ8L0RvbWFpbj5cclxuPC9Vc2VybmFtZVRva2VuPlxyXG48L1NlY3VyaXR5PlxyXG48L1NPQVAtRU5WOkhlYWRlcj5cclxuPFNPQVAtRU5WOkJvZHk+XHJcbjxTZXNzaW9uQ3JlYXRlUlEgcmV0dXJuQ29udGV4dElEPVwidHJ1ZVwiIFZlcnNpb249XCIxLjAuMFwiXHJcbnhtbG5zPVwiaHR0cDovL3d3dy5vcGVudHJhdmVsLm9yZy9PVEEvMjAwMi8xMVwiLz5cclxuPC9TT0FQLUVOVjpCb2R5PlxyXG48L1NPQVAtRU5WOkVudmVsb3BlPmBcclxuICB9XHJcbn0iLCJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogQXV0by1nZW5lcmF0ZWQgZmlsZS4gICAgICAgICAgICAgICovXG4vKiBEbyBub3QgbW9kaWZ5IGl0LiAgICAgICAgICAgICAgICAgKi9cbi8qIFlvdSBtYXkgcmVtb3ZlIGl0LiAgICAgICAgICAgICAgICAqL1xuLyogWW91IG1heSBjb21taXQgaXQuICAgICAgICAgICAgICAgICovXG4vKiBZb3UgbWF5IHB1c2ggaXQuICAgICAgICAgICAgICAgICAgKi9cbi8qIFJlbW92ZSBpdCBpZiBtb2R1bGUgbmFtZSBjaGFuZ2VkLiAqL1xuLyogZXNsaW50OmRpc2FibGUgICAgICAgICAgICAgICAgICAgICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuaW1wb3J0IHtJTW9kdWxlQ29udGV4dH0gZnJvbSBcInNhYnJlLW5ndi1jb3JlL21vZHVsZXMvSU1vZHVsZUNvbnRleHRcIjtcbmltcG9ydCB7TW9kdWxlQ29udGV4dH0gZnJvbSBcInNhYnJlLW5ndi1jb3JlL21vZHVsZXMvTW9kdWxlQ29udGV4dFwiO1xuaW1wb3J0IHtJMThuU2VydmljZSwgU2NvcGVkVHJhbnNsYXRvcn0gZnJvbSBcInNhYnJlLW5ndi1hcHAvYXBwL3NlcnZpY2VzL2ltcGwvSTE4blNlcnZpY2VcIjtcblxuLyoqIEBpbnRlcm5hbCAqKi9cbmV4cG9ydCBjb25zdCBjb250ZXh0OiBJTW9kdWxlQ29udGV4dCA9IG5ldyBNb2R1bGVDb250ZXh0KFwiY29tLWludGVybm92YS1ndGNwYXltZW50LXdlYi1tb2R1bGVcIik7XG4vKiogQGludGVybmFsICoqL1xuZXhwb3J0IGNvbnN0IGNmOiBJTW9kdWxlQ29udGV4dFsnY2YnXSA9IGNvbnRleHQuY2YuYmluZChjb250ZXh0KTtcbi8qKiBAaW50ZXJuYWwgKiovXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJTZXJ2aWNlOiBJTW9kdWxlQ29udGV4dFsncmVnaXN0ZXJTZXJ2aWNlJ10gPSBjb250ZXh0LnJlZ2lzdGVyU2VydmljZS5iaW5kKGNvbnRleHQpO1xuLyoqIEBpbnRlcm5hbCAqKi9cbmV4cG9ydCBjb25zdCBnZXRTZXJ2aWNlOiBJTW9kdWxlQ29udGV4dFsnZ2V0U2VydmljZSddID0gY29udGV4dC5nZXRTZXJ2aWNlLmJpbmQoY29udGV4dCk7XG4vKiogQGludGVybmFsICoqL1xuZXhwb3J0IGNvbnN0IHQ6IFNjb3BlZFRyYW5zbGF0b3IgPSBnZXRTZXJ2aWNlKEkxOG5TZXJ2aWNlKS5nZXRTY29wZWRUcmFuc2xhdG9yKCdjb20taW50ZXJub3ZhLWd0Y3BheW1lbnQtd2ViLW1vZHVsZS90cmFuc2xhdGlvbnMnKTtcbiIsImltcG9ydCB7IENvbW1hbmRNZXNzYWdlQmFzaWNScyxDb21tYW5kTWVzc2FnZVJxIH0gZnJvbSBcInNhYnJlLW5ndi1wb3MtY2RtL2NvbW1zZ1wiO1xyXG5pbXBvcnQgeyByZW1hcmsgfSBmcm9tIFwiLi4vbW9kZWwvcmVtYXJrXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTYWJyZUNvbnRyb2xsZXIge1xyXG4gICAgUmVtYXJrVXBkYXRlKGxpc3RSZW1hcmtzOiBBcnJheTxyZW1hcms+KTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIFNlbmRDb21tYW5kQXN5bmMoZm9ybWF0IDogc3RyaW5nKSA6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBTZW5kQ29tbWFuZEFzeW5jUnMoZm9ybWF0OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4gO1xyXG4gICAgYnVpbGRSZXF1ZXN0R2V0UmVzZXJ2YXRpb24ocG5yOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgYnVpbGRSZXF1ZXN0QWRkUmVtYXJrKGxpc3RSZW1hcmtzOiBBcnJheTxyZW1hcms+KTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIFNlbmRDb21tYW5kTWVzc2FnZShwYXlsb2FkOiBzdHJpbmcsIHNob3dScTpib29sZWFuLCBzaG93UnM6Ym9vbGVhbik6IFByb21pc2U8Q29tbWFuZE1lc3NhZ2VCYXNpY1JzPjtcclxuICAgIEFkZFJlbWFya3NBc3luYyhyZW1hcmtzOkFycmF5PHJlbWFyaz4pOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgU2VuZENvbW1hbmRTeW5jKGZvcm1hdCA6IHN0cmluZykgOiBzdHJpbmc7XHJcbiAgICBJbnB1dFZhbGlkYXRvcihpZDogc3RyaW5nKTogdm9pZDsgICAgIFxyXG59IiwiaW1wb3J0IHsgSVNhYnJlQ29udHJvbGxlciB9IGZyb20gXCIuL0lTYWJyZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgQWJzdHJhY3RTZXJ2aWNlIH0gZnJvbSBcInNhYnJlLW5ndi1hcHAvYXBwL3NlcnZpY2VzL2ltcGwvQWJzdHJhY3RTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdldFNlcnZpY2UsIGNmLCBjb250ZXh0IH0gZnJvbSBcIi4uL0NvbnRleHRcIjtcclxuaW1wb3J0IHsgU2FicmVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL1NhYnJlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBJUmVzZXJ2YXRpb25TZXJ2aWNlIH0gZnJvbSBcInNhYnJlLW5ndi1yZXNlcnZhdGlvbi9zZXJ2aWNlcy9JUmVzZXJ2YXRpb25TZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENvbW1hbmRNZXNzYWdlUmVzZXJ2YXRpb25ScyB9IGZyb20gXCJzYWJyZS1uZ3YtcG9zLWNkbS9yZXNlcnZhdGlvblwiO1xyXG5pbXBvcnQgeyBQbnJQdWJsaWNTZXJ2aWNlIH0gZnJvbSBcInNhYnJlLW5ndi1hcHAvYXBwL3NlcnZpY2VzL2ltcGwvUG5yUHVibGljU2VydmljZVwiO1xyXG5pbXBvcnQgeyBBZ2VudFByb2ZpbGVTZXJ2aWNlIH0gZnJvbSBcInNhYnJlLW5ndi1hcHAvYXBwL3NlcnZpY2VzL2ltcGwvQWdlbnRQcm9maWxlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBDb21tYW5kTWVzc2FnZUJhc2ljUnMsIENvbW1hbmRNZXNzYWdlUnEgfSBmcm9tIFwic2FicmUtbmd2LXBvcy1jZG0vY29tbXNnXCI7XHJcbmltcG9ydCB7IElDb21tYW5kTWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwic2FicmUtbmd2LWNvbW1zZy9zZXJ2aWNlcy9JQ29tbWFuZE1lc3NhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFV0aWxpdGFyaW8gfSBmcm9tIFwiLi4vY29tbW9uL1V0aWxpdGFyaW9cIjtcclxuaW1wb3J0IHsgcmVtYXJrIH0gZnJvbSBcIi4uL21vZGVsL3JlbWFya1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNhYnJlQ29udHJvbGxlciBleHRlbmRzIEFic3RyYWN0U2VydmljZSBpbXBsZW1lbnRzIElTYWJyZUNvbnRyb2xsZXIge1xyXG4gICAgc3RhdGljIFNFUlZJQ0VfTkFNRTogc3RyaW5nID0gXCJjb20taW50ZXJub3ZhLWd0Y3BheW1lbnQtd2ViLW1vZHVsZS1TYWJyZUNvbnRyb2xsZXJcIjtcclxuXHJcbiAgICBidWlsZFJlcXVlc3RHZXRSZXNlcnZhdGlvbihwbnI6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gdGhpcy5idWlsZEdldFJlc2VydmF0aW9uUlEocG5yLCBcIkdldFJlc2VydmF0aW9uUlFcIik7XHJcbiAgICAgICAgICAgIHJlcXVlc3RcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldFNlcnZpY2UoU2FicmVTZXJ2aWNlKS5jYWxsU29hcFNlcnZpY2VBc3luYyhyZXNwLCBcIkdldFJlc2VydmF0aW9uUlFcIiwgJ1NFU1NJT04nLCAxMDAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc29sdmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc29sdmVyIEdldFJlc2VydmF0aW9uUlFcIiwgcmVzb2x2ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkUmVxdWVzdEFkZFJlbWFyayhsaXN0UmVtYXJrczogQXJyYXk8cmVtYXJrPik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGlzdFJlbWFya3Mgb24gYnVpbGRSZXF1ZXN0QWRkUmVtYXJrXCIsIGxpc3RSZW1hcmtzKTtcclxuXHJcbiAgICAgICAgICAgIGxldCByZXF1ZXN0Um1rID0gdGhpcy5idWlsZEFkZFJlbWFya1JRKGxpc3RSZW1hcmtzLCBcIkFkZFJlbWFya0xMU1JRXCIpO1xyXG4gICAgICAgICAgICByZXF1ZXN0Um1rXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBnZXRTZXJ2aWNlKFNhYnJlU2VydmljZSkuY2FsbFNvYXBTZXJ2aWNlQXN5bmMocmVzcCwgXCJBZGRSZW1hcmtMTFNSUVwiLCAnU0VTU0lPTicsIDEwMDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzb2x2ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzb2x2ZXIgQWRkUmVtYXJrTExTUlFcIiwgcmVzb2x2ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFJlbWFya1VwZGF0ZShsaXN0UmVtYXJrczogQXJyYXk8cmVtYXJrPik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXF1ZXN0Um1rID0gdGhpcy5idWlsZFJlbWFya1VwZGF0ZVJRKGxpc3RSZW1hcmtzLCBcIlVwZGF0ZVJlc2VydmF0aW9uUlFybWtcIik7XHJcbiAgICAgICAgICAgIHJlcXVlc3RSbWtcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldFNlcnZpY2UoU2FicmVTZXJ2aWNlKS5jYWxsU29hcFNlcnZpY2VBc3luYyhyZXNwLCBcIlVwZGF0ZVJlc2VydmF0aW9uUlFcIiwgJ1NFU1NJT04nLCAxMDAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc29sdmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc29sdmVyIFVwZGF0ZVJlc2VydmF0aW9uUlFcIiwgcmVzb2x2ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFNlbmRDb21tYW5kQXN5bmMoZm9ybWF0OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkFzeW5jIGVudHJ5OlwiLCBmb3JtYXQpO1xyXG4gICAgICAgICAgICBsZXQgcmVxdWVzdFNhYnJlQ29tbWFuZCA9IHRoaXMuYnVpbGRSZXF1ZXN0U2FicmVDb21tYW5kKGZvcm1hdCwgXCJTYWJyZUNvbW1hbmRMTFNSUVwiKTtcclxuICAgICAgICAgICAgcmVxdWVzdFNhYnJlQ29tbWFuZFxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0U2VydmljZShTYWJyZVNlcnZpY2UpLmNhbGxTb2FwU2VydmljZUFzeW5jKHJlc3AsIFwiU2FicmVDb21tYW5kTExTUlFcIiwgJ1NFU1NJT04nLCAxMDAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc29sdmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNvbHZlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFNlbmRDb21tYW5kQXN5bmNScyhmb3JtYXQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkFzeW5jIGVudHJ5OlwiLCBmb3JtYXQpO1xyXG4gICAgICAgICAgICBsZXQgcmVxdWVzdFNhYnJlQ29tbWFuZCA9IHRoaXMuYnVpbGRSZXF1ZXN0U2FicmVDb21tYW5kKGZvcm1hdCwgXCJTYWJyZUNvbW1hbmRMTFNSUVwiKTtcclxuICAgICAgICAgICAgcmVxdWVzdFNhYnJlQ29tbWFuZFxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwOlwiLCByZXNwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0U2VydmljZShTYWJyZVNlcnZpY2UpLmNhbGxTb2FwU2VydmljZUFzeW5jKHJlc3AsIFwiU2FicmVDb21tYW5kTExTUlFcIiwgJ1NFU1NJT04nLCAxMDAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc29sdmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlc29sdmVyOlwiLCByZXNvbHZlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHV0aWxpdGFyaW9fID0gZ2V0U2VydmljZShVdGlsaXRhcmlvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidXRpbGl0YXJpb186XCIsIHV0aWxpdGFyaW9fKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZG9jdW1lbnQgPSB1dGlsaXRhcmlvXy5TdHJpbmdUb1htbChyZXNvbHZlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRvY3VtZW50IGluIHhtbDpcIiwgZG9jdW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb21tYW5kUnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjb21tYW5kUnNbMF0uY2hpbGROb2Rlc1swXS5ub2RlVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFNlbmRDb21tYW5kU3luYyhmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2kgbm8gZXN0w6EgMzYwIG5vIGxvIGRldGVjdGEgICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2VudHJ5JywgZm9ybWF0KVxyXG4gICAgICAgIGxldCByZXNwb25zZU1lc3NhZ2U6IHN0cmluZyA9IG51bGw7XHJcbiAgICAgICAgbGV0IHJlcXVlc3RTYWJyZUNvbW1hbmRTdHJpbmcgPSB0aGlzLmJ1aWxkUmVxdWVzdFNlbmRDb21tYW5kKGZvcm1hdCk7ICAgICAgICAgICAgICAgICAgIC8vbGxhbWFtb3MgYWwgbWV0b2RvIGNvbiBlbCB0aGlzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncnEnLCByZXF1ZXN0U2FicmVDb21tYW5kU3RyaW5nKVxyXG4gICAgICAgIGlmIChyZXF1ZXN0U2FicmVDb21tYW5kU3RyaW5nICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2VNZXNzYWdlID0gZ2V0U2VydmljZShTYWJyZVNlcnZpY2UpLmNhbGxTb2FwU2VydmljZVN5bmMocmVxdWVzdFNhYnJlQ29tbWFuZFN0cmluZywgXCJTYWJyZUNvbW1hbmRMTFNSUVwiKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncnMnLCByZXNwb25zZU1lc3NhZ2UpXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZU1lc3NhZ2UgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJzcENvbW1hbmQgPSBKU09OLnBhcnNlKHJlc3BvbnNlTWVzc2FnZSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BhcnNlYW1vcyBsYSByZXNwdWVzdGEgZW4gdW5hIHZhcmlhYmxlIGRlIHRpcG8gSlNPTiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VNZXNzYWdlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGlmIChyc3BDb21tYW5kLnJlc3BvbnNlICE9IG51bGwgJiYgcnNwQ29tbWFuZC5yZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VNZXNzYWdlID0gcnNwQ29tbWFuZC5yZXNwb25zZS5wYXlsb2FkLnJlc3BvbnNlVGV4dDsgICAgICAgICAgICAgICAgIC8vZGV2dWVsdmUgZWwgU2FicmVDb21tYW5kUlNcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlc3BvbnNlTWVzc2FnZTpcIixyZXNwb25zZU1lc3NhZ2UpOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VNZXNzYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZU1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgU2VuZENvbW1hbmRNZXNzYWdlKHBheWxvYWQ6IHN0cmluZywgc2hvd1JxOiBib29sZWFuLCBzaG93UnM6IGJvb2xlYW4pOiBQcm9taXNlPENvbW1hbmRNZXNzYWdlQmFzaWNScz4ge1xyXG4gICAgICAgIGxldCBpQ21kTXNnU2VydmljZSA9IGdldFNlcnZpY2UoSUNvbW1hbmRNZXNzYWdlU2VydmljZSk7XHJcbiAgICAgICAgcmV0dXJuIGlDbWRNc2dTZXJ2aWNlLnNlbmQoe1xyXG4gICAgICAgICAgICBycTogcGF5bG9hZCxcclxuICAgICAgICAgICAgc2hvd1JxOiBzaG93UnEsXHJcbiAgICAgICAgICAgIHNob3dSczogc2hvd1JzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAqXHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWZOb2RlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWZBdHRyXHJcbiAqIEBwYXJhbSB7RWxlbWVudH0gYWN0dWFsTm9kZVxyXG4gKiBAcmV0dXJuIHsqfSAge3N0cmluZ31cclxuICogQG1lbWJlcm9mIFNhYnJlQ29udHJvbGxlclxyXG4gKi9cclxuICAgIHByaXZhdGUgY2hlY2tOb2RlVmFsdWVzKHJlZk5vZGU6IHN0cmluZywgcmVmQXR0cjogc3RyaW5nLCBhY3R1YWxOb2RlOiBFbGVtZW50KTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgZGF0byA9IFwiXCI7XHJcbiAgICAgICAgaWYgKGFjdHVhbE5vZGUubG9jYWxOYW1lID09IHJlZk5vZGUgJiYgYWN0dWFsTm9kZS5oYXNBdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgIGxldCBhdHRyaWJ1dGVzID0gYWN0dWFsTm9kZS5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXR0cmlidXRlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzW2luZGV4XS5uYW1lID09IHJlZkF0dHIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRvID0gYXR0cmlidXRlc1tpbmRleF0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLy8gY29uc29sZS5sb2coXCJyZWZQb2ludDogXCIgKyBhdHRyaWJ1dGVzW2luZGV4XS5uYW1lICsgXCIgIDo6IFwiICsgYXR0cmlidXRlc1tpbmRleF0udmFsdWUpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0bztcclxuICAgIH1cclxuICAgIC8qKlxyXG4qXHJcbipcclxuKiBAcHJpdmF0ZVxyXG4qIEBwYXJhbSB7RWxlbWVudH0gbm9kZUZhdGhlclxyXG4qIEBwYXJhbSB7c3RyaW5nfSByZWZBdHRyXHJcbiogQHBhcmFtIHtzdHJpbmd9IHJlZlBvaW50XHJcbiogQHBhcmFtIHtzdHJpbmd9IG5vZGVGYXRoZXIyXHJcbiogQHJldHVybiB7Kn0gIHtzdHJpbmdbXVtdfVxyXG4qIEBtZW1iZXJvZiBTYWJyZUNvbnRyb2xsZXJcclxuKi9cclxuICAgIHByaXZhdGUgR2V0RmluYWxWYWx1ZShub2RlRmF0aGVyOiBFbGVtZW50LCByZWZBdHRyOiBzdHJpbmcsIHJlZlBvaW50OiBzdHJpbmcsIG5vZGVGYXRoZXIyOiBzdHJpbmcpOiBzdHJpbmdbXVtdIHtcclxuICAgICAgICBsZXQgYXJyYXlBdHRyczogc3RyaW5nW11bXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGFycmF5QXR0cnMucHVzaChbcmVmQXR0ciwgcmVmUG9pbnRdKTtcclxuICAgICAgICBpZiAobm9kZUZhdGhlcjIgPT0gXCIqXCIpIHtcclxuICAgICAgICAgICAgYXJyYXlBdHRycy5wdXNoKFtcInNlZ3R5cGVcIiwgbm9kZUZhdGhlci5sb2NhbE5hbWVdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNoaWxkTm9kZXMgPSBub2RlRmF0aGVyLmNoaWxkTm9kZXM7XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjaGlsZE5vZGVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50X2NoaWxkTm9kZXMgPSA8RWxlbWVudD5jaGlsZE5vZGVzW2pdO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudF9jaGlsZE5vZGVzLmxvY2FsTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvY2FsTmFtZSA9IGVsZW1lbnRfY2hpbGROb2Rlcy5sb2NhbE5hbWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBlbGVtZW50X2NoaWxkTm9kZXMudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBhcnJheUF0dHJzLnB1c2goW2xvY2FsTmFtZSwgdmFsdWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZyhcIkdldEZpbmFsVmFsdWU6IFwiKTtcclxuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZyhhcnJheUF0dHJzKTtcclxuICAgICAgICByZXR1cm4gYXJyYXlBdHRycztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqXHJcbiAgICAqIEBwcml2YXRlXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBwbnJMb2NhdG9yVmFsdWVcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm5cclxuICAgICogQHBhcmFtIHtib29sZWFufSBJc1JlbW92ZU5TXHJcbiAgICAqIEByZXR1cm4geyp9ICB7Tm9kZX1cclxuICAgICogQG1lbWJlcm9mIFNhYnJlQ29udHJvbGxlclxyXG4gICAgKi9cclxuICAgIHByaXZhdGUgR2V0RWxlbWVudChwbnJMb2NhdG9yVmFsdWU6IHN0cmluZywgcGF0dGVybjogc3RyaW5nLCBJc1JlbW92ZU5TOiBib29sZWFuKTogTm9kZSB7XHJcbiAgICAgICAgbGV0IHJldHVybkVsZW1lbnQ6IE5vZGUgPSBudWxsO1xyXG4gICAgICAgIGlmIChJc1JlbW92ZU5TKSB7IHBuckxvY2F0b3JWYWx1ZSA9IGdldFNlcnZpY2UoVXRpbGl0YXJpbykuUmVtb3ZlTmFtZVNwYWNlKHBuckxvY2F0b3JWYWx1ZSk7IH1cclxuICAgICAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xyXG4gICAgICAgIHZhciBkb2MxID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhwbnJMb2NhdG9yVmFsdWUsIFwidGV4dC94bWxcIik7XHJcbiAgICAgICAgdmFyIGNoaWxkTm9kZXMgPSBkb2MxLmNoaWxkTm9kZXM7XHJcbiAgICAgICAgbGV0IGVsZW1lbnRfY2hpbGROb2RlcyA9IDxFbGVtZW50PmNoaWxkTm9kZXNbMF07ICAgIC8vZmlyc3QgbGluZSBvbiBSUyAgICAgICAgXHJcbiAgICAgICAgaWYgKGVsZW1lbnRfY2hpbGROb2Rlcy5oYXNBdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgIGxldCBhdHRyaWJ1dGVzID0gZWxlbWVudF9jaGlsZE5vZGVzLmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXR0cmlidXRlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gYXR0cmlidXRlc1tpbmRleF0ubmFtZS5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGVtcFswXSA9PSAneG1sbnMnICYmICFmb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB4bWxucyA9IGF0dHJpYnV0ZXNbaW5kZXhdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInhtbG5zOiBcIiArIHhtbG5zKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZXJOUygpOiBzdHJpbmcgeyByZXR1cm4geG1sbnM7IH1cclxuICAgICAgICB2YXIgcmVzdWx0ID0gZ2V0U2VydmljZShVdGlsaXRhcmlvKS5HZXRYUGF0aFJlc3VsdChwbnJMb2NhdG9yVmFsdWUsIHBhdHRlcm4sIHJlc29sdmVyTlMsIDApO1xyXG4gICAgICAgIC8vIHZhciByZXN1bHQgPSBnZXRTZXJ2aWNlKFV0aWxpdGFyaW8pLkdldFhQYXRoUmVzdWx0KDMsIHBuckxvY2F0b3JWYWx1ZSwgcGF0dGVybiwgcmVzb2x2ZXJOUywgMCk7XHJcbiAgICAgICAgcmV0dXJuRWxlbWVudCA9IHJlc3VsdC5pdGVyYXRlTmV4dCgpO1xyXG4gICAgICAgIHJldHVybiByZXR1cm5FbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIEFkZFJlbWFya3NBc3luYyhyZW1hcmtzOiBBcnJheTxyZW1hcms+KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3RSZW1hcmsgPSB0aGlzLmJ1aWxkUmVxdWVzdEFkZFJlbWFyayhyZW1hcmtzKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXF1ZXN0UmVtYXJrOiBcIiwgcmVxdWVzdFJlbWFyayk7XHJcblxyXG4gICAgICAgICAgICAvLyByZXF1ZXN0UmVtYXJrXHJcbiAgICAgICAgICAgIC8vICAgICAudGhlbihyZXNwID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBnZXRTZXJ2aWNlKFNhYnJlU2VydmljZSkuY2FsbFNvYXBTZXJ2aWNlQXN5bmMocmVzcCwgXCJBZGRSZW1hcmtMTFNSUVwiLCAnU0VTU0lPTicsIDEwMDAwKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAudGhlbigocmVzb2x2ZXIpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc29sdmVyKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgIC8vICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnVpbGRSZXF1ZXN0UmVzZXJ2YXRpb24oYWN0aW9uOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHV0aWxpdGFyaW9fcGF5bG9hZCA9IGdldFNlcnZpY2UoVXRpbGl0YXJpbykuR2V0UGF5TG9hZChhY3Rpb24pO1xyXG4gICAgICAgICAgICB1dGlsaXRhcmlvX3BheWxvYWQudGhlbihyc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyc3ApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkQWRkUmVtYXJrUlEobGlzdFJlbWFya3M6IEFycmF5PHJlbWFyaz4sIGFjdGlvbjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXR1cm5WYWx1ZTogc3RyaW5nID0gbnVsbDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsaXN0UmVtYXJrcyBvbiBidWlsZEFkZFJlbWFya1JRXCIsIGxpc3RSZW1hcmtzKTtcclxuICAgICAgICAgICAgbGV0IHV0aWxpdGFyaW9fID0gZ2V0U2VydmljZShVdGlsaXRhcmlvKTtcclxuICAgICAgICAgICAgdXRpbGl0YXJpb18uR2V0UGF5TG9hZChhY3Rpb24pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkb2N1bWVudCA9IHV0aWxpdGFyaW9fLlN0cmluZ1RvWG1sKHJzcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdHJpbmdUb1htbFwiLCBkb2N1bWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJSZW1hcmtJbmZvXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXN0UmVtYXJrcyAhPSBudWxsICYmIGxpc3RSZW1hcmtzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcm1rIG9mIGxpc3RSZW1hcmtzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJta1wiLCBybWspO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50X3ZhciA9IGVsZW1lbnRbMF0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlJlbWFya1wiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3Zhci5zZXRBdHRyaWJ1dGUoXCJUeXBlXCIsIHJtay5UeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChybWsuQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdmFyLnNldEF0dHJpYnV0ZShcIkNvZGVcIiwgcm1rLkNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJtay5TZWdOdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3Zhci5zZXRBdHRyaWJ1dGUoXCJTZWdtZW50TnVtYmVyXCIsIHJtay5TZWdOdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSBlbGVtZW50X3Zhci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdUZXh0JykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IHJtay5UZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gdXRpbGl0YXJpb18uRG9jdW1lbnRUb1N0cmluZyhkb2N1bWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSByZXR1cm5WYWx1ZS5yZXBsYWNlKC94bWxucz1cIlwiL2csICcnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJvciBidWlsZENyZWF0ZVJlc2VydmF0aW9uUlE6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkUmVtYXJrVXBkYXRlUlEobGlzdFJlbWFya3M6IEFycmF5PHJlbWFyaz4sIGFjdGlvbjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmV0dXJuVmFsdWU6IHN0cmluZyA9IG51bGw7XHJcbiAgICAgICAgICAgIGxldCB1dGlsaXRhcmlvXyA9IGdldFNlcnZpY2UoVXRpbGl0YXJpbyk7XHJcbiAgICAgICAgICAgIHV0aWxpdGFyaW9fLkdldFBheUxvYWQoYWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocnNwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZG9jdW1lbnQgPSB1dGlsaXRhcmlvXy5TdHJpbmdUb1htbChyc3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJSZXNlcnZhdGlvblVwZGF0ZUl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RSZW1hcmtzICE9IG51bGwgJiYgbGlzdFJlbWFya3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBybWsgb2YgbGlzdFJlbWFya3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50X3ZhciA9IGVsZW1lbnRbMF0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlJlbWFya1VwZGF0ZVwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3Zhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBybWsuSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF92YXIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcIklOVk9JQ0VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3Zhci5zZXRBdHRyaWJ1dGUoXCJvcFwiLCBcIlVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGVsZW1lbnRfdmFyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1JlbWFya1RleHQnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gcm1rLlRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB1dGlsaXRhcmlvXy5Eb2N1bWVudFRvU3RyaW5nKGRvY3VtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHJldHVyblZhbHVlLnJlcGxhY2UoL3htbG5zPVwiXCIvZywgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVycm9yIGJ1aWxkQ3JlYXRlUmVzZXJ2YXRpb25SUTpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnVpbGRSZXF1ZXN0U2FicmVDb21tYW5kKGZvcm1hdDogc3RyaW5nLCBhY3Rpb246IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmV0dXJuVmFsdWU6IHN0cmluZyA9IG51bGw7XHJcbiAgICAgICAgICAgIGxldCB1dGlsaXRhcmlvXyA9IGdldFNlcnZpY2UoVXRpbGl0YXJpbyk7XHJcbiAgICAgICAgICAgIHV0aWxpdGFyaW9fLkdldFBheUxvYWQoYWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocnNwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybWF0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRvY3VtZW50ID0gdXRpbGl0YXJpb18uU3RyaW5nVG9YbWwocnNwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkhvc3RDb21tYW5kXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50WzBdLnRleHRDb250ZW50ID0gZm9ybWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc29sdmVyIGRlc3B1ZXMgY29udmVydGlyXCIsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5pbm5lckhUTUwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHV0aWxpdGFyaW9fLkRvY3VtZW50VG9TdHJpbmcoZG9jdW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnVpbGRSZXF1ZXN0U2VuZENvbW1hbmQoZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNZXRvZG8gICAgLy9lc3RydWN0dXJhIGRlIHJlcXVlc3QgZGVsIHNhYnJlIGNvbW1hbmQgIFxyXG4gICAgICAgIGxldCByZXF1ZXN0OiBzdHJpbmcgPSAnPFNhYnJlQ29tbWFuZExMU1JRIHhtbG5zPVwiaHR0cDovL3dlYnNlcnZpY2VzLnNhYnJlLmNvbS9zYWJyZVhNTC8yMDAzLzA3XCIgeG1sbnM6eHM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYVwiIHhtbG5zOnhzaT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXCIgVGltZVN0YW1wPVwiMjAxNC0wMy0wNFQxNDowMDowMFwiIFZlcnNpb249XCIxLjguMVwiPicgK1xyXG4gICAgICAgICAgICAnPFJlcXVlc3QgT3V0cHV0PVwiU0NSRUVOXCIgQ0RBVEE9XCJmYWxzZVwiPjxIb3N0Q29tbWFuZD4nICsgZm9ybWF0ICsgJzwvSG9zdENvbW1hbmQ+PC9SZXF1ZXN0PicgK1xyXG4gICAgICAgICAgICAnPC9TYWJyZUNvbW1hbmRMTFNSUT4nO1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnVpbGRHZXRSZXNlcnZhdGlvblJRKHBucjogc3RyaW5nLCBhY3Rpb246IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmV0dXJuVmFsdWU6IHN0cmluZyA9IG51bGw7XHJcbiAgICAgICAgICAgIGxldCB1dGlsaXRhcmlvXyA9IGdldFNlcnZpY2UoVXRpbGl0YXJpbyk7XHJcbiAgICAgICAgICAgIHV0aWxpdGFyaW9fLkdldFBheUxvYWQoYWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocnNwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZG9jdW1lbnQgPSB1dGlsaXRhcmlvXy5TdHJpbmdUb1htbChyc3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJMb2NhdG9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRbMF0udGV4dENvbnRlbnQgPSBwbnI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB1dGlsaXRhcmlvXy5Eb2N1bWVudFRvU3RyaW5nKGRvY3VtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHJldHVyblZhbHVlLnJlcGxhY2UoL3htbG5zPVwiXCIvZywgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5WYWx1ZVwiLHJldHVyblZhbHVlKTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJvciBidWlsZENyZWF0ZVJlc2VydmF0aW9uUlE6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL3RvIHZhbGlkYXRlIGV2ZXJ5IGlucHV0IGFuZCBlcnJvciBpZiBuZWVkZWRcclxuICAgIElucHV0VmFsaWRhdG9yKGlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlkIHF1ZSB2YSBhIHZhbG9yYXIgc2kgZXN0YSBlbXB0eTogXCIsaWQpO1xyXG5cclxuICAgICAgICBsZXQgdmFsdWUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKS52YWx1ZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInZhbHVlOiBcIiwgdmFsdWUpOyAgICAgICAgXHJcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQgKyBcIkRpdlwiKSkuY2xhc3NMaXN0LmFkZChcImhhcy1lcnJvclwiKTtcclxuICAgICAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkICsgXCJFcnJvclwiKSkuaW5uZXJUZXh0ID0gXCJGaWVsZCBjYW5ub3QgYmUgZW1wdHkgb3IgYmxhbmtcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCArIFwiRGl2XCIpKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGFzLWVycm9yXCIpO1xyXG4gICAgICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQgKyBcIkVycm9yXCIpKS5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogQXV0by1nZW5lcmF0ZWQgZmlsZS4gICAgICAgICAgICAgICovXG4vKiBEbyBub3QgbW9kaWZ5IGl0LiAgICAgICAgICAgICAgICAgKi9cbi8qIFlvdSBtYXkgcmVtb3ZlIGl0LiAgICAgICAgICAgICAgICAqL1xuLyogWW91IG1heSBjb21taXQgaXQuICAgICAgICAgICAgICAgICovXG4vKiBZb3UgbWF5IHB1c2ggaXQuICAgICAgICAgICAgICAgICAgKi9cbi8qIFJlbW92ZSBpdCBpZiBtb2R1bGUgbmFtZSBjaGFuZ2VkLiAqL1xuLyogZXNsaW50OmRpc2FibGUgICAgICAgICAgICAgICAgICAgICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuaW1wb3J0IHtNYWlufSBmcm9tICcuL01haW4nO1xuaW1wb3J0IHtJTW9kdWxlTWFuaWZlc3R9IGZyb20gJ3NhYnJlLW5ndi1jb3JlL21vZHVsZXMvSU1vZHVsZU1hbmlmZXN0JztcbmltcG9ydCB7Y29udGV4dH0gZnJvbSAnLi9Db250ZXh0JztcblxuLyoqXG4gKiAgQXV0b2dlbmVyYXRlZCBjbGFzcyByZXByZXNlbnRpbmcgbW9kdWxlIGluIHJ1bnRpbWUuXG4gKiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2R1bGVfY29tX2ludGVybm92YV9ndGNwYXltZW50X3dlYl9tb2R1bGUgZXh0ZW5kcyBNYWluIHtcbiAgICBjb25zdHJ1Y3RvcihtYW5pZmVzdDogSU1vZHVsZU1hbmlmZXN0KSB7XG4gICAgICAgIHN1cGVyKG1hbmlmZXN0KTtcbiAgICAgICAgY29udGV4dC5zZXRNb2R1bGUodGhpcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnc2FicmUtbmd2LWNvcmUvbW9kdWxlcy9Nb2R1bGUnO1xuaW1wb3J0IHsgUmVkQXBwU2lkZVBhbmVsQ29uZmlnIH0gZnJvbSAnc2FicmUtbmd2LXhwL2NvbmZpZ3MvUmVkQXBwU2lkZVBhbmVsQ29uZmlnJztcbmltcG9ydCB7IEV4dGVuc2lvblBvaW50U2VydmljZSB9IGZyb20gJ3NhYnJlLW5ndi14cC9zZXJ2aWNlcy9FeHRlbnNpb25Qb2ludFNlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0U2VydmljZSwgcmVnaXN0ZXJTZXJ2aWNlIH0gZnJvbSBcIi4vQ29udGV4dFwiO1xuaW1wb3J0IHsgUmVkQXBwU2lkZVBhbmVsQnV0dG9uIH0gZnJvbSAnc2FicmUtbmd2LXJlZEFwcFNpZGVQYW5lbC9tb2RlbHMvUmVkQXBwU2lkZVBhbmVsQnV0dG9uJztcbmltcG9ydCB7IENvbW1hbmRNZXNzYWdlUmVzZXJ2YXRpb25ScyB9IGZyb20gJ3NhYnJlLW5ndi1wb3MtY2RtL3Jlc2VydmF0aW9uJztcbmltcG9ydCB7IElSZXNlcnZhdGlvblNlcnZpY2UgfSBmcm9tICdzYWJyZS1uZ3YtcmVzZXJ2YXRpb24vc2VydmljZXMvSVJlc2VydmF0aW9uU2VydmljZSc7XG5pbXBvcnQgeyBMYXllclNlcnZpY2UgfSBmcm9tIFwic2FicmUtbmd2LWNvcmUvc2VydmljZXMvTGF5ZXJTZXJ2aWNlXCI7XG5pbXBvcnQgeyBSZXN0TW9kZWwgfSBmcm9tICcuL21vZGVsL1Jlc3RNb2RlbCc7XG5pbXBvcnQgeyBHdGNfUGF5bWVudCB9IGZyb20gJy4vdmlld3MvR3RjX1BheW1lbnQnO1xuaW1wb3J0IHsgU2FicmVDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy9TYWJyZUNvbnRyb2xsZXInO1xuaW1wb3J0IHsgVXRpbGl0YXJpbyB9IGZyb20gJy4vY29tbW9uL1V0aWxpdGFyaW8nO1xuaW1wb3J0IHsgRXh0ZXJuYWxTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9FeHRlcm5hbFNlcnZpY2UnO1xuaW1wb3J0IHsgU2FicmVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9TYWJyZVNlcnZpY2UnO1xuXG5cbmV4cG9ydCBjbGFzcyBNYWluIGV4dGVuZHMgTW9kdWxlIHtcbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICBzdXBlci5pbml0KCk7ICAgIFxuICAgICAgICByZWdpc3RlclNlcnZpY2UoU2FicmVDb250cm9sbGVyKTtcbiAgICAgICAgcmVnaXN0ZXJTZXJ2aWNlKFV0aWxpdGFyaW8pO1xuICAgICAgICByZWdpc3RlclNlcnZpY2UoRXh0ZXJuYWxTZXJ2aWNlKTtcbiAgICAgICAgcmVnaXN0ZXJTZXJ2aWNlKFNhYnJlU2VydmljZSk7XG4gICAgICAgIGNvbnN0IHhwID0gZ2V0U2VydmljZShFeHRlbnNpb25Qb2ludFNlcnZpY2UpO1xuXG4gICAgICAgIGNvbnN0IHNpZGVwYW5lbENvbmZpZyA9IG5ldyBSZWRBcHBTaWRlUGFuZWxDb25maWcoW1xuICAgICAgICAgICAgbmV3IFJlZEFwcFNpZGVQYW5lbEJ1dHRvbignR1RDIFVLIFBheW1lbnQgUHJvY2VzcycsICdidG4gYnRuLXNlY29uZGFyeSBzaWRlLXBhbmVsLWJ1dHRvbiByZWRhcHAtd2ViLXJlc3QgcmVkYXBwLXdlYi1yZXN0LWludGVybmFsJywgKCkgPT4gdGhpcy5vcGVuTW9kYWxXaXRoUmVzdCgpKSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgeHAuYWRkQ29uZmlnKCdyZWRBcHBTaWRlUGFuZWwnLCBzaWRlcGFuZWxDb25maWcpO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGFzeW5jIG9wZW5Nb2RhbFdpdGhSZXN0KCkge1xuICAgICAgICBjb25zdCByZXNlcnZhdGlvbjogQ29tbWFuZE1lc3NhZ2VSZXNlcnZhdGlvblJzID0gYXdhaXQgZ2V0U2VydmljZShJUmVzZXJ2YXRpb25TZXJ2aWNlKS5nZXRSZXNlcnZhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IHJlc3RNb2RhbE9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ0dUQyBVSyBQYXltZW50IFByb2Nlc3MnLFxuICAgICAgICAgICAgYWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnYXBwLmNvbW1vbi52aWV3cy5CdXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uOiAnQ2FuY2VsJyxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uTmFtZTogJ2NhbmNlbCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzZWNvbmRhcnknXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2FwcC5jb21tb24udmlld3MuQnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2FwdGlvbjogXCJDb250aW51ZVwiLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25OYW1lOiAnbmV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcblxuICAgICAgICBnZXRTZXJ2aWNlKExheWVyU2VydmljZSkuc2hvd0luTW9kYWwoXG4gICAgICAgICAgICBuZXcgR3RjX1BheW1lbnQoeyBtb2RlbDogbmV3IFJlc3RNb2RlbCgpIH0sIHJlc2VydmF0aW9uKSxcbiAgICAgICAgICAgIHJlc3RNb2RhbE9wdGlvbnMsXG4gICAgICAgICAgICB7IGRpc3BsYXk6ICdhcmVhVmlldycgfSk7XG4gICAgfVxuXG59XG4iLG51bGwsImV4cG9ydCBjbGFzcyBjY0RhdGEge1xyXG4gICAgY2FyZE51bWJlcjpzdHJpbmc7XHJcbiAgICBjYXJkTWFza2VkOnN0cmluZztcclxuICAgIGxhc3Q0OnN0cmluZztcclxuICAgIGNvZGU6c3RyaW5nO1xyXG4gICAgeWVhcjogc3RyaW5nO1xyXG4gICAgbW9udGg6IHN0cmluZztcclxufVxyXG4iLCJleHBvcnQgY2xhc3MgcHFGYXJlIHtcclxuICAgIGl0ZW06c3RyaW5nO1xyXG4gICAgY3VycjpzdHJpbmc7XHJcbiAgICB0b3RhbDpudW1iZXI7XHJcbiAgICBzdWJ0b3RhbDpudW1iZXI7XHJcbiAgICB0YXhlczpudW1iZXI7XHJcbn0iLCJleHBvcnQgY2xhc3MgcmVtYXJrIHtcclxuICAgIFR5cGU6c3RyaW5nO1xyXG4gICAgVGV4dDpzdHJpbmc7XHJcbiAgICBDb2RlOnN0cmluZztcclxuICAgIElkOnN0cmluZztcclxuICAgIFNlZ051bTpzdHJpbmc7XHJcbn0iLCJpbXBvcnQge0Fic3RyYWN0TW9kZWx9IGZyb20gXCJzYWJyZS1uZ3YtYXBwL2FwcC9BYnN0cmFjdE1vZGVsXCI7XG5pbXBvcnQge0F1dGhUb2tlblR5cGV9IGZyb20gJ3NhYnJlLW5ndi1hcHAvYXBwL3NlcnZpY2VzL2ltcGwvQXV0aFRva2VuVHlwZSc7XG5pbXBvcnQge2dldFNlcnZpY2V9IGZyb20gXCIuLi9Db250ZXh0XCI7XG5pbXBvcnQge0h0dHBNZXRob2R9IGZyb20gJ3NhYnJlLW5ndi1hcHAvYXBwL3NlcnZpY2VzL2ltcGwvSHR0cE1ldGhvZCc7XG5pbXBvcnQge1Jlc3RBcGlTZXJ2aWNlfSBmcm9tIFwic2FicmUtbmd2LWNvbW11bmljYXRpb24vc2VydmljZXMvUmVzdEFwaVNlcnZpY2VcIjtcbmltcG9ydCB7UmVzdFJlc3BvbnNlfSBmcm9tIFwic2FicmUtbmd2LWNvbW11bmljYXRpb24vaW50ZXJmYWNlcy9SZXN0UmVzcG9uc2VcIjtcblxuZXhwb3J0IGNsYXNzIFJlc3RNb2RlbCBleHRlbmRzIEFic3RyYWN0TW9kZWwge1xuXG4gICAgc2VuZFJlc3RSZXF1ZXN0KHVybDogc3RyaW5nLCBodHRwTWV0aG9kOiBIdHRwTWV0aG9kLCBhdXRoVG9rZW5UeXBlOiBBdXRoVG9rZW5UeXBlLCBwYXlsb2FkOiBzdHJpbmcsIGhlYWRlcnM6IHN0cmluZyk6IFByb21pc2U8UmVzdFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiBnZXRTZXJ2aWNlKFJlc3RBcGlTZXJ2aWNlKS5zZW5kKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGh0dHBNZXRob2Q6IGh0dHBNZXRob2QsXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgYXV0aFRva2VuVHlwZTogYXV0aFRva2VuVHlwZSxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IElFeHRlcm5hbFNlcnZpY2UgfSBmcm9tIFwiLi9JRXh0ZXJuYWxTZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBBYnN0cmFjdFNlcnZpY2UgfSBmcm9tIFwic2FicmUtbmd2LWFwcC9hcHAvc2VydmljZXMvaW1wbC9BYnN0cmFjdFNlcnZpY2VcIjtcclxuZXhwb3J0IGNsYXNzIEV4dGVybmFsU2VydmljZSBleHRlbmRzIEFic3RyYWN0U2VydmljZSBpbXBsZW1lbnRzIElFeHRlcm5hbFNlcnZpY2Uge1xyXG4gICAgc3RhdGljIFNFUlZJQ0VfTkFNRSA6IHN0cmluZyA9IFwiY29tLWludGVybm92YS1ndGNwYXltZW50LXdlYi1tb2R1bGUtRXh0ZXJuYWxTZXJ2aWNlXCI7XHJcbiAgICBzZW5kUmVxdWVzdChtZXRob2QsIHVybCk6IFByb21pc2U8c3RyaW5nPiAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsKTtcclxuICAgICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDApIHtcclxuICAgICAgICAgICAgICByZXNvbHZlKHhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmVqZWN0KHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJlamVjdCh7XHJcbiAgICAgICAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcclxuICAgICAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbn0iLCJleHBvcnQgaW50ZXJmYWNlIElFeHRlcm5hbFNlcnZpY2Uge1xyXG4gICAgc2VuZFJlcXVlc3QobWV0aG9kLCB1cmwpOiBQcm9taXNlPHN0cmluZz47XHJcbn0iLCJpbXBvcnQgeyBBdXRoVG9rZW5UeXBlIH0gZnJvbSBcInNhYnJlLW5ndi1hcHAvYXBwL3NlcnZpY2VzL2ltcGwvQXV0aFRva2VuVHlwZVwiO1xyXG5pbXBvcnQgeyBSZXN0UmVzcG9uc2UgfSBmcm9tIFwic2FicmUtbmd2LWNvbW11bmljYXRpb24vaW50ZXJmYWNlcy9SZXN0UmVzcG9uc2VcIjtcclxuaW1wb3J0IHsgSHR0cE1ldGhvZCB9IGZyb20gXCJzYWJyZS1uZ3YtYXBwL2FwcC9zZXJ2aWNlcy9pbXBsL0h0dHBNZXRob2RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNhYnJlU2VydmljZSB7XHJcbiAgICBjYWxsU29hcFNlcnZpY2VBc3luYyhyZXF1ZXN0OnN0cmluZywgYWN0aW9uQ29kZTpzdHJpbmcsIGF1dGhUb2tlblR5cGU6IEF1dGhUb2tlblR5cGUsIHRpbWVvdXQ6bnVtYmVyKSA6IFByb21pc2U8c3RyaW5nPjtcclxuXHJcbiAgICBjYWxsUmVzdFNlcnZpY2VBc3luYyh1cmw6c3RyaW5nLCBodHRwTWV0aG9kOkh0dHBNZXRob2QsIGF1dGhUb2tlblR5cGU6QXV0aFRva2VuVHlwZSwgcGF5bG9hZDpzdHJpbmcsIGhlYWRlcnM6c3RyaW5nICk6IFByb21pc2U8UmVzdFJlc3BvbnNlPjtcclxufSIsImltcG9ydCB7IElTYWJyZVNlcnZpY2UgfSBmcm9tIFwiLi9JU2FicmVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFic3RyYWN0U2VydmljZSB9IGZyb20gXCJzYWJyZS1uZ3YtYXBwL2FwcC9zZXJ2aWNlcy9pbXBsL0Fic3RyYWN0U2VydmljZVwiO1xyXG5pbXBvcnQgeyBBdXRoVG9rZW5UeXBlIH0gZnJvbSBcInNhYnJlLW5ndi1hcHAvYXBwL3NlcnZpY2VzL2ltcGwvQXV0aFRva2VuVHlwZVwiO1xyXG5pbXBvcnQgeyBJU29hcEFwaVNlcnZpY2UgfSBmcm9tIFwic2FicmUtbmd2LWNvbW11bmljYXRpb24vaW50ZXJmYWNlcy9JU29hcEFwaVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgZ2V0U2VydmljZSB9IGZyb20gXCIuLi9Db250ZXh0XCI7XHJcbmltcG9ydMKge8KgU3J3U3luY0FwacKgfcKgZnJvbcKgXCJzYWJyZS1uZ3YtYXBwL2FwcC9zZXJ2aWNlcy9pbXBsL1Nyd1N5bmNBcGlcIjtcclxuaW1wb3J0wqB7wqBTcndBc3luY0FwacKgfcKgZnJvbcKgXCJzYWJyZS1uZ3YtYXBwL2FwcC9zZXJ2aWNlcy9pbXBsL1Nyd0FzeW5jQXBpXCI7XHJcbmltcG9ydCB7IEh0dHBNZXRob2QgfSBmcm9tIFwic2FicmUtbmd2LWFwcC9hcHAvc2VydmljZXMvaW1wbC9IdHRwTWV0aG9kXCI7XHJcbmltcG9ydCB7IFJlc3RSZXNwb25zZSB9IGZyb20gXCJzYWJyZS1uZ3YtY29tbXVuaWNhdGlvbi9pbnRlcmZhY2VzL1Jlc3RSZXNwb25zZVwiO1xyXG5pbXBvcnQgeyBSZXN0QXBpU2VydmljZSB9IGZyb20gXCJzYWJyZS1uZ3YtY29tbXVuaWNhdGlvbi9zZXJ2aWNlcy9SZXN0QXBpU2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNhYnJlU2VydmljZSBleHRlbmRzIEFic3RyYWN0U2VydmljZSBpbXBsZW1lbnRzIElTYWJyZVNlcnZpY2Uge1xyXG4gICAgc3RhdGljIFNFUlZJQ0VfTkFNRTogc3RyaW5nID0gXCJjb20taW50ZXJub3ZhLWd0Y3BheW1lbnQtd2ViLW1vZHVsZS1TYWJyZVNlcnZpY2VcIjtcclxuXHJcbiAgICBjYWxsU29hcFNlcnZpY2VBc3luYyhwYXlsb2FkOiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nLCBhdXRoVG9rZW5UeXBlOiBBdXRoVG9rZW5UeXBlLCB0aW1lb3V0OiBudW1iZXIpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bnNhZmUtYW55XHJcbiAgICAgICAgICAgIGxldCBzb2FwU3ZjOiBJU29hcEFwaVNlcnZpY2UgPSBnZXRTZXJ2aWNlKElTb2FwQXBpU2VydmljZSk7XHJcbiAgICAgICAgICAgIGxldCBycV8gPSB7IGFjdGlvbiwgcGF5bG9hZCwgYXV0aFRva2VuVHlwZSwgdGltZW91dCB9O1xyXG5cclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bnNhZmUtYW55XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicnFfOlwiLHJxXyk7XHJcbiAgICAgICAgICAgIHNvYXBTdmMuY2FsbFN3cyhycV8pICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFzeW5jOiByZXNwb25zZVwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bnNhZmUtYW55XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbGxTb2FwU2VydmljZUFzeW5jIGVycm9yOiBcIixlcnJvcik7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2FsbFNvYXBTZXJ2aWNlU3luYyhzdmNSUTogc3RyaW5nLCBzdmNBY3Rpb25Db2RlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBzb2FwU3ZjID0gZ2V0U2VydmljZShTcndTeW5jQXBpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNvYXBTdmM6XCIsc29hcFN2Yyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gXCJcIjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHNvYXBTdmMuc3dzKHN2Y1JRLCBzdmNBY3Rpb25Db2RlKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzb2FwU3ZjLXJlc3Bvc2U6IFwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbFJlc3RTZXJ2aWNlQXN5bmModXJsOiBzdHJpbmcsIGh0dHBNZXRob2Q6IEh0dHBNZXRob2QsIGF1dGhUb2tlblR5cGU6IEF1dGhUb2tlblR5cGUsIHBheWxvYWQ6IHN0cmluZywgaGVhZGVyczogc3RyaW5nKTogUHJvbWlzZTxSZXN0UmVzcG9uc2U+IHtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVuc2FmZS1hbnlcclxuICAgICAgICByZXR1cm4gZ2V0U2VydmljZShSZXN0QXBpU2VydmljZSkuc2VuZChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaHR0cE1ldGhvZDogaHR0cE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgYXV0aFRva2VuVHlwZTogYXV0aFRva2VuVHlwZSxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxufSIsImltcG9ydCB7IEFic3RyYWN0VmlldyB9IGZyb20gXCJzYWJyZS1uZ3YtYXBwL2FwcC9BYnN0cmFjdFZpZXdcIjtcclxuaW1wb3J0IHsgTGF5ZXJTZXJ2aWNlIH0gZnJvbSBcInNhYnJlLW5ndi1jb3JlL3NlcnZpY2VzL0xheWVyU2VydmljZVwiO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gXCJzYWJyZS1uZ3YtY29yZS9kZWNvcmF0b3JzL2NsYXNzZXMvdmlldy9UZW1wbGF0ZVwiO1xyXG5pbXBvcnQgeyBTYWJyZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvU2FicmVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHBxRmFyZSB9IGZyb20gXCIuLi9tb2RlbC9wcUZhcmVcIjtcclxuaW1wb3J0IHsgY2NEYXRhIH0gZnJvbSBcIi4uL21vZGVsL2NjRGF0YVwiO1xyXG5pbXBvcnQgeyBJQXJlYVNlcnZpY2UgfSBmcm9tICdzYWJyZS1uZ3YtYXBwL2FwcC9zZXJ2aWNlcy9pbXBsL0lBcmVhU2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxpdGFyaW8gfSBmcm9tIFwiLi4vY29tbW9uL1V0aWxpdGFyaW9cIjtcclxuaW1wb3J0IHsgQWJzdHJhY3RBY3Rpb25PcHRpb25zIH0gZnJvbSBcInNhYnJlLW5ndi1hcHAvYXBwL2NvbW1vbi92aWV3cy9BYnN0cmFjdEFjdGlvbk9wdGlvbnNcIjtcclxuaW1wb3J0IHsgU2FicmVDb250cm9sbGVyIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL1NhYnJlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBBYnN0cmFjdFZpZXdPcHRpb25zIH0gZnJvbSAnc2FicmUtbmd2LWFwcC9hcHAvQWJzdHJhY3RWaWV3T3B0aW9ucyc7XHJcbmltcG9ydCB7IENvbW1hbmRNZXNzYWdlUmVzZXJ2YXRpb25ScyB9IGZyb20gJ3NhYnJlLW5ndi1wb3MtY2RtL3Jlc2VydmF0aW9uJztcclxuaW1wb3J0IHsgUmVzdEFwaVNlcnZpY2UgfSBmcm9tIFwic2FicmUtbmd2LWNvbW11bmljYXRpb24vc2VydmljZXMvUmVzdEFwaVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQXV0aFRva2VuVHlwZSB9IGZyb20gXCJzYWJyZS1uZ3YtYXBwL2FwcC9zZXJ2aWNlcy9pbXBsL0F1dGhUb2tlblR5cGVcIjtcclxuaW1wb3J0IHsgSVNvYXBBcGlTZXJ2aWNlIH0gZnJvbSBcInNhYnJlLW5ndi1jb21tdW5pY2F0aW9uL2ludGVyZmFjZXMvSVNvYXBBcGlTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEh0dHBNZXRob2QgfSBmcm9tIFwic2FicmUtbmd2LWFwcC9hcHAvc2VydmljZXMvaW1wbC9IdHRwTWV0aG9kXCI7XHJcbmltcG9ydCB7IFJlc3RNb2RlbCB9IGZyb20gXCIuLi9tb2RlbC9SZXN0TW9kZWxcIjtcclxuaW1wb3J0IHsgZ2V0U2VydmljZSB9IGZyb20gXCIuLi9Db250ZXh0XCI7XHJcbmltcG9ydCAqIGFzIFhNTDJKUyBmcm9tIFwieG1sMmpzXCI7XHJcbmltcG9ydCB7IHJlbWFyayB9IGZyb20gXCIuLi9tb2RlbC9yZW1hcmtcIjtcclxuXHJcbkBUZW1wbGF0ZSgnY29tLWludGVybm92YS1ndGNwYXltZW50LXdlYi1tb2R1bGU6Q2hlY2tUb3RhbCcpXHJcbmV4cG9ydCBjbGFzcyBDaGVja1RvdGFsIGV4dGVuZHMgQWJzdHJhY3RWaWV3PFJlc3RNb2RlbD4ge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucz86IEFic3RyYWN0Vmlld09wdGlvbnMsIHBhY2s/OiB7fSkge1xyXG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc0RhdGEocGFjayk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicm1rc1wiLCB0aGlzLnJta3MpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlUm1rc1wiLCB0aGlzLmNyZWF0ZVJta3MpO1xyXG5cclxuICAgICAgICB0aGlzLmdldE1vZGVsKCkuc2V0KCd0b3RhbCcsIHBhY2tbJ3RvdGFsJ10pO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcm1rczogcmVtYXJrW10gPSBbXTtcclxuICAgIHB1YmxpYyBjcmVhdGVSbWtzOiByZW1hcmtbXSA9IFtdO1xyXG5cclxuICAgIGluaXRpYWxpemUob3B0aW9uczogQWJzdHJhY3RBY3Rpb25PcHRpb25zKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZShvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9jZXNzRGF0YShwYWNrPzoge30pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJta3MgPSBwYWNrWydVcGRhdGVSbWsnXTtcclxuICAgICAgICBsZXQgb3B0ID0gcGFja1snb3B0aW9uJ107XHJcbiAgICAgICAgbGV0IHJta0NtID0gdGhpcy5ybWtzLmZpbHRlcih4ID0+IHguQ29kZSA9PSBcIkNNXCIpWzBdLlRleHQgPSBcIkNNLVwiICsgcGFja1snY2NDb2RlJ10gKyBwYWNrWydjYXJkNCddICsgXCIvXCIgKyBwYWNrWydleHBNb250aCddICsgcGFja1snZXhwWWVhciddICsgXCIvKlwiO1xyXG4gICAgICAgIGxldCBybWtQYXkgPSB0aGlzLnJta3MuZmlsdGVyKHggPT4geC5Db2RlID09IFwiUEFZXCIpWzBdLlRleHQgPSBcIlBBWU1FTlQvMTIzNDU2L1wiICsgcGFja1sncmVmSWQnXSArIFwiL1wiICsgcGFja1sndG90YWwnXTtcclxuICAgICAgICAvLyA1SC1QQVlNRU5UL0EtMTIzNDU2L09TVUlDSTIzMDIyNy8xNjcyLjgwL1ZJMTExMVxyXG4gICAgICAgIC8vIDVILU0xMTAwLjAwL1MxNjAuMDAvVDM2Mi44MC9BNTAuMDAvVFQxNjcyLjgwXHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVJtayhcIlBBWU1FTlQvXCIrIG9wdCArIFwiMTIzNDU2L1wiICsgcGFja1sncmVmSWQnXSArIFwiL1wiICsgcGFja1sndG90YWwnXSArIFwiL1wiICsgcGFja1snY2NDb2RlJ10gKyBwYWNrWydjYXJkNCddKTtcclxuICAgICAgICBsZXQgdGV4dCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHBhY2tbJ21hcmtVcEZlZSddKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSBcIk1cIiArIHBhY2tbJ21hcmtVcEZlZSddXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYWNrWydmZWUnXSkge1xyXG4gICAgICAgICAgICB0ZXh0ID0gdGV4dCArIFwiL1NcIiArIHBhY2tbJ2ZlZSddXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYWNrWydwcUFtdCddKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSB0ZXh0ICsgXCIvVFwiICsgcGFja1sncHFBbXQnXVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFja1snYWRkaXRpb25hbCddKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSB0ZXh0ICsgXCIvQVwiICsgcGFja1snYWRkaXRpb25hbCddXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYWNrWyd0b3RhbCddKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSB0ZXh0ICsgXCIvVFRcIiArIHBhY2tbJ3RvdGFsJ11cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVJtayh0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZWxmTmV4dEFjdGlvbigpIHtcclxuXHJcbiAgICAgICAgY29uc3QgYXJlYVNlcnZpY2U6IElBcmVhU2VydmljZSA9IGdldFNlcnZpY2UoSUFyZWFTZXJ2aWNlKTtcclxuICAgICAgICBsZXQgZ2V0cmVzZXJ2YXRpb25wcm9taXNlID0gZ2V0U2VydmljZShTYWJyZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0cmVzZXJ2YXRpb25wcm9taXNlXCIsIGdldHJlc2VydmF0aW9ucHJvbWlzZSk7XHJcblxyXG4gICAgICAgIGdldHJlc2VydmF0aW9ucHJvbWlzZS5SZW1hcmtVcGRhdGUodGhpcy5ybWtzKVxyXG4gICAgICAgICAgICAudGhlbihyc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSbWtzIHRvIHVwZGF0ZVwiLCB0aGlzLnJta3MpO1xyXG4gICAgICAgICAgICAgICAgZ2V0cmVzZXJ2YXRpb25wcm9taXNlLlNlbmRDb21tYW5kTWVzc2FnZShcIiouXCIsIHRydWUsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocnNwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZW1hcmtzIGJlZW4gZGlzcGxheWVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRyZXNlcnZhdGlvbnByb21pc2UuYnVpbGRSZXF1ZXN0QWRkUmVtYXJrKHRoaXMuY3JlYXRlUm1rcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJlYVNlcnZpY2Uuc2hvd0Jhbm5lcignU3VjY2VzcycsIFwiUmVtYXJrcyB3ZXJlIGFkZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldHJlc2VydmF0aW9ucHJvbWlzZS5TZW5kQ29tbWFuZE1lc3NhZ2UoXCIqUDVIXCIsIHRydWUsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlbWFya3MgYmVlbiBkaXNwbGF5ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBhcmVhU2VydmljZS5zaG93QmFubmVyKCdTdWNjZXNzJywgXCJSZW1hcmtzIHdlcmUgdXBkYXRlZFwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBnZXRTZXJ2aWNlKExheWVyU2VydmljZSkuY2xlYXJMYXllcigpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgYWN0aW9uOiBzdHJpbmcgPSB0aGlzLiQoJy5hY3Rpb24tZmllbGQnKS5maW5kKCcuYWN0aW9uJykudmFsKCk7XHJcbiAgICAgICAgY29uc3QgYXV0aFRva2VuVHlwZTogQXV0aFRva2VuVHlwZSA9IHRoaXMuJCgnLmF1dGhUb2tlblR5cGUtZmllbGQnKS5maW5kKCcuYXV0aFRva2VuVHlwZScpLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVvdXQ6IG51bWJlciA9IHRoaXMuJCgnLnRpbWVvdXQtZmllbGQnKS5maW5kKCcudGltZW91dCcpLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IHBheWxvYWQ6IHN0cmluZyA9IHRoaXMuJCgnLnBheWxvYWQtZmllbGQnKS5maW5kKCcucGF5bG9hZCcpLnZhbCgpO1xyXG5cclxuICAgICAgICB0aGlzLiQoJy5yZXNwb25zZScpLnZhbChcIlwiKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc29hcEFwaTogSVNvYXBBcGlTZXJ2aWNlID0gZ2V0U2VydmljZShJU29hcEFwaVNlcnZpY2UpO1xyXG5cclxuICAgICAgICBzb2FwQXBpLmNhbGxTd3Moe1xyXG4gICAgICAgICAgICBhY3Rpb24sXHJcbiAgICAgICAgICAgIHBheWxvYWQsXHJcbiAgICAgICAgICAgIGF1dGhUb2tlblR5cGUsXHJcbiAgICAgICAgICAgIHRpbWVvdXRcclxuICAgICAgICB9KS50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZVZhbHVlID0gcmVzcG9uc2UuZXJyb3JDb2RlID8gcmVzcG9uc2UgOiBhd2FpdCB0aGlzLnBhcnNlWG1sMkpzKHJlc3BvbnNlLnZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy4kKCcucmVzcG9uc2UnKS52YWwoSlNPTi5zdHJpbmdpZnkocmVzcG9uc2VWYWx1ZSwgbnVsbCwgMikpO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiQoJy5yZXNwb25zZScpLnZhbChlcnJvcik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBsZXQgZ2V0cmVzZXJ2YXRpb25wcm9taXNlID0gZ2V0U2VydmljZShTYWJyZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIC8vIGdldHJlc2VydmF0aW9ucHJvbWlzZS5idWlsZFJlcXVlc3RBZGRSZW1hcmsodGhpcy5ybWtzKVxyXG4gICAgICAgIC8vICAgICAudGhlbihyc3AgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJyc3A6XCIscnNwKTtcclxuXHJcbiAgICAgICAgLy8gICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICAgICAgYXJlYVNlcnZpY2Uuc2hvd0Jhbm5lcignU3VjY2VzcycsICdSZW1hcmtzIHdlcmUgYWRkZWQhOiAnICsgdGhpcy5hZGZsZXhSZWYpO1xyXG4gICAgICAgIGdldFNlcnZpY2UoTGF5ZXJTZXJ2aWNlKS5jbGVhckxheWVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcGFyc2VYbWwySnMocmVzcG9uc2VWYWx1ZTogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgWE1MMkpTLnBhcnNlU3RyaW5nKHJlc3BvbnNlVmFsdWUsIChlcnIsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlUm1rKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBybWsgPSBuZXcgcmVtYXJrO1xyXG4gICAgICAgIHJtay5UeXBlID0gXCJIaXN0b3JpY2FsXCI7XHJcbiAgICAgICAgcm1rLlRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUm1rcy5wdXNoKHJtayk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEFic3RyYWN0VmlldyB9IGZyb20gXCJzYWJyZS1uZ3YtYXBwL2FwcC9BYnN0cmFjdFZpZXdcIjtcbmltcG9ydCB7IExheWVyU2VydmljZSB9IGZyb20gXCJzYWJyZS1uZ3YtY29yZS9zZXJ2aWNlcy9MYXllclNlcnZpY2VcIjtcbmltcG9ydCB7IFRlbXBsYXRlIH0gZnJvbSBcInNhYnJlLW5ndi1jb3JlL2RlY29yYXRvcnMvY2xhc3Nlcy92aWV3L1RlbXBsYXRlXCI7XG5pbXBvcnQgeyBwcUZhcmUgfSBmcm9tIFwiLi4vbW9kZWwvcHFGYXJlXCI7XG5pbXBvcnQgeyBjY0RhdGEgfSBmcm9tIFwiLi4vbW9kZWwvY2NEYXRhXCI7XG5pbXBvcnQgeyBJQXJlYVNlcnZpY2UgfSBmcm9tICdzYWJyZS1uZ3YtYXBwL2FwcC9zZXJ2aWNlcy9pbXBsL0lBcmVhU2VydmljZSc7XG5pbXBvcnQgeyBBYnN0cmFjdEFjdGlvbk9wdGlvbnMgfSBmcm9tIFwic2FicmUtbmd2LWFwcC9hcHAvY29tbW9uL3ZpZXdzL0Fic3RyYWN0QWN0aW9uT3B0aW9uc1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RWaWV3T3B0aW9ucyB9IGZyb20gJ3NhYnJlLW5ndi1hcHAvYXBwL0Fic3RyYWN0Vmlld09wdGlvbnMnO1xuaW1wb3J0IHsgQ29tbWFuZE1lc3NhZ2VSZXNlcnZhdGlvblJzIH0gZnJvbSAnc2FicmUtbmd2LXBvcy1jZG0vcmVzZXJ2YXRpb24nO1xuaW1wb3J0IHsgUmVzdEFwaVNlcnZpY2UgfSBmcm9tIFwic2FicmUtbmd2LWNvbW11bmljYXRpb24vc2VydmljZXMvUmVzdEFwaVNlcnZpY2VcIjtcbmltcG9ydCB7IEF1dGhUb2tlblR5cGUgfSBmcm9tIFwic2FicmUtbmd2LWFwcC9hcHAvc2VydmljZXMvaW1wbC9BdXRoVG9rZW5UeXBlXCI7XG5pbXBvcnQgeyBIdHRwTWV0aG9kIH0gZnJvbSBcInNhYnJlLW5ndi1hcHAvYXBwL3NlcnZpY2VzL2ltcGwvSHR0cE1ldGhvZFwiO1xuaW1wb3J0IHsgUmVzdE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL1Jlc3RNb2RlbFwiO1xuaW1wb3J0IHsgZ2V0U2VydmljZSB9IGZyb20gXCIuLi9Db250ZXh0XCI7XG5pbXBvcnQgeyBDaGVja1RvdGFsIH0gZnJvbSBcIi4vQ2hlY2tUb3RhbFwiO1xuaW1wb3J0IHsgcmVtYXJrIH0gZnJvbSBcIi4uL21vZGVsL3JlbWFya1wiO1xuaW1wb3J0IHsgU2FicmVDb250cm9sbGVyIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL1NhYnJlQ29udHJvbGxlclwiO1xuXG5AVGVtcGxhdGUoJ2NvbS1pbnRlcm5vdmEtZ3RjcGF5bWVudC13ZWItbW9kdWxlOkd0Y19QYXltZW50JylcbmV4cG9ydCBjbGFzcyBHdGNfUGF5bWVudCBleHRlbmRzIEFic3RyYWN0VmlldzxSZXN0TW9kZWw+IHtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBBYnN0cmFjdFZpZXdPcHRpb25zLCByZXNlcnZhdGlvbj86IENvbW1hbmRNZXNzYWdlUmVzZXJ2YXRpb25Scykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgdGhpcy5nZXRSZXNlcnZhdGlvbihyZXNlcnZhdGlvbik7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0dXMgPSBbXTtcblxuICAgIHB1YmxpYyB2ZW5kb3JzID0gW3sgY29kZTogXCJBWFwiIH0sIHsgY29kZTogXCJWSVwiIH0sIHsgY29kZTogXCJDQVwiIH1dXG4gICAgcHVibGljIHRvdGFsUGF4OiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyB1cGRhdGVSbWtzOiByZW1hcmtbXSA9IFtdO1xuICAgIHB1YmxpYyBwcUZhcmVMaXN0OiBwcUZhcmVbXSA9IFtdO1xuICAgIHB1YmxpYyBjcmVkaXRDYXJkTGlzdDogY2NEYXRhW10gPSBbXTtcbiAgICBpbml0aWFsaXplKG9wdGlvbnM6IEFic3RyYWN0QWN0aW9uT3B0aW9ucyk6IHZvaWQge1xuICAgICAgICBzdXBlci5hZGREb21FdmVudHMoe1xuICAgICAgICAgICAgJ2NoYW5nZSAjc2VsZWN0UHEnOiAnbG9hZEFtb3VudCcsXG4gICAgICAgICAgICAnY2hhbmdlICNjcmVkaXRDYXJkcyc6ICdsb2FkRXhwaXJhdGlvbicsXG4gICAgICAgICAgICAnY2hhbmdlICNtYXJrVXBGZWUnOiAndXBkYXRlVG90YWwnLFxuICAgICAgICAgICAgJ2NoYW5nZSAjYW10JzogJ3VwZGF0ZVRvdGFsJyxcbiAgICAgICAgICAgICdjaGFuZ2UgI2FkZGl0aW9uYWwnOiAndXBkYXRlVG90YWwnLFxuICAgICAgICAgICAgJ2NoYW5nZSAjdGt0RmVlJzogJ3VwZGF0ZVRvdGFsJ1xuICAgICAgICB9KTtcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZShvcHRpb25zKTtcbiAgICB9XG5cbiAgICBnZXRSZXNlcnZhdGlvbihmdWxsUE5SPzogQ29tbWFuZE1lc3NhZ2VSZXNlcnZhdGlvblJzKTogdm9pZCB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2NOdW1cIiwgdGhpcy5jY051bSk7XG4gICAgICAgIGxldCBnZXRyZXNlcnZhdGlvbnByb21pc2UgPSBnZXRTZXJ2aWNlKFNhYnJlQ29udHJvbGxlcik7XG4gICAgICAgIGlmICghZnVsbFBOUikge1xuICAgICAgICAgICAgY29uc3QgYXJlYVNlcnZpY2U6IElBcmVhU2VydmljZSA9IGdldFNlcnZpY2UoSUFyZWFTZXJ2aWNlKTtcbiAgICAgICAgICAgIGFyZWFTZXJ2aWNlLnNob3dCYW5uZXIoJ0Vycm9yJywgJ1RoZXJlIGlzIG5vIGFjdGl2ZSBQTlIuLi4nKTtcbiAgICAgICAgICAgIGdldFNlcnZpY2UoTGF5ZXJTZXJ2aWNlKS5jbGVhckxheWVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcG5yRGF0YSA9IGZ1bGxQTlIuRGF0YTtcbiAgICAgICAgICAgIGxldCBwbnJSZWNsb2MgPSBmdWxsUE5SPy5EYXRhPy5SZWNvcmRMb2NhdG9yc1swXVsnSWQnXTtcbiAgICAgICAgICAgIGxldCB0b3RhbFBheCA9IHBuckRhdGEuUGFzc2VuZ2Vycy5QYXNzZW5nZXIubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy50b3RhbFBheCA9IHRvdGFsUGF4O1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwbnJSZWNsb2NcIixwbnJSZWNsb2MpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGxldCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgbGV0IG1vbnRoID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICBsZXQgZGF5ID0gdG9kYXkuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgbGV0IGRheTIgPSAoZGF5IDwgMTApID8gXCIwXCIgKyBkYXkudG9TdHJpbmcoKSA6IGRheS50b1N0cmluZygpO1xuICAgICAgICAgICAgbGV0IG1vbnRoMiA9IChtb250aCA8IDEwKSA/IFwiMFwiICsgbW9udGgudG9TdHJpbmcoKSA6IG1vbnRoLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBsZXQgYWRmbGV4UmVmID0gcG5yUmVjbG9jICsgeWVhclsyXSArIHllYXJbM10gKyBtb250aDIgKyBkYXkyO1xuICAgICAgICAgICAgbGV0IG1rdXAsIHRrdEZlZSwgZmVlID0gXCJcIjtcbiAgICAgICAgICAgIGxldCBta3VwVG90YWwgPSAwO1xuICAgICAgICAgICAgbGV0IGZlZVRvdGFsID0gMDtcbiAgICAgICAgICAgIGxldCBwYXhOYW1lID0gcG5yRGF0YS5QYXNzZW5nZXJzLlBhc3NlbmdlclswXS5HaXZlbk5hbWUgKyBcIiBcIiArIHBuckRhdGEuUGFzc2VuZ2Vycy5QYXNzZW5nZXJbMF0uU3VybmFtZTtcbiAgICAgICAgICAgIGlmIChwbnJEYXRhLlByaWNlUXVvdGVzPy5QcmljZVF1b3RlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFycmF5RmFyZXMgPSBwbnJEYXRhLlByaWNlUXVvdGVzLlByaWNlUXVvdGU7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJhcnJheUZhcmVzXCIsYXJyYXlGYXJlcyk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChhcnJheUZhcmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBhcnJheUZhcmVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVsZW1lbnRcIixlbGVtZW50LlRheGVzLlRvdGFsVGF4WydDdXJyZW5jeSddKTsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LlRheGVzLlRvdGFsVGF4WydDdXJyZW5jeSddID09IFwiR0JQXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb25lUFEgPSBuZXcgcHFGYXJlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uZVBRLmN1cnIgPSBlbGVtZW50LkJhc2VGYXJlLkFtb3VudC5DdXJyZW5jeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGVsZW1lbnRbJ0lkJ10udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmVQUS5pdGVtID0gaXRlbVtpdGVtLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uZVBRLnRvdGFsID0gZWxlbWVudC5Ub3RhbC5BbW91bnRbJ0Ftb3VudCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uZVBRLnRheGVzID0gZWxlbWVudC5UYXhlcy5Ub3RhbFRheFsnQW1vdW50J107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJpY2VTdHJpbmcgPSBlbGVtZW50LnRvdGFscy5zdWJ0b3RhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbmVQUS5zdWJ0b3RhbCA9IHBhcnNlRmxvYXQocHJpY2VTdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwib25lUFFcIixvbmVQUSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHFGYXJlTGlzdC5wdXNoKG9uZVBRKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocG5yRGF0YS5Gb3JtT2ZQYXltZW50cz8uRm9ybU9mUGF5bWVudCkge1xuICAgICAgICAgICAgICAgIGxldCBhcnJheUZhcmVzID0gcG5yRGF0YS5Gb3JtT2ZQYXltZW50cy5Gb3JtT2ZQYXltZW50O1xuICAgICAgICAgICAgICAgIGlmIChhcnJheUZhcmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBhcnJheUZhcmVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb25lQ0MgPSBuZXcgY2NEYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgb25lQ0MuY29kZSA9IGVsZW1lbnQuQ3JlZGl0Q2FyZFsnQ3JlZGl0Q2FyZENvZGUnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uZUNDLmNhcmRNYXNrZWQgPSBvbmVDQy5jb2RlICsgZWxlbWVudC5DcmVkaXRDYXJkWydDcmVkaXRDYXJkTnVtYmVyJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25lQ0MuY2FyZE1hc2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXN0NGRpZ2l0cyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IG9uZUNDLmNhcmRNYXNrZWQubGVuZ3RoIC0gNDsgaSA8IG9uZUNDLmNhcmRNYXNrZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdDRkaWdpdHMgPSBsYXN0NGRpZ2l0cyArIG9uZUNDLmNhcmRNYXNrZWRbaV0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25lQ0MubGFzdDQgPSBsYXN0NGRpZ2l0cztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uZUNDLnllYXIgPSBlbGVtZW50LkNyZWRpdENhcmRbJ0V4cGlyYXRpb25ZZWFyJ11bMl0gKyBlbGVtZW50LkNyZWRpdENhcmRbJ0V4cGlyYXRpb25ZZWFyJ11bM107XG4gICAgICAgICAgICAgICAgICAgICAgICBvbmVDQy5tb250aCA9IGVsZW1lbnQuQ3JlZGl0Q2FyZFsnRXhwaXJhdGlvbk1vbnRoJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9uZUNDIFwiLCBvbmVDQyk7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWRpdENhcmRMaXN0LnB1c2gob25lQ0MpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwbnJEYXRhLlJlbWFya3M/LlJlbWFyaykge1xuICAgICAgICAgICAgICAgIGxldCBpbnZvaWNlUm1rcyA9IHBuckRhdGEuUmVtYXJrcy5SZW1hcms7XG4gICAgICAgICAgICAgICAgaWYgKGludm9pY2VSbWtzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpbnZvaWNlUm1rcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRbJ1R5cGUnXSA9PSBcIkludm9pY2VcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJ0TWt1cCA9IGVsZW1lbnRbJ1RleHQnXS5zcGxpdChcIk1LVVAvXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0TWt1cFsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2xhc2ggPSBwYXJ0TWt1cFsxXS5zcGxpdChcIi9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1rdXAgPSBzbGFzaFsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWt1cFRvdGFsID0gbWt1cFRvdGFsICsgcGFyc2VGbG9hdChta3VwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcnRUa3QgPSBlbGVtZW50WydUZXh0J10uc3BsaXQoXCJUS1RGRUUvXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0VGt0WzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRrdEZlZSA9IHBhcnRUa3RbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0VGt0ID0gZWxlbWVudFsnVGV4dCddLnNwbGl0KFwiRkVFL1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnRUa3RbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZSA9IHBhcnRUa3RbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY21SbWsgPSBlbGVtZW50WydUZXh0J10uc3BsaXQoXCJDTS1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNtUm1rWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBybWsgPSBuZXcgcmVtYXJrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBybWsuVHlwZSA9IFwiSXRpbmVyYXJ5XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJtay5JZCA9IGVsZW1lbnQuU291cmNlWydJZCddLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJtay5UZXh0ID0gZWxlbWVudFsnVGV4dCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBybWsuQ29kZSA9IFwiQ01cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJta3MucHVzaChybWspO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGF5bWVudCA9IGVsZW1lbnRbJ1RleHQnXS5zcGxpdChcIlBBWU1FTlQvXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXltZW50WzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBybWsgPSBuZXcgcmVtYXJrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBybWsuVHlwZSA9IFwiSXRpbmVyYXJ5XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJtay5JZCA9IGVsZW1lbnQuU291cmNlWydJZCddLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJtay5UZXh0ID0gZWxlbWVudFsnVGV4dCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBybWsuQ29kZSA9IFwiUEFZXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSbWtzLnB1c2gocm1rKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy51cGRhdGVSbWtzXCIsdGhpcy51cGRhdGVSbWtzKTsgICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0a3RGZWUpIHtcbiAgICAgICAgICAgICAgICBmZWVUb3RhbCA9IHRvdGFsUGF4ICogcGFyc2VGbG9hdCh0a3RGZWUpO1xuICAgICAgICAgICAgfSBpZiAoZmVlKSB7XG4gICAgICAgICAgICAgICAgZmVlVG90YWwgPSBwYXJzZUZsb2F0KGZlZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdG90YWxBbXQgPSBta3VwVG90YWwgKyBmZWVUb3RhbDtcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9kZWwoKS5zZXQoJ21hcmtVcEZlZScsIG1rdXBUb3RhbC50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9kZWwoKS5zZXQoJ3RrdEZlZScsIGZlZVRvdGFsLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgdGhpcy5nZXRNb2RlbCgpLnNldCgnc2VsZWN0UHEnLCB0aGlzLnBxRmFyZUxpc3QpO1xuICAgICAgICAgICAgdGhpcy5nZXRNb2RlbCgpLnNldCgnY3JlZGl0Q2FyZHMnLCB0aGlzLmNyZWRpdENhcmRMaXN0KTtcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9kZWwoKS5zZXQoJ25hbWUnLCBwYXhOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9kZWwoKS5zZXQoJ3JlZklkJywgYWRmbGV4UmVmKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9kZWwoKS5zZXQoJ3RvdGFsJywgdG90YWxBbXQudG9GaXhlZCgyKSArIFwiIEdCUFwiKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9kZWwoKS5zZXQoJ3ZlbmRvcnMnLCB0aGlzLnZlbmRvcnMpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlVG90YWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZEFtb3VudChzZWxlY3RvcjogSlF1ZXJ5RXZlbnRPYmplY3QpOiB2b2lkIHtcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLiQoJyNzZWxlY3RQcScpLmNoaWxkcmVuKFwib3B0aW9uOnNlbGVjdGVkXCIpLnZhbCgpO1xuICAgICAgICBpZiAoc2VsZWN0b3IudGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLnBxRmFyZUxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFsnaXRlbSddID09IGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW10XCIpKS52YWx1ZSA9IGVsZW1lbnRbJ3RvdGFsJ10udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb3RhbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCgnI3NlbGVjdFBxJykudmFsKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkRXhwaXJhdGlvbihzZWxlY3RvcjogSlF1ZXJ5RXZlbnRPYmplY3QpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNhcmQgPSB0aGlzLiQoJyNjcmVkaXRDYXJkcycpLmNoaWxkcmVuKFwib3B0aW9uOnNlbGVjdGVkXCIpLnZhbCgpO1xuICAgICAgICBpZiAoc2VsZWN0b3IudGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmNyZWRpdENhcmRMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRbJ2NhcmRNYXNrZWQnXSA9PSBjYXJkKSB7XG4gICAgICAgICAgICAgICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRJblVzZVwiKSkudmFsdWUgPSBjYXJkO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXhwID0gZWxlbWVudFsnbW9udGgnXSArIFwiL1wiICsgZWxlbWVudFsneWVhciddO1xuICAgICAgICAgICAgICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBpcmF0aW9uXCIpKS52YWx1ZSA9IGV4cDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoJyNjcmVkaXRDYXJkcycpLnZhbChjYXJkKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgd3JpdGVDQyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZEluVXNlXCIpO1xuICAgICAgICBpZiAoY2FyZCA9PSBcImFkZENDXCIpIHtcbiAgICAgICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRJblVzZVwiKSkudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwaXJhdGlvblwiKSkudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZW5kb3JcIikucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICB3cml0ZUNDLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgd3JpdGVDQy5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlVG90YWwoc2VsZWN0b3I/OiBKUXVlcnlFdmVudE9iamVjdCk6IHZvaWQge1xuICAgICAgICBsZXQgbWFya1VwRmVlID0gMDtcbiAgICAgICAgbGV0IGFtdCA9IDA7XG4gICAgICAgIGxldCBhZGRpdGlvbmFsID0gMDtcbiAgICAgICAgbGV0IHRrdEZlZSA9IDA7XG4gICAgICAgIGlmICgoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXJrVXBGZWVcIikpLnZhbHVlKSB7XG4gICAgICAgICAgICBtYXJrVXBGZWUgPSBwYXJzZUZsb2F0KCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmtVcEZlZVwiKSkudmFsdWUpO1xuICAgICAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFya1VwRmVlXCIpKS52YWx1ZSA9IG1hcmtVcEZlZS50b0ZpeGVkKDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbXRcIikpLnZhbHVlKSB7XG4gICAgICAgICAgICBhbXQgPSBwYXJzZUZsb2F0KCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFtdFwiKSkudmFsdWUpO1xuICAgICAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW10XCIpKS52YWx1ZSA9IGFtdC50b0ZpeGVkKDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRpdGlvbmFsXCIpKS52YWx1ZSkge1xuICAgICAgICAgICAgYWRkaXRpb25hbCA9IHBhcnNlRmxvYXQoKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkaXRpb25hbFwiKSkudmFsdWUpO1xuICAgICAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkaXRpb25hbFwiKSkudmFsdWUgPSBhZGRpdGlvbmFsLnRvRml4ZWQoMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRrdEZlZVwiKSkudmFsdWUpIHtcbiAgICAgICAgICAgIHRrdEZlZSA9IHBhcnNlRmxvYXQoKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGt0RmVlXCIpKS52YWx1ZSk7XG4gICAgICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0a3RGZWVcIikpLnZhbHVlID0gdGt0RmVlLnRvRml4ZWQoMik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRvdGFsID0gbWFya1VwRmVlICsgYW10ICsgYWRkaXRpb25hbCArIHRrdEZlZTtcbiAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWxcIikpLnZhbHVlID0gdG90YWwudG9GaXhlZCgyKSArIFwiIEdCUFwiO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbGZOZXh0QWN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5JbnB1dFZhbGlkYXRvcigpKSB7XG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZXhlY3V0ZSgpIHtcbiAgICAgICAgbGV0IG1hcmtVcEZlZSA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFya1VwRmVlJykpLnZhbHVlO1xuICAgICAgICBsZXQgY2NOYW1lID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykpLnZhbHVlO1xuICAgICAgICBsZXQgZmVlID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0a3RGZWUnKSkudmFsdWU7XG4gICAgICAgIGxldCBwcUFtdCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW10JykpLnZhbHVlO1xuICAgICAgICBsZXQgYWRkaXRpb25hbCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkaXRpb25hbCcpKS52YWx1ZTtcbiAgICAgICAgbGV0IHRvdGFsID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbCcpKS52YWx1ZTtcbiAgICAgICAgbGV0IGZ1bGxDYXJkID0gdGhpcy4kKCcjY3JlZGl0Q2FyZHMnKS5jaGlsZHJlbihcIm9wdGlvbjpzZWxlY3RlZFwiKS52YWwoKTtcbiAgICAgICAgbGV0IG9wdGlvbiA9IHRoaXMuJCgnI3Rlc3QnKS5jaGlsZHJlbihcIm9wdGlvbjpzZWxlY3RlZFwiKS52YWwoKTtcbiAgICAgICAgbGV0IGxhc3Q0ID0gXCJcIjtcbiAgICAgICAgbGV0IGNvZGU7XG4gICAgICAgIGlmIChmdWxsQ2FyZCA9PSBcImFkZENDXCIpIHtcbiAgICAgICAgICAgIGNvZGUgPSB0aGlzLiQoJyN2ZW5kb3InKS5jaGlsZHJlbihcIm9wdGlvbjpzZWxlY3RlZFwiKS52YWwoKTtcbiAgICAgICAgICAgIGZ1bGxDYXJkID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZEluVXNlXCIpKS52YWx1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBmdWxsQ2FyZC5sZW5ndGggLSA0OyBpIDwgZnVsbENhcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsYXN0NCA9IGxhc3Q0ICsgZnVsbENhcmRbaV0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYWRkQ0Mgc2VsZWN0ZWRcIiwgZnVsbENhcmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGNhcmRTZWxlY3RlZCA9IHRoaXMuY3JlZGl0Q2FyZExpc3QuZmlsdGVyKHggPT4geFsnY2FyZE1hc2tlZCddID09IGZ1bGxDYXJkKTtcbiAgICAgICAgICAgIGxhc3Q0ID0gY2FyZFNlbGVjdGVkWzBdWydsYXN0NCddO1xuICAgICAgICAgICAgY29kZSA9IGNhcmRTZWxlY3RlZFswXVsnY29kZSddO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjYXJkTWFza2VkIHNlbGVjdGVkXCIsIGNhcmRTZWxlY3RlZCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlZklkID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWZJZCcpKS52YWx1ZTtcbiAgICAgICAgbGV0IGV4cCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwaXJhdGlvbicpKS52YWx1ZTtcbiAgICAgICAgbGV0IGV4cE1vbnRoID0gZXhwLnNwbGl0KFwiL1wiKVswXTtcbiAgICAgICAgbGV0IGV4cFllYXIgPSBleHAuc3BsaXQoXCIvXCIpWzFdO1xuICAgICAgICAvLyBsZXQgeHh4eHh4eHh4eCAgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3h4eHh4eHh4eHh4eCcpKS52YWx1ZTtcbiAgICAgICAgLy8gbGV0IHh4eHh4eHh4eHggID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd4eHh4eHh4eHh4eHgnKSkudmFsdWU7XG5cbiAgICAgICAgbGV0IHBhY2s6IHt9ID0ge1xuICAgICAgICAgICAgXCJtYXJrVXBGZWVcIjogbWFya1VwRmVlLFxuICAgICAgICAgICAgXCJmZWVcIjogZmVlLFxuICAgICAgICAgICAgXCJuYW1lXCI6IGNjTmFtZSxcbiAgICAgICAgICAgIFwicHFBbXRcIjogcHFBbXQsXG4gICAgICAgICAgICBcImFkZGl0aW9uYWxcIjogYWRkaXRpb25hbCxcbiAgICAgICAgICAgIFwidG90YWxcIjogdG90YWwsXG4gICAgICAgICAgICBcImZ1bGxDYXJkXCI6IGZ1bGxDYXJkLFxuICAgICAgICAgICAgXCJleHBNb250aFwiOiBleHBNb250aCxcbiAgICAgICAgICAgIFwiZXhwWWVhclwiOiBleHBZZWFyLFxuICAgICAgICAgICAgXCJjYXJkNFwiOiBsYXN0NCxcbiAgICAgICAgICAgIFwib3B0aW9uXCI6IG9wdGlvbixcbiAgICAgICAgICAgIFwiY2NDb2RlXCI6IGNvZGUsXG4gICAgICAgICAgICBcInJlZklkXCI6IHJlZklkLFxuICAgICAgICAgICAgXCJVcGRhdGVSbWtcIjogdGhpcy51cGRhdGVSbWtzXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJwYWNrXCIsIHBhY2spO1xuICAgICAgICBjb25zdCByZXN0TW9kYWxPcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdDb25maXJtYXRpb24nLFxuICAgICAgICAgICAgYWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnYXBwLmNvbW1vbi52aWV3cy5CdXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uOiAnQ2FuY2VsJyxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uTmFtZTogJ2NhbmNlbCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzZWNvbmRhcnknXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2FwcC5jb21tb24udmlld3MuQnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2FwdGlvbjogJ0JhY2snLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25OYW1lOiAnYmFjaycsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzZWNvbmRhcnknXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2FwcC5jb21tb24udmlld3MuQnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2FwdGlvbjogXCJBZGQgUmVtYXJrc1wiLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25OYW1lOiAnbmV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcblxuICAgICAgICBnZXRTZXJ2aWNlKExheWVyU2VydmljZSkuc2hvd0luTW9kYWwoXG4gICAgICAgICAgICBuZXcgQ2hlY2tUb3RhbCh7IG1vZGVsOiBuZXcgUmVzdE1vZGVsKCkgfSwgcGFjayksXG4gICAgICAgICAgICByZXN0TW9kYWxPcHRpb25zLFxuICAgICAgICAgICAgeyBkaXNwbGF5OiAnYXJlYVZpZXcnIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgSW5wdXRWYWxpZGF0b3IoKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBhbGxPayA9IHRydWU7XG4gICAgICAgIGxldCB0b3RhbCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsXCIpKS52YWx1ZTtcbiAgICAgICAgaWYgKHBhcnNlRmxvYXQodG90YWwuc3BsaXQoXCJHQlBcIilbMF0pID4gMCkge1xuICAgICAgICAgICAgdGhpcy5maWVsZE9rKFwidG90YWxcIik7XG4gICAgICAgICAgICBsZXQgcmVxdWlyZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbcmVxdWlyZWRdJylcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVxdWlyZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSByZXF1aXJlZFtpXS5pZDtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIklucHV0VmFsaWRhdG9yOlwiICsgaWQpO1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZVJlYWQgPSAoPEhUTUxTZWxlY3RFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGlkID09IFwiY3JlZGl0Q2FyZHNcIiAmJiB2YWx1ZVJlYWQgPT0gXCJjY05vU2VsZWN0ZWRcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yT25GaWVsZChpZCwgXCJGaWVsZCBjYW5ub3QgYmUgZW1wdHkgb3IgYmxhbmtcIik7XG4gICAgICAgICAgICAgICAgICAgIGFsbE9rID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaWQgPT0gXCJjcmVkaXRDYXJkc1wiICYmIHZhbHVlUmVhZCA9PSBcImFkZENDXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzW1wiY3JlZGl0Q2FyZHNcIl0gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZE9rKFwiY3JlZGl0Q2FyZHNcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCg8SFRNTFNlbGVjdEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZW5kb3JcIikpLnZhbHVlID09IFwibm9WZW5kb3JcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNbJ3ZlbmRvciddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JPbkZpZWxkKFwidmVuZG9yXCIsIFwiU2VsZWN0IG9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbE9rID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRPayhcInZlbmRvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZWRDYXJkID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZEluVXNlXCIpKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVkQ2FyZC5sZW5ndGggPT0gMTYgJiYgdGhpcy5zdGF0dXNbJ2NhcmRJblVzZSddID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRPaygnY2FyZEluVXNlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZWRDYXJkLmxlbmd0aCA+IDE2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yT25GaWVsZChcImNhcmRJblVzZVwiLCBcIk1heGltdW0gMTYgbnVtYmVyc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbE9rID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlZENhcmQubGVuZ3RoIDw9IDE1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c1snY2FyZEluVXNlJ10gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck9uRmllbGQoXCJjYXJkSW5Vc2VcIiwgXCJNaW5pbXVtIDE2IG51bWJlcnNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxPayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlkID09IFwibmFtZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKSkudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbnRybyFcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JPbkZpZWxkKFwibmFtZVwiLCBcIk5hbWUgaXMgbWFuZGF0b3J5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsT2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5hbWUgJiYgdGhpcy5zdGF0dXNbXCJuYW1lXCJdID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRPayhcImNyZWRpdENhcmRzXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpZCA9PSBcIm5hbWVcIikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIikpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JPbkZpZWxkKFwibmFtZVwiLCBcIk5hbWUgaXMgbWFuZGF0b3J5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsT2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5hbWUgJiYgdGhpcy5zdGF0dXNbXCJuYW1lXCJdID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRPayhcImNyZWRpdENhcmRzXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpZCA9PSBcImV4cGlyYXRpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXhwaXJhdGlvbiA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGlyYXRpb25cIikpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWV4cGlyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JPbkZpZWxkKFwiZXhwaXJhdGlvblwiLCBcIkV4cGlyYXRpb24gaXMgbWFuZGF0b3J5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsT2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuc3RhdHVzW1wiZXhwaXJhdGlvblwiXSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5maWVsZE9rKFwiZXhwaXJhdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5ZWFyNCA9IGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRoaXNNb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeWVhcjIgPSBwYXJzZUZsb2F0KHllYXI0WzJdICsgeWVhcjRbM10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGV4cCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGlyYXRpb25cIikpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGV4cE1vbnRoID0gcGFyc2VGbG9hdChleHAuc3BsaXQoXCIvXCIpWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBleHBZZWFyID0gcGFyc2VGbG9hdChleHAuc3BsaXQoXCIvXCIpWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXhwTW9udGhcIiwgZXhwTW9udGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzTW9udGhcIiwgdGhpc01vbnRoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmFOKGV4cE1vbnRoKSB8fCBpc05hTihleHBZZWFyKSB8fCBleHBNb250aCA+IDEyIHx8IGV4cE1vbnRoIDwgMSB8fCBleHBZZWFyIDwgeWVhcjIgfHwgKGV4cFllYXIgPT0geWVhcjIgJiYgZXhwTW9udGggPCB0aGlzTW9udGgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck9uRmllbGQoXCJleHBpcmF0aW9uXCIsIFwiTU0vWVkgbGlrZTogMDUvMjdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxPayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkT2soXCJleHBpcmF0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lcnJvck9uRmllbGQoXCJ0b3RhbFwiLCBcIk11c3QgYmUgZ3JlYXRlciB0aGFuIDBcIilcbiAgICAgICAgICAgIGFsbE9rID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiAodGhpcy5zdGF0dXNbXCJhZGRDQ1wiXSA9PSB0cnVlKSB7XG4gICAgICAgIC8vICAgICAoPEhUTUxEaXZFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlZGl0Q2FyZHNEaXZcIikpLmNsYXNzTGlzdC5yZW1vdmUoXCJoYXMtZXJyb3JcIik7IFxuICAgICAgICAvLyAgICAgKDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWRpdENhcmRzRXJyb3JcIikpLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgICAgIC8vICAgICB0aGlzLnN0YXR1c1tcImFkZENDXCJdID0gZmFsc2U7XG4gICAgICAgIC8vICAgICBpZCA9IFwiY2FyZEluVXNlXCI7XG4gICAgICAgIC8vICAgICBpZiAoISg8SFRNTFNlbGVjdEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKS52YWx1ZSkge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuZXJyb3JPbkZpZWxkKGlkLCBcIlR5cGUgY3JlZGl0IGNhcmQgbnVtYmVyXCIpO1xuICAgICAgICAvLyAgICAgICAgIGFsbE9rID0gZmFsc2U7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICB0aGlzLmVycm9yT25GaWVsZChpZCwgXCJGaWVsZCBjYW5ub3QgYmUgZW1wdHkgb3IgYmxhbmtcIik7XG4gICAgICAgIC8vICAgICBhbGxPayA9IGZhbHNlO1xuICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgLy8gICAgIHRoaXMuZmllbGRPayhpZCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgcmV0dXJuIGFsbE9rO1xuICAgIH1cblxuICAgIHByaXZhdGUgZXJyb3JPbkZpZWxkKGlkOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICAoPEhUTUxEaXZFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkICsgXCJFcnJvclwiKSkuaW5uZXJUZXh0ID0gbWVzc2FnZTtcbiAgICAgICAgKDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCArIFwiRGl2XCIpKS5jbGFzc0xpc3QuYWRkKFwiaGFzLWVycm9yXCIpO1xuICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKS5mb2N1cygpO1xuICAgICAgICB0aGlzLnN0YXR1c1tpZF0gPSB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmllbGRPayhpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1c1tpZF0gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgKDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCArIFwiRGl2XCIpKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGFzLWVycm9yXCIpO1xuICAgICAgICAgICAgKDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCArIFwiRXJyb3JcIikpLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLnN0YXR1c1tpZF0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== 