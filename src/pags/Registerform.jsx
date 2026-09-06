import { useForm } from "react-hook-form";



export default function Nuevacuenta(){
    const {register,handleSubmit,watch,
        formState:{errors,isSubmitting}}=useForm()
    
    async function manejarRegistro(datos) {
        console.log("Pasó la validación:", datos);
        try {
            await registrar(datos.email, datos.contrasena);
                navegar("/cursos");
  }     catch (problema) {
            setErrorDelServidor(problema.message);
  }
    
    }
    return(
        <>
        <main>
        <h2>¡Bienvenido!</h2>
        <h3>Formulario de Registro:</h3>
        <form onSubmit={handleSubmit(manejarRegistro)}>
            <h4>Ingrese correo:</h4>
            <input {...register("email", {required: "El email es obligatorio",
                pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                message: "Escribí un email válido"
            }})}/>
            {errors.email && <p>{errors.email.message}</p>}
            <h4>Ingrese contraseña:</h4>
            <input type="password" {...register("contrasena", {
                required: "La contraseña es obligatoria",
                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                    message: "Mínimo 8 caracteres, con mayúscula, minúscula y número"
                }
            })} />
            <h4>Repita la contraseña ingresada:</h4>
            <input type="password"{...register("repetir", {
                required: "Repetí la contraseña",validate: (valor) =>
                valor === watch("contrasena") || "Las contraseñas no coinciden"
            })} />
            {errors.repetir && <p>{errors.repetir.message}</p>}
            <br/><br/>
            <button disabled={isSubmitting}>
                {isSubmitting ? "Guardando…" : "Guardar"}</button>
        </form>
        </main>
        </>
    )
}