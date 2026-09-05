import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { obtenerCursos } from "./Lcursos";

export default function Enlistador() {
  const [cursos, setCursos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  async function cargarCursos() {
    try {
      setCargando(true);
      const datos = await obtenerCursos();
      setCursos(datos);
    } catch (problema) {
      setError(problema.message);
    } finally {
      setCargando(false);
    }
  }

  useEffect(() => {
    cargarCursos();
  }, []);
  {
    /*
export default function Enlistador(){
    const [cursos,setCursos]=useState([])
    const [cargarndo,setCargando]=useState(true)
    const [error,setError]=useState(null)
    
    useEffect(()=>{
        losCursos()
            .then(async data=>await obtenerCursos())
            setCursos(data)
            .catch(elerror =>setError(elerror.message))
            .finally(()=>setCargando(false))
        },[])*/
  }

  if (cargando)
    return <h1>Estamos CARGANDO los Cursos, por favor, aguarde...</h1>;
  if (error) return <p>Surgio un error: {error}</p>;
  return (
    <div>
      <h2>Cursos disponibles:</h2>
      <ul>
        {cursos.map((uncurso) => (
          <>
            <li key={uncurso.id_curso}>
                <Link to={"./"+uncurso.id_curso}>
                {uncurso.id_curso}. {uncurso.titulo_curso}<br/>
                {uncurso.curso_profe}
                </Link>
            </li>
            <hr></hr>
          </>
        ))}
      </ul>
    </div>
  );
}
