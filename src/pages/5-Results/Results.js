import React from 'react'
import './Results.css'
import Heading2 from '../../components/Heading2/Heading2'
import WinnersList from '../../containers/WinnersList/WinnersList'
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary'

export default function Winners() {
    
    return (
        <div className='WinnersContainer page'>
            <Heading2 text={'Winners:'} />
            <WinnersList />
            <div className='nav-buttons'>
                <ButtonPrimary text={'Home'} />
                <ButtonPrimary text={'Raffle Again'} href={'/poaps'}/>
            </div>
        </div>
    )
}