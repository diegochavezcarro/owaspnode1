var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/llamarajax/', function (req, res) {    
    setTimeout(function() {
    res.json({ 'message': 'respuesta del servicio' });
}, 10000);
});

app.listen(3000);