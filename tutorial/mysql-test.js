var mysql = require('mysql');
var TEST_DATABASE = 'bioViz';
var TEST_TABLE = 'genes';
var client = mysql.createClient({
	user: 'root',
	password: '',
});
client.query('USE '+TEST_DATABASE);

client.query(
  'SELECT * FROM '+TEST_TABLE,
  function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }

    console.log(results);
    console.log(fields);
    client.end();
  }
);