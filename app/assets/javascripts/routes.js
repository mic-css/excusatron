(function() {
  'use strict';

  angular.module('alibot')
    .config(function ($routeProvider) {
      $routeProvider
        .when("/scenarios", {
          templateUrl: "home.html",
          controller: "scenariosController"
        })
        .when("/excuses", {
          templateUrl: "choices.html",
          controller: "excusesController"
        })
        .otherwise({redirectTo: "/scenarios"});
    });
}());
