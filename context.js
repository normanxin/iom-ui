angular.module('iom-app')
.directive('context', function() {
  return {
    restrict: 'E',
    //transclude: true,
    scope: {},
    templateUrl: 'context.html',
    controller: function($rootScope, $scope) {
      $scope.$watch(function() {
        return $rootScope.selectedLI
      }, function(selected) {
        $scope.names = selected;
        $scope.names = [
          {timestap: Math.random() * 3, state: 2, clicks: 3, impressions: 4},
          {timestap: 3, state: 2, clicks: 3, impressions: 4},
          {timestap: 3, state: 2, clicks: 3, impressions: 4},
          {timestap: 3, state: 2, clicks: 3, impressions: 4},
        ];
      });
    },
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
