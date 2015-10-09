angular.module('myApp.moduleDetailView', ['ngRoute', 'processJSONFile', 'moduleDirectives'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2/:moduleId', {
    templateUrl: 'module-detail-view/module-detail-view.html',
    controller: 'ModuleDetailViewCtrl',
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

.controller('ModuleDetailViewCtrl', ['$scope', 'module', '$anchorScroll', function($scope, module) {
      $scope.module = module;
}]);