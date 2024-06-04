import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons';

const Grupo = () => {
    return (

        <>
            <h5 class="card-title fw-semibold mb-4">Cadastro de Grupo</h5>


            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">* Nome do Grupo</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">* Sigla do Grupo</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-success">Cadastrar</button>
            </form>

            <div className='row mt-5 table-responsive'>
                <table class="table">
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
                                <button type="button" class="btn btn-outline-warning btn-sm me-1"><FontAwesomeIcon icon={faPenToSquare} /></button>
                                <button type="button" class="btn btn-outline-danger btn-sm me-1"><FontAwesomeIcon icon={faTrash} /></button>
                            </td>


                        </tr>
                    </tbody>
                </table>
            </div>

        </>


    );
};
export default Grupo

