angular.module('moduleApp.detail', ['ngRoute', 'moduleApp.service.module', 'moduleApp.directive.module-detail'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/detail/:moduleId', {
            templateUrl: 'partials/detail/detail.html',
            controller: 'DetailCtrl',
            resolve: {
                module: function( $q, $route, ModuleService) {
                    var module = $q.defer();
                    ModuleService.getModule($route.current.params.moduleId).success(function(moduleData){
                        module.resolve(moduleData);
                    }).error(function() {
                        module.reject("module_not_found");
                    });
                    return module.promise;
                }
            }
        });
    }])

    .controller('DetailCtrl', ['$scope', 'module', function($scope, module) {
        $scope.module = module;
    }]);