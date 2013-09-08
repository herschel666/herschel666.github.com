describe('GH-Swag-Controller', function () {

	var GitHubApiService = {
		getUser: function (ghUser) {
			return {
				success: function (callback) {
					callback.call(null, {
						data: {
							login: 'herschel666',
							name: 'Emanuel Kluge'
						}
					});
				}
			};
		},
		getRepos: function (ghUser) {
			return {
				success: function (callback) {
					callback.call(null, {
						data: [{
							id: 1234,
							name: 'lorem'
						}, {
							id: 2345,
							name: 'ipsum'
						}]
					});
				}
			};
		}
	};

	describe('ReposCtrl', function () {

		var $scope;

		beforeEach(module('ghSwag'));
		beforeEach(inject(function ($rootScope, $controller) {
			$scope = $rootScope.$new();
			$controller('ReposCtrl', {
				$scope: $scope,
				GitHubApiService: GitHubApiService
			});
		}));

		it('should have repos-property', function () {
			expect($scope.repos).toBeDefined();
		});

		it('should fetch repos after initialization', function () {
			expect($scope.repos[0].id).toEqual(1234);
			expect($scope.repos[1].name).toEqual('ipsum');
		});

	});

	describe('InfoCtrl', function () {

		beforeEach(module('ghSwag'));
		beforeEach(inject(function ($rootScope, $controller) {
			$scope = $rootScope.$new();
			$controller('InfoCtrl', {
				$scope: $scope,
				GitHubApiService: GitHubApiService
			});
		}));

		it('should have data-property', function () {
			expect($scope.data).toBeDefined();
		});

		it('should fetch user-data after initialization', function () {
			expect($scope.data.login).toEqual('herschel666');
			expect($scope.data.name).toEqual('Emanuel Kluge');
		})

	});

	describe('FooterCtrl', function () {

		beforeEach(module('ghSwag'));
		beforeEach(inject(function ($rootScope, $controller) {
			$scope = $rootScope.$new();
			$controller('FooterCtrl', {
				$scope: $scope
			});
		}));

		it('should have the correct data', function () {
			var now = (new Date()).getFullYear();
			expect($scope.year).toEqual(now);
			expect($scope.hint).toEqual('Built with AngularJS');
		});

	});

});