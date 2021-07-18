import React, { useEffect, useState } from 'react'
import './ItemDetail.scss'
import { Link } from 'react-router-dom'
import { Boton } from '../Boton/Boton'
import { ItemCount } from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'

export const ItemDetail = ({ item }) => {
    const { addItem, removeItem, deleteAllElements } = useContext(CartContext)
    const [productosComprados, setProductosComprados] = useState(false)



    function onAdd(cantArticulos) {
        addItem({ item, cantArticulos })
        setProductosComprados(true)
    }

    return (
        <div className="itemDetail">
            <img src={item.img} alt="" className="itemDetail__img" />
            <div className="ItemDetail-detalles">
                <h4 className="itemDetail__price">
                    {'$' + item.price}
                </h4>
                <h3 className="itemDetail__title">
                    {item.title}
                </h3>
                <p className="itemDetail__description">
                    {item.description}
                </p>
                {productosComprados === false ? <ItemCount item={item} stock={5} initial={1} onAdd={onAdd} eliminar={removeItem} removeAllElements={deleteAllElements} productName={item.name} /> : <Link to={'/cart'}><Boton>Terminar Compra</Boton></Link>}
            </div>
        </div>
    )
}