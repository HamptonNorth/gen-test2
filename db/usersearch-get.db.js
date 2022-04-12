const pool = require('./db-pool.js')

const usersearchDb = (name) => {
  let q =
    "SELECT users.id, users.display_name, users.email, users.role FROM users WHERE users.display_name LIKE '%" +
    name +
    "%'"
  return pool
    .promise()
    .query(q)
    .then(([rows]) => {
      return JSON.parse('{"status":"success","data":{"users":' + JSON.stringify(rows) + '}}')
    })
}
module.exports = {
  usersearchDb,
}
