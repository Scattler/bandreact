import {servicioCanciones} from '../services/servicioCanciones.js'
import {useState,useEffect} from 'react'

export function Music(){


    const [canciones, setCanciones] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(function () {
        servicioCanciones()
            .then(function (respuesta) {
                setCanciones(respuesta);
                setCargando(false);
            })
    }, []);

    if (cargando == true) {

        return (
            <>
                <h1>Music Loading...</h1>
            </>
        )
    } else {
        return (
            <>
                <h1>Music Loaded.</h1>
                <div className="row bg-dark p-5">
                    {
                        // Mapeamos el resultado de la API
                        canciones.tracks.map(function (cancion) {
                            return (
                                <div className="card col-3 m-5" key={cancion.id}>
                                    <div className="card-header">
                                        <h4>{cancion.name}</h4>
                                    </div>
                                    <img src={cancion.album.images[0].url} className="card-img-top img-fluid" alt="Portada" />
                                    <div className="card-body">
                                        <audio className="w-100" src={cancion.preview_url} controls />
                                    </div>
                                </div>
                            )
                        })

                    }
                </div>
            </>
        )
    }

}