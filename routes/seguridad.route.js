const express = require('express')
const router = express.Router({ mergeParams: true })
const routeController = require("../common/route.controller")
const UserController = require("../controllers/user.controller")


router.post('/singin',(request,response) => {
    routeController.handleRequest(request, response, UserController.login)
  });

router.post('/singup',(request,response) => {
    routeController.handleRequest(request, response, UserController.create)
  });  

module.exports = router