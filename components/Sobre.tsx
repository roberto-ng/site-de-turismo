import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/Sobre.module.css'

const repo = 'https://github.com/roberto-ng/site-de-turismo';

export default function Sobre() {
    const [mostrar, setMostrar] = useState(true);

    if (!mostrar) {
        return (<div></div>)
    }

    return (
        <div className={styles.container}>
            <FontAwesomeIcon 
                //@ts-ignore
                icon={faTimes}
                className={styles.icone}
                onClick={() => setMostrar(false)}
            />

            <FontAwesomeIcon 
                //@ts-ignore
                icon={faGithubSquare} 
                style={{ height: 60, width: 60, }}
            />

            <a href={repo} target="_blank" rel="noopener noreferrer">
                Veja o código fonte
            </a>
        </div>
    );
}