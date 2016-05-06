'use strict'

angular.module('myapp.userapi', ["ngRoute"])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/userapi", {
        templateUrl: "/partials/userapi.html",
        controller: "userapiCtrl"
    });
}])
.controller("userapiCtrl", function ($scope, $http) {
   
});
