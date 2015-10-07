
   var processJSONApp = angular.module('processJSONFile', []);
   var ProcessJSONFileService = function($http){

      this.openJSONFile = function(filePath){
         return $http.get(filePath)
      }
   }
   processJSONApp.service("processJSONFileService", ProcessJSONFileService);
