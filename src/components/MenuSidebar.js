import React from 'react';
import Header from './header';
import '../css/MenuSidebar.css';
import { Outlet } from 'react-router-dom';


import { Link } from 'react-router-dom';
import img2 from '../assets/img2.png';





const MenuSidebar = () => {

    return (


        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">

            <aside className="left-sidebar">

                <div>
                    <div className="brand-logo d-flex align-items-center justify-content-between">
                        <a href="./index.html" className="text-nowrap ms-3 logo-img">
                            <img src={img2} width="130" alt=""></img>
                        </a>
                        <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                            <i className="ti ti-x fs-8"></i>
                        </div>
                    </div>



                    <nav className="sidebar-nav scroll-sidebar" data-simplebar="">

                        <ul id="sidebarnav">

                            <li className="nav-small-cap">
                                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                <span className="hide-menu">PRINCIPAL</span>
                            </li>
                            
                            <li className="sidebar-item">

                                <Link to="/home">
                                    <a className="sidebar-link" aria-expanded="false">
                                        <span> <i className="ti ti-layout-dashboard"></i> </span>
                                        <span className="hide-menu">Agendar Aulas</span>
                                    </a>
                                </Link>
                            </li>


                            <li className="nav-small-cap">
                                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                <span className="hide-menu">ADMINISTRAÇÃO</span>
                            </li>

                            {/* <li class="sidebar-item">

                                <Link to="/grupo">
                                    <a class="sidebar-link" href='#' aria-expanded="false">
                                        <span> <i class="ti ti-article"></i> </span>
                                        <span class="hide-menu">Grupos</span>
                                    </a>
                                </Link>
                            </li> */}

                            <li className="sidebar-item">

                                <Link to="/usuario">
                                    <a className="sidebar-link" href="./ui-alerts.html" aria-expanded="false">
                                        <span><i className="ti ti-alert-circle"></i></span>
                                        <span className="hide-menu">Usuarios</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                </div>

            </aside>





            <div className="body-wrapper">


                <Header></Header>

                
                <div className="container-fluid">
                    <div className="container-fluid">

                        
                    <Outlet />
                    </div>

                    <div className="py-6 px-6 mt-5 text-center">
                        <p className="mb-0 fs-4">© 2024-2024 | Centro Universitário Fundação Santo André </p>
                    </div>
                </div>

               
            </div>

           

         
            
        </div>





    );
}

export default MenuSidebar;
