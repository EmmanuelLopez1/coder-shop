import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Item } from '../Item/Item'
import { CartContext } from '../../context/cartContext'
import { Boton } from '../Boton/Boton';
import { Page } from '../../pages/page'
import './Cart.scss'


export const Cart = () => {
    const { item, precioTotal } = useContext(CartContext)
    const { deleteArticle} = useContext(CartContext)
    return (
        <Page>
            <div className="carrito">
                {item.length > 0 ? item.map(item =>
                    <>
                        <div className="item-content">
                            <Item item={item.item} />
                            <div className="info">
                                <p>{`no Articulos: ${item.cantArticulos}`} </p>
                                <Boton clase="btn btnDelete" click={() => {deleteArticle(item.item.id) }}>Eliminar un item</Boton>
                            </div>

                        </div>
                    </>)

                    :
                    <>
                        <h1>No has agregado ningun articulo</h1>
                        <Link to='/'>
                            Go home
                        </Link>
                    </>}

                {precioTotal !== 0 ? <p className="precioTotal">
                    {`precioTotal: $${precioTotal}`}
                </p> : <></>}

            </div>
        </Page>
    )
}