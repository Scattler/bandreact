import {servicioCanciones} from '../services/servicioCanciones.js'

import {useState} from 'react'
export function Music(){

const [canciones,setCanciones]=useState(null)

servicioCanciones()
.then (function(respuesta){



}

    return(
        <>
            <h1>Music trabajando!!</h1>
        </>
    )
}