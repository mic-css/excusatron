(function() {
  'use strict';

  angular
    .module('alibot')
    .controller("excusesController", ['$http', 'scenarioService', function($http, scenarioService) {
      var self = this;
      self.test2 = scenarioService.scenarioId;

      // $http({
      //   method: 'GET',
      //   url: 'http://localhost:3000/scenarios/' + scenarioId + '/excuses'
      // }).then(function successCallback(response) {
      //   self.scenarios = response.data;
      // });

    }]);
}());
