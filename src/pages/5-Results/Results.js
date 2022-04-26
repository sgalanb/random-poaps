import React from 'react'
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary'
import Heading2 from '../../components/Heading2/Heading2'
import WinnersList from '../../containers/WinnersList/WinnersList'
import './Results.css'

export default function Winners() {
    
    return (
        <div className='WinnersContainer'>
            <Heading2 text={'Winners:'} />
            <WinnersList />
            <div className='nav-buttons'>
                <ButtonPrimary text={'Home'} />
                <ButtonPrimary text={'Raffle Again'} href={'/poaps'}/>
            </div>
        </div>
    )
}