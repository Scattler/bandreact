import {servicioCanciones} from '../services/servicioCanciones.js'

import {useState,useEffect} from 'react'

export function Music(){


const [canciones,setCanciones]=useState(null)
const[estamosCargando,setEstamosCargando]=useState(true)

//Mi primer useeffect
useEffect(function (){

    servicioCanciones()
    .then (function(respuesta){
        setCanciones(respuesta)
    
    
    })
},[])

if(estamosCargando==true){

    return(
        <>
        <h1>estamos cargando...</h1>
        
        </>

    )

}else{
    return(
        <>
        <h1>estan listas las canciones</h1>
        {

            canciones.tracks.map(function(){
                return(
                    <h5>{canciones.name}</h5>
                )

            })
        }
        </>

    )
}


return(
    <>
    <h1>estan listas las canciones</h1>
    {

        canciones.tracks
    }
    
    </>

)

    
}