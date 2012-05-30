var querystring = require("querystring");
	
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

function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("You've sent the text: " +  querystring.parse(postData).text);  
  response.end();
}

function data(response, postData) {
	console.log("Handling 'data'.");
	var mysql = require('mysql');
	var TEST_DATABASE = 'bioViz';
	var TEST_TABLE = 'genes';
	var client = mysql.createClient({
		user: 'root',
		password: '',
	});

	client.query('USE '+TEST_DATABASE);

	client.query(
		'SELECT count(*) FROM '+TEST_TABLE,
		function selectCb(err, results, fields) {
			if (err) {
				throw err;
				response.writeHead(501);
			}
			response.writeHead(200, {"Content-Type": "text/plain"});

			console.log(results);
			console.log(fields);
			client.end();
			response.end();

		}
	);
}

exports.start = start;
exports.upload = upload;
exports.data = data;