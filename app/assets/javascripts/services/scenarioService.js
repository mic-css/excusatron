(function() {
  'use strict';

  angular
    .module('alibot')
    .service("scenarioService", ['apiService', function(apiService) {
      var self = this;
      self.scenarioId = {};
      self.baseUrl = "http://localhost:3000/scenarios/";

      self.getScenarios = function () {
        return apiService.get(self.baseUrl);
      };

      self.getExcuses = function (scenarioId) {
        return apiService.get(self.baseUrl + scenarioId + '/excuses');
      };
    }]);
}());
