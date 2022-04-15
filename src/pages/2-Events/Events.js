import React from 'react';
import './Events.css'
import Navbar from '../../containers/Navbar/Navbar';
import IdInput from '../../components/IdInput/IdInput'
import SingleEvent from '../../components/SingleEvent/SingleEvent';

export default function Events() {
    
    // hacer grid que adentro tengan el componente de single event


    return (
        <div className='eventsContainer'>
          <Navbar />
          <h2 className='addPoapsTitle'>Add POAPs to the raffle</h2>
          <IdInput />
          <SingleEvent id='44556' />
        </div>
    )
}