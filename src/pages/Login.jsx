import { useState } from "react";
import Botao from "../components/botao";

const Login = ({ logar, setE, setS }) => {
    return (

        <>
        <div className="flex justify-center items-center w-full">
            <div className="w-[30rem] h-[25rem] border border-purple-700 flex items-center flex-col justify-center p-5">
                <p className="text-3xl text-purple-800 mb-5">Login</p>
                <input className="w-10/12 outline-none p-2 border-b-2 text-purple-800 mb-10" type="text" placeholder="E-mail" onChange={(e) => setE((e.target.value))} />
                <input className="w-10/12 outline-none p-2 border-b-2 text-purple-800 mb-10" type="password" placeholder="Senha" onChange={(e) => setS((e.target.value))} />

                <Botao onClick={logar}>
                    Acessar
                </Botao>

            </div>
        </div>
        </>
    );
}

export default Login;
