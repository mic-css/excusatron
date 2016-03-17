(function() {
  'use strict';

  angular.module('alibot')
    .config(function ($routeProvider) {
      $routeProvider
        .when("/scenarios", {
          templateUrl: "scenarios.html",
          controller: "scenariosController as scenariosCtrl"
        })
        .when("/excuses", {
          templateUrl: "excuses.html",
          controller: "excusesController as excusesCtrl"
        })
        .otherwise({redirectTo: "/scenarios"});
    });
}());
