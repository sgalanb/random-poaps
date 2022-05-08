import React, {useContext} from 'react';
import './AddedEvents.css'
import SingleEvent from '../../components/SingleEvent/SingleEvent';
import IdContext from '../../context/IdContext';

export default function AddedEvents() {
    const { state } = useContext(IdContext)

    return (
        <div className='addedEventsGrid'>
            {state.listOfIDs.map( id => <SingleEvent key={id} id={id}/> )}
        </div>
    )
}