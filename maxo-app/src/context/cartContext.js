import React, { createContext, useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { dataBase } from '../Firebase/firebase'
export const CartContext = createContext()


export const CartProvider = ({ children }) => {
    const [item, setItem] = useState([])
    const [precioTotal, setPrecioTotal] = useState()
    const [order, setOrder] = useState(undefined)
    useEffect(() => {
        getPrecioTotal()
    }, [item])

    const deleteArticle = (id) => {
        const items = item.filter(item => {
            if (item.id != id) {
                return item
            }
        })

        const itemDisminuido = item.map((art, index) => {
            if (art.item.id === id && art.cantArticulos > 0) {
                removeItem(id)
                art.cantArticulos--
                if (index > 0) {
                    setItem([...items, art])
                } else {
                    setItem([art, ...items])
                }

                if (art.cantArticulos === 0) {
                    removeItem(id)
                }
            }


        })
    }

    const vaciarCarrito = () => {
        setItem([])
    }

    const getPrecioTotal = () => {
        let total = 0

        item.map(item => {
            total += item.item.price * item.cantArticulos
        })
        setPrecioTotal(total)
    }

    const addItem = (newItem) => {
        const id = newItem.item.id
        const noArt = newItem.cantArticulos
        if (isInCart(id)) {
            updateCart(id, noArt)
        }
        else {
            setItem([...item, newItem]);
        }
    }

    function isInCart(id) {
        const validacion = item.findIndex(item => item.item.id === id)
        if (validacion != -1) {
            return true
        }
        else {
            return false
        }
    }

    function updateCart(id, noArt) {
        const newItems = item.map(item => {
            let artActuales = item.cantArticulos
            if (item.item.id === id) {
                return {
                    ...item,
                    cantArticulos: artActuales + noArt
                }
            }
            else {
                return {
                    ...item
                }
            }
        })
        setItem(newItems)
    }

    function removeItem(id) {
        const items = item.filter(item => item.item.id != id)
        setItem(items)
    }

    function filterItems() {
        const items = item.map(item => {
            return {
                id: item.item.id,
                title: item.item.title,
                price: item.item.price
            }
        })

        return items
    }

    function generarOrden() {
        if (item.length != 0) {
            let items = filterItems()
            let orden = { buyer: { name: 'Maxo', phone: '341-456-74-35', email: 'maxo@email.com' }, items: items, date: firebase.firestore.Timestamp.fromDate(new Date()), precioTotal }
            setOrder(orden)
            if(order != undefined){
                enviarOrden()   
            }
            else {
                alert('espera un poco')
            }
        }
    }

    function enviarOrden(params) {
        const orders = dataBase.collection('orders')
        orders.add(order).then(({ id }) => {
            alert(`tu orden de compra es: ${id}`)
        }).catch((error) => {
            console.log(error);
        })
    }

    function deleteAllElements() {
        setItem([])
    }

    return (
        <CartContext.Provider value={{ item, precioTotal, addItem, removeItem, deleteAllElements, deleteArticle, vaciarCarrito, generarOrden }}>
            {children}
        </CartContext.Provider>
    )

}
