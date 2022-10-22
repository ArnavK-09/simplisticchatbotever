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
router.get('/bot/response/', function(req, res) {
  // reponse
  res.status(200).send({ 
    info: 'Invalid Param',
    response: processBotReply('somethingnotindata', true)
  });
});

/* GET bot reponse. */
router.get('/bot/response/:chat', function(req, res) {
  // query 
  let chat = req.params['chat'];

  // validating 
  if(chat == undefined || chat == null) {
    chat = ''
  }

  // reponse
  res.status(200).send({ 
    chat,
    response: processBotReply(chat, true)
  });
});

/* GET bot status. */
router.get('/bot', function(req, res) {
  res.send({
    online: true,
    uptime: process.uptime(),
    date: new Date()
  });
});


export default router;
