(function (app) {

	/*
	 * Filtering forks out of repo-lis.
	**/
	app.filter('ownRepo', function () {
		return function (data) {

			var i, len, ret;

			if ( !data ) {
				return;
			}

			i = 0;
			len = data.length;
			ret = [];

			for ( ; i < len; i += 1 ) {
				if ( !data[i].fork ) {
					ret.push(data[i]);
				}
			}

			return ret;

		}
	});

})(angular.module('ghSwag'));