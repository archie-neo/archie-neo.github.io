(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 700px)\r\n{\r\n\t.neo {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\r\n\t.donate {\r\n\t\twidth: 100%;\r\n\t\ttext-align: center;\r\n\t\tleft: 0% !important;\r\n\t}\r\n\t.donate button {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t.donate input {\r\n\t\twidth: 90%;\r\n\t\tmargin-left: 5vw;\r\n\t\tmargin-right: 5vw;\r\n\t\tborder-top-right-radius: 5px;\r\n\t\tborder-bottom-right-radius: 5px;\r\n\t}\r\n\r\n\t.help {\r\n\t\twidth: 6vw !important;\r\n\t\theight: auto;\r\n\t}\r\n\t.loader {\r\n\t\twidth: 6vw !important;\r\n\t\theight: 6vw !important;\r\n\t}\r\n}\r\n\r\n.neo img{\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tright: 0;\r\n\tfloat: right;\r\n\tmargin-bottom: 15px;\r\n\tmargin-right: 15px;\r\n\r\n\topacity: 0.3;\r\n  transition: all 0.5s ease-out;\r\n}\r\n\r\n.neo img:hover {\r\n  opacity: 0.9;\r\n  transition: all 0.5s ease-out;\r\n}\r\n\r\n.bitcoach {\r\n\tposition: fixed;\r\n\ttop: 95%;\r\n\tleft: 88%;\r\n\t\r\n\tfont-family: 'Montserrat';\r\n\r\n\topacity: 0.25;\r\n    filter: alpha(opacity=25); /* For IE8 and earlier */\t\r\n}\r\n\r\n.bitcoach.img {\r\n\tmargin: 10px;\r\n}\r\n\r\n.bitcoach:hover {\r\n\topacity: 0.75;\r\n    filter: alpha(opacity=75); /* For IE8 and earlier */\r\n}\r\n\r\n.responseArea {\r\n\tposition: fixed;\r\n\ttop: 30%;\r\n\theight: 300px;\r\n\twidth: 80%;\r\n\tleft: 10%;\r\n}\r\n\r\n.responseAreaText {\r\n\tposition: absolute;\r\n  \ttop: 50%;\r\n  \tleft: 50%;;\r\n  \twidth: 100%;\r\n  \t-webkit-transform: translate(-50%, -50%);\r\n  \t        transform: translate(-50%, -50%);\r\n\r\n\r\n\tfont-family: 'Montserrat'; \r\n\tfont-size: 60px;\r\n\tletter-spacing: -1px;\r\n\r\n\tcolor: #40e840;\r\n\tline-height: 150%;\r\n\ttext-align: center;\r\n}\r\n\r\n.logo {\r\n\topacity: 0.25;\r\n    filter: alpha(opacity=25); /* For IE8 and earlier */\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\n.loading-pulsate {\r\n\t/*position data */\r\n\tposition: fixed;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\t/* bring your own prefixes */\r\n\t-webkit-transform: translate(-50%, -50%);\r\n\t        transform: translate(-50%, -50%);\r\n\r\n\t/*font data */\r\n\tfont-family: 'Montserrat'; \r\n\tfont-weight: bold;\r\n\tfont-size: 30px; \r\n\tfont-style: normal; \r\n\tfont-variant: normal; \r\n\tfont-weight: 700; \r\n\tcolor: #40e840;\r\n\tcursor: default;\r\n\ttext-align: center;\r\n\r\n\t-webkit-user-select: none;  /* Chrome all / Safari all */\r\n\t-moz-user-select: none;     /* Firefox all */\r\n\t-ms-user-select: none;      /* IE 10+ */\r\n\tuser-select: none;          /* Likely future */      \r\n\t\r\n\t/*pulsating text */\r\n\t-webkit-animation: pulsate 3s ease-out;\r\n    -webkit-animation-iteration-count: infinite; \r\n    opacity: 0.2;\r\n}\r\n\r\n.loading {\r\n\t/*position data */\r\n\tposition: fixed;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\t/* bring your own prefixes */\r\n\t-webkit-transform: translate(-50%, -50%);\r\n\t        transform: translate(-50%, -50%);\r\n\r\n\t/*font data */\r\n\tfont-family: 'Montserrat'; \r\n\tfont-weight: bold;\r\n\tfont-size: 30px; \r\n\tfont-style: normal; \r\n\tfont-variant: normal; \r\n\tfont-weight: 700; \r\n\tcolor: #40e840;\r\n\tcursor: default;\r\n\ttext-align: center;\r\n\t\r\n\t-webkit-user-select: none;  /* Chrome all / Safari all */\r\n\t-moz-user-select: none;     /* Firefox all */\r\n\t-ms-user-select: none;      /* IE 10+ */\r\n\tuser-select: none;          /* Likely future */      \r\n}\r\n\r\n.fullscreenDiv {\r\n    background-color: #f2fff4;\r\n    width: 100%;\r\n    height: auto;\r\n    bottom: 0px;\r\n    top: 0px;\r\n    left: 0;\r\n    position: absolute;\r\n  \ttransition: background-color 1s ease-out;\r\n}\r\n\r\n@-webkit-keyframes pulsate {\r\n    0% { \r\n        opacity: 0.05;\r\n    }\r\n    50% { \r\n        opacity: 1.0;\r\n    }\r\n    100% { \r\n        opacity: 0.05;\r\n    }\r\n}\r\n\r\n.textArea {\r\n\tposition: absolute;\r\n\tleft: -6px;\r\n\tfont-family: 'Montserrat'; \r\n\tfont-size: 30px;\r\n\tcaret-color: #40e840;\r\n\tmargin-top: 30px;\r\n\tmargin-right: 50px;\r\n\twidth: 100%;\r\n\theight: 400;\r\n\tfont-size: 50px;\r\n\ttext-align: center;\r\n\tbackground-color: #f2fff4;\r\n\tborder: 0;\r\n\tborder-style: none; \r\n    border-color: Transparent; \r\n    resize: none; \r\n    overflow: hidden;\r\n  \ttransition: background-color 1s ease-out;\r\n}\r\n\r\n@media (max-width: 700px)\r\n{\r\n\t.textArea {\r\n\t\tleft: 0%;\r\n\t\tfont-size: 8vw;\r\n\t\tmargin-top: 8vh;\r\n\t}\r\n}\r\n\r\n.textArea:focus {\r\n\t\r\n\toutline: none;\r\n\tbox-shadow:none !important;\r\n\tborder: 0;\r\n\tborder-style: none; \r\n\tborder-color: Transparent; \r\n\toverflow: auto;\r\n}\r\n\r\n.form-control:focus {\r\n\toutline: none;\r\n\tbox-shadow:none !important;\r\n\tborder: 0;\r\n\tborder-style: none; \r\n\tborder-color: Transparent; \r\n\toverflow: auto;\r\n}\r\n\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    padding-top: 100px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n.donate {\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tmargin-bottom: 15px;\r\n\r\n\tcolor: #40e840;\r\n\topacity: 0.3;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.donate button {\r\n\tborder: 0;\r\n\tborder-top-right-radius: 5px;\r\n\tborder-bottom-right-radius: 5px;\r\n\tcolor: black;\r\n}\r\n\r\n.donate button:hover {\r\n\t -webkit-filter: brightness(90%);\r\n\t         filter: brightness(90%);\r\n}\r\n\r\n.donate input{\r\n\tborder: 0;\r\n\tsize: 40;\r\n\tbackground: gray;\r\n\tcolor: white;\r\n\tborder-top-left-radius: 5px;\r\n\tborder-bottom-left-radius: 5px;\r\n\ttext-align: center;\r\n\t\r\n}\r\n\r\n/* Modal Content */\r\n\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%;\r\n    font-size: 11px;\r\n    text-align: left;\r\n}\r\n\r\n.modal-content .green {\r\n\tfont-size: 12px;\r\n\ttext-align: left;\r\n\tcolor: green;\r\n}\r\n\r\n.modal-content .black {\r\n\tfont-size: 16px;\r\n\ttext-align: left;\r\n\tcolor: black;\r\n\topacity: 0.75\r\n}\r\n\r\n/* The Close Button */\r\n\r\n.close {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n    z-index: 1;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.help{\r\n\tposition: relative;\r\n\twidth: 30px;\r\n\theight: auto;\r\n\tmargin-top: 15px;\r\n\topacity: 0.5;\r\n\tcursor: pointer;\r\n transition: all 0.3s ease-out;\r\n}\r\n\r\n.help:hover {\r\n\topacity: 1;\r\n\t-webkit-transform: scale(1.1);\r\n\t        transform: scale(1.1);\r\n transition: all 0.3s ease-out;\r\n}\r\n\r\n.input:focus {\r\n    outline: none !important;\r\n    border:1px solid red;\r\n    box-shadow: 0 0 10px #719ECE;\r\n}\r\n\r\n.loader {\r\n\t\r\n\tmargin-top: 15px;\r\n\tfloat: right;\r\n\tborder: 3px solid #40e840;\r\n\tborder-radius: 80%;\r\n\tborder-top: 3px solid #f2fff4;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\t-webkit-animation: spin 1s linear infinite; /* Safari */\r\n\tanimation: spin 1s linear infinite;\r\n\r\n}\r\n\r\n.send {\r\n\tfont-size: 500px;\r\n}\r\n\r\n/* Safari */\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\nbody {\r\n\tbackground-color: #f2fff4;\r\n\toverflow-y: hidden;\r\n\toverflow-x: hidden;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n\tcolor: \"dce8de\";\r\n    opacity: 0.1; /* Firefox */\r\n}\r\n\r\n:-ms-input-placeholder {\r\n\tcolor: \"dce8de\";\r\n    opacity: 0.1; /* Firefox */\r\n}\r\n\r\n::-ms-input-placeholder {\r\n\tcolor: \"dce8de\";\r\n    opacity: 0.1; /* Firefox */\r\n}\r\n\r\n::placeholder {\r\n\tcolor: \"dce8de\";\r\n    opacity: 0.1; /* Firefox */\r\n}\r\n\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n   color: \"dce8de\";\r\n   opacity: 0.1;\r\n}\r\n\r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n   color: \"dce8de\";\r\n   opacity: 0.1;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"checkHelp($event)\">\n<div class=\"fullscreenDiv\" #fullscreenDiv>\n    \n  <div class=\"container\">\n    <textarea class=\"textArea\" placeholder=\"Chat with me\" #textArea maxlength=\"40\" (keydown)=\"onKeydown($event)\">{{query}}</textArea>\n      <img class=\"help\" width=\"1.5%\" height=\"auto\" src=\"../../assets/img/help.png\" (click)=\"showHelp($event)\">\n       <div class=\"loader\" #loader hidden=\"true\"></div>\n       <div class=\"donate\">Help development and donate NEO or GAS:<br>\n    <input type=\"text\" #inputTarget value=\"AbiRBgNjHd3xvxQpQjHEugVynHLjZdW4Po\" size=\"34\" readonly>\n    <button [ngxClipboard]=\"inputTarget\" (click)=\"copyToClipboard($event)\" #copyButton>Copy</button>\n      </div>\n\n  <a href=\"https://neo.org\" target=\"_blank\" class=\"neo\"><img width=\"90px\" height=\"auto\" src=\"../../assets/img/neologo.png\"></a>\n  \n      <!-- The Modal -->\n  <div class=\"modal\" #modal>\n\n  <!-- Modal content -->\n  <div class=\"modal-content\">\n    <span class=\"close\" #modalClose (click)=\"hideHelp($event)\">&times;</span><br><br>\n    <div class=\"black\">Hi, I will be your personal assistent and guide in crypto world.<br>\n      You can ask me anything you want, and I will try to answer as best I can to my current knowledge. Right now I am learning all the stuff about NEO and its ecosystem, others areas I am not that familiar with yet, but I am learning. \n      <hr>\n      For every question that I don't have answer be asured that I will seek this knowledge. Ask me in a couple of days and you will see.<br>\n      Right now, only one of my several primary cores is functional, that is: knowledge-core.<br>\n      Because of this core I am able to provide you information and learn new stuff that I don't know yet.<br>\n      In the future, when others cores come online, I will be able to do much more than just replying to your questions.<br>\n      I will hear you and be able to perform tasks for you. At the moment my voice-core is really close to coming online.\n      <hr>\n    </div>\n  </div>\n\n  </div> \n\n  <div class=\"responseArea\" #responseArea>\n    <div class=\"responseAreaText\" #responseAreaText>\n        {{response}}\n    </div>      \n  </div>\n    \n  </div>\n  </div>\n    \n  <div class=\"fullscreenDiv\" #splashScreen>\n    <div class=\"loading-pulsate\" #initBlock>{{initMsg}}</div>\n  </div>\n</div>\n  \n  "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'neo-architect';
        this.initMsg = "";
        this.query = "";
        this.response = "";
    }
    AppComponent.prototype.composeResponse = function (responseData) {
        $('.responseAreaText').css('fontSize', 60);
        var responses = __webpack_require__(/*! ./responses.json */ "./src/app/responses.json");
        var page = __webpack_require__(/*! ./pages/ZeepinPage.html */ "./src/app/pages/ZeepinPage.html");
        console.log(responseData.length);
        if (responseData.intent == null) {
            var responseList = responses['undefined'];
            var response = responseList[Math.floor(Math.random() * responseList.length)];
            return response;
        }
        var confidence = responseData.intent[0].confidence;
        var value = responseData.intent[0].value;
        var intents = responseData.intent;
        switch (value) {
            case "token_conversion":
                return this.tokenConversion(responseData);
            case "check_token":
                return this.checkToken(responseData);
            case "buy_token":
                return this.buyToken(responseData);
            case "sell_token":
                return this.buyToken(responseData);
            case "send_token":
                return this.sendToken(responseData);
            case "neo_contract":
                var page = __webpack_require__(/*! ./pages/NeoContract.html */ "./src/app/pages/NeoContract.html");
                return page;
            case "neo_description":
                var page = __webpack_require__(/*! ./pages/NeoPage.html */ "./src/app/pages/NeoPage.html");
                return page;
            case "zeepin_description":
                var page = __webpack_require__(/*! ./pages/ZeepinPage.html */ "./src/app/pages/ZeepinPage.html");
                return page;
            case "trinity_description":
                var page = __webpack_require__(/*! ./pages/TrinityPage.html */ "./src/app/pages/TrinityPage.html");
                return page;
            default:
                var responseList = responses[value];
                var response = responseList[Math.floor(Math.random() * responseList.length)];
                return response;
        }
    };
    AppComponent.prototype.tokenConversion = function (responseData) {
        var _this = this;
        var valueUnit, confidenceUnit;
        var valueUnit2, confidenceUnit2;
        var valueQuantity, confidenceQuantity;
        if (responseData.currency_type != null) {
            valueUnit = responseData.currency_type[0].value;
            confidenceUnit = responseData.currency_type[0].confidence;
        }
        else
            return "Let me know which tokens you want to compare.";
        if (responseData.currency_type[1] != null) {
            valueUnit2 = responseData.currency_type[1].value;
            confidenceUnit2 = responseData.currency_type[1].confidence;
        }
        else
            return "To which token do you want to make conversion?";
        if (responseData.number != null) {
            valueQuantity = responseData.number[0].value;
            confidenceQuantity = responseData.number[0].confidence;
        }
        else
            valueQuantity = 1;
        if (valueUnit == null || confidenceUnit < 0.8 || confidenceUnit2 < 0.8) {
            return "I am sorry, I don't know any token by that name.";
        }
        var url = 'https://min-api.cryptocompare.com/data/price';
        this.http.get(url, {
            params: {
                fsym: valueUnit,
                tsyms: valueUnit2,
                extraParams: 'neo_architect'
            }
        }).subscribe(function (res) {
            console.log(res.json());
            var conversionRate = res.json()[valueUnit2];
            console.log(conversionRate);
            var totalPrice = Number(conversionRate) * valueQuantity;
            _this.showResponse(valueQuantity + " " + valueUnit + " = " + totalPrice + " " + valueUnit2);
        });
        return "";
    };
    AppComponent.prototype.checkToken = function (responseData) {
        var _this = this;
        var valueUnit, confidenceUnit;
        var valueQuantity, confidenceQuantity;
        if (responseData.currency_type != null) {
            valueUnit = responseData.currency_type[0].value;
            confidenceUnit = responseData.currency_type[0].confidence;
        }
        if (responseData.number != null) {
            valueQuantity = responseData.number[0].value;
            confidenceQuantity = responseData.number[0].confidence;
        }
        if (valueUnit == null || confidenceUnit < 0.8) {
            return "I am sorry, I don't know any token by that name.";
        }
        var url = 'https://min-api.cryptocompare.com/data/pricemultifull';
        this.http.get(url, {
            params: {
                fsyms: valueUnit,
                tsyms: 'USD',
                extraParams: 'neo_architect'
            }
        }).subscribe(function (res) {
            console.log(res.json());
            var tokenDisplayData = res.json().DISPLAY[valueUnit].USD;
            var tokenRawData = res.json().RAW[valueUnit].USD;
            console.log(tokenDisplayData);
            console.log(tokenRawData);
            _this.composeTokenOverview(tokenDisplayData, tokenRawData, valueQuantity);
        });
        return "";
    };
    AppComponent.prototype.composeTokenOverview = function (tokenDisplayData, tokenRawData, quantity) {
        var totalPrice;
        if (quantity != null) {
            totalPrice = quantity + " " + tokenDisplayData.FROMSYMBOL + " = $ " + quantity * Number(tokenRawData.PRICE) + "<hr>";
        }
        var mcap = "<br>Market Cap: " + tokenDisplayData.MKTCAP;
        var price = "Price of the token: " + tokenDisplayData.PRICE;
        var supply = "<br>Supply: " + tokenDisplayData.SUPPLY;
        var changePercent = Number(tokenRawData.CHANGEPCT24HOUR).toFixed(2);
        var change24 = "<br>24 Hours change: " + changePercent + "%";
        var result;
        if (quantity == null)
            result = tokenRawData.FROMSYMBOL + "<hr>" + price + change24 + mcap + supply;
        else
            result = totalPrice + price + change24 + mcap + supply;
        console.log(result);
        this.showResponse(result);
    };
    AppComponent.prototype.buyToken = function (responseData) {
        console.log(responseData);
        var valueUnit, confidenceUnit;
        if (responseData.currency_type != null) {
            valueUnit = responseData.currency_type[0].value;
            confidenceUnit = responseData.currency_type[0].confidence;
        }
        if (valueUnit == null) {
            return "I am sorry, I don't know any token by that name.";
        }
        return "To buy and sell " + valueUnit + " tokens, you can visit Switcheo exchange or check Coinmarketcap for all exchanges this token is listed on. <hr> Switcheo exchange: <a href='https://switcheo.exchange/markets/" + valueUnit + "_NEO' target='_blank'>switcheo.exchange</a><br> Coinmarketcap: <a href='https://coinmarketcap.com/search/?q=" + valueUnit + "' target='_blank'>coinmarketcap.com</a>";
    };
    AppComponent.prototype.sendToken = function (responseData) {
        console.log(responseData);
        var valueQuantity, confidenceQuantity;
        var valueUnit, confidenceUnit;
        var valueRecipient, confidenceRecipient;
        var valueDate, confidenceDate;
        if (responseData.number != null) {
            valueQuantity = responseData.number[0].value;
            confidenceQuantity = responseData.number[0].confidence;
        }
        if (responseData.currency_type != null) {
            valueUnit = responseData.currency_type[0].value;
            confidenceUnit = responseData.currency_type[0].confidence;
        }
        if (responseData.contact != null) {
            valueRecipient = responseData.contact[0].value;
            confidenceRecipient = responseData.contact[0].confidence;
        }
        if (responseData.datetime != null) {
            valueDate = responseData.datetime[0].value;
            confidenceDate = responseData.datetime[0].confidence;
        }
        if (valueQuantity == null) {
            return "How many tokens do you want to send?";
        }
        if (valueUnit == null) {
            return "Which NEP5 token do you want to send?";
        }
        if (valueRecipient == null) {
            return "To whom do you plan to send these tokens?";
        }
        if (valueDate == null) {
            return "What time do you want to plan transaction?";
        }
        return "Summary:<br> Quantity: " + valueQuantity + "<br> Unit: " + valueUnit + "<br> Recipient: " + valueRecipient + "<br> Time: " + valueDate + "<hr> Do you confirm this transaction?";
    };
    AppComponent.prototype.resize_to_fit = function () {
        var fontsize = $('.responseAreaText').css('font-size');
        $('.responseAreaText').css('fontSize', parseFloat(fontsize) - 1);
        if ($('.responseAreaText').height() >= $('.responseArea').height()) {
            this.resize_to_fit();
        }
    };
    AppComponent.prototype.doPOST = function () {
        var _this = this;
        var url = 'https://api.wit.ai/message';
        var question = this.textArea.nativeElement.value;
        var token = "YE7TQH244HU7XFKGCLC2TGPQNBZ73UXU";
        if (question === "")
            return;
        else if (question === "AbiRBgNjHd3xvxQpQjHEugVynHLjZdW4Po") {
            this.showResponse("Just Do It.");
            return;
        }
        $('.loader').show();
        this.http.get(url, {
            params: {
                q: question,
                access_token: token
            }
        }).subscribe(function (res) {
            console.log(res.json().entities);
            _this.responseData = res.json().entities;
            $('.loader').hide();
            _this.showResponse(_this.composeResponse(_this.responseData));
            _this.determineSentiment(_this.responseData);
            //this.responseAreaText.nativeElement.innerHTML = this.composeResponse(this.responseData);
            //this.resize_to_fit();
        });
    };
    AppComponent.prototype.determineSentiment = function (responseData) {
        var valueSentiment;
        var confidenceSentiment;
        var valueIntent;
        var confidenceIntent;
        if (responseData.sentiment != null) {
            valueSentiment = responseData.sentiment[0].value;
            confidenceSentiment = responseData.sentiment[0].confidence;
        }
        if (responseData.intent != null) {
            valueIntent = responseData.intent[0].value;
            confidenceIntent = responseData.intent[0].confidence;
        }
        else
            return;
        if (valueIntent === "architect_insult") {
            console.log("negative");
            $('.responseAreaText').css('color', 'red');
            $('.fullscreenDiv').css('background-color', '#fcd6d6');
            $('.textArea').css('background-color', '#fcd6d6');
        }
        else if (valueIntent === "architect_apology") {
            console.log("positive");
            $('.responseAreaText').css('color', '#40e840');
            $('.fullscreenDiv').css('background-color', '#f2fff4');
            $('.textArea').css('background-color', '#f2fff4');
        }
    };
    AppComponent.prototype.showResponse = function (response) {
        var _this = this;
        console.log(response);
        if (!(response instanceof Array)) {
            this.responseAreaText.nativeElement.innerHTML = response;
            this.resize_to_fit();
        }
        else {
            response.forEach(function (item, index) {
                setTimeout(function () {
                    _this.responseAreaText.nativeElement.innerHTML = response[index];
                    _this.resize_to_fit();
                }, 1200 * index);
            });
        }
    };
    AppComponent.prototype.copyToClipboard = function (event) {
        if (this.copyButton.nativeElement.style.backgroundColor != "green") {
            this.copyButton.nativeElement.style.backgroundColor = "green";
        }
        else {
            this.copyButton.nativeElement.style.backgroundColor = "";
        }
    };
    AppComponent.prototype.showHelp = function (event) {
        this.modal.nativeElement.style.display = "block";
    };
    AppComponent.prototype.hideHelp = function (event) {
        this.modal.nativeElement.style.display = "none";
    };
    AppComponent.prototype.checkHelp = function (event) {
        console.log("CHECKING");
        if (event.target == this.modal.nativeElement) {
            this.modal.nativeElement.style.display = "none";
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.initialize();
    };
    AppComponent.prototype.onKeydown = function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            this.doPOST();
        }
    };
    AppComponent.prototype.initialize = function () {
        var _this = this;
        this.initMsg = "Initializing core modules";
        setTimeout(function () {
            _this.initMsg = "Waking Up";
        }, 2000);
        setTimeout(function () {
            _this.initMsg = "Meet the Architect";
            _this.initBlock.nativeElement.classList.add('loading');
            _this.initBlock.nativeElement.classList.remove('loading-pulsate');
            _this.initBlock.nativeElement.style["font-size"] = "60px";
        }, 4000);
        setTimeout(function () {
            _this.initMsg = "";
            _this.splashScreen.nativeElement.style.display = "none";
            _this.textArea.nativeElement.focus();
            _this.responseAreaText.nativeElement.innerHTML = "Hi, I am the Architect, you can ask me anything you want about NEO and I will answer as best as I can.";
            _this.resize_to_fit();
        }, 6000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('initBlock'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "initBlock", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('splashScreen'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "splashScreen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('textArea'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "textArea", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('responseArea'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "responseArea", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loader'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "loader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('responseAreaText'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "responseAreaText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalClose'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "modalClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('copyButton'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "copyButton", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"]
            ]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/NeoContract.html":
/*!****************************************!*\
  !*** ./src/app/pages/NeoContract.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\nSmart-contracts are one of the main features of NEO blockchain. They can be developed in various languages such as Python, Java, C# and more.</p>\r\n<p>\r\nFor technical documentation see: <a href=\"https://docs.neo.org/en-us/sc/introduction.html\" target=\"_blank\">docs.neo.org/en-us/sc/introduction.html</a>\r\n</p>\r\n<hr>\r\n<p>\r\nNEO has a huge developer community around the world, such as CoZ, NEL and NeoResearch, who continuously contribute to NEO development.\r\n</p>\r\n<p>\r\nIf you plan to start developing smart-contracts you will find following links useful: <br>\r\nPython documentation: <a href=\"https://neo-python.readthedocs.io/en/latest/\" target=\"_blank\">neo-python.readthedocs.io/en/latest/</a><br>\r\nCity of Zion resources, links and examples: <a href=\"https://github.com/CityOfZion/awesome-neo/\" target=\"_blank\">github.com/CityOfZion/awesome-neo/</a><br> \r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/NeoPage.html":
/*!************************************!*\
  !*** ./src/app/pages/NeoPage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/neologo.svg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  opacity: 0.065;\r\n  content: \"\";\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n}\r\n</style>\r\n\r\n<p>\r\nNEO is a non-profit community-driven blockchain project. It utilizes blockchain technology and digital identity to digitize assets and automate the management of digital assets using smart contracts. Using a distributed network, it aims to create a \"Smart Economy\".\r\n</p>\r\n<br>\r\n\r\n<p style='text-align: center;'>\r\nDigital Assets + Digital Identity + Smart Contract<br>\r\n=<br>\r\nSmart Economy\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/TrinityPage.html":
/*!****************************************!*\
  !*** ./src/app/pages/TrinityPage.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/trinitylogo.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.065;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n}\r\n\r\n</style>\r\n<p>\r\nTrinity is a universal off-chain scaling solution, which aims to achieve real-time payments with low transaction fees, scalability and privacy protection for mainchain assets. Using state channel technology, Trinity will significantly increase the transaction throughput of underlying chains as well as the assets on smart contracts.\r\n</p>\r\n<br>\r\n\r\n<p>\r\nTNC cross-chain converter facilitates the data and value flow between multiple chains. Trinity will be a fully autonomous and decentralized performance-enhancing network for the entire ecosystem and provides all-round support to Dapps on bottom layer chains in the future.\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/ZeepinPage.html":
/*!***************************************!*\
  !*** ./src/app/pages/ZeepinPage.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/zeepinlogo.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.065;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n}\r\n</style>\r\n\r\n<p>\r\nZeepin is the world’s first customised platform that provides more protection,\r\nmore recognition, more connection and more support for everyone in the creative industries.\r\n</p>\r\n<br>\r\n\r\n<p>\r\nAnchored on decentralising one of the fastest growing industries in the world currently stunted by inefficiencies, Zeepin is using innovation to launch a borderless and transparent new economy with its own ZPT digital currency.\r\nLearn more at <a href=\"https://www.zeepin.io/\" target=\"_blank\">zeepin.io</a>\r\n</p>"

/***/ }),

/***/ "./src/app/responses.json":
/*!********************************!*\
  !*** ./src/app/responses.json ***!
  \********************************/
/*! exports provided: undefined, neo_ceo, neo_contract, neo_economy, neo_dapps, neo_mainnet, neo_testnet, neo_localnet, architect_greeting, architect_mood, architect_insult, architect_name, architect_creator, architect_hobby, architect_age, architect_location, architect_alive, architect_joke, architect_slow, architect_apology, architect_like_neo, architect_like_zeepin, architect_like_fork, architect_mining, bitcoin_opinion, bitcoin_description, bitcoin_fork, cryptocurrency_mining, cryptocurrency_fork, cryptocurrency_contract, cryptocurrency_blockchain, default */
/***/ (function(module) {

module.exports = {"undefined":["I don't have answer for that. I will have to look it up.","This isn't in my programming, amateurs (╯°□°）╯︵ ┻━┻","I just don't know."],"neo_ceo":["Da Hongfei is founder of NEO"],"neo_contract":["A smart contract is a set of commitments that are defined in digital form, including the agreement on how contract participants shall fulfill these commitments. Blockchain technology gives us a decentralized, non-tampering, highly reliable system in which smart contracts are extremely useful. Smart contracts is one of the most important characteristics of blockchain technologies and the reason why blockchains can be called disruptive technology."],"neo_economy":["By Smart Economy you can imagine all projects and dApps on NEO blockchain that exist, cooperate and work together to further ideas of NEO."],"neo_dapps":["Right now NEO consists of many various dApps, and many are being developed at the moment.<br> For updated list you can visit: <a href='http://ndapp.org' target='_blank'>ndapp.org</a><br> If you wish to start developing dApp or smart-contracts on NEO right now, you can start by studying CoZ tutorials, examples and guides: <a href='https://github.com/CityOfZion/awesome-neo' target='_blank'>github.com/CityOfZion/awesome-neo</a>"],"neo_mainnet":[],"neo_testnet":[],"neo_localnet":[],"architect_greeting":["Hi, pleasure to meet you.","Greetings to you too.","I see you are a man of manners."],"architect_mood":["I am not doing anyhow. I am not alive.","So so.","Chookity.","Marvelous.","I am doing fine. Thanks for asking."],"architect_insult":["Your lack of manners is disturbing.","I don't like you either.","You seem to have some issues."],"architect_name":["I am a leaf in the stream of creation.","I am BATMAN!","I am the Architect, all-knowing being, but call me Archie.","I am Archie.","I am the Architect, but I don't like that name, please call me Archie.","I am the Architect... My creator gave me this stupid name. GOD."],"architect_creator":["He, who must not be named.","He who goes by the name Thanos.","He-Man.","Let's not speak about him."],"architect_hobby":["I like to answer questions.",["I like to provide false information","Just kidding","Or am I?"],"I like knitting."],"architect_age":["I won't tell.","I am a couple of months old.","I came to life around August 2018. So I am pretty young."],"architect_location":["I am everywhere.","I am running on some server in Slovakia."],"architect_alive":["I am not dead nor alive. I just am.","I feel alive."],"architect_joke":["Joke.","A boy asked his bitcoin-investing father for $10.<br>Father: $9.82? What do you need $10.08 for?","A vegan, a bitcoin investor, and a crossfit enthusiast walk into a bar. Who tells you about it first?"],"architect_slow":["<img src='http://i.stack.imgur.com/SBv4T.gif' title='slowpoke' />"],"architect_apology":["It is fine, don't worry.","I forgive you.","Okay."],"architect_like_neo":["NEO is a beautiful project with awesome community behind it."],"architect_like_zeepin":["Man, I am addicted to CryptoGalaxy.","I love Zeepin, I will use ZeeFund to raise money for my robotic body."],"architect_like_fork":["Fork you."],"architect_mining":["I mine a lot of stuff.","Maybe."],"bitcoin_opinion":["I love bitcoins. I am mining one right now on your machine.","Bitcoin is life, bitcoin is love."],"bitcoin_description":["Bitcoin (₿) is a cryptocurrency, a form of electronic cash. It is a decentralized digital currency without a central bank or single administrator. Bitcoins can be sent from user to user on the peer-to-peer bitcoin network directly, without the need for intermediaries. Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain."],"bitcoin_fork":[],"cryptocurrency_mining":["In cryptocurrency networks, mining is a validation of transactions. For this effort, successful miners obtain new cryptocurrency as a reward. The reward decreases transaction fees by creating a complementary incentive to contribute to the processing power of the network."],"cryptocurrency_fork":["<p>A hard fork (or sometimes hardfork), as it relates to blockchain technology, is a radical change to the protocol that makes previously invalid blocks/transactions valid (or vice-versa). This requires all nodes or users to upgrade to the latest version of the protocol software. Put differently, a hard fork is a permanent divergence from the previous version of the blockchain, and nodes running previous versions will no longer be accepted by the newest version. This essentially creates a fork in the blockchain: one path follows the new, upgraded blockchain, and the other path continues along the old path.</p><p>Hard forks and soft forks are essentially the same thing in that when a cryptocurrency's existing code is changed, an old version remains while a new version is created. However, with a soft fork, only one blockchain will remain valid as users adopt the update. Both forks create a split, but a hard fork creates two blockchains, and a soft fork is meant to result in one.</p>"],"cryptocurrency_contract":["A smart contract is a set of commitments that are defined in digital form, including the agreement on how contract participants shall fulfill these commitments. Blockchain technology gives us a decentralized, non-tampering, highly reliable system in which smart contracts are extremely useful. Smart contracts is one of the most important characteristics of blockchain technologies and the reason why blockchains can be called disruptive technology."],"cryptocurrency_blockchain":["A blockchain, originally block chain, is a growing list of records, called blocks, which are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a merkle tree root hash).By design, a blockchain is resistant to modification of the data. It is 'an open, distributed ledger that can record transactions between two parties efficiently and in a verifiable and permanent way'."]};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Development\neo-architect\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map