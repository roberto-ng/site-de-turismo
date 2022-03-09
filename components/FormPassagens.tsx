import { useMemo } from 'react';
import NumberFormat from 'react-number-format';
import Link from 'next/link';
import styles from '../styles/FormPassagens.module.css';

/** Um formulário para simular a busca de passagens */
export default function FormPassagens() {
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
                    />
                </div>

                <div className={styles.item}>
                    <label>Destino: </label>
                    <input 
                        type="text" 
                        className={styles.textInput}
                        placeholder="Brasília"
                    />
                </div>
            </div>

            <div className={styles.linha}>
                <div className={styles.item}>
                    <label>Ida: </label>
                    <NumberFormat
                        className={styles.textInput}
                        defaultValue={hoje.toLocaleDateString()}
                        placeholder={hoje.toLocaleDateString()}
                        format="##/##/####"
                    />
                </div>

                <div className={styles.item}>
                    <label>Volta: </label>
                    <NumberFormat 
                        className={styles.textInput}
                        defaultValue={amanha.toLocaleDateString()}
                        placeholder={amanha.toLocaleDateString()}
                        format="##/##/####"
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