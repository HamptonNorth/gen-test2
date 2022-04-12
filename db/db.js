
const mysql = require('mysql2')
const dbConfig = require('../configs/dbconfig.js')

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
})

// open the MySQL connection
connection.connect((error) => {
  if (error) {
    console.log('******** Error connecting to MySQL single connection ', error.sqlMessage, ' ********')
    console.log('    **** Reminder - MySQL setting in file /configs/db.js')
  } else {
  console.log('Successfully connected to the database (new connection):', dbConfig.DB)
  }
})

module.exports = connection
