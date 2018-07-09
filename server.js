var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var app = express();
var routes = require("./routes/routes.js");
var PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'html');

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

