const pool = require('./db-pool.js')

const createuserDb = (display_name, email, client_id, user_status, last_login, role) => {
  let q =
    'INSERT INTO users (display_name, email, client_id, user_status, last_login, role) VALUES ( ?, ?, ?, ?, NOW(), ?)'
  return pool
    .promise()
    .query(q, [display_name, email, client_id, user_status, role])
    .then(([rows]) => {
      return JSON.parse('{"status":"success","data":{"added":' + JSON.stringify(rows) + '}}')
    })
}
module.exports = {
  createuserDb,
}
