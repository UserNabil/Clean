import "./Navbar.css";
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo-head.png';

export default function Navbar() {
    return (
        <nav>
            <ul className="liste">
                <NavLink className="items" to="/" >
                    <img className="logo" src={logo} alt="logo" />
                </NavLink>
                <NavLink
                    to='/'
                    className={({ isActive }) => { return isActive ? "activeLink" : "items" }}
                ><h1>Accueil</h1>
                </NavLink>

                <NavLink
                    className={({ isActive }) => { return isActive ? "activeLink" : "items" }}
                    to='/about'
                ><h1>A propos</h1>
                </NavLink>



                <NavLink
                    className={({ isActive }) => { return isActive ? "activeLink" : "items" }}
                    to='news'
                ><h1>Actualité</h1>
                </NavLink>

                <NavLink
                    className={({ isActive }) => { return isActive ? "activeLink" : "items" }}
                    to='inscription'
                ><h1>Inscription</h1>
                </NavLink>
            </ul>
        </nav>
    )
}
