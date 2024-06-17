require("dotenv").config() // Requerimos dotenv en el archivo principal para poder emplear variables de entorno en todo el proyecto (process.env)
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const { checkDB, syncModels } = require("./database")
const defineRelations = require('./database/relations')

const startDB = async () => {  
  await checkDB()          // 1. Comprobar conexión
  await defineRelations()  // 2. Importar modelos y definir sus relaciones
  syncModels()       // 3. Sincronizar modelos con la base de datos (no ponemos el await porque es lo último, no hay nada debajo)
}

const initAndListen = () => {
  const app = express()
  .use(cors())
  .use(morgan('dev'))
  .use(express.json())
  .use("/api", require ("./api/routes")) 
  .listen(3000, () => {
    console.log("Server started. Listening on port 3000")
  })
}



const startAPI = async () => {
  await startDB()
  initAndListen()
}

startAPI()


 //app.use('/api', router) // Cualquier petición empieza con '/api'
//const router = require("./api/routes") // Instancia del router principal, alojado en /api/routes/index.js 
// const app = express()
// app.use(express.json())
// app.use(morgan('dev'))

// app.use('/api', router) // Cualquier petición que llegue empezando con '/api' empleará el router principal de la línea 14

// app.listen(process.env.PORT, () => {
//   console.log(`Server started! Listening on port ${process.env.PORT}`)
//   startDB() // Iniciamos la conexión al servidor una vez nuestro servidor esté arrancado y esperando peticiones
// })

