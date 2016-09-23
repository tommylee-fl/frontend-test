(function() {
  'use strict';

  angular
    .module('app.route', ['ngRoute'])
    .config(setupRoutes);

    function setupRoutes($routeProvider, $locationProvider) {
      $routeProvider.when('/', {
        templateUrl: "/app/dashboard/dashboard.html"
      }).when('/news', {
        templateUrl: "/app/news/news.html"
      }).otherwise({ redirectTo: '/'});
    }
})();