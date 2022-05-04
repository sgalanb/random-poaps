import React, { useState, useEffect, useContext } from 'react'
import './WinnersList.css'
import IdContext from '../../context/IdContext'
import { getTotalAddresses } from '../../services/getTotalAddresses'
import SingleWinner from '../../components/SingleWinner/SingleWinner'
import { getWinners } from '../../services/getWinners'

export default function WinnersList() {
    const { state } = useContext(IdContext)
    const [loading, setLoading] = useState(false)
    const [winners, setWinners] = useState([])

    useEffect(() => {
        setLoading(true)
        getTotalAddresses(state.listOfIDs)
            .then(totalAddresses => getWinners(totalAddresses, state.winnersCount))
            .then(winnersArray => {
                setWinners(winnersArray)
                setLoading(false)
            })      
    }, [])
    


    return (
        <div className='winnersListContainer' >
            {loading ? 'Loading...' : ''}
            {winners.map(address => 
                <SingleWinner key={winners.indexOf(address)} number={winners.indexOf(address) + 1} address={address}/>
            )}
        </div>
    )
}