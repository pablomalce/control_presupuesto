import React, { useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {

  // definir el presupuesto
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [ mostrarpregunta, actualizartPregunta] = useState(true);
  const [ gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto ] = useState({});
  const [ creargasto, guardarCrearGasto ] = useState(false);

  // Use Effect que actualiza el restante

  useEffect(() => {

    //agrega el nuevo presupuesto 
      if(creargasto){
        guardarGastos([
          ...gastos,
          gasto
        ]);

        //Resta del presupuesto actual
        const presupuestoRestante = restante - gasto.cantidad;
        guardarRestante(presupuestoRestante);
        //Resetear a false
        guardarCrearGasto(false);
      }
  }, [gasto, creargasto, gastos, restante]);

  

  return (
    <div className="container">
        <header>
        <h1>Gasto Semanal</h1>
          
          <div className="contenido-principal contenido">
            { actualizartPregunta ? 
              (
              <Pregunta 
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizartPregunta={actualizartPregunta}
              />
              ) : 
              (
                <div className="row">
                  <div className="one-half column">
                    <Formulario 
                    guardarGasto={guardarGasto}
                    guardarCrearGasto={guardarCrearGasto}
                    />
                </div>

                  <div className="one-half column">
                  <Listado 
                    gastos={gastos}
                  />

                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                  </div>
            </div>
              
             )
          }

          
       
          </div>
        </header>
      </div>
  );
}

export default App;
