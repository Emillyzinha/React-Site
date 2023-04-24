import  './Banner.css'

function Banner() { // um componente
    // JSX - como o react trabalha com a parte visual do projeto. Parece HTML, mas não é
    return (
        <header className="banner">
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/> 
            {/* a pasta public é a raiz, então o barra '/' representa ela. É bom uma imagem ter um texto alternativo */}
        </header>
    )
}

export default Banner
