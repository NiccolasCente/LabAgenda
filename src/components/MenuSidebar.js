import React from 'react';
import Header from './header';
import '../css/MenuSidebar.css';
import { Outlet } from 'react-router-dom';


import { Link } from 'react-router-dom';
import img2 from '../assets/img2.png';





const MenuSidebar = () => {

    return (


        <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">

            <aside class="left-sidebar">

                <div>
                    <div class="brand-logo d-flex align-items-center justify-content-between">
                        <a href="./index.html" class="text-nowrap ms-3 logo-img">
                            <img src={img2} width="130" alt=""></img>
                        </a>
                        <div class="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                            <i class="ti ti-x fs-8"></i>
                        </div>
                    </div>



                    <nav class="sidebar-nav scroll-sidebar" data-simplebar="">

                        <ul id="sidebarnav">


                            <li class="nav-small-cap">
                                
                                    <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                                    <span class="hide-menu">Home</span>
                                
                            </li>
                            <li class="sidebar-item">

                                <Link to="/home">
                                    <a class="sidebar-link" aria-expanded="false">
                                        <span> <i class="ti ti-layout-dashboard"></i> </span>
                                        <span class="hide-menu">Agendar Aulas</span>
                                    </a>
                                </Link>
                            </li>


                            <li class="nav-small-cap">
                                <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
                                <span class="hide-menu">ADMINISTRAÇÃO</span>
                            </li>

                            <li class="sidebar-item">

                                <Link to="/grupo">
                                    <a class="sidebar-link" href='#' aria-expanded="false">
                                        <span> <i class="ti ti-article"></i> </span>
                                        <span class="hide-menu">Grupos</span>
                                    </a>
                                </Link>
                            </li>

                            <li class="sidebar-item">

                                <Link to="/usuario">
                                    <a class="sidebar-link" href="./ui-alerts.html" aria-expanded="false">
                                        <span><i class="ti ti-alert-circle"></i></span>
                                        <span class="hide-menu">Usuarios</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                </div>

            </aside>





            <div class="body-wrapper">


                <Header></Header>

                
                <div class="container-fluid">
                    <div class="container-fluid">

                        
                    <Outlet />
                    </div>

                    <div class="py-6 px-6 mt-5 text-center">
                        <p class="mb-0 fs-4">© 2024-2024 | Centro Universitário Fundação Santo André </p>
                    </div>
                </div>

               
            </div>

           

         
            
        </div>





    );
}

export default MenuSidebar;
