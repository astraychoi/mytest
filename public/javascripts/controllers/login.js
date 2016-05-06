'use strict'

angular.module('myapp.login', [])
.controller("ModalInstanceCtrl", function ($scope, $uibModalInstance, $http,Data) {
    $scope.loginname = "choi";
    $scope.password = "123456";
    $scope.signIn = function () {
        $http.get(Data.url+"/api/user/?username=" + $scope.loginname + "&password=" + $scope.password)
        .success(function (response) {
            if (response.error == null) {
                $uibModalInstance.close(response.data);
            }
            else {
                alert(response.error);
            }
        });
    }
});
