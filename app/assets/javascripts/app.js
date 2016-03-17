var alibot = angular.module('alibot', ["ngResource"]);

alibot.config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);

  $routeProvider
    .when("/scenarios",
      {templateUrl: "<%= asset_path('javascripts/scenarios.js') %>",
        controller: "scenarioController"});
});
