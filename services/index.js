
const usersService = require('./users-get.service') 
  const userService = require('./user-get.service') 
  const usersearchService = require('./usersearch-get.service') 
  const createuserService = require('./createuser-post.service') 
  const updateuserroleService = require('./updateuserrole-put.service') 
  const deleteuserService = require('./deleteuser-delete.service') 
  //@insert1

module.exports = {
    usersService, 
  userService, 
  usersearchService, 
  createuserService, 
  updateuserroleService, 
  deleteuserService, 
  //@insert2    
  }