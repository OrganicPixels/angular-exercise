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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"center flex flex-align-end pt3 px3 pb2 color-bg-1 white font-secondary\">\n    <span [class.hidden]=\"!isOpen\" class=\"pointer\"\n          (click)=\"closePanel()\">\n       <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"16px\" viewBox=\"0 0 11.1 19.4\">\n           <path d=\"M.3 9.4L9.7 0 11 1.3 2.7 9.7l8.4 8.4-1.3 1.3L0 9.7l.3-.3z\" fill=\"#fff\"/>\n       </svg>\n    </span>\n    <p class=\"flex-2 text-large\">Lunch Tyme</p>\n    <img class=\"pointer\" src=\"assets/images/icon_map@2x.png\" alt=\"map\" (click)=\"toggleFullMap()\">\n</header>\n<main class=\"flex flex-wrap\" [class.active]=\"isOpen\">\n    <ng-container *ngFor=\"let location of locations\">\n        <article\n                class=\"flex flex-1 card pointer\"\n                (click)=\"toggleLocation(location)\"\n                [ngStyle]=\"{ 'background-image': 'url(' + location.backgroundImageURL + ')'}\">\n            <footer class=\"white pl3\">\n                <p class=\"font-secondary\">\n                    {{location.name}}\n                </p>\n                <p class=\"text-small\">\n                    {{location.category}}\n                </p>\n            </footer>\n            <span class=\"overlay\"></span>\n        </article>\n    </ng-container>\n</main>\n<app-side-panel [details]=\"activeSelection\"\n                [allLocations]=\"allLocations\"\n                [locations]=\"locations\"\n                [isOpen]=\"isOpen\"\n                #sidePanel>\n</app-side-panel>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ------------------------------------\n   Colors\n-------------------------------------- */\nheader {\n  position: fixed;\n  width: 100%;\n  height: 4rem;\n  z-index: 10;\n  box-sizing: border-box; }\nheader img {\n    max-width: 2rem; }\nheader img:first-child {\n      max-height: 1.5rem; }\narticle {\n  position: relative;\n  background: no-repeat center;\n  background-size: cover;\n  flex-basis: 50%;\n  min-height: 11.25rem; }\n@media only screen and (max-device-width: 1024px) and (orientation: portrait) {\n    article {\n      flex-basis: 22rem; } }\n@media only screen and (max-width: 400px) {\n    article {\n      flex-basis: 100%; } }\narticle footer {\n    z-index: 2;\n    padding-bottom: 0.375em;\n    align-self: flex-end; }\narticle .overlay {\n    content: url('cellGradientBackground@2x.png');\n    position: absolute;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    z-index: 1; }\nmain {\n  transition: max-width 200ms ease-in-out;\n  max-width: 100%;\n  padding-top: 4rem; }\nmain.active {\n    max-width: calc(100% - 24rem); }\n@media only screen and (max-device-width: 1024px) and (orientation: portrait) {\n      main.active {\n        max-width: calc(100% - 20rem); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmlmZml0aGovc2l0ZXMvYnItZXhhbS9zcmMvc3R5bGVzL2Jhc2UvX2NvbG9ycy5zY3NzIiwiL1VzZXJzL2dyaWZmaXRoai9zaXRlcy9ici1leGFtL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2dyaWZmaXRoai9zaXRlcy9ici1leGFtL3NyYy9zdHlsZXMvYmFzZS9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O3lDQUV5QztBQ0R6QztFQUNFLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFDR2lCO0VERmpCLFlBQVc7RUFDWCx1QkFBc0IsRUFPdkI7QUFaRDtJQU9JLGdCQUFlLEVBSWhCO0FBWEg7TUFTTSxtQkFBa0IsRUFDbkI7QUFJTDtFQUNFLG1CQUFrQjtFQUNsQiw2QkFBNEI7RUFDNUIsdUJBQXNCO0VBQ3RCLGdCQUFlO0VBQ2YscUJBQW9CLEVBc0JyQjtBQXJCQztJQU5GO01BT0ksa0JBQWlCLEVBb0JwQixFQUFBO0FBbEJDO0lBVEY7TUFVSSxpQkFBZ0IsRUFpQm5CLEVBQUE7QUEzQkQ7SUFjSSxXQUFVO0lBQ1Ysd0JBQXVCO0lBQ3ZCLHFCQUFvQixFQUNyQjtBQWpCSDtJQW9CSSw4Q0FBK0Q7SUFDL0QsbUJBQWtCO0lBQ2xCLFVBQVM7SUFDVCxhQUFZO0lBQ1osWUFBVztJQUNYLFdBQVUsRUFDWDtBQUdIO0VBQ0Usd0NBQXVDO0VBQ3ZDLGdCQUFlO0VBQ2Ysa0JDeENpQixFRGdEbEI7QUFYRDtJQUtJLDhCQUE2QixFQUs5QjtBQUhDO01BUEo7UUFRUSw4QkFBNkIsRUFFbEMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgQ29sb3JzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vLyBTcGVjaWZpYyBjb2xvcnMuXG4kd2hpdGU6ICNGRkZGRkY7XG4kZ3JlZW46ICM0M0U4OTU7XG4kZ3JlZW4tZGFyazogIzM0QjM3OTtcblxuLy8gQWJzdHJhY3RlZCBjb2xvcnMuXG4kY29sb3ItYWNjZW50LTE6ICRncmVlbjtcbiRjb2xvci1hY2NlbnQtMjogJGdyZWVuLWRhcms7XG4iLCJAaW1wb3J0ICd+c3JjL3N0eWxlcy9iYXNlL3ZhcmlhYmxlcyc7XG5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6ICRoZWFkZXJIZWlnaHQ7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBpbWcge1xuICAgIG1heC13aWR0aDogMnJlbTtcbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIG1heC1oZWlnaHQ6IDEuNXJlbTtcbiAgICB9XG4gIH1cbn1cblxuYXJ0aWNsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZmxleC1iYXNpczogNTAlO1xuICBtaW4taGVpZ2h0OiAxMS4yNXJlbTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDEwMjRweCkgIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkge1xuICAgIGZsZXgtYmFzaXM6IDIycmVtO1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICB9XG5cbiAgZm9vdGVyIHtcbiAgICB6LWluZGV4OiAyO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjM3NWVtO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB9XG5cbiAgLm92ZXJsYXkge1xuICAgIGNvbnRlbnQ6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvY2VsbEdyYWRpZW50QmFja2dyb3VuZEAyeC5wbmcnKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG59XG5cbm1haW4ge1xuICB0cmFuc2l0aW9uOiBtYXgtd2lkdGggMjAwbXMgZWFzZS1pbi1vdXQ7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6ICRoZWFkZXJIZWlnaHQ7XG4gICYuYWN0aXZle1xuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMjRyZW0pO1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDEwMjRweCkgIGFuZCAob3JpZW50YXRpb24gOiBwb3J0cmFpdCkge1xuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDIwcmVtKTtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ2NvbG9ycyc7XG5cbiR0ZXh0LWxnOiAxLjA2MjVyZW07XG4kdGV4dC14LWxnOiAxLjdyZW07XG4kdGV4dC1zbTogMC43NXJlbTtcbiR0ZXh0LXgtc206ICAwLjc1cmVtO1xuJHRleHQteHgtc206ICAwLjYyNXJlbTtcbiRoZWFkZXJIZWlnaHQ6IDRyZW07XG5cbi8vIGZvbnRzXG4kcHJpbWFyeS1mb250OiAnQXZlbmlyIE5leHQgUmVndWxhcicsICdIZWx2ZXRpY2EnLCBzYW5zLXNlcmlmO1xuJHByaW1hcnktZm9udC1ib2xkOiAnQXZlbmlyIE5leHQgRGVtaSBCb2xkJywgJ0hlbHZldGljYSBOZXVlIEJvbGQnLCBzYW5zLXNlcmlmO1xuXG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _classes_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/base */ "./src/app/classes/base.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.activeSelection = null;
        this.isOpen = false;
        this.allLocations = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://s3.amazonaws.com/br-codingexams/restaurants.json').subscribe(function (res) {
            _this.locations = res['restaurants'].map(function (rest) { return new _classes_base__WEBPACK_IMPORTED_MODULE_3__["Restaurant"](rest); });
        });
    };
    AppComponent.prototype.toggleFullMap = function () {
        this.clearSelections();
        this.allLocations ? this.closePanel() : this.openPanel();
        this.allLocations = !this.allLocations;
    };
    AppComponent.prototype.openPanel = function () {
        this.isOpen = true;
    };
    AppComponent.prototype.closePanel = function () {
        this.isOpen = false;
    };
    AppComponent.prototype.clearSelections = function () {
        for (var i in this.locations) {
            this.locations[i].selected = false;
        }
    };
    AppComponent.prototype.toggleLocation = function (target) {
        this.clearSelections();
        if (target !== this.activeSelection || !this.isOpen) {
            this.activeSelection = target;
            this.openPanel();
        }
        else if ((target === this.activeSelection) && this.isOpen) {
            this.closePanel();
        }
        this.allLocations = false;
        target.selected = true;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _components_side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/side-panel/side-panel.component */ "./src/app/components/side-panel/side-panel.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_side_panel_side_panel_component__WEBPACK_IMPORTED_MODULE_7__["SidePanelComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAQrtEK-XD6oe3PYrqQkWrCxjJhNolk-8o'
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/base.ts":
/*!*********************************!*\
  !*** ./src/app/classes/base.ts ***!
  \*********************************/
/*! exports provided: Contact, Location, Restaurant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Restaurant", function() { return Restaurant; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());

var Location = /** @class */ (function () {
    function Location() {
    }
    return Location;
}());

var Restaurant = /** @class */ (function () {
    function Restaurant(source) {
        this.selected = false;
        if (source) {
            lodash__WEBPACK_IMPORTED_MODULE_0__["merge"](this, source);
        }
    }
    return Restaurant;
}());



/***/ }),

/***/ "./src/app/components/side-panel/side-panel.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/side-panel/side-panel.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@panelState]=\"isOpen ?   'hide' : 'show'\" id=\"side-panel\">\n\n    <agm-map\n            [latitude]=\"location?.location?.lat\"\n            [longitude]=\"location?.location?.lng\"\n            [zoom]=\"zoomLevel\"\n            [fitBounds]=\"true\"\n            [streetViewControl]=\"false\"\n            [zoomControl]=\"false\"\n            maxZoom=\"15\"\n            [streetViewControlOptions]=\"false\"\n    >\n        <ng-container *ngFor=\"let location of locations\">\n            <agm-marker\n                    [latitude]=\"location?.location.lat\"\n                    [longitude]=\"location?.location.lng\"\n                    [title]=\"location?.name\"\n                    [agmFitBounds]=\"location.selected || allLocations\"\n                    [visible]=\"location.selected || allLocations\"\n                    [iconUrl]=\"'assets/images/marker.png'\"\n                    class=\"flex-1\"\n            >\n                <agm-info-window\n                    [isOpen]=\"location?.selected\"\n                >\n                    <article class=\"marker-info\">\n                        <header class=\"flex flex-align-center\">\n                            <img [src]=\"location?.backgroundImageURL\" [alt]=\"location?.name\"/>\n                            <h1 class=\"\">{{location?.name}}</h1>\n                        </header>\n                        <footer class=\"flex flex-align-center flex-space-between pt3 text-small-x\">\n                            <a [href]=\"location?.contact?.phone\">{{location?.contact?.formattedPhone}}</a>\n                            <span class=\"pl3\">{{location?.category}}</span>\n                        </footer>\n                    </article>\n                </agm-info-window>\n            </agm-marker>\n        </ng-container>\n    </agm-map>\n    <section class=\"color-bg-2 white p3 flex flex-justify-center flex-column title-container\">\n        <h1 class=\"font-secondary\">\n            {{ allLocations ? 'Restaurants' : details?.name}}\n        </h1>\n        <p class=\"text-small\" *ngIf=\"!allLocations\">{{details?.category}}</p>\n    </section>\n    <section class=\"py3 color-bg-white flex-1 scroll-container\">\n        <ng-container *ngFor=\"let restaurant of locations; let id = $index\" >\n            <article *ngIf=\"allLocations || (!allLocations && restaurant.selected)\"  class=\"py3 pl3 pointer\"\n                     [ngClass]=\"{'selected': allLocations && restaurant.selected, 'border-bottom' : allLocations}\"\n                     (click)=\"updateSelection(restaurant)\">\n                <h1 class=\"font-bold pb3\" *ngIf=\"allLocations\">{{restaurant?.name}}</h1>\n                <p class=\"pb5\">\n                    {{restaurant?.location.address}}<br>\n                    {{restaurant?.location.city}}, {{restaurant?.location.state}} {{restaurant?.location.postalCode}}\n                </p>\n                <p class=\"pb5\">{{restaurant?.contact?.formattedPhone}}</p>\n                <p *ngIf=\"restaurant?.contact?.twitter\">@{{restaurant?.contact?.twitter}}</p>\n            </article>\n        </ng-container>\n    </section>\n</div>\n"

/***/ }),

/***/ "./src/app/components/side-panel/side-panel.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/side-panel/side-panel.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ------------------------------------\n   Colors\n-------------------------------------- */\n/deep/ .sebm-google-map-container {\n  height: 11.25rem; }\n/deep/ .sebm-google-map-container .marker-info img {\n    border-radius: 50%;\n    width: 3rem;\n    height: 3rem;\n    display: inline;\n    float: left;\n    margin-right: 1rem; }\n#side-panel {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  right: 0;\n  top: 4rem;\n  z-index: 5;\n  width: 100%;\n  max-width: 24rem;\n  box-shadow: 0.02em 0 2em 0 rgba(0, 0, 0, 0.3);\n  height: calc(100% - 3rem);\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  -webkit-transform: translateX(106%);\n          transform: translateX(106%); }\n#side-panel .title-container {\n    min-height: 60px;\n    box-sizing: border-box; }\n#side-panel .scroll-container article.selected {\n    background-color: #34B379;\n    color: #FFFFFF; }\n@media only screen and (max-device-width: 1024px) and (orientation: portrait) {\n    #side-panel {\n      max-width: 20rem; } }\n@media only screen and (max-width: 400px) {\n    #side-panel {\n      max-width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmlmZml0aGovc2l0ZXMvYnItZXhhbS9zcmMvc3R5bGVzL2Jhc2UvX2NvbG9ycy5zY3NzIiwiL1VzZXJzL2dyaWZmaXRoai9zaXRlcy9ici1leGFtL3NyYy9hcHAvY29tcG9uZW50cy9zaWRlLXBhbmVsL3NpZGUtcGFuZWwuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvZ3JpZmZpdGhqL3NpdGVzL2JyLWV4YW0vc3JjL3N0eWxlcy9iYXNlL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7eUNBRXlDO0FDQXpDO0VBQ0UsaUJBQWdCLEVBWWpCO0FBYkQ7SUFLTSxtQkFBa0I7SUFDbEIsWUFBVztJQUNYLGFBQVk7SUFDWixnQkFBZTtJQUNmLFlBQVc7SUFDWCxtQkFBa0IsRUFDbkI7QUFJTDtFQUNFLGdCQUFlO0VBQ2YsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixRQUFPO0VBQ1AsU0FBUTtFQUNSLFVDaEJpQjtFRGlCakIsV0FBVTtFQUNWLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsOENBQTBDO0VBQzFDLDBCQUF5QjtFQUN6Qix5QkFBZ0I7S0FBaEIsc0JBQWdCO1VBQWhCLGlCQUFnQjtFQUNoQixvQ0FBMkI7VUFBM0IsNEJBQTJCLEVBa0I1QjtBQS9CRDtJQWdCSSxpQkFBZ0I7SUFDaEIsdUJBQXNCLEVBQ3ZCO0FBbEJIO0lBcUJNLDBCRC9CYztJQ2dDZCxlRGxDUyxFQ21DWjtBQUVEO0lBekJGO01BMEJJLGlCQUFnQixFQUtuQixFQUFBO0FBSEM7SUE1QkY7TUE2Qk0sZ0JBQWUsRUFFcEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1wYW5lbC9zaWRlLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICBDb2xvcnNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8vIFNwZWNpZmljIGNvbG9ycy5cbiR3aGl0ZTogI0ZGRkZGRjtcbiRncmVlbjogIzQzRTg5NTtcbiRncmVlbi1kYXJrOiAjMzRCMzc5O1xuXG4vLyBBYnN0cmFjdGVkIGNvbG9ycy5cbiRjb2xvci1hY2NlbnQtMTogJGdyZWVuO1xuJGNvbG9yLWFjY2VudC0yOiAkZ3JlZW4tZGFyaztcbiIsIkBpbXBvcnQgJ35zcmMvc3R5bGVzL2Jhc2UvdmFyaWFibGVzJztcblxuL2RlZXAvIC5zZWJtLWdvb2dsZS1tYXAtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMS4yNXJlbTtcblxuICAubWFya2VyLWluZm8ge1xuICAgIGltZyB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB3aWR0aDogM3JlbTtcbiAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cbiAgfVxufVxuXG4jc2lkZS1wYW5lbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogJGhlYWRlckhlaWdodDtcbiAgei1pbmRleDogNTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMjRyZW07XG4gIGJveC1zaGFkb3c6IC4wMmVtIDAgMmVtIDAgcmdiYSgwLDAsMCwgMC4zKTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzcmVtKTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwNiUpO1xuXG4gIC50aXRsZS1jb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIC5zY3JvbGwtY29udGFpbmVyIGFydGljbGUuc2VsZWN0ZWQgIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1hY2NlbnQtMjtcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uIDogcG9ydHJhaXQpIHtcbiAgICBtYXgtd2lkdGg6IDIwcmVtO1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuXG4iLCJAaW1wb3J0ICdjb2xvcnMnO1xuXG4kdGV4dC1sZzogMS4wNjI1cmVtO1xuJHRleHQteC1sZzogMS43cmVtO1xuJHRleHQtc206IDAuNzVyZW07XG4kdGV4dC14LXNtOiAgMC43NXJlbTtcbiR0ZXh0LXh4LXNtOiAgMC42MjVyZW07XG4kaGVhZGVySGVpZ2h0OiA0cmVtO1xuXG4vLyBmb250c1xuJHByaW1hcnktZm9udDogJ0F2ZW5pciBOZXh0IFJlZ3VsYXInLCAnSGVsdmV0aWNhJywgc2Fucy1zZXJpZjtcbiRwcmltYXJ5LWZvbnQtYm9sZDogJ0F2ZW5pciBOZXh0IERlbWkgQm9sZCcsICdIZWx2ZXRpY2EgTmV1ZSBCb2xkJywgc2Fucy1zZXJpZjtcblxuIl19 */"

/***/ }),

/***/ "./src/app/components/side-panel/side-panel.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/side-panel/side-panel.component.ts ***!
  \***************************************************************/
/*! exports provided: SidePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidePanelComponent", function() { return SidePanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _classes_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../classes/base */ "./src/app/classes/base.ts");




var SidePanelComponent = /** @class */ (function () {
    function SidePanelComponent() {
        this.isOpen = false;
        this.allLocations = false;
        this.zoomLevel = 18;
    }
    SidePanelComponent.prototype.ngOnInit = function () {
    };
    SidePanelComponent.prototype.clearSelections = function () {
        for (var i in this.locations) {
            this.locations[i].selected = false;
        }
    };
    SidePanelComponent.prototype.updateSelection = function (target) {
        this.clearSelections();
        target.selected = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _classes_base__WEBPACK_IMPORTED_MODULE_3__["Restaurant"])
    ], SidePanelComponent.prototype, "details", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidePanelComponent.prototype, "locations", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidePanelComponent.prototype, "isOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidePanelComponent.prototype, "allLocations", void 0);
    SidePanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-panel',
            template: __webpack_require__(/*! ./side-panel.component.html */ "./src/app/components/side-panel/side-panel.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('panelState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translateX(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translateX(106%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms ease-in-out'))
                ])
            ],
            styles: [__webpack_require__(/*! ./side-panel.component.scss */ "./src/app/components/side-panel/side-panel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidePanelComponent);
    return SidePanelComponent;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/griffithj/sites/br-exam/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map