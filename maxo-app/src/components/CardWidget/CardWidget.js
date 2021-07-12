import React, { useState, useEffect } from 'react';
import './CardWidget.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'


export const CardWidget = () => {
    const { item } = useContext(CartContext)
    const [ cantArt, setCantArt ] = useState('baby')

    useEffect(() => {
        setCantArt(item.length)
    }, [item])

    return (
        <div className="cart">
            <FontAwesomeIcon icon={faCartPlus} className="cartItems" />
            <p className="artCarrito">
                {cantArt}
            </p>
        </div>
    )

}