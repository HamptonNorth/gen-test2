const pool = require('./db-pool.js')

const deleteuserDb = (client_id) => {
  let q = 'DELETE FROM users WHERE id = ?'
  return pool
    .promise()
    .query(q, [client_id])
    .then(([rows]) => {
      return JSON.parse('{"status":"success","data":""}')
    })
}
module.exports = {
  deleteuserDb,
}
