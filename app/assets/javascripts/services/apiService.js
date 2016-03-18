(function() {
  'use strict';

  angular.module('alibot')
    .service('apiService', function ($http) {
      var self = this;

      this.get = function (url) {
        return $http.get(url)
        .then(function(response){
          return response;
        });
      };
    });
}());
