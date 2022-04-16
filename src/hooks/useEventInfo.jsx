import { useState } from 'react'

export default function GetEventInfo(id) {
    const [eventName, setEventName] = useState('')
    const [eventImg, setEventImg] = useState('')
    const apiURL = `https://api.poap.xyz/events/id/${id}`

    fetch(apiURL)
        .then(response => response.json())
        .then(response => {
                const responseEventName = response.name
                setEventName(responseEventName)
                const responseEventImg = response.image_url
                setEventImg(responseEventImg)
        })
        .catch((error) => {
            console.log(`Fetch error: ${error.message}`)
        })
        
    return [eventName, eventImg]
}