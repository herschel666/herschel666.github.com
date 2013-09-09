describe('GH-Swag-Service', function () {

	beforeEach(module('ghSwag'));

	it('should be defined', inject(function ($filter) {
		expect($filter('ownRepo')).not.toBeNull();
	}));

	it('should filter own repos', inject(function ($filter) {

		var data = [{
			name: 'foo',
			fork: true
		}, {
			name: 'bar',
			fork: false
		}, {
			name: 'lorem',
			fork: false
		}];
		var filtered = $filter('ownRepo')(data);

		expect(filtered.length).toEqual(2);
		expect(filtered[0].name).toEqual('bar');
		expect(filtered[1].name).toEqual('lorem');

	}));

});