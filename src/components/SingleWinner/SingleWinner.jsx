import React from 'react';
import './SingleWinner.css'

import { ReactComponent as CopySVG } from 'images/copy-solid.svg'

export default function SingleWinner({address, number}) {

    return (
        <div className='singleWinnerContainer'>
            <p className='winner-number'>{number}.</p>
            <a className='winner-address' href={`https://welook.io/${address}`} target="_blank" rel="noopener noreferrer">{address}</a>
            <CopySVG title='Copy to clipboard' className='winner-copy' width={'20px'} onClick={() =>{
                navigator.clipboard.writeText(address)
                }} />
        </div>        
    )
}