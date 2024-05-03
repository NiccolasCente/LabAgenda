import React, { useState, useEffect } from 'react';
import '../css/Dashboard.css';

const CadastroFuncionarios = () => {
  const [modalActive, setModalActive] = useState(false);
  const [laboratorios, setLaboratorios] = useState([]);
  const [laboratorio, setLaboratorio] = useState('');
  const [sala, setSala] = useState(''); // Adicionando o estado para a sala
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
      const { laboratorio, sala, hora, professor } = laboratorios[index]; // Incluindo sala aqui
      setLaboratorio(laboratorio);
      setSala(sala);
      setHora(hora);
      setProfessor(professor);
    } else {
      setLaboratorio('');
      setSala(''); // Reiniciando o campo sala
      setHora('');
      setProfessor('');
    }
  };

  const closeModal = () => {
    setModalActive(false);
    setEditIndex(null);
    setLaboratorio('');
    setSala('');
    setHora('');
    setProfessor('');
  };

  const saveLaboratorio = () => {
    if (laboratorio === '' || sala === '' || hora === '' || professor === '') return;
  
    // Verificar se o horário já está agendado
    const isTimeConflict = laboratorios.some(item => (
      item.laboratorio === laboratorio &&
      item.sala === sala &&
      item.hora === hora &&
      item.professor === professor &&
      laboratorios.indexOf(item) !== editIndex
    ));
  
    if (isTimeConflict) {
      alert("Este horário já está agendado para este laboratório e sala. Por favor, escolha outro horário.");
      return;
    }
  
    // Verificar se há conflito de horário com o mesmo laboratório e sala
    const isSameTimeConflict = laboratorios.some(item => (
      item.laboratorio === laboratorio &&
      item.sala === sala &&
      item.hora === hora &&
      laboratorios.indexOf(item) !== editIndex
    ));
  
    if (isSameTimeConflict) {
      alert("Já existe um agendamento para este laboratório e sala no mesmo horário. Por favor, escolha outro horário.");
      return;
    }
  
    if (editIndex !== null) {
      const updatedLaboratorios = [...laboratorios];
      updatedLaboratorios[editIndex] = { laboratorio, sala, hora, professor };
      setLaboratorios(updatedLaboratorios);
    } else {
      setLaboratorios([...laboratorios, { laboratorio, sala, hora, professor }]);
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
        <td className="sala">{laboratorioItem.sala}</td> {/* Mostrando a sala */}
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
                <th>Sala</th> {/* Adicionando a coluna para a sala */}
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
                <select id="m-nome" value={laboratorio} onChange={(e) => setLaboratorio(e.target.value)} required>
                  <option value="">Selecione o laboratório</option>
                  <option value="FAFIL">FAFIL</option>
                  <option value="FAENG 1">FAENG 1</option>
                  <option value="FAENG 2">FAENG 2</option>
                </select>
  
                <label htmlFor="m-sala">Sala</label> {/* Campo para digitar a sala */}
                <input id="m-sala" type="text" value={sala} onChange={(e) => setSala(e.target.value)} required />
  
                <label htmlFor="m-funcao">Hora</label>
                <select id="m-funcao" value={hora} onChange={(e) => setHora(e.target.value)} required>
                  <option value="">Selecione a hora</option>
                  <option value="19:30 - 21:00">19:30 às 21:00</option>
                  <option value="21:20 - 23:00">21:20 às 23:00</option>
                </select>
  
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
