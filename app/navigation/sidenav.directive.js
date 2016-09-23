(function() {
  'use strict';

  angular
    .module('app.layout')
    .directive('rlSidenav', rlSidenav);

  function rlSidenav() {
    var directive = {
      templateUrl: 'app/navigation/sidenav.html',
      restrict: 'EA'
    }
    return directive;
  }
})();