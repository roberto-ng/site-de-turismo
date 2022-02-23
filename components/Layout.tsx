import Link from 'next/link'
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
        texto: 'Home',
        link: '/',
    },
    {
        texto: 'Sobre Nós',
        link: '/sobre-nos',
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
                    onBlur={fecharMenu} // fechar menu quando o botão perder o foco
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
    );
};
