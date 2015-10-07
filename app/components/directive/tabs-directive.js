angular.module('moduleApp.directive.tabs', [])
    .directive('moduleTabs', function () {
        return {
            restrict: 'E',
            scope: {
                tabs:"="
            },
            templateUrl: "components/directive/tabs-directive.html",
            controller: function ($scope) {
                $scope.$watch("tabs", function(newVal, oldVal) {
                    if(newVal) {
                        angular.forEach($scope.tabs, function(value, key){
                            if(!$scope.activeTab) {
                                $scope.activeTab = key;
                            }
                        });
                    }
                });

                $scope.select = function(name) {
                    $scope.activeTab = name;
                };

                $scope.isSelected = function(name) {
                    return $scope.activeTab == name;
                };

                $scope.getSelectedTab = function() {
                    if($scope.tabs && $scope.activeTab){
                        return $scope.tabs[$scope.activeTab];
                    }
                }
            }
        };
    });