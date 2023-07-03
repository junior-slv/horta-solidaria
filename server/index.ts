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
import { createCargos } from './seeders/Cargo'
import { createPessoas } from './seeders/pessoa'
import { createObjetivos } from './seeders/Objetivo'

var corsOptions = {
  origin: "https://horta-solidaria.vercel.app"
}
const verificarToken = (req: any, res: any, next: any) => {
  const token = req.headers['x-access-token'] as string;
  if (!token) {
    return res.status(401).end();
  }

  jwt.verify(token, 'chave_secreta', (err: any, decoded: any) => {
    if (err) {
      return res.status(401).end();
    }

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
// createEstadoCivil()
// createGenero()
// createEtnias()
// createCargos()
// createObjetivos()
// createPessoas()
//rotas
const rotaDoacao = require('./routes/doacaoRotas')
app.use('/api/doacao', rotaDoacao)

const rotaPessoa = require('./routes/pessoa') 
app.use('/api/pessoa',rotaPessoa)

const rotaEndereco = require('./routes/endereco')
app.use('/api/endereco', rotaEndereco)

const rotaUsuario = require('./routes/rotaUsuario')
app.use('/api/usuario', rotaUsuario)

const rotaHorta = require('./routes/rotaHorta')
app.use('/api/horta', rotaHorta)

const rotaObjetivo = require('./routes/rotaObjetivo')
app.use('/api/objetivo', rotaObjetivo)

db.sequelize.sync().then(() =>{
  app.listen(port, () =>{
    console.log(`Rodando na porta: ${port}`)
  })
})