// TODO: add /import User model
"use strict";
var Session = (function () {
    function Session(authService) {
        this.authService = authService;
        this.version = 1;
        this.authenticationtoken = null;
        console.log('Session constructor ..', authService);
    }
    Session.prototype.loadEssentialData = function (callback) {
        /*this.User = new User();

        this.User.once("activated", function () {
            callback();
        }.bind(this));
        
        this.User.fetch({error: this.authError.bind(this)});*/
    };
    // Error on API, for example
    Session.prototype.authError = function () {
        this.logout();
    };
    Session.prototype.logout = function () {
        this.authService.logout();
        this.authenticationtoken = null;
        localStorage.removeItem('token');
        /*var r = /[^\/]*$/;
        var path = window.location.href.replace(r, '');
        window.location.href = path;*/
    };
    return Session;
}());
exports.Session = Session;
