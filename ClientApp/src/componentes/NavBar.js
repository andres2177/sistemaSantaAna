﻿import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

const modelo = {
    nombre: "",
    correo: "",
    idRolNavigation: {
        idRol:0,
        descripcion: ""
    }
}
const NavBar = () => {

    const { user} = useContext(UserContext);

    const [dataUser, setDataUser] = useState(modelo)

    useEffect(() => {
        let dt = JSON.parse(user)
        setDataUser(dt)

    }, [])
    return (
        
        <ul className="navbar-nav bg-dark sidebar sidebar-dark accordion" id="accordionSidebar">

         
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <img
                    src="/imagen/logo.jpg" // Ruta de la imagen
                    alt="Mi Tienda Logo"
                    style={{
                        width: "180px", // Ocupará todo el ancho disponible
                        maxWidth: "200px", // Tamaño máximo
                        height: "70px", // Mantener proporciones
                        display: "block", // Asegura que se comporte como un bloque
                        paddingTop: "4px",
                    }}
                />
            </Link>



            <hr className="sidebar-divider my-0" />

            {
                (dataUser.idRolNavigation.descripcion == "Administrador") &&
                <li className="nav-item">
                    <NavLink to="/dashboard" className="nav-link" >
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </NavLink>
                </li>
            }
           

            <hr className="sidebar-divider" />
            {
                (dataUser.idRolNavigation.descripcion == "Administrador") &&
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUsuario"
                        aria-expanded="true" aria-controls="collapseUsuario">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Administracion</span>
                    </a>
                    <div id="collapseUsuario" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <NavLink to="/usuario" className="collapse-item">Usuarios</NavLink>
                        </div>
                    </div>
                </li>
            }
            
            {
                (dataUser.idRolNavigation.descripcion == "Administrador") &&
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseInventario"
                        aria-expanded="true" aria-controls="collapseInventario">
                        <i className="fas fa-fw fa-box"></i>
                        <span>Inventario</span>
                    </a>
                    <div id="collapseInventario" className="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <NavLink to="/producto" className="collapse-item">Productos</NavLink>
                            <NavLink to="/categoria" className="collapse-item">Categorias</NavLink>
                        </div>
                    </div>
                </li>
            }
           

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseVenta"
                    aria-expanded="true" aria-controls="collapseVenta">
                    <i className="fas fa-fw fa-tag"></i>
                    <span>Ventas</span>
                </a>
                <div id="collapseVenta" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <NavLink to="/venta" className="collapse-item">Nueva Venta</NavLink>
                        <NavLink to="/historialventa" className="collapse-item">Historial Venta</NavLink>
                    </div>
                </div>
            </li>


            {(dataUser.idRolNavigation.descripcion == "Administrador") &&
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseReporte"
                        aria-expanded="true" aria-controls="collapseReporte">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Reportes</span>
                    </a>
                    <div id="collapseReporte" className="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <NavLink to="/reporteventa" className="collapse-item">Reporte Venta</NavLink>
                        </div>
                    </div>
                </li>
            }
            


            <hr className="sidebar-divider d-none d-md-block" />

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
        )
}

export default NavBar;