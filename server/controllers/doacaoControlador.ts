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

module.exports = {
    todosDoacao,
}