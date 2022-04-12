const { usersearchService } = require('../services')
  const { usersearchGet } = usersearchService  
  //   calls other imported services here  
  const getUsersearch = async (req, res, next) => {    
    try {
      // req.body ignored for GET
       const { name } = req.query     
       const r = await usersearchGet(name)  
       res.status(200).send(r) 
        
       next()

    //  const { name } = req.query     
    //   await usersearchGet(name)      
    //   res.sendStatus(200)  
    //   next()
    } catch (e) {
      console.log(e.message)
      res.sendStatus(500) && next(e)
    }
  }  
  module.exports = {
    getUsersearch,
  }