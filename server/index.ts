const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors')
import db from './models'
import { seedDoacao } from './seeders/seedDoacao'
import { seedPessoa } from './seeders/seedPessoa'
import { seedUsuario } from './seeders/seedUsuario'
var corsOptions = {
  origin: "http://localhost:3000"
}

const createDoacao = async () => {
  try {
    for (const doador of seedDoacao) {
      await db.Doacao.create(doador);
    }
    console.log("Doadores criados com sucesso.");
  } catch (err) {
    console.error(err);
  }
}
const createUser = async () => {
  try {
    for (const user of seedUsuario) {
      await db.Usuario.create(user);
    }
    console.log("Usuarios criados com sucesso.");
  } catch (err) {
    console.error(err);
  }
}
const createPessoa = async () => {
  try {
    for (const pesssoa of seedPessoa) {
      await db.Pessoa.create(pesssoa);
    }
    console.log("Usuarios criados com sucesso.");
  } catch (err) {
    console.error(err);
  }
}
createPessoa()
createUser();

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
const rotaUsuario = require('./routes/rotaUsuario') 
app.use('/api/usuario', rotaUsuario)
const rotaPessoas = require('./routes/rotaPessoas')
app.use('/api/pessoa', rotaPessoas)
//

db.sequelize.sync().then(() =>{
  app.listen(port, () =>{
    console.log(`Rodando na porta: ${port}`)
  })
})