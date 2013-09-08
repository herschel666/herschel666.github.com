describe('GH-Swag-Service', function () {

	var gitHubApi, $httpBackend, stubs;

	beforeEach(module('ghSwag'));
	beforeEach(inject(function (GitHubApiService, _$httpBackend_) {
		gitHubApi = GitHubApiService;
		stubs = {
			failed: false,
			onerror: function () {
				this.failed = true;
			}
		};
		$httpBackend = _$httpBackend_;
		$httpBackend
			.when('JSONP', 'https://api.github.com/users/herschel666?callback=JSON_CALLBACK')
			.respond({
				login: 'herschel666',
				id: 520258,
				public_repos: 23
			});
		$httpBackend
			.when('JSONP', 'https://api.github.com/users/herschel666/repos?callback=JSON_CALLBACK')
			.respond([{
				id: 123456,
				name: 'awesome-piece-of-software-shizle'
			}, {}]);
	}));

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it('should be defined', function () {
		expect(gitHubApi).toBeDefined();
	});

	it('should have method "getUser"', function () {
		expect(gitHubApi.getUser).toBeDefined();
		expect(gitHubApi.getUser.length).toEqual(1);
	});

	it('should fetch user data', function () {
		spyOn(stubs, 'onerror');
		gitHubApi.getUser('herschel666')
			.success(function (resp) {
				expect(resp.login).toEqual('herschel666');
				expect(resp.id).toEqual(520258);
				expect(resp.public_repos).toEqual(23);
			})
			.error(stubs.onerror);
		$httpBackend.expectJSONP('https://api.github.com/users/herschel666?callback=JSON_CALLBACK');
		expect(stubs.onerror).not.toHaveBeenCalled();
		$httpBackend.flush();
	});

	it('should have method "getRepos"', function () {
		expect(gitHubApi.getRepos).toBeDefined();
		expect(gitHubApi.getRepos.length).toEqual(1);
	});

	it('should fetch users repos', function () {
		spyOn(stubs, 'onerror');
		gitHubApi.getRepos('herschel666')
			.success(function (resp) {
				expect(resp).toEqual(jasmine.any(Array));
				expect(resp.length).toBe(2);
				expect(resp[0].id).toEqual(123456);
				expect(resp[0].name).toEqual('awesome-piece-of-software-shizle');
			})
			.error(stubs.onerror);
		$httpBackend.expectJSONP('https://api.github.com/users/herschel666/repos?callback=JSON_CALLBACK');
		expect(stubs.onerror).not.toHaveBeenCalled();
		$httpBackend.flush();
	});

});