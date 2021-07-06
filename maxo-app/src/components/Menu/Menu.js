import React from 'react';
import './Menu.scss'
import { NavLink} from 'react-router-dom'

export const Menu = ({ links, rutas, windowWidth }) => {
    return (
        <>
            <ul id="menu" className={`${windowWidth <= 600 ? 'menuMobile' : 'menuDesktop'}`}>
                {
                    links.map(function (link, index) {
                        return (
                            <li className="menu__element" >
                                <NavLink key={rutas[index].substr(10, rutas[index.length])} to={rutas[index]} className="menu__link">
                                    {link}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}