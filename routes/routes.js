var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var nodemailer = require('nodemailer');

router.get("/", function(req,res){
	res.sendFile(path.join(__dirname,"../public/views/index.html"))
});


router.get("/index", function(req,res){
	res.sendFile(path.join(__dirname,"../public/views/index.html"))
});

router.get("/portfolio", function(req,res){
	res.sendFile(path.join(__dirname,"../public/views/portfolio.html"))
});

router.post("/send", function(req,res){
    var transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user: "sandon.du.emailer@gmail.com",
                pass: "sandondu.com"
            },
            tls:{
                rejectUnauthorized:false
            }
      });

    var output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>  
          <li>Name: ${req.body.name}</li>
          <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;

    var mailOptions = {
        from: req.body.name,
        to: 'sandon@sandondu.com',
        subject: "Contact Me Submission from " + req.body.name,
        text: "See below for message details",
        html: output
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          $('#contact').reset();
        }
    });

    // res.send("Complete");
})

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

