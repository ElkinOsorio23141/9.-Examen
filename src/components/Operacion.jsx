const Operacion = ({ handlerSelectOperation}) => {
  return (
    <select name="operation" onChange={handlerSelectOperation}>
      <option>Seleccione</option>
      <option value='sumar' >Sumar</option>
      <option value='restar' >Restar</option>
      <option value='multiplicar' >Multiplicar</option>
      <option value='dividir' >Dividir</option>
    </select>
  );
};

export default Operacion;