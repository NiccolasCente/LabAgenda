import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import {faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';


export default function Usuario(){


    const [inputs, setInputs] = useState([]);

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleReset = () => {
        setInputs({
            name: '',
            email: '',
            password: ''
        });
    }; 

    const handleSubmit = (event) => {

        
        if(inputs[["password"]] == undefined || inputs[["password"]] == '' || inputs[["name"]] == undefined || inputs[["name"]] == '' || inputs[["email"]] == undefined || inputs[["email"]] == ''){
            Swal.fire({icon: 'warning',title: 'Atenção!',text: 'Todos os campos precisam ser preenchidos!'})
            return            
        }
        
        event.preventDefault();
        Swal.fire({
            title: 'Deseja cadastrar o usuario ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim, cadastrar!',
            cancelButtonText: 'Não, cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                // Envia os dados se o usuário confirmar
                axios.post('http://127.0.0.1:5000/useradd', inputs)
                .then(response => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Sucesso!',
                        text: 'Dados cadastrados com sucesso!',
                    }).then(() => {
                        // Recarrega a página após o usuário fechar o swal
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

    const deleteUser = (id) =>{

        Swal.fire({
            title: 'Deseja deletar o usuario ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim, deletar!',
            cancelButtonText: 'Não, cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                // Envia os dados se o usuário confirmar
                axios.delete(`http://127.0.0.1:5000/userdelete/${id}`)
                .then(response => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Sucesso!',
                        text: 'Usuario deletado com sucesso!',
                    }).then(() => {
                        // Recarrega a página após o usuário fechar o swal
                        window.location.reload();
                    });;
                })
                .catch(error => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro!',
                        text: 'Houve um problema ao deletar o usuario.',
                    });
                });
            }
        });
    }

    /********************************************************************************************************* */
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers(){
        axios.get('http://127.0.0.1:5000/listusers').then(function(response){
            setUsers(response.data);
        })
    }

    return (
        <div>
            <h5 className="card-title fw-semibold mb-4">Cadastro de Usuario</h5>
            <form > 
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">* Nome do Usuario</label>
                    <input type="text" name="name" onChange={handleChange} value={inputs.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">* E-mail do usuario</label>
                    <input type="email" name="email" onChange={handleChange} value={inputs.email} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">* Senha do usuario</label>
                    <input type="password" name="password" onChange={handleChange}  value={inputs.password} className="form-control" id="exampleInputPassword1" />
                </div>
                <div>
                    <button type="button" onClick={handleSubmit} className="btn btn-success me-2">Cadastrar</button>
                    <button type="button" onClick={handleReset} className="btn btn-primary">Limpar</button>
                    
                </div>
                

            </form>

            <div className='row mt-5 table-responsive'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, key) =>
                            <tr key={key}>
                                <td scope="row">{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button type="button" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Editar" className="btn btn-outline-warning btn-sm me-1"><FontAwesomeIcon icon={faPenToSquare} /></button>
                                    <button type="button" onClick={() => deleteUser(user.id)} data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Excluir" className="btn btn-outline-danger btn-sm me-1"><FontAwesomeIcon icon={faTrash} /></button>
                                    
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


