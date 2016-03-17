alibot.controller("scenarioController", ['$http', function($http){
  var self = this;
  self.buttons;

  $http.get('localhost/scenarios')
    .success(function(data){
      self.buttons = data;
    })
    .error(function(){
      self.buttons = "Load failure";
    });

  self.buttonDisplay = true;

  self.excuse = function(name) {
    self.loaded = true;
    self.buttonDisplay = false;
    self.name = name;
  };

  self.return = function() {
    self.loaded = false;
    self.buttonDisplay = true;
  };
}]);
