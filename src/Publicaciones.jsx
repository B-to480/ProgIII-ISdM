import { useState, useEffect } from "react";
import {
  obtenerPublicaciones,
  eliminarPublicacion,
} from "./services/publicaciones";
import Nuevapubli from "./components/CrearPubli";

export default function MostrarPublicaciones() {
  const [lapubli, setLapubli] = useState([]);
  const [publicarga, setPublicarga] = useState(true);
  const [publierror, setPublierror] = useState(null);
  const [publimode, setPublimode] = useState(null);

  async function leerPubli() {
    try {
      setPublicarga(true);
      const datospubli = await obtenerPublicaciones();
      setLapubli(datospubli);
    } catch (publiproblema) {
      setPublierror(publiproblema.message);
    } finally {
      setPublicarga(false);
    }
  }

  useEffect(() => {
    leerPubli();
  }, []);

  async function Elimpubli(elimid, elimtt) {
    if (window.confirm(`¿Deseas eliminar la publicación: ${elimtt}?`)) {
      try {
        await eliminarPublicacion(elimid);
        setLapubli((actual) => actual.filter((p) => p.id !== elimid));
      } catch (err) {
        setPublierror(err.message);
      }
    }
  }

  function btnsPubli(pbid, pbtt, pbct) {
    return (
      <>
        <button
          type="button"
          onClick={() =>
            setPublimode({ id: pbid, titulo: pbtt, contenido: pbct })
          }
        >
          Editar publicación
        </button>
        <button type="button" onClick={() => Elimpubli(pbid, pbtt)}>
          Eliminar publicación
        </button>
      </>
    );
  }

  if (publicarga)
    return <h3>Estamos CARGANDO las publicaciones, por favor, aguarde...</h3>;
  if (publierror) return <p>¡Rayos! Aparecio un error salvaje: {publierror}</p>;
  if (lapubli.length === 0)
    return (
      <>
        <h2>
          La lista de Publicaciones esta vacia, alguien debe crear
          publicaciones.
        </h2>
      </>
    );
  return (
    <div>
      {publimode === null && (
        <button type="button" onClick={() => setPublimode({})}>
          Crear una Publicación
        </button>
      )}

      {publimode !== null && (
        <Nuevapubli
          publi={publimode}
          onGuardado={() => {
            (setPublimode(null), leerPubli());
          }}
          onCancelar={() => setPublimode(null)}
        />
      )}
      <br />
      <h2>Publicaciones recientes:</h2>
      <br />
      <ul>
        {lapubli.map((unapubli) => (
          <li key={unapubli.id}>
            <h3>{unapubli.titulo}</h3>
            <p style={{ whiteSpace: "pre-line" }}>{unapubli.contenido}</p>
            <h6>Fecha de publicación: {unapubli.creado_en}</h6>
            {btnsPubli(unapubli.id, unapubli.titulo, unapubli.contenido)}
          </li>
        ))}
      </ul>
    </div>
  );
}

{
  /*
    export default function MostrarPublicaciones(){
    const [lapubli, setLapubli] = useState([])
    const [publicarga, setPublicarga] = useState(true)
    const [publierror, setPublierror] = useState(null)

    async function leerPubli() {
        try {
            setPublicarga(true)
            const datospubli = await obtenerPublicaciones()
            setLapubli(datospubli)
        } catch (publiproblema){
            setPublierror(publiproblema.message)
        } finally{
            setPublicarga(false)
        }
    }

    async function Elimpubli(elimid,elimtt){
        if (window.confirm(`¿Deseas eliminar la publicación: ${elimtt}?`)) {
            try {
                await eliminarPublicacion(elimid)
                setLapubli((actual) => actual.filter((p) => p.id !== elimid))
            } catch (err) {
                setPublierror(err.message)
            }
        }
    }

    function btnsPubli(pbid,pbtt,pbct){
        return(
            <>
                <Link to={"/Npubli/"+pbid} state={{titulo:pbtt, contenido:pbct}}>
                    <button type="button">Editar publicación</button>
                </Link>
                <button type="button" onClick={()=>Elimpubli(pbid, pbtt)}>
                    Eliminar publicación
                </button>
            </>
        )
    }

    useEffect(()=>{
        leerPubli()
    },[])

    if (publicarga)
        return <h3>Estamos CARGANDO las publicaciones, por favor, aguarde...</h3>
    if (publierror)
        return <p>¡Rayos! Aparecio un error salvaje: {publierror}</p>
    if (lapubli.length === 0)
        return (<>
            <h2>La lista de Publicaciones esta vacia, alguien debe crear publicaciones.</h2>
            <Link to={"/Npubli"}><button type="button">Crear una Publicación</button></Link>
        </>)
    return(
        <div>
            <h2>Publicaciones recientes:</h2>
            <br/>
            <Link to={"/Npubli"}><button type="button">Crear una Publicación</button></Link>
            <ul>
                {lapubli.map((unapubli)=>(
                    <li key={unapubli.id}>
                        <h3>{unapubli.titulo}</h3>
                        <p style={{ whiteSpace: "pre-line" }}>{unapubli.contenido}</p>
                        <h6>Fecha de publicación: {unapubli.creado_en}</h6>
                        {btnsPubli(unapubli.id, unapubli.titulo, unapubli.contenido)}
                    </li>
                ))}
            </ul>
        </div>
    )
}*/
}

{
  /* Version vieja
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { obtenerPublicaciones } from "./services/publicaciones";
import { eliminarPublicacion } from "./services/publicaciones";
import Nuevapubli from "./CrearPubli";


export default function MostrarPublicaciones(){
    const [lapubli,setLapubli]=useState([])
    const [publicarga,setPublicarga]=useState(true)
    const [publierror,setPublierror]=useState(null)

    function Elimpubli(elimid,elimtt){
        if (window.confirm("Deseas eliminar la publicacion: ",elimtt)) {
        eliminarPublicacion(elimid)
        }
    }
    function btnsPubli(pbid,pbtt,pbct){
        return(//botones de editar para redirec a crearpubli o borra para solicitar borrar
            <>
            <button onClick={Nuevapubli(pbid, pbtt, pbct)}>Editar publicaciones</button>
            <button onClick={Elimpubli(pbid, pbtt)}>Eliminar publicaciones</button>
            </>
        )
    }

    async function leerPubli() {
        try {
            setPublicarga(true)
            const datospubli=await obtenerPublicaciones()
            console.log("Pasó la validación:", datospubli)
            setLapubli(datospubli)
        } catch (publiproblema){
            setPublierror(publiproblema.message)
        } finally{
            setPublicarga(false)
        }
    }
    useEffect(()=>{
        leerPubli()
    },[])
    if (publicarga)
        return <h3>Estamos CARGANDO las publicaciones, por favor, aguarde...</h3>
    if (publierror) 
        return <p>¡Rayos! Aparecio un error salvaje:{publierror}</p>
    if (lapubli.length===0)
        return (<>
        <h2>La lista de Publicaciones esta vacia, alguien debe crear publicaciones.</h2>
        <button type="button"><Link to={"/Npubli"}>Crear una Publicación</Link></button>
        </>)
    else return(
        <div>
            <h2>Publicaciones recientes:</h2>
            <br/>
            <button type="button"><Link to={"/Npubli"}>Crear una Publicación</Link></button>
            <ul>
                {lapubli.map((unapubli)=>(
                    <>
                    <li key={unapubli.id}>
                        <h3>{unapubli.titulo}</h3>
                        <p>{unapubli.contenido}</p>
                        <h6>Fecha de publicación: {unapubli.creado_en}</h6>
                        {btnsPubli(unapubli.id,
                        unapubli.titulo,
                        unapubli.contenido)}
                    </li>
                    </>
                ))}
            </ul>
        </div>
    )
}*/
}
