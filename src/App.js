import MenuSidebar from "./components/MenuSidebar";
import Home from "./components/home";
import Login from './components/Login';
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Grupo from "./components/Grupo";
import Usuario from "./components/Usuario";



function App() {

  return (
 
      <Router>
        <Routes>
          <Route path ="/*" Component={Login}></Route>
          <Route element={<MenuSidebar />}>
            <Route path="/home" element={<Home />} />
            <Route path="/grupo" element={<Grupo />} />
            <Route path="/usuario" element={<Usuario />} />
          </Route>
        </Routes>
      </Router>

  )
}


export default App;