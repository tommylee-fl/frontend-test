(function() {
  'use strict';

  angular
    .module('app.news')
    .controller('NewsController', NewsController);

  NewsController.$inject = ['$scope'];

  function NewsController($scope) {
    var listings = [{ source: 'Hey', date:'Now', lead: 'Nope', heading: 'HEye' }];
  }
})();