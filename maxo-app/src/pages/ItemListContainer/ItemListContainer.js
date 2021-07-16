import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { ItemList } from '../../components/ItemList/ItemList.js'
import { Loader } from '../../components/Loader/Loader'
import { Page } from '../page.js'
import {Item} from '../../components/Item/Item'
import {dataBase} from '../../Firebase/firebase'



export const ItemListContainer = () => {
    const url = 'https://api.alegra.com/api/v1/items/'
    const key = 'bWF4aW1pbm8zM0Bob3RtYWlsLmNvbTpiNjkyNGNjMDcyNzE0YjAxMzQ3ZA=='
    const [items, setItems] = useState(undefined)
    const [category, setCategory] = useState()
    const { id } = useParams()


    useEffect(() => {
        const producto = async function () {
            const respuesta = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Basic ${key}`
                }
            })
            const json = await respuesta.json()
            setItems(json)

        }
        producto()

    }, []);


    useEffect(() => {
        //SI SE PASA UNA CATEGORIA SIGNIFICA QUE SE HA DADO CLICK EN ALGUN LINK DEL NAVBAR
        if (id !== undefined && items !== undefined) {
            const data = items.filter((item) => {
                return item.itemCategory.name.toLowerCase() === id.toLowerCase();
            })
            setCategory(data[0])
        }
    }, [items, id])

    useEffect(() => {
        
    })




    return (
        // <Page>
        //     <div className="catalogo">
        //         {items !== undefined  ? <ItemList key={items.id} items={items} id={id} category={category} /> : <Loader />}
        //     </div>
        // </Page>

        <Page>
            <>
            {category !== undefined ? <Item key={id} item={category} /> : items !== undefined  ? <ItemList key={items.id} items={items} id={id} category={category} /> : <Loader /> }
            {}
            </>
            
        </Page>
    )
}