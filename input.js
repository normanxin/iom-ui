angular.module('iom-app')
.directive('inputData', function() {
  return {
    restrict: 'E',
    //transclude: true,
    scope: {},
    templateUrl: 'input.html',
    controller: function($rootScope, $scope, $http) {
        $scope.select = function(s) {
          s.selected = true;
          $http.get('/jax/lineitem/' + s.id).success(function(res) {
            $rootScope.selectedLI = res;
          });
        };
    },
    link: function(scope) {
    	    scope.names = [
            {id: 1602200484, endDate: '2016-05-14', clicks: 51, impressions: 1079},
         {id: 1602547363, endDate: '2016-05-14', clicks: 103, impressions: 1225},
         {id: 1602658589, endDate: '2016-05-14', clicks: 51, impressions: 1079},
         {id: 1602668712, endDate: '2016-05-14', clicks: 103, impressions: 1225},
         {id: 1602668711, endDate: '2016-05-14', clicks: 51, impressions: 1079},
         {id: 1602616766, endDate: '2016-05-14', clicks: 103, impressions: 1225}
    	    ];
    }
  };
});;
