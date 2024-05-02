import React from 'react';

import '../css/MenuSidebar.css';

import img1 from '../assets/img1.png';

const MenuSidebar = () => {
    const handleClick = () => {
        // adicionar o código para redirecionar o usuário para outra página
        // ou executar uma ação 
        window.location.href = "";
    };

    return (
        <header className='sidebar'>
            <img className="logo" src={img1} alt="logo FSA" />
            <h1>LabAgenda</h1>
            <h2 onClick={handleClick} style={{ cursor: 'pointer' }}>Agendar Horários</h2>
            <h5 onClick={handleClick} style={{ cursor: 'pointer' }}>LogOut</h5>
        </header>
    );
}

export default MenuSidebar;
