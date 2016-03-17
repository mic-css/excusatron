(function() {
  'use strict';

  angular.module('alibot')
    .service('excusesService', function ($http) {
      var self = this;
      var url;

      this.getExcuses = function () {
        url = "http://localhost:3000/scenarios";

        return $http.get(url);
      };
    });

}());
