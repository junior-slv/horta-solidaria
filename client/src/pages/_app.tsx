import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '@/styles/globals.css';
import { AppProps } from 'next/app';

// Configuração inicial
config.autoAddCss = false;

// Adiciona os ícones que serão usados na aplicação
library.add(faSearch);

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;