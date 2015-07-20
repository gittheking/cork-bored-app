module.exports = {
	enterLocation : function (req, res) {
		
		req.session.reg = req.param('region');

		return res.ok();
	}
}