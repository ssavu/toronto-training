angular.module("myApp.createModuleView", ['ngRoute','moduleManagement'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/createModule', {
            templateUrl: 'create-module-view/create-module-view.html',
            controller: 'CreateModuleController'
        }
    );
}])

.controller('CreateModuleController', ['$scope', '$moduleManagementService', '$location', function($scope, $moduleManagementService, $location){
    $scope.newModule = {};
    $scope.callCreateModule = function (){
            $moduleManagementService.createModule($scope.newModule);
            $location.path('/view1');
        }
}]);