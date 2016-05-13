angular.module('iom-app')
.directive('inputData', function() {
  return {
    restrict: 'E',
    //transclude: true,
    scope: {},
    templateUrl: 'input.html',
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
