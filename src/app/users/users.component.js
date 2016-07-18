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
var core_1 = require('@angular/core');
var users_service_1 = require('./users.service');
var menu_component_1 = require('../menu/menu.component');
var user_1 = require('./user');
var _ = require('lodash');
var UsersComponent = (function () {
    function UsersComponent(_service) {
        var _this = this;
        this.componentName = 'UsersComponent';
        this.users = [];
        this.error = false;
        this.insert = false;
        this.order = 'desc';
        _service.getData().subscribe(function (data) { _this.users = data; }, function (err) { _this.error = true; });
        this.newUser();
    }
    UsersComponent.prototype.newUser = function () {
        this.model = new user_1.User();
    };
    UsersComponent.prototype.add = function () {
        this.insert = !this.insert;
    };
    UsersComponent.prototype.delete = function (obj) {
        console.log(obj);
    };
    UsersComponent.prototype.onSubmit = function () {
        this.add();
        this.users.push(this.model);
        this.newUser();
        this.sort();
        console.log(this.users);
    };
    UsersComponent.prototype.sort = function () {
        this.users = _.orderBy(this.users, 'id', this.order);
    };
    Object.defineProperty(UsersComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'app-users',
            providers: [users_service_1.UsersService],
            directives: [menu_component_1.MenuComponent],
            templateUrl: './users.component.html',
            styles: [require('./users.component.scss').toString()]
        }), 
        __metadata('design:paramtypes', [users_service_1.UsersService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
