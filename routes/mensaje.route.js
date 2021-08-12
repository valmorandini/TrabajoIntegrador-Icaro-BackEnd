const express = require('express')
const router = express.Router({ mergeParams: true })
const routeController = require("../common/route.controller")
const MensajeController = require("../controllers/mensaje.controller")
const {required} = require('../middlewares/auth')

router.get("/",[required],(request,response)=>{
    console.log(request.query);
    routeController.handleRequest(request, response, MensajeController.getAll)
})

router.get('/:id',[required],(request,response) => {
    console.log("get bt id route" +request.params);
    routeController.handleRequest(request, response, MensajeController.getById)
  });

router.post('/',[required],(request,response) => {
    console.log("create route mensajes" +request.params);
    routeController.handleRequest(request, response, MensajeController.create)
  });

router.delete('/:id',[required],(request,response) => {
    console.log("Delete route mensajes" +request.params);
    routeController.handleRequest(request, response, MensajeController.eliminar)
  });  

module.exports = router