'use strict'

angular.module('myapp.home', ["ngRoute"])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "/partials/home.html",
        controller: "homeCtrl"
    });
}])
.controller("homeCtrl", function ($scope, $http) {
   
});
