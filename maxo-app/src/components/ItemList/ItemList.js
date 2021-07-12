import React, { useEffect } from 'react';
import './ItemList.scss'
import { Item } from '../Item/Item.js'

export const ItemList = ({ items}) => {  


    return (
        <div className="itemList">
            {items.map(item => <Item key={items.id} item={item} />)}
        </div>
    )
}

