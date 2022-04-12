const { deleteuserDb } = require('../db')
  // any additional call to datastore here
  const deleteuserDelete = async (client_id) => {
    try {
      return await deleteuserDb(client_id)
    } catch (e) {
      throw new Error(e.message)
    }
  }  
  module.exports = {
    deleteuserDelete,
  }