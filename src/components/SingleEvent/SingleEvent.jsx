import React, { useContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import './SingleEvent.css'

import RaffleContext from 'context/RaffleContext'
import { getEventInfo } from 'services/getEventInfo'

export default function SingleEvent({ id }) {
  const { removeID } = useContext(RaffleContext)
  const [loading, setLoading] = useState(true)
  const [eventData, setEventData] = useState({})

  useEffect(() => {
    getEventInfo(id)
      .then((data) => {
        setEventData(data)
        setLoading(false)
      })
      .catch((error) => {
        const errorCode = error.message
        if (errorCode == 404) {
          toast.warning(`There's no events with this ID: #${id}`)
          removeID(id)
        } else {
          toast.warning('Error with POAP API.')
          removeID(id)
        }
      })
  }, [])

  return (
    <div className="singleEventContainer">
      {loading ? (
        <>
          <div className="event-placeholder ph-image"></div>
          <div className="event-placeholder ph-name"></div>
          <div className="event-placeholder ph-name"></div>
        </>
      ) : (
        <>
          <img
            className="eventImg"
            src={eventData.image}
            onClick={() => removeID(id)}
          />
          <p className="eventName">{`${eventData.name}`}</p>
        </>
      )}
    </div>
  )
}
