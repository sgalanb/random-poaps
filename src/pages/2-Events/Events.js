import React from 'react';
import './Events.css'
import Navbar from '../../containers/Navbar/Navbar';
import IdInput from '../../components/IdInput/IdInput'
import AddedEvents from '../../containers/AddedEvents/AddedEvents';
import IdContext from '../../context/IdContext';

export default function Events() {
    return (
      <IdContext.Provider value={[]}>
        <div className='eventsContainer'>
          <Navbar />
          <h2 className='addPoapsTitle'>Add POAPs to the raffle</h2>
          <IdInput />
          <AddedEvents />
        </div>
      </IdContext.Provider>
    )
}