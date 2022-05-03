import React, { useState, useEffect, useContext } from 'react'
import './WinnersList.css'
import IdContext from '../../context/IdContext'
import { getTotalAddresses } from '../../services/getTotalAddresses'
import SingleWinner from '../../components/SingleWinner/SingleWinner'

export default function WinnersList() {
    const { state } = useContext(IdContext)
    const [loading, setLoading] = useState(false)
    const [winners, setWinners] = useState([])

    useEffect(() => {
        setLoading(true)
        getTotalAddresses(state.listOfIDs).then((totalAddresses) => {
            // to be transformed into a service
            let winnerArray = []
            let i = 1
            while (i <= state.winnersCount ) {
                const oneNumber = Math.floor(Math.random() * (totalAddresses.length - 1))
                const winnerAddress = totalAddresses[oneNumber]
                const alreadyWinner = winners.find(element => element == winnerAddress)
                if (alreadyWinner == undefined) {
                    winnerArray.push(winnerAddress)
                    i++
                }
            }
            setWinners(winnerArray)
            setLoading(false)
            // to be transformed into a service
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