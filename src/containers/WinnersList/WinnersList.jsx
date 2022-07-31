import React, { useState, useEffect, useContext } from 'react'
import './WinnersList.css'

import RaffleContext from 'context/RaffleContext'
import { getWinners } from 'services/getWinners'
import SingleWinner from 'components/SingleWinner/SingleWinner'
import { Spinner } from 'components/Spinner/Spinner'

export default function WinnersList() {
  const { state } = useContext(RaffleContext)
  const [loading, setLoading] = useState(true)
  const [winners, setWinners] = useState([])

  useEffect(() => {
    getWinners(state.totalAddresses, state.winnersCount).then(
      (winnersArray) => {
        setWinners(winnersArray)
        // Extra time to create 'suspense'
        setTimeout(() => {
          setLoading(false)
        }, 3500)
      }
    )
  }, [])

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className={'winnersListContainer'}>
          {winners.map((address) => (
            <SingleWinner
              key={winners.indexOf(address)}
              number={winners.indexOf(address) + 1}
              address={address}
            />
          ))}
        </div>
      )}
    </>
  )
}
