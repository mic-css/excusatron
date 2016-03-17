(function() {
  'use strict';

  angular
    .module('alibot')
    .controller("scenariosController", [ '$http', function($http){
    var self = this;
    self.api = [];
    self.test = 'hello';

    $http({
      method: 'GET',
      url: 'http://localhost:3000/scenarios'
    }).then(function successCallback(response) {
      self.api = response.data;
    });



  }]);
}());
