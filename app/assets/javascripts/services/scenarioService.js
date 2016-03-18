(function() {
  'use strict';

  angular
    .module('alibot')
    .service("scenarioService", ['$http', 'apiService', function($http, apiService) {
      var self = this;
      self.scenarioId = {};
      self.baseUrl = "http://localhost:3000/scenarios/";

      this.getScenarios = function () {
        return apiService.get(self.baseUrl);
      };
      this.getExcuses = function (scenarioId) {
        return $http.get(self.baseUrl + scenarioId + '/excuses');
      };
    }]);
}());
