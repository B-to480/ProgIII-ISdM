import { useForm } from "react-hook-form";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {actualizarPublicacion,crearPublicacion} from "../services/publicaciones";

export default function Nuevapubli({ publi, onGuardado, onCancelar }) {
  const id_publi = publi?.id ?? null;
  {
    /*
        /const {id} = useParams()               // undefined si es ruta /Npubli
    //const {state} = useLocation()          // { titulo, contenido } si venís de "Editar"
    // 
    
    const titulo_publi=state?.titulo ?? ""
    const cont_publi=state?.contenido ?? ""
    */
  }
  const [npublierror, setNpublierror] = useState(null);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();

  {
    /* version vieja
export default function Nuevapubli({id_publi, titulo_publi="", cont_publi=""}){
    const [npublierror, setNpublierror] = useState(null)
    const { handleSubmit, register, reset, formState: { errors, isSubmitting } } = useForm()
    const navigate = useNavigate()
*/
  }
  function cancelar() {
    const mensaje =
      id_publi == null
        ? "¿Queres cancelar la Creación de la publicación?"
        : "¿Queres cancelar la Edicion de la publicación?";
    if (window.confirm(mensaje)) {
      //navigate(-1)
      onCancelar();
    }
  }

  async function manejarPubli(publidatos) {
    try {
      if (id_publi == null) {
        await crearPublicacion(publidatos);
        //navigate(-1)
      } else {
        await actualizarPublicacion(
          id_publi,
          publidatos.titulo,
          publidatos.contenido,
        );
        //navigate(-1)
      }
      console.log("publicación guardada:", publidatos);
      reset();
      onGuardado();
    } catch (nperror) {
      setNpublierror(nperror.message);
    }
  }

  return (
    <div>
      <h3>Crear nueva publicación:</h3>
      {npublierror && <p>¡Rayos! Error: {npublierror}</p>}
      <form onSubmit={handleSubmit(manejarPubli)}>
        <h4>Ingrese Titulo:</h4>
        <input
          placeholder="Titulo de la publicación."
          defaultValue={publi.titulo}
          style={{
            width: "100%",
            padding: "8px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
          {...register("titulo", {
            required: "El titulo es obligatorio.",
            minLength: {
              value: 2,
              message: "Titulo debe contener al menos 2 caracteres.",
            },
            validate: (valor) =>
              valor.trim().length > 0 || "No dejar solo espacios.",
          })}
        />
        {errors.titulo && <p>{errors.titulo.message}</p>}

        <h4>Ingrese Contenido de la publicación:</h4>
        <textarea
          rows={7}
          placeholder="Contenido de la publicación..."
          defaultValue={publi.contenido}
          style={{
            width: "100%",
            padding: "8px",
            fontSize: "16px",
            boxSizing: "border-box",
            resize: "vertical",
          }}
          {...register("contenido", {
            required: "El contenido es obligatorio.",
            minLength: { value: 3, message: "Mínimo 3 caracteres" },
            validate: (valor) =>
              valor.trim().length > 0 || "No puede ser solo espacios",
          })}
        />
        {errors.contenido && <p>{errors.contenido.message}</p>}

        <br />
        <br />
        <button disabled={isSubmitting}>
          {isSubmitting ? "Guardando…" : "Guardar"}
        </button>
        <br />
        <br />
        <button type="button" onClick={cancelar}>
          {id_publi == null ? "Cancelar Crear" : "Cancelar Editar"}
        </button>
      </form>
    </div>
  );
}

{
  /*

*/
}

/*import { useForm } from "react-hook-form";
import { useState,useEffect } from "react";
import { actualizarPublicacion, crearPublicacion } from "./services/publicaciones";



export default function Nuevapubli({id_publi,titulo_publi="",cont_publi=""}){
    const [npublierror,setNpublierror]=useState(null)
    const {handleSubmit,register,reset,formState:{errors,isSubmitting}}=useForm()
    
    function Modoeditar(){
        return(
        id_publi==null?
        <button onClick={(window.confirm("¿Queres cancelar la Creación de la publicación?")).then(useNavigate(-1))}>Cancelar Crear</button>:
        <button onClick={(window.confirm("¿Queres cancelar la Edicion de la publicación?").then(useNavigate(-1)))}>Cancelar Editar</button>
    )}
    async function manejarPubli(publidatos){
        if (titulo_publi=="" && cont_publi==""){
                console.log("que publi se creó:", publidatos);
                try{
                    crearPublicacion(publidatos.titulo,publidatos.contenido)
                    reset()
                }catch (nperror){
                    setNpublierror(nperror.message)
                }
        }else{
                console.log("que publi se creó:", publidatos);
                try{
                    actualizarPublicacion(id_publi,publidatos.titulo,publidatos.contenido)
                    reset()
                }catch (nperror){
                    setNpublierror(nperror.message)
                }
        }
    }

    return(
        <>
        <main>
        <h3>Crear nueva publicación:</h3>
        <form onSubmit={handleSubmit(manejarPubli)}>
            <h4>Ingrese Titulo:</h4>
            <input placeholder="Titulo de la publicación." 
                defaultValue={titulo_publi} {...register("titulo", {required: "El titulo es obligatorio.",
                minLength:{value:2,message:"Titulo debe contener al menos 2 caracteres."},
                validate:(valor)=>valor.trim().length>0||"No dejar solo espacios."
                ,message: "Completa tu titulo."
            })}/>
            <h4>Ingrese Contenido de la publicación:</h4>
            <textarea rows={5} placeholder="Contenido de la publicación..." 
                defaultValue={cont_publi} {...register("contenido", {required: "El contenido es obligatorio.",
                minLength:{value:3,message:"Mínimo 3 caracteres"},message: "Agregá contenido.",
                validate:(valor)=>valor.trim().length>0||"No puede ser solo espacios"
            })}/>
            <br/><br/>
            <button disabled={isSubmitting}>
                {isSubmitting?"Guardando…":"Guardar"}</button>
            <br/><br/>
            <Modoeditar/>
        </form>
        </main>
        </>
    )
}*/
