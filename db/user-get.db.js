const pool = require('./db-pool.js')

const userDb = (id) => {
  let q = 'SELECT users.id, users.email, users.role FROM users WHERE id =  ?'
  return pool
    .promise()
    .query(q, [id])
    .then(([rows]) => {
      return JSON.parse('{"status":"success","data":{"users":' + JSON.stringify(rows) + '}}')
    })
}
module.exports = {
  userDb,
}
