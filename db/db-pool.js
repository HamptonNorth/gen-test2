
 const mysql = require('mysql2')
 const dbConfig = require('../configs/dbconfig.js')
 
 // Create a connection to the database
 const pool = mysql.createPool({
   host: dbConfig.HOST,
   user: dbConfig.USER,
   password: dbConfig.PASSWORD,
   database: dbConfig.DB,
   waitForConnections: dbConfig.WAITFORCONNECTIONS,
  connectionLimit: dbConfig.CONNECTIONLIMIT,
  queueLimit: dbConfig.QUEUELIMIT,
 })
 
 // open the MySQL pool 
 pool.getConnection((error, connection) => {
   if (error) {
     console.log('******** Error connecting to MySQL ', error.sqlMessage, ' ********')
     console.log('    **** Reminder - MySQL setting in file /configs/db.js')
   } else {
    pool.releaseConnection(connection)
   console.log('Successfully connected to the database (connection pool):', dbConfig.DB)
   }
 })
 
 module.exports = pool
 