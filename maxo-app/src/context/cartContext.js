import React, { createContext, useState, useEffect } from 'react'
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [item, setItem] = useState([])
    const [precioTotal, setPrecioTotal] = useState()

    useEffect(() => {
        getPrecioTotal()
        // console.log(item);
    }, [item])

    const deleteArticle = (id) => {
        const items = item.filter(baby => {
            if (baby.item.id != id) {
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

    const getPrecioTotal = () => {
        let total = 0

        item.map(item => {
            total += parseInt(item.item.price[0].price) * item.cantArticulos
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

    function deleteAllElements() {
        setItem([])
    }

    return (
        <CartContext.Provider value={{ item, precioTotal, addItem, removeItem, deleteAllElements, deleteArticle }}>
            {children}
        </CartContext.Provider>
    )

}
