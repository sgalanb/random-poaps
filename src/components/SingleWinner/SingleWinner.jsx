import React from 'react';
import './SingleWinner.css'

export default function SingleWinner({address, number}) {

    return (
        <div className='singleWinnerContainer'>
            <p className='winner-number'>{number}.</p>
            <a className='winner-address' href={`https://welook.io/${address}`} target="_blank" rel="noopener noreferrer">{address}</a>
        </div>        
    )
}