// imports 
import express from 'express';
import processBotReply from '../public/javascripts/index.js';

// Router 
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // rendering index jade
  res.render('index', { title: 'Simplistic Chatbot Ever!' });
});

/* GET info. */
router.get('/api/response/', function(req, res) {
  // reponse
  res.status(200).send({ 
    info: 'Invalid Param',
    response: processBotReply('somethingnotindata', true)
  });
});

/* GET bot reponse. */
router.get('/api/response/:input', function(req, res) {
  // query 
  let input = req.params['input'];

  // validating 
  if(input == undefined || input == null) {
    input = ''
  }

  // reponse
  res.status(200).send({ 
    input,
    response: processBotReply(input, true)
  });
});

/* GET bot status. */
router.get('/api', function(req, res) {
  res.send({
    online: true,
    uptime: process.uptime(),
    date: new Date()
  });
});


export default router;
