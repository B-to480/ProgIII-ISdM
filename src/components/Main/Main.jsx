import React from "react";
import styles from './Main.module.css'

function Main ({miarti,mides,mipre,parte01,prf01}){
    return (
        <main className={styles.elmain}>
            <h1>{miarti}</h1>
            <h2>{mides}</h2>
            <article>
                <h3>{mipre}</h3>
                <section>
                    <h3>{parte01}</h3>
                    <p>{prf01}</p>
                        
                </section>
            </article>
            
        </main>//items"Origen","Estado_actual","Proyeccion_futura"

    )
}
export default Main;