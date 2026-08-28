function Filtros({turnoActivo,onCambiarTurno}){
    const listaturnos=["Todos","Mañana","Tarde","Noche"]
    return (
        <nav className="filtros">
            {listaturnos.map((turno)=>
            <button>{turno}</button>
            )}
        </nav>
    )
}