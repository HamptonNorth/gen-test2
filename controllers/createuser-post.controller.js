const { createuserService } = require('../services')
  const { createuserPost } = createuserService  
  //   calls other imported services here  
  const postCreateuser = async (req, res, next) => {    
    try {
      // req.body ignored for GET
       const { display_name, email, client_id, user_status, last_login, role } = req.body     
       const r = await createuserPost(display_name, email, client_id, user_status, last_login, role)  
       res.status(201).send(r) 
        
       next()

    //  const { display_name, email, client_id, user_status, last_login, role } = req.body     
    //   await createuserPost(display_name, email, client_id, user_status, last_login, role)      
    //   res.sendStatus(201)  
    //   next()
    } catch (e) {
      console.log(e.message)
      res.sendStatus(500) && next(e)
    }
  }  
  module.exports = {
    postCreateuser,
  }