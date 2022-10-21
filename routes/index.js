var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Simplistic Chatbot Ever!' });
});

/* GET ai reponse. */
router.get('/bot/response', function(req, res) {
  res.status(200).send({ 
      query: req.param('query'),
      response: 'here' 
  });
});

/* GET bot status. */
router.get('/bot', function(req, res) {
  res.send({
    uptime: process.uptime(),
    online: true,
    date: new Date()
  });
});


module.exports = router;
