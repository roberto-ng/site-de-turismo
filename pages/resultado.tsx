import React from 'react';
import FormPassagens from '../components/FormPassagens'
import styles from '../styles/Resultado.module.css';
import prefixo from '../utils/prefixo'

const resultados = [
    { imagem: '/res/fotos/foto1.jpg', valor: 'R$9.999,99' },
    { imagem: '/res/fotos/foto2.jpg', valor: 'R$7.599,99' },
    { imagem: '/res/fotos/foto3.jpg', valor: 'R$5.299,99' },
    { imagem: '/res/fotos/foto4.jpg', valor: 'R$8.799,99' },
];

export default function Resultado() {
    return (
        <div id={styles.container}>
            <FormPassagens />

            <div className={styles.retangulo}>
                <p className={styles.titulo}>
                    {resultados.length} passagens encontradas:
                </p>

                {resultados.map((resultado, i) => (
                    <div className={styles.passagem} key={i}>
                        <img src={prefixo + resultado.imagem} />

                        <div className={styles.dados}>
                            <p style={{ fontSize: 'large', textAlign: 'center' }}>
                                Passagem por apenas: {resultado.valor}
                            </p>

                            <button className={styles.button} style={{ marginTop: 10 }}>
                                Comprar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}