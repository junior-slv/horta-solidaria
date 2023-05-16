const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors')
import db from './models'
import jwt from 'jsonwebtoken'
import { createEndereco } from './seeders/Endereco'
import { createEstado } from './seeders/Estado'
import { createUsuario } from './seeders/usuario'
import { createEstadoCivil } from './seeders/estadocivil'
import { createGenero } from './seeders/genero'
import { createEtnias } from './seeders/etnia'
import { seedDoacoes } from './seeders/Doacao'
import { seedPessoas } from './seeders/pessoa'

var corsOptions = {
  origin: "http://localhost:3000"
}
const verificarToken = (req: any, res: any, next: any) => {
  const token = req.headers['x-acess-token'];
  jwt.verify(token, 'chave_secreta', (err: any, decoded: any) => {
    if (err) return res.status(401).end();
    req.userId = decoded.userId;
    next();
  });
};

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

const rotaPessoa = require('./routes/pessoa') 
app.use('/api/pessoa', rotaPessoa)

const rotaEndereco = require('./routes/endereco')
app.use('/api/endereco', rotaEndereco)

const rotaUsuario = require('./routes/rotaUsuario')
app.use('/api/usuario', rotaUsuario)

db.sequelize.sync().then(() =>{
  app.listen(port, () =>{
    console.log(`Rodando na porta: ${port}`)
  })
})