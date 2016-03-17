(function() {
  'use strict';
angular
    .module('alibot')
    .controller("scenariosController", ['$http', 'scenarioService', 'apiService', function($http, scenarioService, apiService) {
      var self = this;
      self.scenarios = [];
      // scenarioService.scenario = {};

      self.selectScenario = selectScenario;

      apiService.getScenarios()
      .then(function(response){
        self.scenarios = response.data;
      })
      // $http({
      //   method: 'GET',
      //   url: 'http://localhost:3000/scenarios'
      // }).then(function successCallback(response) {
      //   self.scenarios = response.data;
      // });

      function selectScenario(id) {
        scenarioService.scenarioId = id;
      }
    }]);

}());
