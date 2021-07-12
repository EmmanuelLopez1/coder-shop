import React from 'react'

import './Boton.scss'

export const Boton = ({children, clase, click})=>{
    
    return(
        <button className={clase} onClick={click}>
            {children}
        </button>
    )
}