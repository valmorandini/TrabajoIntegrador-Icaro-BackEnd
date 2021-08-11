const express = require('express')
const router = express.Router()
const app = express()
const port = 3000
const config = require('config')
const apiPrefix = config.get('apiPrefix')

const bodyParser = require("body-parser");  

app.use(bodyParser.urlencoded({
    extended: false
  }))
app.use(bodyParser.json());

app.use(apiPrefix + "/users",require("./routes/user.route"))
app.use(apiPrefix + "/mensajes",require("./routes/mensaje.route"))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// add router in the Express app.
app.use("/", router);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})