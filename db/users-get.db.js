const pool = require('./db-pool.js')

const usersDb = () => {
  let q = 'SELECT users.id, users.email, users.role FROM users ORDER BY id'
  return pool
    .promise()
    .query(q)
    .then(([rows]) => {
      return JSON.parse('{"status":"success","data":{"users":' + JSON.stringify(rows) + '}}')
    })
}
module.exports = {
  usersDb,
}
