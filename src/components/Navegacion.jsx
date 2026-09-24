import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navegacion(){

    function Haycuenta(){
        const{ sesion } = useAuth();
        return sesion? <span>{sesion.user.email}</span>
            : <li><Link to="/prgprogx_micuenta">Ingresar</Link></li>;
    }
    
    return (
    <nav>
        <hr/>
        <h2>Acceder:</h2>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/prgprogx_cursos">Cursos</Link></li>
            <li><Link to="/prgprogx_registro">Registrarse</Link></li>
            <li><Link to="/Publicaciones">Publicaciones</Link></li>
            <Haycuenta/>
        </ul>
        <hr/>
    </nav>
    )
}