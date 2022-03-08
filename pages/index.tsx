import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faPlane, 
    faHome, 
    faBus, 
    faSortAlphaUp,
    faThumbsUp,
    faComments,
} from '@fortawesome/free-solid-svg-icons'

const servicos = [
    { texto: 'Passagens Aérias', icone: faPlane },
    { texto: 'Hotelaria', icone: faHome },
    { texto: 'Locação de Veículos', icone: faBus },
    { texto: 'Pacotes de Viagens', icone: faSortAlphaUp },
    { texto: 'Seguro Viagem', icone: faThumbsUp },
    { texto: 'Vistos Consulares', icone: faComments },
];

export default function Home() {
    return (
        <div className={styles.container}>
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

            <div className={styles.servicosWrapper}>
                <div className={styles.servicos}>
                    {servicos.map((servico, i) => (
                        <div key={i} className={styles.servico}>
                            <FontAwesomeIcon 
                                icon={servico.icone} 
                                className={styles.icone} 
                            />

                            <p>{servico.texto}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}