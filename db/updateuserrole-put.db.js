const pool = require('./db-pool.js')
const updateuserroleDb = (client_id, role) => {
  let q = 'UPDATE users SET role = ? WHERE id = ?'
  return pool
    .promise()
    .query(q, [role, client_id])
    .then(([rows]) => {
      return JSON.parse('{"status":"success","data":""}')
    })
}
module.exports = {
  updateuserroleDb,
}
