import { useForm } from "react-hook-form";
import { servicioCursos } from "../../services/index.js";
export default function EditarCurso({ curso, onActualizado }) {
const {register,handleSubmit,setError,reset,
    formState: { errors, isSubmitting, isDirty },
    } = useForm({values: {nombre: curso?.nombre ?? "",
    descripcion: curso?.descripcion ?? "",
},});
async function editarCurso(data) {
    try {
        const actualizado = await servicioCursos.actualizar(curso.id, data);
        reset(actualizado ?? data);
        onActualizado?.(actualizado);
    }
    catch (error) {setError("root", {message:
        error?.response?.data?.detail ?? "No se pudo guardar el curso",
    });
    }
}
return (
    <div>
        <h1>Editar Curso</h1>
        <form onSubmit={handleSubmit(editarCurso)} noValidate>
            <input placeholder="Nombre"{...register("nombre", {
                required: "El nombre es obligatorio",
                maxLength: { value: 100, message: "Máximo 100 caracteres" },
            })}/>
            {errors.nombre && <p role="alert">{errors.nombre.message}</p>}
            <input placeholder="Descripción"{...register("descripcion", {
                required: "La descripción es obligatoria",
            })}/>
            {errors.descripcion && <p role="alert">{errors.descripcion.message}</p>}
            {errors.root && <p role="alert">{errors.root.message}</p>}
            <button type="submit" disabled={isSubmitting || !isDirty}>
            {isSubmitting ? "Guardando…" : "Guardar"}
            </button>
        </form>
    </div>
 );
}