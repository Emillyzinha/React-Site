import { Link } from "react-router-dom";
import Botao from "./botao";

const NavBar = ({em}) => {
    return (
        <>
            <nav className="flex justify-between w-full bg-purple-400 p-4 mb-4">
                <ul className="flex justify-around w-1/2">
                    <li className="font-bold text-purple-700"> <Link to="/inicio" >Home</Link> </li>
                    <li className="font-bold text-purple-700"> <Link to="/inicio" >Produtos</Link> </li>
                    <li className="font-bold text-purple-700"> <Link to="/" >Login {em.login} </Link> </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;