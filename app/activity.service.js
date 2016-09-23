(function() {
  'use strict';

  angular
    .module('app.activity', [])
    .factory('ActivityService', ActivityService);

  ActivityService.$inject = ['$http', '$q'];

  function ActivityService($http, $q) {
    var service = {
      getActivity: getActivity
    };

    return service;

    function getActivity() {
      return $http.get('/activity-data.json')
      .then(success)
      .catch(error);
    }

    function success(response) {

      return addNoise(response.data);
    }


    function addNoise(data) {
      var totalElements = data.length;
      var random_changes = getRandomInt(0, 10);
      var current_new_time = (new Date).getTime();
      for(var i = 0; i < random_changes; i++) {
        var row_id = getRandomInt(0, totalElements);
        data[row_id].data.count = getRandomInt(0, 20);
        data[row_id].data.time = current_new_time;
        data[row_id].data.speed = getRandomSpeed();
      }
      return data;

    }

    function getRandomSpeed() {
      return Math.random();
    }

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function error(e) {
    }

  }


})();