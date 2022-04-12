const { createuserDb } = require('../db')
  // any additional call to datastore here
  const createuserPost = async (display_name, email, client_id, user_status, last_login, role) => {
    try {
      return await createuserDb(display_name, email, client_id, user_status, last_login, role)
    } catch (e) {
      throw new Error(e.message)
    }
  }  
  module.exports = {
    createuserPost,
  }