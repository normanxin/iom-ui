angular.module('iom-app')
.directive('progressBar', function() {
  return {
    restrict: 'E',
    //transclude: true,
    scope: {},
    templateUrl: 'progressButton.html',
    link: function(scope) {
    	    angular.element('head style[type="text/css"]').attr('type', 'text/less');
		less.refreshStyles();
		window.randomize = function() {
			angular.element('.radial-progress').attr('data-progress', Math.floor(Math.random() * 100));
		};
		setTimeout(window.randomize, 200);
		console.log('wow');
		angular.element('.radial-progress').click(window.randomize);

		// Read more here: https://medium.com/@andsens/radial-progress-indicator-using-css-a917b80c43f9
    }
  };
});;



