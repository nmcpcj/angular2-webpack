"use strict";
var config_1 = require('./config');
var session_1 = require('./session');
var Application = (function () {
    function Application() {
        this.version = 1;
        this.authentication = true;
        console.log('Application constructor ..');
    }
    Application.prototype.init = function (authService) {
        // Load configs
        this.api = config_1.APP_DATA.apiurl;
        this.session = new session_1.Session(authService);
        if (this.authentication) {
            this.authenticate();
            this.loadUserData();
        }
        else
            this.begin();
    };
    // Oauth2 Authentication
    Application.prototype.authenticate = function () {
        var token = window.localStorage.getItem('token');
        //Check if there is authentication
        if (token && token.length > 9) {
            this.session.authenticationtoken = token;
        }
        else {
            console.log("token error", token);
            window.location.href = window.location.pathname + "login.html";
        }
    };
    // Get User data after authentication;
    Application.prototype.loadUserData = function () {
        var _this = this;
        this.session.loadEssentialData(function () {
            _this.begin();
        });
    };
    // Callbak function after user authentication
    Application.prototype.begin = function () {
        $('body').addClass('loaded').removeClass('loading');
        // Root view
        /*Application.RootView = new RootView();
        Application.RootView.renderNav();

        // Init roles
        Application.RootView.initRoles();

        // Router
        Application.Router = new Router ();

        Backbone.history.start();*/
    };
    return Application;
}());
exports.Application = Application;
