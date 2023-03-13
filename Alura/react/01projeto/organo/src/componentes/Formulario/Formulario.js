import CampoTexto from '../CampoTexto'

export const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digiter seu nome"/>
                <CampoTexto label="Cargo" placeholder="Informe seu Cargo"/>
                <CampoTexto label="Imagem" placeholder="Digiter o endereço da imagem"/>
            </form>
        </section>
    )
}