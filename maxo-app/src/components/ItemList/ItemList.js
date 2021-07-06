import React, { useEffect } from 'react';
import './ItemList.scss'
import { Item } from '../Item/Item.js'

export const ItemList = ({ items, id, category }) => {
    return (
        <div className="itemList">
            {category !== undefined ? <Item key={id} item={category}/> : items.map(item => <Item key={id} item={item} />)}
        </div>
    )
}

