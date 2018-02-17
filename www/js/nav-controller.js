angular.module('navController', [])
	.controller('nav', function($scope, $state) {
		$scope.title = 'Digibank';

		// returns true if the current router url matches the passed in url
		// so views can set 'active' on links easily
		

		$scope.pages = [
			{
				name: 'Financial Wellness',
				url: '#/finwell'
			},
			{
				name: 'Smart Card',
				url: '#/smartcard'
			}
		]
	});
