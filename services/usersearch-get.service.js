const { usersearchDb } = require('../db')
  // any additional call to datastore here
  const usersearchGet = async (name) => {
    try {
      return await usersearchDb(name)
    } catch (e) {
      throw new Error(e.message)
    }
  }  
  module.exports = {
    usersearchGet,
  }