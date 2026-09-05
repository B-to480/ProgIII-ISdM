import React from "react";
import { Link } from "react-router-dom";

export default function Navegacion(){
    return (
    <nav>
        <h2>Acceder:</h2>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/prgprogx_cursos">Cursos</Link></li>
        </ul>
    </nav>
    )
}