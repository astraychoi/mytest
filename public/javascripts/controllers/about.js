'use strict'

angular.module('myapp.about', ["ngRoute"])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/about", {
        templateUrl: "/partials/about.html",
        controller: "aboutCtrl"
    });
}])
.controller("aboutCtrl", function ($scope) {

});
