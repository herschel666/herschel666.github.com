(function (app) {

	/*
	 * Getting data from the GitHub-API
	**/
	app.service('GitHubApiService', ['$http', '$templateCache', function ($http, $templateCache) {
		return {

			/*
			 * @ngdoc method
			 * @name GitHubApiService#getUser
			 * @methodOf GitHubApiService
			 * @description
			 * Fetches User-data by given username from the GitHub-API
			 *
			 * @param {string} The username
			 * @returns {requestHandler} Returns an object with `success` method
			**/
			getUser: function (userName) {
				return $http({
					method: 'JSONP',
					url: 'https://api.github.com/users/' + userName + '?callback=JSON_CALLBACK',
					// url: 'data/user.txt?callback=JSON_CALLBACK',
					cache: $templateCache,
					callback: 'JSON_CALLBACK'
				});
			},

			/*
			 * @ngdoc method
			 * @name GitHubApiService#getRepos
			 * @methodOf GitHubApiService
			 * @description
			 * Fetches User-repos-data by given username from the GitHub-API
			 *
			 * @param {string} The username
			 * @returns {requestHandler} Returns an object with `success` method
			**/
			getRepos: function (userName) {
				return $http({
					method: 'JSONP',
					url: 'https://api.github.com/users/' + userName + '/repos?callback=JSON_CALLBACK',
					// url: 'data/repos.txt?callback=JSON_CALLBACK',
					cache: $templateCache
				});
			}

		}
	}]);

})(angular.module('ghSwag'));