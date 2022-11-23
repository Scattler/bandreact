export function Integrantes(){

    let integrantes=[

        {
          nombre:"2-D",
          instrumento:"Cantante",
            edad:"44",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/img-banda.appspot.com/o/dbb704ba5d994ef2ce20c28d6ac2fa4e.jpg?alt=media&token=8620b946-8d81-4cdf-b43d-dd97803fe0fa"
        },
        {
            nombre:"Murdoc",
            instrumento:"Bajo",
            edad:"56",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/img-banda.appspot.com/o/Murdoc_Phase_6_art.webp?alt=media&token=37bbca62-9bd1-4ce6-b2f9-fe7e23bfa6ad"
        },
        {
            nombre:"Noodle",
            instrumento:"Teclado/Guitarra",
            edad:"32",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/img-banda.appspot.com/o/2398db06c089cf86d489c986e717c2cc.jpg?alt=media&token=021f8214-132c-46e2-9dfa-0f63f380b714"
        },
        {
            nombre:"Russel",
            instrumento:"Bateria",
            edad:"47",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/img-banda.appspot.com/o/a264e8beeec3c9d151c4003d4e72d4a1.jpg?alt=media&token=9a2591d3-887c-4588-b6a7-e493bcb82668"
        }


    ]



return (
    <>
        <div className="row row-cols-1 row-cols-md-4 g-0 mt-3">
            {
                integrantes.map(function (integrante) {
                    return (
                        <>
                            <div className="col bg-dark p-5">
                                <div className="card h-100">
                                    <img src={integrante.fotografia} alt="foto" className="img-fluid w-100 h-75" />
                                    <h4 className="text-center">{integrante.nombre}</h4>
                                    <br />
                                    <h5 className="text-center">Edad: {integrante.edad}</h5>
                                    <h5 className="text-center">Rol: {integrante.instrumento}</h5>

                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    </>
)
}