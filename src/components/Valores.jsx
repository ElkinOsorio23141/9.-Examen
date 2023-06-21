

const Valores = ({valor, handlerChangeValorA, handlerChangeValorB}) => {
    return <input type="text" name="valor" value={valor} onChange={handlerChangeValorA} onClick={handlerChangeValorB} ></input>
}

export default Valores;