alibot.controller("scenarioController", ['$http', function($http){
  var self = this;
  self.buttonDisplay = true;

  self.excuse = function(name) {
    self.loaded = true;
    self.buttonDisplay = false;
    self.name = name
  };

  self.return = function() {
    self.loaded = false;
    self.buttonDisplay = true;
  };
}]);
