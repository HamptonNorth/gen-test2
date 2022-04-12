
const { usersDb } = require('./users-get.db') 
  const { userDb } = require('./user-get.db') 
  const { usersearchDb } = require('./usersearch-get.db') 
  const { createuserDb } = require('./createuser-post.db') 
  const { updateuserroleDb } = require('./updateuserrole-put.db') 
  const { deleteuserDb } = require('./deleteuser-delete.db') 
  //@insert1

module.exports = {
    usersDb, 
  userDb, 
  usersearchDb, 
  createuserDb, 
  updateuserroleDb, 
  deleteuserDb, 
  //@insert2
  }