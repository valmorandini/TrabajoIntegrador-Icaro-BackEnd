const express = require('express')
const router = express.Router({ mergeParams: true })
const routeController = require("../common/route.controller")
const UserController = require("../controllers/user.controller")

router.get("/",(request,response)=>{
    console.log(request.query);
    routeController.handleRequest(request, response, UserController.getAll)
})

module.exports = router