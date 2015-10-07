angular.module('myApp.view2', ['ngRoute', 'processJSONFile', 'moduleDirectives'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2/:moduleId', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl',
    resolve: {
      "module" : function($q, $route, processJSONFileService){
        {
          var module = $q.defer();
          processJSONFileService.openJSONFile(
              '/app/db/modules/' + $route.current.params.moduleId + '.json'
          ).success(
              function (response) {
                module.resolve(response);
              }
          )
          return module.promise;
        }
      }
    }
  });
}])

.controller('View2Ctrl', ['$scope', 'module', '$anchorScroll', function($scope, module) {
      $scope.module = module;
}]);