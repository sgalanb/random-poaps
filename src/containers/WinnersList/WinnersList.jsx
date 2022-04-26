import React from 'react'
import './WinnersList.css'
import SingleWinner from '../../components/SingleWinner/SingleWinner'

export default function WinnersList(/* winnersArray */) {
    
    const winnersArray = ['0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B', 'santigalan.eth', '0x21000000A991163FE61028D3d05dD966b25cA7e9']

    return (
        <div className='winnersListContainer'>
            { winnersArray.map(address => 
            <SingleWinner key={winnersArray.indexOf(address)} number={winnersArray.indexOf(address) + 1} address={address}/> )}
        </div>
    )
}