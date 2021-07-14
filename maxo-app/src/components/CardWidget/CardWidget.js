import React, { useState, useEffect } from 'react';
import './CardWidget.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'


export const CardWidget = () => {
    const { item } = useContext(CartContext)
    const [cantArt, setCantArt] = useState('baby')

    useEffect(() => {
        let articulos = 0
        const art = item.map((item) => {
            articulos += item.cantArticulos
        })
        setCantArt(articulos)

    }, [item])

    return (
        <>
            {cantArt > 0 ? <div className="cart">
                <FontAwesomeIcon icon={faCartPlus} className="cartItems" />
                <p className="artCarrito">
                    {cantArt}
                </p>
            </div> : <></>}
        </>
    )

}