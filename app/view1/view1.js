angular.module('myApp.view1', ['ngRoute', 'processJSONFile', 'moduleDirectives'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'processJSONFileService',function($scope, processJSONFileService) {
      //open file contents
      processJSONFileService.openJSONFile('/app/db/modules.json').success(
          function (response){
          $scope.modules = response;
      });
}]);