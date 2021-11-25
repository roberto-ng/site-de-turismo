import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'

const Layout: NextPage = ({ children }) => {
    return (
        <div className={styles.container}>
            {/* Contem a imagem com nuvens que passa pela tela no fundo da página */}
            <div id={styles.fundo} />

            {children}
        </div>
    );
};

export default Layout;