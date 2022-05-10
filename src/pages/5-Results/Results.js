import React, { useContext } from 'react'
import './Results.css'
import Heading2 from '../../components/Heading2/Heading2'
import WinnersList from '../../containers/WinnersList/WinnersList'
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary'
import IdContext from '../../context/IdContext'

export default function Winners() {
    const { setInitialState } = useContext(IdContext)
    
    return (
        <div className='winnersContainer page'>
            <Heading2 text={'Winners:'} />
            <WinnersList />
            <div className='nav-buttons'>
                <ButtonPrimary text={'Home'} clickFunction={() => setInitialState()} />
                <ButtonPrimary text={'Raffle Again'} href={'/poaps'}/>
            </div>
        </div>
    )
}