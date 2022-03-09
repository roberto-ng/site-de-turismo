import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faPlane, 
    faHome, 
    faBus, 
    faSortAlphaUp,
    faThumbsUp,
    faComments,
} from '@fortawesome/free-solid-svg-icons';
import FormPassagens from '../components/FormPassagens';
import styles from '../styles/Home.module.css';

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
            <FormPassagens />

            <div className={styles.servicosWrapper}>
                <div className={styles.servicos}>
                    {servicos.map((servico, i) => (
                        <div key={i} className={styles.servico}>
                            <FontAwesomeIcon 
                                //@ts-ignore
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