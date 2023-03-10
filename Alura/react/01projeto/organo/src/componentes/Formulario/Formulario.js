import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'

export const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar  = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digiter seu nome"/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Informe seu Cargo"/>
                <CampoTexto label="Imagem" placeholder="Digiter o endereço da imagem"/>
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                <Botao>
                    Cria Card
                </Botao>
            </form>
        </section>
    )
}