angular.module('moduleApp.directive.module-detail', ['moduleApp.directive.tabs'])
    .directive('moduleDetail', function () {
        return {
            restrict: 'E',
            scope: {
                module:"="
            },
            templateUrl: "components/directive/module-detail-directive.html"
        };
    });