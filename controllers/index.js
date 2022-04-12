
const users = require('./users-get.controller') 
const user = require('./user-get.controller') 
const usersearch = require('./usersearch-get.controller') 
const createuser = require('./createuser-post.controller') 
const updateuserrole = require('./updateuserrole-put.controller') 
const deleteuser = require('./deleteuser-delete.controller') 
//@insert1

module.exports = {
    users, 
user, 
usersearch, 
createuser, 
updateuserrole, 
deleteuser, 
//@insert2
  }