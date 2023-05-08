import db from "../models";

export const infos = [
    {
        doador: "Maria",
        produto: "Arroz",
        quantidade: 3
    },
    {
        doador: "José",
        produto: "Feijão",
        quantidade: 4
    },
    {
        doador: "Ana",
        produto: "Óleo de soja",
        quantidade: 2
    },
    {
        doador: "João",
        produto: "Açúcar",
        quantidade: 1
    },
    {
        doador: "Carla",
        produto: "Macarrão",
        quantidade: 5
    },
    {
        doador: "Pedro",
        produto: "Leite em pó",
        quantidade: 2
    },
    {
        doador: "Lucas",
        produto: "Café",
        quantidade: 3
    },
    {
        doador: "Julia",
        produto: "Feijão",
        quantidade: 2
    },
    {
        doador: "Fernando",
        produto: "Açúcar",
        quantidade: 1
    },
    {
        doador: "Isabela",
        produto: "Arroz",
        quantidade: 4
    },
    {
        doador: "Rafael",
        produto: "Feijão",
        quantidade: 3
    },
    {
        doador: "Mariana",
        produto: "Macarrão",
        quantidade: 4
    },
    {
        doador: "Gustavo",
        produto: "Leite em pó",
        quantidade: 1
    },
    {
        doador: "Bianca",
        produto: "Café",
        quantidade: 2
    },
    {
        doador: "Diego",
        produto: "Arroz",
        quantidade: 2
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
