import db from '../models'

const todosUsuarios = async (req: any, res: any) => {
    try {
        let usuarios = await db.Usuario.findAll({});
        res.status(200).send(usuarios)
    } catch (error){
        console.log(error);
        res.status(412);
    }
}

module.exports = {
    todosUsuarios,
}