import React from 'react';
import './CardWidget.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'

export const CardWidget = ()=>{
    
    return(
        <FontAwesomeIcon icon={faCartPlus} className="cartItems"/>
    )
}