const { userService } = require('../services')
  const { userGet } = userService  
  //   calls other imported services here  
  const getUser = async (req, res, next) => {    
    try {
      // req.body ignored for GET
       const { id } = req.params     
       const r = await userGet(id)  
       res.status(200).send(r) 
        
       next()

    //  const { id } = req.params     
    //   await userGet(id)      
    //   res.sendStatus(200)  
    //   next()
    } catch (e) {
      console.log(e.message)
      res.sendStatus(500) && next(e)
    }
  }  
  module.exports = {
    getUser,
  }