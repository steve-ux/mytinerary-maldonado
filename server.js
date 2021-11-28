const express = require("express")
const cors = require("cors")
const Router = require("./routes/routes")
require('./config/database')

const app = express()

app.use(cors())

app.get("/pruebas/datos",(req, res)=>{
    console.log("Me llegó un pedido GET")
    res.json({respuesta: "ola keace"})
})

app.use("/api", Router)
app.listen(4000, ()=>{console.log("Hello! Server is listening on port 4000")})



