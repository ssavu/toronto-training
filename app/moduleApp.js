'use strict';

// Declare app level module which depends on views, and components
angular.module('moduleApp', [
  'ngRoute',
  'moduleApp.list',
  'moduleApp.detail',
  'moduleApp.create'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/list'});
}]);
