"use strict";var __extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function __(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(__.prototype=r.prototype,new __)}}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.SabreController=void 0;var AbstractService_1=require("sabre-ngv-app/app/services/impl/AbstractService"),Context_1=require("../Context"),SabreService_1=require("../services/SabreService"),ICommandMessageService_1=require("sabre-ngv-commsg/services/ICommandMessageService"),Utilitario_1=require("../common/Utilitario"),SabreController=function(e){function SabreController(){return null!==e&&e.apply(this,arguments)||this}return __extends(SabreController,e),SabreController.prototype.buildRequestGetReservation=function(e){var t=this;return new Promise(function(r,n){t.buildGetReservationRQ(e,"GetReservationRQ").then(function(e){(0,Context_1.getService)(SabreService_1.SabreService).callSoapServiceAsync(e,"GetReservationRQ","SESSION",1e4).then(function(e){console.log("resolver GetReservationRQ",e),r(!0)}).catch(function(e){n(e)})}).catch(function(e){})})},SabreController.prototype.buildRequestAddRemark=function(e){var t=this;return new Promise(function(r,n){console.log("listRemarks on buildRequestAddRemark",e),t.buildAddRemarkRQ(e,"AddRemarkLLSRQ").then(function(e){(0,Context_1.getService)(SabreService_1.SabreService).callSoapServiceAsync(e,"AddRemarkLLSRQ","SESSION",1e4).then(function(e){console.log("resolver AddRemarkLLSRQ",e),r(!0)}).catch(function(e){n(e)})}).catch(function(e){})})},SabreController.prototype.RemarkUpdate=function(e){var t=this;return new Promise(function(r,n){t.buildRemarkUpdateRQ(e,"UpdateReservationRQrmk").then(function(e){(0,Context_1.getService)(SabreService_1.SabreService).callSoapServiceAsync(e,"UpdateReservationRQ","SESSION",1e4).then(function(e){console.log("resolver UpdateReservationRQ",e),r(!0)}).catch(function(e){n(e)})}).catch(function(e){})})},SabreController.prototype.SendCommandAsync=function(e){var t=this;return new Promise(function(r,n){t.buildRequestSabreCommand(e,"SabreCommandLLSRQ").then(function(e){(0,Context_1.getService)(SabreService_1.SabreService).callSoapServiceAsync(e,"SabreCommandLLSRQ","SESSION",1e4).then(function(e){r(!0)}).catch(function(e){n(e)})}).catch(function(e){})})},SabreController.prototype.SendCommandAsyncRs=function(e){var t=this;return new Promise(function(r,n){t.buildRequestSabreCommand(e,"SabreCommandLLSRQ").then(function(e){console.log("resp:",e),(0,Context_1.getService)(SabreService_1.SabreService).callSoapServiceAsync(e,"SabreCommandLLSRQ","SESSION",1e4).then(function(e){var t=(0,Context_1.getService)(Utilitario_1.Utilitario).StringToXml(e).getElementsByTagName("Response");r(t[0].childNodes[0].nodeValue)}).catch(function(e){n(e)})}).catch(function(e){})})},SabreController.prototype.SendCommandSync=function(e){var t=null,r=this.buildRequestSendCommand(e);if(null!=r&&null!=(t=(0,Context_1.getService)(SabreService_1.SabreService).callSoapServiceSync(r,"SabreCommandLLSRQ"))){var n=JSON.parse(t);return t="",null!=n.response&&n.response.success&&(t=n.response.payload.responseText),t}return t},SabreController.prototype.SendCommandMessage=function(e,t,r){return(0,Context_1.getService)(ICommandMessageService_1.ICommandMessageService).send({rq:e,showRq:t,showRs:r})},SabreController.prototype.checkNodeValues=function(e,t,r){var n="";if(r.localName==e&&r.hasAttributes)for(var o=r.attributes,a=0;a<o.length;a++)o[a].name==t&&(n=o[a].value);return n},SabreController.prototype.GetFinalValue=function(e,t,r,n){var o=new Array;o.push([t,r]),"*"==n&&o.push(["segtype",e.localName]);for(var a=e.childNodes,i=0;i<a.length;i++){var l=a[i];if(l.localName){var c=l.localName,s=l.textContent;o.push([c,s])}}return o},SabreController.prototype.GetElement=function(e,t,r){r&&(e=(0,Context_1.getService)(Utilitario_1.Utilitario).RemoveNameSpace(e));var n=(new DOMParser).parseFromString(e,"text/xml").childNodes[0];if(n.hasAttributes)for(var o=n.attributes,a=!1,i=0;i<o.length;i++){if("xmlns"==o[i].name.split(":")[0]&&!a){var l=o[i].value;a=!0}}return(0,Context_1.getService)(Utilitario_1.Utilitario).GetXPathResult(e,t,function resolverNS(){return l},0).iterateNext()},SabreController.prototype.AddRemarksAsync=function(e){var t=this;return new Promise(function(r,n){t.buildRequestAddRemark(e)})},SabreController.prototype.buildRequestReservation=function(e){return new Promise(function(t,r){(0,Context_1.getService)(Utilitario_1.Utilitario).GetPayLoad(e).then(function(e){t(e)}).catch(function(e){r(e)})})},SabreController.prototype.buildAddRemarkRQ=function(e,t){return new Promise(function(r,n){var o=null;console.log("listRemarks on buildAddRemarkRQ",e);var a=(0,Context_1.getService)(Utilitario_1.Utilitario);a.GetPayLoad(t).then(function(t){var n=a.StringToXml(t);console.log("StringToXml",n);var i=n.getElementsByTagName("RemarkInfo");if(null!=e&&e.length>0)for(var l=0,c=e;l<c.length;l++){var s=c[l];console.log("rmk",s);var u=i[0].appendChild(n.createElement("Remark"));u.setAttribute("Type",s.Type),s.Code&&u.setAttribute("Code",s.Code),s.SegNum&&u.setAttribute("SegmentNumber",s.SegNum),u.appendChild(n.createElement("Text")).textContent=s.Text}o=(o=a.DocumentToString(n)).replace(/xmlns=""/g,""),r(o)}).catch(function(e){n(e)})})},SabreController.prototype.buildRemarkUpdateRQ=function(e,t){return new Promise(function(r,n){var o=null,a=(0,Context_1.getService)(Utilitario_1.Utilitario);a.GetPayLoad(t).then(function(t){var n=a.StringToXml(t),i=n.getElementsByTagName("ReservationUpdateItem");if(null!=e&&e.length>0)for(var l=0,c=e;l<c.length;l++){var s=c[l],u=i[0].appendChild(n.createElement("RemarkUpdate"));u.setAttribute("id",s.Id),u.setAttribute("type","INVOICE"),u.setAttribute("op","U"),u.appendChild(n.createElement("RemarkText")).textContent=s.Text}o=(o=a.DocumentToString(n)).replace(/xmlns=""/g,""),r(o)}).catch(function(e){n(e)})})},SabreController.prototype.buildRequestSabreCommand=function(e,t){return new Promise(function(r,n){var o=null,a=(0,Context_1.getService)(Utilitario_1.Utilitario);a.GetPayLoad(t).then(function(t){if(null!=e){var i=a.StringToXml(t);i.getElementsByTagName("HostCommand")[0].textContent=e,console.log("resolver despues convertir",i.documentElement.innerHTML),o=a.DocumentToString(i),r(o)}else n()}).catch(function(e){n(e)})})},SabreController.prototype.buildRequestSendCommand=function(e){return'<SabreCommandLLSRQ xmlns="http://webservices.sabre.com/sabreXML/2003/07" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" TimeStamp="2014-03-04T14:00:00" Version="1.8.1"><Request Output="SCREEN" CDATA="false"><HostCommand>'+e+"</HostCommand></Request></SabreCommandLLSRQ>"},SabreController.prototype.buildGetReservationRQ=function(e,t){return new Promise(function(r,n){var o=null,a=(0,Context_1.getService)(Utilitario_1.Utilitario);a.GetPayLoad(t).then(function(t){var n=a.StringToXml(t);n.getElementsByTagName("Locator")[0].textContent=e,o=(o=a.DocumentToString(n)).replace(/xmlns=""/g,""),console.log("returnValue",o),r(o)}).catch(function(e){n(e)})})},SabreController.prototype.InputValidator=function(e){document.getElementById(e).value?(document.getElementById(e+"Div").classList.remove("has-error"),document.getElementById(e+"Error").innerText=""):(document.getElementById(e+"Div").classList.add("has-error"),document.getElementById(e+"Error").innerText="Field cannot be empty or blank")},SabreController.SERVICE_NAME="com-internova-gtcpayment-web-module-SabreController",SabreController}(AbstractService_1.AbstractService);exports.SabreController=SabreController;
