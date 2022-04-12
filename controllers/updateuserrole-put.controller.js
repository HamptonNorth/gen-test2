const { updateuserroleService } = require('../services')
  const { updateuserrolePut } = updateuserroleService  
  //   calls other imported services here  
  const putUpdateuserrole = async (req, res, next) => {    
    try {
      // req.body ignored for GET
       const { client_id, role } = req.body     
       const r = await updateuserrolePut(client_id, role)  
       res.status(201).send(r) 
        
       next()

    //  const { client_id, role } = req.body     
    //   await updateuserrolePut(client_id, role)      
    //   res.sendStatus(201)  
    //   next()
    } catch (e) {
      console.log(e.message)
      res.sendStatus(500) && next(e)
    }
  }  
  module.exports = {
    putUpdateuserrole,
  }