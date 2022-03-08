import styles from '../styles/SobreNos.module.css';

export default function Intercambio() {
    return (
        <div id={styles.container}>
            <div className={styles.retangulo}>
                <h2 className={styles.titulo}>Intercâmbio:</h2>
                <p>
                    Faça seu intercâmbio com a gente!<br/>
                    Temos ótimos descontos!<br/><br/>

                    Entre em contato para mais informações.
                </p>
            </div>
        </div>
    );
}