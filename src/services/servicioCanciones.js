 export async function servicioCanciones(){


    const URI="https://api.spotify.com/v1/artists/7s9xvGsMjmPZmBYa6iEJTm/top-tracks?market=EN"
    const TOKEN="Bearer BQDhXtC78xMchBLTZqPSJ72L0z-L3w2SVD0Om-6Tr0u_INhJAJ9LTc-HUEF-_v2Moxi5eZ8mPE6ocalukzuTuM_4NK18QW1SZST_BvS3Wnug5z7dvYy3g36sYbteFsdusJEdNkh8PuEVYu3tzrh13XjkElIJn_qx4MGkDvibdJAozg"
    const PETICION={
        method:"GET",
        headers: {Authorization:TOKEN}


};

let respuesta = await fetch(URI, PETICION);
let canciones = await respuesta.json();
return canciones;

}