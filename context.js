angular.module('iom-app')
.directive('context', function() {
  return {
    restrict: 'E',
    //transclude: true,
    scope: {},
    templateUrl: 'context.html',
    link: function(scope) {
    	    scope.names = [
    	       {timestap: 1, state: 2, clicks: 3, impressions: 4},
    	       {timestap: 1, state: 2, clicks: 3, impressions: 4},
    	       {timestap: 1, state: 2, clicks: 3, impressions: 4},
    	       {timestap: 1, state: 2, clicks: 3, impressions: 4},
    	    ];
    }
  };
});;
