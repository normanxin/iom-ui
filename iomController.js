var controller = module.exports = function($scope){
	console.log('abc');
	$scope.names = [
		{ ctr: 1, goal: 2},
		{ ctr: 3, goal: 4}
	];
};

controller.$inject = ['$scope'];