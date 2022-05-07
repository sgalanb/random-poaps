import React from 'react';
import './Ready.css'
import Navbar from '../../containers/Navbar/Navbar';
import NavArrows from '../../components/NavArrows/NavArrows';
import Heading2 from '../../components/Heading2/Heading2';
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary'


export default function Ready() {
    return (
        <div className='ReadyContainer page'>
            <Navbar />
            <NavArrows backPath={'/number-of-winners'} />
            <Heading2 text={'Everything’s ready!'} />
            <ButtonPrimary text={'Start Raffle'} href={'/results'}/>
        </div>
    )
}