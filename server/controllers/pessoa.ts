import db from "../models";

const mostrarTodasPessoas = async (req: any, res: any) => {
  try {
    let pessoas = await db.Pessoa.findAll({
      include: [
        {
          model: db.Endereco,
          attributes: { exclude: ["id", "createdAt", "updatedAt"] },
          include: { model: db.Estado, attributes: ["estado", "uf"] },
        },
        { 
          model: db.Telefone, 
          attributes: { exclude: ["id", "createdAt", "updatedAt"] } 
        },
        { model: db.EstadoCivil, attributes: { exclude: ["id"] } },
        { model: db.Genero, attributes: { exclude: ["id"] } },
        { model: db.Etnia, attributes: { exclude: ["id"] } },
      ],
      attributes: {
        exclude: [
          "endereco_id",
          "telefone_id",
          "estadocivil_id",
          "genero_id",
          "etnia_id",
        ],
      },
    });

    res.status(200).send(pessoas);
  } catch (error) {
    console.log(error);
    res.status(412);
  }
};


const adicionarPessoa = async (req: any, res: any) => {
  try {
    const {
      estado,
      telefone,
      estadocivil,
      genero,
      etnia,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      nome,
      email,
      cpf,
      datanascimento,
      dependentes,
      rendafamiliar,
      telefonerecado,
      objetivo,
      horta_id,
      usuario_id,
    } = req.body;

    const [estadoEncontrado, estadoCivilEncontrado, generoEncontrado, etniaEncontrada] =
      await Promise.all([
        db.Estado.findOne({ where: { uf: estado } }),
        db.EstadoCivil.findOne({ where: { estadoCivil: estadocivil } }),
        db.Genero.findOne({ where: { genero: genero } }),
        db.Etnia.findOne({ where: { etnia: etnia } }),
      ]);

    if (!estadoEncontrado || !estadoCivilEncontrado || !generoEncontrado || !etniaEncontrada) {
      res.status(400).send("Informações inválidas.");
      return;
    }

    const endereco = await db.Endereco.create({
      rua: rua,
      numero: numero,
      complemento: complemento,
      bairro: bairro,
      cidade: cidade,
      estado_id: estadoEncontrado.id,
    });

    let telefoneEncontrado = await db.Telefone.findOne({ where: { telefone: telefone } });

    if (!telefoneEncontrado) {
      telefoneEncontrado = await db.Telefone.create({ telefone: telefone });
    }

    const info = {
      nome: nome,
      email: email,
      cpf: cpf,
      datanascimento: datanascimento,
      endereco_id: endereco.id,
      telefone_id: telefoneEncontrado.id,
      estadocivil_id: estadoCivilEncontrado.id,
      genero_id: generoEncontrado.id,
      etnia_id: etniaEncontrada.id,
      dependentes: dependentes,
      rendafamiliar: rendafamiliar,
      telefonerecado: telefonerecado,
      objetivo: objetivo,
      horta_id: horta_id,
    };
    await db.Request.create({
      operacao: "POST",
      url: req.originalUrl,
      timestamp: new Date(),
      usuario_id: usuario_id,
    });
    const pessoa = await db.Pessoa.create(info);

    res.status(200).send(pessoa);
  } catch (error) {
    console.log(error);
    res.sendStatus(412);
  }
};
const atualizarPessoa = async (req: any, res: any) => {
  try {
    const pessoaId = req.params.id;

    const pessoaExistente = await db.Pessoa.findByPk(pessoaId);
    if (!pessoaExistente) {
      res.status(404).send("Pessoa não encontrada.");
      return;
    }

    const {
      estado,
      telefone,
      estadocivil,
      genero,
      etnia,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      nome,
      email,
      cpf,
      datanascimento,
      dependentes,
      rendafamiliar,
      telefonerecado,
      objetivo,
      horta_id,
      usuario_id,
    } = req.body;


    const [estadoEncontrado, estadoCivilEncontrado, generoEncontrado, etniaEncontrada] =
      await Promise.all([
        db.Estado.findOne({ where: { uf: estado } }),
        db.EstadoCivil.findOne({ where: { estadoCivil: estadocivil } }),
        db.Genero.findOne({ where: { genero: genero } }),
        db.Etnia.findOne({ where: { etnia: etnia } }),
      ]);

    if (!estadoEncontrado || !estadoCivilEncontrado || !generoEncontrado || !etniaEncontrada) {
      res.status(400).send("Informações inválidas.");
      return;
    }

    const endereco = await db.Endereco.findByPk(pessoaExistente.endereco_id);
    if (!endereco) {
      res.status(404).send("Endereço não encontrado.");
      return;
    }

    endereco.rua = rua;
    endereco.numero = numero;
    endereco.complemento = complemento;
    endereco.bairro = bairro;
    endereco.cidade = cidade;
    endereco.estado_id = estadoEncontrado.id;
    await endereco.save();

    let telefoneEncontrado = await db.Telefone.findByPk(pessoaExistente.telefone_id);
    if (!telefoneEncontrado) {
      telefoneEncontrado = await db.Telefone.create({ telefone: telefone });
    } else {
      telefoneEncontrado.telefone = telefone;
      await telefoneEncontrado.save();
    }
    await db.Request.create({
      operacao: "PUT",
      url: req.originalUrl,
      timestamp: new Date(),
      usuario_id: usuario_id,
    });
    pessoaExistente.nome = nome;
    pessoaExistente.email = email;
    pessoaExistente.cpf = cpf;
    pessoaExistente.datanascimento = datanascimento;
    pessoaExistente.estadocivil_id = estadoCivilEncontrado.id;
    pessoaExistente.genero_id = generoEncontrado.id;
    pessoaExistente.etnia_id = etniaEncontrada.id;
    pessoaExistente.dependentes = dependentes;
    pessoaExistente.rendafamiliar = rendafamiliar;
    pessoaExistente.telefonerecado = telefonerecado;
    pessoaExistente.objetivo = objetivo;
    pessoaExistente.horta_id = horta_id;
    await pessoaExistente.save();

    res.status(200).send(pessoaExistente);
  } catch (error) {
    console.log(error);
    res.sendStatus(412);
  }
};

const deletarPessoa = async (req: any, res: any) => {
  try {
    const pessoaId = req.params.id;
    const usuario_id = req.body.usuario_id; 

    const pessoa = await db.Pessoa.findByPk(pessoaId);
    if (!pessoa) {
      res.status(404).send("Pessoa não encontrada.");
      return;
    }


    await db.Pessoa.destroy({
      where: {
        id: pessoaId,
      },
    });


    await db.Request.create({
      operacao: "DELETE",
      url: req.originalUrl,
      timestamp: new Date(),
      usuario_id: usuario_id,
    });

    res.status(200).send("Pessoa deletada com sucesso.");
  } catch (error) {
    console.log(error);
    res.sendStatus(412);
  }
};




module.exports = {
  mostrarTodasPessoas,
  adicionarPessoa,
  atualizarPessoa,
  deletarPessoa
};
