var app = require('express')();
// handler (en este caso de pug) que maneja templates *.ejs
app.set('view engine', 'pug'); 
app.set('views', __dirname + '/views'); 

app.get('/', function (req, res) {
  res.render('index', { pagename: 'awesome people',
  		authors: ['Paul', 'Jim', 'Jane'] });
});
app.listen(3000);
console.log('Application Started on http://localhost:3000/');