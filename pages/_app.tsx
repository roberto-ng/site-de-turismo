import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createContext, Dispatch, SetStateAction, useState } from 'react';
import Layout  from '../components/Layout';

//** Valores do formulário de passagens */
interface FormPassagensValores {
    origem: string,
    destino: string,
    ida: string,
    volta: string,
}

export type IFormularioContext = [FormPassagensValores, Dispatch<SetStateAction<FormPassagensValores>>];
export const FormularioContext = createContext<IFormularioContext>(null!);

function MyApp({ Component, pageProps }: AppProps) {
    const [formulario, setFormulario] = useState<FormPassagensValores>({
        origem: '',
        destino: '',
        ida: '',
        volta: '',
    });

    return (
        <FormularioContext.Provider value={[formulario, setFormulario]}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </FormularioContext.Provider>
    );
}

export default MyApp
