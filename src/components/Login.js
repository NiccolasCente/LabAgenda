import React from 'react';
import img2 from "../assets/img2.png";
import "../App.css";
import { Link } from 'react-router-dom';



const Login = () => {

  return (
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">

      <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
        
        <div className="d-flex align-items-center justify-content-center w-100">

          <div className="row justify-content-center w-100">

            <div className="col-md-8 col-lg-6 col-xxl-3">

              <div className="card mb-0">

                <div className="card-body">
                  <a className="text-nowrap logo-img text-center d-block py-3 w-100">
                    <img src={img2} width="180" alt=""/>
                  </a>

                  <form>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                      <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>

                    <Link className="login-form-btn" to = "/home">
                      <a href="./index.html" className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Entrar</a>
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