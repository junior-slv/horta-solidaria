import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBox, faCalendarDay, faBasketShopping, faX, faCheck } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '@/components/sidebar/Sidebar';
import { Botao } from '../../components/buttons/Botao';
import FormInput from '@/components/inputs/FormInput';
import FormRow from '@/components/FormRow';
import Router from 'next/router';
import { AuthContext } from '@/contexts/AuthContext';
import { addDonation } from '@/services/api';
import { z } from 'zod';
import Toast from '@/components/toast/Toast';


// Definindo o esquema de validação com Zod
const schema = z.object({
  doador: z.string(),
  produto: z.string(),
  quantidade: z.number(),
  data: z.string(),
});

const cadastroDefault: React.FC = () => {
  const { isAuth } = useContext(AuthContext);
  const [doador, setDoador] = useState<string | undefined>();
  const [produto, setProduto] = useState<string | undefined>();
  const [quantidade, setQuantidade] = useState<number | undefined>();
  const [data, setData] = useState<string | undefined>();
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formError, setFormError] = useState<boolean>(false);

  const handleAddDonation = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Validação dos dados do formulário
      const formValues = { doador, produto, quantidade, data };
      schema.parse(formValues);

      await addDonation(doador!, produto!, quantidade!, data!);
      setFormSubmitted(true);
      setFormError(false);

      // Resetando os valores após o envio
      setDoador('');
      setProduto('');
      setQuantidade(undefined);
      setData('');
    } catch (err) {
      console.log('Error: ', err);
      setFormSubmitted(false);
      setFormError(true);
    }
  };

  // Verificar se o usuário está autenticado
  if (!isAuth) {
    return null; // Ou pode exibir uma mensagem de carregamento ou redirecionar para a página de login diretamente
  }

  return (
    <div className="overflow-y-hidden flex bg-beige">
      <Sidebar />
      {/* Div para content */}
      <div className="flex justify-center items-center flex-col relative w-full">
        {/* Título da página */}
        <p className="font-bold text-darkGreen text-4xl top-5 absolute">Cadastrar Doação</p>
        {/* formulário */}
        <div className="flex-col relative w-[565px] h-[523px] mt-[80px] bg-white rounded-2xl justify-center items-center flex shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <div className="w-[464px]">
            <form onSubmit={handleAddDonation}>
              {/* Input 1 */}
              <FormRow label={<FontAwesomeIcon icon={faUser} />}>
                <FormInput value={doador} onChange={(e) => setDoador(e.target.value)} type="text" placeholder="Nome" />
              </FormRow>
              {/* Input 2 */}
              <FormRow label={<FontAwesomeIcon icon={faBox} />}>
                <FormInput
                  value={quantidade}
                  onChange={(e) => setQuantidade(parseInt(e.target.value))}
                  type="number"
                  placeholder="Quantidade"
                />
              </FormRow>
              {/* Input 3 */}
              <FormRow label={<FontAwesomeIcon icon={faBasketShopping} />}>
                <FormInput value={produto} onChange={(e) => setProduto(e.target.value)} type="text" placeholder="Produto" />
              </FormRow>
              {/* Input 4 */}
              <FormRow label={<FontAwesomeIcon icon={faCalendarDay} />}>
                <FormInput value={data} onChange={(e) => setData(e.target.value)} type="date" placeholder="Data" />
              </FormRow>
              {/* Botões */}
              <div className="justify-around flex">
                <Botao type="button" onClick={() => Router.replace('/doacao/principal')} className="w-5/12 bg-lightBlue hover:bg-darkBlue">
                  Voltar
                </Botao>
                <Botao type="submit" className="w-5/12 bg-lightGreen hover:bg-darkGreen">
                  Cadastrar
                </Botao>
              </div>
            </form>
            {formSubmitted && (
              <Toast message="Doação adicionada com Sucesso!">
                <FontAwesomeIcon className='mr-2' icon={faCheck}/>
              </Toast>
            )}
            {formError && (
              <Toast message="Erro ao enviar!">
                <FontAwesomeIcon className='mr-2' icon={faX}/>
              </Toast>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default cadastroDefault;
