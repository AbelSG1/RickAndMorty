// express. sequelize, pg , morgan

const express = require("express")
const morgan = require('morgan')
const routes = require('./src/routes/index')
const errorHandler = require('./src/utils/middlewares/errorHandler')
const setHeaders = require('./src/utils/middlewares/setHeaders')
const {conn} = require('./src/models')
const {PORT} = require('./src/utils/config/index')
const app = express()

// aca vamos a setear todos nuestrso headers
app.use(express.urlencoded({extended: true, limit:"50mb"}))
app.use(express.json({limit: "50mb"}))

app.use(express.text())


app.use(morgan('dev')) 
app.use(setHeaders)


// setear nuestras rutas
app.use('/api', routes)


//aca vamos a hacer nuestor middleware de control de errores
app.use(errorHandler)

// aca tenemos que hacer vuetro server.listenc
conn.sync({ force : true  })
.then( () => {
    console.log('base de datos conectado')
    app.listen(PORT, () =>{
        console.log(`el servidor esta escuchando el puerto ${PORT}`)
    })
})

