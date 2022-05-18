import React, {useContext} from 'react';
import './AddedEvents.css'

import IdContext from 'context/IdContext';
import SingleEvent from 'components/SingleEvent/SingleEvent';

export default function AddedEvents() {
    const { state } = useContext(IdContext)

    return (
        <div className='addedEventsGrid'>
            {state.listOfIDs.map( id => <SingleEvent key={id} id={id}/> )}
        </div>
    )
}