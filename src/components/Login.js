import React from 'react';
import img1 from "../assets/img1.png";
import "../App.css";
import { Link } from 'react-router-dom';



const Login = () => {
 
    return (
        <div className="container"> 
          <div className="container-login">
            <div className="wrap-login">
            <img className="logo2" src={img1} alt="logo FSA" />
              <form className="login-form">
                <span className="login-form-title"> Bem vindo! </span>
               
                <span className="login-form-title">
                 
                </span>
    
                <div className="wrap-input">
                  <input
                    className= "input"
                    type="email"
                  />
                  <span className="focus-input" data-placeholder="Email"></span>
                </div>
    
                <div className="wrap-input">
                  <input
                    className= "input"
                    type="password"
                  />
                  <span className="focus-input" data-placeholder="Senha"></span>
                </div>
    
                <div className="container-login-form-btn">
                <Link className="login-form-btn" to = "/MenuSideBar">
                  <button className="login-form-btn"  >Login</button>
                </Link>
                </div>
    
              </form>
            </div>
          </div>
          
        </div>
    )
}   
export default Login;