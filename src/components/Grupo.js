import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons';

const Grupo = () => {
    return (

        <>
            <h5 className="card-title fw-semibold mb-4">Cadastro de Grupo</h5>


            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">* Nome do Grupo</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">* Sigla do Grupo</label>
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
                                <button type="button" className="btn btn-outline-warning btn-sm me-1"><FontAwesomeIcon icon={faPenToSquare} /></button>
                                <button type="button" className="btn btn-outline-danger btn-sm me-1"><FontAwesomeIcon icon={faTrash} /></button>
                            </td>


                        </tr>
                    </tbody>
                </table>
            </div>

        </>


    );
};
export default Grupo

