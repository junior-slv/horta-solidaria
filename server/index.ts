const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors')
import db from './models'
import jwt from 'jsonwebtoken'
import { seedDoacao } from './seeders/seedDoacao'
import { seedPessoa } from './seeders/seedPessoa'
import { seedUsuario } from './seeders/seedUsuario'
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