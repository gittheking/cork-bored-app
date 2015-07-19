

angular.module('HomepageModule').controller('HomepageController', [ '$scope', '$http', function($scope, $http){
	$scope.submitLocationForm = function(){
		console.log($scope.locationForm.region);
			$http.put('/region', {
			region: $scope.locationForm.region
		})
		.then( function onSuccess (){
			$scope.locationForm.region = '';
			// console.log('success!');
			window.location = '/';
		})
		.catch(function onError(sailsResponse){
			if(sailsResponse.status == 400 || 404) {
				toastr.error('Invalid location', 'Error', {
					closeButton: true
				});
				return;
			}
		})
	}
}])