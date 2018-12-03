var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PersonaSchema   = new Schema({
	nombre: String,
	apellido: String
});

module.exports = mongoose.model('Persona', PersonaSchema);