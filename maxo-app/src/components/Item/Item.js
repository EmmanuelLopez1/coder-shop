import React from 'react';
import { Link } from 'react-router-dom'
import './Item.scss'

export const Item = ({ item }) => {
    return (
        <Link to={`/item/${item.id}`}>
            <article className="item" id={item.id}>
                <h3 className="item__title">
                    {item !== undefined && item.name}
                </h3>
                <img src={item !== undefined && item.images[0].url} alt="" className="item__img" />
            </article>
        </Link>
    )
}

