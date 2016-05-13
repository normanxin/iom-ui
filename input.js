angular.module('iom-app')
.directive('inputData', function() {
  return {
    restrict: 'E',
    //transclude: true,
    scope: {},
    templateUrl: 'input.html',
    controller: function($rootScope, $scope, $http) {
        var li1, li2;
        $scope.select = function(s) {
          s.selected = true;
          $rootScope.selectedLI = s.id === 1 ? li1 : li2;
        };
        $http.get('/jax/lineitem/1').success(function(res) {
          li1 = res;
        });
        $http.get('/jax/lineitem/2').success(function(res) {
          li2 = res;
        });
    },
    link: function(scope) {
    	    scope.names = [
    	       {id: 1, endDate: '2016-05-04', clicks: 51, impressions: 1079},
    	       {id: 2, endDate: '2016-05-11', clicks: 103, impressions: 1225}
    	    ];
    }
  };
});;
