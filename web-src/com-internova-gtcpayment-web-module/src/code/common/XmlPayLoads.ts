export class XmlPayLoads {
  public static items = {
    "AddAccountingLineLLSRQ": `<AddAccountingLineRQ TimeStamp="2015-04-09T14:30:00-06:00" Version="2.0.0">
  <AirAccountingLines>
    <InteractiveElectronicTicket>
      <FOP_One Type="CK"/>
      <ItinTotalFare>
        <BaseFare Amount="0.00"/>
        <Commission Amount="0.00"/>
        <Taxes>
          <Tax Amount="0.00"/>
        </Taxes>
      </ItinTotalFare>
      <PersonName NameNumber="1.1">
        <GivenName></GivenName>
        <Surname></Surname>
      </PersonName>
      <Ticketing eTicketNumber="28282828280" NumDocs="1" Tariff="D"/>
      <Type Info="ONE"/>
      <VendorPrefs>
        <Airline Code="DL"/>
      </VendorPrefs>
    </InteractiveElectronicTicket>
  </AirAccountingLines>
</AddAccountingLineRQ>`,

    "UpdateReservationRQCar": `<UpdateReservationRQ xmlns="http://webservices.sabre.com/pnrbuilder/v1_19"
xmlns:ns2="http://services.sabre.com/res/or/v1_14" Version="1.19.0">
<ReservationUpdateList>
  <ReservationUpdateItem>
    <ProductUpdate op="C">
      <Product>
        <ns2:ProductDetails endDateTime="" startDateTime="" startPoint="" statusCode="GK" vendorCode="">
          <ns2:ProductName type="CAR"/>
          <ns2:Vehicle>
            <ns2:ConfirmationNumber></ns2:ConfirmationNumber>
            <ns2:VehicleRentalCore>
              <ns2:DropOffLocationDetails locationCode=""/>
              <ns2:LocationDetails locationCode=""/>
            </ns2:VehicleRentalCore>
            <ns2:VehicleVendorAvail>
              <ns2:VehicleResCore>
                <ns2:PricedEquipment equipmentType="" quantity="1"/>
                <ns2:RentalRate>
                  <ns2:Billing reference=""/>
                  <ns2:Client>
                    <ns2:ID></ns2:ID>
                  </ns2:Client>
                  <ns2:ServiceInformation>
                      <ns2:Text></ns2:Text>
                  </ns2:ServiceInformation>
                </ns2:RentalRate>
                <ns2:Charge dropOffCharge="" typeOfGuarantee="" />
              </ns2:VehicleResCore>
            </ns2:VehicleVendorAvail>
            <ns2:PricingElements>
            </ns2:PricingElements>
          </ns2:Vehicle>
        </ns2:ProductDetails>
      </Product>
    </ProductUpdate>
  </ReservationUpdateItem>
</ReservationUpdateList>
</UpdateReservationRQ>`,

"UpdateReservationRQrmk": `<UpdateReservationRQ xmlns="http://webservices.sabre.com/pnrbuilder/v1_19" xmlns:or="http://services.sabre.com/res/or/v1_12" Version="1.19.0" EchoToken="RK/ENV/PXGSSDMLT-60703">
<RequestType>Stateful</RequestType>
  <ReservationUpdateList>
      <ReservationUpdateItem>
      </ReservationUpdateItem>
  </ReservationUpdateList>
</UpdateReservationRQ>`,

    "UpdateReservationRQHotel": `<UpdateReservationRQ xmlns="http://webservices.sabre.com/pnrbuilder/v1_19"
xmlns:ns2="http://services.sabre.com/res/or/v1_14" Version="1.19.0">
  <ReservationUpdateList>
    <ReservationUpdateItem>
      <ProductUpdate op="C">
        <Product>
          <ns2:ProductDetails>
            <ns2:ProductName type="HHT"/>
            <ns2:Hotel>
              <ns2:Reservation>
                <ns2:LineStatus>GK</ns2:LineStatus>
                <ns2:SpecialPrefs>
                </ns2:SpecialPrefs>
                <ns2:RoomType>
                  <ns2:RoomTypeCode></ns2:RoomTypeCode>
                  <ns2:NumberOfUnits></ns2:NumberOfUnits>
                </ns2:RoomType>
                <ns2:RoomRates>
                  <ns2:AmountBeforeTax></ns2:AmountBeforeTax>
                  <ns2:CurrencyCode></ns2:CurrencyCode>
                </ns2:RoomRates>
                <ns2:TimeSpanStart></ns2:TimeSpanStart>
                <ns2:TimeSpanEnd></ns2:TimeSpanEnd>
                <ns2:Guarantee>
                </ns2:Guarantee>
                <ns2:ChainCode></ns2:ChainCode>
                <ns2:HotelCityCode></ns2:HotelCityCode>
                <ns2:HotelName></ns2:HotelName>
              </ns2:Reservation>
              <ns2:AdditionalInformation>
                <ns2:ConfirmationNumber></ns2:ConfirmationNumber>
                <ns2:Address>
                </ns2:Address>
                <ns2:ContactNumbers>
                  <ns2:PhoneNumber></ns2:PhoneNumber>
                </ns2:ContactNumbers>
              </ns2:AdditionalInformation>
            </ns2:Hotel>
          </ns2:ProductDetails>
        </Product>
      </ProductUpdate>
    </ReservationUpdateItem>
  </ReservationUpdateList>
</UpdateReservationRQ>`,

    "AddRemarkLLSRQ": `
<AddRemarkRQ xmlns="http://webservices.sabre.com/sabreXML/2011/10" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ReturnHostCommand="true" Version="2.1.1">
<RemarkInfo>
</RemarkInfo>
</AddRemarkRQ>`,

    "EPS_EXT_ProfileReadRQ": `        
<Sabre_OTA_ProfileReadRQ xmlns="http://www.sabre.com/eps/schemas"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sabre.com/eps/schemas        
        ..\schemasWSDL\Sabre_OTA_ProfileReadRQ.xsd" Version="6.55">
<Profile>
  <TPA_Identity UniqueID="229281197" ClientCode="TN" DomainID="KA0J" ClientContextCode="MYS">
  </TPA_Identity>
</Profile>
</Sabre_OTA_ProfileReadRQ>`,

    "eTicketCouponLLSRQ": `
<eTicketCouponRQ xmlns="http://webservices.sabre.com/sabreXML/2011/10" Version="2.0.0" ReturnHostCommand="true">
<Ticketing eTicketNumber="2204898351580"/>
</eTicketCouponRQ>`,

    "GetReservationRQ_WithSession": `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:eb="http://www.ebxml.org/namespaces/messageHeader"
xmlns:xlink="http://www.w3.org/1999/xlink"
xmlns:xsd="http://www.w3.org/1999/XMLSchema">
<SOAP-ENV:Header>
  <eb:MessageHeader SOAP-ENV:mustUnderstand="1" eb:version="1.0">
    <eb:From>
      <eb:PartyId type="urn:x12.org:IO5:01">999999</eb:PartyId>
    </eb:From>
    <eb:To>
      <eb:PartyId type="urn:x12.org:IO5:01">123123</eb:PartyId>
    </eb:To>
    <eb:CPAId>U511</eb:CPAId>
    <eb:ConversationId>webservices.support@sabre.com</eb:ConversationId>
    <eb:Service eb:type="OTA">Air</eb:Service>
    <eb:Action>GetReservationRQ</eb:Action>
    <eb:MessageData>
      <eb:MessageId>1000</eb:MessageId>
      <eb:Timestamp>2016-12-30T05:25:32z</eb:Timestamp>
    </eb:MessageData>
  </eb:MessageHeader>
  <wsse:Security xmlns:wsse="http://schemas.xmlsoap.org/ws/2002/12/secext"
    xmlns:wsu="http://schemas.xmlsoap.org/ws/2002/12/utility">
    <wsse:BinarySecurityToken></wsse:BinarySecurityToken>
  </wsse:Security>
</SOAP-ENV:Header>
<SOAP-ENV:Body>
  <GetReservationRQ Version="1.19.0"
    xmlns="http://webservices.sabre.com/pnrbuilder/v1_19">
    <Locator></Locator>
    <RequestType>Stateful</RequestType>
    <ReturnOptions PriceQuoteServiceVersion="3.2.0">
      <SubjectAreas>
        <SubjectArea>FULL</SubjectArea>
        <SubjectArea>PRICE_QUOTE</SubjectArea>
      </SubjectAreas>
    </ReturnOptions>
  </GetReservationRQ>
</SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,

    "GetReservationRQ": `
<GetReservationRQ Version="1.19.0"
xmlns="http://webservices.sabre.com/pnrbuilder/v1_19">
<Locator>OSUICI</Locator>
<RequestType>Stateful</RequestType>
<ReturnOptions>
  <ViewName>VaDefaultWithPq</ViewName>
  <ResponseFormat>STL</ResponseFormat>
</ReturnOptions>
</GetReservationRQ>`,

    "IgnoreTransactionLLSRQ_WithSession": `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:eb="http://www.ebxml.org/namespaces/messageHeader"
xmlns:xlink="http://www.w3.org/1999/xlink"
xmlns:xsd="http://www.w3.org/1999/XMLSchema">
<SOAP-ENV:Header>
  <eb:MessageHeader SOAP-ENV:mustUnderstand="1" eb:version="1.0">
    <eb:From>
      <eb:PartyId type="urn:x12.org:IO5:01">999999</eb:PartyId>
    </eb:From>
    <eb:To>
      <eb:PartyId type="urn:x12.org:IO5:01">123123</eb:PartyId>
    </eb:To>
    <eb:CPAId>KA0J</eb:CPAId>
    <eb:ConversationId>webservices.support@sabre.com</eb:ConversationId>
    <eb:Service eb:type="OTA">IgnoreTransactionLLSRQ</eb:Service>
    <eb:Action>IgnoreTransactionLLSRQ</eb:Action>
    <eb:MessageData>
      <eb:MessageId>1000</eb:MessageId>
      <eb:Timestamp>2016-12-30T05:25:32z</eb:Timestamp>
    </eb:MessageData>
  </eb:MessageHeader>
  <wsse:Security xmlns:wsse="http://schemas.xmlsoap.org/ws/2002/12/secext"
    xmlns:wsu="http://schemas.xmlsoap.org/ws/2002/12/utility">
    <wsse:BinarySecurityToken></wsse:BinarySecurityToken>
  </wsse:Security>
</SOAP-ENV:Header>
<SOAP-ENV:Body>
  <IgnoreTransactionRQ ReturnHostCommand="true" Version="2.0.0"
    xmlns="http://webservices.sabre.com/sabreXML/2011/10"/>
</SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,

    "PassengerDetailsRQ_WithSession": `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:eb="http://www.ebxml.org/namespaces/messageHeader"
xmlns:xlink="http://www.w3.org/1999/xlink"
xmlns:xsd="http://www.w3.org/1999/XMLSchema">
<SOAP-ENV:Header>
  <eb:MessageHeader SOAP-ENV:mustUnderstand="1" eb:version="1.0">
    <eb:From>
      <eb:PartyId type="urn:x12.org:IO5:01">999999</eb:PartyId>
    </eb:From>
    <eb:To>
      <eb:PartyId type="urn:x12.org:IO5:01">123123</eb:PartyId>
    </eb:To>
    <eb:CPAId>KA0J</eb:CPAId>
    <eb:ConversationId>webservices.support@sabre.com</eb:ConversationId>
    <eb:Service eb:type="OTA">PassengerDetailsRQ</eb:Service>
    <eb:Action>PassengerDetailsRQ</eb:Action>
    <eb:MessageData>
      <eb:MessageId>1000</eb:MessageId>
      <eb:Timestamp>2016-12-30T05:25:32z</eb:Timestamp>
    </eb:MessageData>
  </eb:MessageHeader>
  <wsse:Security xmlns:wsse="http://schemas.xmlsoap.org/ws/2002/12/secext"
    xmlns:wsu="http://schemas.xmlsoap.org/ws/2002/12/utility">
    <wsse:BinarySecurityToken></wsse:BinarySecurityToken>
  </wsse:Security>
</SOAP-ENV:Header>
<SOAP-ENV:Body>
  <PassengerDetailsRQ xmlns="http://services.sabre.com/sp/pd/v3_4" version="3.4.0" ignoreOnError="false" haltOnError="false">
    <MiscSegmentSellRQ>
      <MiscSegment DepartureDateTime="12-21" InsertAfter="0" NumberInParty="1" Status="GK" Type="OTH">
        <OriginLocation LocationCode="FSG"/>
        <Text>TEST</Text>
        <VendorPrefs>
          <Airline Code="XX"/>
        </VendorPrefs>
      </MiscSegment>
    </MiscSegmentSellRQ>
    <PostProcessing haltOnInvalidMCT="false" ignoreAfter="true" unmaskCreditCard="false">
      <RedisplayReservation waitInterval="100" returnExtendedPriceQuote="false"/>
      <EndTransactionRQ shouldCheckRefId="true">
        <EndTransaction Ind="true"/>
        <Source ReceivedFrom="SWS VISTAJET"/>
      </EndTransactionRQ>
      <QueuePlaceRQ NumResponses="5">
        <QueueInfo>
          <QueueIdentifier Number="400" PrefatoryInstructionCode="10" PseudoCityCode="KA0J"/>
          <UniqueID ID="UDFJGZ"/>
        </QueueInfo>
      </QueuePlaceRQ>
    </PostProcessing>
    <ProfileRQ>
      <UniqueID id="CRHTL"/>
    </ProfileRQ>
    <SpecialReqDetails>
      <AddRemarkRQ>
        <RemarkInfo>
          <Remark Code="H" Type="Alpha-Coded">
            <Text></Text>
          </Remark>
        </RemarkInfo>
      </AddRemarkRQ>
    </SpecialReqDetails>
  </PassengerDetailsRQ>
</SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,

    "PassengerDetailsRQ": `
<PassengerDetailsRQ xmlns="http://services.sabre.com/sp/pd/v3_4" version="3.4.0" ignoreOnError="false" haltOnError="false">
<MiscSegmentSellRQ>
  <MiscSegment DepartureDateTime="12-21" InsertAfter="0" NumberInParty="1" Status="GK" Type="OTH">
    <OriginLocation LocationCode="FSG"/>
    <Text>TEST</Text>
    <VendorPrefs>
      <Airline Code="XX"/>
    </VendorPrefs>
  </MiscSegment>
</MiscSegmentSellRQ>
<PostProcessing haltOnInvalidMCT="false" ignoreAfter="true" unmaskCreditCard="false">
  <RedisplayReservation waitInterval="100" returnExtendedPriceQuote="false"/>
  <EndTransactionRQ shouldCheckRefId="true">
    <EndTransaction Ind="true"/>
    <Source ReceivedFrom="SWS VISTAJET"/>
  </EndTransactionRQ>
  <QueuePlaceRQ NumResponses="5">
    <QueueInfo>
      <QueueIdentifier Number="400" PrefatoryInstructionCode="10" PseudoCityCode="KA0J"/>
      <UniqueID ID="UDFJGZ"/>
    </QueueInfo>
  </QueuePlaceRQ>
</PostProcessing>
<ProfileRQ>
  <UniqueID id="CRHTL"/>
</ProfileRQ>
<SpecialReqDetails>
  <AddRemarkRQ>
    <RemarkInfo>
      <Remark Code="H" SegmentNumber="1" Type="General">
        <Text>TEST REMARK 2</Text>
      </Remark>
    </RemarkInfo>
  </AddRemarkRQ>
</SpecialReqDetails>
</PassengerDetailsRQ>`,

    "QueuePlaceRQ": `<QueuePlaceRQ xmlns="http://webservices.sabre.com/sabreXML/2011/10"
xmlns:xs="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" Version="2.0.4">
<QueueInfo>
<QueueIdentifier Number="" PrefatoryInstructionCode="11" PseudoCityCode=""/>
</QueueInfo>
</QueuePlaceRQ>`,

    "Sabre_OTA_ProfileReadRQ": `
<Sabre_OTA_ProfileReadRQ xmlns="http://www.sabre.com/eps/schemas"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sabre.com/eps/schemas
..\schemasWSDL\Sabre_OTA_ProfileReadRQ.xsd" Version="6.55">
<Profile>
<TPA_Identity UniqueID="*" ClientCode="" DomainID="" ProfileTypeCode="" ClientContextCode="" />
</Profile>
</Sabre_OTA_ProfileReadRQ>`,

    "Sabre_OTA_ProfileSearchRQ": `
<Sabre_OTA_ProfileSearchRQ Version="6.26"
xmlns="http://www.sabre.com/eps/schemas"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sabre.com/eps/schemas ..\schemaswsdl\Sabre_OTA_ProfileSearchRQ.xsd">
<ProfileSearchCriteria ProfileNameOnly="Y">
<TPA_Identity ClientCode="" ClientContextCode="" DomainID="" ProfileName="" ProfileTypeCode=""/>
</ProfileSearchCriteria>
</Sabre_OTA_ProfileSearchRQ>`,

    "Sabre_OTA_ProfileToPNRRQ_WithSession": `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:eb="http://www.ebxml.org/namespaces/messageHeader"
xmlns:xlink="http://www.w3.org/1999/xlink"
xmlns:xsd="http://www.w3.org/1999/XMLSchema">
<SOAP-ENV:Header>
<eb:MessageHeader SOAP-ENV:mustUnderstand="1" eb:version="1.0">
  <eb:From>
    <eb:PartyId type="urn:x12.org:IO5:01">999999</eb:PartyId>
  </eb:From>
  <eb:To>
    <eb:PartyId type="urn:x12.org:IO5:01">123123</eb:PartyId>
  </eb:To>
  <eb:CPAId>KA0J</eb:CPAId>
  <eb:ConversationId>webservices.support@sabre.com</eb:ConversationId>
  <eb:Service eb:type="OTA">EPS</eb:Service>
  <eb:Action>EPS_EXT_ProfileToPNRRQ</eb:Action>
  <eb:MessageData>
    <eb:MessageId>1000</eb:MessageId>
    <eb:Timestamp>2016-12-30T05:25:32z</eb:Timestamp>
  </eb:MessageData>
</eb:MessageHeader>
<wsse:Security xmlns:wsse="http://schemas.xmlsoap.org/ws/2002/12/secext"
  xmlns:wsu="http://schemas.xmlsoap.org/ws/2002/12/utility">
  <wsse:BinarySecurityToken></wsse:BinarySecurityToken>
</wsse:Security>
</SOAP-ENV:Header>
<SOAP-ENV:Body>
<Sabre_OTA_ProfileToPNRRQ Target="Production" TimeStamp="2013-04-30T08:24:42.967Z" Version="6.55" xsi:schemaLocation="http://www.sabre.com/eps/schemas \schemas\Sabre_OTA_ProfileCreateRQ.xsd"
  xmlns="http://www.sabre.com/eps/schemas"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <FilterPath>
    <Profile ClientCode="" ClientContextCode="" DomainID="" ProfileTypeCode="" UniqueID="" ProfileName="" PNRMoveOrderSeqNo="1">
      <Filter FilterID="" DomainID="" ClientCode="" ClientContextCode="" FilterName=""/>
    </Profile>
  </FilterPath>
</Sabre_OTA_ProfileToPNRRQ>
</SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,

    "Sabre_OTA_ProfileToPNRRQ": `
<Sabre_OTA_ProfileToPNRRQ Target="Production" TimeStamp="2013-04-30T08:24:42.967Z" Version="6.55" xsi:schemaLocation="http://www.sabre.com/eps/schemas \schemas\Sabre_OTA_ProfileCreateRQ.xsd"
xmlns="http://www.sabre.com/eps/schemas"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<FilterPath>
<Profile ClientCode="" ClientContextCode="" DomainID="" ProfileTypeCode="" UniqueID="" ProfileName="" PNRMoveOrderSeqNo="1">
  <Filter FilterID="" DomainID="" ClientCode="" ClientContextCode="" FilterName=""/>
</Profile>
</FilterPath>
</Sabre_OTA_ProfileToPNRRQ>`,

    "SabreCommandLLSRQ_WithSession": `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:eb="http://www.ebxml.org/namespaces/messageHeader"
xmlns:xlink="http://www.w3.org/1999/xlink"
xmlns:xsd="http://www.w3.org/1999/XMLSchema">
<SOAP-ENV:Header>
<eb:MessageHeader SOAP-ENV:mustUnderstand="1" eb:version="1.0">
<eb:From>
  <eb:PartyId type="urn:x12.org:IO5:01">999999</eb:PartyId>
</eb:From>
<eb:To>
  <eb:PartyId type="urn:x12.org:IO5:01">123123</eb:PartyId>
</eb:To>
<eb:CPAId>KA0J</eb:CPAId>
<eb:ConversationId>webservices.support@sabre.com</eb:ConversationId>
<eb:Service eb:type="OTA">SabreCommandLLSRQ</eb:Service>
<eb:Action>SabreCommandLLSRQ</eb:Action>
<eb:MessageData>
  <eb:MessageId>1000</eb:MessageId>
  <eb:Timestamp>2016-12-30T05:25:32z</eb:Timestamp>
</eb:MessageData>
</eb:MessageHeader>
<wsse:Security xmlns:wsse="http://schemas.xmlsoap.org/ws/2002/12/secext"
xmlns:wsu="http://schemas.xmlsoap.org/ws/2002/12/utility">
<wsse:BinarySecurityToken></wsse:BinarySecurityToken>
</wsse:Security>
</SOAP-ENV:Header>
<SOAP-ENV:Body>
<SabreCommandLLSRQ xmlns="http://webservices.sabre.com/sabreXML/2003/07"
xmlns:xs="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" TimeStamp="2014-03-04T14:00:00" Version="1.8.1">
<Request Output="SCREEN" CDATA="true">
  <HostCommand></HostCommand>
</Request>
</SabreCommandLLSRQ>
</SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,

    "SabreCommandLLSRQ": `
<SabreCommandLLSRQ xmlns="http://webservices.sabre.com/sabreXML/2003/07"
xmlns:xs="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" TimeStamp="2014-03-04T14:00:00" Version="1.8.1">
<Request Output="SCREEN" CDATA="true">
<HostCommand></HostCommand>
</Request>
</SabreCommandLLSRQ>`,

    "SessionCreateRQ": `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
<SOAP-ENV:Header>
<MessageHeader xmlns="http://www.ebxml.org/namespaces/messageHeader">
<From>
  <PartyId>Agency</PartyId>
</From>
<To>
  <PartyId>Sabre_API</PartyId>
</To>
<ConversationId>2021.01.DevStudio</ConversationId>
<Action>SessionCreateRQ</Action>
</MessageHeader>
<Security xmlns="http://schemas.xmlsoap.org/ws/2002/12/secext">
<UsernameToken>
  <Username></Username>
  <Password></Password>
  <Organization></Organization>
  <Domain>DEFAULT</Domain>
</UsernameToken>
</Security>
</SOAP-ENV:Header>
<SOAP-ENV:Body>
<SessionCreateRQ returnContextID="true" Version="1.0.0"
xmlns="http://www.opentravel.org/OTA/2002/11"/>
</SOAP-ENV:Body>
</SOAP-ENV:Envelope>`
  }
}