(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope', '$timeout', 'ActivityService'];

  function DashboardController($scope, $timeout, ActivityService) {
    var graph_info;
    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series = ['Series A', 'Series B'];

    $scope.bar_label = [];
    $scope.bar_data = [];
    $scope.bar_series = ['Series 1'];

    initialize();

    function initialize() {
      ActivityService.getActivity().then(function(result){
        graph_info = result;
        var new_series = [];
        var new_bar_series = [];
        var new_bar_labels = []
        var new_bar_data = [];


        for(var info in graph_info) {
          new_bar_labels.push(graph_info[info].zoneId);
          new_bar_data.push(graph_info[info].data.count);
        }

        $scope.bar_labels = new_bar_labels;
        $scope.bar_data = new_bar_data;
      });

      // Gets new information every minute.
      $timeout(initialize, 60000);
    }
  }
})();