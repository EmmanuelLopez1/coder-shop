import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Boton } from '../Boton/Boton'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.scss'

export const ItemDetail = ({ item }) => {
    const [price, setPrice] = useState('')
    const [productosComprados, setProductosComprados] = useState(false)

    useEffect(() => {
        setPrice(Math.floor(item.price[0].price))
        
    }, [])

    
    function onAdd(noProductos) {
        setProductosComprados(noProductos)
        
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
           {productosComprados === false ?  <ItemCount stock={5} initial={1} onAdd={onAdd} productName={item.name}/> : <Link to={'/cart'}><Boton>Terminar Compra</Boton></Link> }
        </div>
    )
}