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
        "GetReservationRQ_WithSession": "\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"\nxmlns:eb=\"http://www.ebxml.org/namespaces/messageHeader\"\nxmlns:xlink=\"http://www.w3.org/1999/xlink\"\nxmlns:xsd=\"http://www.w3.org/1999/XMLSchema\">\n<SOAP-ENV:Header>\n  <eb:MessageHeader SOAP-ENV:mustUnderstand=\"1\" eb:version=\"1.0\">\n    <eb:From>\n      <eb:PartyId type=\"urn:x12.org:IO5:01\">999999</eb:PartyId>\n    </eb:From>\n    <eb:To>\n      <eb:PartyId type=\"urn:x12.org:IO5:01\">123123</eb:PartyId>\n    </eb:To>\n    <eb:CPAId>U511</eb:CPAId>\n    <eb:ConversationId>webservices.support@sabre.com</eb:ConversationId>\n    <eb:Service eb:type=\"OTA\">Air</eb:Service>\n    <eb:Action>GetReservationRQ</eb:Action>\n    <eb:MessageData>\n      <eb:MessageId>1000</eb:MessageId>\n      <eb:Timestamp>2016-12-30T05:25:32z</eb:Timestamp>\n    </eb:MessageData>\n  </eb:MessageHeader>\n  <wsse:Security xmlns:wsse=\"http://schemas.xmlsoap.org/ws/2002/12/secext\"\n    xmlns:wsu=\"http://schemas.xmlsoap.org/ws/2002/12/utility\">\n    <wsse:BinarySecurityToken></wsse:BinarySecurityToken>\n  </wsse:Security>\n</SOAP-ENV:Header>\n<SOAP-ENV:Body>\n  <GetReservationRQ Version=\"1.19.0\"\n    xmlns=\"http://webservices.sabre.com/pnrbuilder/v1_19\">\n    <Locator>PVSFIP</Locator>\n    <RequestType>Stateful</RequestType>\n    <ReturnOptions PriceQuoteServiceVersion=\"3.2.0\">\n      <SubjectAreas>\n        <SubjectArea>FULL</SubjectArea>\n        <SubjectArea>PRICE_QUOTE</SubjectArea>\n      </SubjectAreas>\n    </ReturnOptions>\n  </GetReservationRQ>\n</SOAP-ENV:Body>\n</SOAP-ENV:Envelope>",
        "GetReservationRQ": "\n<GetReservationRQ Version=\"1.19.0\"\nxmlns=\"http://webservices.sabre.com/pnrbuilder/v1_19\">\n<RequestType>Stateful</RequestType>\n<ReturnOptions>\n  <ViewName>VaDefaultWithPq</ViewName>\n  <ResponseFormat>STL</ResponseFormat>\n</ReturnOptions>\n</GetReservationRQ>",
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
    SabreController.prototype.buildRequestAddRemark = function (listRemarks) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log("listRemarks on buildRequestAddRemark", listRemarks);
            var requestRmk = _this.buildAddRemarkRQ(listRemarks, "AddRemarkLLSRQ");
            requestRmk
                .then(function (resp) {
                (0, Context_1.getService)(SabreService_1.SabreService).callSoapServiceAsync(resp, "AddRemarkLLSRQ", 'SESSION', 5000)
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
                (0, Context_1.getService)(SabreService_1.SabreService).callSoapServiceAsync(resp, "UpdateReservationRQ", 'SESSION', 5000)
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
                (0, Context_1.getService)(SabreService_1.SabreService).callSoapServiceAsync(resp, "SabreCommandLLSRQ", 'SESSION', 5000)
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
                (0, Context_1.getService)(SabreService_1.SabreService).callSoapServiceAsync(resp, "SabreCommandLLSRQ", 'SESSION', 5000)
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
            //         getService(SabreService).callSoapServiceAsync(resp, "AddRemarkLLSRQ", 'SESSION', 5000)
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
        _this.getModel().set('total', pack['total']);
        _this.render();
        return _this;
    }
    CheckTotal.prototype.initialize = function (options) {
        _super.prototype.initialize.call(this, options);
    };
    CheckTotal.prototype.processData = function (pack) {
        this.rmks = pack['UpdateRmk'];
        var rmkCm = this.rmks.filter(function (x) { return x.Code == "CM"; })[0].Text = "CM-" + pack['ccCode'] + pack['card4'] + "/" + pack['expMonth'] + pack['expYear'] + "/*";
        var rmkPay = this.rmks.filter(function (x) { return x.Code == "PAY"; })[0].Text = "PAYMENT/123456/" + pack['refId'] + "/" + pack['total'];
        console.log("this.rmks", this.rmks);
        // let pack: {} = {
        //     "UpdateRmk": []
        //     "markUpFee": markUpFee,
        //     "fee": fee,
        //     "pqAmt": pqAmt,
        //     "additional": additional,
        //     "exp": exp,
        //     "total": total,
        //     "fullCard": fullCard,
        //     "card4": cardSelected[0]['last4'],
        //     "card4": cardSelected[0]['code'],
        //     "refId": refId
        // }
        // 5H-PAYMENT/A-123456/OSUICI230227/1672.80/VI1111
        // 5H-M1100.00/S160.00/T362.80/A50.00/TT1672.80
        this.generateRmk("PAYMENT/A-123456/" + pack['refId'] + "/" + pack['total'] + "/" + pack['ccCode'] + pack['card4']);
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
                if (this.rmks.length > 0) {
                    getreservationpromise.RemarkUpdate(this.rmks)
                        .then(function (rsp) {
                        console.log("Rmks to update", _this.rmks);
                        getreservationpromise.SendCommandMessage("*.", true, true)
                            .then(function (rsp) {
                            console.log("remarks been displayed");
                        });
                        areaService.showBanner('Success', "Remarks were updated");
                    });
                }
                console.log("this.createRmks", this.createRmks);
                if (this.rmks.length > 0) {
                    getreservationpromise.buildRequestAddRemark(this.createRmks)
                        .then(function (rsp) {
                        getreservationpromise.SendCommandMessage("*P5H", true, true)
                            .then(function (rsp) {
                            console.log("remarks been displayed");
                        });
                        areaService.showBanner('Success', "Remarks were added");
                    });
                }
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
System.registerDynamic("com-internova-gtcpayment-web-module/views/Gtc_Payment", ["sabre-ngv-app/app/AbstractView","sabre-ngv-core/services/LayerService","sabre-ngv-core/decorators/classes/view/Template","com-internova-gtcpayment-web-module/model/pqFare","com-internova-gtcpayment-web-module/model/ccData","sabre-ngv-app/app/services/impl/IAreaService","com-internova-gtcpayment-web-module/model/RestModel","com-internova-gtcpayment-web-module/Context","com-internova-gtcpayment-web-module/views/CheckTotal","com-internova-gtcpayment-web-module/model/remark"], false, function (require, exports, module) {
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
var Gtc_Payment = /** @class */ (function (_super) {
    __extends(Gtc_Payment, _super);
    function Gtc_Payment(options, reservation) {
        var _this = _super.call(this, options) || this;
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
            'change #tktFee': 'updateTotal',
            'change #cardInUse': 'maxLength'
        });
        _super.prototype.initialize.call(this, options);
    };
    Gtc_Payment.prototype.getReservation = function (fullPNR) {
        var _this = this;
        var _a, _b, _c, _d;
        console.log("fullPNR", fullPNR);
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
            console.log("PQs", this.pqFareList);
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
            console.log("CCs", this.creditCardList);
            if ((_d = pnrData.Remarks) === null || _d === void 0 ? void 0 : _d.Remark) {
                var invoiceRmks = pnrData.Remarks.Remark;
                if (invoiceRmks.length) {
                    invoiceRmks.forEach(function (element) {
                        // console.log("element",element);                        
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
                                rmk.Id = element['Id'].toString();
                                rmk.Text = element['Text'];
                                rmk.Code = "CM";
                                _this.updateRmks.push(rmk);
                            }
                            var payment = element['Text'].split("PAYMENT/");
                            if (payment[1]) {
                                var rmk = new remark_1.remark;
                                rmk.Type = "Itinerary";
                                rmk.Id = element['Id'].toString();
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
            writeCC.removeAttribute("disabled");
        }
        else {
            writeCC.setAttribute("disabled", "");
        }
    };
    Gtc_Payment.prototype.maxLength = function (selector) {
        var typedCard = document.getElementById("cardInUse").value;
        if (typedCard.length > 16 || typedCard.length <= 15) {
            if (typedCard.length > 16) {
                document.getElementById("cardInUseError").innerText = "Max 16 numbers allowed";
            }
            if (typedCard.length <= 15) {
                document.getElementById("cardInUseError").innerText = "Need 16 numbers";
            }
            document.getElementById("cardInUseDiv").classList.add("has-error");
            document.getElementById("cardInUse").focus();
        }
        else {
            document.getElementById("cardInUseDiv").classList.remove("has-error");
            document.getElementById("cardInUseError").innerText = "";
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
                    console.log("listo");
                    this.execute();
                }
                return [2 /*return*/];
            });
        });
    };
    Gtc_Payment.prototype.execute = function () {
        var markUpFee = document.getElementById('markUpFee').value;
        var fee = document.getElementById('tktFee').value;
        var pqAmt = document.getElementById('amt').value;
        var additional = document.getElementById('additional').value;
        var total = document.getElementById('total').value;
        var fullCard = this.$('#creditCards').children("option:selected").val();
        var cardSelected = this.creditCardList.filter(function (x) { return x['cardMasked'] == fullCard; });
        var refId = document.getElementById('refId').value;
        var exp = document.getElementById('expiration').value;
        var expMonth = exp.split("/")[0];
        var expYear = exp.split("/")[1];
        // let xxxxxxxxxx  = (<HTMLInputElement>document.getElementById('xxxxxxxxxxxx')).value;
        // let xxxxxxxxxx  = (<HTMLInputElement>document.getElementById('xxxxxxxxxxxx')).value;
        var pack = {
            "markUpFee": markUpFee,
            "fee": fee,
            "pqAmt": pqAmt,
            "additional": additional,
            "total": total,
            "fullCard": fullCard,
            "expMonth": expMonth,
            "expYear": expYear,
            "card4": cardSelected[0]['last4'],
            "ccCode": cardSelected[0]['code'],
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
        var required = document.querySelectorAll('[required]');
        for (var i = 0; i < required.length; i++) {
            var field = required[i];
            var id = field.id;
            var value = document.getElementById(id).value;
            if (!value) {
                document.getElementById(id + "Div").classList.add("has-error");
                document.getElementById(id + "Error").innerText = "Field cannot be empty or blank";
                document.getElementById(id).focus();
                allOk = false;
                break;
            }
            else {
                document.getElementById(id + "Div").classList.remove("has-error");
                document.getElementById(id + "Error").innerText = "";
            }
            var typedCard = document.getElementById("cardInUse").value;
            if (typedCard && (typedCard.length > 16 || typedCard.length <= 15)) {
                console.log("llego");
                allOk = false;
                break;
            }
        }
        return allOk;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb2RlL18udHMiLCJzcmMvY29kZS9jb21tb24vSVV0aWxpdGFyaW8udHMiLCJzcmMvY29kZS9jb21tb24vVXRpbGl0YXJpby50cyIsInNyYy9jb2RlL2NvbW1vbi9YbWxQYXlMb2Fkcy50cyIsInNyYy9jb2RlL0NvbnRleHQudHMiLCJzcmMvY29kZS9jb250cm9sbGVycy9JU2FicmVDb250cm9sbGVyLnRzIiwic3JjL2NvZGUvY29udHJvbGxlcnMvU2FicmVDb250cm9sbGVyLnRzIiwic3JjL2NvZGUvaW5kZXgudHMiLCJzcmMvY29kZS9NYWluLnRzIiwiQzovVXNlcnMvZGNhcnNpbi9lY2xpcHNlLXdvcmtzcGFjZS9HVENfVUtQYXltZW50L3dlYi1zcmMvY29tLWludGVybm92YS1ndGNwYXltZW50LXdlYi1tb2R1bGUvYnVpbGQvcHJvZC9tZXRhL2Nqcy9tb2RlbC9BZGRSZW1hcmtzLmpzIiwic3JjL2NvZGUvbW9kZWwvY2NEYXRhLnRzIiwic3JjL2NvZGUvbW9kZWwvcHFGYXJlLnRzIiwic3JjL2NvZGUvbW9kZWwvcmVtYXJrLnRzIiwic3JjL2NvZGUvbW9kZWwvUmVzdE1vZGVsLnRzIiwic3JjL2NvZGUvc2VydmljZXMvRXh0ZXJuYWxTZXJ2aWNlLnRzIiwic3JjL2NvZGUvc2VydmljZXMvSUV4dGVybmFsU2VydmljZS50cyIsInNyYy9jb2RlL3NlcnZpY2VzL0lTYWJyZVNlcnZpY2UudHMiLCJzcmMvY29kZS9zZXJ2aWNlcy9TYWJyZVNlcnZpY2UudHMiLCJzcmMvY29kZS92aWV3cy9DaGVja1RvdGFsLnRzIiwic3JjL2NvZGUvdmlld3MvR3RjX1BheW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlDQUF5Qzs7Ozs7O0FDQXpDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkEsbUZBQWtGO0FBQ2xGLCtEQUE4RDtBQUM5RCw2Q0FBNEM7QUFDNUMsc0NBQXFEO0FBRXJEO0lBQWdDLDhCQUFlO0lB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LCJzb3VyY2VzQ29udGVudCI6WyIvKiBjb20taW50ZXJub3ZhLWd0Y3BheW1lbnQtd2ViLW1vZHVsZSAqLyIsImV4cG9ydCBpbnRlcmZhY2UgSVV0aWxpdGFyaW8ge1xyXG4gICAgR2V0VmFsdWUoUGxhaW5UZXh0IDogc3RyaW5nLCByZWdleCA6IFJlZ0V4cCwgcG9zOiBudW1iZXIpIDogc3RyaW5nO1xyXG4gICAgR2V0VmFsdWVzKFBsYWluVGV4dCA6IHN0cmluZywgcmVnZXggOiBSZWdFeHAsIHBvczogbnVtYmVyKTogQXJyYXk8c3RyaW5nPjtcclxuICAgIElzTWF0Y2goUGxhaW5UZXh0IDogc3RyaW5nLCBQYXR0ZXJuIDogc3RyaW5nKSA6IGJvb2xlYW47XHJcbiAgICBHZXRYUGF0aFJlc3VsdChyZXNwb25zZTpzdHJpbmcsIGV4cHJlc3Npb246c3RyaW5nLCB4cGF0aE5zUmVzb2x2ZXI6YW55LCB0eXBlOm51bWJlcik6IFhQYXRoUmVzdWx0O1xyXG4gICAgUmVtb3ZlTmFtZVNwYWNlKHJlcXVlc3Q6c3RyaW5nKSA6IHN0cmluZztcclxuICAgIEdldFBheUxvYWQoYWN0aW9uIDogc3RyaW5nKSA6IFByb21pc2U8c3RyaW5nPjtcclxuICAgIFN0cmluZ1RvWG1sKHN0clhNTCA6IHN0cmluZyk6IERvY3VtZW50O1xyXG4gICAgRG9jdW1lbnRUb1N0cmluZyhkb2N1bWVudDpEb2N1bWVudCk6IHN0cmluZztcclxufSIsImltcG9ydCB7IElVdGlsaXRhcmlvIH0gZnJvbSBcIi4vSVV0aWxpdGFyaW9cIjtcclxuaW1wb3J0IHsgQWJzdHJhY3RTZXJ2aWNlIH0gZnJvbSBcInNhYnJlLW5ndi1hcHAvYXBwL3NlcnZpY2VzL2ltcGwvQWJzdHJhY3RTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEV4dGVybmFsU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9FeHRlcm5hbFNlcnZpY2VcIjtcclxuaW1wb3J0IHsgWG1sUGF5TG9hZHMgfSBmcm9tIFwiLi9YbWxQYXlMb2Fkc1wiO1xyXG5pbXBvcnQgeyBnZXRTZXJ2aWNlLCBjZiwgY29udGV4dCB9IGZyb20gXCIuLi9Db250ZXh0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVXRpbGl0YXJpbyBleHRlbmRzIEFic3RyYWN0U2VydmljZSBpbXBsZW1lbnRzIElVdGlsaXRhcmlvIHtcclxuICAgIHN0YXRpYyBTRVJWSUNFX05BTUU6IHN0cmluZyA9IFwiY29tLWludGVybm92YS1ndGNwYXltZW50LXdlYi1tb2R1bGUtVXRpbGl0YXJpb1wiO1xyXG5cclxuICAgIEdldFBheUxvYWQoYWN0aW9uOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGw6IHN0cmluZyA9IFhtbFBheUxvYWRzLml0ZW1zW2FjdGlvbl07XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUGF5bG9hZCBcIithY3Rpb24sXCI6XCIscGwpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAocGwgJiYgcGwubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHBsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgR2V0WFBhdGhSZXN1bHQocmVzcG9uc2U6IHN0cmluZywgZXhwcmVzc2lvbjogc3RyaW5nLCB4cGF0aE5zUmVzb2x2ZXI6IGFueSwgdHlwZTogbnVtYmVyKTogWFBhdGhSZXN1bHQge1xyXG4gICAgICAgIHZhciBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHJlc3BvbnNlLCAndGV4dC94bWwnKTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gZG9jLmV2YWx1YXRlKGV4cHJlc3Npb24sIGRvYywgeHBhdGhOc1Jlc29sdmVyLCB0eXBlLCBudWxsKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIElzTWF0Y2goUGxhaW5UZXh0OiBzdHJpbmcsIFBhdHRlcm46IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCByZyA9IG5ldyBSZWdFeHAoUGF0dGVybik7XHJcbiAgICAgICAgcmV0dXJuIHJnLnRlc3QoUGxhaW5UZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRWYWx1ZShQbGFpblRleHQ6IHN0cmluZywgcmVnZXg6IFJlZ0V4cCwgcG9zOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXR1cm5WYWx1ZTogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBsZXQgbTtcclxuXHJcbiAgICAgICAgd2hpbGUgKChtID0gcmVnZXguZXhlYyhQbGFpblRleHQpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICByZWdleC5sYXN0SW5kZXgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtLmZvckVhY2goKG1hdGNoLCBncm91cEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JvdXBJbmRleCA9PT0gcG9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBtYXRjaDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBHZXRWYWx1ZXMoUGxhaW5UZXh0OiBzdHJpbmcsIHJlZ2V4OiBSZWdFeHAsIHBvczogbnVtYmVyKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgbGV0IHZhbHVlcyA9IFtdO1xyXG4gICAgICAgIGxldCBtO1xyXG5cclxuICAgICAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKFBsYWluVGV4dCkpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChtLmluZGV4ID09PSByZWdleC5sYXN0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG0uZm9yRWFjaCgobWF0Y2gsIGdyb3VwSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChncm91cEluZGV4ID09PSBwb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChtYXRjaCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWVzO1xyXG4gICAgfVxyXG5cclxuICAgIFJlbW92ZU5hbWVTcGFjZShyZXF1ZXN0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJlcXVlc3QgPSByZXF1ZXN0LnJlcGxhY2UoL3htbG5zPVxcXCIoLio/KVxcXCIvZywgJycpO1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIEdldFBheUxvYWRJbmZvKGFjdGlvbjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGdldFNlcnZpY2UoRXh0ZXJuYWxTZXJ2aWNlKS5zZW5kUmVxdWVzdCgnR0VUJywgYWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3ApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignZXJyLnN0YXR1c1RleHQ6JywgZXJyLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBTdHJpbmdUb1htbChzdHJYTUw6IHN0cmluZyk6IERvY3VtZW50IHtcclxuICAgICAgICB2YXIgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhzdHJYTUwsIFwidGV4dC94bWxcIik7XHJcbiAgICAgICAgcmV0dXJuIGRvYztcclxuICAgIH1cclxuXHJcbiAgICBEb2N1bWVudFRvU3RyaW5nKGRvY3VtZW50OiBEb2N1bWVudCk6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIHJldHVyblZhbHVlID0gbmV3IFhNTFNlcmlhbGl6ZXIoKS5zZXJpYWxpemVUb1N0cmluZyhkb2N1bWVudClcclxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIFhtbFBheUxvYWRzIHtcclxuICBwdWJsaWMgc3RhdGljIGl0ZW1zID0ge1xyXG4gICAgXCJBZGRBY2NvdW50aW5nTGluZUxMU1JRXCI6IGA8QWRkQWNjb3VudGluZ0xpbmVSUSBUaW1lU3RhbXA9XCIyMDE1LTA0LTA5VDE0OjMwOjAwLTA2OjAwXCIgVmVyc2lvbj1cIjIuMC4wXCI+XHJcbiAgPEFpckFjY291bnRpbmdMaW5lcz5cclxuICAgIDxJbnRlcmFjdGl2ZUVsZWN0cm9uaWNUaWNrZXQ+XHJcbiAgICAgIDxGT1BfT25lIFR5cGU9XCJDS1wiLz5cclxuICAgICAgPEl0aW5Ub3RhbEZhcmU+XHJcbiAgICAgICAgPEJhc2VGYXJlIEFtb3VudD1cIjAuMDBcIi8+XHJcbiAgICAgICAgPENvbW1pc3Npb24gQW1vdW50PVwiMC4wMFwiLz5cclxuICAgICAgICA8VGF4ZXM+XHJcbiAgICAgICAgICA8VGF4IEFtb3VudD1cIjAuMDBcIi8+XHJcbiAgICAgICAgPC9UYXhlcz5cclxuICAgICAgPC9JdGluVG90YWxGYXJlPlxyXG4gICAgICA8UGVyc29uTmFtZSBOYW1lTnVtYmVyPVwiMS4xXCI+XHJcbiAgICAgICAgPEdpdmVuTmFtZT48L0dpdmVuTmFtZT5cclxuICAgICAgICA8U3VybmFtZT48L1N1cm5hbWU+XHJcbiAgICAgIDwvUGVyc29uTmFtZT5cclxuICAgICAgPFRpY2tldGluZyBlVGlja2V0TnVtYmVyPVwiMjgyODI4MjgyODBcIiBOdW1Eb2NzPVwiMVwiIFRhcmlmZj1cIkRcIi8+XHJcbiAgICAgIDxUeXBlIEluZm89XCJPTkVcIi8+XHJcbiAgICAgIDxWZW5kb3JQcmVmcz5cclxuICAgICAgICA8QWlybGluZSBDb2RlPVwiRExcIi8+XHJcbiAgICAgIDwvVmVuZG9yUHJlZnM+XHJcbiAgICA8L0ludGVyYWN0aXZlRWxlY3Ryb25pY1RpY2tldD5cclxuICA8L0FpckFjY291bnRpbmdMaW5lcz5cclxuPC9BZGRBY2NvdW50aW5nTGluZVJRPmAsXHJcblxyXG4gICAgXCJVcGRhdGVSZXNlcnZhdGlvblJRQ2FyXCI6IGA8VXBkYXRlUmVzZXJ2YXRpb25SUSB4bWxucz1cImh0dHA6Ly93ZWJzZXJ2aWNlcy5zYWJyZS5jb20vcG5yYnVpbGRlci92MV8xOVwiXHJcbnhtbG5zOm5zMj1cImh0dHA6Ly9zZXJ2aWNlcy5zYWJyZS5jb20vcmVzL29yL3YxXzE0XCIgVmVyc2lvbj1cIjEuMTkuMFwiPlxyXG48UmVzZXJ2YXRpb25VcGRhdGVMaXN0PlxyXG4gIDxSZXNlcnZhdGlvblVwZGF0ZUl0ZW0+XHJcbiAgICA8UHJvZHVjdFVwZGF0ZSBvcD1cIkNcIj5cclxuICAgICAgPFByb2R1Y3Q+XHJcbiAgICAgICAgPG5zMjpQcm9kdWN0RGV0YWlscyBlbmREYXRlVGltZT1cIlwiIHN0YXJ0RGF0ZVRpbWU9XCJcIiBzdGFydFBvaW50PVwiXCIgc3RhdHVzQ29kZT1cIkdLXCIgdmVuZG9yQ29kZT1cIlwiPlxyXG4gICAgICAgICAgPG5zMjpQcm9kdWN0TmFtZSB0eXBlPVwiQ0FSXCIvPlxyXG4gICAgICAgICAgPG5zMjpWZWhpY2xlPlxyXG4gICAgICAgICAgICA8bnMyOkNvbmZpcm1hdGlvbk51bWJlcj48L25zMjpDb25maXJtYXRpb25OdW1iZXI+XHJcbiAgICAgICAgICAgIDxuczI6VmVoaWNsZVJlbnRhbENvcmU+XHJcbiAgICAgICAgICAgICAgPG5zMjpEcm9wT2ZmTG9jYXRpb25EZXRhaWxzIGxvY2F0aW9uQ29kZT1cIlwiLz5cclxuICAgICAgICAgICAgICA8bnMyOkxvY2F0aW9uRGV0YWlscyBsb2NhdGlvbkNvZGU9XCJcIi8+XHJcbiAgICAgICAgICAgIDwvbnMyOlZlaGljbGVSZW50YWxDb3JlPlxyXG4gICAgICAgICAgICA8bnMyOlZlaGljbGVWZW5kb3JBdmFpbD5cclxuICAgICAgICAgICAgICA8bnMyOlZlaGljbGVSZXNDb3JlPlxyXG4gICAgICAgICAgICAgICAgPG5zMjpQcmljZWRFcXVpcG1lbnQgZXF1aXBtZW50VHlwZT1cIlwiIHF1YW50aXR5PVwiMVwiLz5cclxuICAgICAgICAgICAgICAgIDxuczI6UmVudGFsUmF0ZT5cclxuICAgICAgICAgICAgICAgICAgPG5zMjpCaWxsaW5nIHJlZmVyZW5jZT1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgPG5zMjpDbGllbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5zMjpJRD48L25zMjpJRD5cclxuICAgICAgICAgICAgICAgICAgPC9uczI6Q2xpZW50PlxyXG4gICAgICAgICAgICAgICAgICA8bnMyOlNlcnZpY2VJbmZvcm1hdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxuczI6VGV4dD48L25zMjpUZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L25zMjpTZXJ2aWNlSW5mb3JtYXRpb24+XHJcbiAgICAgICAgICAgICAgICA8L25zMjpSZW50YWxSYXRlPlxyXG4gICAgICAgICAgICAgICAgPG5zMjpDaGFyZ2UgZHJvcE9mZkNoYXJnZT1cIlwiIHR5cGVPZkd1YXJhbnRlZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9uczI6VmVoaWNsZVJlc0NvcmU+XHJcbiAgICAgICAgICAgIDwvbnMyOlZlaGljbGVWZW5kb3JBdmFpbD5cclxuICAgICAgICAgICAgPG5zMjpQcmljaW5nRWxlbWVudHM+XHJcbiAgICAgICAgICAgIDwvbnMyOlByaWNpbmdFbGVtZW50cz5cclxuICAgICAgICAgIDwvbnMyOlZlaGljbGU+XHJcbiAgICAgICAgPC9uczI6UHJvZHVjdERldGFpbHM+XHJcbiAgICAgIDwvUHJvZHVjdD5cclxuICAgIDwvUHJvZHVjdFVwZGF0ZT5cclxuICA8L1Jlc2VydmF0aW9uVXBkYXRlSXRlbT5cclxuPC9SZXNlcnZhdGlvblVwZGF0ZUxpc3Q+XHJcbjwvVXBkYXRlUmVzZXJ2YXRpb25SUT5gLFxyXG5cclxuXCJVcGRhdGVSZXNlcnZhdGlvblJRcm1rXCI6IGA8VXBkYXRlUmVzZXJ2YXRpb25SUSB4bWxucz1cImh0dHA6Ly93ZWJzZXJ2aWNlcy5zYWJyZS5jb20vcG5yYnVpbGRlci92MV8xOVwiIHhtbG5zOm9yPVwiaHR0cDovL3NlcnZpY2VzLnNhYnJlLmNvbS9yZXMvb3IvdjFfMTJcIiBWZXJzaW9uPVwiMS4xOS4wXCIgRWNob1Rva2VuPVwiUksvRU5WL1BYR1NTRE1MVC02MDcwM1wiPlxyXG48UmVxdWVzdFR5cGU+U3RhdGVmdWw8L1JlcXVlc3RUeXBlPlxyXG4gIDxSZXNlcnZhdGlvblVwZGF0ZUxpc3Q+XHJcbiAgICAgIDxSZXNlcnZhdGlvblVwZGF0ZUl0ZW0+XHJcbiAgICAgIDwvUmVzZXJ2YXRpb25VcGRhdGVJdGVtPlxyXG4gIDwvUmVzZXJ2YXRpb25VcGRhdGVMaXN0PlxyXG48L1VwZGF0ZVJlc2VydmF0aW9uUlE+YCxcclxuXHJcbiAgICBcIlVwZGF0ZVJlc2VydmF0aW9uUlFIb3RlbFwiOiBgPFVwZGF0ZVJlc2VydmF0aW9uUlEgeG1sbnM9XCJodHRwOi8vd2Vic2VydmljZXMuc2FicmUuY29tL3BucmJ1aWxkZXIvdjFfMTlcIlxyXG54bWxuczpuczI9XCJodHRwOi8vc2VydmljZXMuc2FicmUuY29tL3Jlcy9vci92MV8xNFwiIFZlcnNpb249XCIxLjE5LjBcIj5cclxuICA8UmVzZXJ2YXRpb25VcGRhdGVMaXN0PlxyXG4gICAgPFJlc2VydmF0aW9uVXBkYXRlSXRlbT5cclxuICAgICAgPFByb2R1Y3RVcGRhdGUgb3A9XCJDXCI+XHJcbiAgICAgICAgPFByb2R1Y3Q+XHJcbiAgICAgICAgICA8bnMyOlByb2R1Y3REZXRhaWxzPlxyXG4gICAgICAgICAgICA8bnMyOlByb2R1Y3ROYW1lIHR5cGU9XCJISFRcIi8+XHJcbiAgICAgICAgICAgIDxuczI6SG90ZWw+XHJcbiAgICAgICAgICAgICAgPG5zMjpSZXNlcnZhdGlvbj5cclxuICAgICAgICAgICAgICAgIDxuczI6TGluZVN0YXR1cz5HSzwvbnMyOkxpbmVTdGF0dXM+XHJcbiAgICAgICAgICAgICAgICA8bnMyOlNwZWNpYWxQcmVmcz5cclxuICAgICAgICAgICAgICAgIDwvbnMyOlNwZWNpYWxQcmVmcz5cclxuICAgICAgICAgICAgICAgIDxuczI6Um9vbVR5cGU+XHJcbiAgICAgICAgICAgICAgICAgIDxuczI6Um9vbVR5cGVDb2RlPjwvbnMyOlJvb21UeXBlQ29kZT5cclxuICAgICAgICAgICAgICAgICAgPG5zMjpOdW1iZXJPZlVuaXRzPjwvbnMyOk51bWJlck9mVW5pdHM+XHJcbiAgICAgICAgICAgICAgICA8L25zMjpSb29tVHlwZT5cclxuICAgICAgICAgICAgICAgIDxuczI6Um9vbVJhdGVzPlxyXG4gICAgICAgICAgICAgICAgICA8bnMyOkFtb3VudEJlZm9yZVRheD48L25zMjpBbW91bnRCZWZvcmVUYXg+XHJcbiAgICAgICAgICAgICAgICAgIDxuczI6Q3VycmVuY3lDb2RlPjwvbnMyOkN1cnJlbmN5Q29kZT5cclxuICAgICAgICAgICAgICAgIDwvbnMyOlJvb21SYXRlcz5cclxuICAgICAgICAgICAgICAgIDxuczI6VGltZVNwYW5TdGFydD48L25zMjpUaW1lU3BhblN0YXJ0PlxyXG4gICAgICAgICAgICAgICAgPG5zMjpUaW1lU3BhbkVuZD48L25zMjpUaW1lU3BhbkVuZD5cclxuICAgICAgICAgICAgICAgIDxuczI6R3VhcmFudGVlPlxyXG4gICAgICAgICAgICAgICAgPC9uczI6R3VhcmFudGVlPlxyXG4gICAgICAgICAgICAgICAgPG5zMjpDaGFpbkNvZGU+PC9uczI6Q2hhaW5Db2RlPlxyXG4gICAgICAgICAgICAgICAgPG5zMjpIb3RlbENpdHlDb2RlPjwvbnMyOkhvdGVsQ2l0eUNvZGU+XHJcbiAgICAgICAgICAgICAgICA8bnMyOkhvdGVsTmFtZT48L25zMjpIb3RlbE5hbWU+XHJcbiAgICAgICAgICAgICAgPC9uczI6UmVzZXJ2YXRpb24+XHJcbiAgICAgICAgICAgICAgPG5zMjpBZGRpdGlvbmFsSW5mb3JtYXRpb24+XHJcbiAgICAgICAgICAgICAgICA8bnMyOkNvbmZpcm1hdGlvbk51bWJlcj48L25zMjpDb25maXJtYXRpb25OdW1iZXI+XHJcbiAgICAgICAgICAgICAgICA8bnMyOkFkZHJlc3M+XHJcbiAgICAgICAgICAgICAgICA8L25zMjpBZGRyZXNzPlxyXG4gICAgICAgICAgICAgICAgPG5zMjpDb250YWN0TnVtYmVycz5cclxuICAgICAgICAgICAgICAgICAgPG5zMjpQaG9uZU51bWJlcj48L25zMjpQaG9uZU51bWJlcj5cclxuICAgICAgICAgICAgICAgIDwvbnMyOkNvbnRhY3ROdW1iZXJzPlxyXG4gICAgICAgICAgICAgIDwvbnMyOkFkZGl0aW9uYWxJbmZvcm1hdGlvbj5cclxuICAgICAgICAgICAgPC9uczI6SG90ZWw+XHJcbiAgICAgICAgICA8L25zMjpQcm9kdWN0RGV0YWlscz5cclxuICAgICAgICA8L1Byb2R1Y3Q+XHJcbiAgICAgIDwvUHJvZHVjdFVwZGF0ZT5cclxuICAgIDwvUmVzZXJ2YXRpb25VcGRhdGVJdGVtPlxyXG4gIDwvUmVzZXJ2YXRpb25VcGRhdGVMaXN0PlxyXG48L1VwZGF0ZVJlc2VydmF0aW9uUlE+YCxcclxuXHJcbiAgICBcIkFkZFJlbWFya0xMU1JRXCI6IGBcclxuPEFkZFJlbWFya1JRIHhtbG5zPVwiaHR0cDovL3dlYnNlcnZpY2VzLnNhYnJlLmNvbS9zYWJyZVhNTC8yMDExLzEwXCIgeG1sbnM6eHM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYVwiIHhtbG5zOnhzaT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXCIgUmV0dXJuSG9zdENvbW1hbmQ9XCJ0cnVlXCIgVmVyc2lvbj1cIjIuMS4xXCI+XHJcbjxSZW1hcmtJbmZvPlxyXG48L1JlbWFya0luZm8+XHJcbjwvQWRkUmVtYXJrUlE+YCxcclxuXHJcbiAgICBcIkNvbnRleHRDaGFuZ2VMTFNSUVwiOiBgICAgICAgICBcclxuPENvbnRleHRDaGFuZ2VSUSBWZXJzaW9uPVwiMi4wLjNcIlxyXG54bWxucz1cImh0dHA6Ly93ZWJzZXJ2aWNlcy5zYWJyZS5jb20vc2FicmVYTUwvMjAxMS8xMFwiPlxyXG48Q2hhbmdlQUFBIFBzZXVkb0NpdHlDb2RlPVwiS0EwSlwiLz5cclxuPC9Db250ZXh0Q2hhbmdlUlE+YCxcclxuXHJcbiAgICBcIkVQU19FWFRfUHJvZmlsZVJlYWRSUVwiOiBgICAgICAgICBcclxuPFNhYnJlX09UQV9Qcm9maWxlUmVhZFJRIHhtbG5zPVwiaHR0cDovL3d3dy5zYWJyZS5jb20vZXBzL3NjaGVtYXNcIlxyXG54bWxuczp4c2k9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVwiIHhzaTpzY2hlbWFMb2NhdGlvbj1cImh0dHA6Ly93d3cuc2FicmUuY29tL2Vwcy9zY2hlbWFzICAgICAgICBcclxuICAgICAgICAuLlxcc2NoZW1hc1dTRExcXFNhYnJlX09UQV9Qcm9maWxlUmVhZFJRLnhzZFwiIFZlcnNpb249XCI2LjU1XCI+XHJcbjxQcm9maWxlPlxyXG4gIDxUUEFfSWRlbnRpdHkgVW5pcXVlSUQ9XCIyMjkyODExOTdcIiBDbGllbnRDb2RlPVwiVE5cIiBEb21haW5JRD1cIktBMEpcIiBDbGllbnRDb250ZXh0Q29kZT1cIk1ZU1wiPlxyXG4gIDwvVFBBX0lkZW50aXR5PlxyXG48L1Byb2ZpbGU+XHJcbjwvU2FicmVfT1RBX1Byb2ZpbGVSZWFkUlE+YCxcclxuXHJcbiAgICBcImVUaWNrZXRDb3Vwb25MTFNSUVwiOiBgXHJcbjxlVGlja2V0Q291cG9uUlEgeG1sbnM9XCJodHRwOi8vd2Vic2VydmljZXMuc2FicmUuY29tL3NhYnJlWE1MLzIwMTEvMTBcIiBWZXJzaW9uPVwiMi4wLjBcIiBSZXR1cm5Ib3N0Q29tbWFuZD1cInRydWVcIj5cclxuPFRpY2tldGluZyBlVGlja2V0TnVtYmVyPVwiMjIwNDg5ODM1MTU4MFwiLz5cclxuPC9lVGlja2V0Q291cG9uUlE+YCxcclxuXHJcbiAgICBcIkdldFJlc2VydmF0aW9uUlFfV2l0aFNlc3Npb25cIjogYFxyXG48U09BUC1FTlY6RW52ZWxvcGUgeG1sbnM6U09BUC1FTlY9XCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy9zb2FwL2VudmVsb3BlL1wiXHJcbnhtbG5zOmViPVwiaHR0cDovL3d3dy5lYnhtbC5vcmcvbmFtZXNwYWNlcy9tZXNzYWdlSGVhZGVyXCJcclxueG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcclxueG1sbnM6eHNkPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS9YTUxTY2hlbWFcIj5cclxuPFNPQVAtRU5WOkhlYWRlcj5cclxuICA8ZWI6TWVzc2FnZUhlYWRlciBTT0FQLUVOVjptdXN0VW5kZXJzdGFuZD1cIjFcIiBlYjp2ZXJzaW9uPVwiMS4wXCI+XHJcbiAgICA8ZWI6RnJvbT5cclxuICAgICAgPGViOlBhcnR5SWQgdHlwZT1cInVybjp4MTIub3JnOklPNTowMVwiPjk5OTk5OTwvZWI6UGFydHlJZD5cclxuICAgIDwvZWI6RnJvbT5cclxuICAgIDxlYjpUbz5cclxuICAgICAgPGViOlBhcnR5SWQgdHlwZT1cInVybjp4MTIub3JnOklPNTowMVwiPjEyMzEyMzwvZWI6UGFydHlJZD5cclxuICAgIDwvZWI6VG8+XHJcbiAgICA8ZWI6Q1BBSWQ+VTUxMTwvZWI6Q1BBSWQ+XHJcbiAgICA8ZWI6Q29udmVyc2F0aW9uSWQ+d2Vic2VydmljZXMuc3VwcG9ydEBzYWJyZS5jb208L2ViOkNvbnZlcnNhdGlvbklkPlxyXG4gICAgPGViOlNlcnZpY2UgZWI6dHlwZT1cIk9UQVwiPkFpcjwvZWI6U2VydmljZT5cclxuICAgIDxlYjpBY3Rpb24+R2V0UmVzZXJ2YXRpb25SUTwvZWI6QWN0aW9uPlxyXG4gICAgPGViOk1lc3NhZ2VEYXRhPlxyXG4gICAgICA8ZWI6TWVzc2FnZUlkPjEwMDA8L2ViOk1lc3NhZ2VJZD5cclxuICAgICAgPGViOlRpbWVzdGFtcD4yMDE2LTEyLTMwVDA1OjI1OjMyejwvZWI6VGltZXN0YW1wPlxyXG4gICAgPC9lYjpNZXNzYWdlRGF0YT5cclxuICA8L2ViOk1lc3NhZ2VIZWFkZXI+XHJcbiAgPHdzc2U6U2VjdXJpdHkgeG1sbnM6d3NzZT1cImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDIvMTIvc2VjZXh0XCJcclxuICAgIHhtbG5zOndzdT1cImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDIvMTIvdXRpbGl0eVwiPlxyXG4gICAgPHdzc2U6QmluYXJ5U2VjdXJpdHlUb2tlbj48L3dzc2U6QmluYXJ5U2VjdXJpdHlUb2tlbj5cclxuICA8L3dzc2U6U2VjdXJpdHk+XHJcbjwvU09BUC1FTlY6SGVhZGVyPlxyXG48U09BUC1FTlY6Qm9keT5cclxuICA8R2V0UmVzZXJ2YXRpb25SUSBWZXJzaW9uPVwiMS4xOS4wXCJcclxuICAgIHhtbG5zPVwiaHR0cDovL3dlYnNlcnZpY2VzLnNhYnJlLmNvbS9wbnJidWlsZGVyL3YxXzE5XCI+XHJcbiAgICA8TG9jYXRvcj5QVlNGSVA8L0xvY2F0b3I+XHJcbiAgICA8UmVxdWVzdFR5cGU+U3RhdGVmdWw8L1JlcXVlc3RUeXBlPlxyXG4gICAgPFJldHVybk9wdGlvbnMgUHJpY2VRdW90ZVNlcnZpY2VWZXJzaW9uPVwiMy4yLjBcIj5cclxuICAgICAgPFN1YmplY3RBcmVhcz5cclxuICAgICAgICA8U3ViamVjdEFyZWE+RlVMTDwvU3ViamVjdEFyZWE+XHJcbiAgICAgICAgPFN1YmplY3RBcmVhPlBSSUNFX1FVT1RFPC9TdWJqZWN0QXJlYT5cclxuICAgICAgPC9TdWJqZWN0QXJlYXM+XHJcbiAgICA8L1JldHVybk9wdGlvbnM+XHJcbiAgPC9HZXRSZXNlcnZhdGlvblJRPlxyXG48L1NPQVAtRU5WOkJvZHk+XHJcbjwvU09BUC1FTlY6RW52ZWxvcGU+YCxcclxuXHJcbiAgICBcIkdldFJlc2VydmF0aW9uUlFcIjogYFxyXG48R2V0UmVzZXJ2YXRpb25SUSBWZXJzaW9uPVwiMS4xOS4wXCJcclxueG1sbnM9XCJodHRwOi8vd2Vic2VydmljZXMuc2FicmUuY29tL3BucmJ1aWxkZXIvdjFfMTlcIj5cclxuPFJlcXVlc3RUeXBlPlN0YXRlZnVsPC9SZXF1ZXN0VHlwZT5cclxuPFJldHVybk9wdGlvbnM+XHJcbiAgPFZpZXdOYW1lPlZhRGVmYXVsdFdpdGhQcTwvVmlld05hbWU+XHJcbiAgPFJlc3BvbnNlRm9ybWF0PlNUTDwvUmVzcG9uc2VGb3JtYXQ+XHJcbjwvUmV0dXJuT3B0aW9ucz5cclxuPC9HZXRSZXNlcnZhdGlvblJRPmAsXHJcblxyXG4gICAgXCJJZ25vcmVUcmFuc2FjdGlvbkxMU1JRX1dpdGhTZXNzaW9uXCI6IGBcclxuPFNPQVAtRU5WOkVudmVsb3BlIHhtbG5zOlNPQVAtRU5WPVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvc29hcC9lbnZlbG9wZS9cIlxyXG54bWxuczplYj1cImh0dHA6Ly93d3cuZWJ4bWwub3JnL25hbWVzcGFjZXMvbWVzc2FnZUhlYWRlclwiXHJcbnhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXHJcbnhtbG5zOnhzZD1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkvWE1MU2NoZW1hXCI+XHJcbjxTT0FQLUVOVjpIZWFkZXI+XHJcbiAgPGViOk1lc3NhZ2VIZWFkZXIgU09BUC1FTlY6bXVzdFVuZGVyc3RhbmQ9XCIxXCIgZWI6dmVyc2lvbj1cIjEuMFwiPlxyXG4gICAgPGViOkZyb20+XHJcbiAgICAgIDxlYjpQYXJ0eUlkIHR5cGU9XCJ1cm46eDEyLm9yZzpJTzU6MDFcIj45OTk5OTk8L2ViOlBhcnR5SWQ+XHJcbiAgICA8L2ViOkZyb20+XHJcbiAgICA8ZWI6VG8+XHJcbiAgICAgIDxlYjpQYXJ0eUlkIHR5cGU9XCJ1cm46eDEyLm9yZzpJTzU6MDFcIj4xMjMxMjM8L2ViOlBhcnR5SWQ+XHJcbiAgICA8L2ViOlRvPlxyXG4gICAgPGViOkNQQUlkPktBMEo8L2ViOkNQQUlkPlxyXG4gICAgPGViOkNvbnZlcnNhdGlvbklkPndlYnNlcnZpY2VzLnN1cHBvcnRAc2FicmUuY29tPC9lYjpDb252ZXJzYXRpb25JZD5cclxuICAgIDxlYjpTZXJ2aWNlIGViOnR5cGU9XCJPVEFcIj5JZ25vcmVUcmFuc2FjdGlvbkxMU1JRPC9lYjpTZXJ2aWNlPlxyXG4gICAgPGViOkFjdGlvbj5JZ25vcmVUcmFuc2FjdGlvbkxMU1JRPC9lYjpBY3Rpb24+XHJcbiAgICA8ZWI6TWVzc2FnZURhdGE+XHJcbiAgICAgIDxlYjpNZXNzYWdlSWQ+MTAwMDwvZWI6TWVzc2FnZUlkPlxyXG4gICAgICA8ZWI6VGltZXN0YW1wPjIwMTYtMTItMzBUMDU6MjU6MzJ6PC9lYjpUaW1lc3RhbXA+XHJcbiAgICA8L2ViOk1lc3NhZ2VEYXRhPlxyXG4gIDwvZWI6TWVzc2FnZUhlYWRlcj5cclxuICA8d3NzZTpTZWN1cml0eSB4bWxuczp3c3NlPVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwMi8xMi9zZWNleHRcIlxyXG4gICAgeG1sbnM6d3N1PVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwMi8xMi91dGlsaXR5XCI+XHJcbiAgICA8d3NzZTpCaW5hcnlTZWN1cml0eVRva2VuPjwvd3NzZTpCaW5hcnlTZWN1cml0eVRva2VuPlxyXG4gIDwvd3NzZTpTZWN1cml0eT5cclxuPC9TT0FQLUVOVjpIZWFkZXI+XHJcbjxTT0FQLUVOVjpCb2R5PlxyXG4gIDxJZ25vcmVUcmFuc2FjdGlvblJRIFJldHVybkhvc3RDb21tYW5kPVwidHJ1ZVwiIFZlcnNpb249XCIyLjAuMFwiXHJcbiAgICB4bWxucz1cImh0dHA6Ly93ZWJzZXJ2aWNlcy5zYWJyZS5jb20vc2FicmVYTUwvMjAxMS8xMFwiLz5cclxuPC9TT0FQLUVOVjpCb2R5PlxyXG48L1NPQVAtRU5WOkVudmVsb3BlPmAsXHJcblxyXG4gICAgXCJQYXNzZW5nZXJEZXRhaWxzUlFfV2l0aFNlc3Npb25cIjogYFxyXG48U09BUC1FTlY6RW52ZWxvcGUgeG1sbnM6U09BUC1FTlY9XCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy9zb2FwL2VudmVsb3BlL1wiXHJcbnhtbG5zOmViPVwiaHR0cDovL3d3dy5lYnhtbC5vcmcvbmFtZXNwYWNlcy9tZXNzYWdlSGVhZGVyXCJcclxueG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcclxueG1sbnM6eHNkPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS9YTUxTY2hlbWFcIj5cclxuPFNPQVAtRU5WOkhlYWRlcj5cclxuICA8ZWI6TWVzc2FnZUhlYWRlciBTT0FQLUVOVjptdXN0VW5kZXJzdGFuZD1cIjFcIiBlYjp2ZXJzaW9uPVwiMS4wXCI+XHJcbiAgICA8ZWI6RnJvbT5cclxuICAgICAgPGViOlBhcnR5SWQgdHlwZT1cInVybjp4MTIub3JnOklPNTowMVwiPjk5OTk5OTwvZWI6UGFydHlJZD5cclxuICAgIDwvZWI6RnJvbT5cclxuICAgIDxlYjpUbz5cclxuICAgICAgPGViOlBhcnR5SWQgdHlwZT1cInVybjp4MTIub3JnOklPNTowMVwiPjEyMzEyMzwvZWI6UGFydHlJZD5cclxuICAgIDwvZWI6VG8+XHJcbiAgICA8ZWI6Q1BBSWQ+S0EwSjwvZWI6Q1BBSWQ+XHJcbiAgICA8ZWI6Q29udmVyc2F0aW9uSWQ+d2Vic2VydmljZXMuc3VwcG9ydEBzYWJyZS5jb208L2ViOkNvbnZlcnNhdGlvbklkPlxyXG4gICAgPGViOlNlcnZpY2UgZWI6dHlwZT1cIk9UQVwiPlBhc3NlbmdlckRldGFpbHNSUTwvZWI6U2VydmljZT5cclxuICAgIDxlYjpBY3Rpb24+UGFzc2VuZ2VyRGV0YWlsc1JRPC9lYjpBY3Rpb24+XHJcbiAgICA8ZWI6TWVzc2FnZURhdGE+XHJcbiAgICAgIDxlYjpNZXNzYWdlSWQ+MTAwMDwvZWI6TWVzc2FnZUlkPlxyXG4gICAgICA8ZWI6VGltZXN0YW1wPjIwMTYtMTItMzBUMDU6MjU6MzJ6PC9lYjpUaW1lc3RhbXA+XHJcbiAgICA8L2ViOk1lc3NhZ2VEYXRhPlxyXG4gIDwvZWI6TWVzc2FnZUhlYWRlcj5cclxuICA8d3NzZTpTZWN1cml0eSB4bWxuczp3c3NlPVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwMi8xMi9zZWNleHRcIlxyXG4gICAgeG1sbnM6d3N1PVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwMi8xMi91dGlsaXR5XCI+XHJcbiAgICA8d3NzZTpCaW5hcnlTZWN1cml0eVRva2VuPjwvd3NzZTpCaW5hcnlTZWN1cml0eVRva2VuPlxyXG4gIDwvd3NzZTpTZWN1cml0eT5cclxuPC9TT0FQLUVOVjpIZWFkZXI+XHJcbjxTT0FQLUVOVjpCb2R5PlxyXG4gIDxQYXNzZW5nZXJEZXRhaWxzUlEgeG1sbnM9XCJodHRwOi8vc2VydmljZXMuc2FicmUuY29tL3NwL3BkL3YzXzRcIiB2ZXJzaW9uPVwiMy40LjBcIiBpZ25vcmVPbkVycm9yPVwiZmFsc2VcIiBoYWx0T25FcnJvcj1cImZhbHNlXCI+XHJcbiAgICA8TWlzY1NlZ21lbnRTZWxsUlE+XHJcbiAgICAgIDxNaXNjU2VnbWVudCBEZXBhcnR1cmVEYXRlVGltZT1cIjEyLTIxXCIgSW5zZXJ0QWZ0ZXI9XCIwXCIgTnVtYmVySW5QYXJ0eT1cIjFcIiBTdGF0dXM9XCJHS1wiIFR5cGU9XCJPVEhcIj5cclxuICAgICAgICA8T3JpZ2luTG9jYXRpb24gTG9jYXRpb25Db2RlPVwiRlNHXCIvPlxyXG4gICAgICAgIDxUZXh0PlRFU1Q8L1RleHQ+XHJcbiAgICAgICAgPFZlbmRvclByZWZzPlxyXG4gICAgICAgICAgPEFpcmxpbmUgQ29kZT1cIlhYXCIvPlxyXG4gICAgICAgIDwvVmVuZG9yUHJlZnM+XHJcbiAgICAgIDwvTWlzY1NlZ21lbnQ+XHJcbiAgICA8L01pc2NTZWdtZW50U2VsbFJRPlxyXG4gICAgPFBvc3RQcm9jZXNzaW5nIGhhbHRPbkludmFsaWRNQ1Q9XCJmYWxzZVwiIGlnbm9yZUFmdGVyPVwidHJ1ZVwiIHVubWFza0NyZWRpdENhcmQ9XCJmYWxzZVwiPlxyXG4gICAgICA8UmVkaXNwbGF5UmVzZXJ2YXRpb24gd2FpdEludGVydmFsPVwiMTAwXCIgcmV0dXJuRXh0ZW5kZWRQcmljZVF1b3RlPVwiZmFsc2VcIi8+XHJcbiAgICAgIDxFbmRUcmFuc2FjdGlvblJRIHNob3VsZENoZWNrUmVmSWQ9XCJ0cnVlXCI+XHJcbiAgICAgICAgPEVuZFRyYW5zYWN0aW9uIEluZD1cInRydWVcIi8+XHJcbiAgICAgICAgPFNvdXJjZSBSZWNlaXZlZEZyb209XCJTV1MgVklTVEFKRVRcIi8+XHJcbiAgICAgIDwvRW5kVHJhbnNhY3Rpb25SUT5cclxuICAgICAgPFF1ZXVlUGxhY2VSUSBOdW1SZXNwb25zZXM9XCI1XCI+XHJcbiAgICAgICAgPFF1ZXVlSW5mbz5cclxuICAgICAgICAgIDxRdWV1ZUlkZW50aWZpZXIgTnVtYmVyPVwiNDAwXCIgUHJlZmF0b3J5SW5zdHJ1Y3Rpb25Db2RlPVwiMTBcIiBQc2V1ZG9DaXR5Q29kZT1cIktBMEpcIi8+XHJcbiAgICAgICAgICA8VW5pcXVlSUQgSUQ9XCJVREZKR1pcIi8+XHJcbiAgICAgICAgPC9RdWV1ZUluZm8+XHJcbiAgICAgIDwvUXVldWVQbGFjZVJRPlxyXG4gICAgPC9Qb3N0UHJvY2Vzc2luZz5cclxuICAgIDxQcm9maWxlUlE+XHJcbiAgICAgIDxVbmlxdWVJRCBpZD1cIkNSSFRMXCIvPlxyXG4gICAgPC9Qcm9maWxlUlE+XHJcbiAgICA8U3BlY2lhbFJlcURldGFpbHM+XHJcbiAgICAgIDxBZGRSZW1hcmtSUT5cclxuICAgICAgICA8UmVtYXJrSW5mbz5cclxuICAgICAgICAgIDxSZW1hcmsgQ29kZT1cIkhcIiBUeXBlPVwiQWxwaGEtQ29kZWRcIj5cclxuICAgICAgICAgICAgPFRleHQ+PC9UZXh0PlxyXG4gICAgICAgICAgPC9SZW1hcms+XHJcbiAgICAgICAgPC9SZW1hcmtJbmZvPlxyXG4gICAgICA8L0FkZFJlbWFya1JRPlxyXG4gICAgPC9TcGVjaWFsUmVxRGV0YWlscz5cclxuICA8L1Bhc3NlbmdlckRldGFpbHNSUT5cclxuPC9TT0FQLUVOVjpCb2R5PlxyXG48L1NPQVAtRU5WOkVudmVsb3BlPmAsXHJcblxyXG4gICAgXCJQYXNzZW5nZXJEZXRhaWxzUlFcIjogYFxyXG48UGFzc2VuZ2VyRGV0YWlsc1JRIHhtbG5zPVwiaHR0cDovL3NlcnZpY2VzLnNhYnJlLmNvbS9zcC9wZC92M180XCIgdmVyc2lvbj1cIjMuNC4wXCIgaWdub3JlT25FcnJvcj1cImZhbHNlXCIgaGFsdE9uRXJyb3I9XCJmYWxzZVwiPlxyXG48TWlzY1NlZ21lbnRTZWxsUlE+XHJcbiAgPE1pc2NTZWdtZW50IERlcGFydHVyZURhdGVUaW1lPVwiMTItMjFcIiBJbnNlcnRBZnRlcj1cIjBcIiBOdW1iZXJJblBhcnR5PVwiMVwiIFN0YXR1cz1cIkdLXCIgVHlwZT1cIk9USFwiPlxyXG4gICAgPE9yaWdpbkxvY2F0aW9uIExvY2F0aW9uQ29kZT1cIkZTR1wiLz5cclxuICAgIDxUZXh0PlRFU1Q8L1RleHQ+XHJcbiAgICA8VmVuZG9yUHJlZnM+XHJcbiAgICAgIDxBaXJsaW5lIENvZGU9XCJYWFwiLz5cclxuICAgIDwvVmVuZG9yUHJlZnM+XHJcbiAgPC9NaXNjU2VnbWVudD5cclxuPC9NaXNjU2VnbWVudFNlbGxSUT5cclxuPFBvc3RQcm9jZXNzaW5nIGhhbHRPbkludmFsaWRNQ1Q9XCJmYWxzZVwiIGlnbm9yZUFmdGVyPVwidHJ1ZVwiIHVubWFza0NyZWRpdENhcmQ9XCJmYWxzZVwiPlxyXG4gIDxSZWRpc3BsYXlSZXNlcnZhdGlvbiB3YWl0SW50ZXJ2YWw9XCIxMDBcIiByZXR1cm5FeHRlbmRlZFByaWNlUXVvdGU9XCJmYWxzZVwiLz5cclxuICA8RW5kVHJhbnNhY3Rpb25SUSBzaG91bGRDaGVja1JlZklkPVwidHJ1ZVwiPlxyXG4gICAgPEVuZFRyYW5zYWN0aW9uIEluZD1cInRydWVcIi8+XHJcbiAgICA8U291cmNlIFJlY2VpdmVkRnJvbT1cIlNXUyBWSVNUQUpFVFwiLz5cclxuICA8L0VuZFRyYW5zYWN0aW9uUlE+XHJcbiAgPFF1ZXVlUGxhY2VSUSBOdW1SZXNwb25zZXM9XCI1XCI+XHJcbiAgICA8UXVldWVJbmZvPlxyXG4gICAgICA8UXVldWVJZGVudGlmaWVyIE51bWJlcj1cIjQwMFwiIFByZWZhdG9yeUluc3RydWN0aW9uQ29kZT1cIjEwXCIgUHNldWRvQ2l0eUNvZGU9XCJLQTBKXCIvPlxyXG4gICAgICA8VW5pcXVlSUQgSUQ9XCJVREZKR1pcIi8+XHJcbiAgICA8L1F1ZXVlSW5mbz5cclxuICA8L1F1ZXVlUGxhY2VSUT5cclxuPC9Qb3N0UHJvY2Vzc2luZz5cclxuPFByb2ZpbGVSUT5cclxuICA8VW5pcXVlSUQgaWQ9XCJDUkhUTFwiLz5cclxuPC9Qcm9maWxlUlE+XHJcbjxTcGVjaWFsUmVxRGV0YWlscz5cclxuICA8QWRkUmVtYXJrUlE+XHJcbiAgICA8UmVtYXJrSW5mbz5cclxuICAgICAgPFJlbWFyayBDb2RlPVwiSFwiIFNlZ21lbnROdW1iZXI9XCIxXCIgVHlwZT1cIkdlbmVyYWxcIj5cclxuICAgICAgICA8VGV4dD5URVNUIFJFTUFSSyAyPC9UZXh0PlxyXG4gICAgICA8L1JlbWFyaz5cclxuICAgIDwvUmVtYXJrSW5mbz5cclxuICA8L0FkZFJlbWFya1JRPlxyXG48L1NwZWNpYWxSZXFEZXRhaWxzPlxyXG48L1Bhc3NlbmdlckRldGFpbHNSUT5gLFxyXG5cclxuICAgIFwiUXVldWVQbGFjZVJRXCI6IGA8UXVldWVQbGFjZVJRIHhtbG5zPVwiaHR0cDovL3dlYnNlcnZpY2VzLnNhYnJlLmNvbS9zYWJyZVhNTC8yMDExLzEwXCJcclxueG1sbnM6eHM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYVwiXHJcbnhtbG5zOnhzaT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXCIgVmVyc2lvbj1cIjIuMC40XCI+XHJcbjxRdWV1ZUluZm8+XHJcbjxRdWV1ZUlkZW50aWZpZXIgTnVtYmVyPVwiXCIgUHJlZmF0b3J5SW5zdHJ1Y3Rpb25Db2RlPVwiMTFcIiBQc2V1ZG9DaXR5Q29kZT1cIlwiLz5cclxuPC9RdWV1ZUluZm8+XHJcbjwvUXVldWVQbGFjZVJRPmAsXHJcblxyXG4gICAgXCJTYWJyZV9PVEFfUHJvZmlsZVJlYWRSUVwiOiBgXHJcbjxTYWJyZV9PVEFfUHJvZmlsZVJlYWRSUSB4bWxucz1cImh0dHA6Ly93d3cuc2FicmUuY29tL2Vwcy9zY2hlbWFzXCJcclxueG1sbnM6eHNpPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcIiB4c2k6c2NoZW1hTG9jYXRpb249XCJodHRwOi8vd3d3LnNhYnJlLmNvbS9lcHMvc2NoZW1hc1xyXG4uLlxcc2NoZW1hc1dTRExcXFNhYnJlX09UQV9Qcm9maWxlUmVhZFJRLnhzZFwiIFZlcnNpb249XCI2LjU1XCI+XHJcbjxQcm9maWxlPlxyXG48VFBBX0lkZW50aXR5IFVuaXF1ZUlEPVwiKlwiIENsaWVudENvZGU9XCJcIiBEb21haW5JRD1cIlwiIFByb2ZpbGVUeXBlQ29kZT1cIlwiIENsaWVudENvbnRleHRDb2RlPVwiXCIgLz5cclxuPC9Qcm9maWxlPlxyXG48L1NhYnJlX09UQV9Qcm9maWxlUmVhZFJRPmAsXHJcblxyXG4gICAgXCJTYWJyZV9PVEFfUHJvZmlsZVNlYXJjaFJRXCI6IGBcclxuPFNhYnJlX09UQV9Qcm9maWxlU2VhcmNoUlEgVmVyc2lvbj1cIjYuMjZcIlxyXG54bWxucz1cImh0dHA6Ly93d3cuc2FicmUuY29tL2Vwcy9zY2hlbWFzXCJcclxueG1sbnM6eHNpPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcIiB4c2k6c2NoZW1hTG9jYXRpb249XCJodHRwOi8vd3d3LnNhYnJlLmNvbS9lcHMvc2NoZW1hcyAuLlxcc2NoZW1hc3dzZGxcXFNhYnJlX09UQV9Qcm9maWxlU2VhcmNoUlEueHNkXCI+XHJcbjxQcm9maWxlU2VhcmNoQ3JpdGVyaWEgUHJvZmlsZU5hbWVPbmx5PVwiWVwiPlxyXG48VFBBX0lkZW50aXR5IENsaWVudENvZGU9XCJcIiBDbGllbnRDb250ZXh0Q29kZT1cIlwiIERvbWFpbklEPVwiXCIgUHJvZmlsZU5hbWU9XCJcIiBQcm9maWxlVHlwZUNvZGU9XCJcIi8+XHJcbjwvUHJvZmlsZVNlYXJjaENyaXRlcmlhPlxyXG48L1NhYnJlX09UQV9Qcm9maWxlU2VhcmNoUlE+YCxcclxuXHJcbiAgICBcIlNhYnJlX09UQV9Qcm9maWxlVG9QTlJSUV9XaXRoU2Vzc2lvblwiOiBgXHJcbjxTT0FQLUVOVjpFbnZlbG9wZSB4bWxuczpTT0FQLUVOVj1cImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3NvYXAvZW52ZWxvcGUvXCJcclxueG1sbnM6ZWI9XCJodHRwOi8vd3d3LmVieG1sLm9yZy9uYW1lc3BhY2VzL21lc3NhZ2VIZWFkZXJcIlxyXG54bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxyXG54bWxuczp4c2Q9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L1hNTFNjaGVtYVwiPlxyXG48U09BUC1FTlY6SGVhZGVyPlxyXG48ZWI6TWVzc2FnZUhlYWRlciBTT0FQLUVOVjptdXN0VW5kZXJzdGFuZD1cIjFcIiBlYjp2ZXJzaW9uPVwiMS4wXCI+XHJcbiAgPGViOkZyb20+XHJcbiAgICA8ZWI6UGFydHlJZCB0eXBlPVwidXJuOngxMi5vcmc6SU81OjAxXCI+OTk5OTk5PC9lYjpQYXJ0eUlkPlxyXG4gIDwvZWI6RnJvbT5cclxuICA8ZWI6VG8+XHJcbiAgICA8ZWI6UGFydHlJZCB0eXBlPVwidXJuOngxMi5vcmc6SU81OjAxXCI+MTIzMTIzPC9lYjpQYXJ0eUlkPlxyXG4gIDwvZWI6VG8+XHJcbiAgPGViOkNQQUlkPktBMEo8L2ViOkNQQUlkPlxyXG4gIDxlYjpDb252ZXJzYXRpb25JZD53ZWJzZXJ2aWNlcy5zdXBwb3J0QHNhYnJlLmNvbTwvZWI6Q29udmVyc2F0aW9uSWQ+XHJcbiAgPGViOlNlcnZpY2UgZWI6dHlwZT1cIk9UQVwiPkVQUzwvZWI6U2VydmljZT5cclxuICA8ZWI6QWN0aW9uPkVQU19FWFRfUHJvZmlsZVRvUE5SUlE8L2ViOkFjdGlvbj5cclxuICA8ZWI6TWVzc2FnZURhdGE+XHJcbiAgICA8ZWI6TWVzc2FnZUlkPjEwMDA8L2ViOk1lc3NhZ2VJZD5cclxuICAgIDxlYjpUaW1lc3RhbXA+MjAxNi0xMi0zMFQwNToyNTozMno8L2ViOlRpbWVzdGFtcD5cclxuICA8L2ViOk1lc3NhZ2VEYXRhPlxyXG48L2ViOk1lc3NhZ2VIZWFkZXI+XHJcbjx3c3NlOlNlY3VyaXR5IHhtbG5zOndzc2U9XCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDAyLzEyL3NlY2V4dFwiXHJcbiAgeG1sbnM6d3N1PVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwMi8xMi91dGlsaXR5XCI+XHJcbiAgPHdzc2U6QmluYXJ5U2VjdXJpdHlUb2tlbj48L3dzc2U6QmluYXJ5U2VjdXJpdHlUb2tlbj5cclxuPC93c3NlOlNlY3VyaXR5PlxyXG48L1NPQVAtRU5WOkhlYWRlcj5cclxuPFNPQVAtRU5WOkJvZHk+XHJcbjxTYWJyZV9PVEFfUHJvZmlsZVRvUE5SUlEgVGFyZ2V0PVwiUHJvZHVjdGlvblwiIFRpbWVTdGFtcD1cIjIwMTMtMDQtMzBUMDg6MjQ6NDIuOTY3WlwiIFZlcnNpb249XCI2LjU1XCIgeHNpOnNjaGVtYUxvY2F0aW9uPVwiaHR0cDovL3d3dy5zYWJyZS5jb20vZXBzL3NjaGVtYXMgXFxzY2hlbWFzXFxTYWJyZV9PVEFfUHJvZmlsZUNyZWF0ZVJRLnhzZFwiXHJcbiAgeG1sbnM9XCJodHRwOi8vd3d3LnNhYnJlLmNvbS9lcHMvc2NoZW1hc1wiXHJcbiAgeG1sbnM6eHNpPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcIj5cclxuICA8RmlsdGVyUGF0aD5cclxuICAgIDxQcm9maWxlIENsaWVudENvZGU9XCJcIiBDbGllbnRDb250ZXh0Q29kZT1cIlwiIERvbWFpbklEPVwiXCIgUHJvZmlsZVR5cGVDb2RlPVwiXCIgVW5pcXVlSUQ9XCJcIiBQcm9maWxlTmFtZT1cIlwiIFBOUk1vdmVPcmRlclNlcU5vPVwiMVwiPlxyXG4gICAgICA8RmlsdGVyIEZpbHRlcklEPVwiXCIgRG9tYWluSUQ9XCJcIiBDbGllbnRDb2RlPVwiXCIgQ2xpZW50Q29udGV4dENvZGU9XCJcIiBGaWx0ZXJOYW1lPVwiXCIvPlxyXG4gICAgPC9Qcm9maWxlPlxyXG4gIDwvRmlsdGVyUGF0aD5cclxuPC9TYWJyZV9PVEFfUHJvZmlsZVRvUE5SUlE+XHJcbjwvU09BUC1FTlY6Qm9keT5cclxuPC9TT0FQLUVOVjpFbnZlbG9wZT5gLFxyXG5cclxuICAgIFwiU2FicmVfT1RBX1Byb2ZpbGVUb1BOUlJRXCI6IGBcclxuPFNhYnJlX09UQV9Qcm9maWxlVG9QTlJSUSBUYXJnZXQ9XCJQcm9kdWN0aW9uXCIgVGltZVN0YW1wPVwiMjAxMy0wNC0zMFQwODoyNDo0Mi45NjdaXCIgVmVyc2lvbj1cIjYuNTVcIiB4c2k6c2NoZW1hTG9jYXRpb249XCJodHRwOi8vd3d3LnNhYnJlLmNvbS9lcHMvc2NoZW1hcyBcXHNjaGVtYXNcXFNhYnJlX09UQV9Qcm9maWxlQ3JlYXRlUlEueHNkXCJcclxueG1sbnM9XCJodHRwOi8vd3d3LnNhYnJlLmNvbS9lcHMvc2NoZW1hc1wiXHJcbnhtbG5zOnhzaT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXCI+XHJcbjxGaWx0ZXJQYXRoPlxyXG48UHJvZmlsZSBDbGllbnRDb2RlPVwiXCIgQ2xpZW50Q29udGV4dENvZGU9XCJcIiBEb21haW5JRD1cIlwiIFByb2ZpbGVUeXBlQ29kZT1cIlwiIFVuaXF1ZUlEPVwiXCIgUHJvZmlsZU5hbWU9XCJcIiBQTlJNb3ZlT3JkZXJTZXFObz1cIjFcIj5cclxuICA8RmlsdGVyIEZpbHRlcklEPVwiXCIgRG9tYWluSUQ9XCJcIiBDbGllbnRDb2RlPVwiXCIgQ2xpZW50Q29udGV4dENvZGU9XCJcIiBGaWx0ZXJOYW1lPVwiXCIvPlxyXG48L1Byb2ZpbGU+XHJcbjwvRmlsdGVyUGF0aD5cclxuPC9TYWJyZV9PVEFfUHJvZmlsZVRvUE5SUlE+YCxcclxuXHJcbiAgICBcIlNhYnJlQ29tbWFuZExMU1JRX1dpdGhTZXNzaW9uXCI6IGA8U09BUC1FTlY6RW52ZWxvcGUgeG1sbnM6U09BUC1FTlY9XCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy9zb2FwL2VudmVsb3BlL1wiXHJcbnhtbG5zOmViPVwiaHR0cDovL3d3dy5lYnhtbC5vcmcvbmFtZXNwYWNlcy9tZXNzYWdlSGVhZGVyXCJcclxueG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcclxueG1sbnM6eHNkPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS9YTUxTY2hlbWFcIj5cclxuPFNPQVAtRU5WOkhlYWRlcj5cclxuPGViOk1lc3NhZ2VIZWFkZXIgU09BUC1FTlY6bXVzdFVuZGVyc3RhbmQ9XCIxXCIgZWI6dmVyc2lvbj1cIjEuMFwiPlxyXG48ZWI6RnJvbT5cclxuICA8ZWI6UGFydHlJZCB0eXBlPVwidXJuOngxMi5vcmc6SU81OjAxXCI+OTk5OTk5PC9lYjpQYXJ0eUlkPlxyXG48L2ViOkZyb20+XHJcbjxlYjpUbz5cclxuICA8ZWI6UGFydHlJZCB0eXBlPVwidXJuOngxMi5vcmc6SU81OjAxXCI+MTIzMTIzPC9lYjpQYXJ0eUlkPlxyXG48L2ViOlRvPlxyXG48ZWI6Q1BBSWQ+S0EwSjwvZWI6Q1BBSWQ+XHJcbjxlYjpDb252ZXJzYXRpb25JZD53ZWJzZXJ2aWNlcy5zdXBwb3J0QHNhYnJlLmNvbTwvZWI6Q29udmVyc2F0aW9uSWQ+XHJcbjxlYjpTZXJ2aWNlIGViOnR5cGU9XCJPVEFcIj5TYWJyZUNvbW1hbmRMTFNSUTwvZWI6U2VydmljZT5cclxuPGViOkFjdGlvbj5TYWJyZUNvbW1hbmRMTFNSUTwvZWI6QWN0aW9uPlxyXG48ZWI6TWVzc2FnZURhdGE+XHJcbiAgPGViOk1lc3NhZ2VJZD4xMDAwPC9lYjpNZXNzYWdlSWQ+XHJcbiAgPGViOlRpbWVzdGFtcD4yMDE2LTEyLTMwVDA1OjI1OjMyejwvZWI6VGltZXN0YW1wPlxyXG48L2ViOk1lc3NhZ2VEYXRhPlxyXG48L2ViOk1lc3NhZ2VIZWFkZXI+XHJcbjx3c3NlOlNlY3VyaXR5IHhtbG5zOndzc2U9XCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDAyLzEyL3NlY2V4dFwiXHJcbnhtbG5zOndzdT1cImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDIvMTIvdXRpbGl0eVwiPlxyXG48d3NzZTpCaW5hcnlTZWN1cml0eVRva2VuPjwvd3NzZTpCaW5hcnlTZWN1cml0eVRva2VuPlxyXG48L3dzc2U6U2VjdXJpdHk+XHJcbjwvU09BUC1FTlY6SGVhZGVyPlxyXG48U09BUC1FTlY6Qm9keT5cclxuPFNhYnJlQ29tbWFuZExMU1JRIHhtbG5zPVwiaHR0cDovL3dlYnNlcnZpY2VzLnNhYnJlLmNvbS9zYWJyZVhNTC8yMDAzLzA3XCJcclxueG1sbnM6eHM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYVwiXHJcbnhtbG5zOnhzaT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXCIgVGltZVN0YW1wPVwiMjAxNC0wMy0wNFQxNDowMDowMFwiIFZlcnNpb249XCIxLjguMVwiPlxyXG48UmVxdWVzdCBPdXRwdXQ9XCJTQ1JFRU5cIiBDREFUQT1cInRydWVcIj5cclxuICA8SG9zdENvbW1hbmQ+PC9Ib3N0Q29tbWFuZD5cclxuPC9SZXF1ZXN0PlxyXG48L1NhYnJlQ29tbWFuZExMU1JRPlxyXG48L1NPQVAtRU5WOkJvZHk+XHJcbjwvU09BUC1FTlY6RW52ZWxvcGU+YCxcclxuXHJcbiAgICBcIlNhYnJlQ29tbWFuZExMU1JRXCI6IGBcclxuPFNhYnJlQ29tbWFuZExMU1JRIHhtbG5zPVwiaHR0cDovL3dlYnNlcnZpY2VzLnNhYnJlLmNvbS9zYWJyZVhNTC8yMDAzLzA3XCJcclxueG1sbnM6eHM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYVwiXHJcbnhtbG5zOnhzaT1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlXCIgVGltZVN0YW1wPVwiMjAxNC0wMy0wNFQxNDowMDowMFwiIFZlcnNpb249XCIxLjguMVwiPlxyXG48UmVxdWVzdCBPdXRwdXQ9XCJTQ1JFRU5cIiBDREFUQT1cInRydWVcIj5cclxuPEhvc3RDb21tYW5kPjwvSG9zdENvbW1hbmQ+XHJcbjwvUmVxdWVzdD5cclxuPC9TYWJyZUNvbW1hbmRMTFNSUT5gLFxyXG5cclxuICAgIFwiU2Vzc2lvbkNyZWF0ZVJRXCI6IGBcclxuPFNPQVAtRU5WOkVudmVsb3BlIHhtbG5zOlNPQVAtRU5WPVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvc29hcC9lbnZlbG9wZS9cIj5cclxuPFNPQVAtRU5WOkhlYWRlcj5cclxuPE1lc3NhZ2VIZWFkZXIgeG1sbnM9XCJodHRwOi8vd3d3LmVieG1sLm9yZy9uYW1lc3BhY2VzL21lc3NhZ2VIZWFkZXJcIj5cclxuPEZyb20+XHJcbiAgPFBhcnR5SWQ+QWdlbmN5PC9QYXJ0eUlkPlxyXG48L0Zyb20+XHJcbjxUbz5cclxuICA8UGFydHlJZD5TYWJyZV9BUEk8L1BhcnR5SWQ+XHJcbjwvVG8+XHJcbjxDb252ZXJzYXRpb25JZD4yMDIxLjAxLkRldlN0dWRpbzwvQ29udmVyc2F0aW9uSWQ+XHJcbjxBY3Rpb24+U2Vzc2lvbkNyZWF0ZVJRPC9BY3Rpb24+XHJcbjwvTWVzc2FnZUhlYWRlcj5cclxuPFNlY3VyaXR5IHhtbG5zPVwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwMi8xMi9zZWNleHRcIj5cclxuPFVzZXJuYW1lVG9rZW4+XHJcbiAgPFVzZXJuYW1lPjwvVXNlcm5hbWU+XHJcbiAgPFBhc3N3b3JkPjwvUGFzc3dvcmQ+XHJcbiAgPE9yZ2FuaXphdGlvbj48L09yZ2FuaXphdGlvbj5cclxuICA8RG9tYWluPkRFRkFVTFQ8L0RvbWFpbj5cclxuPC9Vc2VybmFtZVRva2VuPlxyXG48L1NlY3VyaXR5PlxyXG48L1NPQVAtRU5WOkhlYWRlcj5cclxuPFNPQVAtRU5WOkJvZHk+XHJcbjxTZXNzaW9uQ3JlYXRlUlEgcmV0dXJuQ29udGV4dElEPVwidHJ1ZVwiIFZlcnNpb249XCIxLjAuMFwiXHJcbnhtbG5zPVwiaHR0cDovL3d3dy5vcGVudHJhdmVsLm9yZy9PVEEvMjAwMi8xMVwiLz5cclxuPC9TT0FQLUVOVjpCb2R5PlxyXG48L1NPQVAtRU5WOkVudmVsb3BlPmBcclxuICB9XHJcbn0iLCJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyogQXV0by1nZW5lcmF0ZWQgZmlsZS4gICAgICAgICAgICAgICovXG4vKiBEbyBub3QgbW9kaWZ5IGl0LiAgICAgICAgICAgICAgICAgKi9cbi8qIFlvdSBtYXkgcmVtb3ZlIGl0LiAgICAgICAgICAgICAgICAqL1xuLyogWW91IG1heSBjb21taXQgaXQuICAgICAgICAgICAgICAgICovXG4vKiBZb3UgbWF5IHB1c2ggaXQuICAgICAgICAgICAgICAgICAgKi9cbi8qIFJlbW92ZSBpdCBpZiBtb2R1bGUgbmFtZSBjaGFuZ2VkLiAqL1xuLyogZXNsaW50OmRpc2FibGUgICAgICAgICAgICAgICAgICAgICovXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuaW1wb3J0IHtJTW9kdWxlQ29udGV4dH0gZnJvbSBcInNhYnJlLW5ndi1jb3JlL21vZHVsZXMvSU1vZHVsZUNvbnRleHRcIjtcbmltcG9ydCB7TW9kdWxlQ29udGV4dH0gZnJvbSBcInNhYnJlLW5ndi1jb3JlL21vZHVsZXMvTW9kdWxlQ29udGV4dFwiO1xuaW1wb3J0IHtJMThuU2VydmljZSwgU2NvcGVkVHJhbnNsYXRvcn0gZnJvbSBcInNhYnJlLW5ndi1hcHAvYXBwL3NlcnZpY2VzL2ltcGwvSTE4blNlcnZpY2VcIjtcblxuLyoqIEBpbnRlcm5hbCAqKi9cbmV4cG9ydCBjb25zdCBjb250ZXh0OiBJTW9kdWxlQ29udGV4dCA9IG5ldyBNb2R1bGVDb250ZXh0KFwiY29tLWludGVybm92YS1ndGNwYXltZW50LXdlYi1tb2R1bGVcIik7XG4vKiogQGludGVybmFsICoqL1xuZXhwb3J0IGNvbnN0IGNmOiBJTW9kdWxlQ29udGV4dFsnY2YnXSA9IGNvbnRleHQuY2YuYmluZChjb250ZXh0KTtcbi8qKiBAaW50ZXJuYWwgKiovXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJTZXJ2aWNlOiBJTW9kdWxlQ29udGV4dFsncmVnaXN0ZXJTZXJ2aWNlJ10gPSBjb250ZXh0LnJlZ2lzdGVyU2VydmljZS5iaW5kKGNvbnRleHQpO1xuLyoqIEBpbnRlcm5hbCAqKi9cbmV4cG9ydCBjb25zdCBnZXRTZXJ2aWNlOiBJTW9kdWxlQ29udGV4dFsnZ2V0U2VydmljZSddID0gY29udGV4dC5nZXRTZXJ2aWNlLmJpbmQoY29udGV4dCk7XG4vKiogQGludGVybmFsICoqL1xuZXhwb3J0IGNvbnN0IHQ6IFNjb3BlZFRyYW5zbGF0b3IgPSBnZXRTZXJ2aWNlKEkxOG5TZXJ2aWNlKS5nZXRTY29wZWRUcmFuc2xhdG9yKCdjb20taW50ZXJub3ZhLWd0Y3BheW1lbnQtd2ViLW1vZHVsZS90cmFuc2xhdGlvbnMnKTtcbiIsImltcG9ydCB7IENvbW1hbmRNZXNzYWdlQmFzaWNScyxDb21tYW5kTWVzc2FnZVJxIH0gZnJvbSBcInNhYnJlLW5ndi1wb3MtY2RtL2NvbW1zZ1wiO1xyXG5pbXBvcnQgeyByZW1hcmsgfSBmcm9tIFwiLi4vbW9kZWwvcmVtYXJrXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTYWJyZUNvbnRyb2xsZXIge1xyXG4gICAgUmVtYXJrVXBkYXRlKGxpc3RSZW1hcmtzOiBBcnJheTxyZW1hcms+KTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIFNlbmRDb21tYW5kQXN5bmMoZm9ybWF0IDogc3RyaW5nKSA6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBTZW5kQ29tbWFuZEFzeW5jUnMoZm9ybWF0OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4gO1xyXG4gICAgYnVpbGRSZXF1ZXN0QWRkUmVtYXJrKGxpc3RSZW1hcmtzOiBBcnJheTxyZW1hcms+KTogUHJvbWlzZTxib29sZWFuPjtcclxuICAgIFNlbmRDb21tYW5kTWVzc2FnZShwYXlsb2FkOiBzdHJpbmcsIHNob3dScTpib29sZWFuLCBzaG93UnM6Ym9vbGVhbik6IFByb21pc2U8Q29tbWFuZE1lc3NhZ2VCYXNpY1JzPjtcclxuICAgIEFkZFJlbWFya3NBc3luYyhyZW1hcmtzOkFycmF5PHJlbWFyaz4pOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgU2VuZENvbW1hbmRTeW5jKGZvcm1hdCA6IHN0cmluZykgOiBzdHJpbmc7XHJcbiAgICBJbnB1dFZhbGlkYXRvcihpZDogc3RyaW5nKTogdm9pZDsgICAgIFxyXG59IiwiaW1wb3J0IHsgSVNhYnJlQ29udHJvbGxlciB9IGZyb20gXCIuL0lTYWJyZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgQWJzdHJhY3RTZXJ2aWNlIH0gZnJvbSBcInNhYnJlLW5ndi1hcHAvYXBwL3NlcnZpY2VzL2ltcGwvQWJzdHJhY3RTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdldFNlcnZpY2UsIGNmLCBjb250ZXh0IH0gZnJvbSBcIi4uL0NvbnRleHRcIjtcclxuaW1wb3J0IHsgU2FicmVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL1NhYnJlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBJUmVzZXJ2YXRpb25TZXJ2aWNlIH0gZnJvbSBcInNhYnJlLW5ndi1yZXNlcnZhdGlvbi9zZXJ2aWNlcy9JUmVzZXJ2YXRpb25TZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENvbW1hbmRNZXNzYWdlUmVzZXJ2YXRpb25ScyB9IGZyb20gXCJzYWJyZS1uZ3YtcG9zLWNkbS9yZXNlcnZhdGlvblwiO1xyXG5pbXBvcnQgeyBQbnJQdWJsaWNTZXJ2aWNlIH0gZnJvbSBcInNhYnJlLW5ndi1hcHAvYXBwL3NlcnZpY2VzL2ltcGwvUG5yUHVibGljU2VydmljZVwiO1xyXG5pbXBvcnQgeyBBZ2VudFByb2ZpbGVTZXJ2aWNlIH0gZnJvbSBcInNhYnJlLW5ndi1hcHAvYXBwL3NlcnZpY2VzL2ltcGwvQWdlbnRQcm9maWxlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBDb21tYW5kTWVzc2FnZUJhc2ljUnMsIENvbW1hbmRNZXNzYWdlUnEgfSBmcm9tIFwic2FicmUtbmd2LXBvcy1jZG0vY29tbXNnXCI7XHJcbmltcG9ydCB7IElDb21tYW5kTWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwic2FicmUtbmd2LWNvbW1zZy9zZXJ2aWNlcy9JQ29tbWFuZE1lc3NhZ2VTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFV0aWxpdGFyaW8gfSBmcm9tIFwiLi4vY29tbW9uL1V0aWxpdGFyaW9cIjtcclxuaW1wb3J0IHsgcmVtYXJrIH0gZnJvbSBcIi4uL21vZGVsL3JlbWFya1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNhYnJlQ29udHJvbGxlciBleHRlbmRzIEFic3RyYWN0U2VydmljZSBpbXBsZW1lbnRzIElTYWJyZUNvbnRyb2xsZXIge1xyXG4gICAgc3RhdGljIFNFUlZJQ0VfTkFNRTogc3RyaW5nID0gXCJjb20taW50ZXJub3ZhLWd0Y3BheW1lbnQtd2ViLW1vZHVsZS1TYWJyZUNvbnRyb2xsZXJcIjtcclxuXHJcbiAgICBidWlsZFJlcXVlc3RBZGRSZW1hcmsobGlzdFJlbWFya3M6IEFycmF5PHJlbWFyaz4pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxpc3RSZW1hcmtzIG9uIGJ1aWxkUmVxdWVzdEFkZFJlbWFya1wiLGxpc3RSZW1hcmtzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCByZXF1ZXN0Um1rID0gdGhpcy5idWlsZEFkZFJlbWFya1JRKGxpc3RSZW1hcmtzLCBcIkFkZFJlbWFya0xMU1JRXCIpO1xyXG4gICAgICAgICAgICByZXF1ZXN0Um1rXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBnZXRTZXJ2aWNlKFNhYnJlU2VydmljZSkuY2FsbFNvYXBTZXJ2aWNlQXN5bmMocmVzcCwgXCJBZGRSZW1hcmtMTFNSUVwiLCAnU0VTU0lPTicsIDUwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNvbHZlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNvbHZlciBBZGRSZW1hcmtMTFNSUVwiLCByZXNvbHZlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgUmVtYXJrVXBkYXRlKGxpc3RSZW1hcmtzOiBBcnJheTxyZW1hcms+KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3RSbWsgPSB0aGlzLmJ1aWxkUmVtYXJrVXBkYXRlUlEobGlzdFJlbWFya3MsIFwiVXBkYXRlUmVzZXJ2YXRpb25SUXJta1wiKTtcclxuICAgICAgICAgICAgcmVxdWVzdFJta1xyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0U2VydmljZShTYWJyZVNlcnZpY2UpLmNhbGxTb2FwU2VydmljZUFzeW5jKHJlc3AsIFwiVXBkYXRlUmVzZXJ2YXRpb25SUVwiLCAnU0VTU0lPTicsIDUwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNvbHZlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNvbHZlciBVcGRhdGVSZXNlcnZhdGlvblJRXCIsIHJlc29sdmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBTZW5kQ29tbWFuZEFzeW5jKGZvcm1hdDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJBc3luYyBlbnRyeTpcIiwgZm9ybWF0KTtcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3RTYWJyZUNvbW1hbmQgPSB0aGlzLmJ1aWxkUmVxdWVzdFNhYnJlQ29tbWFuZChmb3JtYXQsIFwiU2FicmVDb21tYW5kTExTUlFcIik7XHJcbiAgICAgICAgICAgIHJlcXVlc3RTYWJyZUNvbW1hbmRcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldFNlcnZpY2UoU2FicmVTZXJ2aWNlKS5jYWxsU29hcFNlcnZpY2VBc3luYyhyZXNwLCBcIlNhYnJlQ29tbWFuZExMU1JRXCIsICdTRVNTSU9OJywgNTAwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc29sdmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNvbHZlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFNlbmRDb21tYW5kQXN5bmNScyhmb3JtYXQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkFzeW5jIGVudHJ5OlwiLCBmb3JtYXQpO1xyXG4gICAgICAgICAgICBsZXQgcmVxdWVzdFNhYnJlQ29tbWFuZCA9IHRoaXMuYnVpbGRSZXF1ZXN0U2FicmVDb21tYW5kKGZvcm1hdCwgXCJTYWJyZUNvbW1hbmRMTFNSUVwiKTtcclxuICAgICAgICAgICAgcmVxdWVzdFNhYnJlQ29tbWFuZFxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwOlwiLCByZXNwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0U2VydmljZShTYWJyZVNlcnZpY2UpLmNhbGxTb2FwU2VydmljZUFzeW5jKHJlc3AsIFwiU2FicmVDb21tYW5kTExTUlFcIiwgJ1NFU1NJT04nLCA1MDAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzb2x2ZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVzb2x2ZXI6XCIsIHJlc29sdmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXRpbGl0YXJpb18gPSBnZXRTZXJ2aWNlKFV0aWxpdGFyaW8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ1dGlsaXRhcmlvXzpcIiwgdXRpbGl0YXJpb18pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkb2N1bWVudCA9IHV0aWxpdGFyaW9fLlN0cmluZ1RvWG1sKHJlc29sdmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZG9jdW1lbnQgaW4geG1sOlwiLCBkb2N1bWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbW1hbmRScyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiUmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGNvbW1hbmRSc1swXS5jaGlsZE5vZGVzWzBdLm5vZGVWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgU2VuZENvbW1hbmRTeW5jKGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zaSBubyBlc3TDoSAzNjAgbm8gbG8gZGV0ZWN0YSAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZW50cnknLCBmb3JtYXQpXHJcbiAgICAgICAgbGV0IHJlc3BvbnNlTWVzc2FnZTogc3RyaW5nID0gbnVsbDtcclxuICAgICAgICBsZXQgcmVxdWVzdFNhYnJlQ29tbWFuZFN0cmluZyA9IHRoaXMuYnVpbGRSZXF1ZXN0U2VuZENvbW1hbmQoZm9ybWF0KTsgICAgICAgICAgICAgICAgICAgLy9sbGFtYW1vcyBhbCBtZXRvZG8gY29uIGVsIHRoaXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdycScsIHJlcXVlc3RTYWJyZUNvbW1hbmRTdHJpbmcpXHJcbiAgICAgICAgaWYgKHJlcXVlc3RTYWJyZUNvbW1hbmRTdHJpbmcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXNwb25zZU1lc3NhZ2UgPSBnZXRTZXJ2aWNlKFNhYnJlU2VydmljZSkuY2FsbFNvYXBTZXJ2aWNlU3luYyhyZXF1ZXN0U2FicmVDb21tYW5kU3RyaW5nLCBcIlNhYnJlQ29tbWFuZExMU1JRXCIpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdycycsIHJlc3BvbnNlTWVzc2FnZSlcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlTWVzc2FnZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcnNwQ29tbWFuZCA9IEpTT04ucGFyc2UocmVzcG9uc2VNZXNzYWdlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGFyc2VhbW9zIGxhIHJlc3B1ZXN0YSBlbiB1bmEgdmFyaWFibGUgZGUgdGlwbyBKU09OICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZU1lc3NhZ2UgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJzcENvbW1hbmQucmVzcG9uc2UgIT0gbnVsbCAmJiByc3BDb21tYW5kLnJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZU1lc3NhZ2UgPSByc3BDb21tYW5kLnJlc3BvbnNlLnBheWxvYWQucmVzcG9uc2VUZXh0OyAgICAgICAgICAgICAgICAgLy9kZXZ1ZWx2ZSBlbCBTYWJyZUNvbW1hbmRSU1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVzcG9uc2VNZXNzYWdlOlwiLHJlc3BvbnNlTWVzc2FnZSk7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZU1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlTWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBTZW5kQ29tbWFuZE1lc3NhZ2UocGF5bG9hZDogc3RyaW5nLCBzaG93UnE6IGJvb2xlYW4sIHNob3dSczogYm9vbGVhbik6IFByb21pc2U8Q29tbWFuZE1lc3NhZ2VCYXNpY1JzPiB7XHJcbiAgICAgICAgbGV0IGlDbWRNc2dTZXJ2aWNlID0gZ2V0U2VydmljZShJQ29tbWFuZE1lc3NhZ2VTZXJ2aWNlKTtcclxuICAgICAgICByZXR1cm4gaUNtZE1zZ1NlcnZpY2Uuc2VuZCh7XHJcbiAgICAgICAgICAgIHJxOiBwYXlsb2FkLFxyXG4gICAgICAgICAgICBzaG93UnE6IHNob3dScSxcclxuICAgICAgICAgICAgc2hvd1JzOiBzaG93UnNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICpcclxuICpcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtzdHJpbmd9IHJlZk5vZGVcclxuICogQHBhcmFtIHtzdHJpbmd9IHJlZkF0dHJcclxuICogQHBhcmFtIHtFbGVtZW50fSBhY3R1YWxOb2RlXHJcbiAqIEByZXR1cm4geyp9ICB7c3RyaW5nfVxyXG4gKiBAbWVtYmVyb2YgU2FicmVDb250cm9sbGVyXHJcbiAqL1xyXG4gICAgcHJpdmF0ZSBjaGVja05vZGVWYWx1ZXMocmVmTm9kZTogc3RyaW5nLCByZWZBdHRyOiBzdHJpbmcsIGFjdHVhbE5vZGU6IEVsZW1lbnQpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBkYXRvID0gXCJcIjtcclxuICAgICAgICBpZiAoYWN0dWFsTm9kZS5sb2NhbE5hbWUgPT0gcmVmTm9kZSAmJiBhY3R1YWxOb2RlLmhhc0F0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZXMgPSBhY3R1YWxOb2RlLmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhdHRyaWJ1dGVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXNbaW5kZXhdLm5hbWUgPT0gcmVmQXR0cikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdG8gPSBhdHRyaWJ1dGVzW2luZGV4XS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAvLyBjb25zb2xlLmxvZyhcInJlZlBvaW50OiBcIiArIGF0dHJpYnV0ZXNbaW5kZXhdLm5hbWUgKyBcIiAgOjogXCIgKyBhdHRyaWJ1dGVzW2luZGV4XS52YWx1ZSk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRvO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbipcclxuKlxyXG4qIEBwcml2YXRlXHJcbiogQHBhcmFtIHtFbGVtZW50fSBub2RlRmF0aGVyXHJcbiogQHBhcmFtIHtzdHJpbmd9IHJlZkF0dHJcclxuKiBAcGFyYW0ge3N0cmluZ30gcmVmUG9pbnRcclxuKiBAcGFyYW0ge3N0cmluZ30gbm9kZUZhdGhlcjJcclxuKiBAcmV0dXJuIHsqfSAge3N0cmluZ1tdW119XHJcbiogQG1lbWJlcm9mIFNhYnJlQ29udHJvbGxlclxyXG4qL1xyXG4gICAgcHJpdmF0ZSBHZXRGaW5hbFZhbHVlKG5vZGVGYXRoZXI6IEVsZW1lbnQsIHJlZkF0dHI6IHN0cmluZywgcmVmUG9pbnQ6IHN0cmluZywgbm9kZUZhdGhlcjI6IHN0cmluZyk6IHN0cmluZ1tdW10ge1xyXG4gICAgICAgIGxldCBhcnJheUF0dHJzOiBzdHJpbmdbXVtdID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgYXJyYXlBdHRycy5wdXNoKFtyZWZBdHRyLCByZWZQb2ludF0pO1xyXG4gICAgICAgIGlmIChub2RlRmF0aGVyMiA9PSBcIipcIikge1xyXG4gICAgICAgICAgICBhcnJheUF0dHJzLnB1c2goW1wic2VndHlwZVwiLCBub2RlRmF0aGVyLmxvY2FsTmFtZV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY2hpbGROb2RlcyA9IG5vZGVGYXRoZXIuY2hpbGROb2RlcztcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNoaWxkTm9kZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRfY2hpbGROb2RlcyA9IDxFbGVtZW50PmNoaWxkTm9kZXNbal07XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50X2NoaWxkTm9kZXMubG9jYWxOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jYWxOYW1lID0gZWxlbWVudF9jaGlsZE5vZGVzLmxvY2FsTmFtZTtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGVsZW1lbnRfY2hpbGROb2Rlcy50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgIGFycmF5QXR0cnMucHVzaChbbG9jYWxOYW1lLCB2YWx1ZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKFwiR2V0RmluYWxWYWx1ZTogXCIpO1xyXG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKGFycmF5QXR0cnMpO1xyXG4gICAgICAgIHJldHVybiBhcnJheUF0dHJzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICpcclxuICAgICogQHByaXZhdGVcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHBuckxvY2F0b3JWYWx1ZVxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVyblxyXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IElzUmVtb3ZlTlNcclxuICAgICogQHJldHVybiB7Kn0gIHtOb2RlfVxyXG4gICAgKiBAbWVtYmVyb2YgU2FicmVDb250cm9sbGVyXHJcbiAgICAqL1xyXG4gICAgcHJpdmF0ZSBHZXRFbGVtZW50KHBuckxvY2F0b3JWYWx1ZTogc3RyaW5nLCBwYXR0ZXJuOiBzdHJpbmcsIElzUmVtb3ZlTlM6IGJvb2xlYW4pOiBOb2RlIHtcclxuICAgICAgICBsZXQgcmV0dXJuRWxlbWVudDogTm9kZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKElzUmVtb3ZlTlMpIHsgcG5yTG9jYXRvclZhbHVlID0gZ2V0U2VydmljZShVdGlsaXRhcmlvKS5SZW1vdmVOYW1lU3BhY2UocG5yTG9jYXRvclZhbHVlKTsgfVxyXG4gICAgICAgIHZhciBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcbiAgICAgICAgdmFyIGRvYzEgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHBuckxvY2F0b3JWYWx1ZSwgXCJ0ZXh0L3htbFwiKTtcclxuICAgICAgICB2YXIgY2hpbGROb2RlcyA9IGRvYzEuY2hpbGROb2RlcztcclxuICAgICAgICBsZXQgZWxlbWVudF9jaGlsZE5vZGVzID0gPEVsZW1lbnQ+Y2hpbGROb2Rlc1swXTsgICAgLy9maXJzdCBsaW5lIG9uIFJTICAgICAgICBcclxuICAgICAgICBpZiAoZWxlbWVudF9jaGlsZE5vZGVzLmhhc0F0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZXMgPSBlbGVtZW50X2NoaWxkTm9kZXMuYXR0cmlidXRlcztcclxuICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhdHRyaWJ1dGVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXAgPSBhdHRyaWJ1dGVzW2luZGV4XS5uYW1lLnNwbGl0KFwiOlwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh0ZW1wWzBdID09ICd4bWxucycgJiYgIWZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHhtbG5zID0gYXR0cmlidXRlc1tpbmRleF0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwieG1sbnM6IFwiICsgeG1sbnMpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiByZXNvbHZlck5TKCk6IHN0cmluZyB7IHJldHVybiB4bWxuczsgfVxyXG4gICAgICAgIHZhciByZXN1bHQgPSBnZXRTZXJ2aWNlKFV0aWxpdGFyaW8pLkdldFhQYXRoUmVzdWx0KHBuckxvY2F0b3JWYWx1ZSwgcGF0dGVybiwgcmVzb2x2ZXJOUywgMCk7XHJcbiAgICAgICAgLy8gdmFyIHJlc3VsdCA9IGdldFNlcnZpY2UoVXRpbGl0YXJpbykuR2V0WFBhdGhSZXN1bHQoMywgcG5yTG9jYXRvclZhbHVlLCBwYXR0ZXJuLCByZXNvbHZlck5TLCAwKTtcclxuICAgICAgICByZXR1cm5FbGVtZW50ID0gcmVzdWx0Lml0ZXJhdGVOZXh0KCk7XHJcbiAgICAgICAgcmV0dXJuIHJldHVybkVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgQWRkUmVtYXJrc0FzeW5jKHJlbWFya3M6IEFycmF5PHJlbWFyaz4pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVxdWVzdFJlbWFyayA9IHRoaXMuYnVpbGRSZXF1ZXN0QWRkUmVtYXJrKHJlbWFya3MpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlcXVlc3RSZW1hcms6IFwiLCByZXF1ZXN0UmVtYXJrKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlcXVlc3RSZW1hcmtcclxuICAgICAgICAgICAgLy8gICAgIC50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGdldFNlcnZpY2UoU2FicmVTZXJ2aWNlKS5jYWxsU29hcFNlcnZpY2VBc3luYyhyZXNwLCBcIkFkZFJlbWFya0xMU1JRXCIsICdTRVNTSU9OJywgNTAwMClcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgLnRoZW4oKHJlc29sdmVyKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNvbHZlcik7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgICAvLyAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkUmVxdWVzdFJlc2VydmF0aW9uKGFjdGlvbjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB1dGlsaXRhcmlvX3BheWxvYWQgPSBnZXRTZXJ2aWNlKFV0aWxpdGFyaW8pLkdldFBheUxvYWQoYWN0aW9uKTtcclxuICAgICAgICAgICAgdXRpbGl0YXJpb19wYXlsb2FkLnRoZW4ocnNwID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocnNwKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZEFkZFJlbWFya1JRKGxpc3RSZW1hcmtzOiBBcnJheTxyZW1hcms+LCBhY3Rpb246IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmV0dXJuVmFsdWU6IHN0cmluZyA9IG51bGw7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGlzdFJlbWFya3Mgb24gYnVpbGRBZGRSZW1hcmtSUVwiLGxpc3RSZW1hcmtzKTtcclxuICAgICAgICAgICAgbGV0IHV0aWxpdGFyaW9fID0gZ2V0U2VydmljZShVdGlsaXRhcmlvKTtcclxuICAgICAgICAgICAgdXRpbGl0YXJpb18uR2V0UGF5TG9hZChhY3Rpb24pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkb2N1bWVudCA9IHV0aWxpdGFyaW9fLlN0cmluZ1RvWG1sKHJzcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdHJpbmdUb1htbFwiLGRvY3VtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiUmVtYXJrSW5mb1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdFJlbWFya3MgIT0gbnVsbCAmJiBsaXN0UmVtYXJrcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHJtayBvZiBsaXN0UmVtYXJrcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJybWtcIixybWspO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50X3ZhciA9IGVsZW1lbnRbMF0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlJlbWFya1wiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3Zhci5zZXRBdHRyaWJ1dGUoXCJUeXBlXCIsIHJtay5UeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChybWsuQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdmFyLnNldEF0dHJpYnV0ZShcIkNvZGVcIiwgcm1rLkNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJtay5TZWdOdW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3Zhci5zZXRBdHRyaWJ1dGUoXCJTZWdtZW50TnVtYmVyXCIsIHJtay5TZWdOdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSBlbGVtZW50X3Zhci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdUZXh0JykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IHJtay5UZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gdXRpbGl0YXJpb18uRG9jdW1lbnRUb1N0cmluZyhkb2N1bWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSByZXR1cm5WYWx1ZS5yZXBsYWNlKC94bWxucz1cIlwiL2csICcnKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJvciBidWlsZENyZWF0ZVJlc2VydmF0aW9uUlE6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkUmVtYXJrVXBkYXRlUlEobGlzdFJlbWFya3M6IEFycmF5PHJlbWFyaz4sIGFjdGlvbjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByZXR1cm5WYWx1ZTogc3RyaW5nID0gbnVsbDtcclxuICAgICAgICAgICAgbGV0IHV0aWxpdGFyaW9fID0gZ2V0U2VydmljZShVdGlsaXRhcmlvKTtcclxuICAgICAgICAgICAgdXRpbGl0YXJpb18uR2V0UGF5TG9hZChhY3Rpb24pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkb2N1bWVudCA9IHV0aWxpdGFyaW9fLlN0cmluZ1RvWG1sKHJzcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIlJlc2VydmF0aW9uVXBkYXRlSXRlbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdFJlbWFya3MgIT0gbnVsbCAmJiBsaXN0UmVtYXJrcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHJtayBvZiBsaXN0UmVtYXJrcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRfdmFyID0gZWxlbWVudFswXS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUmVtYXJrVXBkYXRlXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdmFyLnNldEF0dHJpYnV0ZShcImlkXCIsIHJtay5JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3Zhci5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiSU5WT0lDRVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdmFyLnNldEF0dHJpYnV0ZShcIm9wXCIsIFwiVVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gZWxlbWVudF92YXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnUmVtYXJrVGV4dCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBybWsuVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHV0aWxpdGFyaW9fLkRvY3VtZW50VG9TdHJpbmcoZG9jdW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gcmV0dXJuVmFsdWUucmVwbGFjZSgveG1sbnM9XCJcIi9nLCAnJykgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlcnJvciBidWlsZENyZWF0ZVJlc2VydmF0aW9uUlE6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkUmVxdWVzdFNhYnJlQ29tbWFuZChmb3JtYXQ6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJldHVyblZhbHVlOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgICAgICAgICBsZXQgdXRpbGl0YXJpb18gPSBnZXRTZXJ2aWNlKFV0aWxpdGFyaW8pO1xyXG4gICAgICAgICAgICB1dGlsaXRhcmlvXy5HZXRQYXlMb2FkKGFjdGlvbilcclxuICAgICAgICAgICAgICAgIC50aGVuKHJzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1hdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkb2N1bWVudCA9IHV0aWxpdGFyaW9fLlN0cmluZ1RvWG1sKHJzcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJIb3N0Q29tbWFuZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFswXS50ZXh0Q29udGVudCA9IGZvcm1hdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNvbHZlciBkZXNwdWVzIGNvbnZlcnRpclwiLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuaW5uZXJIVE1MKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB1dGlsaXRhcmlvXy5Eb2N1bWVudFRvU3RyaW5nKGRvY3VtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZFJlcXVlc3RTZW5kQ29tbWFuZChmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1ldG9kbyAgICAvL2VzdHJ1Y3R1cmEgZGUgcmVxdWVzdCBkZWwgc2FicmUgY29tbWFuZCAgXHJcbiAgICAgICAgbGV0IHJlcXVlc3Q6IHN0cmluZyA9ICc8U2FicmVDb21tYW5kTExTUlEgeG1sbnM9XCJodHRwOi8vd2Vic2VydmljZXMuc2FicmUuY29tL3NhYnJlWE1MLzIwMDMvMDdcIiB4bWxuczp4cz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hXCIgeG1sbnM6eHNpPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcIiBUaW1lU3RhbXA9XCIyMDE0LTAzLTA0VDE0OjAwOjAwXCIgVmVyc2lvbj1cIjEuOC4xXCI+JyArXHJcbiAgICAgICAgICAgICc8UmVxdWVzdCBPdXRwdXQ9XCJTQ1JFRU5cIiBDREFUQT1cImZhbHNlXCI+PEhvc3RDb21tYW5kPicgKyBmb3JtYXQgKyAnPC9Ib3N0Q29tbWFuZD48L1JlcXVlc3Q+JyArXHJcbiAgICAgICAgICAgICc8L1NhYnJlQ29tbWFuZExMU1JRPic7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLy90byB2YWxpZGF0ZSBldmVyeSBpbnB1dCBhbmQgZXJyb3IgaWYgbmVlZGVkXHJcbiAgICBJbnB1dFZhbGlkYXRvcihpZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpZCBxdWUgdmEgYSB2YWxvcmFyIHNpIGVzdGEgZW1wdHk6IFwiLGlkKTtcclxuXHJcbiAgICAgICAgbGV0IHZhbHVlID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSkudmFsdWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ2YWx1ZTogXCIsIHZhbHVlKTsgICAgICAgIFxyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkICsgXCJEaXZcIikpLmNsYXNzTGlzdC5hZGQoXCJoYXMtZXJyb3JcIik7XHJcbiAgICAgICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCArIFwiRXJyb3JcIikpLmlubmVyVGV4dCA9IFwiRmllbGQgY2Fubm90IGJlIGVtcHR5IG9yIGJsYW5rXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQgKyBcIkRpdlwiKSkuY2xhc3NMaXN0LnJlbW92ZShcImhhcy1lcnJvclwiKTtcclxuICAgICAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkICsgXCJFcnJvclwiKSkuaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qIEF1dG8tZ2VuZXJhdGVkIGZpbGUuICAgICAgICAgICAgICAqL1xuLyogRG8gbm90IG1vZGlmeSBpdC4gICAgICAgICAgICAgICAgICovXG4vKiBZb3UgbWF5IHJlbW92ZSBpdC4gICAgICAgICAgICAgICAgKi9cbi8qIFlvdSBtYXkgY29tbWl0IGl0LiAgICAgICAgICAgICAgICAqL1xuLyogWW91IG1heSBwdXNoIGl0LiAgICAgICAgICAgICAgICAgICovXG4vKiBSZW1vdmUgaXQgaWYgbW9kdWxlIG5hbWUgY2hhbmdlZC4gKi9cbi8qIGVzbGludDpkaXNhYmxlICAgICAgICAgICAgICAgICAgICAqL1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmltcG9ydCB7TWFpbn0gZnJvbSAnLi9NYWluJztcbmltcG9ydCB7SU1vZHVsZU1hbmlmZXN0fSBmcm9tICdzYWJyZS1uZ3YtY29yZS9tb2R1bGVzL0lNb2R1bGVNYW5pZmVzdCc7XG5pbXBvcnQge2NvbnRleHR9IGZyb20gJy4vQ29udGV4dCc7XG5cbi8qKlxuICogIEF1dG9nZW5lcmF0ZWQgY2xhc3MgcmVwcmVzZW50aW5nIG1vZHVsZSBpbiBydW50aW1lLlxuICoqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kdWxlX2NvbV9pbnRlcm5vdmFfZ3RjcGF5bWVudF93ZWJfbW9kdWxlIGV4dGVuZHMgTWFpbiB7XG4gICAgY29uc3RydWN0b3IobWFuaWZlc3Q6IElNb2R1bGVNYW5pZmVzdCkge1xuICAgICAgICBzdXBlcihtYW5pZmVzdCk7XG4gICAgICAgIGNvbnRleHQuc2V0TW9kdWxlKHRoaXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ3NhYnJlLW5ndi1jb3JlL21vZHVsZXMvTW9kdWxlJztcbmltcG9ydCB7IFJlZEFwcFNpZGVQYW5lbENvbmZpZyB9IGZyb20gJ3NhYnJlLW5ndi14cC9jb25maWdzL1JlZEFwcFNpZGVQYW5lbENvbmZpZyc7XG5pbXBvcnQgeyBFeHRlbnNpb25Qb2ludFNlcnZpY2UgfSBmcm9tICdzYWJyZS1uZ3YteHAvc2VydmljZXMvRXh0ZW5zaW9uUG9pbnRTZXJ2aWNlJztcbmltcG9ydCB7IGdldFNlcnZpY2UsIHJlZ2lzdGVyU2VydmljZSB9IGZyb20gXCIuL0NvbnRleHRcIjtcbmltcG9ydCB7IFJlZEFwcFNpZGVQYW5lbEJ1dHRvbiB9IGZyb20gJ3NhYnJlLW5ndi1yZWRBcHBTaWRlUGFuZWwvbW9kZWxzL1JlZEFwcFNpZGVQYW5lbEJ1dHRvbic7XG5pbXBvcnQgeyBDb21tYW5kTWVzc2FnZVJlc2VydmF0aW9uUnMgfSBmcm9tICdzYWJyZS1uZ3YtcG9zLWNkbS9yZXNlcnZhdGlvbic7XG5pbXBvcnQgeyBJUmVzZXJ2YXRpb25TZXJ2aWNlIH0gZnJvbSAnc2FicmUtbmd2LXJlc2VydmF0aW9uL3NlcnZpY2VzL0lSZXNlcnZhdGlvblNlcnZpY2UnO1xuaW1wb3J0IHsgTGF5ZXJTZXJ2aWNlIH0gZnJvbSBcInNhYnJlLW5ndi1jb3JlL3NlcnZpY2VzL0xheWVyU2VydmljZVwiO1xuaW1wb3J0IHsgUmVzdE1vZGVsIH0gZnJvbSAnLi9tb2RlbC9SZXN0TW9kZWwnO1xuaW1wb3J0IHsgR3RjX1BheW1lbnQgfSBmcm9tICcuL3ZpZXdzL0d0Y19QYXltZW50JztcbmltcG9ydCB7IFNhYnJlQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcnMvU2FicmVDb250cm9sbGVyJztcbmltcG9ydCB7IFV0aWxpdGFyaW8gfSBmcm9tICcuL2NvbW1vbi9VdGlsaXRhcmlvJztcbmltcG9ydCB7IEV4dGVybmFsU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvRXh0ZXJuYWxTZXJ2aWNlJztcbmltcG9ydCB7IFNhYnJlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvU2FicmVTZXJ2aWNlJztcblxuXG5leHBvcnQgY2xhc3MgTWFpbiBleHRlbmRzIE1vZHVsZSB7XG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuaW5pdCgpOyAgICBcbiAgICAgICAgcmVnaXN0ZXJTZXJ2aWNlKFNhYnJlQ29udHJvbGxlcik7XG4gICAgICAgIHJlZ2lzdGVyU2VydmljZShVdGlsaXRhcmlvKTtcbiAgICAgICAgcmVnaXN0ZXJTZXJ2aWNlKEV4dGVybmFsU2VydmljZSk7XG4gICAgICAgIHJlZ2lzdGVyU2VydmljZShTYWJyZVNlcnZpY2UpO1xuICAgICAgICBjb25zdCB4cCA9IGdldFNlcnZpY2UoRXh0ZW5zaW9uUG9pbnRTZXJ2aWNlKTtcblxuICAgICAgICBjb25zdCBzaWRlcGFuZWxDb25maWcgPSBuZXcgUmVkQXBwU2lkZVBhbmVsQ29uZmlnKFtcbiAgICAgICAgICAgIG5ldyBSZWRBcHBTaWRlUGFuZWxCdXR0b24oJ0dUQyBVSyBQYXltZW50IFByb2Nlc3MnLCAnYnRuIGJ0bi1zZWNvbmRhcnkgc2lkZS1wYW5lbC1idXR0b24gcmVkYXBwLXdlYi1yZXN0IHJlZGFwcC13ZWItcmVzdC1pbnRlcm5hbCcsICgpID0+IHRoaXMub3Blbk1vZGFsV2l0aFJlc3QoKSksXG4gICAgICAgIF0pO1xuXG4gICAgICAgIHhwLmFkZENvbmZpZygncmVkQXBwU2lkZVBhbmVsJywgc2lkZXBhbmVsQ29uZmlnKTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBhc3luYyBvcGVuTW9kYWxXaXRoUmVzdCgpIHtcbiAgICAgICAgY29uc3QgcmVzZXJ2YXRpb246IENvbW1hbmRNZXNzYWdlUmVzZXJ2YXRpb25ScyA9IGF3YWl0IGdldFNlcnZpY2UoSVJlc2VydmF0aW9uU2VydmljZSkuZ2V0UmVzZXJ2YXRpb24oKTtcblxuICAgICAgICBjb25zdCByZXN0TW9kYWxPcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdHVEMgVUsgUGF5bWVudCBQcm9jZXNzJyxcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2FwcC5jb21tb24udmlld3MuQnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2FwdGlvbjogJ0NhbmNlbCcsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbk5hbWU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdhcHAuY29tbW9uLnZpZXdzLkJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGNhcHRpb246IFwiQ29udGludWVcIixcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uTmFtZTogJ25leHQnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG5cbiAgICAgICAgZ2V0U2VydmljZShMYXllclNlcnZpY2UpLnNob3dJbk1vZGFsKFxuICAgICAgICAgICAgbmV3IEd0Y19QYXltZW50KHsgbW9kZWw6IG5ldyBSZXN0TW9kZWwoKSB9LCByZXNlcnZhdGlvbiksXG4gICAgICAgICAgICByZXN0TW9kYWxPcHRpb25zLFxuICAgICAgICAgICAgeyBkaXNwbGF5OiAnYXJlYVZpZXcnIH0pO1xuICAgIH1cblxufVxuIixudWxsLCJleHBvcnQgY2xhc3MgY2NEYXRhIHtcclxuICAgIGNhcmROdW1iZXI6c3RyaW5nO1xyXG4gICAgY2FyZE1hc2tlZDpzdHJpbmc7XHJcbiAgICBsYXN0NDpzdHJpbmc7XHJcbiAgICBjb2RlOnN0cmluZztcclxuICAgIHllYXI6IHN0cmluZztcclxuICAgIG1vbnRoOiBzdHJpbmc7XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIHBxRmFyZSB7XHJcbiAgICBpdGVtOnN0cmluZztcclxuICAgIGN1cnI6c3RyaW5nO1xyXG4gICAgdG90YWw6bnVtYmVyO1xyXG4gICAgc3VidG90YWw6bnVtYmVyO1xyXG4gICAgdGF4ZXM6bnVtYmVyO1xyXG59IiwiZXhwb3J0IGNsYXNzIHJlbWFyayB7XHJcbiAgICBUeXBlOnN0cmluZztcclxuICAgIFRleHQ6c3RyaW5nO1xyXG4gICAgQ29kZTpzdHJpbmc7XHJcbiAgICBJZDpzdHJpbmc7XHJcbiAgICBTZWdOdW06c3RyaW5nO1xyXG59IiwiaW1wb3J0IHtBYnN0cmFjdE1vZGVsfSBmcm9tIFwic2FicmUtbmd2LWFwcC9hcHAvQWJzdHJhY3RNb2RlbFwiO1xuaW1wb3J0IHtBdXRoVG9rZW5UeXBlfSBmcm9tICdzYWJyZS1uZ3YtYXBwL2FwcC9zZXJ2aWNlcy9pbXBsL0F1dGhUb2tlblR5cGUnO1xuaW1wb3J0IHtnZXRTZXJ2aWNlfSBmcm9tIFwiLi4vQ29udGV4dFwiO1xuaW1wb3J0IHtIdHRwTWV0aG9kfSBmcm9tICdzYWJyZS1uZ3YtYXBwL2FwcC9zZXJ2aWNlcy9pbXBsL0h0dHBNZXRob2QnO1xuaW1wb3J0IHtSZXN0QXBpU2VydmljZX0gZnJvbSBcInNhYnJlLW5ndi1jb21tdW5pY2F0aW9uL3NlcnZpY2VzL1Jlc3RBcGlTZXJ2aWNlXCI7XG5pbXBvcnQge1Jlc3RSZXNwb25zZX0gZnJvbSBcInNhYnJlLW5ndi1jb21tdW5pY2F0aW9uL2ludGVyZmFjZXMvUmVzdFJlc3BvbnNlXCI7XG5cbmV4cG9ydCBjbGFzcyBSZXN0TW9kZWwgZXh0ZW5kcyBBYnN0cmFjdE1vZGVsIHtcblxuICAgIHNlbmRSZXN0UmVxdWVzdCh1cmw6IHN0cmluZywgaHR0cE1ldGhvZDogSHR0cE1ldGhvZCwgYXV0aFRva2VuVHlwZTogQXV0aFRva2VuVHlwZSwgcGF5bG9hZDogc3RyaW5nLCBoZWFkZXJzOiBzdHJpbmcpOiBQcm9taXNlPFJlc3RSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gZ2V0U2VydmljZShSZXN0QXBpU2VydmljZSkuc2VuZChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBodHRwTWV0aG9kOiBodHRwTWV0aG9kLFxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgIGF1dGhUb2tlblR5cGU6IGF1dGhUb2tlblR5cGUsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJRXh0ZXJuYWxTZXJ2aWNlIH0gZnJvbSBcIi4vSUV4dGVybmFsU2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgQWJzdHJhY3RTZXJ2aWNlIH0gZnJvbSBcInNhYnJlLW5ndi1hcHAvYXBwL3NlcnZpY2VzL2ltcGwvQWJzdHJhY3RTZXJ2aWNlXCI7XHJcbmV4cG9ydCBjbGFzcyBFeHRlcm5hbFNlcnZpY2UgZXh0ZW5kcyBBYnN0cmFjdFNlcnZpY2UgaW1wbGVtZW50cyBJRXh0ZXJuYWxTZXJ2aWNlIHtcclxuICAgIHN0YXRpYyBTRVJWSUNFX05BTUUgOiBzdHJpbmcgPSBcImNvbS1pbnRlcm5vdmEtZ3RjcGF5bWVudC13ZWItbW9kdWxlLUV4dGVybmFsU2VydmljZVwiO1xyXG4gICAgc2VuZFJlcXVlc3QobWV0aG9kLCB1cmwpOiBQcm9taXNlPHN0cmluZz4gIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICB4aHIub3BlbihtZXRob2QsIHVybCk7XHJcbiAgICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSh4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJlamVjdCh7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHRcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZWplY3Qoe1xyXG4gICAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG59IiwiZXhwb3J0IGludGVyZmFjZSBJRXh0ZXJuYWxTZXJ2aWNlIHtcclxuICAgIHNlbmRSZXF1ZXN0KG1ldGhvZCwgdXJsKTogUHJvbWlzZTxzdHJpbmc+O1xyXG59IiwiaW1wb3J0IHsgQXV0aFRva2VuVHlwZSB9IGZyb20gXCJzYWJyZS1uZ3YtYXBwL2FwcC9zZXJ2aWNlcy9pbXBsL0F1dGhUb2tlblR5cGVcIjtcclxuaW1wb3J0IHsgUmVzdFJlc3BvbnNlIH0gZnJvbSBcInNhYnJlLW5ndi1jb21tdW5pY2F0aW9uL2ludGVyZmFjZXMvUmVzdFJlc3BvbnNlXCI7XHJcbmltcG9ydCB7IEh0dHBNZXRob2QgfSBmcm9tIFwic2FicmUtbmd2LWFwcC9hcHAvc2VydmljZXMvaW1wbC9IdHRwTWV0aG9kXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTYWJyZVNlcnZpY2Uge1xyXG4gICAgY2FsbFNvYXBTZXJ2aWNlQXN5bmMocmVxdWVzdDpzdHJpbmcsIGFjdGlvbkNvZGU6c3RyaW5nLCBhdXRoVG9rZW5UeXBlOiBBdXRoVG9rZW5UeXBlLCB0aW1lb3V0Om51bWJlcikgOiBQcm9taXNlPHN0cmluZz47XHJcblxyXG4gICAgY2FsbFJlc3RTZXJ2aWNlQXN5bmModXJsOnN0cmluZywgaHR0cE1ldGhvZDpIdHRwTWV0aG9kLCBhdXRoVG9rZW5UeXBlOkF1dGhUb2tlblR5cGUsIHBheWxvYWQ6c3RyaW5nLCBoZWFkZXJzOnN0cmluZyApOiBQcm9taXNlPFJlc3RSZXNwb25zZT47XHJcbn0iLCJpbXBvcnQgeyBJU2FicmVTZXJ2aWNlIH0gZnJvbSBcIi4vSVNhYnJlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBBYnN0cmFjdFNlcnZpY2UgfSBmcm9tIFwic2FicmUtbmd2LWFwcC9hcHAvc2VydmljZXMvaW1wbC9BYnN0cmFjdFNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQXV0aFRva2VuVHlwZSB9IGZyb20gXCJzYWJyZS1uZ3YtYXBwL2FwcC9zZXJ2aWNlcy9pbXBsL0F1dGhUb2tlblR5cGVcIjtcclxuaW1wb3J0IHsgSVNvYXBBcGlTZXJ2aWNlIH0gZnJvbSBcInNhYnJlLW5ndi1jb21tdW5pY2F0aW9uL2ludGVyZmFjZXMvSVNvYXBBcGlTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vQ29udGV4dFwiO1xyXG5pbXBvcnTCoHvCoFNyd1N5bmNBcGnCoH3CoGZyb23CoFwic2FicmUtbmd2LWFwcC9hcHAvc2VydmljZXMvaW1wbC9TcndTeW5jQXBpXCI7XHJcbmltcG9ydMKge8KgU3J3QXN5bmNBcGnCoH3CoGZyb23CoFwic2FicmUtbmd2LWFwcC9hcHAvc2VydmljZXMvaW1wbC9TcndBc3luY0FwaVwiO1xyXG5pbXBvcnQgeyBIdHRwTWV0aG9kIH0gZnJvbSBcInNhYnJlLW5ndi1hcHAvYXBwL3NlcnZpY2VzL2ltcGwvSHR0cE1ldGhvZFwiO1xyXG5pbXBvcnQgeyBSZXN0UmVzcG9uc2UgfSBmcm9tIFwic2FicmUtbmd2LWNvbW11bmljYXRpb24vaW50ZXJmYWNlcy9SZXN0UmVzcG9uc2VcIjtcclxuaW1wb3J0IHsgUmVzdEFwaVNlcnZpY2UgfSBmcm9tIFwic2FicmUtbmd2LWNvbW11bmljYXRpb24vc2VydmljZXMvUmVzdEFwaVNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTYWJyZVNlcnZpY2UgZXh0ZW5kcyBBYnN0cmFjdFNlcnZpY2UgaW1wbGVtZW50cyBJU2FicmVTZXJ2aWNlIHtcclxuICAgIHN0YXRpYyBTRVJWSUNFX05BTUU6IHN0cmluZyA9IFwiY29tLWludGVybm92YS1ndGNwYXltZW50LXdlYi1tb2R1bGUtU2FicmVTZXJ2aWNlXCI7XHJcblxyXG4gICAgY2FsbFNvYXBTZXJ2aWNlQXN5bmMocGF5bG9hZDogc3RyaW5nLCBhY3Rpb246IHN0cmluZywgYXV0aFRva2VuVHlwZTogQXV0aFRva2VuVHlwZSwgdGltZW91dDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW5zYWZlLWFueVxyXG4gICAgICAgICAgICBsZXQgc29hcFN2YzogSVNvYXBBcGlTZXJ2aWNlID0gZ2V0U2VydmljZShJU29hcEFwaVNlcnZpY2UpO1xyXG4gICAgICAgICAgICBsZXQgcnFfID0geyBhY3Rpb24sIHBheWxvYWQsIGF1dGhUb2tlblR5cGUsIHRpbWVvdXQgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW5zYWZlLWFueVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJxXzpcIixycV8pO1xyXG4gICAgICAgICAgICBzb2FwU3ZjLmNhbGxTd3MocnFfKSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhc3luYzogcmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW5zYWZlLWFueVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYWxsU29hcFNlcnZpY2VBc3luYyBlcnJvcjogXCIsZXJyb3IpOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNhbGxTb2FwU2VydmljZVN5bmMoc3ZjUlE6IHN0cmluZywgc3ZjQWN0aW9uQ29kZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgc29hcFN2YyA9IGdldFNlcnZpY2UoU3J3U3luY0FwaSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzb2FwU3ZjOlwiLHNvYXBTdmMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IFwiXCI7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBzb2FwU3ZjLnN3cyhzdmNSUSwgc3ZjQWN0aW9uQ29kZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic29hcFN2Yy1yZXNwb3NlOiBcIiwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbGxSZXN0U2VydmljZUFzeW5jKHVybDogc3RyaW5nLCBodHRwTWV0aG9kOiBIdHRwTWV0aG9kLCBhdXRoVG9rZW5UeXBlOiBBdXRoVG9rZW5UeXBlLCBwYXlsb2FkOiBzdHJpbmcsIGhlYWRlcnM6IHN0cmluZyk6IFByb21pc2U8UmVzdFJlc3BvbnNlPiB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bnNhZmUtYW55XHJcbiAgICAgICAgcmV0dXJuIGdldFNlcnZpY2UoUmVzdEFwaVNlcnZpY2UpLnNlbmQoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGh0dHBNZXRob2Q6IGh0dHBNZXRob2QsXHJcbiAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICAgIGF1dGhUb2tlblR5cGU6IGF1dGhUb2tlblR5cGUsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBBYnN0cmFjdFZpZXcgfSBmcm9tIFwic2FicmUtbmd2LWFwcC9hcHAvQWJzdHJhY3RWaWV3XCI7XHJcbmltcG9ydCB7IExheWVyU2VydmljZSB9IGZyb20gXCJzYWJyZS1uZ3YtY29yZS9zZXJ2aWNlcy9MYXllclNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tIFwic2FicmUtbmd2LWNvcmUvZGVjb3JhdG9ycy9jbGFzc2VzL3ZpZXcvVGVtcGxhdGVcIjtcclxuaW1wb3J0IHsgU2FicmVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL1NhYnJlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBwcUZhcmUgfSBmcm9tIFwiLi4vbW9kZWwvcHFGYXJlXCI7XHJcbmltcG9ydCB7IGNjRGF0YSB9IGZyb20gXCIuLi9tb2RlbC9jY0RhdGFcIjtcclxuaW1wb3J0IHsgSUFyZWFTZXJ2aWNlIH0gZnJvbSAnc2FicmUtbmd2LWFwcC9hcHAvc2VydmljZXMvaW1wbC9JQXJlYVNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVdGlsaXRhcmlvIH0gZnJvbSBcIi4uL2NvbW1vbi9VdGlsaXRhcmlvXCI7XHJcbmltcG9ydCB7IEFic3RyYWN0QWN0aW9uT3B0aW9ucyB9IGZyb20gXCJzYWJyZS1uZ3YtYXBwL2FwcC9jb21tb24vdmlld3MvQWJzdHJhY3RBY3Rpb25PcHRpb25zXCI7XHJcbmltcG9ydCB7IFNhYnJlQ29udHJvbGxlciB9IGZyb20gXCIuLi9jb250cm9sbGVycy9TYWJyZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgQWJzdHJhY3RWaWV3T3B0aW9ucyB9IGZyb20gJ3NhYnJlLW5ndi1hcHAvYXBwL0Fic3RyYWN0Vmlld09wdGlvbnMnO1xyXG5pbXBvcnQgeyBDb21tYW5kTWVzc2FnZVJlc2VydmF0aW9uUnMgfSBmcm9tICdzYWJyZS1uZ3YtcG9zLWNkbS9yZXNlcnZhdGlvbic7XHJcbmltcG9ydCB7IFJlc3RBcGlTZXJ2aWNlIH0gZnJvbSBcInNhYnJlLW5ndi1jb21tdW5pY2F0aW9uL3NlcnZpY2VzL1Jlc3RBcGlTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEF1dGhUb2tlblR5cGUgfSBmcm9tIFwic2FicmUtbmd2LWFwcC9hcHAvc2VydmljZXMvaW1wbC9BdXRoVG9rZW5UeXBlXCI7XHJcbmltcG9ydCB7IElTb2FwQXBpU2VydmljZSB9IGZyb20gXCJzYWJyZS1uZ3YtY29tbXVuaWNhdGlvbi9pbnRlcmZhY2VzL0lTb2FwQXBpU2VydmljZVwiO1xyXG5pbXBvcnQgeyBIdHRwTWV0aG9kIH0gZnJvbSBcInNhYnJlLW5ndi1hcHAvYXBwL3NlcnZpY2VzL2ltcGwvSHR0cE1ldGhvZFwiO1xyXG5pbXBvcnQgeyBSZXN0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvUmVzdE1vZGVsXCI7XHJcbmltcG9ydCB7IGdldFNlcnZpY2UgfSBmcm9tIFwiLi4vQ29udGV4dFwiO1xyXG5pbXBvcnQgKiBhcyBYTUwySlMgZnJvbSBcInhtbDJqc1wiO1xyXG5pbXBvcnQgeyByZW1hcmsgfSBmcm9tIFwiLi4vbW9kZWwvcmVtYXJrXCI7XHJcblxyXG5AVGVtcGxhdGUoJ2NvbS1pbnRlcm5vdmEtZ3RjcGF5bWVudC13ZWItbW9kdWxlOkNoZWNrVG90YWwnKVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tUb3RhbCBleHRlbmRzIEFic3RyYWN0VmlldzxSZXN0TW9kZWw+IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBBYnN0cmFjdFZpZXdPcHRpb25zLCBwYWNrPzoge30pIHtcclxuICAgICAgICBzdXBlcihvcHRpb25zKTtcclxuICAgICAgICB0aGlzLnByb2Nlc3NEYXRhKHBhY2spO1xyXG4gICAgICAgIHRoaXMuZ2V0TW9kZWwoKS5zZXQoJ3RvdGFsJywgcGFja1sndG90YWwnXSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBybWtzOiByZW1hcmtbXSA9IFtdO1xyXG4gICAgcHVibGljIGNyZWF0ZVJta3M6IHJlbWFya1tdID0gW107XHJcblxyXG4gICAgaW5pdGlhbGl6ZShvcHRpb25zOiBBYnN0cmFjdEFjdGlvbk9wdGlvbnMpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5pbml0aWFsaXplKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NEYXRhKHBhY2s/OiB7fSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucm1rcyA9IHBhY2tbJ1VwZGF0ZVJtayddO1xyXG4gICAgICAgIGxldCBybWtDbSA9IHRoaXMucm1rcy5maWx0ZXIoeCA9PiB4LkNvZGUgPT0gXCJDTVwiKVswXS5UZXh0ID0gXCJDTS1cIiArIHBhY2tbJ2NjQ29kZSddICsgcGFja1snY2FyZDQnXSArIFwiL1wiICsgcGFja1snZXhwTW9udGgnXSArIHBhY2tbJ2V4cFllYXInXSArIFwiLypcIjtcclxuICAgICAgICBsZXQgcm1rUGF5ID0gdGhpcy5ybWtzLmZpbHRlcih4ID0+IHguQ29kZSA9PSBcIlBBWVwiKVswXS5UZXh0ID0gXCJQQVlNRU5ULzEyMzQ1Ni9cIiArIHBhY2tbJ3JlZklkJ10gKyBcIi9cIiArIHBhY2tbJ3RvdGFsJ11cclxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMucm1rc1wiLHRoaXMucm1rcyk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIGxldCBwYWNrOiB7fSA9IHtcclxuICAgICAgICAvLyAgICAgXCJVcGRhdGVSbWtcIjogW11cclxuICAgICAgICAvLyAgICAgXCJtYXJrVXBGZWVcIjogbWFya1VwRmVlLFxyXG4gICAgICAgIC8vICAgICBcImZlZVwiOiBmZWUsXHJcbiAgICAgICAgLy8gICAgIFwicHFBbXRcIjogcHFBbXQsXHJcbiAgICAgICAgLy8gICAgIFwiYWRkaXRpb25hbFwiOiBhZGRpdGlvbmFsLFxyXG4gICAgICAgIC8vICAgICBcImV4cFwiOiBleHAsXHJcbiAgICAgICAgLy8gICAgIFwidG90YWxcIjogdG90YWwsXHJcbiAgICAgICAgLy8gICAgIFwiZnVsbENhcmRcIjogZnVsbENhcmQsXHJcbiAgICAgICAgLy8gICAgIFwiY2FyZDRcIjogY2FyZFNlbGVjdGVkWzBdWydsYXN0NCddLFxyXG4gICAgICAgIC8vICAgICBcImNhcmQ0XCI6IGNhcmRTZWxlY3RlZFswXVsnY29kZSddLFxyXG4gICAgICAgIC8vICAgICBcInJlZklkXCI6IHJlZklkXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIDVILVBBWU1FTlQvQS0xMjM0NTYvT1NVSUNJMjMwMjI3LzE2NzIuODAvVkkxMTExXHJcbiAgICAgICAgLy8gNUgtTTExMDAuMDAvUzE2MC4wMC9UMzYyLjgwL0E1MC4wMC9UVDE2NzIuODBcclxuICAgICAgICB0aGlzLmdlbmVyYXRlUm1rKFwiUEFZTUVOVC9BLTEyMzQ1Ni9cIiArIHBhY2tbJ3JlZklkJ10gKyBcIi9cIiArIHBhY2tbJ3RvdGFsJ10gKyBcIi9cIiArIHBhY2tbJ2NjQ29kZSddICsgcGFja1snY2FyZDQnXSk7XHJcbiAgICAgICAgbGV0IHRleHQgPSBcIlwiO1xyXG4gICAgICAgIGlmIChwYWNrWydtYXJrVXBGZWUnXSkge1xyXG4gICAgICAgICAgICB0ZXh0ID0gXCJNXCIgKyBwYWNrWydtYXJrVXBGZWUnXVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFja1snZmVlJ10pIHtcclxuICAgICAgICAgICAgdGV4dCA9IHRleHQgKyBcIi9TXCIgKyBwYWNrWydmZWUnXVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFja1sncHFBbXQnXSkge1xyXG4gICAgICAgICAgICB0ZXh0ID0gdGV4dCArIFwiL1RcIiArIHBhY2tbJ3BxQW10J11cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhY2tbJ2FkZGl0aW9uYWwnXSkge1xyXG4gICAgICAgICAgICB0ZXh0ID0gdGV4dCArIFwiL0FcIiArIHBhY2tbJ2FkZGl0aW9uYWwnXVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFja1sndG90YWwnXSkge1xyXG4gICAgICAgICAgICB0ZXh0ID0gdGV4dCArIFwiL1RUXCIgKyBwYWNrWyd0b3RhbCddXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVSbWsodGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2VsZk5leHRBY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFyZWFTZXJ2aWNlOiBJQXJlYVNlcnZpY2UgPSBnZXRTZXJ2aWNlKElBcmVhU2VydmljZSk7XHJcbiAgICAgICAgbGV0IGdldHJlc2VydmF0aW9ucHJvbWlzZSA9IGdldFNlcnZpY2UoU2FicmVDb250cm9sbGVyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdldHJlc2VydmF0aW9ucHJvbWlzZVwiLCBnZXRyZXNlcnZhdGlvbnByb21pc2UpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ybWtzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZ2V0cmVzZXJ2YXRpb25wcm9taXNlLlJlbWFya1VwZGF0ZSh0aGlzLnJta3MpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyc3AgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUm1rcyB0byB1cGRhdGVcIiwgdGhpcy5ybWtzKTtcclxuICAgICAgICAgICAgICAgICAgICBnZXRyZXNlcnZhdGlvbnByb21pc2UuU2VuZENvbW1hbmRNZXNzYWdlKFwiKi5cIiwgdHJ1ZSwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocnNwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVtYXJrcyBiZWVuIGRpc3BsYXllZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBhcmVhU2VydmljZS5zaG93QmFubmVyKCdTdWNjZXNzJywgXCJSZW1hcmtzIHdlcmUgdXBkYXRlZFwiKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuY3JlYXRlUm1rc1wiLCB0aGlzLmNyZWF0ZVJta3MpO1xyXG4gICAgICAgIGlmICh0aGlzLnJta3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBnZXRyZXNlcnZhdGlvbnByb21pc2UuYnVpbGRSZXF1ZXN0QWRkUmVtYXJrKHRoaXMuY3JlYXRlUm1rcylcclxuICAgICAgICAgICAgICAgIC50aGVuKHJzcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0cmVzZXJ2YXRpb25wcm9taXNlLlNlbmRDb21tYW5kTWVzc2FnZShcIipQNUhcIiwgdHJ1ZSwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocnNwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVtYXJrcyBiZWVuIGRpc3BsYXllZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBhcmVhU2VydmljZS5zaG93QmFubmVyKCdTdWNjZXNzJywgXCJSZW1hcmtzIHdlcmUgYWRkZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRTZXJ2aWNlKExheWVyU2VydmljZSkuY2xlYXJMYXllcigpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgYWN0aW9uOiBzdHJpbmcgPSB0aGlzLiQoJy5hY3Rpb24tZmllbGQnKS5maW5kKCcuYWN0aW9uJykudmFsKCk7XHJcbiAgICAgICAgY29uc3QgYXV0aFRva2VuVHlwZTogQXV0aFRva2VuVHlwZSA9IHRoaXMuJCgnLmF1dGhUb2tlblR5cGUtZmllbGQnKS5maW5kKCcuYXV0aFRva2VuVHlwZScpLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVvdXQ6IG51bWJlciA9IHRoaXMuJCgnLnRpbWVvdXQtZmllbGQnKS5maW5kKCcudGltZW91dCcpLnZhbCgpO1xyXG4gICAgICAgIGNvbnN0IHBheWxvYWQ6IHN0cmluZyA9IHRoaXMuJCgnLnBheWxvYWQtZmllbGQnKS5maW5kKCcucGF5bG9hZCcpLnZhbCgpO1xyXG5cclxuICAgICAgICB0aGlzLiQoJy5yZXNwb25zZScpLnZhbChcIlwiKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc29hcEFwaTogSVNvYXBBcGlTZXJ2aWNlID0gZ2V0U2VydmljZShJU29hcEFwaVNlcnZpY2UpO1xyXG5cclxuICAgICAgICBzb2FwQXBpLmNhbGxTd3Moe1xyXG4gICAgICAgICAgICBhY3Rpb24sXHJcbiAgICAgICAgICAgIHBheWxvYWQsXHJcbiAgICAgICAgICAgIGF1dGhUb2tlblR5cGUsXHJcbiAgICAgICAgICAgIHRpbWVvdXRcclxuICAgICAgICB9KS50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZVZhbHVlID0gcmVzcG9uc2UuZXJyb3JDb2RlID8gcmVzcG9uc2UgOiBhd2FpdCB0aGlzLnBhcnNlWG1sMkpzKHJlc3BvbnNlLnZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy4kKCcucmVzcG9uc2UnKS52YWwoSlNPTi5zdHJpbmdpZnkocmVzcG9uc2VWYWx1ZSwgbnVsbCwgMikpO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiQoJy5yZXNwb25zZScpLnZhbChlcnJvcik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBsZXQgZ2V0cmVzZXJ2YXRpb25wcm9taXNlID0gZ2V0U2VydmljZShTYWJyZUNvbnRyb2xsZXIpO1xyXG4gICAgICAgIC8vIGdldHJlc2VydmF0aW9ucHJvbWlzZS5idWlsZFJlcXVlc3RBZGRSZW1hcmsodGhpcy5ybWtzKVxyXG4gICAgICAgIC8vICAgICAudGhlbihyc3AgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJyc3A6XCIscnNwKTtcclxuXHJcbiAgICAgICAgLy8gICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICAgICAgYXJlYVNlcnZpY2Uuc2hvd0Jhbm5lcignU3VjY2VzcycsICdSZW1hcmtzIHdlcmUgYWRkZWQhOiAnICsgdGhpcy5hZGZsZXhSZWYpO1xyXG4gICAgICAgIGdldFNlcnZpY2UoTGF5ZXJTZXJ2aWNlKS5jbGVhckxheWVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcGFyc2VYbWwySnMocmVzcG9uc2VWYWx1ZTogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgWE1MMkpTLnBhcnNlU3RyaW5nKHJlc3BvbnNlVmFsdWUsIChlcnIsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlUm1rKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBybWsgPSBuZXcgcmVtYXJrO1xyXG4gICAgICAgIHJtay5UeXBlID0gXCJIaXN0b3JpY2FsXCI7XHJcbiAgICAgICAgcm1rLlRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMuY3JlYXRlUm1rcy5wdXNoKHJtayk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IEFic3RyYWN0VmlldyB9IGZyb20gXCJzYWJyZS1uZ3YtYXBwL2FwcC9BYnN0cmFjdFZpZXdcIjtcbmltcG9ydCB7IExheWVyU2VydmljZSB9IGZyb20gXCJzYWJyZS1uZ3YtY29yZS9zZXJ2aWNlcy9MYXllclNlcnZpY2VcIjtcbmltcG9ydCB7IFRlbXBsYXRlIH0gZnJvbSBcInNhYnJlLW5ndi1jb3JlL2RlY29yYXRvcnMvY2xhc3Nlcy92aWV3L1RlbXBsYXRlXCI7XG5pbXBvcnQgeyBwcUZhcmUgfSBmcm9tIFwiLi4vbW9kZWwvcHFGYXJlXCI7XG5pbXBvcnQgeyBjY0RhdGEgfSBmcm9tIFwiLi4vbW9kZWwvY2NEYXRhXCI7XG5pbXBvcnQgeyBJQXJlYVNlcnZpY2UgfSBmcm9tICdzYWJyZS1uZ3YtYXBwL2FwcC9zZXJ2aWNlcy9pbXBsL0lBcmVhU2VydmljZSc7XG5pbXBvcnQgeyBBYnN0cmFjdEFjdGlvbk9wdGlvbnMgfSBmcm9tIFwic2FicmUtbmd2LWFwcC9hcHAvY29tbW9uL3ZpZXdzL0Fic3RyYWN0QWN0aW9uT3B0aW9uc1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RWaWV3T3B0aW9ucyB9IGZyb20gJ3NhYnJlLW5ndi1hcHAvYXBwL0Fic3RyYWN0Vmlld09wdGlvbnMnO1xuaW1wb3J0IHsgQ29tbWFuZE1lc3NhZ2VSZXNlcnZhdGlvblJzIH0gZnJvbSAnc2FicmUtbmd2LXBvcy1jZG0vcmVzZXJ2YXRpb24nO1xuaW1wb3J0IHsgUmVzdEFwaVNlcnZpY2UgfSBmcm9tIFwic2FicmUtbmd2LWNvbW11bmljYXRpb24vc2VydmljZXMvUmVzdEFwaVNlcnZpY2VcIjtcbmltcG9ydCB7IEF1dGhUb2tlblR5cGUgfSBmcm9tIFwic2FicmUtbmd2LWFwcC9hcHAvc2VydmljZXMvaW1wbC9BdXRoVG9rZW5UeXBlXCI7XG5pbXBvcnQgeyBIdHRwTWV0aG9kIH0gZnJvbSBcInNhYnJlLW5ndi1hcHAvYXBwL3NlcnZpY2VzL2ltcGwvSHR0cE1ldGhvZFwiO1xuaW1wb3J0IHsgUmVzdE1vZGVsIH0gZnJvbSBcIi4uL21vZGVsL1Jlc3RNb2RlbFwiO1xuaW1wb3J0IHsgZ2V0U2VydmljZSB9IGZyb20gXCIuLi9Db250ZXh0XCI7XG5pbXBvcnQgeyBDaGVja1RvdGFsIH0gZnJvbSBcIi4vQ2hlY2tUb3RhbFwiO1xuaW1wb3J0IHsgcmVtYXJrIH0gZnJvbSBcIi4uL21vZGVsL3JlbWFya1wiO1xuaW1wb3J0IHsgU2FicmVDb250cm9sbGVyIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXJzL1NhYnJlQ29udHJvbGxlclwiO1xuXG5AVGVtcGxhdGUoJ2NvbS1pbnRlcm5vdmEtZ3RjcGF5bWVudC13ZWItbW9kdWxlOkd0Y19QYXltZW50JylcbmV4cG9ydCBjbGFzcyBHdGNfUGF5bWVudCBleHRlbmRzIEFic3RyYWN0VmlldzxSZXN0TW9kZWw+IHtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBBYnN0cmFjdFZpZXdPcHRpb25zLCByZXNlcnZhdGlvbj86IENvbW1hbmRNZXNzYWdlUmVzZXJ2YXRpb25Scykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgdGhpcy5nZXRSZXNlcnZhdGlvbihyZXNlcnZhdGlvbik7XG4gICAgfVxuXG4gICAgcHVibGljIHRvdGFsUGF4OiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyB1cGRhdGVSbWtzOiByZW1hcmtbXSA9IFtdO1xuICAgIHB1YmxpYyBwcUZhcmVMaXN0OiBwcUZhcmVbXSA9IFtdO1xuICAgIHB1YmxpYyBjcmVkaXRDYXJkTGlzdDogY2NEYXRhW10gPSBbXTtcbiAgICBpbml0aWFsaXplKG9wdGlvbnM6IEFic3RyYWN0QWN0aW9uT3B0aW9ucyk6IHZvaWQge1xuICAgICAgICBzdXBlci5hZGREb21FdmVudHMoe1xuICAgICAgICAgICAgJ2NoYW5nZSAjc2VsZWN0UHEnOiAnbG9hZEFtb3VudCcsXG4gICAgICAgICAgICAnY2hhbmdlICNjcmVkaXRDYXJkcyc6ICdsb2FkRXhwaXJhdGlvbicsXG4gICAgICAgICAgICAnY2hhbmdlICNtYXJrVXBGZWUnOiAndXBkYXRlVG90YWwnLFxuICAgICAgICAgICAgJ2NoYW5nZSAjYW10JzogJ3VwZGF0ZVRvdGFsJyxcbiAgICAgICAgICAgICdjaGFuZ2UgI2FkZGl0aW9uYWwnOiAndXBkYXRlVG90YWwnLFxuICAgICAgICAgICAgJ2NoYW5nZSAjdGt0RmVlJzogJ3VwZGF0ZVRvdGFsJyxcbiAgICAgICAgICAgICdjaGFuZ2UgI2NhcmRJblVzZSc6ICdtYXhMZW5ndGgnXG4gICAgICAgIH0pO1xuICAgICAgICBzdXBlci5pbml0aWFsaXplKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGdldFJlc2VydmF0aW9uKGZ1bGxQTlI/OiBDb21tYW5kTWVzc2FnZVJlc2VydmF0aW9uUnMpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJmdWxsUE5SXCIsIGZ1bGxQTlIpO1xuICAgICAgICBpZiAoIWZ1bGxQTlIpIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZWFTZXJ2aWNlOiBJQXJlYVNlcnZpY2UgPSBnZXRTZXJ2aWNlKElBcmVhU2VydmljZSk7XG4gICAgICAgICAgICBhcmVhU2VydmljZS5zaG93QmFubmVyKCdFcnJvcicsICdUaGVyZSBpcyBubyBhY3RpdmUgUE5SLi4uJyk7XG4gICAgICAgICAgICBnZXRTZXJ2aWNlKExheWVyU2VydmljZSkuY2xlYXJMYXllcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHBuckRhdGEgPSBmdWxsUE5SLkRhdGE7XG4gICAgICAgICAgICBsZXQgcG5yUmVjbG9jID0gZnVsbFBOUj8uRGF0YT8uUmVjb3JkTG9jYXRvcnNbMF1bJ0lkJ107XG4gICAgICAgICAgICBsZXQgdG90YWxQYXggPSBwbnJEYXRhLlBhc3NlbmdlcnMuUGFzc2VuZ2VyLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMudG90YWxQYXggPSB0b3RhbFBheDtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicG5yUmVjbG9jXCIscG5yUmVjbG9jKTsgICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBsZXQgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGxldCBtb250aCA9IHRvZGF5LmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgbGV0IGRheSA9IHRvZGF5LmdldERhdGUoKTtcbiAgICAgICAgICAgIGxldCBkYXkyID0gKGRheSA8IDEwKSA/IFwiMFwiICsgZGF5LnRvU3RyaW5nKCkgOiBkYXkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGxldCBtb250aDIgPSAobW9udGggPCAxMCkgPyBcIjBcIiArIG1vbnRoLnRvU3RyaW5nKCkgOiBtb250aC50b1N0cmluZygpO1xuICAgICAgICAgICAgbGV0IGFkZmxleFJlZiA9IHBuclJlY2xvYyArIHllYXJbMl0gKyB5ZWFyWzNdICsgbW9udGgyICsgZGF5MjtcbiAgICAgICAgICAgIGxldCBta3VwLCB0a3RGZWUsIGZlZSA9IFwiXCI7XG4gICAgICAgICAgICBsZXQgbWt1cFRvdGFsID0gMDtcbiAgICAgICAgICAgIGxldCBmZWVUb3RhbCA9IDA7XG4gICAgICAgICAgICBsZXQgcGF4TmFtZSA9IHBuckRhdGEuUGFzc2VuZ2Vycy5QYXNzZW5nZXJbMF0uR2l2ZW5OYW1lICsgXCIgXCIgKyBwbnJEYXRhLlBhc3NlbmdlcnMuUGFzc2VuZ2VyWzBdLlN1cm5hbWU7XG4gICAgICAgICAgICBpZiAocG5yRGF0YS5QcmljZVF1b3Rlcz8uUHJpY2VRdW90ZSkge1xuICAgICAgICAgICAgICAgIGxldCBhcnJheUZhcmVzID0gcG5yRGF0YS5QcmljZVF1b3Rlcy5QcmljZVF1b3RlO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYXJyYXlGYXJlc1wiLGFycmF5RmFyZXMpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlGYXJlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlGYXJlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbGVtZW50XCIsZWxlbWVudC5UYXhlcy5Ub3RhbFRheFsnQ3VycmVuY3knXSk7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5UYXhlcy5Ub3RhbFRheFsnQ3VycmVuY3knXSA9PSBcIkdCUFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9uZVBRID0gbmV3IHBxRmFyZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbmVQUS5jdXJyID0gZWxlbWVudC5CYXNlRmFyZS5BbW91bnQuQ3VycmVuY3k7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBlbGVtZW50WydJZCddLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25lUFEuaXRlbSA9IGl0ZW1baXRlbS5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmVQUS50b3RhbCA9IGVsZW1lbnQuVG90YWwuQW1vdW50WydBbW91bnQnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmVQUS50YXhlcyA9IGVsZW1lbnQuVGF4ZXMuVG90YWxUYXhbJ0Ftb3VudCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByaWNlU3RyaW5nID0gZWxlbWVudC50b3RhbHMuc3VidG90YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25lUFEuc3VidG90YWwgPSBwYXJzZUZsb2F0KHByaWNlU3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9uZVBRXCIsb25lUFEpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBxRmFyZUxpc3QucHVzaChvbmVQUSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUFFzXCIsIHRoaXMucHFGYXJlTGlzdCk7XG5cbiAgICAgICAgICAgIGlmIChwbnJEYXRhLkZvcm1PZlBheW1lbnRzPy5Gb3JtT2ZQYXltZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IGFycmF5RmFyZXMgPSBwbnJEYXRhLkZvcm1PZlBheW1lbnRzLkZvcm1PZlBheW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKGFycmF5RmFyZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGFycmF5RmFyZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvbmVDQyA9IG5ldyBjY0RhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbmVDQy5jb2RlID0gZWxlbWVudC5DcmVkaXRDYXJkWydDcmVkaXRDYXJkQ29kZSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgb25lQ0MuY2FyZE1hc2tlZCA9IG9uZUNDLmNvZGUgKyBlbGVtZW50LkNyZWRpdENhcmRbJ0NyZWRpdENhcmROdW1iZXInXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbmVDQy5jYXJkTWFza2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3Q0ZGlnaXRzID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gb25lQ0MuY2FyZE1hc2tlZC5sZW5ndGggLSA0OyBpIDwgb25lQ0MuY2FyZE1hc2tlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0NGRpZ2l0cyA9IGxhc3Q0ZGlnaXRzICsgb25lQ0MuY2FyZE1hc2tlZFtpXS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmVDQy5sYXN0NCA9IGxhc3Q0ZGlnaXRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25lQ0MueWVhciA9IGVsZW1lbnQuQ3JlZGl0Q2FyZFsnRXhwaXJhdGlvblllYXInXVsyXSArIGVsZW1lbnQuQ3JlZGl0Q2FyZFsnRXhwaXJhdGlvblllYXInXVszXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uZUNDLm1vbnRoID0gZWxlbWVudC5DcmVkaXRDYXJkWydFeHBpcmF0aW9uTW9udGgnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwib25lQ0MgXCIsIG9uZUNDKTsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlZGl0Q2FyZExpc3QucHVzaChvbmVDQyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ0NzXCIsIHRoaXMuY3JlZGl0Q2FyZExpc3QpO1xuXG4gICAgICAgICAgICBpZiAocG5yRGF0YS5SZW1hcmtzPy5SZW1hcmspIHtcbiAgICAgICAgICAgICAgICBsZXQgaW52b2ljZVJta3MgPSBwbnJEYXRhLlJlbWFya3MuUmVtYXJrO1xuICAgICAgICAgICAgICAgIGlmIChpbnZvaWNlUm1rcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaW52b2ljZVJta3MuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZWxlbWVudFwiLGVsZW1lbnQpOyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRbJ1R5cGUnXSA9PSBcIkludm9pY2VcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJ0TWt1cCA9IGVsZW1lbnRbJ1RleHQnXS5zcGxpdChcIk1LVVAvXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0TWt1cFsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2xhc2ggPSBwYXJ0TWt1cFsxXS5zcGxpdChcIi9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1rdXAgPSBzbGFzaFsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWt1cFRvdGFsID0gbWt1cFRvdGFsICsgcGFyc2VGbG9hdChta3VwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcnRUa3QgPSBlbGVtZW50WydUZXh0J10uc3BsaXQoXCJUS1RGRUUvXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0VGt0WzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRrdEZlZSA9IHBhcnRUa3RbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0VGt0ID0gZWxlbWVudFsnVGV4dCddLnNwbGl0KFwiRkVFL1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnRUa3RbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlZSA9IHBhcnRUa3RbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY21SbWsgPSBlbGVtZW50WydUZXh0J10uc3BsaXQoXCJDTS1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNtUm1rWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBybWsgPSBuZXcgcmVtYXJrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBybWsuVHlwZSA9IFwiSXRpbmVyYXJ5XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJtay5JZCA9IGVsZW1lbnRbJ0lkJ10udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm1rLlRleHQgPSBlbGVtZW50WydUZXh0J107ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm1rLkNvZGUgPSBcIkNNXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJta3MucHVzaChybWspO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGF5bWVudCA9IGVsZW1lbnRbJ1RleHQnXS5zcGxpdChcIlBBWU1FTlQvXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXltZW50WzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBybWsgPSBuZXcgcmVtYXJrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBybWsuVHlwZSA9IFwiSXRpbmVyYXJ5XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJtay5JZCA9IGVsZW1lbnRbJ0lkJ10udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm1rLlRleHQgPSBlbGVtZW50WydUZXh0J107ICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm1rLkNvZGUgPSBcIlBBWVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUm1rcy5wdXNoKHJtayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLnVwZGF0ZVJta3NcIix0aGlzLnVwZGF0ZVJta3MpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRrdEZlZSkge1xuICAgICAgICAgICAgICAgIGZlZVRvdGFsID0gdG90YWxQYXggKiBwYXJzZUZsb2F0KHRrdEZlZSk7XG4gICAgICAgICAgICB9IGlmIChmZWUpIHtcbiAgICAgICAgICAgICAgICBmZWVUb3RhbCA9IHBhcnNlRmxvYXQoZmVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB0b3RhbEFtdCA9IG1rdXBUb3RhbCArIGZlZVRvdGFsO1xuICAgICAgICAgICAgdGhpcy5nZXRNb2RlbCgpLnNldCgnbWFya1VwRmVlJywgbWt1cFRvdGFsLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgdGhpcy5nZXRNb2RlbCgpLnNldCgndGt0RmVlJywgZmVlVG90YWwudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICB0aGlzLmdldE1vZGVsKCkuc2V0KCdzZWxlY3RQcScsIHRoaXMucHFGYXJlTGlzdCk7XG4gICAgICAgICAgICB0aGlzLmdldE1vZGVsKCkuc2V0KCdjcmVkaXRDYXJkcycsIHRoaXMuY3JlZGl0Q2FyZExpc3QpO1xuICAgICAgICAgICAgdGhpcy5nZXRNb2RlbCgpLnNldCgnbmFtZScsIHBheE5hbWUpO1xuICAgICAgICAgICAgdGhpcy5nZXRNb2RlbCgpLnNldCgncmVmSWQnLCBhZGZsZXhSZWYpO1xuICAgICAgICAgICAgdGhpcy5nZXRNb2RlbCgpLnNldCgndG90YWwnLCB0b3RhbEFtdC50b0ZpeGVkKDIpICsgXCIgR0JQXCIpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlVG90YWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZEFtb3VudChzZWxlY3RvcjogSlF1ZXJ5RXZlbnRPYmplY3QpOiB2b2lkIHtcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLiQoJyNzZWxlY3RQcScpLmNoaWxkcmVuKFwib3B0aW9uOnNlbGVjdGVkXCIpLnZhbCgpO1xuICAgICAgICBpZiAoc2VsZWN0b3IudGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLnBxRmFyZUxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFsnaXRlbSddID09IGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW10XCIpKS52YWx1ZSA9IGVsZW1lbnRbJ3RvdGFsJ10udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb3RhbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCgnI3NlbGVjdFBxJykudmFsKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkRXhwaXJhdGlvbihzZWxlY3RvcjogSlF1ZXJ5RXZlbnRPYmplY3QpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNhcmQgPSB0aGlzLiQoJyNjcmVkaXRDYXJkcycpLmNoaWxkcmVuKFwib3B0aW9uOnNlbGVjdGVkXCIpLnZhbCgpO1xuICAgICAgICBpZiAoc2VsZWN0b3IudGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmNyZWRpdENhcmRMaXN0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRbJ2NhcmRNYXNrZWQnXSA9PSBjYXJkKSB7XG4gICAgICAgICAgICAgICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRJblVzZVwiKSkudmFsdWUgPSBjYXJkO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXhwID0gZWxlbWVudFsnbW9udGgnXSArIFwiL1wiICsgZWxlbWVudFsneWVhciddO1xuICAgICAgICAgICAgICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBpcmF0aW9uXCIpKS52YWx1ZSA9IGV4cDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoJyNjcmVkaXRDYXJkcycpLnZhbChjYXJkKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgd3JpdGVDQyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZEluVXNlXCIpO1xuICAgICAgICBpZiAoY2FyZCA9PSBcImFkZENDXCIpIHtcbiAgICAgICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRJblVzZVwiKSkudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwaXJhdGlvblwiKSkudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgd3JpdGVDQy5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHdyaXRlQ0Muc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG1heExlbmd0aChzZWxlY3RvcjogSlF1ZXJ5RXZlbnRPYmplY3QpOiB2b2lkIHtcbiAgICAgICAgbGV0IHR5cGVkQ2FyZCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRJblVzZVwiKSkudmFsdWU7XG4gICAgICAgIGlmICh0eXBlZENhcmQubGVuZ3RoID4gMTYgfHwgdHlwZWRDYXJkLmxlbmd0aCA8PSAxNSkge1xuICAgICAgICAgICAgaWYgKHR5cGVkQ2FyZC5sZW5ndGggPiAxNikge1xuICAgICAgICAgICAgICAgICg8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkSW5Vc2VFcnJvclwiKSkuaW5uZXJUZXh0ID0gXCJNYXggMTYgbnVtYmVycyBhbGxvd2VkXCI7XG4gICAgICAgICAgICB9IGlmICh0eXBlZENhcmQubGVuZ3RoIDw9IDE1KSB7XG4gICAgICAgICAgICAgICAgKDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRJblVzZUVycm9yXCIpKS5pbm5lclRleHQgPSBcIk5lZWQgMTYgbnVtYmVyc1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRJblVzZURpdlwiKSkuY2xhc3NMaXN0LmFkZChcImhhcy1lcnJvclwiKTtcbiAgICAgICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRJblVzZVwiKSkuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICg8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkSW5Vc2VEaXZcIikpLmNsYXNzTGlzdC5yZW1vdmUoXCJoYXMtZXJyb3JcIik7XG4gICAgICAgICAgICAoPEhUTUxEaXZFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZEluVXNlRXJyb3JcIikpLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVRvdGFsKHNlbGVjdG9yPzogSlF1ZXJ5RXZlbnRPYmplY3QpOiB2b2lkIHtcbiAgICAgICAgbGV0IG1hcmtVcEZlZSA9IDA7XG4gICAgICAgIGxldCBhbXQgPSAwO1xuICAgICAgICBsZXQgYWRkaXRpb25hbCA9IDA7XG4gICAgICAgIGxldCB0a3RGZWUgPSAwO1xuICAgICAgICBpZiAoKDxIVE1MU2VsZWN0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmtVcEZlZVwiKSkudmFsdWUpIHtcbiAgICAgICAgICAgIG1hcmtVcEZlZSA9IHBhcnNlRmxvYXQoKDxIVE1MU2VsZWN0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmtVcEZlZVwiKSkudmFsdWUpO1xuICAgICAgICAgICAgKDxIVE1MU2VsZWN0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcmtVcEZlZVwiKSkudmFsdWUgPSBtYXJrVXBGZWUudG9GaXhlZCgyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDxIVE1MU2VsZWN0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFtdFwiKSkudmFsdWUpIHtcbiAgICAgICAgICAgIGFtdCA9IHBhcnNlRmxvYXQoKDxIVE1MU2VsZWN0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFtdFwiKSkudmFsdWUpO1xuICAgICAgICAgICAgKDxIVE1MU2VsZWN0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFtdFwiKSkudmFsdWUgPSBhbXQudG9GaXhlZCgyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKDxIVE1MU2VsZWN0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZGl0aW9uYWxcIikpLnZhbHVlKSB7XG4gICAgICAgICAgICBhZGRpdGlvbmFsID0gcGFyc2VGbG9hdCgoPEhUTUxTZWxlY3RFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkaXRpb25hbFwiKSkudmFsdWUpO1xuICAgICAgICAgICAgKDxIVE1MU2VsZWN0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZGl0aW9uYWxcIikpLnZhbHVlID0gYWRkaXRpb25hbC50b0ZpeGVkKDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoPEhUTUxTZWxlY3RFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGt0RmVlXCIpKS52YWx1ZSkge1xuICAgICAgICAgICAgdGt0RmVlID0gcGFyc2VGbG9hdCgoPEhUTUxTZWxlY3RFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGt0RmVlXCIpKS52YWx1ZSk7XG4gICAgICAgICAgICAoPEhUTUxTZWxlY3RFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGt0RmVlXCIpKS52YWx1ZSA9IHRrdEZlZS50b0ZpeGVkKDIpO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0b3RhbCA9IG1hcmtVcEZlZSArIGFtdCArIGFkZGl0aW9uYWwgKyB0a3RGZWU7XG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsXCIpKS52YWx1ZSA9IHRvdGFsLnRvRml4ZWQoMikgKyBcIiBHQlBcIjtcbiAgICB9XG5cbiAgICBhc3luYyBzZWxmTmV4dEFjdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuSW5wdXRWYWxpZGF0b3IoKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsaXN0b1wiKTtcblxuICAgICAgICAgICAgdGhpcy5leGVjdXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGV4ZWN1dGUoKSB7XG4gICAgICAgIGxldCBtYXJrVXBGZWUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcmtVcEZlZScpKS52YWx1ZTtcbiAgICAgICAgbGV0IGZlZSA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGt0RmVlJykpLnZhbHVlO1xuICAgICAgICBsZXQgcHFBbXQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FtdCcpKS52YWx1ZTtcbiAgICAgICAgbGV0IGFkZGl0aW9uYWwgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGl0aW9uYWwnKSkudmFsdWU7XG4gICAgICAgIGxldCB0b3RhbCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWwnKSkudmFsdWU7XG4gICAgICAgIGxldCBmdWxsQ2FyZCA9IHRoaXMuJCgnI2NyZWRpdENhcmRzJykuY2hpbGRyZW4oXCJvcHRpb246c2VsZWN0ZWRcIikudmFsKCk7XG4gICAgICAgIGxldCBjYXJkU2VsZWN0ZWQgPSB0aGlzLmNyZWRpdENhcmRMaXN0LmZpbHRlcih4ID0+IHhbJ2NhcmRNYXNrZWQnXSA9PSBmdWxsQ2FyZClcbiAgICAgICAgbGV0IHJlZklkID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWZJZCcpKS52YWx1ZTtcbiAgICAgICAgbGV0IGV4cCA9ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhwaXJhdGlvbicpKS52YWx1ZTtcbiAgICAgICAgbGV0IGV4cE1vbnRoID0gZXhwLnNwbGl0KFwiL1wiKVswXTtcbiAgICAgICAgbGV0IGV4cFllYXIgPSBleHAuc3BsaXQoXCIvXCIpWzFdO1xuICAgICAgICAvLyBsZXQgeHh4eHh4eHh4eCAgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3h4eHh4eHh4eHh4eCcpKS52YWx1ZTtcbiAgICAgICAgLy8gbGV0IHh4eHh4eHh4eHggID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd4eHh4eHh4eHh4eHgnKSkudmFsdWU7XG5cbiAgICAgICAgbGV0IHBhY2s6IHt9ID0ge1xuICAgICAgICAgICAgXCJtYXJrVXBGZWVcIjogbWFya1VwRmVlLFxuICAgICAgICAgICAgXCJmZWVcIjogZmVlLFxuICAgICAgICAgICAgXCJwcUFtdFwiOiBwcUFtdCxcbiAgICAgICAgICAgIFwiYWRkaXRpb25hbFwiOiBhZGRpdGlvbmFsLFxuICAgICAgICAgICAgXCJ0b3RhbFwiOiB0b3RhbCxcbiAgICAgICAgICAgIFwiZnVsbENhcmRcIjogZnVsbENhcmQsXG4gICAgICAgICAgICBcImV4cE1vbnRoXCI6IGV4cE1vbnRoLFxuICAgICAgICAgICAgXCJleHBZZWFyXCI6IGV4cFllYXIsXG4gICAgICAgICAgICBcImNhcmQ0XCI6IGNhcmRTZWxlY3RlZFswXVsnbGFzdDQnXSxcbiAgICAgICAgICAgIFwiY2NDb2RlXCI6IGNhcmRTZWxlY3RlZFswXVsnY29kZSddLFxuICAgICAgICAgICAgXCJyZWZJZFwiOiByZWZJZCxcbiAgICAgICAgICAgIFwiVXBkYXRlUm1rXCI6IHRoaXMudXBkYXRlUm1rc1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFja1wiLCBwYWNrKTtcbiAgICAgICAgY29uc3QgcmVzdE1vZGFsT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ29uZmlybWF0aW9uJyxcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2FwcC5jb21tb24udmlld3MuQnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2FwdGlvbjogJ0NhbmNlbCcsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbk5hbWU6ICdjYW5jZWwnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdhcHAuY29tbW9uLnZpZXdzLkJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGNhcHRpb246ICdCYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uTmFtZTogJ2JhY2snLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2Vjb25kYXJ5J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdhcHAuY29tbW9uLnZpZXdzLkJ1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIGNhcHRpb246IFwiQWRkIFJlbWFya3NcIixcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uTmFtZTogJ25leHQnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG5cbiAgICAgICAgZ2V0U2VydmljZShMYXllclNlcnZpY2UpLnNob3dJbk1vZGFsKFxuICAgICAgICAgICAgbmV3IENoZWNrVG90YWwoeyBtb2RlbDogbmV3IFJlc3RNb2RlbCgpIH0sIHBhY2spLFxuICAgICAgICAgICAgcmVzdE1vZGFsT3B0aW9ucyxcbiAgICAgICAgICAgIHsgZGlzcGxheTogJ2FyZWFWaWV3JyB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIElucHV0VmFsaWRhdG9yKCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgYWxsT2sgPSB0cnVlO1xuICAgICAgICBsZXQgcmVxdWlyZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbcmVxdWlyZWRdJylcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXF1aXJlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSByZXF1aXJlZFtpXTtcbiAgICAgICAgICAgIGxldCBpZCA9IGZpZWxkLmlkO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gKDxIVE1MU2VsZWN0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpLnZhbHVlO1xuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgICg8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQgKyBcIkRpdlwiKSkuY2xhc3NMaXN0LmFkZChcImhhcy1lcnJvclwiKTtcbiAgICAgICAgICAgICAgICAoPEhUTUxEaXZFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkICsgXCJFcnJvclwiKSkuaW5uZXJUZXh0ID0gXCJGaWVsZCBjYW5ub3QgYmUgZW1wdHkgb3IgYmxhbmtcIjtcbiAgICAgICAgICAgICAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIGFsbE9rID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAoPEhUTUxEaXZFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkICsgXCJEaXZcIikpLmNsYXNzTGlzdC5yZW1vdmUoXCJoYXMtZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgKDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCArIFwiRXJyb3JcIikpLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdHlwZWRDYXJkID0gKDxIVE1MU2VsZWN0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRJblVzZVwiKSkudmFsdWU7XG4gICAgICAgICAgICBpZiAodHlwZWRDYXJkICYmICh0eXBlZENhcmQubGVuZ3RoID4gMTYgfHwgdHlwZWRDYXJkLmxlbmd0aCA8PSAxNSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxsZWdvXCIpO1xuICAgICAgICAgICAgICAgIGFsbE9rID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFsbE9rO1xuICAgIH1cblxufVxuIl19 