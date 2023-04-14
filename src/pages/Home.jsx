import Botao from "../components/botao";

const Home = ({ em }) => {
    return (
        <>
            <h1 className="text-purple-800">Aqui é a home {em}</h1>
            <Botao>
                Deslogar
            </Botao>
        </>
    );
}

export default Home;