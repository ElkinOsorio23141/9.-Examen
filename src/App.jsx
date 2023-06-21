import Valores from "./components/Valores"
import Operacion from "./components/operacion"
import Button from "./components/Button"
import Resultado from "./components/Resultado"
import { useState } from "react"

function App() {
  const [valorA, setValorA] = useState(0);
  const [valorB, setValorB] = useState(0);
  const [operacion, setOperacion] = useState('');
  const [resultado, setResultado] = useState(0);
  const [show, setShow] = useState(false);
  const [listado, setListado] = useState([]);
  const [elementos, setElementos] = useState('');

  const handlerChangeValorA = ({ target }) => {
    setValorA(target.value);
  };

  const handlerChangeValorB = ({ target }) => {
    setValorB(target.value);
  };
  
  const handlerSelectOperation = ({ target }) => {
    setOperacion(target.value);
  };


 const handlerCalcular = () =>{
    if(operacion === 'sumar'){
        setResultado(parseInt(valorA) + parseInt(valorB))
        setElementos(`${valorA} + ${valorB} = ${resultado}`);
        setListado([...listado,elementos])  
        setShow(true);
     }

     if(operacion === 'restar'){
        setResultado(parseInt(valorA) - parseInt(valorB))
        setElementos(`${valorA} - ${valorB} = ${resultado}`);
        setListado([...listado,elementos]) 
        setShow(true);
   }
   if(operacion === 'multiplicar'){
      setResultado(parseInt(valorA) * parseInt(valorB))
      setElementos(`${valorA} * ${valorB} = ${resultado}`);
      setListado([...listado,elementos]) 
      setShow(true);
   }
   if(operacion === 'dividir'){
      setResultado(parseInt(valorA) / parseInt(valorB))
      setElementos(`${valorA} / ${valorB} = ${resultado}`);
      setListado([...listado,elementos])    
      setShow(true);
   }
};


  return (
    <div>
      <Valores
        name={valorA}
        handlerChangeValorA={handlerChangeValorA}
        />
      <Operacion
        name={operacion}
        handlerSelectOperation={handlerSelectOperation}   
      />  
      <Valores
        name={valorB}
        handlerChangeValorB={handlerChangeValorB}      
      /> 
      <Button   
         handlerCalcular={handlerCalcular}
         /> 
      {show && <Resultado
        resultado={resultado}
      />}
       <ul>
        {listado.map((item) =>(
            <li key={item}>{item}</li>

        ))}
        </ul>      
    </div>
  
  )
}

export default App
