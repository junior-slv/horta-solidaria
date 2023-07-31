import db from "../models";

const mostrarTodasPessoas = async (req: any, res: any) => {
  try {
    let pessoas = await db.Pessoa.findAll({
      attributes: {
        exclude: [
          "dependentes",
          "rendaFamiliar",
          "objetivo",
          "createdAt",
          "updatedAt",
          "fk_Endereco_id",
          "fk_Telefones_id",
          "fk_Estado_Civil_id",
          "fk_Genero_id",
          "fk_Etnia_id",
          "fk_Horta_id",
        ],
      },
    });

    res.json(pessoas); // Envie o resultado como resposta em formato JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar pessoas." });
  }
};

const adicionarPessoa = async (req: any, res: any) => {
  try {
    // Validação dos campos obrigatórios
    const camposObrigatorios = [
      "telefone",
      "estadocivil",
      "genero",
      "etnia",
      "rua",
      "numero",
      "bairro",
      "cidade",
      "estado",
      "pais",
      "nome",
      "email",
      "cpf",
      "cep",
      "datanascimento",
      "dependentes",
      "rendafamiliar",
      "objetivo",
      "capacitacao",
      "comercializar",
      "horta",
    ];
    const camposAusentes = camposObrigatorios.filter(
      (campo) => !req.body[campo]
    );
    if (camposAusentes.length > 0) {
      return res
        .status(400)
        .send(`Campos obrigatórios ausentes: ${camposAusentes.join(", ")}`);
    }

    const {
      usuario_id,
      telefone,
      estadocivil,
      genero,
      etnia,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      pais,
      nome,
      email,
      cpf,
      cep,
      datanascimento,
      dependentes,
      rendafamiliar,
      capacitacao,
      comercializar,
      telefonerecado,
      objetivo,
      horta,
    } = req.body;

    const transaction = await db.sequelize.transaction();

    try {
      const estadoCivilEncontrado = await db.Estado_Civil.findOne({
        where: { estadoCivil: estadocivil },
        transaction,
      });
      const generoEncontrado = await db.Genero.findOne({
        where: { genero: genero },
        transaction,
      });
      const etniaEncontrada = await db.Etnia.findOne({
        where: { etnia: etnia },
        transaction,
      });
      const objetivoEncontrado = await db.Objetivo.findOne({
        where: { objetivo: objetivo },
        transaction,
      });
      const hortaEncontrada = await db.Horta.findOne({
        where: { nome: horta },
        transaction,
      });

      if (!estadoCivilEncontrado || !generoEncontrado || !etniaEncontrada || !objetivoEncontrado || !hortaEncontrada) {
        await transaction.rollback();
        return res.status(400).send("Informações inválidas.");
      }

      const endereco = await db.Endereco.create({
        rua: rua,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        pais: pais,
        cep: cep,
        transaction,
      });

      const telefoneCriado = await db.Telefones.create({
        telefone: telefone,
        transaction,
      });

      const info = {
        nome: nome,
        email: email,
        cpf: cpf,
        dataNascimento: datanascimento,
        fk_Endereco_id: endereco.id_endereco,
        fk_Telefones_id: telefoneCriado.id_telefone,
        fk_Estado_Civil_id: estadoCivilEncontrado.id_estadoCivil,
        fk_Genero_id: generoEncontrado.id_genero,
        fk_Etnia_id: etniaEncontrada.id_etnia,
        dependentes: dependentes,
        rendaFamiliar: rendafamiliar,
        capacitacao: capacitacao,
        comercializar: comercializar,
        telefonerecado: telefonerecado,
        fk_Objetivo_id: objetivoEncontrado.id_objetivo,
        fk_Horta_id: hortaEncontrada.id_horta,
      };

      const pessoa = await db.Pessoa.create(info, { transaction });

      const info_log = {
        data_hora: new Date(),
        endpoint: "/api/pessoa/adicionar",
        metodo: "Adicionar",
        parametros: JSON.stringify(info),
        status: "200",
        ip: req.ip,
        resposta: "Pessoa criada",
        fk_Usuario_id: req.body.usuario_id,
      };
      await db.Registros.create(info_log, { transaction });
      await transaction.commit();

      return res.status(200).send(pessoa);
    } catch (error: any) {
      await transaction.rollback();

      // Tratamento de erros específicos
      if (error.name === "SequelizeUniqueConstraintError") {
        return res.status(409).send("CPF duplicado.");
      }

      console.log(error);

      // Criação do log de erro
      const info_log = {
        data_hora: new Date(),
        endpoint: "/api/pessoa/adicionar",
        metodo: "Adicionar",
        parametros: JSON.stringify(req.body),
        status: "500",
        ip: req.ip,
        resposta: "Tentativa mal sucedida de adicionar uma nova pessoa",
        fk_Usuario_id: req.body.usuario_id,
      };
      await db.Registros.create(info_log);

      return res.status(500).send("Erro interno do servidor.");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("Erro interno do servidor.");
  }
};

const atualizarPessoa = async (req: any, res: any) => {
  try {
    const pessoaId = req.params.id;
    const pessoa = await db.Pessoa.findByPk(pessoaId);
    if (!pessoa) {
      return res.status(500).send("Pessoa não encontrada.");
    }

    const {
      telefone,
      estadocivil,
      genero,
      etnia,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      pais,
      nome,
      email,
      cpf,
      cep,
      capacitacao,
      comercializar,
      datanascimento,
      dependentes,
      rendafamiliar,
      telefonerecado,
      objetivo,
      horta_id,
    } = req.body;

    const estadoCivilEncontrado = await db.Estado_Civil.findOne({
      where: { estadoCivil: estadocivil },
    });
    const generoEncontrado = await db.Genero.findOne({
      where: { genero: genero },
    });
    const etniaEncontrada = await db.Etnia.findOne({
      where: { etnia: etnia },
    });
    const objetivoEncontrado = await db.Objetivo.findOne({
      where: { objetivo: objetivo },
    });

    if (!estadoCivilEncontrado || !generoEncontrado || !etniaEncontrada || !objetivoEncontrado) {
      return res.status(400).send("Informações inválidas.");
    }

    // Atualização dos dados da pessoa
    await db.Pessoa.update(
      {
        telefone,
        estadocivil,
        genero,
        etnia,
        rua,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        pais,
        nome,
        email,
        cpf,
        cep,
        datanascimento,
        capacitacao,
        comercializar,
        dependentes,
        rendafamiliar,
        telefonerecado,
        objetivo,
        horta_id,
        fk_Objetivo_id: objetivoEncontrado.id_objetivo,
        fk_Estado_Civil_id: estadoCivilEncontrado.id_estadoCivil,
        fk_Genero_id: generoEncontrado.id_genero,
        fk_Etnia_id: etniaEncontrada.id_etnia,
      },
      {
        where: { id_pessoa: pessoaId },
      }
    );

    // Criação do log
    const info_log = {
      data_hora: new Date(),
      endpoint: "/api/pessoa/atualizar",
      metodo: "Atualizar",
      parametros: `ID: ${pessoaId}`,
      status: "200",
      resposta: "Pessoa atualizada com sucesso",
      fk_Usuario_id: req.body.usuario_id,
    };
    await db.Registros.create(info_log);

    return res.status(200).send("Pessoa atualizada com sucesso.");
  } catch (error) {
    console.log(error);

    // Criação do log de erro
    const info_log = {
      data_hora: new Date(),
      endpoint: "/api/pessoa/atualizar",
      metodo: "Atualizar",
      parametros: `ID: ${req.params.id}`,
      status: "500",
      resposta: "Tentativa mal sucedida de atualizar a pessoa",
      fk_Usuario_id: req.body.usuario_id,
    };
    await db.Registros.create(info_log);

    return res.sendStatus(500);
  }
};

const deletarPessoa = async (req: any, res: any) => {
  try {
    const pessoaId = req.params.id;
    const pessoa = await db.Pessoa.findByPk(pessoaId);
    if (!pessoa) {
      return res.status(500).send("Pessoa não encontrada.");
    }

    // Criação do log antes de deletar a pessoa
    const info_log = {
      data_hora: new Date(),
      endpoint: "/api/pessoa/deletar",
      metodo: "Deletar",
      parametros: `ID: ${pessoaId}`,
      status: "200",
      ip: req.ip,
      resposta: "Pessoa deletada com sucesso",
      fk_Usuario_id: req.body.usuario_id,
    };
    await db.Registros.create(info_log);

    await db.Pessoa.destroy({
      where: { id_pessoa: pessoaId },
    });

    return res.status(200).send("Pessoa deletada com sucesso.");
  } catch (error) {
    console.log(error);

    // Criação do log de erro
    const info_log = {
      data_hora: new Date(),
      endpoint: "/api/pessoa/deletar",
      metodo: "Deletar",
      parametros: `ID: ${req.params.id}`,
      status: "500",
      ip: req.ip,
      resposta: "Tentativa mal sucedida de deletar a pessoa",
      fk_Usuario_id: req.body.usuario_id,
    };
    await db.Registros.create(info_log);

    return res.sendStatus(412);
  }
};

const mostrarPessoaPorId = async (req: any, res: any) => {
  try {
    const pessoaId = req.params.id;
    const usuarioId = req.body.usuario_id; // Obtém o usuário_id do corpo da requisição

    const pessoa = await db.Pessoa.findByPk(pessoaId, {
      include: [
        {
          model: db.Endereco,
          attributes: { exclude: ["id_endereco", "createdAt", "updatedAt"] },
        },
        {
          model: db.Telefones,
          attributes: { exclude: ["id_telefone", "createdAt", "updatedAt"] },
        },
        { model: db.Estado_Civil, attributes: { exclude: ["id_estadoCivil"] } },
        { model: db.Genero, attributes: { exclude: ["id_genero"] } },
        { model: db.Etnia, attributes: { exclude: ["id_etnia"] } },
        { model: db.Objetivo, attributes: { exclude: ["id_objetivo"] } },
        { model: db.Horta, attributes: { exclude: ["id_horta"] } },
      ],
      attributes: {
        exclude: [
          "fk_Endereco_id",
          "fk_Telefones_id",
          "fk_Estado_Civil_id",
          "fk_Genero_id",
          "fk_Etnia_id",
          "fk_Horta_id",
          "fk_Objetivo_id"
        ],
      },
    });

    if (!pessoa) {
      return res.status(500).send("Pessoa não encontrada.");
    }

    // Criação do log
    const info_log = {
      data_hora: new Date(),
      endpoint: "/api/pessoa/:id",
      metodo: "Busca",
      parametros: `ID: ${pessoaId}`,
      status: "200",
      ip: req.ip,
      resposta: "Tentativa bem sucedida de obter a pessoa por ID",
      fk_Usuario_id: usuarioId, // Usa o valor do usuário_id obtido do corpo da requisição
    };
    await db.Registros.create(info_log);

    return res.status(200).send(pessoa);
  } catch (error) {
    console.log(error);

    // Criação do log de erro
    const info_log = {
      data_hora: new Date(),
      endpoint: "/api/pessoa/:id",
      metodo: "Busca",
      parametros: `ID: ${req.params.id}`,
      status: "500",
      ip: req.ip,
      resposta: "Tentativa mal sucedida de obter a pessoa por ID",
      fk_Usuario_id: req.body.usuario_id,
    };
    await db.Registros.create(info_log);

    return res.sendStatus(500);
  }
};

module.exports = {
  mostrarTodasPessoas,
  adicionarPessoa,
  atualizarPessoa,
  deletarPessoa,
  mostrarPessoaPorId,
};
