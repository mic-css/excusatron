(function() {
  'use strict';

  angular
    .module('alibot')
    .controller("excusesController", ['$http', 'scenarioService', function($http, scenarioService) {
      var self = this;
      self.excuses = [];
      

      $http({
        method: 'GET',
        url: 'http://localhost:3000/scenarios/' + scenarioService.scenarioId + '/excuses'
      }).then(function successCallback(response) {
        self.excuses = response.data;
      });

    }]);
}());
