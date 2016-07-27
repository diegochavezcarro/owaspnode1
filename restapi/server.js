var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();

app.use(bodyParser.urlencoded({ extended: true })); //recibe parametros por url
app.use(bodyParser.json()); //recibe parametros por json

var port     = process.env.PORT || 8080; // si no es pasado por argumento queda 8080

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/personas'); 
var Persona     = require('./model/persona');

// crear el router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	console.log('Llego una peticion.');
	next();
});

// Acceso a http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'raiz de la aplicacion' });	
});

// Api de personas /personas
// ----------------------------------------------------
router.route('/personas')

	// crear unaa persona (POST http://localhost:8080/api/personas)
	.post(function(req, res) {
		
		var persona = new Persona();		
		persona.nombre = req.body.nombre;  

		persona.save(function(err) {
			if (err)
				res.send(err);
			res.json({ message: 'persona creada' });
		});

		
	})

	// obtener todas las personas (GET http://localhost:8080/api/personas)
	.get(function(req, res) {
		Persona.find(function(err, personas) {
			if (err)
				res.send(err);
			res.json(personas);
		});
	});

// /personas/:persona_id
// ----------------------------------------------------
router.route('/personas/:persona_id')
	// obtener persona con ese id
	.get(function(req, res) {
		Persona.findById(req.params.persona_id, function(err, persona) {
			if (err)
				res.send(err);
			res.json(persona);
		});
	})

	// update de la persona con ese id
	.put(function(req, res) {
		Persona.findById(req.params.persona_id, function(err, persona) {
			if (err)
				res.send(err);
			persona.nombre = req.body.nombre;
			persona.save(function(err) {
				if (err)
					res.send(err);
				res.json({ message: 'persona actualizada' });
			});
		});
	})

	// borrar la persona con ese id
	.delete(function(req, res) {
		Persona.remove({
			_id: req.params.persona_id
		}, function(err, persona) {
			if (err)
				res.send(err);
			res.json({ message: 'Se borro la persona' });
		});
	});

// Registrar las rutas
app.use('/api', router);
app.listen(port);
console.log('Server levantado en puerto ' + port);
