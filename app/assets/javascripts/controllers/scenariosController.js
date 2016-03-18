(function() {
  'use strict';
angular
    .module('alibot')
    .controller("scenariosController", ['scenarioService', function(scenarioService) {
      var self = this;
      self.scenarios = [];

      scenarioService.getScenarios()
        .then(function(response){
          self.scenarios = response.data;
        });

      self.selectScenario = function (id) {
        scenarioService.scenarioId = id;
      };
    }]);
}());
