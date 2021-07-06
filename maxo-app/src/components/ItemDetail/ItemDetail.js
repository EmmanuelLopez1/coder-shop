import React, { useEffect, useState } from 'react'
import './ItemDetail.scss'

export const ItemDetail = ({ item }) => {
    const [price, setPrice] = useState('')

    useEffect(() => {
        setPrice(Math.floor(item.price[0].price))
    }, [])

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
        </div>
    )
}