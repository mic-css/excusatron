(function() {
  'use strict';

  angular.module('alibot')
    .config(function ($routeProvider) {
      $routeProvider
        .when("/", {
          templateUrl: "home.html",
          controller: "scenariosController"
        });
    });
}());
