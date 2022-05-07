import React, { useState, useEffect, useContext } from 'react'
import './WinnersList.css'
import IdContext from '../../context/IdContext'
import SingleWinner from '../../components/SingleWinner/SingleWinner'
import { getWinners } from '../../services/getWinners'
import { Spinner } from '../../components/Spinner/Spinner'

export default function WinnersList() {
    const { state } = useContext(IdContext)
    const [loading, setLoading] = useState(true)
    const [winners, setWinners] = useState([])

    useEffect(() => {
        getWinners(state.totalAddresses, state.winnersCount)
            .then(winnersArray => {
                setWinners(winnersArray)
                // Extra time to create 'suspense'
                setTimeout(() => {
                    setLoading(false)
                }, 3500)
            })      
    }, [])

    return (
        <div className='winnersListContainer' >
            {loading 
                ? (<Spinner />)  
                : (
                    winners.map(address =>
                    <SingleWinner key={winners.indexOf(address)} number={winners.indexOf(address) + 1} address={address}/>)
                )
            }
        </div>
    )
}