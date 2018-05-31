var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

router.get("/", function(req,res){
	res.sendFile(path.join(__dirname,"../public/views/index.html"))
});


router.get("/index", function(req,res){
	res.sendFile(path.join(__dirname,"../public/views/index.html"))
});

router.get("/portfolio", function(req,res){
	res.sendFile(path.join(__dirname,"../public/views/portfolio.html"))
});

// router.get("*", function(req,res){
// 	res.sendFile(path.join(__dirname,"../public/views/index.html"))
// });

router.get("*", function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

module.exports = router;

