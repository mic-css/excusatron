(function() {
  'use strict';

  angular
    .module('alibot')
    .controller("excusesController", ['$http', 'scenarioService', 'apiService', function($http, scenarioService, apiService) {
      var self = this;
      self.excuses = [];

      scenarioService.getExcuses(scenarioService.scenarioId)
        .then(function (response) {
          self.excuses = response.data;
        });

      // $http({
      //   method: 'GET',
      //   url: 'http://localhost:3000/scenarios/' + scenarioService.scenarioId + '/excuses'
      // }).then(function successCallback(response) {
      //   self.excuses = response.data;
      // });

    }]);
}());
