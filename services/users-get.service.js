const { usersDb } = require('../db')
  // any additional call to datastore here
  const usersGet = async () => {
    try {
      return await usersDb()
    } catch (e) {
      throw new Error(e.message)
    }
  }  
  module.exports = {
    usersGet,
  }