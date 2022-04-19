import React, { useContext } from 'react';
import './SingleEvent.css'
import GetEventInfo from '../../hooks/useEventInfo';
import IdContext from '../../context/IdContext';

export default function SingleEvent({id}) {
    const {removeID} = useContext(IdContext)
    let [eventName, eventImg] = GetEventInfo(id)
    
    if (eventImg === undefined) {
        eventImg = 'https://i.imgur.com/QluOzUp.png'
    }
    if (eventName === undefined) {
        eventName = `#${id}`
    }

    return (
        <div className='singleEventContainer'>
            <img className='eventImg' src={eventImg} onClick={() => removeID(id)} />
            <p className='eventName'>{`${eventName}`}</p>
        </div>        
    )
}