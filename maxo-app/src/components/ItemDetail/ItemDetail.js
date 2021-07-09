import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Boton } from '../Boton/Boton'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import {useContext} from 'react'
import {CartContext} from '../../context/cartContext'

export const ItemDetail = ({ item }) => {
    const {addItem, removeItem, deleteAllElements} = useContext(CartContext)

    const [price, setPrice] = useState('')
    const [productosComprados, setProductosComprados] = useState(false)

    useEffect(() => {
        setPrice(Math.floor(item.price[0].price))
    }, [])

    
    function onAdd(producto) {
        addItem(producto)
    }

    function eliminar(id){
        removeItem(id)
    }

    function removeElements(params) {
        deleteAllElements()
    }

    
    return (
        <div className="itemDetail">
            <h3 className="itemDetail__name">
                {item.name}
            </h3>
            <img src={item.images[0].url} alt="" className="itemDetail__img" />
            <h4 className="itemDetail_price">
                {'$' + price}
            </h4>
            <p className="itemDetail__description">
                {item.description}
            </p>
           {productosComprados === false ?  <ItemCount item={item} stock={5} initial={1} onAdd={onAdd} eliminar={eliminar} removeAllElements={removeElements} productName={item.name}/> : <Link to={'/cart'}><Boton>Terminar Compra</Boton></Link> }
        </div>
    )
}