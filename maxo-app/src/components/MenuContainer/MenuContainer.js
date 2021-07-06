import React, { useState, useEffect } from 'react'
import './MenuContainer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Menu } from '../Menu/Menu.js'

export const MenuContainer = () => {
    const rutas = ['/category/Computadores', '/category/Teclados', '/category/Mouses']
    const categorias = ['Computadores', 'Teclados', 'Mouses']
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

   

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
        })
        
        if (windowWidth > 600) {
            let menu = document.querySelector('#menu')
            let width = categorias.length * 100
            menu.style.width = width + 'px'
        }
    })

    return (
        <>
            <input type="checkbox" name="" id="menuCheck" />
            <label htmlFor="menuCheck">
                    <FontAwesomeIcon icon={faBars} className="menuIcon" />
            </label>
            <Menu links={categorias} rutas={rutas} windowWidth={windowWidth} />
        </>
    )
}