import React from 'react';
import { Link } from 'react-router-dom'
import './Item.scss'

export const Item = ({ item }) => {
    return (
        <Link to={`/item/${item.id}`} className="item-link">
            <article className="item" id={item.id}>
                <img src={item !== undefined && item.img} alt="" className="item__img" />
                <h3 className="item__title">
                    {item !== undefined && item.title}
                </h3>
            </article>
        </Link>
    )
}

