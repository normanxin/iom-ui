angular.module('iom-app')
.directive('roi', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'roi.html',
    controller: function($rootScope, $scope, $http) {
      // $scope.series = ['Clicks', 'Impressions', 'ROI'];
      $scope.series = ['ROI'];
      $scope.$watch(function() {
        return $rootScope.selectedLI;
      }, function(selected) {
        if (!selected) {
          return $scope.data = [];
        }
        $scope.labels = $rootScope.selectedLI.map(function(li) {
          return li.timeStamp;
        });
        $scope.data = [
          // $rootScope.selectedLI.map(function(li) {
          //   return li.numberOfClicks;
          // }),
          // $rootScope.selectedLI.map(function(li) {
          //   return li.numberOfImpressions;
          // }),
          $rootScope.selectedLI.map(function(li) {
            return li.numberOfClicks / li.numberOfImpressions;
          })
        ];
      });
    }
  };
});;
