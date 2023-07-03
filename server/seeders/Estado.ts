import db from "../models";

export const estados = [
  {
    estado: "Rondônia",
    uf: "RO",
  },
  {
    estado: "Acre",
    uf: "AC",
  },
  {
    estado: "Amazonas",
    uf: "AM"
  },
  {
    estado: "Roraima",
    uf: "RR"
  },
  {
    estado: "Pará",
    uf: "PA"
  },
  {
    estado: "Amapá",
    uf: "AP"
  },
  {
    estado: "Tocantins",
    uf: "TO"
  },
  {
    estado: "Maranhão",
    uf: "MA"
  },
  {
    estado: "Piauí",
    uf: "PI"
  },
  {
    estado: "Ceará",
    uf: "CE"
  },
  {
    estado: "Rio Grande do Norte",
    uf: "RN"
  },
  {
    estado: "Paraíba",
    uf: "PB"
  },
  {
    estado: "Pernambuco",
    uf: "PE"
  },
  {
    estado: "Alagoas",
    uf: "AL"
  },
  {
    estado: "Sergipe",
    uf: "SE"
  },
  {
    estado: "Bahia",
    uf: "BA"
  },
  {
    estado: "Minas Gerais",
    uf: "MG"
  },
  {
    estado: "Espírito Santo",
    uf: "ES"
  },
  {
    estado: "Rio de Janeiro",
    uf: "RJ"
  },
  {
    estado: "São Paulo",
    uf: "SP"
  },
  {
    estado: "Paraná",
    uf: "PR"
  },
  {
    estado: "Santa Catarina",
    uf: "SC"
  },
  {
    estado: "Rio Grande do Sul",
    uf: "RS"
  },
  {
    estado: "Mato Grosso do Sul",
    uf: "MS"
  },
  {
    estado: "Mato Grosso",
    uf: "MT"
  },
  {
    estado: "Goiás",
    uf: "GO"
  },
  {
    estado: "Distrito Federal",
    uf: "DF"
  },
];


export const createEstado = async () => {
  try {
    for (const estado of estados) {
      const existingEstado = await db.Estado.findOne({ where: { uf: estado.uf } });
      if (!existingEstado) {
        await db.Estado.create(estado);
      }
    }
    console.log("Estados criados com sucesso.");
  } catch (err) {
    console.error(err);
  }
}
