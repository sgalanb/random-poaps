import React, { useState, useEffect } from 'react'
import './WinnersList.css'
import SingleWinner from '../../components/SingleWinner/SingleWinner'
import useGetWinners from '../../hooks/useGetWinners'

export default function WinnersList() {
    const winnersArray = useGetWinners()
    const [isLoading, setIsLoading ] = useState(true)
    const [results, setResults ] = useState()

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