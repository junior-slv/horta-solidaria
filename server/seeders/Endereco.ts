import db from "../models";

export const endereco = [
    {
      rua: 'Rua 1',
      numero: '123',
      complemento: 'Complemento 1',
      bairro: 'Bairro 1',
      cidade: 'Cidade 1',
      cep: '86020-420',
      estado_id: 1,
    },
    {
      rua: 'Rua 1',
      numero: '123',
      complemento: 'Complemento 1',
      bairro: 'Bairro 1',
      cidade: 'Cidade 1',
      cep: '86020-420',
      estado_id: 2,
    },
    {
      rua: 'Rua 1',
      numero: '123',
      complemento: 'Complemento 1',
      bairro: 'Bairro 1',
      cidade: 'Cidade 1',
      cep: '86020-420',
      estado_id: 1,
    },
    {
      rua: 'Rua 1',
      numero: '123',
      complemento: 'Complemento 1',
      bairro: 'Bairro 1',
      cidade: 'Cidade 1',
      cep: '86020-420',
      estado_id: 4,
    },
    {
      rua: 'Rua 1',
      numero: '123',
      complemento: 'Complemento 1',
      bairro: 'Bairro 1',
      cidade: 'Cidade 1',
      cep: '86020-420',
      estado_id: 1,
    },
    {
      rua: 'Rua 1',
      numero: '123',
      complemento: 'Complemento 1',
      bairro: 'Bairro 1',
      cidade: 'Cidade 1',
      cep: '86020-420',
      estado_id: 12,
    },
    
  ];
  

  export const createEndereco = async () => {
    try {
      for (const user of endereco) {
        await db.Endereco.create(user);
      }
      console.log("Usuarios criados com sucesso.");
    } catch (err) {
      console.error(err);
    }
  }