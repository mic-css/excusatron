(function() {
  'use strict';

  angular
    .module('alibot')
    .controller("scenariosController", [function(){
    var self = this;
    self.buttons = {};

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
}());
