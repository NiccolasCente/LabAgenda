import React, { useState, useEffect } from 'react';
import '../css/Dashboard.css';
import img1 from "../assets/img1.png";


const CadastroFuncionarios = () => {
  const [modalActive, setModalActive] = useState(false);
  const [laboratorios, setLaboratorios] = useState([]);
  const [laboratorio, setLaboratorio] = useState('');
  const [hora, setHora] = useState('');
  const [professor, setProfessor] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    loadLaboratorios();
  }, []);

  const openModal = (edit = false, index = 0) => {
    setModalActive(true);
    setEditIndex(edit ? index : null);

    if (edit) {
      const { laboratorio, hora, professor } = laboratorios[index];
      setLaboratorio(laboratorio);
      setHora(hora);
      setProfessor(professor);
    } else {
      setLaboratorio('');
      setHora('');
      setProfessor('');
    }
  };

  const closeModal = () => {
    setModalActive(false);
    setEditIndex(null);
    setLaboratorio('');
    setHora('');
    setProfessor('');
  };

  const saveLaboratorio = () => {
    if (laboratorio === '' || hora === '' || professor === '') return;

    if (editIndex !== null) {
      const updatedLaboratorios = [...laboratorios];
      updatedLaboratorios[editIndex] = { laboratorio, hora, professor };
      setLaboratorios(updatedLaboratorios);
    } else {
      setLaboratorios([...laboratorios, { laboratorio, hora, professor }]);
    }

    closeModal();
  };

  const deleteLaboratorio = (index) => {
    const updatedLaboratorios = [...laboratorios];
    updatedLaboratorios.splice(index, 1);
    setLaboratorios(updatedLaboratorios);
  };

  const loadLaboratorios = () => {
    const storedLaboratorios = getLaboratoriosFromLocalStorage();
    setLaboratorios(storedLaboratorios);
  };

  const insertLaboratorio = (laboratorioItem, index) => {
    return (
      <tr key={index}>
        <td className="lab">{laboratorioItem.laboratorio}</td>
        <td className="hora">{laboratorioItem.hora}</td>
        <td className="prof">{laboratorioItem.professor}</td>
        <td className="acao">
          <button onClick={() => openModal(true, index)}>Editar</button>
        </td>
        <td className="acao">
          <button onClick={() => deleteLaboratorio(index)}>Excluir</button>
        </td>
      </tr>
    );
  };

  useEffect(() => {
    saveLaboratoriosToLocalStorage();
  }, [laboratorios]);

  const getLaboratoriosFromLocalStorage = () => JSON.parse(localStorage.getItem('dbfunc')) || [];
  const saveLaboratoriosToLocalStorage = () => localStorage.setItem('dbfunc', JSON.stringify(laboratorios));

  return (
    <div>
      <img className="logo" src={img1} alt="logo FSA" /> 
      <div className="container">
        <div className="header">
          <span>Cadastro de Laboratórios</span>
          <button onClick={() => openModal()}>Agendar Horário</button>
        </div>
  
        <div className="divTable">
          <table>
            <thead>
              <tr>
                <th>Laboratório</th>
                <th>Hora</th>
                <th>Professor</th>
                <th className="acao">Editar</th>
                <th className="acao">Excluir</th>
              </tr>
            </thead>
            <tbody>
              {laboratorios.map((laboratorioItem, index) => insertLaboratorio(laboratorioItem, index))}
            </tbody>
          </table>
        </div>
  
        {modalActive && (
          <div className="modal-container" onClick={closeModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <form>
                <label htmlFor="m-nome">Laboratório</label>
                <input id="m-nome" type="text" value={laboratorio} onChange={(e) => setLaboratorio(e.target.value)} required />
  
                <label htmlFor="m-funcao">Hora</label>
                <input id="m-funcao" type="text" value={hora} onChange={(e) => setHora(e.target.value)} required />
  
                <label htmlFor="m-professor">Professor</label>
                <input id="m-professor" type="text" value={professor} onChange={(e) => setProfessor(e.target.value)} required />
  
                <button type="button" onClick={saveLaboratorio}>Salvar</button>
              </form>
            </div>
          </div>
        )}
      </div>
  
      <footer>
        <h1>FUNDAÇÃO SANTO ANDRÉ - 2024</h1>
        <h2>TODOS OS DIREITOS RESERVADOS</h2>
      </footer>
    </div>
  );
}

export default CadastroFuncionarios;
