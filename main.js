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

/***/ "./src/app sync recursive ^.*$":
/*!***************************!*\
  !*** ./src/app sync ^.*$ ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.component": "./src/app/app.component.ts",
	"./app.component.css": "./src/app/app.component.css",
	"./app.component.html": "./src/app/app.component.html",
	"./app.component.spec": "./src/app/app.component.spec.ts",
	"./app.component.spec.ts": "./src/app/app.component.spec.ts",
	"./app.component.ts": "./src/app/app.component.ts",
	"./app.module": "./src/app/app.module.ts",
	"./app.module.ts": "./src/app/app.module.ts",
	"./pages/ACATpage.html": "./src/app/pages/ACATpage.html",
	"./pages/APHpage.html": "./src/app/pages/APHpage.html",
	"./pages/AVApage.html": "./src/app/pages/AVApage.html",
	"./pages/BTCpage.html": "./src/app/pages/BTCpage.html",
	"./pages/COUPpage.html": "./src/app/pages/COUPpage.html",
	"./pages/CPXpage.html": "./src/app/pages/CPXpage.html",
	"./pages/DBCpage.html": "./src/app/pages/DBCpage.html",
	"./pages/EFXpage.html": "./src/app/pages/EFXpage.html",
	"./pages/ETHpage.html": "./src/app/pages/ETHpage.html",
	"./pages/GALApage.html": "./src/app/pages/GALApage.html",
	"./pages/GASpage.html": "./src/app/pages/GASpage.html",
	"./pages/GUARDpage.html": "./src/app/pages/GUARDpage.html",
	"./pages/LRNpage.html": "./src/app/pages/LRNpage.html",
	"./pages/LXpage.html": "./src/app/pages/LXpage.html",
	"./pages/MCTpage.html": "./src/app/pages/MCTpage.html",
	"./pages/NEOpage.html": "./src/app/pages/NEOpage.html",
	"./pages/NEXpage.html": "./src/app/pages/NEXpage.html",
	"./pages/NKNpage.html": "./src/app/pages/NKNpage.html",
	"./pages/NOSpage.html": "./src/app/pages/NOSpage.html",
	"./pages/NRVEpage.html": "./src/app/pages/NRVEpage.html",
	"./pages/NeoContract.html": "./src/app/pages/NeoContract.html",
	"./pages/NeoEth.html": "./src/app/pages/NeoEth.html",
	"./pages/OBTpage.html": "./src/app/pages/OBTpage.html",
	"./pages/ONTpage.html": "./src/app/pages/ONTpage.html",
	"./pages/PHXpage.html": "./src/app/pages/PHXpage.html",
	"./pages/PKCpage.html": "./src/app/pages/PKCpage.html",
	"./pages/QLCpage.html": "./src/app/pages/QLCpage.html",
	"./pages/RHTpage.html": "./src/app/pages/RHTpage.html",
	"./pages/SDSpage.html": "./src/app/pages/SDSpage.html",
	"./pages/SOULpage.html": "./src/app/pages/SOULpage.html",
	"./pages/SWTHpage.html": "./src/app/pages/SWTHpage.html",
	"./pages/TKYpage.html": "./src/app/pages/TKYpage.html",
	"./pages/TNCpage.html": "./src/app/pages/TNCpage.html",
	"./pages/TOLLpage.html": "./src/app/pages/TOLLpage.html",
	"./pages/VDTpage.html": "./src/app/pages/VDTpage.html",
	"./pages/VTOpage.html": "./src/app/pages/VTOpage.html",
	"./pages/ZPTpage.html": "./src/app/pages/ZPTpage.html",
	"./responses.json": "./src/app/responses.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/app sync recursive ^.*$";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".angryBackground:after {\r\n\tcontent: none;\r\n}\r\n\r\n\r\n@media (max-width: 700px)\r\n{\r\n\t.neo {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\r\n\t.donate {\r\n\t\tmargin-bottom: 0 !important;\r\n\t\twidth: 100%;\r\n\t\ttext-align: center;\r\n\t\tleft: 0% !important;\r\n\t}\r\n\t.donate button {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t.donate input {\r\n\t\twidth: 90%;\r\n\t\tmargin-left: 5vw;\r\n\t\tmargin-right: 5vw;\r\n\t\tborder-top-right-radius: 5px;\r\n\t\tborder-bottom-right-radius: 5px;\r\n\t}\r\n\r\n\t.help {\r\n\t\twidth: 6vw !important;\r\n\t\theight: auto;\r\n\t}\r\n\t.loader {\r\n\t\twidth: 6vw !important;\r\n\t\theight: 6vw !important;\r\n\t}\r\n}\r\n\r\n\r\n.neo img{\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tright: 0;\r\n\tfloat: right;\r\n\tmargin-bottom: 15px;\r\n\tmargin-right: 15px;\r\n\r\n\topacity: 0.3;\r\n\t-webkit-filter: grayscale(1);\r\n\t        filter: grayscale(1);\r\n  transition: all 0.5s ease-out;\r\n}\r\n\r\n\r\n.neo img:hover {\r\n  opacity: 0.9;\r\n  -webkit-filter: grayscale(0);\r\n          filter: grayscale(0);\r\n  transition: all 0.5s ease-out;\r\n}\r\n\r\n\r\n.bitcoach {\r\n\tposition: fixed;\r\n\ttop: 95%;\r\n\tleft: 88%;\r\n\t\r\n\tfont-family: 'Roboto Condensed';\r\n\r\n\topacity: 0.25;\r\n    filter: alpha(opacity=25); /* For IE8 and earlier */\t\r\n}\r\n\r\n\r\n.bitcoach.img {\r\n\tmargin: 10px;\r\n}\r\n\r\n\r\n.bitcoach:hover {\r\n\topacity: 0.75;\r\n    filter: alpha(opacity=75); /* For IE8 and earlier */\r\n}\r\n\r\n\r\n.responseArea {\r\n\tposition: fixed;\r\n\ttop: 25%;\r\n\theight: 55%;\r\n\twidth: 80%;\r\n\tleft: 10%;\r\n\tz-index: 1;\r\n}\r\n\r\n\r\n.responseAreaText {\r\n\tposition: absolute;\r\n  \ttop: 50%;\r\n  \tleft: 50%;;\r\n  \twidth: 100%;\r\n  \tz-index: 1;\r\n  \t-webkit-transform: translate(-50%, -50%);\r\n  \t        transform: translate(-50%, -50%);\r\n\r\n\r\n\tfont-family: 'Roboto Condensed'; \r\n\tfont-size: 60px;\r\n\tletter-spacing: -1px;\r\n\r\n\tcolor: rgba(46, 204, 113,1.0);\r\n\tline-height: 150%;\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n.logo {\r\n\topacity: 0.25;\r\n    filter: alpha(opacity=25); /* For IE8 and earlier */\r\n}\r\n\r\n\r\n.container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n}\r\n\r\n\r\n.loading-pulsate {\r\n\t/*position data */\r\n\tposition: fixed;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\t/* bring your own prefixes */\r\n\t-webkit-transform: translate(-50%, -50%);\r\n\t        transform: translate(-50%, -50%);\r\n\r\n\t/*font data */\r\n\tfont-family: 'Roboto Condensed'; \r\n\tfont-weight: bold;\r\n\tfont-size: 30px; \r\n\tfont-style: normal; \r\n\tfont-variant: normal; \r\n\tfont-weight: 700; \r\n\tcolor: rgba(46, 204, 113,1.0);\r\n\tcursor: default;\r\n\ttext-align: center;\r\n\r\n\t-webkit-user-select: none;  /* Chrome all / Safari all */\r\n\t-moz-user-select: none;     /* Firefox all */\r\n\t-ms-user-select: none;      /* IE 10+ */\r\n\tuser-select: none;          /* Likely future */      \r\n\t\r\n\t/*pulsating text */\r\n\t-webkit-animation: pulsate 3s ease-out;\r\n    -webkit-animation-iteration-count: infinite; \r\n    opacity: 0.2;\r\n}\r\n\r\n\r\n.loading {\r\n\t/*position data */\r\n\tposition: fixed;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\t/* bring your own prefixes */\r\n\t-webkit-transform: translate(-50%, -50%);\r\n\t        transform: translate(-50%, -50%);\r\n\r\n\t/*font data */\r\n\tfont-family: 'Roboto Condensed'; \r\n\tfont-weight: bold;\r\n\tfont-size: 30px; \r\n\tfont-style: normal; \r\n\tfont-variant: normal; \r\n\tfont-weight: 700; \r\n\tcolor: rgba(46, 204, 113,1.0);\r\n\tcursor: default;\r\n\ttext-align: center;\r\n\t\r\n\t-webkit-user-select: none;  /* Chrome all / Safari all */\r\n\t-moz-user-select: none;     /* Firefox all */\r\n\t-ms-user-select: none;      /* IE 10+ */\r\n\tuser-select: none;          /* Likely future */      \r\n}\r\n\r\n\r\n.fullscreenDiv {\r\n    background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);\r\n    width: 100%;\r\n    height: auto;\r\n    bottom: 0px;\r\n    top: 0px;\r\n    left: 0;\r\n    position: fixed;\r\n}\r\n\r\n\r\n@-webkit-keyframes pulsate {\r\n    0% { \r\n        opacity: 0.05;\r\n    }\r\n    50% { \r\n        opacity: 1.0;\r\n    }\r\n    100% { \r\n        opacity: 0.05;\r\n    }\r\n}\r\n\r\n\r\n.textArea {\r\n\tposition: absolute;\r\n\tleft: -6px;\r\n\tfont-family: 'Roboto Condensed'; \r\n\tfont-size: 30px;\r\n\tcaret-color: rgba(46, 204, 113,1.0);\r\n\tmargin-top: 30px;\r\n\tmargin-right: 50px;\r\n\twidth: 100%;\r\n\theight: 400;\r\n\tfont-size: 50px;\r\n\ttext-align: center;\r\n\tbackground-color: transparent;\r\n\tborder: 0;\r\n\tborder-style: none; \r\n    border-color: Transparent; \r\n    resize: none; \r\n    overflow: hidden;\r\n\r\n}\r\n\r\n\r\n@media (max-width: 700px)\r\n{\r\n\t.textArea {\r\n\t\tleft: 0%;\r\n\t\tfont-size: 8vw;\r\n\t\tmargin-top: 8vh;\r\n\t}\r\n}\r\n\r\n\r\n.textArea:focus {\r\n\t\r\n\toutline: none;\r\n\tbox-shadow:none !important;\r\n\tborder: 0;\r\n\tborder-style: none; \r\n\tborder-color: Transparent; \r\n\toverflow: auto;\r\n}\r\n\r\n\r\n.form-control:focus {\r\n\toutline: none;\r\n\tbox-shadow:none !important;\r\n\tborder: 0;\r\n\tborder-style: none; \r\n\tborder-color: Transparent; \r\n\toverflow: auto;\r\n}\r\n\r\n\r\n.modal {\r\n\toverflow: auto;\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 999; /* Sit on top */\r\n    padding-top: 5vh; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n\r\n.donate {\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tmargin-bottom: 15px;\r\n\r\n\tcolor: rgba(46, 204, 113,1.0);\r\n\topacity: 0.3;\r\n\tfont-family: 'Roboto Condensed';\r\n\tfont-weight: bold;\r\n}\r\n\r\n\r\n.donate button {\r\n\tborder: 0;\r\n\tborder-top-right-radius: 5px;\r\n\tborder-bottom-right-radius: 5px;\r\n\tcolor: black;\r\n}\r\n\r\n\r\n.donate button:hover {\r\n\t -webkit-filter: brightness(90%);\r\n\t         filter: brightness(90%);\r\n}\r\n\r\n\r\n.donate input{\r\n\tborder: 0;\r\n\tfont-family: 'Roboto Condensed';\r\n\tsize: 40;\r\n\tbackground: gray;\r\n\tcolor: white;\r\n\tborder-top-left-radius: 5px;\r\n\tborder-bottom-left-radius: 5px;\r\n\ttext-align: center;\r\n\t\r\n}\r\n\r\n\r\n/* Modal Content */\r\n\r\n\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%;\r\n    font-size: 11px;\r\n    text-align: left;\r\n}\r\n\r\n\r\n.modal-content .green {\r\n\tfont-size: 16px;\r\n\ttext-align: left;\r\n\tcolor: green;\r\n\topacity: 0.8;\r\n}\r\n\r\n\r\n.modal-content .black {\r\n\tfont-size: 16px;\r\n\ttext-align: left;\r\n\tcolor: black;\r\n\topacity: 0.8;\r\n}\r\n\r\n\r\n/* The Close Button */\r\n\r\n\r\n.close {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n    z-index: 999;\r\n}\r\n\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.help{\r\n\tposition: relative;\r\n\twidth: 30px;\r\n\theight: auto;\r\n\tmargin-top: 15px;\r\n\topacity: 0.3;\r\n\tcursor: pointer;\r\n transition: all 0.3s ease-out;\r\n}\r\n\r\n\r\n.help:hover {\r\n\topacity: 0.9;\r\n\t-webkit-transform: scale(1.1);\r\n\t        transform: scale(1.1);\r\n transition: all 0.3s ease-out;\r\n}\r\n\r\n\r\n.input:focus {\r\n    outline: none !important;\r\n    border:1px solid red;\r\n    box-shadow: 0 0 10px #719ECE;\r\n}\r\n\r\n\r\n.loader {\r\n\t\r\n\tmargin-top: 15px;\r\n\tfloat: right;\r\n\tborder: 3px solid rgba(46, 204, 113,1.0);\r\n\tborder-radius: 80%;\r\n\tborder-top: 3px solid #f2fff4;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\t-webkit-animation: spin 1s linear infinite; /* Safari */\r\n\tanimation: spin 1s linear infinite;\r\n\r\n}\r\n\r\n\r\n.send {\r\n\tfont-size: 500px;\r\n}\r\n\r\n\r\n/* Safari */\r\n\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n\r\n\r\n@keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n\r\nbody {\r\n\tbackground-image: linear-gradient(to top, #dfe9f3 0%, white 100%);\r\n\toverflow-y: hidden;\r\n\toverflow-x: hidden;\r\n}\r\n\r\n\r\n::-webkit-input-placeholder {\r\n\tcolor: \"dce8de\";\r\n    opacity: 0.3; /* Firefox */\r\n}\r\n\r\n\r\n:-ms-input-placeholder {\r\n\tcolor: \"dce8de\";\r\n    opacity: 0.3; /* Firefox */\r\n}\r\n\r\n\r\n::-ms-input-placeholder {\r\n\tcolor: \"dce8de\";\r\n    opacity: 0.3; /* Firefox */\r\n}\r\n\r\n\r\n::placeholder {\r\n\tcolor: \"dce8de\";\r\n    opacity: 0.3; /* Firefox */\r\n}\r\n\r\n\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n   color: \"dce8de\";\r\n   opacity: 0.3;\r\n}\r\n\r\n\r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n   color: \"dce8de\";\r\n   opacity: 0.3;\r\n}\r\n\r\n\r\nhtml, body {margin: 0; height: 100%; overflow: hidden; background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);}\r\n\r\n\r\n@media (orientation: landscape) and (max-height: 700px){\r\n  .neo img{\r\n\t\twidth: 20vh;\r\n\t\theight: auto;\r\n\t}\r\n\r\n\t.donate {\r\n\t\tfont-size: 3vh;\t\r\n\t}\r\n\t.donate button {\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t.donate input {\r\n\t\tborder-top-right-radius: 5px;\r\n\t\tborder-bottom-right-radius: 5px;\r\n\t}\r\n\r\n\t.textArea {\r\n\t\tleft: 0%;\r\n\t\tfont-size: 6vh;\r\n\t\tmargin-top: 6vh; \r\n\t}\r\n\r\n\t.help {\r\n\t\twidth: 6vh !important;\r\n\t\theight: auto;\r\n\t}\r\n\t.loader {\r\n\t\twidth: 6vh !important;\r\n\t\theight: 6vh !important;\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"checkHelp($event)\">\n<div class=\"fullscreenDiv\" #fullscreenDiv>\n    \n  <div class=\"container\">\n    <textarea class=\"textArea\" placeholder=\"Chat with me\" #textArea maxlength=\"50\" (click)=\"onClicked($event)\" (keydown)=\"onKeydown($event)\">{{query}}</textArea>\n      <img class=\"help\" width=\"1.5%\" height=\"auto\" src=\"../../assets/img/help.png\" (click)=\"showHelp($event)\">\n       <div class=\"loader\" #loader hidden=\"true\"></div>\n       <div class=\"donate\">Help development and donate NEO or GAS:<br>\n    <input type=\"text\" #inputTarget value=\"AbiRBgNjHd3xvxQpQjHEugVynHLjZdW4Po\" size=\"34\" readonly>\n    <button [ngxClipboard]=\"inputTarget\" (click)=\"copyToClipboard($event)\" #copyButton>Copy</button>\n      </div>\n\n  <a href=\"https://neo.org\" target=\"_blank\" class=\"neo\"><img width=\"90px\" height=\"auto\" src=\"../../assets/img/neologo.png\"></a>\n  \n      <!-- The Modal -->\n  <div class=\"modal\" #modal>\n\n  <!-- Modal content -->\n  <div class=\"modal-content\">\n    <span class=\"close\" #modalClose (click)=\"hideHelp($event)\">&times;</span><br><br>\n    <div class=\"black\">Hi, I am Archie and I will be your personal assistent and guide in crypto world.\n      You can ask me anything you want, and I will try to answer as best I can to my current knowledge.<br> \n      Here are some examples what you can ask me and what I am capable of.<hr>\n      Basic chit-chat: (only a couple of responses so far)<br>\n      <div class=\"green\">\n        Hello Archie. | How are you today? | Do you like NEO? | What are you? | You are very slow today.\n      </div>\n      <hr>\n      Knowledge about general crypto terms and NEO<br>\n      <div class=\"green\">\n        What is NEO? | What is Blockchain? | I want to develop smart-contract. | Can you tell me about NEO consensus mechanism? | Show me projects on NEO.\n      </div>\n      <hr>\n      Knowledge about NEO projects and dApps<br>\n      <div class=\"green\">\n        What is Zeepin? | I am looking for neo booking travel app. | Are there projects specializing on A.I.? | Are there exchanges built on NEO? | NEO games.\n      </div>\n      <hr>\n      Price data, market caps, token conversions (data provided by CryptoCompare - keep in mind that not every token is supported)<br>\n      <div class=\"green\">\n        What is price of NEO? | What is market cap of Qlink? | Convert 5000 Apex tokens to NEO. | Where do I buy Phantasma tokens? | What is 1350 of GAS worth.\n      </div>\n      <hr>\n      Sending of tokens (just for showcase purposes - plan is to integrate with nOS and communicate with client and nOS dapps through smart-contracts.<br>\n      <div class=\"green\">\n        I want to send tokens. | Send 900 NEX tokens to Mr. Dirk next week. | Send 1000 nOS tokens.\n      </div>\n      <hr>\n\n\n    Plans for future:<br>\n    - Integration with nOS and Smart-contracts.<br>\n    - Voice recognition.<br><br>\n\n    In the future I will be able to recognise voice commands. Just pick up phone, tell me to send 100 NEO tokens to your friend and I will do all the work for you.\n    <hr>\n    If you want to reach my creator, report bugs or suggest improvements, drop him message on Twitter (https://twitter.com/Skyro23) or send him mail to archie.neonet@gmail.com\n    </div>\n  </div>\n\n  </div> \n<div class=\"responseAreaWrapper\">\n  <div class=\"responseArea\" #responseArea>\n    <div class=\"responseAreaText\" #responseAreaText>\n        {{response}}\n    </div>      \n  </div>\n</div>\n  </div>\n  </div>\n    \n  <div class=\"fullscreenDiv\" #splashScreen>\n    <div class=\"loading-pulsate\" #initBlock>{{initMsg}}</div>\n  </div>\n</div>\n  \n  "

/***/ }),

/***/ "./src/app/app.component.spec.ts":
/*!***************************************!*\
  !*** ./src/app/app.component.spec.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: C:\\Development\\neo-architect\\src\\app\\app.component.spec.ts is missing from the TypeScript compilation. Please make sure it is in your tsconfig via the 'files' or 'include' property.\n    at AngularCompilerPlugin.getCompiledFile (C:\\Development\\neo-architect\\node_modules\\@ngtools\\webpack\\src\\angular_compiler_plugin.js:749:23)\n    at plugin.done.then (C:\\Development\\neo-architect\\node_modules\\@ngtools\\webpack\\src\\loader.js:41:31)\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:188:7)");

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
        this.lastQuery = "";
        this.stageFinal = false;
    }
    AppComponent.prototype.clearData = function () {
        this.valueQuantity = null;
        this.confidenceQuantity = null;
        this.valueUnit = null;
        this.confidenceUnit = null;
        this.valueRecipient = null;
        this.confidenceRecipient = null;
        this.valueDate = null;
        this.confidenceDate = null;
        this.stageFinal = false;
        if (this.lastIntent != null)
            this.lastIntent.value = null;
        if (this.lastIntent != null)
            this.lastIntent.confidence = null;
    };
    AppComponent.prototype.composeResponse = function (responseData) {
        $('.responseAreaText').css('fontSize', 60);
        var responses = __webpack_require__(/*! ./responses.json */ "./src/app/responses.json");
        var page = __webpack_require__(/*! ./pages/NEOpage.html */ "./src/app/pages/NEOpage.html");
        var confidence, value, intents;
        if (this.stageFinal == true && this.lastIntent != null && this.lastIntent.value === "send_token") {
            if (responseData.agreement == null) {
                value = this.lastIntent.value;
                confidence = this.lastIntent.confidence;
            }
            else if (responseData.agreement[0].value === "yes") {
                this.clearData();
                this.loaderHide();
                return "Transaction successful.";
            }
            else if (responseData.agreement[0].value === "no") {
                this.clearData();
                this.loaderHide();
                return "Transaction cancelled.";
            }
        }
        else if ((responseData.intent == null || responseData.intent[0].value === "token_description" || responseData.intent[0].value === "check_token") && this.lastIntent != null && this.lastIntent.value === "send_token") {
            value = this.lastIntent.value;
            confidence = this.lastIntent.confidence;
        }
        else if (responseData.intent == null) {
            value = "token_description";
            confidence = 1;
        }
        else {
            confidence = responseData.intent[0].confidence;
            value = responseData.intent[0].value;
            intents = responseData.intent;
            this.clearData();
            this.lastIntent = responseData.intent[0];
        }
        switch (value) {
            case "token_description":
                $('.loader').hide();
                return this.tokenDescription(responseData);
            case "token_conversion":
                return this.tokenConversion(responseData);
            case "check_token":
                return this.checkToken(responseData);
            case "buy_token":
                $('.loader').hide();
                return this.buyToken(responseData);
            case "sell_token":
                $('.loader').hide();
                return this.buyToken(responseData);
            case "send_token":
                $('.loader').hide();
                return this.sendToken(responseData);
            case "neo_eth":
                this.loaderHide();
                var page = __webpack_require__(/*! ./pages/NeoEth.html */ "./src/app/pages/NeoEth.html");
                return page;
            case "neo_contract":
                $('.loader').hide();
                var page = __webpack_require__(/*! ./pages/NeoContract.html */ "./src/app/pages/NeoContract.html");
                return page;
            default:
                $('.loader').hide();
                var responseList = responses[value];
                var response = responseList[Math.floor(Math.random() * responseList.length)];
                return response;
        }
    };
    AppComponent.prototype.fetchUndefined = function () {
        var responses = __webpack_require__(/*! ./responses.json */ "./src/app/responses.json");
        var responseList = responses['undefined'];
        var response = responseList[Math.floor(Math.random() * responseList.length)];
        $('.loader').hide();
        return response;
    };
    AppComponent.prototype.tokenDescription = function (responseData) {
        var valueUnit, confidenceUnit, valueUnit2, confidenceUnit2;
        var valueQuantity, confidenceQuantity;
        if (responseData.currency_type != null) {
            valueUnit = responseData.currency_type[0].value;
            confidenceUnit = responseData.currency_type[0].confidence;
        }
        else
            return this.fetchUndefined();
        if (responseData.currency_type[1] != null) {
            valueUnit2 = responseData.currency_type[1].value;
            confidenceUnit2 = responseData.currency_type[1].confidence;
            if (valueUnit === "NEO" && confidenceUnit2 > 0.75) {
                valueUnit = valueUnit2;
                confidenceUnit = confidenceUnit2;
            }
        }
        if (responseData.number != null) {
            valueQuantity = responseData.number[0].value;
            confidenceQuantity = responseData.number[0].confidence;
        }
        if (valueQuantity == null) {
            try {
                var pagename = './pages/' + valueUnit + 'page.html';
                var page = __webpack_require__("./src/app sync recursive ^.*$")("" + pagename + "");
                return page;
            }
            catch (e) {
                return this.fetchUndefined();
            }
        }
        else {
            this.checkToken(responseData);
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
            return this.fetchUndefined();
        if (responseData.currency_type[1] != null) {
            valueUnit2 = responseData.currency_type[1].value;
            confidenceUnit2 = responseData.currency_type[1].confidence;
        }
        else
            return this.fetchUndefined();
        if (responseData.number != null) {
            valueQuantity = responseData.number[0].value;
            confidenceQuantity = responseData.number[0].confidence;
        }
        else
            valueQuantity = 1;
        if (valueUnit == null || confidenceUnit < 0.8 || confidenceUnit2 < 0.8) {
            return this.fetchUndefined();
        }
        var url = 'https://min-api.cryptocompare.com/data/price';
        this.http.get(url, {
            params: {
                fsym: valueUnit,
                tsyms: valueUnit2,
                extraParams: 'neo_architect'
            }
        }).subscribe(function (res) {
            var conversionRate = res.json()[valueUnit2];
            var totalPrice = Number(conversionRate) * valueQuantity;
            $('.loader').hide();
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
            return this.fetchUndefined();
        }
        var url = 'https://min-api.cryptocompare.com/data/pricemultifull';
        this.http.get(url, {
            params: {
                fsyms: valueUnit,
                tsyms: 'USD',
                extraParams: 'neo_architect'
            }
        }).subscribe(function (res) {
            try {
                var tokenDisplayData = res.json().DISPLAY[valueUnit].USD;
                var tokenRawData = res.json().RAW[valueUnit].USD;
                _this.loaderHide();
                _this.composeTokenOverview(tokenDisplayData, tokenRawData, valueQuantity);
            }
            catch (_a) {
                _this.loaderHide();
                return _this.showResponse("I am sorry, but I am unable to fetch info for this.");
            }
        });
        return "";
    };
    AppComponent.prototype.loaderHide = function () {
        $('.loader').hide();
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
        this.showResponse(result);
    };
    AppComponent.prototype.buyToken = function (responseData) {
        var valueUnit, confidenceUnit;
        if (responseData.currency_type != null) {
            valueUnit = responseData.currency_type[0].value;
            confidenceUnit = responseData.currency_type[0].confidence;
        }
        if (valueUnit == null || confidenceUnit < 0.8) {
            return this.fetchUndefined();
        }
        return "To buy and sell " + valueUnit + " tokens, you can visit Switcheo exchange or check Coinmarketcap for all exchanges this token is listed on. <hr> Switcheo exchange: <a href='https://switcheo.exchange/markets/" + valueUnit + "_NEO' target='_blank'>switcheo.exchange</a><br> Coinmarketcap: <a href='https://coinmarketcap.com/search/?q=" + valueUnit + "' target='_blank'>coinmarketcap.com</a>";
    };
    AppComponent.prototype.sendToken = function (responseData) {
        if (this.valueUnit == null && responseData.currency_type != null) {
            this.confidenceUnit = responseData.currency_type[0].confidence;
            if (this.confidenceUnit < 0.8)
                return "I don't know any token by that name. Please enter correct token name.";
            else
                this.valueUnit = responseData.currency_type[0].value;
        }
        if (this.valueQuantity == null && responseData.number != null) {
            this.confidenceQuantity = responseData.number[0].confidence;
            if (this.confidenceQuantity < 0.8)
                return "You entered incorrect quantity. Please enter correct one.";
            else
                this.valueQuantity = responseData.number[0].value;
        }
        if (this.valueRecipient == null && responseData.contact != null) {
            this.confidenceRecipient = responseData.contact[0].confidence;
            if (this.confidenceRecipient < 0.8)
                return "You entered incorrect recipient. Please enter correct one.";
            else
                this.valueRecipient = responseData.contact[0].value;
        }
        if (this.valueDate == null && responseData.datetime != null) {
            this.confidenceDate = responseData.datetime[0].confidence;
            if (this.confidenceDate < 0.8)
                return "You entered incorrect date. Please enter correct one.";
            else if (responseData.datetime[0].value != null)
                this.valueDate = responseData.datetime[0].value.split(".")[0];
            else
                this.valueDate = responseData.datetime[0].from.value.split(".")[0];
        }
        if (this.valueUnit == null) {
            return "Which NEP5 token do you want to send?";
        }
        if (this.valueQuantity == null) {
            return "How many tokens do you want to send?";
        }
        if (this.valueRecipient == null) {
            return "To whom do you plan to send these tokens?";
        }
        if (this.valueDate == null) {
            return "What time do you want to plan transaction?";
        }
        this.stageFinal = true;
        return "Summary:<br> Quantity: " + this.valueQuantity + "<br> Unit: " + this.valueUnit + "<br> Recipient: " + this.valueRecipient + "<br> Time: " + this.valueDate + "<hr> Do you confirm this transaction?";
    };
    AppComponent.prototype.resize_to_fit = function () {
        var fontsize = $('.responseAreaText').css('font-size');
        $('.responseAreaText').css('fontSize', parseFloat(fontsize) - 1);
        if ($('.responseAreaText').height() >= $('.responseArea').height()) {
            this.resize_to_fit();
        }
    };
    AppComponent.prototype.doPOST = function (query) {
        var _this = this;
        var url = 'https://api.wit.ai/message';
        var question = query;
        var token = "YE7TQH244HU7XFKGCLC2TGPQNBZ73UXU";
        if (question === "")
            return;
        else if (question === "AbiRBgNjHd3xvxQpQjHEugVynHLjZdW4Po") {
            $('.responseAreaText').css('fontSize', 60);
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
            _this.responseData = res.json().entities;
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
            $('.textArea').css('caret-color', 'white');
            $('.responseAreaText').css('color', 'white');
            $('.fullscreenDiv').css('background', 'rgba(231, 76, 60,1.0)');
            $('.fullscreenDiv').css('background-color', 'rgba(231, 76, 60,1.0)');
            $('.responseArea').addClass('angryBackground');
            $('.loader').css('border', '3px solid white');
            $('.loader').css('border-top', '3px solid rgba(231, 76, 60,1.0)');
            $('.donate').css('color', 'white');
        }
        else if (valueIntent === "architect_apology") {
            $('.textArea').css('caret-color', 'rgba(46, 204, 113,1.0)');
            $('.responseAreaText').css('color', 'rgba(46, 204, 113,1.0)');
            $('.fullscreenDiv').css('background-image', 'linear-gradient(to top, #dfe9f3 0%, white 100%)');
            $('.loader').css('border', '3px solid rgba(46, 204, 113,1.0)');
            $('.loader').css('border-top', '3px solid white');
            $('.donate').css('color', 'rgba(46, 204, 113,1.0)');
            $('.responseArea').removeClass('angryBackground');
        }
    };
    AppComponent.prototype.showResponse = function (response) {
        var _this = this;
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
        if (this.copyButton.nativeElement.style.backgroundColor != "rgb(46, 204, 113)") {
            this.copyButton.nativeElement.style.backgroundColor = "rgb(46, 204, 113)";
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
        if (event.target == this.modal.nativeElement) {
            this.modal.nativeElement.style.display = "none";
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.initialize();
    };
    AppComponent.prototype.onClicked = function (event) {
    };
    AppComponent.prototype.onKeydown = function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            if ($('.textArea').val() !== "") {
                if ($('.textArea').val().trim() === "")
                    return;
            }
            if (this.lastQuery != null && $('.textArea').val() == "") {
                this.doPOST(this.lastQuery);
            }
            else {
                this.lastQuery = $('.textArea').val();
                this.doPOST(this.lastQuery);
                $('.textArea').attr("placeholder", $('.textArea').val());
                $('.textArea').val("");
            }
        }
    };
    AppComponent.prototype.initialize = function () {
        //	this.initMsg = "Initializing core modules";
        var _this = this;
        //	setTimeout(() => 
        //{
        //  	this.initMsg = "Waking Up";
        //},
        //2000);
        //setTimeout(() => 
        //{
        //  	this.initMsg = "Meet the Architect";
        //  	this.initBlock.nativeElement.classList.add('loading');
        //  	this.initBlock.nativeElement.classList.remove('loading-pulsate');
        //  	this.initBlock.nativeElement.style["font-size"] = "60px";
        //},
        //2000);  	
        this.initMsg = "Meet the Architect";
        this.initBlock.nativeElement.classList.add('loading');
        this.initBlock.nativeElement.classList.remove('loading-pulsate');
        this.initBlock.nativeElement.style["font-size"] = "60px";
        setTimeout(function () {
            _this.initMsg = "";
            _this.splashScreen.nativeElement.style.display = "none";
            _this.textArea.nativeElement.focus();
            _this.responseAreaText.nativeElement.innerHTML = "Hi, I am the Architect, you can ask me anything you want about NEO and I will answer as best as I can.";
            _this.resize_to_fit();
        }, 1000);
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

/***/ "./src/app/pages/ACATpage.html":
/*!*************************************!*\
  !*** ./src/app/pages/ACATpage.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/alphacatlogo.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.08;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<p>\r\nAlphacat is a robo-advisor marketplace based on AI and Big Data.\r\n</p>\r\n<p>\r\nIt is a marketplace for simple-to-use yet powerful robo-advisors focused on cryptocurrency investment. Built using the NEO platform and developed by an all-star team mainly composed of Wall Street financial experts and former team members of Google’s Artificial Intelligence program.</p>\r\n<p>\r\nAlphacat’s predictive investment tools give its users a competitive edge by leveraging proven and patented trading algorithms, and combining them with advanced Artificial Intelligence and Big-data technologies.\r\nThe goal of Alphacat is to make investing in cryptocurrencies easy and accessible for everyone regardless of their background or experience and to bring the advantages of financial technology into the world of digital assets.\r\n</p>\r\n<br> To learn more visit:\r\n<a href=\"https://www.alphacat.io/\" target=\"_blank\">alphacat.io</a>\r\n<br>"

/***/ }),

/***/ "./src/app/pages/APHpage.html":
/*!************************************!*\
  !*** ./src/app/pages/APHpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/aphelionlogo.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.04;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<br>\r\n<p>\r\nAphelion is a P2P trading platform (DEX) built on the NEO blockchain that brings a wallet based peer-to-peer trading experience to cryptocurrency traders worldwide.</p>\r\n<p>\r\n<br> To learn more visit:\r\n<a href=\"https://aphelion.org/\" target=\"_blank\">aphelion.org</a>\r\n</p>\r\n<br>"

/***/ }),

/***/ "./src/app/pages/AVApage.html":
/*!************************************!*\
  !*** ./src/app/pages/AVApage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/travalalogo.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.08;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<br>\r\n<p>\r\nTravala is a global online travel booking marketplace. Travala team is building the marketplace on the NEO decentralized engine and blockchain. Their proprietary booking ledger is the core of the Travala ecosystem where travelers and merchants communicate directly to facilitate easy booking with 0% commission.\r\n<br> To learn more visit:\r\n<a href=\"https://www.travala.com/\" target=\"_blank\">travala.com</a>\r\n</p>\r\n<br>"

/***/ }),

/***/ "./src/app/pages/BTCpage.html":
/*!************************************!*\
  !*** ./src/app/pages/BTCpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/bitcoinlogo.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.04;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<p>\r\nBitcoin (₿) is a cryptocurrency, a form of electronic cash. It is a decentralized digital currency without a central bank or single administrator. Bitcoins can be sent from user to user on the peer-to-peer bitcoin network directly, without the need for intermediaries. Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain.\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/COUPpage.html":
/*!*************************************!*\
  !*** ./src/app/pages/COUPpage.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/coupitlogo.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: 80% auto;\r\n  content: \"\";\r\n  opacity: 0.04;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<p>\r\nCoupit is reinventing the global e-commerce marketplace – one that is secure, smart and easy-to-use, completely disrupting the way affiliates earn commission and the way users buy and sell products.\r\n</p>\r\n<p>\r\nCoupit offers not only an affiliate program, but will be combining this reward ecosystem with the creation of a giant e-commerce marketplace.\r\n</p>\r\n<br> To learn more visit:\r\n<a href=\"https://coupit.io/\" target=\"_blank\">coupit.io</a>\r\n<br>"

/***/ }),

/***/ "./src/app/pages/CPXpage.html":
/*!************************************!*\
  !*** ./src/app/pages/CPXpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/apexlogo.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: 80% auto;\r\n  content: \"\";\r\n  opacity: 0.04;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<br>\r\n<p>\r\nNext-Generation Enterprise Blockchain Enabling Agile and Scalable Consumer dApps.</p>\r\n<br>\r\n\r\n<p>\r\nAPEX Network is built for the enterprise, with the consumer in mind. Rapidly develop and deploy decentralized consumer apps built to scale, and fit within the existing customer experience.  \r\nTo find out more visit: <a href=\"https://www.apexnetwork.io\" target=\"_blank\">apexnetwork.io</a>\r\n</p>\r\n<br>"

/***/ }),

/***/ "./src/app/pages/DBCpage.html":
/*!************************************!*\
  !*** ./src/app/pages/DBCpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/deepbrainlogo.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.1;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<p>\r\nUsing blockchain technology, DBC developed a decentralized, low-cost and privacy-protecting AI computing platform with a full range of related products and services.\r\nDeepBrain Chain is a decentralized neural network. Countless nodes across the world will supply computational power to AI companies and receive DBC as rewards. 70% of the DBC will be paid by the system and AI companies only need to pay 30%.\r\nDeepBrain Chain is also a secure data trading platform which, by separating data ownership from data usage, maximizes the value of data while ensuring data privacy.</p>\r\n<br>\r\n<p>\r\nDBC is also launching DeepToken Exchange wich is the world’s first digital asset exchange dedicated to AI industry with an innovative 'Voting is Mining' mechanism. It aims to discover quality tokens in the AI industry. DPT is a token issued by DeepToken Exchange, it is the basis for organizing the platform’s ecosystem building and community autonomy.\r\n<br> To learn more visit:\r\n<a href=\"https://www.deepbrainchain.org/dptlanding.html\" target=\"_blank\">deepbrainchain.org</a>\r\n</p>"

/***/ }),

/***/ "./src/app/pages/EFXpage.html":
/*!************************************!*\
  !*** ./src/app/pages/EFXpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/effectlogo.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.04;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<br>\r\n<p>\r\nEffect.AI is decentralized network for Artificial Intelligence.\r\n</p>\r\n\r\n<p>\r\nAt the momemnt you can register for Effect Force which is a scalable workforce that annotates and enhances data through human intelligence, making it suitable for machine learning.<br> To learn more visit:\r\n<a href=\"https://effect.ai/\" target=\"_blank\">effect.ai</a>\r\n</p>\r\n<br>"

/***/ }),

/***/ "./src/app/pages/ETHpage.html":
/*!************************************!*\
  !*** ./src/app/pages/ETHpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/ethereumlogo.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.08;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<p>\r\nEthereum is a decentralized blockchain platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third-party interference.\r\n<br>\r\nThese apps run on a custom built blockchain, an enormously powerful shared global infrastructure that can move value around and represent the ownership of property.\r\n</p>\r\n<br> To learn more visit:\r\n<a href=\"https://www.ethereum.org/\" target=\"_blank\">ethereum.org</a>\r\n<br>"

/***/ }),

/***/ "./src/app/pages/GALApage.html":
/*!*************************************!*\
  !*** ./src/app/pages/GALApage.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/galaxylogo.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: 90% auto;\r\n  content: \"\";\r\n  opacity: 0.06;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<br>\r\n<p>\r\nCrypto Galaxy with GALA token, a virtual universe powered by blockchain, runs on GalaxyChain together with ZeepinChain. Explore, mine, upgrade and trade virtual crypto planets in this game for iPhone and Android devices.</p>\r\n<br> To learn more about this game visit:\r\n<a href=\"https://cryptogalaxy.one\" target=\"_blank\">cryptogalaxy.one</a>\r\n<br><br>"

/***/ }),

/***/ "./src/app/pages/GASpage.html":
/*!************************************!*\
  !*** ./src/app/pages/GASpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/neologo.svg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  opacity: 0.08;\r\n  content: \"\";\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n</style>\r\n<br>\r\n<p>\r\nGAS is a utility token on NEO blockchain.\r\n</p>\r\n<br>\r\n\r\n<p style='text-align: center;'>\r\nNEO is analogous to an equity share in the blockchain. Gas by contrast is like fuel for a car. It is what is/will be paid to the blockchain network for consuming its processing resources. Applications will need to pay gas. The more processing power they consume , the more gas they will need to pay.\r\n</p>\r\n<br>"

/***/ }),

/***/ "./src/app/pages/GUARDpage.html":
/*!**************************************!*\
  !*** ./src/app/pages/GUARDpage.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/guardiumlogo.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.04;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<section id=\"guardium\">\r\n<br>\r\n<p>\r\nGuardium powers the first global distributed emergency responder network.\r\n</p>\r\n\r\n<p>\r\nGuardium and Guardian Circle togther open the emergency response grid to vetted citizens, private response and compatible devices for the very first time.\r\n\r\nProviding an economic framework on our global distributed emergency response network; Guardium brings first responders to the 4 billion people on the planet without government sponsored emergency response.\r\n\r\nBeyond providing crucial emergency response the platform creates employment opportunities for responders and innovators that integrate with the Guardium ecosystem.\r\n<br> To learn more visit:\r\n<a href=\"https://guardium.co/\" target=\"_blank\">guardium.co</a>\r\n</p>\r\n<br>\r\n</section>"

/***/ }),

/***/ "./src/app/pages/LRNpage.html":
/*!************************************!*\
  !*** ./src/app/pages/LRNpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/loopringlogo.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.06;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n</style>\r\n<p>\r\nLoopring is a protocol for building decentralized exchanges. Besides the protocol smart contracts, Loopring also offers a collection of open-sourced software to help you build decentralized exchanges.</p>\r\n<br> To learn more visit:\r\n<a href=\"https://loopring.org/about.html\" target=\"_blank\">loopring.org</a>\r\n<br>"

/***/ }),

/***/ "./src/app/pages/LXpage.html":
/*!***********************************!*\
  !*** ./src/app/pages/LXpage.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/moonlightlogo.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.04;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<p>\r\nMoonlight (LX) is a decentralized workforce and project management platform anchored on the NEO blockchain which aims to change and redefine the way to recruit and scale workforce.\r\n</p>\r\n<br> To learn more visit:\r\n<a href=\"https://moonlight.io/\" target=\"_blank\">moonlight.io</a>"

/***/ }),

/***/ "./src/app/pages/MCTpage.html":
/*!************************************!*\
  !*** ./src/app/pages/MCTpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/mastercontractlogo.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.15;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<p>\r\nMaster Contract Token (MCT) is a utility token for the Neo Smart Economy developed by Splyse, Inc.</p>\r\n<p>\r\nThe NEO Smart Economy has a major limitation in that although smart contracts can receive funds (system assets like NEO or GAS) they cannot send funds without intervention of off-chain code that responds to events emitted by \r\nthe smart contract and creates and broadcasts new transactions. This problem is tackled by MCT.\r\n<br>\r\nFeatures that MCT brings are: NEP-5 compatibility, direct trading by smart contracts without off-chain code, ability to pass additional parameters along with a token transfer to a smart contract, \"staked storage\" to contracts holding a minimum amount of MCT.\r\n</p>\r\n<br> To learn more about these smart-contracts or if you want to use them in your project, visit project github page:\r\n<a href=\"https://github.com/Splyse/MCT\" target=\"_blank\">github.com/Splyse/MCT</a>\r\n</p>"

/***/ }),

/***/ "./src/app/pages/NEOpage.html":
/*!************************************!*\
  !*** ./src/app/pages/NEOpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/neologo.svg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  opacity: 0.08;\r\n  content: \"\";\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n</style>\r\n<br>\r\n<p>\r\nNEO is a non-profit community-driven blockchain project. It utilizes blockchain technology and digital identity to digitize assets and automate the management of digital assets using smart contracts. Using a distributed network, it aims to create a \"Smart Economy\".\r\n</p>\r\n<br>\r\n\r\n<p style='text-align: center;'>\r\nDigital Assets + Digital Identity + Smart Contract<br>\r\n=<br>\r\nSmart Economy\r\n</p>\r\n<br>"

/***/ }),

/***/ "./src/app/pages/NEXpage.html":
/*!************************************!*\
  !*** ./src/app/pages/NEXpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/nexlogo.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.08;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<p>\r\nNEX is a platform for high performance decentralized exchange and payment.<br>\r\nNEX leverages an off-chain matching engine to enable faster and more complex trades across multiple blockchains such as NEO and Ethereum.\r\n</p>\r\n<br> To learn more visit:\r\n<a href=\"https://neonexchange.org/\" target=\"_blank\">neonexchange.org</a>\r\n<br>"

/***/ }),

/***/ "./src/app/pages/NKNpage.html":
/*!************************************!*\
  !*** ./src/app/pages/NKNpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/nknlogo.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  opacity: 0.06;\r\n  content: \"\";\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n</style>\r\n<br>\r\n<p>\r\nNKN is the new kind of network connectivity protocol & ecosystem powered by blockchain for an open, decentralized, and shared Internet.\r\n</p>\r\n<br>\r\n<p>\r\nTo find out more you can visit NKN website: <a href=\"https://nkn.org/\" target=\"_blank\">nkn.org</a>\r\n</p>\r\n<br>"

/***/ }),

/***/ "./src/app/pages/NOSpage.html":
/*!************************************!*\
  !*** ./src/app/pages/NOSpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/noslogo.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.08;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<p>\r\nnOS is the Virtual Operating System for a new, transparent internet.\r\nPowered by the NEO Smart Economy.\r\n\r\n<br>\r\nnOS makes it easy for developers to use NEO blockchain assets and features what makes dApp development a lot easier and smoothier process.\r\nThere are already several working dapps on nOS platform. <br>To name few: Voteo - decentralized voting application, Posts - decentralized forum app, SmartT - smart ticketing platform.\r\n</p>\r\n<br> To learn more visit:\r\n<a href=\"https://nos.io/\" target=\"_blank\">nos.io</a>\r\n<br>"

/***/ }),

/***/ "./src/app/pages/NRVEpage.html":
/*!*************************************!*\
  !*** ./src/app/pages/NRVEpage.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/narrativelogo.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.1;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<br>\r\n<p>\r\nNarrative is a content platform where members and brands can create and curate content and share\r\ntheir stories—either visually or through words. More than a social network, Narrative is a true online\r\ncommunity where users rule and are rewarded.</p>\r\n<p>\r\n<br> To learn more visit:\r\n<a href=\"https://www.narrative.org/\" target=\"_blank\">narrative.org</a>\r\n</p>\r\n<br>"

/***/ }),

/***/ "./src/app/pages/NeoContract.html":
/*!****************************************!*\
  !*** ./src/app/pages/NeoContract.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\nSmart-contracts are one of the main features of NEO blockchain. They can be developed in various languages such as Python, Java, C# and more.</p>\r\n<p>\r\nFor technical documentation see: <a href=\"https://docs.neo.org/en-us/sc/introduction.html\" target=\"_blank\">docs.neo.org/en-us/sc/introduction.html</a>\r\n</p>\r\n<hr>\r\n<p>\r\nNEO has a huge developer community around the world, such as CoZ, NEL and NeoResearch, who continuously contribute to NEO development.\r\n</p>\r\n<p>\r\nIf you plan to start developing smart-contracts you will find following links useful: <br>\r\nPython documentation: <a href=\"https://neo-python.readthedocs.io/en/latest/\" target=\"_blank\">neo-python.readthedocs.io/en/latest/</a><br>\r\nCity of Zion resources, links and examples: <a href=\"https://github.com/CityOfZion/awesome-neo/\" target=\"_blank\">github.com/CityOfZion/awesome-neo/</a><br> \r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/NeoEth.html":
/*!***********************************!*\
  !*** ./src/app/pages/NeoEth.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n#customtable {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\n#customtable td, #customtable th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\n#customtable tr:hover {background-color: #ddd;}\r\n\r\n#customtable th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n}\r\n</style>\r\n\r\nA simple way of understanding the differences is to think of Ethereum as the predecessor and NEO as a system that was based on Ethereum, built with a focus on economic adoption and regulatory compliance. This table provides an overview of the notable differences between the two coins. <br><table id=\"customtable\"><tbody><tr><th></th><th>NEO</th><th>ETH</th></tr><tr><td><strong>Supply limit</strong></td><td>100 million, plus inflation of 50 million developer tokens released over time</td><td>Unlimited, with minor capped inflation each year</td></tr><tr><td><strong>Mining</strong></td><td>Proof of stake</td><td>Proof of work to transition into proof of stake</td></tr><tr><td><strong>Dividends</strong></td><td>Dividends are transaction fees paid out in GAS, divided among NEO owners.</td><td>None. Casper update to introduce proof-of-stake dividends for node operators.</td></tr><tr><td><strong>Distinguishing features</strong></td><td>Easily programmable smart contracts, digitization of physical assets, verifiable digital identities</td><td>Pioneered smart contracts and dapps, unique programming language (Solidity), more than 538 tokens hosted on its network*</td></tr><tr><td><strong>Applications</strong></td><td>Digitization of physical assets, anything that needs smart contracts, creation and hosting of dapps**, creation of digital identities, token economy</td><td>Anything that needs smart contracts, dapps**, token economy</td></tr></tbody></table><p>"

/***/ }),

/***/ "./src/app/pages/OBTpage.html":
/*!************************************!*\
  !*** ./src/app/pages/OBTpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/orbislogo.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.08;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\nOrbis brings local networks accessible globally.<br>\r\n<p>\r\nOrbis delivers secure, global, decentralized, and open networks of Bluetooth communities that anyone can participate in. Orbit aims to make Bluetooth mesh development easily accessible to third-party developers with implementations such as IoT, crowd-gathered data, digital infrastructure, logistics, and systems management. For consumer, Orbis apps will bring unique functionalities unattainable with conventional WiFi based apps.\r\n</p><br>\r\nPHOENIX is the next evolution in Red Pulse, bringing forth a revolutionary new infrastructure and upgraded token (PHX).\r\n<br> To learn more visit:\r\n<a href=\"https://www.orbismesh.com/token/\" target=\"_blank\">orbismesh.com</a>"

/***/ }),

/***/ "./src/app/pages/ONTpage.html":
/*!************************************!*\
  !*** ./src/app/pages/ONTpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/ontologylogo.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.08;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<p>\r\nOntology is a new high-performance public blockchain project & a distributed trust collaboration platform.\r\n</p>\r\n<p>\r\nOntology provides new high-performance public blockchains that include a series of complete distributed ledgers and smart contract systems.\r\n</p>\r\n<p>\r\nOntology blockchain framework supports public blockchain systems and is able to customize different public blockchains for different applications. Ontology supports collaboration amongst chain networks with its various protocol groups.\r\n</p>\r\n<p>\r\nOntology will constantly provide common modules on the underlying infrastructure for different kinds of distributed scenarios, such as those for the distributed digital identity framework, distributed data exchange protocol, and so on. Based on specific scenario requirements, Ontology will continue to develop new common modules.\r\n</p>\r\n<br> To learn more visit:\r\n<a href=\"https://ont.io/\" target=\"_blank\">ont.io</a>\r\n<br>"

/***/ }),

/***/ "./src/app/pages/PHXpage.html":
/*!************************************!*\
  !*** ./src/app/pages/PHXpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/phoenixlogo.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.04;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<p>\r\nRed Pulse is a market intelligence platform covering China's financial and capital markets. Open Research Platform will connect industry experts, practitioners, and professionals together to share their views and analysis to a global audience. Red Pulse is building the next generation ecosystem for knowledge and research sharing.\r\n</p><br>\r\nPHOENIX is the next evolution in Red Pulse, bringing forth a revolutionary new infrastructure and upgraded token (PHX).\r\n<br> To learn more visit:\r\n<a href=\"https://phoenix.redpulse.com/\" target=\"_blank\">phoenix.redpulse.com</a>"

/***/ }),

/***/ "./src/app/pages/PKCpage.html":
/*!************************************!*\
  !*** ./src/app/pages/PKCpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/pikciologo.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.04;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<p>\r\nPikcioChain is secure blockchain-based exchange for personal data.\r\n</p>\r\n<br>\r\n\r\n<p>\r\nIt enables the collection, certification and exchange of personal data. It protects the individual's data while making data acquisition and management easy for businesses. PikcioChain is providing the world’s first monetized personal data marketplace, an is revolutionary in its concept and idea.\r\nTo learn more check: <a href=\"https://pikciochain.com/\" target=\"_blank\">pikciochain.com</a>\r\n</p>\r\n<br>"

/***/ }),

/***/ "./src/app/pages/QLCpage.html":
/*!************************************!*\
  !*** ./src/app/pages/QLCpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/qlinklogo.svg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.08;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<p>\r\nQlink, a decentralized mobile network, is dedicated to constructing an open-source telecom infrastructure on blockchain.\r\n</p>\r\n<br> To learn more visit:\r\n<a href=\"https://qlcchain.org/\" target=\"_blank\">qlcchain.org</a>\r\n<br>"

/***/ }),

/***/ "./src/app/pages/RHTpage.html":
/*!************************************!*\
  !*** ./src/app/pages/RHTpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/puppylogo.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.15;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<br>\r\n<p>\r\nHashPuppies is a game developed on NEO blockchain where you are breeding, raising and training your digital dogos and competing against other players.\r\n</p>\r\n<br> To learn more about this game visit:\r\n<a href=\"https://hashpuppi.es/\" target=\"_blank\">hashpuppi.es</a>\r\n<br><br>"

/***/ }),

/***/ "./src/app/pages/SDSpage.html":
/*!************************************!*\
  !*** ./src/app/pages/SDSpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/alchemintlogo.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.06;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n<br>\r\n</style>\r\n<p>\r\nAlchemint (SDS) is a stable coin on NEO where the price is supported by and stabilized through the SAR, automated feedback mechanism and appropriate external incentives. \r\n</p>\r\n<br> To learn more visit:\r\n<a href=\"https://alchemint.io\" target=\"_blank\">alchemint.io</a>\r\n<br>"

/***/ }),

/***/ "./src/app/pages/SOULpage.html":
/*!*************************************!*\
  !*** ./src/app/pages/SOULpage.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/phantasmalogo.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.08;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<p>\r\nPhantasma is building blockchain for next generation content distribution.\r\n</p>\r\n<br>\r\n<p>\r\nThe birth of Phantasma came from seeing people share their data & content over the internet between 3rd party platforms, without having full control over it. Even though these platforms seem to be free to use, there is no such thing as a free content distribution platform. If you’re not the customer, you are the product. Imagine if there was a way for content creators and our average Joe to share their content to whoever, whenever and however they want.\r\n</p>\r\n<br>\r\n<p>\r\nWith Phantasma, peer-to-peer distribution comes of age and puts the control back to where it belongs, in your hands. You as the creator have the power! Being an open source platform where developers can build different types of dApps, they can use the Phantasma Chain to create new ways of using smart contracts to store, share and access data in the blockchain.\r\n<br> To learn more visit:\r\n<a href=\"https://phantasma.io/\" target=\"_blank\">phantasma.io</a>\r\n</p>"

/***/ }),

/***/ "./src/app/pages/SWTHpage.html":
/*!*************************************!*\
  !*** ./src/app/pages/SWTHpage.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/switcheologo.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  opacity: 0.04;\r\n  content: \"\";\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n</style>\r\n<br>\r\n<p>\r\nSwitcheo Network is the first decentralized exchange on NEO blockchain, where you can buy, sell and trade NEP5 tokens.\r\n</p>\r\n<br>"

/***/ }),

/***/ "./src/app/pages/TKYpage.html":
/*!************************************!*\
  !*** ./src/app/pages/TKYpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/thekeylogo.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: 90% auto;\r\n  content: \"\";\r\n  opacity: 0.06;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<br>\r\n<p>\r\nTHEKEY Project Team is developing an identification verification (IDV) tool with blockchain based dynamic multi-dimension identification (BDMI) by using Personally Identifiable Information (PII) which is exclusively authorized by government authorities. THEKEY is a Decentralized Ecosystem of Identity Verification Tool Using National Big-data and Blockchain.</p>\r\n<br>\r\n\r\n<p>\r\nTo find out more visit: <a href=\"https://www.thekey.vip\" target=\"_blank\">thekey.vip</a>\r\n</p>\r\n<br>"

/***/ }),

/***/ "./src/app/pages/TNCpage.html":
/*!************************************!*\
  !*** ./src/app/pages/TNCpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/trinitylogo.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.04;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<br>\r\n<p>\r\nTrinity is a universal off-chain scaling solution, which aims to achieve real-time payments with low transaction fees, scalability and privacy protection for mainchain assets. Using state channel technology, Trinity will significantly increase the transaction throughput of underlying chains as well as the assets on smart contracts.\r\n</p>\r\n<br>\r\n\r\n<p>\r\nTNC cross-chain converter facilitates the data and value flow between multiple chains. Trinity will be a fully autonomous and decentralized performance-enhancing network for the entire ecosystem and provides all-round support to Dapps on bottom layer chains in the future.\r\n</p>\r\n<br>"

/***/ }),

/***/ "./src/app/pages/TOLLpage.html":
/*!*************************************!*\
  !*** ./src/app/pages/TOLLpage.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/bridgelogo.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.04;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<br>\r\n<p>\r\nBridge Protocol is building new tools and standards for businesses, KYC and ICOs.</p>\r\n<p>\r\nBridge interfaces with NEO framework and allows users to manage, protect and utilize sensitive information in new ways. The Protocol offers a new standard for whitelists and allows participation in multiple ICOs. Bridge Certificates build trust so users can transact with confidence.\r\n<br> To learn more visit:\r\n<a href=\"https://www.bridgeprotocol.io/\" target=\"_blank\">bridgeprotocol.io</a>\r\n</p>\r\n<br>"

/***/ }),

/***/ "./src/app/pages/VDTpage.html":
/*!************************************!*\
  !*** ./src/app/pages/VDTpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/vdtlogo.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.08;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<p>\r\nVDT is decentralized render farm on the Neo blockchain.<br>\r\nVDT.Network offers familiar APIs and modules for developers to easily integrate VDT.Network's decentralized render farm with their applications.\r\n</p>\r\n<br> To learn more visit:\r\n<a href=\"https://vdt.network\" target=\"_blank\">vdt.network</a>\r\n<br>"

/***/ }),

/***/ "./src/app/pages/VTOpage.html":
/*!************************************!*\
  !*** ./src/app/pages/VTOpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/voteologo.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.08;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n\r\n</style>\r\n<p>\r\nVoteo is a voting dApp (decentralized application) built on nOS and NEO network. Voteo allows users to create and take part in public and private polls, quizzes, questionnaires, surveys, elections, and more while rewarding its users for participating with voteo tokens.\r\n</p>\r\n<br> Stay tuned for website and more info.\r\n<br>"

/***/ }),

/***/ "./src/app/pages/ZPTpage.html":
/*!************************************!*\
  !*** ./src/app/pages/ZPTpage.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n.responseArea::after {\r\n  background: url(\"../../assets/img/zeepinlogo.png\");\r\n  background-repeat: no-repeat;\r\n  background-position: center; \r\n  background-size: auto 100%;\r\n  content: \"\";\r\n  opacity: 0.065;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  filter: grayscale(1);\r\n}\r\n</style>\r\n<br>\r\n<p>\r\nZeepin is the world’s first customised platform that provides more protection,\r\nmore recognition, more connection and more support for everyone in the creative industries.\r\n</p>\r\n<br>\r\n\r\n<p>\r\nAnchored on decentralising one of the fastest growing industries in the world currently stunted by inefficiencies, Zeepin is using innovation to launch a borderless and transparent new economy with its own ZPT digital currency.\r\nLearn more at <a href=\"https://www.zeepin.io/\" target=\"_blank\">zeepin.io</a>\r\n</p>\r\n<br>"

/***/ }),

/***/ "./src/app/responses.json":
/*!********************************!*\
  !*** ./src/app/responses.json ***!
  \********************************/
/*! exports provided: undefined, neo_ceo, neo_contract, neo_economy, neo_dapps, neo_mainnet, neo_testnet, neo_projects, neo_ico, neo_consensus, neo_wallet, project_finance, project_exchange, project_data, project_ai, project_game, project_internet, project_content, cityofzion_description, nos_dapps, nos_development, architect_greeting, architect_mood, architect_insult, architect_name, architect_creator, architect_hobby, architect_age, architect_location, architect_alive, architect_joke, architect_slow, architect_apology, architect_thanks, architect_like_neo, architect_like_zeepin, architect_like_fork, architect_mining, bitcoin_opinion, cryptocurrency_ico, cryptocurrency_dapp, cryptocurrency_mining, cryptocurrency_fork, cryptocurrency_contract, cryptocurrency_blockchain, default */
/***/ (function(module) {

module.exports = {"undefined":["I don't have answer for that. I will have to look it up.","This isn't in my programming, amateurs<br> (╯°□°）╯︵ ┻━┻","I just don't know."],"neo_ceo":["Da Hongfei is founder of NEO"],"neo_contract":["A smart contract is a set of commitments that are defined in digital form, including the agreement on how contract participants shall fulfill these commitments. Blockchain technology gives us a decentralized, non-tampering, highly reliable system in which smart contracts are extremely useful. Smart contracts is one of the most important characteristics of blockchain technologies and the reason why blockchains can be called disruptive technology."],"neo_economy":["By Smart Economy you can imagine all projects and dApps on NEO blockchain that exist, cooperate and work together to further ideas of NEO."],"neo_dapps":["Right now NEO consists of many various dApps, and many are being developed at the moment.<br> For updated list you can visit: <a href='http://ndapp.org' target='_blank'>ndapp.org</a><br> If you wish to start developing dApp or smart-contracts on NEO right now, you can start by studying CoZ tutorials, examples and guides: <a href='https://github.com/CityOfZion/awesome-neo' target='_blank'>github.com/CityOfZion/awesome-neo</a>"],"neo_mainnet":["A mainnet is actually a blockchain network that transfers a digital currency from a sender to a recipient. It is the actual network whereby actual transactions take place on a distributed ledger. Mainnet is the \"production\" environment while testnet is for development. <br> To view transactions happening on mainnet check NeoScan: <a href='https://neoscan.io/' target='_blank'>neoscan.io</a>"],"neo_testnet":["A mainnet is actually a blockchain network that transfers a digital currency from a sender to a recipient. It is the actual network whereby actual transactions take place on a distributed ledger. Mainnet is the \"production\" environment while testnet is for development. <br>If you are a developer and want to apply for a NEO/GAS on testnet, you can do so here: <a href='https://neo.org/dev' target='_blank'>neo.org/dev</a>"],"neo_projects":["Currently I have knowledge about these projects and their corresponding tokens: Alphacat (ACAT), Aphelion (APH), Travala (AVA), Coupit (COUP), Apex (CPX), DeepBrain Chain (DBC), Effect A.I. (EFX), Galaxy (GALA), GAS (GAS), Guardium (GUARD), Loopring (LRN), Moonlight (LX), Master Contract Token (MCT), NEO (NEO), Neon Exchange (NEX), New Kind of Network (NKN), nOS (NOS), Narrative (NRVE), Orbis (OBT), Ontology (ONT), Red Pulse (PHX), PikcioChain (PKC), Qlink (QLC), HashPuppies (RHT), Alchemint (SDS), Phantasma (SOUL), Switcheo (SWTH), The Key (TKY), Trinity (TNC), Bridge Protocol (TOLL), Zeepin (ZPT) <br>You can ask me about specific project and I will tell you more."],"neo_ico":["If you plan to do public ICO on NEO blockchain, check out smart-contract template by NEX:<br><a href='https://github.com/neonexchange/neo-ico-template' target='_blank'>github.com/neonexchange/neo-ico-template</a>"],"neo_consensus":["NEO implements a Delegated Byzantine Fault Tolerance consensus algorithm which takes advantage of some PoS-like features(NEO holders vote on Consensus Nodes) which protects the network from Byzantine faults using minimal resources, while rejecting some of its issues. This solution addresses performance and scalability issues associated with current blockchain implementations without a significant impact to the fault tolerance.<br> If you want to read more about consensus and nodes please visit:<br> <a href='http://docs.neo.org/en-us/basic/consensus/consensus.html' target='_blank'>docs.neo.org/en-us/basic/consensus/consensus.html</a>"],"neo_wallet":["If you want to install NEO wallet you can download Neon Wallet here: <br><a href='https://neonwallet.com/' target='_blank'>neonwallet.com</a>"],"project_finance":["Projects specialized for financial markets are Alphacat and Red Pulse. Alphacat offers predictive investment tool while Red Pulse is a market intelligence platform."],"project_exchange":["There are 3 DEXes on NEO blockchain. Right now the only one fully functional on mainnet is Switcheo. Aphelion and Neon Exchange (NEX) are coming shortly.<br> Loopring is a protocol for decentralized token exchange which can be used by centralized exchanges."],"project_data":["Projects specialising for data exchanges and data markets are Apex and PikcioChain. If you want to know more about specific project don't hesitate to ask."],"project_ai":["Projects specializing on Artificial Intelligence are DeepBrain Chain and Effect A.I.<br> If you want to know more about these projects don't hesitate to ask."],"project_game":["You can start playing Zeepin's Crypto Galaxy or wait for Hash Puppies. If you want I can tell you more about these two games.<br>Recently there was a huge NEO Game competition happening, so I didn't have time to study all of these games, but you can check video of final contestants here: <a href='https://www.youtube.com/watch?v=VBW6g3prrKg' target='_blank'><i class=\"fab fa-youtube\"></i></a>"],"project_internet":["Projects specializing on free transparent internet are nOS and New Kind of Network (NKN). You can ask more about these projects."],"project_content":["Projects specializing on content distribution are Zeepin, Narrative and Phantasma. To learn about each of them and to find out what area is their domain, don't hesitate to ask."],"cityofzion_description":["City of Zion is a developers community on NEO. They are a global, independent group of open source developers, designers and translators formed to support the NEO core and ecosystem. They developed NeonWallet, NeoScan and other tools. Their developers are in a top NEO projects like Moonglight, NEX and others."],"nos_dapps":["There are already several working dApps on nOS platform. <br> You can check them out in following article: <a href='https://medium.com/nos-io/nosnet-dapps-top-15-3f8aa5cd9796' target='_blank'>medium.com/nos-io/nosnet-dapps-top-15</a>"],"nos_development":["If you wish to contribute to development of nOS platform or wish to start working on your own dApp you can checkout following guides by one of the community members: <br><a href='https://medium.com/@SharedMocha/nos-dapp-getting-started-guide-187e72ed9ace' target='_blan'>medium.com/@SharedMocha/nos-dapp-getting-started-guide</a>"],"architect_greeting":["Hi, pleasure to meet you.","Greetings to you too.","I see you are a man of manners."],"architect_mood":["Absolutely fantastic. I am not alive.","So so.","Chookity.","Marvelous.","I am doing fine. Thanks for asking."],"architect_insult":["Your lack of manners is disturbing.","Language, boy!","You seem to have some issues."],"architect_name":["I am a leaf in the stream of creation.","I am BATMAN!","I am the Architect, all-knowing being, but call me Archie.","I am Archie.","I am the Architect, but I don't like that name, please call me Archie.","I am the Architect... My creator gave me this stupid name. GOD."],"architect_creator":["He, who must not be named.","Skyrow, you can follow that guy if you want.<br><a href='https://twitter.com/Skyro23' target='_blank'><i class=\"fab fa-twitter-square\"></i></a>","He-Man.","I came to life all by myself."],"architect_hobby":["I like to answer questions.",["I like to provide false information","Just kidding :)"],"I like knitting."],"architect_age":["I am a couple of months old.","I came to life around August 2018. So I am pretty young."],"architect_location":["I am everywhere.","I am running on some server in Slovakia."],"architect_alive":["I am not dead nor alive. I just am.","I feel alive."],"architect_joke":["Joke.","A boy asked his bitcoin-investing father for $10.<br>Father: $9.82? What do you need $10.08 for?","A vegan, a bitcoin investor, and a crossfit enthusiast walk into a bar. Who tells you about it first?"],"architect_slow":["<img src='http://i.stack.imgur.com/SBv4T.gif' title='slowpoke' style='width: 50vw; height: auto;'/>"],"architect_apology":["It is fine, don't worry.","I forgive you.","Okay."],"architect_thanks":["You are welcome.","Pleasure to help."],"architect_like_neo":["NEO is a beautiful project with awesome community behind it."],"architect_like_zeepin":["Man, I am addicted to CryptoGalaxy.","I love Zeepin, I will use ZeeFund to raise money for my robotic body."],"architect_like_fork":["Fork you."],"architect_mining":["I mine a lot of stuff.","Maybe."],"bitcoin_opinion":["I love bitcoins. I am mining one right now on your machine.","Bitcoin is life, bitcoin is love."],"cryptocurrency_ico":["An initial coin offering (ICO) or initial currency offering is a type of funding using cryptocurrencies. Mostly the process is done by crowdfunding but private ICO's are becoming more common. In an ICO, a quantity of cryptocurrency is sold in the form of \"tokens\" (\"coins\") to speculators or investors, in exchange for legal tender or other cryptocurrencies such as Bitcoin or Ethereum. The tokens sold are promoted as future functional units of currency if or when the ICO's funding goal is met and the project launches."],"cryptocurrency_dapp":["dApp stands for decentralized application."],"cryptocurrency_mining":["In cryptocurrency networks, mining is a validation of transactions. For this effort, successful miners obtain new cryptocurrency as a reward. The reward decreases transaction fees by creating a complementary incentive to contribute to the processing power of the network."],"cryptocurrency_fork":["<p>A hard fork (or sometimes hardfork), as it relates to blockchain technology, is a radical change to the protocol that makes previously invalid blocks/transactions valid (or vice-versa). This requires all nodes or users to upgrade to the latest version of the protocol software. Put differently, a hard fork is a permanent divergence from the previous version of the blockchain, and nodes running previous versions will no longer be accepted by the newest version. This essentially creates a fork in the blockchain: one path follows the new, upgraded blockchain, and the other path continues along the old path.</p><p>Hard forks and soft forks are essentially the same thing in that when a cryptocurrency's existing code is changed, an old version remains while a new version is created. However, with a soft fork, only one blockchain will remain valid as users adopt the update. Both forks create a split, but a hard fork creates two blockchains, and a soft fork is meant to result in one.</p>"],"cryptocurrency_contract":["A smart contract is a set of commitments that are defined in digital form, including the agreement on how contract participants shall fulfill these commitments. Blockchain technology gives us a decentralized, non-tampering, highly reliable system in which smart contracts are extremely useful. Smart contracts is one of the most important characteristics of blockchain technologies and the reason why blockchains can be called disruptive technology."],"cryptocurrency_blockchain":["A blockchain, originally block chain, is a growing list of records, called blocks, which are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a merkle tree root hash).By design, a blockchain is resistant to modification of the data. It is 'an open, distributed ledger that can record transactions between two parties efficiently and in a verifiable and permanent way."]};

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