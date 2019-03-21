var mysql = require('mysql')

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password123',
        database: 'namesdb_mini'
    })

connection.connect();

module.exports = connection;