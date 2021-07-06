import React from 'react'

export const Boton = ({children, clase})=>{
    return(
        <button className={clase}>
            {children}
        </button>
    )
}