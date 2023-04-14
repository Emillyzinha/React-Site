import React from 'react'

const Botao = ({ children, onClick, type }) => {
    return (
        <>
            <button type="button" onClick={onClick} className="flex items-center w-10/12 h-10 justify-center rounded-xl border border-purple-700" >
                {children}
            </button>
        </>
    );
}

export default Botao;
