const { userDb } = require('../db')
  // any additional call to datastore here
  const userGet = async (id) => {
    try {
      return await userDb(id)
    } catch (e) {
      throw new Error(e.message)
    }
  }  
  module.exports = {
    userGet,
  }