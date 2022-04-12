const { usersService } = require('../services')
  const { usersGet } = usersService  
  //   calls other imported services here  
  const getUsers = async (req, res, next) => {    
    try {
      // req.body ignored for GET
       const {  } = req.body     
       const r = await usersGet()  
       res.status(200).send(r) 
        
       next()

    //  const {  } = req.body     
    //   await usersGet()      
    //   res.sendStatus(200)  
    //   next()
    } catch (e) {
      console.log(e.message)
      res.sendStatus(500) && next(e)
    }
  }  
  module.exports = {
    getUsers,
  }