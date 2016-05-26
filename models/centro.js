var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var CentroSchema = new Schema({
	codDepto : Number,
	codigo : String,
	nombre : String,
	institucion : String,
	direccion : String,
	telefonos : [String],
	horario : String,
	seccional : String,
	localidad: String,
	departamento : String
});

mongoose.model('Centro', CentroSchema);