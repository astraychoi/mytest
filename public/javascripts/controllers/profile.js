'use strict'

angular.module('myapp.profile', ["ngRoute"])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/profile", {
        templateUrl: "/partials/profile.html",
        controller: "profileCtrl"
    });
}])
.controller("profileCtrl", function ($scope, $http,Data) {
    $http.get(Data.url+"/api/user/"+Data.user.id)
     .success(function (response) {
         $scope.user = response.data;
     });

    //更新数据
    $scope.save = function () {
        $http.put(Data.url+"/api/user",$scope.user)
             .success(function (response) {
                 //$scope.user = response.data;
                 if (response.error == null) {
                     alert("后台已获取到数据");
                 }
             });
    }
});
