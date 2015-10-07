
var directiveModuleApp = angular.module('moduleDirectives', []);

directiveModuleApp.directive('displayModuleSimple', function(){
    return {
        restrict: 'E',
        scope:{
            moduleSimpleItem: '=',
        },
        templateUrl: 'displayModuleSimple.html'
    }
}).directive('displayModuleDetail', function(){
    return {
        restrict: 'E',
        scope: {
            moduleDetail: '='
        },
        templateUrl: 'displayModuleDetail.html'
    }
}).directive('displayTabView', function(){
    return {
        restrict: 'E',
        scope: {
            displayableItems: '='
        },
        templateUrl: 'displayTabView.html',
        controller: function($scope){
            initSelectedTab = false;
            angular.forEach($scope.displayableItems, function(item,key){
                if(!initSelectedTab) {
                    $scope.selectedTab = key;
                    initSelectedTab = true;
                };

            });
            $scope.onTabSelected = function(id){
                $scope.selectedTab = id;
            };
        }

    }
});

