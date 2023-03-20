

export const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`;
    let valor = 'Guilherme lima';
    const aoDigitado = (evento) => {
        valor = evento.target.value;
        console.log(valor);
    }
    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}