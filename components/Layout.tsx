import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Layout.module.css';

const menuItens = [
    {
        texto: 'Nossa empresa',
        link: '#',
    },
    {
        texto: 'Apartamentos',
        link: '#',
    },
    {
        texto: 'Intercâmbio',
        link: '#',
    },
    {
        texto: 'Passaportes e vistos',
        link: '#',
    },
    {
        texto: 'Lazer',
        link: '#',
    },
];

const Layout: NextPage = ({ children }) => {
    return (
        <div className={styles.container}>
            {/* Contem a imagem com nuvens que passa pela tela no fundo da página */}
            <div id={styles.fundo} />

            <div id={styles.barra}>
                <div id={styles.logoContainer}></div>

                <div id={styles.barraMenu}>
                    <ul>
                        {menuItens.map((item, i) => (
                            <li key={i}>
                                <a href={item.link}>{item.texto}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {children}
        </div>
    );
};

export default Layout;