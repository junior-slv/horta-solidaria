const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors')
import db from './models'
import { seedDoacao } from './seeders/seedDoacao'
var corsOptions = {
  origin: "http://localhost:3000"
}

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
// createUser();

//middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use((err:any, req:any, res:any, next:any) => {
  console.error(err.stack);
  res.status(500).send('Ocorreu um erro no servidor');
});
//


//rotas
const rotaDoacao = require('./routes/doacaoRotas')
app.use('/api/doacao', rotaDoacao)
//

db.sequelize.sync().then(() =>{
  app.listen(port, () =>{
    console.log(`Rodando na porta: ${port}`)
  })
})