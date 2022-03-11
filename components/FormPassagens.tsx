import { useContext, useMemo } from 'react';
import NumberFormat from 'react-number-format';
import Link from 'next/link';
import styles from '../styles/FormPassagens.module.css';
import { FormularioContext } from '../pages/_app';

/** Um formulário para simular a busca de passagens */
export default function FormPassagens() {
    const [formulario, setFormulario] = useContext(FormularioContext);

    const hoje = useMemo(() => new Date(), []);
    const amanha = useMemo(() => {
        // Data de hoje
        const data = new Date();
        // Incrementar a data por 1 dia
        data.setDate(data.getDate() + 1);
        return data;
    }, []);

    return (
        <div id={styles.caixaPesquisa}>
            <div className={styles.linha}>
                <p className={styles.titulo}>
                    Passagens aérias
                </p>
            </div>

            <div className={styles.linha}>
                <div className={styles.item}>
                    <label>Origem: </label>
                    <input 
                        type="text" 
                        className={styles.textInput}
                        placeholder="Rio de Janeiro"
                        value={formulario.origem}
                        onChange={(e) => {
                            const novoFormulario = { ...formulario, origem: e.target.value };
                            setFormulario(novoFormulario);
                        }}
                    />
                </div>

                <div className={styles.item}>
                    <label>Destino: </label>
                    <input 
                        type="text" 
                        className={styles.textInput}
                        placeholder="Brasília"
                        value={formulario.destino}
                        onChange={(e) => {
                            const novoFormulario = { ...formulario, destino: e.target.value };
                            setFormulario(novoFormulario);
                        }}
                    />
                </div>
            </div>

            <div className={styles.linha}>
                <div className={styles.item}>
                    <label>Ida: </label>
                    <NumberFormat
                        className={styles.textInput}
                        value={formulario.ida}
                        placeholder={hoje.toLocaleDateString()}
                        format="##/##/####"
                        onValueChange={({ value }) => {
                            const novoFormulario = { ...formulario, ida: value };
                            setFormulario(novoFormulario);
                        }}
                    />
                </div>

                <div className={styles.item}>
                    <label>Volta: </label>
                    <NumberFormat 
                        className={styles.textInput}
                        value={formulario.volta}
                        placeholder={amanha.toLocaleDateString()}
                        format="##/##/####"
                        onValueChange={({ value }) => {
                            const novoFormulario = { ...formulario, volta: value };
                            setFormulario(novoFormulario);
                        }}
                    />
                </div>
            </div>

            <div className={styles.linha}>
                <Link href="/resultado">
                    <a className={styles.button}>
                        Buscar
                    </a>
                </Link>
            </div>
        </div>
    );
}