 export async function servicioCanciones(){


    const URI="https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ/top-tracks?market=US"
    const TOKEN="Bearer BQAZoBBd0At3nCpLgUxUZEfm2O8-Sht0IjtTkfwHXtRENYvpjw0ziS6pZv__WI1_KZvHwjDMSOwNOtCoY3kCw9smTgpi15Wy5fgmbXWGzCS6j9hv12v5GohDjLrpPBxchFgDgtxdY6dIqOzhuz4WhOWEEDG4TY8KjBOE43KCf_bPWA"
    const PETICION={
        method:"GET",
        headers: {Authorization:TOKEN}


};

let respuesta = await fetch(URI, PETICION);
let canciones = await respuesta.json();
return canciones;

}