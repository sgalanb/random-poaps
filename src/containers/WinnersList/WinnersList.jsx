import React, { useState, useEffect } from 'react'
import './WinnersList.css'
import SingleWinner from '../../components/SingleWinner/SingleWinner'
import useGetWinners from '../../hooks/useGetWinners'

export default function WinnersList() {
    const winnersArray = useGetWinners()
    const [isLoading, setIsLoading ] = useState(true)
    const [results, setResults ] = useState()

/*     const winnersArrayPlaceholder = ['0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B', 'santigalan.eth', '0x21000000A991163FE61028D3d05dD966b25cA7e9'] */

/* remove participantsArray[getWinner] from participantsArray (with .splice())  */

    useEffect(() => {
        setTimeout(() => {
            setResults(winnersArray.map(address =><SingleWinner key={winnersArray.indexOf(address)} number={winnersArray.indexOf(address) + 1} address={address}/> ))
            setTimeout(() => {            
                setIsLoading(false)
            }, 1000);
        }, 5000);
    }, [])
    

    

    return (
        <div className='winnersListContainer'>
            {isLoading ? 'Loading...' : results}
        </div>
    )
}