import React from 'react';
import './Events.css'
import Navbar from '../../containers/Navbar/Navbar';
import TitleSecondary from '../../components/TitleSecondary/TitleSecondary'
import IdInput from '../../components/IdInput/IdInput'
import SingleEvent from '../../components/SingleEvent/SingleEvent';

export default function Events() {
    
    // hacer grid que adentro tengan el componente de single event


    return (
        <div className='EventsContainer'>
          <Navbar />
          <TitleSecondary text={'Add POAPs to the raffle'} />
          <IdInput />
          <SingleEvent id='44556' />
        </div>
    )
}