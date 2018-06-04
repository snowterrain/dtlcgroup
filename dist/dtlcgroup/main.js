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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _test_page_test_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test-page/test-page.component */ "./src/app/test-page/test-page.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _event_calendar_event_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-calendar/event-calendar.component */ "./src/app/event-calendar/event-calendar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
    { path: 'test', component: _test_page_test_page_component__WEBPACK_IMPORTED_MODULE_2__["TestPageComponent"] },
    { path: 'events', component: _event_calendar_event_calendar_component__WEBPACK_IMPORTED_MODULE_4__["EventCalendarComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n    <div class=\"container\">\n      \n      <!-- a class=\"navbar-brand\" href=\"#\">డిట్రాయిట్ తెలుగు సాహితీ సమితి</a -->\n      <a class=\"navbar-brand\" href=\"#\"><img src=\"/assets/dtlclogo.jpg\"  class=\"img-responsive\" width=\"200\" height=\"50\"/></a>\n      <a class=\"navbar-brand\" href=\"#\">డిట్రాయిట్ తెలుగు సాహితీ సమితి</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\">\n        \n        </span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" href=\"#\">Home\n              <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">About</a>\n          </li>\n         \n          <li class=\"nav-item\">\n          <!--   <a class=\"nav-link\" href=\"#\">Membership</a> -->\n            <a  class=\"nav-link\" routerLink=\"/test\">Membership</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/events\" >Conferences</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\">Discussions</a>\n              </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Contact</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n<!-- <nav>\n    <a routerLink=\"/welcome\">Welcome</a>\n  <a routerLink=\"/test\">Dashboard</a>\n</nav> -->\n<router-outlet></router-outlet>\n\n\n      <!-- Footer -->\n      <footer class=\"py-5 bg-dark\">\n          <div class=\"container\">\n            <p class=\"m-0 text-center text-white\">Copyright &copy; DTLC Group 2017</p>\n          </div>\n          <!-- /.container -->\n        </footer>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'DTLC Group';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _test_page_test_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-page/test-page.component */ "./src/app/test-page/test-page.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _event_calendar_event_calendar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event-calendar/event-calendar.component */ "./src/app/event-calendar/event-calendar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//calendar module


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _test_page_test_page_component__WEBPACK_IMPORTED_MODULE_3__["TestPageComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"],
                _event_calendar_event_calendar_component__WEBPACK_IMPORTED_MODULE_6__["EventCalendarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/event-calendar/event-calendar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/event-calendar/event-calendar.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.inner {\r\n    padding-top: 100px;\r\n    }"

/***/ }),

/***/ "./src/app/event-calendar/event-calendar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/event-calendar/event-calendar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative  inner\">\n\n\n\n<mwl-calendar-month-view\n  [viewDate]=\"viewDate\"\n  [events]=\"events\"\n  [activeDayIsOpen]=\"true\"\n  (beforeViewRender)=\"beforeMonthViewRender($event)\">\n</mwl-calendar-month-view>\n\n\n</div>\n \n<!-- \n <mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div class=\"alert alert-info\">\n  <div [ngSwitch]=\"view\">\n    <span *ngSwitchCase=\"'month'\">Click on a month label to change the view to that month.</span>\n    <span *ngSwitchCase=\"'week'\">Click on a day header to change the view to that day.</span>\n    <span *ngSwitchCase=\"'day'\">There is no other view to navigate to.</span>\n  </div>\n</div>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    (dayClicked)=\"viewDate = $event.day.date; view = 'day'\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    (dayHeaderClicked)=\"viewDate = $event.day.date; view = 'day'\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-day-view>\n</div> -->"

/***/ }),

/***/ "./src/app/event-calendar/event-calendar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/event-calendar/event-calendar.component.ts ***!
  \************************************************************/
/*! exports provided: EventCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCalendarComponent", function() { return EventCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/colors */ "./src/app/utils/colors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventCalendarComponent = /** @class */ (function () {
    function EventCalendarComponent() {
        this.view = 'month';
        this.viewDate = new Date();
        this.events = [
            {
                title: 'Increments badge total on the day cell',
                color: _utils_colors__WEBPACK_IMPORTED_MODULE_1__["colors"].yellow,
                start: new Date(),
                meta: {
                    incrementsBadgeTotal: true
                }
            },
            {
                title: 'Does not increment the badge total on the day cell',
                color: _utils_colors__WEBPACK_IMPORTED_MODULE_1__["colors"].blue,
                start: new Date(),
                meta: {
                    incrementsBadgeTotal: false
                }
            }
        ];
    }
    EventCalendarComponent.prototype.ngOnInit = function () {
    };
    EventCalendarComponent.prototype.beforeMonthViewRender = function (_a) {
        var body = _a.body;
        body.forEach(function (day) {
            day.badgeTotal = day.events.filter(function (event) { return event.meta.incrementsBadgeTotal; }).length;
        });
    };
    EventCalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-calendar',
            template: __webpack_require__(/*! ./event-calendar.component.html */ "./src/app/event-calendar/event-calendar.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./event-calendar.component.css */ "./src/app/event-calendar/event-calendar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventCalendarComponent);
    return EventCalendarComponent;
}());

/*
@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'template.html'
})
export class DemoComponent {
 
}
 */


/***/ }),

/***/ "./src/app/test-page/test-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/test-page/test-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test-page/test-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/test-page/test-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  test-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/test-page/test-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/test-page/test-page.component.ts ***!
  \**************************************************/
/*! exports provided: TestPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageComponent", function() { return TestPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestPageComponent = /** @class */ (function () {
    function TestPageComponent() {
    }
    TestPageComponent.prototype.ngOnInit = function () {
    };
    TestPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-page',
            template: __webpack_require__(/*! ./test-page.component.html */ "./src/app/test-page/test-page.component.html"),
            styles: [__webpack_require__(/*! ./test-page.component.css */ "./src/app/test-page/test-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestPageComponent);
    return TestPageComponent;
}());



/***/ }),

/***/ "./src/app/utils/colors.ts":
/*!*********************************!*\
  !*** ./src/app/utils/colors.ts ***!
  \*********************************/
/*! exports provided: colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};


/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <!-- Navigation -->\n    \n    <!-- Page Content -->\n    <div class=\"container\">\n\n      <!-- Heading Row -->\n      <div class=\"row my-4\">\n        <div class=\"col-lg-8\">\n          <!--img class=\"img-fluid rounded\" src=\"http://placehold.it/900x400\" alt=\"\"-->\n         \n                \n<!--Carousel Wrapper-->\n<div id=\"carousel-example-2\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n    <!--Indicators-->\n    <ol class=\"carousel-indicators\">\n        <li data-target=\"#carousel-example-2\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#carousel-example-2\" data-slide-to=\"1\"></li>\n        <li data-target=\"#carousel-example-2\" data-slide-to=\"2\"></li>\n    </ol>\n    <!--/.Indicators-->\n    <!--Slides-->\n    <div class=\"carousel-inner\" role=\"listbox\">\n        <div class=\"carousel-item active\">\n            <div class=\"view\">\n                <img class=\"d-block w-100\" src=\"/assets/1.jpg\" alt=\"First slide\">\n                <div class=\"mask rgba-black-light\"></div>\n            </div>\n            <div class=\"carousel-caption\">\n                <h3 class=\"h3-responsive\">Event 1</h3>\n                <p>First text</p>\n            </div>\n        </div>\n        <div class=\"carousel-item\">\n            <!--Mask color-->\n            <div class=\"view\">\n                <img class=\"d-block w-100\" src=\"/assets/2.jpg\" alt=\"Second slide\">\n                <div class=\"mask rgba-black-strong\"></div>\n            </div>\n            <div class=\"carousel-caption\">\n                <h3 class=\"h3-responsive\">Event 2</h3>\n                <p>Secondary text</p>\n            </div>\n        </div>\n        <div class=\"carousel-item\">\n            <!--Mask color-->\n            <div class=\"view\">\n                <img class=\"d-block w-100\" src=\"/assets/3.jpg\" alt=\"Third slide\">\n                <div class=\"mask rgba-black-slight\"></div>\n            </div>\n            <div class=\"carousel-caption\">\n                <h3 class=\"h3-responsive\">Event 3</h3>\n                <p>Third text</p>\n            </div>\n        </div>\n    </div>\n    <!--/.Slides-->\n    <!--Controls-->\n    <a class=\"carousel-control-prev\" href=\"#carousel-example-2\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carousel-example-2\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n    </a>\n    <!--/.Controls-->\n</div>\n<!--/.Carousel Wrapper-->\n\n        </div>\n        <!-- /.col-lg-8 -->\n        <div class=\"col-lg-4\">\n          <h1>Detroit Telugu Literary Club</h1>\n          <p>\n              News\n              Any special news pertaining to DTLC or Telugu literature in general.\n              \n              A splash of the DTLC 20th Anniversary conference could also be displayed here with links to the page for conferences\n              \n\n          </p>\n                 <a class=\"btn btn-primary btn-lg\" href=\"#\">Call to Action!</a>\n        </div>\n        <!-- /.col-md-4 -->\n      </div>\n      <!-- /.row -->\n\n      <!-- Call to Action Well -->\n      <div class=\"card text-white bg-secondary my-4 text-center\">\n        <div class=\"card-body\">\n          <p class=\"text-red m-0\">తెలుగు చదవండి, చదివించండి, మాట్లాడండి</p>\n        </div>\n      </div>\n\n      <!-- Content Row -->\n      <div class=\"row\">\n        <div class=\"col-md-4 mb-4\">\n          <div class=\"card h-100\">\n            <div class=\"card-body\">\n              <h2 class=\"card-title\">Card One</h2>\n              <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>\n            </div>\n            <div class=\"card-footer\">\n              <a href=\"#\" class=\"btn btn-primary\">More Info</a>\n            </div>\n          </div>\n        </div>\n        <!-- /.col-md-4 -->\n        <div class=\"col-md-4 mb-4\">\n          <div class=\"card h-100\">\n            <div class=\"card-body\">\n              <h2 class=\"card-title\">Card Two</h2>\n              <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.</p>\n            </div>\n            <div class=\"card-footer\">\n              <a href=\"#\" class=\"btn btn-primary\">More Info</a>\n            </div>\n          </div>\n        </div>\n        <!-- /.col-md-4 -->\n        <div class=\"col-md-4 mb-4\">\n          <div class=\"card h-100\">\n            <div class=\"card-body\">\n              <h2 class=\"card-title\">Card Three</h2>\n              <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>\n            </div>\n            <div class=\"card-footer\">\n              <a href=\"#\" class=\"btn btn-primary\">More Info</a>\n            </div>\n          </div>\n        </div>\n        <!-- /.col-md-4 -->\n\n      </div>\n      <!-- /.row -->\n\n    </div>\n    <!-- /.container -->\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! C:\java\siva\dtlcgroup\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map