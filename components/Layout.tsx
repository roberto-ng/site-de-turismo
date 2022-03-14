import Link from 'next/link'
import Head from 'next/head'
import { ReactNode, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/Layout.module.css'
import Sobre from './Sobre'

type Props = {
    children?: ReactNode,
}

const githubURL = 'https://github.com/roberto-ng';
const email = 'robertoguedesn@gmail.com';

const menuItens = [
    {
        texto: 'Home',
        link: '/',
    },
    {
        texto: 'Sobre Nós',
        link: '/sobre-nos',
    },
    {
        texto: 'Intercâmbio',
        link: '/intercambio',
    },
];

function MenuDesktop() {
    return (
        <div id={styles.barra}>
            <Link href="/">
                <a id={styles.logoContainer}>
                    <img 
                        src="/res/logo.png" 
                        width="150" 
                        height="30" 
                    />
                </a>
            </Link>

            <div id={styles.barraMenu}>
                <ul>
                    {menuItens.map((item, i) => (
                        <li key={i}>
                            <Link href={item.link}>
                                <a>{item.texto}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function MenuMobile() {
    let [menuAberto, setMenuAberto] = useState(false);

    const fecharMenu = () => {
        // fechar o menu depois de 200 milisegundos
        // sem isso, o navegador não muda de página quando o usuário clica num link do menu
        setTimeout(() => setMenuAberto(false), 200);
    };

    return (
        <div id={styles.barraMobile}>
            <Link href="/">
                <a id={styles.logo}>
                    <img 
                        src="/res/logo.png"
                        width="150px"
                        height="30px"
                    />
                </a>
            </Link>

            <div id={styles.menuMobile}>
                <button 
                    onClick={() => setMenuAberto(!menuAberto)}
                    onBlur={fecharMenu} // fechar menu quando o botão perder o foco
                >
                    <FontAwesomeIcon 
                        //@ts-ignore
                        icon={faBars} 
                        style={{ fontSize: '1.4em', height: '1em' }}
                    />
                </button>

                <div 
                    id={styles.menuMobileConteudo}
                    className={menuAberto ? styles.aberto : ''}
                >
                    {menuItens.map((item, i) => (
                        <Link href={item.link} key={i}>
                            <a>{item.texto}</a>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Layout({ children }: Props) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Turismo</title>
                
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Contem a imagem com nuvens que passa pela tela no fundo da página */}
            <div id={styles.fundo} />

            <MenuDesktop />
            <MenuMobile />

            <div id={styles.conteudo}>
                {children}
            </div>
            
            <div className={styles.centralizar}>
                <div className={styles.caixaContato}>
                    <div>
                        <p>Site desenvolvido por Roberto Guedes</p>
                        <div className={styles.linha}>
                            <FontAwesomeIcon 
                                //@ts-ignore
                                icon={faEnvelope} 
                                style={{ height: 40, width: 40, marginLeft: 8, }}
                            />
                            <p>Contato: <a href={'mailto: ' + email}>{email}</a></p>
                        </div>
                        <div className={styles.linha}>
                            <FontAwesomeIcon 
                                //@ts-ignore
                                icon={faGithubSquare} 
                                style={{ height: 40, width: 40, marginLeft: 8, }}
                            />

                            <p>Github: <a href={githubURL}>{githubURL}</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <Sobre />
        </div>
    );
};
