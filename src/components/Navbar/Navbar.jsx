import './Navbar.scss'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import Buscador from '../../ejemplos/Buscador'
import { AuthContext } from '../../context/AuthContext'
import React, { useContext } from 'react';


export const Navbar = () => {
    const {user, logout} = useContext(AuthContext)

    return (
        <header className="header">
            <div className="header__container">
                <img className='logo' src={'./public/Logo.PNG'} alt="LOGO" />

                <nav className="navbar">
                    <Link to='/' className="navbar__link">Inicio</Link>
                    <Link to='/productos/Hombre' className="navbar__link">Hombre</Link>
                    <Link to='/productos/Mujer' className="navbar__link">Mujer</Link>
                    <Link to='/productos/Niños' className="navbar__link">Niños</Link>
                </nav>
                <CartWidget />
            </div>
            <div className='container'>
                <p>Bienvenido {user.email}</p>
                <button className='btn btn-danger' onClick={logout}>Logout</button>
            </div>

            {/* <Buscador /> */}
        </header>
    )
}