(function() {
  'use strict';

  angular.module('alibot')
    .service('apiService', function ($http) {
      var self = this;
      self.baseUrl = "http://localhost:3000/scenarios/";

      this.getScenarios = function () {
        return $http.get(self.baseUrl)
        .then(function(response){
          return response;
        })
      };
      this.getExcuses = function (scenarioId) {
        return $http.get(self.baseUrl + scenarioId + '/excuses')
        .then(function(response){
          return response;
        })
      };


    });

}());
