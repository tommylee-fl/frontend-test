(function() {
  'use strict';

  angular
    .module('app.news.card')
    .directive('rlCard', rlCard);

  function rlCard() {
    var directive = {
      templateUrl: 'app/news/card/card.html',
      restrict: 'EA',
      scope: {
        source: '<',
        date: '<',
        heading: '<',
        lead: '<'
      }
    }
    return directive;
  }
})();