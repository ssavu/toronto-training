var moduleManagementApp = angular.module('moduleManagement', []);
var ModuleManagementService = function(){
    var modules = Array();
    this.createModule = function(newModule){
        modules.push(newModule);
    }
    this.getModules = function(){
        return modules;
    }
}
moduleManagementApp.service("$moduleManagementService", ModuleManagementService);
