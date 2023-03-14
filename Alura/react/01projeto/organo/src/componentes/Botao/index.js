import './Botao.css'
/*fazendo como no video os outros (Banner, CampoTexto, Formulario e ListaSuspensa foi feito como ele fala nas aulas iniciais)*/
const Botao = (props) => {
    return (
        <button className='botao'> 
            {props.children}
        </button>
    )
}

export default Botao