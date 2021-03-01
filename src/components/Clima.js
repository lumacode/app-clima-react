import React from 'react'
import PropTypes from 'prop-types'

const Clima = ({resultado}) => {

    //Extraer valores 

    const { name, main } = resultado

    if (!name) return null

    //Grados kelvin 

    const kelvin = 271.15

    return (
        <div className="card-panel white col s12">

            <div className="back-text">
                <h2>El clima de { name } es: </h2>
                <p className="temperatura">
                    { parseFloat(main.temp - kelvin).toFixed(2) } <span> &#x2103; </span>
                </p>
            </div>

                <p> Temperatura máxima: 
                    { parseFloat(main.temp_max - kelvin).toFixed(2) } <span> &#x2103; </span>
                </p>

                <p> Temperatura mínima: 
                    { parseFloat(main.temp_min - kelvin).toFixed(2) } <span> &#x2103; </span>
                </p>

        </div>
    )
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima