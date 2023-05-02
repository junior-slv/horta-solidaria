import db from '../models'

const todosDoacao = async (req: any, res: any) => {
    try {
        let doacoes = await db.Doacao.findAll({});
        res.status(200).send(doacoes)
    } catch (error){
        console.log(error);
        res.status(412);
    }
}

const adicionarDoacao = async (req:any, res: any) => {
    try {
        let informacoes = {
            doador: req.body.doador,
            produto: req.body.produto,
            quantidade: req.body.quantidade,
            data: req.body.data,
        }
        const doacao = await db.Doacao.create(informacoes);
        res.status(200).send(doacao)
    } catch(error) {
        console.log(error)
        res.send(412)
    }
}

module.exports = {
    todosDoacao,
    adicionarDoacao,
}