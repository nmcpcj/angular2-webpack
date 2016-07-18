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
var application_1 = require('../common/application');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var MenuComponent = (function () {
    function MenuComponent(router, _application) {
        this.router = router;
        this._application = _application;
        this.componentName = 'MenuComponent';
        this.active = '';
        this.menus = [
            { name: 'users', target: 'users' }
        ];
    }
    MenuComponent.prototype.ngOnInit = function () {
        // remove hash from router name
        this.active = this.router.url.replace(/[^A-Z0-9]+/ig, "");
    };
    MenuComponent.prototype.ngOnDestroy = function () { };
    MenuComponent.prototype.menuSelect = function (name) { };
    MenuComponent.prototype.logout = function () {
        console.log('logout here ..', this._application);
        this._application.session.logout();
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'app-menu',
            directives: [router_1.ROUTER_DIRECTIVES],
            templateUrl: './menu.component.html',
            styles: [require('./menu.component.scss').toString()]
        }), 
        __metadata('design:paramtypes', [router_1.Router, application_1.Application])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
