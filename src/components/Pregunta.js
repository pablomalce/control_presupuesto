import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';


const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizartPregunta}) => {

    //definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //Funcion que ller el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad( parseInt(e.target.value, 10))
    }

    //subimit para definir el presupuesto 
    const agregarPresupuesto = e => {
        e.preventDefault();
    }

    //validar 
    if(cantidad < 1 || isNaN( cantidad )){
        guardarError(true)
        return;
    }


    // si pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizartPregunta(false);

    return ( 
        <Fragment>

            <h2>Coloca tu presupuesto</h2>

            { error ? <Error mensaje="El Presupuesto es Incorrecto" />: null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="sumbit"
                    className="button button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>

        </Fragment>

     );
}
Pregunta.prototype = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizartPregunta: PropTypes.func.isRequired
}
 
export default Pregunta;