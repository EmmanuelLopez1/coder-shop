import React from 'react';
import { Link } from 'react-router-dom'
import './Item.scss'

export const Item = ({ item }) => {
    return (
        <Link to={`/item/${item.id}`} className="item-link">
            <article className="item" id={item.id}>
                <img src={item !== undefined && item.images[0].url} alt="" className="item__img" />
                <h3 className="item__title">
                    {item !== undefined && item.name}
                </h3>
            </article>
        </Link>
    )
}

