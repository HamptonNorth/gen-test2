const express = require('express')
const {  users  } = require('../controllers')
const {  user  } = require('../controllers')
const {  usersearch  } = require('../controllers')
const {  createuser  } = require('../controllers')
const {  updateuserrole  } = require('../controllers')
const {  deleteuser  } = require('../controllers')
//@insert1
const router = express.Router()
router.get('/users', users.getUsers)
router.get('/user/:id', user.getUser)
router.get('/usersearch', usersearch.getUsersearch)
router.post('/createuser', createuser.postCreateuser)
router.put('/updateuserrole', updateuserrole.putUpdateuserrole)
router.delete('/deleteuser', deleteuser.deleteDeleteuser)
//@insert2

module.exports = router