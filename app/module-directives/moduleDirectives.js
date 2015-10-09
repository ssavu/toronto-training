
var directiveModuleApp = angular.module('moduleDirectives', []);

directiveModuleApp.directive('displayModuleSimple', function(){
    return {
        restrict: 'E',
        scope:{
            moduleSimpleItem: '=',
        },
        templateUrl: 'module-directives/templates/displayModuleSimple.html'
    }
}).directive('displayModuleDetail', function(){
    return {
        restrict: 'E',
        scope: {
            moduleDetail: '='
        },
        templateUrl: 'module-directives/templates/displayModuleDetail.html'
    }
}).directive('displayTabView', function(){
    return {
        restrict: 'E',
        scope: {
            displayableItems: '='
        },
        templateUrl: 'module-directives/templates/displayTabView.html',
        controller: function($scope){
            var initSelectedTab = false;
            $scope.$watch('displayableItems', function(newValue, oldValue){
                if(!initSelectedTab){
                    angular.forEach($scope.displayableItems, function(item,key){
                        if(!initSelectedTab) {
                            $scope.selectedTab = key;
                            initSelectedTab = true;
                        };

                    });
                }
            })
            $scope.onTabSelected = function(id){
                $scope.selectedTab = id;
            };
        }

    }
}).directive('currentTimeExample', ['$interval', 'dateFilter', function($interval, dateFilter){
    return{
        scope: {
            format: '='
        },
        controller: function($scope){

            $scope.date;
            $scope.$watch('format', function(value){
                $scope.date = dateFilter(new Date(), $scope.format);
            });
            timeoutId = $interval(function(){
                $scope.date = dateFilter(new Date(), $scope.format);
            }, 1000);
        },
        template: "{{date}}"
    }
}]);




























