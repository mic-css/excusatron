(function() {
  'use strict';

  angular
    .module('alibot')
    .controller("excusesController", ['scenarioService', function(scenarioService) {
      var self = this;
      self.excuses = [];

      scenarioService.getExcuses(scenarioService.scenarioId)
        .then(function (response) {
          self.excuses = response.data;
        });
    }]);
}());
