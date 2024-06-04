import React from 'react';
import img2 from "../assets/img2.png";
import "../App.css";
import { Link } from 'react-router-dom';



const Login = () => {

  return (
    <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">

      <div class="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
        
        <div class="d-flex align-items-center justify-content-center w-100">

          <div class="row justify-content-center w-100">

            <div class="col-md-8 col-lg-6 col-xxl-3">

              <div class="card mb-0">

                <div class="card-body">
                  <a class="text-nowrap logo-img text-center d-block py-3 w-100">
                    <img src={img2} width="180" alt=""/>
                  </a>

                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">E-mail</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-4">
                      <label for="exampleInputPassword1" class="form-label">Senha</label>
                      <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>

                    <Link className="login-form-btn" to = "/home">
                      <a href="./index.html" class="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Entrar</a>
                    </Link>
                  </form>

                </div>

              </div>

            </div>
            
          </div>

        </div>

      </div>

    </div>
  )
}
export default Login;