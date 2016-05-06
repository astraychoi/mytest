'use strict'

angular.module('navBar', ["ngRoute"])
.controller("navBarCtrl", function ($scope, $http, $location,Data) {
    $http.get(Data.url+"/api/menu/0")
    .success(function (response) {
      
        //默认第一条数据active样式
        if (response.length > 0) {
            response[0].active = true;
            if (response[0].url != "") {
                $location.path(response[0].url);
            }
        }
        $scope.Menus = response;
    });

    //点击事件
    $scope.onclick = function (index) {
        for (var i = 0; i < $scope.Menus.length; i++) {
            $scope.Menus[i].active = false;
        }
        $scope.Menus[index].active = true;
        
        if ($scope.Menus[index].url != "") {
            $scope.$emit("MenuClick", $scope.Menus[index].id, "1");
        }
        else {
            $scope.$emit("MenuClick", $scope.Menus[index].id, "2");
        }
    }
});
