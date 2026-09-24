import { useForm } from "react-hook-form";
import { iniciarSesion } from "../services/auth";



export default function Entrarcuenta(){
    const {register,handleSubmit,watch,
        formState:{errors,isSubmitting}}=useForm()
    async function manejarLogin(datos) {
    try {
        setErrorDelServidor(null);
        await iniciarSesion(datos.email, datos.contrasena);
        navegar("/cursos");}
    catch (problema) {
        setErrorDelServidor("Email o contraseña incorrectos");}
    console.log("Pasó la validación:", datos);
    }

    return(
        <>
        <main>
        <h2>¡Bienvenido!</h2>
        <h3>Ingresar a mi cuenta:</h3>
        <form onSubmit={handleSubmit(manejarLogin)}>
            <h4>Ingrese correo:</h4>
            <input type="email"
                {...register("email", { required: "Falta el email" })}/>
            <h4>Ingrese contraseña:</h4>
            <input type="password"
                {...register("contrasena", { required: "Falta la contraseña" })
                } />
            <br/><br/>
            <button disabled={isSubmitting}>
                {isSubmitting ? "Entrando…" : "Entrar"}</button>
        </form>
        </main>
        </>
    )
}