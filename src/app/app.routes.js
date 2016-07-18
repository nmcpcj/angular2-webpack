"use strict";
var router_1 = require('@angular/router');
var login_routes_1 = require('./auth/login/login.routes');
var dashboard_routes_1 = require('./dashboard/dashboard.routes');
var users_routes_1 = require('./users/users.routes');
exports.routes = dashboard_routes_1.DashboardRoutes.concat(login_routes_1.LoginRoutes, users_routes_1.UsersRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes),
    login_routes_1.AUTH_PROVIDERS
];
