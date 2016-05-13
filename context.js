angular.module('iom-app')
.directive('context', function() {
  return {
    restrict: 'E',
    //transclude: true,
    scope: {},
    templateUrl: 'context.html',
    controller: function($rootScope, $scope) {
      $scope.$watch(function() {
        return $rootScope.selectedLI;
      }, function(selected) {
        $scope.names = selected;
      });
    }
  };
});;
