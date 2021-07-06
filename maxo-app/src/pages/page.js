import React from 'react'
import {Header} from '../components/Header/Header.js'

export const Page = ({children})=>{
    return(
        <div className="page">
            <Header/>
            {children}
        </div>
    )
}