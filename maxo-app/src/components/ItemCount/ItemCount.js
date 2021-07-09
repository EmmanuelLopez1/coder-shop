import React, { useState } from 'react'
import './ItemCount.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Boton } from '../Boton/Boton'


export const ItemCount = ({ item, stock, initial, onAdd, eliminar, removeAllElements }) => {

    //PASAR LA LOGICA AL PADRE DE ESTE COMPONENTE
    const [stockInicial, setStock] = useState(parseInt(stock))
    const [cantArticulos, setArticle] = useState(parseInt(initial))

    function aumentarArticulos() {
        if (stockInicial > 0) {
            if (cantArticulos === 1) {
                setStock(stockInicial - 1)
            }

            setArticle(cantArticulos + 1)
            setStock(prevCounter => prevCounter - 1)
        }
        else {
            alert('no hay stock disponible')
        }

    }

    function disminuirArticulos() {
        if (cantArticulos > 1) {
            if (cantArticulos === 2) {
                setStock(stockInicial + 1)
            }

            setStock(prevCounter => prevCounter + 1)
            setArticle(cantArticulos - 1)
        }
    }

    function Compra() {
        onAdd({ item, cantArticulos })
    }

    function Eliminar() {
        eliminar(item.id)
    }

    return (
        <div className="item-count">
            <div className="item-count-main">
                <div className="product-count">
                    <FontAwesomeIcon icon={faMinus} className="product-count__icon" onClick={disminuirArticulos} />
                    <div className="product-count__number">
                        {cantArticulos}
                    </div>
                    <FontAwesomeIcon icon={faPlus} className="product-count__icon" onClick={aumentarArticulos} />
                </div>
            </div>
            <Boton click={Compra} clase={`btn btnAdd`} disabled={stockInicial === 0 && cantArticulos === 0 ? true : false}>
                Agregar
            </Boton>
    
            <Boton click={Eliminar} clase={`btn btnDelete`}>
                Eliminar
            </Boton>

            <Boton click={removeAllElements} clase={`btn btnDelete`}>
                Eliminar elementos
            </Boton>
        </div>
    )
}