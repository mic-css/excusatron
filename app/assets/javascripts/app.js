(function() {
  'use strict';

  angular.module('alibot', ['ngRoute','templates'])
    .config(function ($routeProvider) {
      $routeProvider
        .when("/", {
          templateUrl: "home.html",
          controller: "scenariosController"
        });
    });
}());
