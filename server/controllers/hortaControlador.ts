import db from '../models'

const todasHortas = async (req: any, res: any) => {
    try {
        let hortas = await db.Horta.findAll({});
        res.status(200).send(hortas)
    } catch (error){
        console.log(error);
        res.sendStatus(412)
    }
}

const adicionarHorta = async (req:any, res: any) => {
    try {
        if (!req.body || !req.body.doador || !req.body.produto || !req.body.quantidade) {
            return res.status(400).send("Dados inválidos na solicitação");
        }
        
        let info = {
            doador: req.body.doador,
            produto: req.body.produto,
            quantidade: req.body.quantidade,
            data: req.body.data,
        }
        if (info.data.lenght > 10){
          res.sendStatus(412)
        }
        const doacao = await db.Doacao.create(info);
        res.status(200).send(info)
    } catch(error) {
        console.log(error)
        res.sendStatus(412)
    }
}
const atualizarHorta = async (req: any, res: any) => {
    try {
      const id = req.params.id;
  
      const doacao = await db.Doacao.findByPk(id);
  
      if (!doacao) {
        return res.status(404).send("Doação não encontrada");
      }
  
      doacao.doador = req.body.doador || doacao.doador;
      doacao.produto = req.body.produto || doacao.produto;
      doacao.quantidade = req.body.quantidade || doacao.quantidade;
      doacao.data = req.body.data || doacao.data;
  
      await doacao.save();
      res.status(200).send(doacao);
    } catch (error) {
      console.log(error);
      res.sendStatus(412);
    }
  }; 
  const deletarHorta = async (req: any, res: any) => {
    try {
      const id = req.params.id;
  
      const doacao = await db.Doacao.findByPk(id);
  
      if (!doacao) {
        return res.status(404).send("Doação não encontrada");
      }
  
      await doacao.destroy();
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(412);
    }
  };
  
module.exports = {
    todasHortas,
    adicionarHorta,
    atualizarHorta,
    deletarHorta

}