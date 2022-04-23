import React from 'react';
import './NumberOfWinners.css'
import Heading2 from '../../components/Heading2/Heading2';
import WinnersInput from '../../components/WinnersInput/WinnersInput'
import Navbar from '../../containers/Navbar/Navbar';
import NavArrows from '../../components/NavArrows/NavArrows';

export default function NumberOfWinners() {
    
    return (
        <div className='numberOfWinnersContainer'>
            <Navbar />
            <NavArrows backPath={'/poaps'} nextPath={'/'} />
            <Heading2 text={'Select the number of winners'} />
            <WinnersInput numberOfAddresses={1000} />
        </div>
    )
}