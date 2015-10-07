angular.module('moduleApp.service.module', [])
    .service('ModuleService', ["$http", function($http) {
        var memoryModules = [];

        this.getModules = function(callback) {
            return $http.get("/app/db/modules.json").success(function(result){
                if(callback) {
                    callback(memoryModules.concat(result));
                }
            });
        };

        this.getModule = function(moduleId) {
            return $http.get("/app/db/modules/" + moduleId + ".json");
        };

        this.generateId = function () {
            return '_' + Math.random().toString(36).substr(2, 9);
        };

        this.saveModule = function(module) {
            memoryModules.push(module);
        }
    }]);