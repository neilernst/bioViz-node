/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');
var db = require("./public/javascripts/get_data");
var querystring = require("querystring");
//var d3 = require("d3");

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/gene', function(req, res){
  db.fetchGenes(req.query.term,req, res); //Asynchronous!
});

app.get('/', function(req, res){
    res.render('autocomplete', {
    title: 'Show Brain Region Expression Data'
  });
});

app.post('/color', function(req, res) {
    db.getFrag(req.body.gene,req, res);
});

app.post('/mel', function(req, res){
    db.findAllExpression(req.body.fragid, req, res);
});

var port = process.env.PORT || 5000; //for heroku
app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
