(function (app) {

	/*
	 * Serving the list of repos
	**/
	app.controller('ReposCtrl', [
		'$scope',
		'ghUser',
		'GitHubApiService',
		function ($scope, ghUser, GitHubApiService) {

			$scope.repos = null;
			$scope.loading = true;
			GitHubApiService
				.getRepos(ghUser)
				.success(function (resp) {
					$scope.repos = resp.data;
					$scope.loading = false;
				});

		}
	]);

})(angular.module('ghSwag'));