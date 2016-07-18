"use strict";
var User = (function () {
    function User(name, email, status, location, created, phone, ratings, image) {
        this.name = name;
        this.email = email;
        this.status = status;
        this.location = location;
        this.created = created;
        this.phone = phone;
        this.ratings = ratings;
        this.image = image;
        this.id = new Date().getTime();
        this.name = '';
        this.email = '';
        this.status = 'inactive';
        this.location = '';
        this.created = new Date();
        this.phone = '';
        this.ratings = 0;
        this.image = 'http://placehold.it/50x50';
    }
    return User;
}());
exports.User = User;
