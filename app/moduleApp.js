'use strict';

// Declare app level module which depends on views, and components
angular.module('moduleApp', [
  'ngRoute',
  'moduleApp.list',
  'moduleApp.detail',
  'moduleApp.service.module'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/list'});
}]);
