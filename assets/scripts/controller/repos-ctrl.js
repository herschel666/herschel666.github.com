(function (app) {

	app.controller('ReposCtrl', ['$scope', 'ghUser', 'GitHubApiService', function ($scope, ghUser, GitHubApiService) {

		$scope.repos = null;
		GitHubApiService
			.getRepos(ghUser)
			.success(function (resp) {
				$scope.repos = resp.data;
			});

	}]);

})(angular.module('ghSwag'));