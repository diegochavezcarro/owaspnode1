var express = require('express');
var router = express.Router();
// middleware especifico para este router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define la ruta para la home page
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// define la ruta para about
router.get('/about', function(req, res) {
  res.send('About birds');
});
module.exports = router;