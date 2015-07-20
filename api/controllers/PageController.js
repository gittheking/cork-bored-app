var request = require('request');
var parser = require('json-parser');

module.exports = {
	showLocationPage: function(req, res) {
		// console.log('Hello')
		// console.log('session location:' + req.session.reg);
		// console.log('apikey:' + process.env.EVENTBRITE_KEY);
		if(!req.session.reg) {
			return res.view('homepage');
		} else {

			// request.get('https://eventbriteapi.com/v3/events/?popular=true&location.within=5mi&location.address='
			// 	+ req.session.reg 
			// 	+ 'token=' + process.env.EVENTBRITE_KEY)
			// 	.on('response', function(response){
			// 		// var requestData = parser.parse(response)
			// 		res.view('mainDash', {
			// 			eventData: response
			// 		})
			// 	})

			// request.get('https://eventbriteapi.com/v3/events/?popular=true&location.within=5mi&location.address='
			// 	+ req.session.reg 
			// 	+ 'token=' + process.env.EVENTBRITE_KEY, function(err, res, body){
			// 		if(!err){
			// 			// var resultsObj = JSON.parse(body);
			// 			console.log(body);
			// 		}
			// 	})

			// var options = {
			// 	host: 'https://eventbriteapi.com',
			// 	path: '/v3/events/?popular=true&location.within=5mi&location.address=' 
			// 	+ req.session.reg + 'token=' + process.env.EVENTBRITE_KEY
			// };

			// var callback = function(response){
			// 	var str = '';

			// 	response.on('data', function(dataStr){
			// 		str += dataStr;
			// 	});

			// 	response.on('end', function(){
			// 		console.log(dataStr);
			// 		return res.view('mainDash', {
			// 			eventData: dataStr
			// 		})
			// 	})
			// }

			// http.request(options, callback).end();

			return res.view('mainDash', {
				regData: {
					region: req.session.reg,
					eb: process.env.EVENTBRITE_KEY
				}
			});
		}
	}
}