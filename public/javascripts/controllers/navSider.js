'use strict'

angular.module('navSider', [])
.controller("navSiderCtrl", function ($http, $scope, $location,Data) {
    $scope.show = false;
    $scope.$on("MenuClickFromGlobal",
    function (event, id) {
        $http.get(Data.url+"/api/Menu/" + id)
       .success(function (response) {
           //默认第一条数据active样式
           if (response.length > 0) {
               $scope.show = true;
               response[0].active = true;
               $location.path(response[0].url);
           }
           else {
               $scope.show = false;
           }
           $scope.list = response;
       });
    });
   
   
    $scope.onclick = function (index) {
        for (var i = 0; i < $scope.list.length; i++) {
            $scope.list[i].active = false;
        }
        $scope.list[index].active = true;
    }
});
