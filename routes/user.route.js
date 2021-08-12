const express = require('express')
const router = express.Router({ mergeParams: true })
const routeController = require("../common/route.controller")
const UserController = require("../controllers/user.controller")
const {required} = require('../middlewares/auth')

router.get("/",[required],(request,response)=>{
    console.log(request.query);
    routeController.handleRequest(request, response, UserController.getAll)
})

router.get('/:id',[required],(request,response) => {
    console.log("get bt id route" +request.params);
    routeController.handleRequest(request, response, UserController.getById)
  });

module.exports = router