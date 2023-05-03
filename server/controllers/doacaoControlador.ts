import db from '../models'

const todosDoacao = async (req: any, res: any) => {
    try {
        let doacoes = await db.Doacao.findAll({});
        res.status(200).send(doacoes)
    } catch (error){
        console.log(error);
        res.sendStatus(412)
    }
}

const adicionarDoacao = async (req:any, res: any) => {
    try {
        if (!req.body || !req.body.doador || !req.body.produto || !req.body.quantidade || !req.body.data) {
            return res.status(400).send("Dados inválidos na solicitação");
        }
        
        let info = {
            doador: req.body.doador,
            produto: req.body.produto,
            quantidade: req.body.quantidade,
            data: req.body.data,
        }
        const doacao = await db.Doacao.create(info);
        res.status(200).send(info)
    } catch(error) {
        console.log(error)
        res.sendStatus(412)
    }
}

module.exports = {
    todosDoacao,
    adicionarDoacao,
}