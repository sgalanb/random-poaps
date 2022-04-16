import React, {useContext} from 'react';
import './AddedEvents.css'
import SingleEvent from '../../components/SingleEvent/SingleEvent';
import IdContext from '../../context/IdContext';

export default function AddedEvents() {
    const idContext = useContext(IdContext)
    console.log(idContext)

    const listOfIDs = [443, 215, 12490, 4214, 424, 898] 

    return (
        <div className='addedEventsGrid'>
            { listOfIDs.map(id => <SingleEvent key={id} id={id}/> )}
        </div>
    )
}