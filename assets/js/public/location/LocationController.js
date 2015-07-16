angular.module('LocationModule').controller('LocationController', [ '$scope', function($scope){
	$scope.submitLocationForm = function(){
		console.log($scope.locationForm.region);
		$scope.locationForm.region = '';
	}
}])