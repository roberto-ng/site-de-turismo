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
    faCompress,
    faLaptop,
} from '@fortawesome/free-solid-svg-icons'

const servicos = [
    { texto: 'Passagens Aérias', icone: faPlane },
    { texto: 'Hotelaria', icone: faHome },
    { texto: 'Locação de Veículos', icone: faBus },
    { texto: 'Pacotes de Viagens', icone: faSortAlphaUp },
    { texto: 'Seguro Viagem', icone: faThumbsUp },
    { texto: 'Vistos Consulares', icone: faComments },
];

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
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
            
            <div className={styles.containerCinza}>
                <h2 style={{ textAlign: 'center', margin: 0 }}>
                    Contato:
                </h2>

                <div className={styles.contatoDados}>
                    <div>
                        <p>Rua Lorem Ipsum 100000</p>
                        <p>CEP 99999999, Lorem Ipsum - SP</p>
                        <p>(99) 9999-9999</p>
                        <p>(99) 1234-5678</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
