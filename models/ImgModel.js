var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

mongoose.connect("mongodb://localhost/sowaDDBB");

var img_schema   = new Schema(
	{
    	img: String,
    	porcentaje: Number,
    	km: Number
	}
);

//creamos schema para exportar y llamarlo en otros componentes
var imgsch = mongoose.model('imgsch', img_schema);
module.exports.imgsch = imgsch;

//https://www.npmjs.com/package/mongoose