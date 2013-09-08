(function (app) {

	app.controller('InfoCtrl', ['$scope', 'ghUser', 'GitHubApiService', function ($scope, ghUser, GitHubApiService) {
		$scope.data = null;
		GitHubApiService
			.getUser(ghUser)
			.success(function (resp) {
				$scope.data = resp.data;
			});
	}]);

})(angular.module('ghSwag'));