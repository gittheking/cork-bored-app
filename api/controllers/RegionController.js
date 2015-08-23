module.exports = {
	enterLocation: function (req, res) {
		
		// creating a session to store the location
		req.session.reg = req.param('region');

		return res.ok();
	},
	newLocation: function(req, res){
		// "Deletin" session to allow an inquiry for a new location
		req.session.reg = undefined;

		// return user back to the homepage
		return res.view('homepage');
	}
}