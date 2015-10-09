angular.module('myApp.moduleListView', ['ngRoute', 'processJSONFile', 'moduleDirectives', 'moduleManagement'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'module-list-view/module-list-view.html',
    controller: 'ModuleListViewCtrl'
  });
}])

.controller('ModuleListViewCtrl', ['$scope', 'processJSONFileService', '$moduleManagementService', '$location',function($scope, processJSONFileService, $moduleManagementService, $location) {
        $scope.bestModule = {};
    $scope.getBestModule = function (){
        var best;
        angular.forEach($scope.modules, function(item, key){
            if(best === undefined){
                best = item;
            }else{
                if(best.score < item.score){
                    best = item;
                }
            }
        })
        if(best != undefined && "id" in best){
            processJSONFileService.openJSONFile('/app/db/modules/' + best.id + '.json').success(
                function (response){
                    $scope.bestModule = response;
                });
        }else if(best != undefined){
            $scope.bestModule = best;
        }


    };
    //update best module when module list changes
        $scope.$watch('modules', function(){
            $scope.getBestModule();
        })
    $scope.modules = $moduleManagementService.getModules();
    //open file contents
    processJSONFileService.openJSONFile('/app/db/modules.json').success(
      function (response){
      $scope.modules = $scope.modules.concat(response);
    });
        $scope.redirectTo = function(path, param){
            $location.path(path + param);
        }
}]);