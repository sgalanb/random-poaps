import React, { useContext } from 'react'
import {Helmet} from 'react-helmet'
import './Results.css'

import IdContext from 'context/IdContext'
import Heading2 from 'components/Heading2/Heading2'
import WinnersList from 'containers/WinnersList/WinnersList'
import ButtonPrimary from 'components/ButtonPrimary/ButtonPrimary'

export default function Winners() {
    const { setInitialState } = useContext(IdContext)
    
    return (
        <div className='winnersContainer page'>
            <Helmet>
                <title>Results | Random POAPs</title>
            </Helmet>

            <Heading2 text={'Winners:'} />
            <WinnersList />
            <div className='nav-buttons'>
                <ButtonPrimary text={'Home'} clickFunction={() => setInitialState()} />
                <ButtonPrimary text={'Raffle Again'} href={'/add-events'}/>
            </div>
        </div>
    )
}