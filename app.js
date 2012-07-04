/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');
var db = require("./get_data");
var querystring = require("querystring");

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

app.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

app.get('/gene', function(req, res){
  console.log("Handling gene request");
  db.fetchGenes(req.query.term,req, res); //Asynchronous!
});

app.get('/autocomplete', function(req, res){
  console.log("Handling 'autocomplete'.");
  res.render('autocomplete', {
    title: 'Show Brain Region Expression Data'
  });
});

app.post('/color', function(req, res) {
    //console.log(JSON.stringify(req.body));
    //console.log('req.body', req.body.gene);
    db.findAllExpression(req.body.gene);
});

app.get('/raph', function(req, res){
  res.render('raph-test', {
    title: 'Raphael Testing'
  });
});

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
