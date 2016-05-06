'use strict'

angular.module('global', [])
.controller("globalCtrl", function ($scope, $uibModal, $http, Data) {
    //登录状态
    $scope.user = null;
    $scope.loginstatus = false;
    //检测是否登录
    $http.get(Data.url+"/api/onlineuser")
        .success(function (response) {
            if (response.error == null) {
                $scope.loginstatus = true;
                Data.user = response.data;
                $scope.user = Data.user;
            }
            else {
                //alert(response.error);
            }
        });

    //菜单点击事件
    $scope.$on("MenuClick",
     function (event, id, type) {
         //广播
         $scope.$broadcast("MenuClickFromGlobal", id);
         if (type == "1") {
             $scope.isFullPage = true;
         }
         else {
             $scope.isFullPage = false;
         }
     });

    //打开登陆页面弹窗
    $scope.open = function (size) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '/partials/login.html',
            controller: 'ModalInstanceCtrl',
            size: size
        });

        modalInstance.result.then(function (data) {
            Data.user =data;
            $scope.loginstatus = true;
            $scope.user = Data.user;
        }, function () {
           
        });
    }

    //设置
    $scope.setting = function () {
        $scope.$broadcast("MenuClickFromGlobal", 4);
        $scope.isFullPage = false;
    }

    //注销
    $scope.signout = function () {
        $http.delete(Data.url+"/api/onlineuser")
       .success(function () {
           $scope.loginstatus = false;
           $scope.user =null
       });
    }
});
