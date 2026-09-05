import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { obtenerCursoPorId } from "../servicios/Lcursos";
import { Link } from "react-router-dom";

export default function Estecurso() {
  const {id_curso} = useParams();
  const [curso, setCurso] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargarCurso() {
      try {
        setCargando(true);
        const datos = await obtenerCursoPorId(id_curso);
        setCurso(datos);
      } catch (problema) {
        setError(problema.message);
      } finally {
        setCargando(false);
      }
    }
    cargarCurso();
  }, [id_curso]);

  if (cargando) return <p>Cargando…</p>;
  if (error) return <p>No se pudo cargar: {error}</p>;

  return (
    <div>
      <h2>{curso.titulo_curso}</h2>
      <h3>Nivel: {curso.curso_nivel}    -   Profesor: {curso.curso_profe}</h3>
      <h3>Cupos reservados: {curso.curso_cupo} Cupos disponibles: {60-curso.curso_cupo}</h3>
      <p>{curso.descr_curso}</p>
      <hr></hr>
      <Link to="/prgprogx_cursos">Volver</Link>
    </div>
  );
}