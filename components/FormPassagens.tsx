import { useState } from 'react';
import styles from '../styles/FormPassagens.module.css';

/** Calcula que dia será o dia seguinte */
function calcularAmanha() {
    // Data de hoje
    const data = new Date();
    // Incrementar a data por 1 dia
    data.setDate(data.getDate() + 1);
    return data;
}

/** Um formulário para simular a busca de passagens */
export default function FormPassagens() {
    const [mostrarResultado, setMostrarResultado] = useState(false);
    const [hoje, setHoje] = useState(new Date());
    const [amanha, setAmanha] = useState(calcularAmanha());

    const handleBuscarClick = () => {
        setMostrarResultado(true);
    };

    const handleVoltarClick = () => {
        setMostrarResultado(false);
    }

    if (mostrarResultado) {
        return (
            <div id={styles.caixaPesquisa}>
                <p>Nenhum resultado encontrado.</p>
                <button onClick={handleVoltarClick} className={styles.button}>
                    Voltar
                </button>
            </div>
        );
    } else {
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
                                defaultValue={hoje.toLocaleDateString()}
                            />
                        </div>
    
                        <div className={styles.item}>
                            <label>Volta: </label>
                            <input 
                                type="text" 
                                className={styles.textInput}
                                defaultValue={amanha.toLocaleDateString()}
                            />
                        </div>
                    </div>
    
                    <div className={styles.linha}>
                        <button onClick={handleBuscarClick} className={styles.button}>
                            Buscar
                        </button>
                    </div>
                </div>
        );
    }
}