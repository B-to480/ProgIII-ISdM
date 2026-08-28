import React from "react";
import styles from './Navbar.module.css';

function Navbar ({titu,pag01,pag02,pag03}){
    return (
        <><header>
            <h1>{titu}</h1>
        </header>
        <nav className={styles.elnavbar}>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
        </nav></>
    )
}
export default Navbar