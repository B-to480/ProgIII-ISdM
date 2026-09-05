import { useEffect,useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navegacion from "./components/Navegacion";
import Inicio from "./pags/Inicio";
import Cursos from "./pags/Cursos";
import Sinpagina from "./pags/Sinpagina";
import Estecurso from "./pags/Estecurso"

export default function App(){
  return(/*4.03.55 - 4.47.0*/
  <Router>
    <Navegacion/>
    <Routes>
      <Route path="/" element={<Inicio/>} />
      <Route path="prgprogx_cursos" element={<Cursos/>} />
      <Route path="*" element={<Sinpagina/>}/>
      <Route path="prgprogx_cursos/:id_curso" element={<Estecurso/>}/>
    </Routes>
  </Router>
  )
}



/*Actividad04 29/08
import { useState,useEffect } from "react";
import { cerrarSesion,obtenerSesionActual,suscribirseASesion } from "./services/auth";
import LoginPage from "./Loginpage.jsx";


export default function App(){
  const [lasesion,setLasesion]=useState([])
  const [cargasesion,setCargasesion]=useState(true)
  const [sesionerror,setSesionerror]=useState(null)
  useEffect(()=>{
    
  })
}
*/


/*TP3 21/08
import axios from "axios"
import { useState,useEffect } from "react"
import Elpokeapi from "./components/conapi"


function App(){

  return (
    <Elpokeapi></Elpokeapi>
  )
}
export default App;*/


/*TP2 17/08
import './App.css'
import { useState,useEffect } from 'react'

*/



{/*Clase3 22/08

//  actividad_3
//3.¿Qué le falta a este componente?
function Cronometro() {
const [segundos, setSegundos] = useState(0);
useEffect(() => {
const tiempo=setInterval(() => {//Se agrego el constructor del objeto, ya que setInterval se debe guardar
setSegundos((anterior) => anterior + 1);
}, 1000);
}, []);
<p>Pasaron {segundos} segundos.</p>
}


function App() {
      //1.¿Qué imprime la consola?
      //A,C,A,C,B,B y si cambiamos el codigo mientras el server corre,
      //B no vuelve a aparecer solo A y C, entonces useEffect solo se ejecuta una vez
      //en este caso, y la repeticion se debe al modo en que el server corre (de prueba),
      //si fuera producción, esa repetición no sucede

  console.log("A")
  useEffect(()=>{console.log("B")},[])
  console.log("C")

//Mini práctica
  const [tiempo,setTiempo]= useState(new Date().toLocaleTimeString())
  useEffect(()=>{
    const mihora=setInterval(()=>{
      setTiempo(new Date().toLocaleTimeString())
    },1000)
    return()=>clearInterval(mihora)
  })


  return (
      
      <><p>ISDM</p><p>{tiempo}</p></> 
      
      //  .2Elegí el array de dependencias
      //  
      //  [] - Mostrar un saludo según la hora, una sola vez
      //  [Valor] - Cambiar el título de la pestaña cada vez que cambia un contador
      //  No poner - Enganchar un listener de teclado al aparecer el componente
      //  [Valor] - Guardar el texto de un campo cada vez que el usuario escribe
      //  
      //  4.¿Efecto o handler?
      //  Marcá dónde va cada acción:
      //  Traer la lista de cursos cuando la pantalla aparece - Handler
      //  Mostrar un cartel de éxito después de tocar "Guardar" - Effect
      //  Enganchar un listener de resize a la ventana - Handler
      //  Enviar un formulario al servidor - Effect
      //  Calcular cuántas tareas quedan pendientes - Handler
      //  
      //  5¿Va en el .env ?
      //  Respondé sí o no para cada valor:
      //  La dirección base de la API - Si
      //  El título que se muestra en el encabezado - No
      //  La contraseña de la base de datos - Si
      //  La anon key de Supabase - No
      
      
  )
}

export default App

*/}


/*TP1 09/08
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'


function App() {
  const mititu="MUY SABIDO EN ARG"
  const pp1="Inicio"
  const pp2="Mas Articulos"
  const pp3="Contacto"

  const arti="Teoria de la division de la consiencia y comunidad."
  const descri="Un articulo en el que teorizamos qué se puede esperar de la raza humana y las diferentes sociedades para garantizar un futuro mas pacifico."
  const preambulo="Se puede estar en lo correcto y equivocado al mismo tiempo, pero no hay obligación de hacernoslo saber cuando y porque."
  const laparte01="Origen de la división."
  const parrafo01="Los secretos y el poder no son nuevos, la humanidad siempre tuvo este concepto presente y aplicado, paso con lideres, reyes, jefes, &quot;el elegido&quot;, &quot;el sujeto&quot;, el mito, la leyenda, etc. Y seguro muchos han querido el mismo tratatiento, la fama, las ventajas y demas, pero quien les dice que hizo falta para llegar ahí, o siquiera si es posible reproducir los mismos resultados si tenemos la &quot;receta del exito&quot;, bueno, la humanidad se construyó con esta estructura de poder o superioridad que no solo se trata de tenerlo en general, sino tambien dentro circulos humanos mas pequeños, aunque muchos creen que no hay limites con el poder.¿El poder de qué exactamente es lo que busca cada persona? ¿Qué puede pasar si esta persona tiene el poder y no esta otra? ¿Qué harias tu con &quot;el poder&quot;? Diferentes visiones y diferentes propositoscentrados en diferentes micro/macro mundos, pero algo que no todos recuerdan es que somos humanos, conplejas y contradictorias criaturas que no hacen magia, crear un jardin en medio del desierto no es cosa rapida, facil, ni inconsecuente, desear cambiar algo no es gratis cuando se tiene el poder, o, dependera que tanto poder crees que tienes/tienen para que algo llegue a hacerse, y que tanto poder el resto/algunos creen que tienes realmente para acceder a concretar tal cambio."

  const elfoo="©2026 MUY SABIDO EN ARG"

  return (
    <>
      <Navbar titu={mititu} pag01={pp1} pag02={pp2} pag03={pp3} />
      <Main miarti={arti} mides={descri} mipre={preambulo} parte01={laparte01} prf01={parrafo01}/>
      <Footer mifoo={elfoo}/>
    </>
  )
}

export default App
*/