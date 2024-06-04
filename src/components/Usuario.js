import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons';

const Usuario = () => {
    return (

        <>
            <h5 className="card-title fw-semibold mb-4">Cadastro de Usuario</h5>


            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">* Nome do Usuario</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">* E-mail do usuario</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">* Senha do usuario</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">* Grupo de Acesso</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                
                <button type="submit" className="btn btn-success">Cadastrar</button>
            </form>

            <div className='row mt-5 table-responsive'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome do Grupo</th>
                            <th scope="col">Sigla do Grupo</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Administrador FSA</td>
                            <td>ADMFSA</td>

                            <td>
                                
                                <button type="button" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Editar" className="btn btn-outline-warning btn-sm me-1"><FontAwesomeIcon icon={faPenToSquare} /></button>
                                <button type="button" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Excluir" className="btn btn-outline-danger btn-sm me-1"><FontAwesomeIcon icon={faTrash} /></button>
                                
                            </td>


                        </tr>
                    </tbody>
                </table>
            </div>

        </>


    );
};
export default Usuario

