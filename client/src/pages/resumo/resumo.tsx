import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '@/contexts/AuthContext';
import { Botao } from '@/components/buttons/Botao';
import Sidebar from '@/components/sidebar/Sidebar';

const Resumo = () => {
  const { isAuth } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    // Verificar se o usuário está autenticado
    if (!isAuth) {
      router.push('/'); // Redirecionar para a página de login se não estiver autenticado
    }
  }, [isAuth, router]);

  if (!isAuth) {
    return null; // Ou pode exibir uma mensagem de carregamento ou redirecionar para a página de login diretamente
  }

  return (
    <div className="overflow-y-hidden flex">
      {/* Div Para sideBar */}
      <div className="z-50">
        <Sidebar />
      </div>
      {/* Div para content */}
      <div className="flex justify-center z-0 bg-beige items-center flex-col relative w-full">
        {/* Conteúdo da rota protegida */}
      </div>
    </div>
  );
};

export default Resumo;
