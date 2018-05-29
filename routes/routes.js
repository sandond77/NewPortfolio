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

module.exports = router;

