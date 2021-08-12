const express = require('express')
const router = express.Router({ mergeParams: true })
const routeController = require("../common/route.controller")
const MensajeController = require("../controllers/mensaje.controller")

router.get("/",(request,response)=>{
    console.log(request.query);
    routeController.handleRequest(request, response, MensajeController.getAll)
})

router.get('/:id',(request,response) => {
    console.log("get bt id route" +request.params);
    routeController.handleRequest(request, response, MensajeController.getById)
  });

router.post('/',(request,response) => {
    console.log("create route mensajes" +request.params);
    routeController.handleRequest(request, response, MensajeController.create)
  });


module.exports = router