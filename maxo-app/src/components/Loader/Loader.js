import React from 'react';
import './Loader.scss'

export const Loader = () => {
    return (
        <div className="loader">
            <h4 className="loader__text">
                Loading
            </h4>
            <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}