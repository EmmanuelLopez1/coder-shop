import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Boton } from '../Boton/Boton'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'

export const ItemDetail = ({ item }) => {
    const { addItem, removeItem, deleteAllElements } = useContext(CartContext)

    const [price, setPrice] = useState('')
    const [productosComprados, setProductosComprados] = useState(false)

    useEffect(() => {
        setPrice(Math.floor(item.price[0].price))
    }, [])


    function onAdd(cantArticulos) {
        addItem({ item, cantArticulos })
        setProductosComprados(true)
    }

    return (
        <div className="itemDetail">
            <img src={item.images[0].url} alt="" className="itemDetail__img" />
            <div className="ItemDetail-detalles">
                <h4 className="itemDetail__price">
                    {'$' + price}
                </h4>
                <h3 className="itemDetail__title">
                    {item.name}
                </h3>
                <p className="itemDetail__description">
                    {item.description}
                </p>
                {productosComprados === false ? <ItemCount item={item} stock={5} initial={1} onAdd={onAdd} eliminar={removeItem} removeAllElements={deleteAllElements} productName={item.name} /> : <Link to={'/cart'}><Boton>Terminar Compra</Boton></Link>}
            </div>
        </div>
    )
}