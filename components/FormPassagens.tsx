import styles from '../styles/FormPassagens.module.css';

/** Um formulário para simular a busca de passagens */
export default function FormPassagens() {
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
                        <input 
                            type="text" 
                            className={styles.textInput}
                            placeholder="01/01/2023"
                        />
                    </div>

                    <div className={styles.item}>
                        <label>Volta: </label>
                        <input 
                            type="text" 
                            className={styles.textInput}
                            placeholder="02/01/2023"
                        />
                    </div>
                </div>

                <div className={styles.linha}>
                    <button>Buscar</button>
                </div>
            </div>
    );
}