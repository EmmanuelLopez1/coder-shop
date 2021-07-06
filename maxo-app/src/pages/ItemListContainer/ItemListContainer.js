import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { ItemCount } from '../../components/ItemCount/ItemCount.js'
import { ItemList } from '../../components/ItemList/ItemList.js'
import { Loader } from '../../components/Loader/Loader'
import { Page } from '../page.js'



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

    function onAdd() {
        alert('All rigth')
    }

    return (
        <Page>
            <div className="catalogo">
                {items !== undefined ? <ItemList key={items.id} items={items} id={id} category={category} /> : <Loader />}
                <ItemCount productName="Motocicleta" initial="1" stock="5" onAdd={onAdd} />
            </div>
        </Page>
    )
}