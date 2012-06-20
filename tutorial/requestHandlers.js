var querystring = require("querystring");
var static = require('node-static');
var db = require("./sqlite3-test");

var fileServer = new(static.Server)('./public');

function start(response, postData) {
  console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function autocomplete(response,postData) {
	console.log("Autocomplete...");
	fileServer.serveFile('/autocomplete-test.html', 200, {}, response, postData);
}

function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("You've sent the text: " +  querystring.parse(postData).text);  
  response.end();
}

function data(response, postData) {
	console.log("Handling 'data'.");
	db.fetchGenes("RP");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end();
	
}

exports.start = start;
exports.upload = upload;
exports.data = data;
exports.autocomplete = autocomplete;