angular.module('iom-app')
.directive('roi', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'roi.html',
    controller: function($scope) {
      $scope.labels = ["2015-11-12", "2016-1-12", "2016-1-14", "2016-2-14", "2016-4-12", "2016-4-18", "2016-6-18"];
      $scope.series = ['Line Item'];
      $scope.data = [
        [65, 59, 80, 81, 56, 55, 40]
      ];
    }
  };
});;
