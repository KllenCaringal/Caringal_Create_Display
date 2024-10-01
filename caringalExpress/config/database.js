const mysql = require('mysql2');

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'caringal_kllen'
});

database.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL Database');
});

module.exports = database;