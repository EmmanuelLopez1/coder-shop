import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../../components/ItemDetail/ItemDetail'
import { Loader } from '../../components/Loader/Loader'
import { Page } from '../page.js'



export const ItemDetailContainer = () => {
    const { id } = useParams()
    const url = `https://api.alegra.com/api/v1/items/${id}`
    const key = 'bWF4aW1pbm8zM0Bob3RtYWlsLmNvbTpiNjkyNGNjMDcyNzE0YjAxMzQ3ZA=='
    const [items, setItems] = useState(undefined)

    useEffect(() => {
        if (id !== undefined) {
            const getItems = async function () {
                const respuesta = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Basic ${key}`
                    }
                })
                const json = await respuesta.json()
                setItems(json)
            }
            getItems()
        }
    }, [id])

    return (
        <Page>
            {items !== undefined ? <ItemDetail key={items.id} item={items} /> : <Loader />}
        </Page>
    )
}