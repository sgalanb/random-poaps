import { useState } from 'react'

export default function useMaxID() {
    const [maxID, setMaxID] = useState()
    const apiURL = `https://api.poap.xyz/top-3-events`

    fetch(apiURL)
        .then(response => response.json())
        .then(response => {
                const responseLastID = response.mostRecent.id
                setMaxID(responseLastID)
        })
        .catch((error) => {
            console.log(`Fetch error: ${error.message}`)
        })
        
    return [maxID]
}