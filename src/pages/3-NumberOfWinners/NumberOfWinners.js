import React from 'react';
import './NumberOfWinners.css'
import Heading2 from '../../components/Heading2/Heading2';
import WinnersInput from '../../components/WinnersInput/WinnersInput'
import Navbar from '../../containers/Navbar/Navbar';
import NavArrows from '../../components/NavArrows/NavArrows'
import {Helmet} from 'react-helmet'

export default function NumberOfWinners() {   
    return (
        <div className='numberOfWinnersContainer page'>
            <Helmet>
                <title>Number of winners | Random POAPs</title>
            </Helmet>

            <Navbar />
            <NavArrows backPath={'/add-events'} nextPath={'/ready'} />
            <Heading2 text={'Select the number of winners'} />
            <WinnersInput />
        </div>
    )
}