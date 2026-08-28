function Encabezado({eltitulo,elprofe,ttcomisiones,ttdisponibles}){

    return (
        <div>
            <h1>Materia: {eltitulo} · Profesor: {elprofe}</h1>
            <p>Cupones totales: {ttcomisiones} · Inscriptos: {ttcomisiones}-{ttdisponibles} · Disponibles: {ttdisponibles}</p>
        </div>
    )
}