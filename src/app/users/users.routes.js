"use strict";
var auth_guard_1 = require('../auth/auth.guard');
var users_component_1 = require('./users.component');
exports.UsersRoutes = [
    { path: 'users', component: users_component_1.UsersComponent, canActivate: [auth_guard_1.AuthGuard] }
];
