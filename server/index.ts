const express = require('express')
const app = express()
const port = process.env.PORT || 3001
import db from './models'
import { seedDoacao } from './seeders/seedDoacao'

const createUser = async () => {
  try {
    for (const doador of seedDoacao) {
      await db.Doacao.create(doador);
    }
    console.log("Doadores criados com sucesso.");
  } catch (err) {
    console.error(err);
  }
}
createUser();

//rotas
const rotaDoacao = require('./routes/doacaoRotas')
app.use('/api/doacao', rotaDoacao)
//

db.sequelize.sync().then(() =>{
  app.listen(port, () =>{
    console.log(`Rodando na porta: ${port}`)
  })
})