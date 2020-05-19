var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'carousel_database', // 172.17.0.3
  user     : 'root',
  password : 'priyanka123',
  database : 'restaurants'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to the database!')

  }
});

module.exports = connection;