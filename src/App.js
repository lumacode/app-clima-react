import React, { Fragment, useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Clima from './components/Clima'
import Error from './components/Error'

function App() {

  //State 

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  })
  const [consulta, guardarConsultar] = useState(false)
  const [resultado, guardarResultado] = useState({})
  const [error, guardarError] = useState(false)

  //fin state 

  const { ciudad, pais } = busqueda

  useEffect( () => {
    const consultarApi = async () => {
      
      try {

        if(consulta){
          const appId = '8b020f83e9f6ae435add7dc6a26e2ab2'
          const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

          const res = await fetch(url)
          const req = await res.json()

          guardarResultado(req)
          guardarConsultar(false)

          if(req.cod === '404') {
            guardarError(true)
          }else{
            guardarError(false)
          }

        }
        
      
      } catch (error) {
        console.log(error)
      }


    }

    consultarApi()
    //eslint-disable-next-line
  }, [consulta])


  let componente

  if(error) {
    componente = <Error mensaje="No hay resultados" />
  }else{
    componente = <Clima resultado={resultado} />
  }

  return (
    <Fragment>

      <Header 
        titulo="Clima React App"
      />

      <div className="contenedor-form">
        <div className="container">
            <div className="row">
                <div className="col m6 s12">
                    <Formulario 
                      busqueda={busqueda}
                      guardarBusqueda={guardarBusqueda}
                      guardarConsultar={guardarConsultar}
                    />
                </div>
                <div className="col m6 s12">
                    { componente }
                </div>
            </div>
        </div>
      </div>

    </Fragment>
    
    
  );
}

export default App;
