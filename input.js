angular.module('iom-app')
.directive('inputData', function() {
  return {
    restrict: 'E',
    //transclude: true,
    scope: {},
    templateUrl: 'input.html',
    controller: function($rootScope, $scope) {
        $scope.select = function(s) {
          s.selected = true;
          $rootScope.selectedLI = s;
        };
    },
    link: function(scope) {
    	    scope.names = [
    	       {id: 1, endDate: 2, clicks: 3, impressions: 4},
    	       {id: 1, endDate: 2, clicks: 3, impressions: 4},
    	       {id: 1, endDate: 2, clicks: 3, impressions: 4},
    	       {id: 1, endDate: 2, clicks: 3, impressions: 4},
    	    ];
    }
  };
});;
