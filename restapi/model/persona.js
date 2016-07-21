var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PersonaSchema   = new Schema({
	nombre: String
});

module.exports = mongoose.model('Persona', PersonaSchema);