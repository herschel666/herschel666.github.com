(function (app) {

	app.controller('FooterCtrl', ['$scope', function ($scope) {
		$scope.year = (new Date()).getFullYear();
		$scope.hint = 'Built with AngularJS';
	}]);

})(angular.module('ghSwag'));