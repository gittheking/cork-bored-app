

angular.module('HomepageModule').controller('HomepageController', [ '$scope', '$http', function($scope, $http){
	$scope.submitLocationForm = function(){
			$http.put('/region', {
			region: $scope.locationForm.region
		})
		.then( function onSuccess (){
			$scope.locationForm.region = '';
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