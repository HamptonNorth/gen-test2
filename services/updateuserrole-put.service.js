const { updateuserroleDb } = require('../db')
  // any additional call to datastore here
  const updateuserrolePut = async (client_id, role) => {
    try {
      return await updateuserroleDb(client_id, role)
    } catch (e) {
      throw new Error(e.message)
    }
  }  
  module.exports = {
    updateuserrolePut,
  }