(function() {
  'use strict';

  angular
    .module('alibot')
    .service("chosenScenarioService", ['$http', function($http) {
    var self = this;
    self.chosenScenario = {};
  }]);
}());
