angular.module('moduleApp.create', ['ngRoute', 'moduleApp.service.module'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/add', {
            templateUrl: 'partials/create/create.html',
            controller: 'CreateCtrl'
        });
    }])

    .controller('CreateCtrl', ['$scope', 'ModuleService', '$location', function($scope, ModuleService, $location) {
        $scope.module = {};
        $scope.saveModule = function(){
            $scope.module.id = ModuleService.generateId();
            ModuleService.saveModule($scope.module);
            $location.path("/list");
        }
    }]);