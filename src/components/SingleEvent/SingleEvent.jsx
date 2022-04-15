import React from 'react';
import './SingleEvent.css'

export default function SingleEvent() {
//    const [eventName, eventImg] = getEventInfo(id)
//    getEventInfo(id) se le pasa el id y devuelve  el nombre y la imagen del evento.
    const [eventName, eventImg] = ['Belo to the Moon', 'https://assets.poap.xyz/belo-to-the-moon-2022-logo-1646327698514.png']

    return (
        <div className='singleEventContainer'>
            <img className='eventImg' src={eventImg} alt={`Image of Poap ${eventName}`} />
            <p className='eventName'>{`${eventName}`}</p>
        </div>        
    )
}