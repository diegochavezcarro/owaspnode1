var app = require('express')(),
  swig = require('swig');
// handler (en este caso de swig) que maneja templates *.html
app.engine('html', swig.renderFile);
app.set('view engine', 'html'); 
app.set('views', __dirname + '/views'); 
//proximas dos sentencias dejarlas en true en produccion
app.set('view cache', false);
swig.setDefaults({ cache: false });
app.get('/', function (req, res) {
  res.render('index', { pagename: 'awesome people',
  		authors: ['Paul', 'Jim', 'Jane'] });
});
app.listen(3000);
console.log('Application Started on http://localhost:3000/');