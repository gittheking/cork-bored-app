module.exports = {
	enterLocation : function (req, res) {


		console.log('region:' + req.param('region'));
		// req.session.loc = req.param('region');
		
		req.session.reg = req.param('region');

		return res.ok();

		// Region.create({
		// 	name: req.param('region')
		// },function regionCreated(newRegion) {

		// 	req.session.reg = newRegion.name;

		// 	console.log('Hello from the regionController!')
		// 	console.log('newRegionID' + req.session.reg);
			
		// 	return res.json({
		// 		name: newRegion.name
		// 	})

		// })
	}
}