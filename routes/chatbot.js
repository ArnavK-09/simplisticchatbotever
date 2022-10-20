var express = require('express');
var router = express.Router();

/* GET ai reponse. */
router.get('/response', function(req, res, next) {
    res.status(200).send({ 
        query: req.param('query'),
        response: 'here' 
    });
});

module.exports = router;
