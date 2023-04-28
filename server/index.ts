const express = require('express')
const app = express()
const port = process.env.PORT || 3001
import db from './models'

db.sequelize.sync().then(() =>{
  app.listen(port, () =>{
    console.log(`Rodando na porta: ${port}`)
  })
})