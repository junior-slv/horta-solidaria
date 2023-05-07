import db from '../models'


const listarEnderecos = async (req: any, res: any) => {
  try {
    // Registro da requisição
    await db.Request.create({
      method: req.method,
      url: req.url,
      timestamp: new Date()
    });

    // Busque todos os endereços usando o método findAll do modelo
    const enderecos = await db.Endereco.findAll({
      include: {
        model: db.Estado, // Inclua o modelo Estado na consulta
        attributes: ['estado', 'uf'] // Especifique os atributos 'estado' e 'uf'
      },
      attributes: {
        exclude: ['estado_id'] // Exclua o atributo 'estado_id' da resposta
      }
    });

    res.status(200).json({ enderecos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao listar endereços' });
  }
};


module.exports = {
  listarEnderecos,
};
