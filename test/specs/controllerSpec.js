describe('GH-Swag-Controller', function () {

	var $scope, repoCtrl;

	beforeEach(module('ghSwag'));
	beforeEach(inject(function ($rootScope, $controller) {
		$scope = $rootScope.$new();
		repoCtrl = $controller('RepoCtrl', {
			$scope: $scope
		});
	}));

	it('should be defined', function () {
		expect(repoCtrl.repos).toEqual(['foo', 'bar']);
	});

});