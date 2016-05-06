'use strict'

angular.module('myapp', [
    'ngRoute',
    'ui.bootstrap',
    'global',
    'navBar',
    'navSider',
    'myapp.home',
    'myapp.about',
    'myapp.userapi',
    'myapp.login',
    'myapp.profile'
])
.config(['$routeProvider',function($routeProvider){
    $routeProvider.otherwise({ redirectTo: '' });
}])
.factory('Data', function () {
    return {
        user: null,
	url: 'http://127.0.0.1:3000'
    }
});
