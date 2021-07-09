import React, { createContext, useState, useEffect } from 'react'
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [item, setItem] = useState([])
    
    useEffect(() => {
        console.log(item);
    }, [item])

    const addItem = (newItem) => {
        const id = newItem.item.id
        const noArt = newItem.cantArticulos
        if(isInCart(id)){
            updateCart(id, noArt)
        }
        else{
            setItem(item.concat(newItem));
        }
    }


    function isInCart(id) {
        const validacion = item.findIndex(item=> item.item.id === id)
        if(validacion != -1){
            return true
        }
        else{
            return false
        }
    }

    function updateCart(id, noArt) {
        const newItems = item.map(item=>{
            let artActuales = item.cantArticulos
            if(item.item.id === id){
                return{
                    ...item, 
                    cantArticulos: artActuales + noArt
                }
            }
            else{
                return{
                    ...item
                }
            }
        })
        setItem(newItems)
    }

    function removeItem(id) {
        console.log(id);
        const items = item.filter(item => item.item.id != id)
        setItem(items)
    }

    function deleteAllElements() {
        setItem([])
    }

    return (
        <CartContext.Provider value={{ addItem, removeItem, deleteAllElements }}>
            {children}
        </CartContext.Provider>
    )

}
