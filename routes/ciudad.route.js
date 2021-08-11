const express = require('express')
const router = express.Router({ mergeParams: true })
const routeController = require("../common/route.controller")
const CiudadController = require("../controllers/ciudad.controller")

router.get("/",(request,response)=>{
    console.log(request.query);
    routeController.handleRequest(request, response, CiudadController.getAll)
})

router.get('/:id',(request,response) => {
    console.log("get bt id route" +request.params);
    routeController.handleRequest(request, response, CiudadController.getById)
  });

module.exports = router