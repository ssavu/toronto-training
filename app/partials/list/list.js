angular.module('moduleApp.list', ['ngRoute', 'moduleApp.service.module', 'moduleApp.directive.module-detail'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/list', {
            templateUrl: 'partials/list/list.html',
            controller: 'ListCtrl'
        });
    }])

    .controller('ListCtrl', ['$scope', 'ModuleService', function($scope, ModuleService) {
        // get the list of modules
        ModuleService.getModules(function(modulesData){
            $scope.modules = modulesData;
            $scope.bestModule = $scope.modules[0];
            // get the best module base on the score
            angular.forEach($scope.modules, function(value, key){
                $scope.bestModule = $scope.bestModule.score > value.score ? $scope.bestModule : value;
            });

            // request the best module detail
            ModuleService.getModule($scope.bestModule.id).success(function(moduleDetailed){
                $scope.bestModule = moduleDetailed;
            })
        });

        // handle error on transition to module detail:
        $scope.$on("$routeChangeError", function (evt, current, previous, rejection) {
            if (rejection == "module_not_found") {
                alert("Module not found")
            }
        });
    }]);