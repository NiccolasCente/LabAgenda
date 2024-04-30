import React from 'react';

import "../css/MenuSidebar.css";

const MenuSidebar = () => {
    const handleClick = () => {
        // adicionar o código para redirecionar o usuário para outra página
        // ou executar uma ação 
        window.location.href = "";
    };

    return (
        <header className='sidebar'>
            <h1>LabAgenda</h1>
            <h2 onClick={handleClick} style={{ cursor: 'pointer' }}>Agendar Horários</h2>
            <h3>Interface</h3>
            <p>Cadastrar Sala</p>
            <h4>Opções</h4>
        </header>
    );
}

export default MenuSidebar;
