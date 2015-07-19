module.exports = {
	showLocationPage: function(req, res) {

		console.log('Hello')
		console.log('session location:' + req.session.reg);
		console.log('apikey:' + process.env.EVENTBRITE_KEY);
		// console.log('apikey:' + sails.config.api('ebToken'))
		if(!req.session.reg) {
			return res.view('homepage');
		} else {
			return res.view('mainDash', {
				region: req.session.reg,
				ebToken: process.env.EVENTBRITE_KEY
			});
		}
	}
}