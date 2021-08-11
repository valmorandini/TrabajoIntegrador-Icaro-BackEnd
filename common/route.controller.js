const error = require("./error")

async function handleRequest (req,res,methodController, next){
    try {
        await methodController(req,res,next)
    }catch(ex){
        console.error(ex)
        error.errorHandler(res,ex)
    }
}

module.exports = {
    handleRequest
  }