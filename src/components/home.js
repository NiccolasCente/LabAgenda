import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import axios from "axios";

export default function Labs() {

    const [labs, setLabs] = useState([]);
    const [inputs, setInputs] = useState([]);

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleReset = () => {
        setInputs({
            matter:                 '',
            labs_name:              '',
            responsible_teacher:    '',
            start_time:             '',
            end_time:               ''
        });
    }; 

    

    const handleSubmit = (event) => {

        if(inputs[["matter"]] == undefined || inputs[["matter"]] == '' || inputs[["labs_name"]] == undefined || inputs[["labs_name"]] == '' || inputs[["responsible_teacher"]] == undefined || inputs[["responsible_teacher"]] == '' || inputs[["start_time"]] == undefined || inputs[["start_time"]] == ''  || inputs[["end_time"]] == undefined || inputs[["end_time"]] == ''){
            Swal.fire({icon: 'warning',title: 'Atenção!',text: 'Todos os campos precisam ser preenchidos!'})
            return            
        }
        

        event.preventDefault();
        Swal.fire({
            title: 'Deseja agendar este laboratorio ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim, cadastrar!',
            cancelButtonText: 'Não, cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                // Envia os dados se o usuário confirmar
                axios.post('http://127.0.0.1:5000/labsadd', inputs)
                .then(response => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Sucesso!',
                        text: 'Laboratorio agendado com sucesso!',
                    }).then(() => {
                        window.location.reload();
                    });;
                })
                .catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro!',
                        text: 'Houve um problema ao cadastrar os dados.',
                    });
                });
            }
        });
    }

    /********************************************************************************************************* */

    const deleteLab = (id) =>{

        Swal.fire({
            title: 'Deseja deletar a agenda ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim, deletar!',
            cancelButtonText: 'Não, cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                // Envia os dados se o usuário confirmar
                axios.delete(`http://127.0.0.1:5000/labdelete/${id}`)
                .then(response => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Sucesso!',
                        text: 'Agenda deletado com sucesso!',
                    }).then(() => {
                        window.location.reload();
                    });;
                })
                .catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro!',
                        text: 'Houve um problema ao deletar a agenda.',
                    });
                });
            }
        });
    }



    /********************************************************************************************************* */
    useEffect(() => {
        getLabs();
    }, []);

    function getLabs() {
        axios.get('http://127.0.0.1:5000/listlabs').then(function (response) {
            setLabs(response.data);
        })
    }


    return (
        <div className='container'>
            <div className="d-flex justify-content-start mb-3">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    + Agendar aulas
                </button>
            </div>

            <div className="row">
                {labs.map((lab, key) =>
                    <div className="col-md-4" key={key}>
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title mb-0">{lab.name}</h5>
                                    <button type="button" onClick={() => deleteLab(lab.id)} className="btn btn-outline-danger btn-sm"><FontAwesomeIcon icon={faTrash} /></button>
                                </div>
                                <h6 className="card-subtitle mb-2 text-muted">{lab.matter}</h6>
                                <p className="card-text">{lab.responsible_teacher}</p>
                                <a className="card-link">{lab.start_time} | {lab.end_time}</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Agendar Laboratorio</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">* Nome da Matéria</label>
                                    <input type="text" name="matter" onChange={handleChange} value={inputs.matter} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">* Nome do laboratorio</label>
                                    <input type="text" name="labs_name" onChange={handleChange} value={inputs.labs_name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">* Professor Responsavel</label>
                                    <input type="text" name="responsible_teacher" onChange={handleChange} value={inputs.responsible_teacher} className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">* Horario De</label>
                                    <input type="time" name="start_time" onChange={handleChange} value={inputs.start_time} className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">* Horario Até</label>
                                    <input type="time" name="end_time" onChange={handleChange} value={inputs.end_time} className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div>
                                    <button type="button" onClick={handleSubmit} className="btn btn-success me-2">Cadastrar</button>
                                    <button type="button" onClick={handleReset} className="btn btn-primary me-2">Limpar</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


