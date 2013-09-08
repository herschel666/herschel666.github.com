(function (app) {

	app.controller('RepoCtrl', ['$scope', function ($scope) {

		this.repos = ['foo', 'bar'];

	}]);

})(angular.module('ghSwag'));