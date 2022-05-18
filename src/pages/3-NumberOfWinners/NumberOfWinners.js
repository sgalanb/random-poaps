import React from 'react';
import {Helmet} from 'react-helmet'
import './NumberOfWinners.css'

import Navbar from 'containers/Navbar/Navbar';
import Heading2 from 'components/Heading2/Heading2';
import WinnersInput from 'components/WinnersInput/WinnersInput'
import NavArrows from 'components/NavArrows/NavArrows'

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