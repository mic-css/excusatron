(function() {
  'use strict';

  angular
    .module('alibot')
    .controller("excusesController", ['$http', function($http){
      var self = this;

      $http({
        method: 'GET',
        url: 'http://localhost:3000/scenarios/' + scenarioId + '/excuses'
      }).then(function successCallback(response) {
        self.scenarios = response.data;
      });

    }]);
}());
