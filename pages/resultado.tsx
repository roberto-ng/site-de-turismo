import React from 'react';
import Image from 'next/image';
import FormPassagens from '../components/FormPassagens'
import styles from '../styles/Resultado.module.css';
import foto1 from '../public/res/fotos/foto1.jpg';
import foto2 from '../public/res/fotos/foto2.jpg';
import foto3 from '../public/res/fotos/foto3.jpg';
import foto4 from '../public/res/fotos/foto4.jpg';

const resultados = [
    { imagem: foto1, valor: 'R$9.999,99' },
    { imagem: foto2, valor: 'R$7.599,99' },
    { imagem: foto3, valor: 'R$5.299,99' },
    { imagem: foto4, valor: 'R$8.799,99' },
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
                        <Image
                            src={resultado.imagem}
                            width="260px"
                            height="150px"
                        />

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