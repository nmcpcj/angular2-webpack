"use strict";
// main entry point
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_routes_1 = require('./app/app.routes');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common'); // Add these symbols to override the `LocationStrategy`
var forms_1 = require('@angular/forms');
//import { BaseService } from './base.service';
var app_component_1 = require('./app/app.component');
var auth_service_1 = require('./app/auth/auth.service');
var application_1 = require('./app/common/application');
if (process.env.ENV)
    console.log('environment:', process.env.ENV);
if (process.env.ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    //BaseService,
    application_1.Application,
    auth_service_1.AuthService,
    app_routes_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
])
    .catch(function (err) { return console.error(err); });
