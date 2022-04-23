import React from 'react';
import './Events.css'
import Navbar from '../../containers/Navbar/Navbar';
import IdInput from '../../components/IdInput/IdInput'
import AddedEvents from '../../containers/AddedEvents/AddedEvents';
import Heading2 from '../../components/Heading2/Heading2';
import NavArrows from '../../components/NavArrows/NavArrows';

export default function Events() {
    return (
      <div className='eventsContainer'>
        <Navbar />
        <NavArrows nextPath={'number-of-winners'} />
        <Heading2 text={'Add POAPs to the raffle'} />
        <IdInput />
        <AddedEvents />
      </div>
    )
}