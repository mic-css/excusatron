(function() {
  'use strict';

  angular.module('alibot')
    .controller("scenariosController", ['excusesService',function(excusesService){
      var self = this;
      self.buttons = excusesService.getExcuses().then(function(response){
        return response.data.title;
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
      };}]
    );
}());
