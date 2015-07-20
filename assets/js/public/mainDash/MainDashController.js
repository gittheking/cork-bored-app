angular.module('MainDashModule').controller('MainDashController', [ '$scope', '$http', function($scope,$http){
	$scope.getFeaturedPosts = function() {
		var region = $('#page-data').data('loc');
		var x = $('#page-data').data('rand');

		$http({
				method: 'GET',
				url: 'https://www.eventbriteapi.com/v3/events/?popular=true&location.within=5mi&location.address=' + region + '&token=' + x,
				datatype: 'jsonp'
			}).success(function(ebData){
				console.log('Success!!!!')
				$scope.eventsData = ebData;
				console.log($scope.eventsData)
				// window.location = {view: 'mainDash'}; 
			});
	}
}])