import React from 'react';
import './Header.scss'
import { Link } from 'react-router-dom'
import { CardWidget } from '../CardWidget/CardWidget.js';
import { MenuContainer } from '../MenuContainer/MenuContainer'


export const Header = () => {
    return (
        <header >
            <div className="navbar">
                <div>
                    <Link to='/'>
                        <h3 className="logo">
                            Maxo Store
                        </h3>
                    </Link>
                </div>
                <div className="navbar__menu">
                    <MenuContainer />
                    <CardWidget />
                </div>
            </div>
        </header>
    )
}