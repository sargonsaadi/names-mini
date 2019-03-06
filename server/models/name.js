var mysql = require('mysql')

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'wq4t9hwqqe8',
        database: 'namesdb_mini'
    })

connection.connect();

module.exports = connection;