import db from "../models";

export const infos = [
    {
        doador: "Maria",
        produto: "Arroz",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "José",
        produto: "Feijão",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "Ana",
        produto: "Óleo de soja",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "João",
        produto: "Açúcar",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "Carla",
        produto: "Macarrão",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "Pedro",
        produto: "Leite em pó",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "Lucas",
        produto: "Café",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "Julia",
        produto: "Feijão",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "Fernando",
        produto: "Açúcar",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "Isabela",
        produto: "Arroz",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "Rafael",
        produto: "Feijão",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "Mariana",
        produto: "Macarrão",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "Gustavo",
        produto: "Leite em pó",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "Bianca",
        produto: "Café",
        quantidade: 3,
        data: "01/01/2023"
    },
    {
        doador: "Diego",
        produto: "Arroz",
        quantidade: 3,
        data: "01/01/2023"
    },
];


export const seedDoacoes = async () => {
  try {
    for (const info of infos) {
      await db.Doacao.create(info);
    }
    console.log("Doações inseridas com sucesso.");
  } catch (err) {
    console.error(err);
  }
}
