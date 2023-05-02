import db from "../models";

const todasPessoas = async (req: any, res: any) => {
  try {
    let pessoas = await db.Pessoa.findAll({});
    res.status(200).send(pessoas);
  } catch (error) {
    console.log(error);
    res.sendStatus(412);
  }
};

const adicionarPessoa = async (req: any, res: any) => {
  try {
    if (
      !req.body ||
      !req.body.nome ||
      !req.body.email ||
      !req.body.rua ||
      !req.body.numero ||
      !req.body.complemento ||
      !req.body.bairro ||
      !req.body.cidade ||
      !req.body.estado ||
      !req.body.cpf ||
      !req.body.dataNascimento ||
      !req.body.genero ||
      !req.body.etnia ||
      !req.body.estadoCivil ||
      !req.body.telefone ||
      !req.body.dependentes ||
      !req.body.rendaFamiliar ||
      !req.body.telefoneRecado ||
      !req.body.objetivo ||
      !req.body.horta
    ) {
      return res
        .status(400)
        .send("Por favor, preencha todos os campos obrigatórios.");
    }
    let info = {
      nome: req.body.nome,
      email: req.body.email,
      rua: req.body.rua,
      numero: req.body.numero,
      complemento: req.body.complemento,
      bairro: req.body.bairro,
      cidade: req.body.cidade,
      estado: req.body.estado,
      cpf: req.body.cpf,
      dataNascimento: req.body.dataNascimento,
      genero: req.body.genero,
      etnia: req.body.etnia,
      estadoCivil: req.body.estadoCivil,
      telefone: req.body.telefone,
      dependentes: req.body.dependentes,
      rendaFamiliar: req.body.rendaFamiliar,
      telefoneRecado: req.body.telefoneRecado,
      objetivo: req.body.objetivo,
      horta: req.body.horta,
    };
    const pessoa = await db.Pessoa.create(info);
    res.status(200).send(info);
  } catch (error) {
    console.log(error);
    res.sendStatus(412);
  }
};


const localizarPessoa = async (req: any, res: any) => {
    let id = req.params.id;
    let pessoa = await db.Pessoa.findOne({ where: { id: id } });
    res.status(200).send(pessoa);
  };



module.exports = {
  todasPessoas,
  adicionarPessoa,
  localizarPessoa,

};
