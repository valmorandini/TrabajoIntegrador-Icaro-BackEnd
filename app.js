const express = require('express')
const router = express.Router()
const app = express()
const port = 3000
const config = require('config')
const apiPrefix = config.get('apiPrefix')
const passport = require("passport")
const passportConfig = require("./config/server/passportConfig")

const bodyParser = require("body-parser");  

app.use(bodyParser.urlencoded({
    extended: false
  }))
app.use(bodyParser.json());

app.use(apiPrefix + "/users",require("./routes/user.route"))
app.use(apiPrefix + "/mensajes",require("./routes/mensaje.route"))
app.use(apiPrefix + "/paises",require("./routes/pais.route"))
app.use(apiPrefix + "/ciudades",require("./routes/ciudad.route"))
app.use(apiPrefix + "/seguridad",require("./routes/seguridad.route"))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// add router in the Express app.
app.use("/", router);

passport.use(passportConfig.createStrategy())
app.use(passport.initialize())


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})