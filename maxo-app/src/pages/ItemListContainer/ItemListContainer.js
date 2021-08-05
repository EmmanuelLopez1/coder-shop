import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { ItemList } from '../../components/ItemList/ItemList.js'
import { Loader } from '../../components/Loader/Loader'
import { Page } from '../page.js'
import { Item } from '../../components/Item/Item'
import { dataBase } from '../../Firebase/firebase'



export const ItemListContainer = () => {
    const [items, setItems] = useState(undefined)
    const [category, setCategory] = useState()
    const { id } = useParams()

    //FIREBASE
    const [loading, setLoading] = useState()

    useEffect(() => {
        if (items !== undefined && id != undefined) {
            const categorias = items.filter(item => {
                if (item.categoria.toLowerCase() === id.toLowerCase()) {
                    return item
                }
            })

            setCategory(categorias)
        }
    }, [items, id])

    useEffect(() => {
        setLoading(true)
        const itemCollection = dataBase.collection('productos')
        itemCollection.get().then((querySnapshot) => {
            if (querySnapshot.length === 0) {
                console.log('No results');
            }
            const elements = querySnapshot.docs.map(element => {
                let data = element.data()
                let id = { id: element.id }
                const finalObject = { ...data, ...id }
                return finalObject

            })
            setItems(elements)

        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    return (
        <Page>
            <>
                {category !== undefined && items !== undefined  ? <ItemList key={items.id} items={category}/> : items != undefined  ? <ItemList items={items}/> : <Loader key={id}/>}
            </>
        </Page>
    )
}