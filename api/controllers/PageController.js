var request = require('request');
var parser = require('json-parser');

module.exports = {
	showLocationPage: function(req, res) {
		if(!req.session.reg) {
			return res.view('homepage');
		} else {

			var strArray = req.session.reg.split('');
			strArray[0] = strArray[0].toUpperCase();
			var reg = strArray.join('');

			return res.view('mainDash', {
				regData: { 
					region: reg,
					eb: process.env.EVENTBRITE_KEY
				}
			});
		}
	}
}