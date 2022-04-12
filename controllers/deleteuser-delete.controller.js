const { deleteuserService } = require('../services')
  const { deleteuserDelete } = deleteuserService  
  //   calls other imported services here  
  const deleteDeleteuser = async (req, res, next) => {    
    try {
      // req.body ignored for GET
       const { client_id } = req.body     
       const r = await deleteuserDelete(client_id)  
       res.status(201).send(r) 
        
       next()

    //  const { client_id } = req.body     
    //   await deleteuserDelete(client_id)      
    //   res.sendStatus(201)  
    //   next()
    } catch (e) {
      console.log(e.message)
      res.sendStatus(500) && next(e)
    }
  }  
  module.exports = {
    deleteDeleteuser,
  }