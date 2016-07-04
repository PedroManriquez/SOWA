module.exports = function(app, io){
	app.get('/', function(req,res, next){
		res.render('index');
		next();
	});

}