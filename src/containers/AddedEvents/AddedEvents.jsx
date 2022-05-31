import React, {useContext} from 'react';
import './AddedEvents.css'

import RaffleContext from 'context/RaffleContext';
import SingleEvent from 'components/SingleEvent/SingleEvent';

export default function AddedEvents() {
    const { state } = useContext(RaffleContext)

    return (
        <div className='addedEventsGrid'>
            {state.listOfIDs.map( id => <SingleEvent key={id} id={id}/> )}
        </div>
    )
}