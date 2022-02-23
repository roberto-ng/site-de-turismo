import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { ReactNode, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Layout.module.css';

type Props = {
    children?: ReactNode,
}

const menuItens = [
    {
        texto: 'Sobre Nós',
        link: '#',
    },
    {
        texto: 'Intercâmbio',
        link: '#',
    },
    {
        texto: 'Lazer',
        link: '#',
    },
];

function MenuDesktop() {
    return (
        <div id={styles.barra}>
            <div id={styles.logoContainer}>
                <img 
                    src="/res/logo.png" 
                    width="150" 
                    height="30" 
                />
            </div>

            <div id={styles.barraMenu}>
                <ul>
                    {menuItens.map((item, i) => (
                        <li key={i}>
                            <a href={item.link}>
                                {item.texto}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function MenuMobile() {
    let [menuAberto, setMenuAberto] = useState(false);

    return (
        <div id={styles.barraMobile}>
            <div id={styles.logo}>
                <img 
                    src="/res/logo.png"
                    width="150px"
                    height="30px"
                />
            </div>

            <div id={styles.menuMobile}>
                <button 
                    onClick={() => setMenuAberto(!menuAberto)}
                    onBlur={() => setMenuAberto(false)} // fechar menu quando o botão perder o foco
                >
                    <FontAwesomeIcon 
                        icon={faBars} 
                        style={{ fontSize: '1.4em', height: '1em' }}
                    />
                </button>

                <div 
                    id={styles.menuMobileConteudo}
                    className={menuAberto ? styles.aberto : ''}
                >
                    {menuItens.map((item, i) => (
                        <a href={item.link} key={i}>
                            {item.texto}
                        </a>
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
        </div>
    );
};
