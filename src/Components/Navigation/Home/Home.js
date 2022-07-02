import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <div className='block-title'>
            <h5 className='title-1'>Tout savoir sur la crypto</h5>
            <h1 className='title-2'>Démarrer votre <br />formation en quelques<br />
                <NavLink className='clics' to='/inscription'>clics</NavLink>
            </h1>
        </div>
    )
}