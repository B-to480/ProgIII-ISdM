import axios from "axios";
import { useEffect,useState } from "react";

function Elpokeapi(){
  const [mida,setMida]=useState([])
  const [lacarga,setLacarga]=useState(true)
  const [elerror,setElerror]=useState(null)
  useEffect(()=>{
    async function manipularapi() {
      try{
        const elapi=axios.create({baseURL:import.meta.env.VITE_API_URL})
        const convertir=await elapi.get("")
        setMida(convertir.data)

        /*const unapi= await axios.get("https://pokeapi.co/api/v2/pokemon/lechonk")
        setMida(unapi.data)
        console.log(unapi.data)*/
      }
      catch(cualerror){
        setElerror(cualerror.message)
        console.log(cualerror.message)
      }
      finally{
        setLacarga(false)
      }
    }
  manipularapi()
  },[])
  if (lacarga){
    return <p>Cargando metadata</p>
  }
  if (elerror){
    return <p>{elerror}</p>
  }
return(
  <div>
    <img src={mida.sprites.front_default} alt={mida.name}/>
    <h2>{mida.name}</h2>
    <p>Peso: {mida.weight}</p>
    <p>Altura: {mida.height}</p>
    <h3>Habilidades:</h3>
    <ul>
      {mida.abilities.map((a) => (
        <li key={a.ability.name}>{a.ability.name}</li>
      ))}
    </ul>
  </div>
)

  /*
  return(
    <ul>
      {Object.entries(mida).map(([key,value])=>
      <li key={key={key}}>
          {key}:{JSON.stringify(value)}
      </li>)}
    </ul>
  )*/
} export default Elpokeapi;