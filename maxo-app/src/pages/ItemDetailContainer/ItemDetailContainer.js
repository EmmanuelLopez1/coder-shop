import React, { useState, useEffect } from 'react'
import { dataBase } from '../../Firebase/firebase'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../../components/ItemDetail/ItemDetail'
import { Loader } from '../../components/Loader/Loader'
import { Page } from '../page.js'



export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState(undefined)
    const [item, setItem] = useState()




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

    useEffect(() => {
        if (items != undefined) {
            items.map(item => {
                if (item.id === id) {
                    setItem(item)
                }
            })
        }
    }, [items])


    return (
        <Page>
            {item !== undefined ? <ItemDetail item={item} /> : <Loader />}
        </Page>
    )
}