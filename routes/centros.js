var express = require('express');
var router = express.Router();


function findCentrosSorted(query, res){
	Centro = mongoose.model('Centro');
	Centro.find(query).sort( {codDepto : -1} ).exec(function(err, centros){
		if (err) throw err;

		res.json(centros);
	});
};

/* GET centros todos. */
router.get('/', function(req, res, next) {
  findCentrosSorted({},res);
});

/* GET centros por deptos. */
router.get('/depto/:depto', function(req, res, next) {
  	Centro = mongoose.model('Centro');
	Centro.find({departamento : req.params.depto}).sort( {codDepto : -1} ).exec(function(err, centros){
		if (err) throw err;

		res.json(centros);
	});
});


// GET Centro por ID
router.get('/:id', function(req, res){
	Centro = mongoose.model('Centro');
	Centro.findOne({ _id: req.params.id }, 
		function(err, cent){
			if (err) throw err;

			res.json(cent);
	});
});


// POST nuevo centro
router.post('/alta', function(req, res){
	var fun = { 
		codDepto : req.body.codDepto,
		codigo : req.body.codigo,
		nombre : req.body.nombre,
		institucion : req.body.institucion,
		direccion : req.body.direccion,
		telefonos : [req.body.telefono],
		horario : req.body.horario,
		seccional : req.body.seccional,
		localidad: req.body.localidad,
		departamento : req.body.departamento
	};

	Centro = mongoose.model('Centro');
	Centro.create(fun, function(err, cent){
		if(err) throw err;

		res.json(cent);
	})
});


module.exports = router;
