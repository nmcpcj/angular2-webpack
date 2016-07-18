"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var config_1 = require('../../common/config');
var core_1 = require('@angular/core');
var auth_service_1 = require('../auth.service');
var application_1 = require('../../common/application');
var platform_browser_1 = require('@angular/platform-browser');
var LoginComponent = (function () {
    function LoginComponent(authService, _application, sanitizer) {
        this.authService = authService;
        this._application = _application;
        this.loginUrl = "http://www.google.com";
        this.setMessage();
        this.hasToken();
    }
    LoginComponent.prototype.setloginwindow = function () {
        this.loginUrl = "";
        console.log('-->', config_1.APP_DATA.authurl + "login?response_type=token&client_id=" + config_1.APP_DATA.appid + "&redirect_uri=" + this.origin() + "/auth.html");
        //console.log(APP_DATA.authurl + "login?response_type=token&client_id=" + APP_DATA.appid + "&redirect_uri=" + this.origin() + "/auth.html);
        //$("iframe").get(0).src = APP_DATA.authurl + "login?response_type=token&state=xyz&client_id=" + APP_DATA.appid + "&redirect_uri=" + this.origin() + "/auth.html";
    };
    LoginComponent.prototype.hello = function () {
        this.authService.login();
        // init global application
        this._application.init(this.authService);
    };
    LoginComponent.prototype.hasToken = function () {
        // Authentication
        var token = window.localStorage.getItem('token');
        if (token && token.length > 9)
            this.hello();
        else {
            if (token)
                window.localStorage.removeItem('token');
            this.setloginwindow();
            window.addEventListener("message", this.receiveToken.bind(this), false);
        }
    };
    LoginComponent.prototype.receiveToken = function (event) {
        if (event.origin !== this.origin())
            return;
        if (event.data && event.data.length > 9) {
            window.localStorage.setItem('token', event.data);
            this.hello();
        }
        else
            this.setloginwindow();
    };
    // ----------
    LoginComponent.prototype.setMessage = function () {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    };
    /*login() {
      this.message = 'Trying to log in ...';
      this.authService.login().subscribe(() => {
        this.setMessage();
        if (this.authService.isLoggedIn) {
          // Todo: capture where the user was going and nav there.
          // Meanwhile redirect the user to main area
          this.router.navigate(['']);
        }
      });
    }*/
    /*logout() {
      this.authService.logout();
      this.setMessage();
    }*/
    LoginComponent.prototype.origin = function () {
        return (window.location.origin) ? window.location.origin : window.location.protocol + "//" + window.location.hostname;
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: './login.component.html',
            /*template: `
              <div class="login"><div class="app-card p-30">
              <h2>LOGIN</h2>
              <p>{{message}}</p>
              <p>
                <button class="btn btn-primary" (click)="login()"  *ngIf="!authService.isLoggedIn">Login</button>
                <button class="btn btn-primary" (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
              </p></div></div>`,*/
            styles: [require('./login.component.scss').toString()]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, application_1.Application, platform_browser_1.DomSanitizationService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
