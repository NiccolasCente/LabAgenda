import { useState } from "react";
import img1 from "./assets/img1.png";

import MenuSidebar from './components/MenuSidebar';
import Login from './components/Login';

import "./App.css";


import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Dashboard from "./components/Dashboard";


function App() {
  /*const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // requisição HTTP
    fetch('URL_DO_SEU_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    })
    .then(response => {
      if (response.ok) {
        // Se a requisição for bem-sucedida, realizar alguma ação, como redirecionar o usuário para outra página
       
         //window.location.href = creation_account.js;
      } else {
        // Se a requisição não for bem-sucedida, exibir uma mensagem de erro
        
      }
    })
    .catch(error => {
     
    });
  };
*/
  return (
    /*<div className="container">
      <div className="container-login">
        <div className="wrap-login">
        <img className="logo" src={img1} alt="logo FSA" />
          <form className="login-form">
            <span className="login-form-title"> Bem vindo </span>

            <span className="login-form-title">
             
             
            </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn" onClick={handleLogin}>Login</button>
              {Login}*/          
              <Router>
                <Routes>
                  <Route path ="/*" Component={Login}></Route>
                  <Route path ="/MenuSidebar" Component={MenuSidebar}></Route>
                  <Route path = "/Dashboard" Component={Dashboard}></Route>
                </Routes>
              </Router>
            /*</div>

          </form>
        </div>
      </div>
    </div>*/
  )
}


export default App;