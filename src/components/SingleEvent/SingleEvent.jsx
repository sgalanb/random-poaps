import React from 'react';
import GetEventInfo from '../../hooks/useEventInfo';
import './SingleEvent.css'

export default function SingleEvent({id}) {
    let [eventName, eventImg] = GetEventInfo(id)
    
    if (eventImg === undefined) {
        eventImg = 'https://i.imgur.com/QluOzUp.png'
    }
    if (eventName === undefined) {
        eventName = `#${id}`
    }

    return (
        <div className='singleEventContainer'>
            <img className='eventImg' src={eventImg} />
            <p className='eventName'>{`${eventName}`}</p>
        </div>        
    )
}