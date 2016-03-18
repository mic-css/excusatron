(function() {
  'use strict';

  angular
    .module('alibot')
    .controller("excusesController", ['$http', 'scenarioService', 'apiService', function($http, scenarioService, apiService) {
      var self = this;
      self.excuses = [];
      // self.myCheck = {1: false, 2: false, 3: false};

      scenarioService.getExcuses(scenarioService.scenarioId)
        .then(function (response) {
          self.excuses = response.data;
        });

      // self.expansionsToggle = function(id){
      //   self.myCheck[id] = !self.myCheck[id];
      //
      // };

      // $http({
      //   method: 'GET',
      //   url: 'http://localhost:3000/scenarios/' + scenarioService.scenarioId + '/excuses'
      // }).then(function successCallback(response) {
      //   self.excuses = response.data;
      // });

    }]);
}());
